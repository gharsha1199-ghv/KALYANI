document.addEventListener("DOMContentLoaded", () => {
    
    // --- State ---
    let currentSceneId = 'scene-opening';
    const bgMusic = document.getElementById('bg-music');
    let isMusicPlaying = false;

    // --- Particles Background ---
    function createParticles() {
        const container = document.getElementById('particles-bg');
        if (!container) return;
        
        // Weighted for more hearts
        const particleTypes = ['heart-particle', 'heart-particle', 'heart-particle', 'sparkle-particle', 'light-orb'];
        const heartSymbols = ['♥', '♡', ''];
        const sparkleSymbols = ['✦', '✧', '', '⋆'];
        
        const heartColors = [
            { color: '#ff2a75', shadow: '#ff2a75' }, // Pink
            { color: '#4da6ff', shadow: '#4da6ff' }, // Blue
            { color: '#ff80bf', shadow: '#ff80bf' }, // Light Pink
            { color: '#80bfff', shadow: '#80bfff' }, // Light Blue
            { color: '#ffffff', shadow: '#ff2a75' }  // White with pink shadow
        ];

        for (let i = 0; i < 60; i++) {
            const el = document.createElement('div');
            const type = particleTypes[Math.floor(Math.random() * particleTypes.length)];
            el.classList.add('particle-item', type);
            
            if (type === 'heart-particle') {
                el.innerText = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];
                
                // Random size (0.8rem to 2.2rem)
                const size = Math.random() * 1.4 + 0.8;
                el.style.fontSize = size + 'rem';
                
                // Random color
                const colorObj = heartColors[Math.floor(Math.random() * heartColors.length)];
                el.style.color = colorObj.color;
                el.style.textShadow = `0 0 10px ${colorObj.shadow}`;
                
            } else if (type === 'sparkle-particle') {
                el.innerText = sparkleSymbols[Math.floor(Math.random() * sparkleSymbols.length)];
            }

            // Random positioning across the screen
            el.style.left = Math.random() * 100 + 'vw';
            el.style.top = Math.random() * 100 + 'vh';
            
            // Random animation duration and delay
            const duration = Math.random() * 4 + 3; // 3s to 7s
            el.style.animationDuration = duration + 's';
            
            const delay = Math.random() * 5;
            el.style.animationDelay = delay + 's';
            
            container.appendChild(el);
        }
    }
    
    createParticles();

    // --- Navigation ---
    document.getElementById('btn-start').addEventListener('click', () => {
        if (!isMusicPlaying) {
            bgMusic.play().catch(e => console.log("Audio play prevented"));
            isMusicPlaying = true;
        }
        
        document.getElementById('scene-opening').classList.remove('active');
        document.getElementById('scene-cake').classList.add('active');
        
        const particlesBg = document.getElementById('particles-bg');
        if (particlesBg) particlesBg.classList.add('hidden');
    });

    document.getElementById('btn-back').addEventListener('click', () => {
        document.getElementById('scene-cake').classList.remove('active');
        document.getElementById('scene-opening').classList.add('active');
        
        const particlesBg = document.getElementById('particles-bg');
        if (particlesBg) particlesBg.classList.remove('hidden');
    });

    // --- Cake Cutting Logic ---
    const knife = document.getElementById('realistic-knife');
    const cakeWrapper = document.getElementById('cake-wrapper');
    const cakePiecesContainer = document.getElementById('cake-pieces');
    let cakeCut = false;

    initKnifeDrag();

    function initKnifeDrag() {
        let isDragging = false;
        let startX, startY;
        let initialLeft, initialTop;
        let cutsMade = 0;

        const onPointerDown = (e) => {
            if (cakeCut) return;
            isDragging = true;
            knife.setPointerCapture(e.pointerId);
            startX = e.clientX;
            startY = e.clientY;
            
            const style = window.getComputedStyle(knife);
            const matrix = new DOMMatrix(style.transform === 'none' ? undefined : style.transform);
            initialLeft = matrix.m41;
            initialTop = matrix.m42;
            
            // For calculating sawing motion
            knife.dataset.lastX = e.clientX;
            knife.dataset.lastY = e.clientY;
        };

        const onPointerMove = (e) => {
            if (!isDragging || cakeCut) return;
            
            const dx = e.clientX - startX;
            const dy = e.clientY - startY;
            knife.style.transform = `translate(${initialLeft + dx}px, ${initialTop + dy}px)`;

            const knifeRect = knife.getBoundingClientRect();
            const cakeRect = cakeWrapper.getBoundingClientRect();

            let lastX = parseFloat(knife.dataset.lastX) || e.clientX;
            let lastY = parseFloat(knife.dataset.lastY) || e.clientY;
            let dist = Math.hypot(e.clientX - lastX, e.clientY - lastY);
            
            knife.dataset.lastX = e.clientX;
            knife.dataset.lastY = e.clientY;

            if (isIntersecting(knifeRect, cakeRect)) {
                if (dist > 2) {
                    cutsMade++;
                    if (cutsMade > 15) {
                        finishCakeCut();
                    }
                }
            }
        };

        const onPointerUp = (e) => {
            isDragging = false;
            knife.releasePointerCapture(e.pointerId);
            if (!cakeCut) {
                knife.style.transform = `translate(0px, 0px)`;
                cutsMade = 0;
            }
        };

        knife.addEventListener('pointerdown', onPointerDown);
        knife.addEventListener('pointermove', onPointerMove);
        knife.addEventListener('pointerup', onPointerUp);
        knife.addEventListener('pointercancel', onPointerUp);
    }

    function finishCakeCut() {
        cakeCut = true;
        cakeWrapper.classList.add('hidden');
        cakePiecesContainer.classList.remove('hidden');
        
        // Add separation animation
        setTimeout(() => {
            for(let i=1; i<=8; i++) {
                document.getElementById(`piece-${i}`).classList.add('separated');
            }
        }, 50);

        // Reset knife position and hide it
        knife.style.transform = `translate(0px, 0px)`;
        setTimeout(() => {
            knife.closest('.tray-background').style.opacity = '0.3';
        }, 300);

        initPiecesDrag();
    }

    // --- Dragging Pieces ---
    const familyTargets = ['target-mother', 'target-father', 'target-brother'];
    let piecesDelivered = 0;

    function initPiecesDrag() {
        for(let i=1; i<=8; i++) {
            const piece = document.getElementById(`piece-${i}`);
            initPieceDrag(piece);
        }
    }

    function initPieceDrag(piece) {
        let isDragging = false;
        let startX, startY, initialLeft, initialTop;

        const onPointerDown = (e) => {
            if(piece.classList.contains('delivered')) return;
            isDragging = true;
            piece.style.zIndex = 100;
            piece.setPointerCapture(e.pointerId);
            startX = e.clientX;
            startY = e.clientY;
            
            const style = window.getComputedStyle(piece);
            const matrix = new DOMMatrix(style.transform === 'none' ? undefined : style.transform);
            initialLeft = matrix.m41;
            initialTop = matrix.m42;
        };

        const onPointerMove = (e) => {
            if (!isDragging) return;
            const dx = e.clientX - startX;
            const dy = e.clientY - startY;
            piece.style.transform = `translate(${initialLeft + dx}px, ${initialTop + dy}px)`;
        };

        const onPointerUp = (e) => {
            if (!isDragging) return;
            isDragging = false;
            piece.style.zIndex = '';
            piece.releasePointerCapture(e.pointerId);

            const pieceRect = piece.getBoundingClientRect();
            let droppedOnTarget = null;

            familyTargets.forEach(targetId => {
                const targetEl = document.getElementById(targetId);
                if (!targetEl.classList.contains('completed')) {
                    const targetRect = targetEl.getBoundingClientRect();
                    if (isIntersecting(pieceRect, targetRect)) {
                        droppedOnTarget = targetId;
                    }
                }
            });

            if (droppedOnTarget) {
                piece.classList.add('delivered', 'hidden');
                const targetEl = document.getElementById(droppedOnTarget);
                targetEl.classList.add('completed');
                piecesDelivered++;

                if (piecesDelivered >= 3) {
                    setTimeout(() => {
                        document.getElementById('success-overlay').classList.remove('hidden');
                    }, 500);
                }
            } else {
                piece.style.transform = `translate(0px, 0px)`;
            }
        };

        piece.addEventListener('pointerdown', onPointerDown);
        piece.addEventListener('pointermove', onPointerMove);
        piece.addEventListener('pointerup', onPointerUp);
        piece.addEventListener('pointercancel', onPointerUp);
    }

    function isIntersecting(r1, r2) {
        return !(r2.left > r1.right || r2.right < r1.left || r2.top > r1.bottom || r2.bottom < r1.top);
    }

    // --- Replay ---
    document.getElementById('btn-replay').addEventListener('click', () => {
        document.getElementById('success-overlay').classList.add('hidden');
        
        // Reset Cake
        cakeCut = false;
        cakeWrapper.classList.remove('hidden');
        cakePiecesContainer.classList.add('hidden');
        
        for(let i=1; i<=8; i++) {
            const piece = document.getElementById(`piece-${i}`);
            piece.classList.remove('delivered', 'hidden', 'separated');
            piece.style.transform = '';
        }
        
        knife.closest('.tray-background').style.opacity = '1';

        // Reset Family
        piecesDelivered = 0;
        familyTargets.forEach(targetId => {
            document.getElementById(targetId).classList.remove('completed');
        });
        
        document.getElementById('btn-back').click();
    });

});
