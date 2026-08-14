import os
import re

script_path = r'c:\Users\GatlaHarsha\Desktop\KALYANI\birthday-website\script.js'

with open(script_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Replace the giant array with a simple object
new_object_str = '''const galleryMemoryTexts = {
    // Example: Add text for specific images by their number
    // 1: "This is a beautiful memory!",
    // 42: "Such a fun day out.",
};'''

new_content = re.sub(r'const galleryMemoryTexts = \[.*?\];', new_object_str, content, flags=re.DOTALL)

# Update the loop logic inside populateGallery
# Old logic:
old_logic = '''            const textDiv = document.createElement('div');
            textDiv.className = 'gallery-text';
            
            // Get text from array or use default if missing
            const customText = galleryMemoryTexts[i - 1] || `Memory ${i}`;
            textDiv.innerHTML = `<p>${customText}</p>`;

            itemDiv.appendChild(imgWrapper);
            itemDiv.appendChild(textDiv);'''

new_logic = '''            itemDiv.appendChild(imgWrapper);

            // Only add text if you have defined it in galleryMemoryTexts
            const customText = galleryMemoryTexts[i];
            if (customText) {
                const textDiv = document.createElement('div');
                textDiv.className = 'gallery-text';
                textDiv.innerHTML = `<p>${customText}</p>`;
                itemDiv.appendChild(textDiv);
            }'''

new_content = new_content.replace(old_logic, new_logic)

with open(script_path, 'w', encoding='utf-8') as f:
    f.write(new_content)

print('Updated script.js successfully.')
