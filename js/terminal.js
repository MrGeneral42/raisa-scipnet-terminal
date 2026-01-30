const output = document.getElementById('terminal-output');
const lines = [
    "Reading User Credentials...",
    "...",
    "...",
    "...",
    "Credentials approved - Level-4 Clearance detected.",
    "Establishing safe environment...",
    "Initializing SCiPnet...",
    "Access granted.",
    "Welcome to SCiPnet, █████████████████████████."
];

let i = 0;

// Load typewriter sound
const typeSound = new Audio('assets/typewriter.wav'); // place your sound in assets/
typeSound.volume = 0.4; // adjust as needed

function printLine() {
    if (i < lines.length) {
        const line = lines[i];
        let charIndex = 0;

        function typeChar() {
            if (charIndex < line.length) {
                output.textContent += line[charIndex];
                charIndex++;

                // Play typewriter sound on each character
                typeSound.currentTime = 0;
                typeSound.play();

                setTimeout(typeChar, 50); // typing speed
            } else {
                output.textContent += "\n"; // new line
                i++;
                setTimeout(printLine, 300); // delay before next line
            }
        }

        typeChar();
    }
}

// --- Require user interaction to start ---
function initializeTerminal() {
    if (typeof blockMobile === "function" && blockMobile()) return;

    // Remove click listener after first click
    document.removeEventListener('click', initializeTerminal);

    // Optional: clear any overlay message or instructions
    const overlay = document.getElementById('click-to-start-overlay');
    if (overlay) overlay.remove();

    printLine();
}

// Create an overlay instructing the user to click
const overlay = document.createElement('div');
overlay.id = 'click-to-start-overlay';
overlay.style.position = 'fixed';
overlay.style.top = '0';
overlay.style.left = '0';
overlay.style.width = '100%';
overlay.style.height = '100%';
overlay.style.backgroundColor = 'rgba(0,0,0,0.9)';
overlay.style.color = '#FFFFFF';
overlay.style.display = 'flex';
overlay.style.justifyContent = 'center';
overlay.style.alignItems = 'center';
overlay.style.fontFamily = 'Courier New, monospace';
overlay.style.fontSize = '1.5em';
overlay.style.textAlign = 'center';
overlay.style.cursor = 'pointer';
overlay.textContent = 'CLICK ANYWHERE TO FOCUS ON THE TERMINAL';
document.body.appendChild(overlay);

// Wait for first click to start terminal
document.addEventListener('click', initializeTerminal);
