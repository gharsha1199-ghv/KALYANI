// ==========================================
// EDIT YOUR GALLERY TEXTS HERE
// ==========================================
// Each line corresponds to an image in the gallery (from image-1.jpg to image-34.jpg).
// You can change the text inside the quotes.
const galleryMemoryTexts = {
    1: "Snap first Eat later",
    2: "The first time I saw you in a saree, I thought you looked so beautiful. I even searched through all of Kavitha’s Instagram highlights just to find this photo. ❤️",
    4:"Just the shadow of you and your friend Kavitha.",
    5: "You were eating pani puri near the bus stand, but you were in such a hurry because your bus was about to arrive.",
    6: "A cute little moment while playing Cricket",
    7: "A cute little moment while playing Volleyball",
    8: "",
    9: "At the beginning, Ramesh Sir selected a few members to be part of a small video.",
    10: "",
    11: "",
    12: "A little moment from our online class.",
    13: "",
    14: "",
    15: "",
    16: "A fun moment from Ramesh Sir’s class while we were playing the balloon game",
    17: "Shanmukh valla room lo panipuri prepare chesi class ki techina roju",
    18: "edhi nuvu swarnagiri poinappudu ankunta ,naku ne whatsapp DP chuse luck kuda ledhu vere valla phone nunchi SS tesi pampinchukunna",
    19: "Ne name kanapadina photo teskunta nenu",
    20: "nuvvu chadvina inter college ,akkadiki velli nenu photos degina,night nidra rani appudu,ne colleges ki ,CMR bus stop ki,Domalguda antha tergutha",
    21: "Nuvvu daily insta suggestion lo vastav kani follow kotalenu ,nuvu malla thidtav ani",
    22: "nuvvu na linkdin profile chusinapuudu",
    23: "Final event ki oka roju munndhu ,work chesindhi em ledu kani photo kosam acting,venugopal ki nene pampina velli photo teyu ani",
    24: "'K' letter phone charm ,na phone ki petkunna",
    25: "monna freshworks ki mundhu oka roju prepare kavadaniki edunet ki ramannaru ,akkada ne place kali unde",
    26: "",
    27: "aditya sir nennu screen medha answer solve cheyamannaru neku emo radhu,nen venka nundhi answer chepina kuda nuvu correct ga cheyalevu",
    28: "ACT final Event lo First place lo gelchinaru kada",
    29: "First time na post ki like kotinav Linkdin lo",
    30: "",
    31: "",
    32: "",
    33: "",
    34: "",
    35: "First photo ACT lo nedhi counciling ki vachinapudu ne friend tho",
    36: "",
    37: "",
    38: "",
    39: "",
    40: "",
    41: "",
    42: "",
    43: "",
    44: "",
    45: "",
    46: "",
    47: "",
    48: "",
    49: "",
    50: "First event GD lo participate chesav",
    51: "",
    52: "",
    53: "",
    54: "",
    55: "",
    56: "Starting lo nuvu portfolio creat chesav",
    57: "",
    58: "",
    59: "",
    60: "",
    61: "",
    62: "",
    63: "",
    64: "",
    65: "",
    66: "",
    67: "",
    68: "",
    69: "",
    70: "",
    71: "",
    72: "",
    73: "",
    74: "",
    75: "",
    76: "",
    77: "",
    78: "",
    79: "",
    80: "",
    81: "",
    82: "",
    83: "",
    84: "",
    85: "",
    86: "",
    87: "",
    88: "",
    89: "",
    90: "",
    91: "",
    92: "",
    93: "",
    94: "",
    95: "",
    96: "",
    97: "",
    98: "",
    99: "",
    100: "",
    101: "",
    102: "",
    103: "",
    104: "",
    105: "",
    106: "",
    107: "",
    108: "",
    109: "",
    110: "",
    111: "",
    112: "",
    113: "",
    114: "",
    115: "",
    116: "",
    117: "",
    118: "",
    119: "",
    120: "",
    121: "",
    122: "",
    123: "",
    124: "",
    125: "",
    126: "",
    127: "",
    128: "",
    129: "",
    130: "",
    131: "",
    132: "",
    133: "",
    134: "",
    135: "",
    136: "",
    137: "",
    138: "",
    139: "",
    140: "",
    141: "",
    142: "",
    143: "",
    144: "",
    145: "",
    146: "",
    147: "",
    148: "",
    149: "",
    150: "",
    151: "",
    152: "",
    153: "",
    154: "",
    155: "",
    156: "",
    157: "",
    158: "",
    159: "",
    160: "E photo valla ne neku kopam vachindhi nannu block lo petinav",
    161: "",
    162: "",
    163: "",
    164: "",
    165: "",
    166: "",
    167: "",
    168: "",
    169: "",
    170: "",
    171: "",
    172: "",
    173: "",
    174: "",
    175: "",
    176: "",
    177: "",
    178: "",
    179: "",
    180: "",
    181: "",
    182: "",
    183: "",
    184: "",
    185: "",
    186: "",
    187: "",
    188: "",
    189: "",
    190: "",
    191: "",
    192: "",
    193: "",
    194: "",
    195: "",
    196: "",
    197: "",
    198: "",
    199: "",
    200: "",
    201: "",
    202: "",
    203: "",
    204: "",
    205: "",
    206: "",
    207: "",
    208: "",
    209: "",
    210: "",
    211: "",
    212: "I save the photos if you are in the frame.",
    213: "",
    214: "",
    215: "",
    216: "",
    217: "",
    218: "",
    219: "",
    220: "",
    221: "",
    222: "",
    223: "",
    224: "",
    225: "",
    226: "",
    227: "",
    228: "",
    229: "",
    230: "",
    231: "First time online class lo,holidays lo neku chudakunda undala ankunna , online class petti manchi pani chesinru",
    232: "",
    233: "",
    234: "",
    235: "",
    236: "",
    237: "",
    238: "",
    239: "",
    240: "neku time ledhu ani ne AI project nannu cheyamanav",
    241: "",
    242: "",
    243: "",
    244: "",
    245: "Once lo photo petinav bus lo nunchi,nen vere mobile nunchi photo teskunnna",
    246: "",
    247: "",
    248: "",
    249: "",
    250: "",
    251: "",
    252: "",
    253: "",
    254: "",
    255: "",
    256: "nuvu rasina exam paper photos kuda unnai na degara",
    257: "",
    258: "",
    259: "",
    260: "",
    261: "",
    262: "",
    263: "",
    264: "",
    265: "",
    266: "",
    267: "",
    268: "",
    269: "",
    270: "",
    271: "",
    272: "",
    273: "",
    274: "",
    275: "",
    276: "",
    277: "nennu spects lekunda first time chusa",
    278: "",
    279: "",
    280: "",
    281: "",
    282: "",
    283: "",
    284: "",
    285: "Ne snap ID",
    286: "",
    287: "",
    288: "",
    289: "",
    290: "",
    291: "",
    292: "",
    293: "",
    294: "",
    295: "",
    296: "",
    297: "",
    298: "",
    299: "",
    300: "",
    301: "",
    302: "",
    303: "",
    304: "",
    305: "",
    306: "",
    307: "",
    308: "",
    309: "",
    310: "",
    311: "",
    312: "",
    313: "",
    314: "Whenever I see your ID, I end up taking a screenshot.",
    315: "",
    316: "",
    317: "",
    318: "",
    319: "",
    320: "",
    321: "",
    322: "",
    323: "",
    324: "",
    325: "",
    326: "",
    327: "",
    328: "",
    329: "",
    330: "",
    331: "",
    332: "",
    333: "",
    334: "",
    335: "",
    336: "",
    337: "",
    338: "manam appudu late he class kii",
    339: "",
    340: "",
    341: "",
    342: "ne eyes tho video ches iyte ela replay echav",
    343: "",
    344: "",
    345: "",
    346: "",
    347: "",
    348: "",
    349: "",
    350: "",
    351: "",
    352: "",
    353: "",
    354: "",
    355: "",
    356: "",
    357: "",
    358: "PTM roju me friend tho vachav",
    359: "",
    360: "",
    361: "",
    362: "",
    363: "",
    364: "",
    365: "",
    366: "",
    367: "",
    368: "",
    369: "",
    370: "",
    371: "",
    372: "",
    373: "",
    374: "",
    375: "",
    376: "",
    377: "",
    378: "",
    379: "",
    380: "",
    381: "",
    382: "",
    383: "",
    384: "",
    385: "",
    386: "",
    387: "",
    388: "",
    389: "",
    390: "",
    391: "",
    392: "",
    393: "",
    394: "",
    395: "",
    396: "",
    397: "",
    398: "",
    399: "",
    400: "",
    401: "Even when I see you in my notifications, I end up taking a screenshot.",
    402: "",
    403: "Ma Mamaya kuturlu ,spiderman, ma akka , naa good friends appudu ne topic tesi nannu gelkutaru",
    404: "",
    405: "",
    406: "",
    407: "",
    408: "",
    409: "",
    410: "",
    411: "",
    412: "",
    413: "",
    414: "",
    415: "",
    416: "",
    417: "Aaa kothi kanna nuvve agam akkuva chestav emo",
    418: "",
    419: "",
    420: "",
    421: "",
    422: "",
    423: "",
    424: "",
    425: "",
    426: "",
    427: "",
    428: "",
    429: "",
    430: "",
    431: "",
    432: "",
    433: "",
    434: "",
    435: "",
    436: "",
    437: "",
    438: "",
    439: "",
    440: "",
    441: "",
    442: "",
    443: "",
    444: "",
    445: "",
    446: "",
    447: "",
    448: "",
    449: "",
    450: "",
    451: "",
    452: "",
    453: "",
    454: "",
    455: "",
    456: "naku nuv pampina reel",
    457: "",
    458: "",
    459: "",
    460: "",
    461: "",
    462: "",
    463: "",
    464: "",
    465: "",
    466: "",
    467: "",
    468: "",
    469: "starting lo nedegara matladudham ani aste ,asl dekalev",
    470: "",
    471: "",
    472: "",
    473: "",
    474: "",
    475: "",
    476: "",
    477: "",
    478: "",
    479: "",
    480: "",
    481: "",
    482: "",
    483: "",
    484: "",
    485: "",
    486: "",
    487: "",
    488: "",
    489: "",
    490: "",
    491: "",
    492: "",
    493: "",
    494: "",
    495: "",
    496: "",
    497: "",
    498: "",
    499: "",
    500: "",


    // Example: Add text for specific images by their number
    // 1: "This is a beautiful memory!",
    // 42: "Such a fun day out.",
    // 36: "A little cricket, a lot of memories. 🏏💗"

};
// ==========================================



