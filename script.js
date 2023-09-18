const colorDisplay = document.getElementById('colorDisplay');
const generateBtn = document.getElementById('generateBtn');
const customColorInput = document.getElementById('customColorInput');
const customBtn = document.getElementById('customBtn');
const copyBtn = document.getElementById('copyBtn');

// Generate a random color and update the display
generateBtn.addEventListener('click', () => {
    const randomColor = getRandomColor();
    colorDisplay.style.backgroundColor = randomColor;
    colorDisplay.textContent = randomColor;
});

// Customize the background color using a custom input
customBtn.addEventListener('click', () => {
    const customColor = customColorInput.value;
    colorDisplay.style.backgroundColor = customColor;
    colorDisplay.textContent = customColor;
});

// Copy the color code to the clipboard
copyBtn.addEventListener('click', () => {
    const colorCode = colorDisplay.textContent;
    copyToClipboard(colorCode);
    alert('Color code copied to clipboard: ' + colorCode);
});

// Function to generate a random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Function to copy text to clipboard
function copyToClipboard(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
}
