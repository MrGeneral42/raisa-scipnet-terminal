function updateHume() {
    const min = 98;    // measured value minimum
    const max = 102;   // measured value maximum
    const range = 200; // full meter range 0-200 Hm

    const value = Math.floor(Math.random() * (max - min + 1)) + min; // 90-110
    const fill = document.getElementById('hume-fill');
    const text = document.getElementById('hume-value');

    // Map value to 0-100% width
    const widthPercent = (value / range) * 100;

    fill.style.width = `${widthPercent}%`;
    text.textContent = value + ' Hm';
}

// Update every 3 seconds
setInterval(updateHume, 3000);
updateHume();