document.addEventListener("DOMContentLoaded", () => {
    
    // --- State ---
    let currentSceneId = 'scene-opening';
    const bgMusic = document.getElementById('bg-music');
    let isMusicPlaying = false;
    
    // --- Intro Overlay Sequence ---
    const introOverlay = document.getElementById('birthday-intro');
    const mainPage = document.getElementById('birthday-page');
    const countdownEl = document.getElementById('intro-countdown');
    const balloonsContainer = document.getElementById('intro-balloons-container');
    const particlesContainer = document.getElementById('intro-particles-container');

    if (introOverlay && mainPage) {
        const startScreen = document.getElementById('initial-start-screen');
        const btnInitialStart = document.getElementById('btn-initial-start');

        if (btnInitialStart) {
            btnInitialStart.addEventListener('click', () => {
                startScreen.style.display = 'none';
                countdownEl.style.display = 'block';
                
                // Initialize audio context on first click to unlock audio
                try {
                    const ctx = new (window.AudioContext || window.webkitAudioContext)();
                    ctx.resume();
                } catch(e) {}

                // Run sequence
                setTimeout(() => runCountdown(3), 500);
            });
        } else {
            setTimeout(() => runCountdown(3), 500);
        }

        function runCountdown(num) {
            if (num > 0) {
                countdownEl.innerText = num;
                countdownEl.classList.remove('animate');
                // trigger reflow
                void countdownEl.offsetWidth;
                countdownEl.classList.add('animate');
                playTickSound();
                setTimeout(() => runCountdown(num - 1), 1000);
            } else {
                countdownEl.style.display = 'none';
                balloonsContainer.classList.remove('hidden');
                setTimeout(() => balloonsContainer.classList.add('float-up'), 50);
            }
        }

        // Balloon pop logic
        balloonsContainer.addEventListener('pointerdown', (e) => {
            if (balloonsContainer.classList.contains('popped')) return;
            
            balloonsContainer.classList.add('popped');
            
            // Blast each balloon from its exact location!
            const allBalloons = document.querySelectorAll('.intro-balloon-wrapper');
            allBalloons.forEach(b => {
                const rect = b.getBoundingClientRect();
                const x = rect.left + rect.width / 2;
                const y = rect.top + rect.height / 2;
                createPopParticles(x, y); // emits 100 particles per balloon!
            });
            
            playPopSound(); // Play blast sound

            // Pop effect delay before revealing site
            setTimeout(() => {
                introOverlay.classList.add('hidden');
                mainPage.classList.add('visible');
                
                // Try to play music if user interacted
                if (!isMusicPlaying) {
                    bgMusic.play().then(() => {
                        isMusicPlaying = true;
                    }).catch(e => console.log("Audio play prevented on intro click"));
                }
            }, 600);
        });

        function createPopParticles(x, y) {
            const colors = ['#ff4d6d', '#ffb5a7', '#ffbe0b', '#8338ec', '#3a86ff', '#06d6a0', '#ff006e', '#ffd166', '#ffffff'];
            const shapes = ['square', 'circle', 'heart', 'sparkle', 'square', 'circle']; // more paper than hearts
            const screenDiag = Math.sqrt(window.innerWidth ** 2 + window.innerHeight ** 2);
            
            for (let i = 0; i < 100; i++) {
                const p = document.createElement('div');
                const shape = shapes[Math.floor(Math.random() * shapes.length)];
                const color = colors[Math.floor(Math.random() * colors.length)];
                
                p.className = 'intro-particle ' + shape;
                
                if (shape === 'heart') {
                    p.innerText = Math.random() > 0.5 ? '♥' : '♡';
                    p.style.color = color;
                    p.style.background = 'transparent';
                } else if (shape === 'sparkle') {
                    p.innerText = Math.random() > 0.5 ? '✦' : '✧';
                    p.style.color = color;
                    p.style.background = 'transparent';
                    p.style.fontSize = (Math.random() * 1.5 + 1) + 'rem';
                } else {
                    const size = Math.random() * 15 + 6;
                    p.style.width = size + 'px';
                    p.style.height = size + 'px';
                    p.style.background = color;
                    if (shape === 'circle') {
                        p.style.borderRadius = '50%';
                    }
                }

                p.style.left = x + 'px';
                p.style.top = y + 'px';

                const angle = Math.random() * Math.PI * 2;
                // Burst radius
                const velocity = (Math.random() * 0.8 + 0.2) * (screenDiag / 2.5);
                
                // Peak of the burst
                const tx = Math.cos(angle) * velocity;
                const ty = Math.sin(angle) * velocity - (Math.random() * 200); // bias upwards slightly
                
                // Wind drift while falling
                const drift = (Math.random() - 0.5) * 400;

                p.style.setProperty('--tx', tx + 'px');
                p.style.setProperty('--ty', ty + 'px');
                p.style.setProperty('--drift', drift + 'px');
                
                // Longer duration for falling effect
                const duration = Math.random() * 3 + 3; // 3 to 6 seconds!
                p.style.animationDuration = duration + 's';

                particlesContainer.appendChild(p);
            }
        }


        function playTickSound() {
            try {
                const AudioContext = window.AudioContext || window.webkitAudioContext;
                const ctx = new AudioContext();
                const osc = ctx.createOscillator();
                const gain = ctx.createGain();
                
                osc.connect(gain);
                gain.connect(ctx.destination);
                
                osc.type = 'sine';
                osc.frequency.setValueAtTime(800, ctx.currentTime);
                
                gain.gain.setValueAtTime(0.2, ctx.currentTime);
                gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.1);
                
                osc.start();
                osc.stop(ctx.currentTime + 0.1);
            } catch(e) {
                // Silently fail if browser blocks audio before user interaction
            }
        }

        function playPopSound() {
            try {
                const AudioContext = window.AudioContext || window.webkitAudioContext;
                const ctx = new AudioContext();
                const osc = ctx.createOscillator();
                const gain = ctx.createGain();
                
                osc.connect(gain);
                gain.connect(ctx.destination);
                
                osc.type = 'square';
                osc.frequency.setValueAtTime(150, ctx.currentTime);
                osc.frequency.exponentialRampToValueAtTime(40, ctx.currentTime + 0.15);
                
                gain.gain.setValueAtTime(1, ctx.currentTime);
                gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.15);
                
                osc.start();
                osc.stop(ctx.currentTime + 0.2);
            } catch(e) {
                console.log("Audio error:", e);
            }
        }
    }


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

    const btnBack = document.getElementById('btn-back');
    if (btnBack) {
        btnBack.addEventListener('click', () => {
            document.getElementById('scene-cake').classList.remove('active');
            document.getElementById('scene-opening').classList.add('active');
            
            const particlesBg = document.getElementById('particles-bg');
            if (particlesBg) particlesBg.classList.remove('hidden');
        });
    }

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
        
        const b = document.getElementById('btn-back');
        if (b) b.click();
    });

    // --- Gallery Navigation ---
    const btnGallery = document.getElementById('btn-gallery');
    const sceneGallery = document.getElementById('scene-gallery');
    const sceneCake = document.getElementById('scene-cake');
    const btnBackGallery = document.getElementById('btn-back-gallery');
    const galleryContainer = document.getElementById('gallery-container');

    btnGallery.addEventListener('click', () => {
        document.getElementById('success-overlay').classList.add('hidden');
        sceneCake.classList.remove('active');
        sceneGallery.classList.add('active');
        
        // Pause music when entering gallery
        if (bgMusic) {
            bgMusic.pause();
            isMusicPlaying = false;
        }
        
        populateGallery();
    });

    if (btnBackGallery) {
        btnBackGallery.addEventListener('click', () => {
            sceneGallery.classList.remove('active');
            sceneCake.classList.add('active');
        });
    }

    // --- Final Surprise Navigation ---
    const btnFinalSurprise = document.getElementById('btn-final-surprise');
    const sceneFinal = document.getElementById('scene-final');
    const btnBackToGallery = document.getElementById('btn-back-to-gallery');

    if (btnFinalSurprise && sceneFinal) {
        btnFinalSurprise.addEventListener('click', () => {
            sceneGallery.classList.remove('active');
            sceneFinal.classList.add('active');
            
            // Try to autoplay the video when entering the final scene
            const finalVideo = document.getElementById('final-video');
            if (finalVideo) {
                finalVideo.play().catch(e => console.log("Video autoplay prevented", e));
            }
        });
    }

    if (btnBackToGallery && sceneFinal) {
        btnBackToGallery.addEventListener('click', () => {
            sceneFinal.classList.remove('active');
            sceneGallery.classList.add('active');
            
            // Pause the video when leaving the scene
            const finalVideo = document.getElementById('final-video');
            if (finalVideo) {
                finalVideo.pause();
            }
        });
    }

    let galleryPopulated = false;

    function populateGallery() {
        if (galleryPopulated) return;
        galleryPopulated = true;
        
        const totalImages = 471;
        
        // Create two sub-containers
        const gridContainer = document.createElement('div');
        gridContainer.className = 'gallery-grid';
        
        const masonryContainer = document.createElement('div');
        masonryContainer.className = 'gallery-masonry';
        
        galleryContainer.appendChild(gridContainer);
        galleryContainer.appendChild(masonryContainer);
        
        // Pass 1: Images with captions (Grid layout)
        for (let i = 1; i <= totalImages; i++) {
            if (galleryMemoryTexts[i]) {
                createGalleryItem(i, gridContainer);
            }
        }
        
        // Pass 2: Images without captions (Masonry layout)
        for (let i = 1; i <= totalImages; i++) {
            if (!galleryMemoryTexts[i]) {
                createGalleryItem(i, masonryContainer);
            }
        }
        
        function createGalleryItem(i, targetContainer) {
            const itemDiv = document.createElement('div');
            itemDiv.className = 'gallery-item';
            
            const imgWrapper = document.createElement('div');
            imgWrapper.className = 'gallery-img-wrapper';

            const img = document.createElement('img');
            img.src = `birthday-website/assets/kalyani-images/image-${i}.jpg`;
            img.alt = `Memory ${i}`;
            
            // Add a simple fallback logic if the image doesn't exist so it doesn't show broken icons
            img.onerror = function() {
                this.onerror = null;
                // Leave it blank pink if missing
                this.src = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='150' height='150'><rect width='150' height='150' fill='rgba(255, 42, 117, 0.1)'/></svg>";
            };

            // Add the 'loaded' class for smooth fade in
            img.onload = function() {
                this.classList.add('loaded');
            }

            imgWrapper.appendChild(img);
            itemDiv.appendChild(imgWrapper);

            // Only add text if you have defined it in galleryMemoryTexts
            const customText = galleryMemoryTexts[i];
            if (customText) {
                const textDiv = document.createElement('div');
                textDiv.className = 'gallery-text';
                textDiv.innerHTML = `<p>${customText}</p>`;
                itemDiv.appendChild(textDiv);
            }
            targetContainer.appendChild(itemDiv);
        }
    }

});
