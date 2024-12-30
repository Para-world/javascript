// Temperature conversion program
        function convert() {
            const inputValue = parseFloat(document.getElementById("inputValue").value);
            const toFahrenheit = document.getElementById("toFahrenheit").checked;
            const toCelsius = document.getElementById("toCelsius").checked;
            const resultElement = document.getElementById("result");

            if (isNaN(inputValue)) {
                resultElement.textContent = "Please enter a valid number.";
                return;
            }

            if (toFahrenheit) {
                const fahrenheit = (inputValue * 9/5) + 32;
                resultElement.textContent = `${inputValue}°C is equal to ${fahrenheit.toFixed(2)}°F`;
            } else if (toCelsius) {
                const celsius = (inputValue - 32) * 5/9;
                resultElement.textContent = `${inputValue}°F is equal to ${celsius.toFixed(2)}°C`;
            } else {
                resultElement.textContent = "Please select a conversion option.";
            }
        }



//ignor this part
// this part only for fun right now we will learn this in future
        const audio = document.getElementById('background-audio');
const playPauseBtn = document.getElementById('play-pause-btn');
const audioSlider = document.getElementById('audio-slider');

// Play/pause functionality
playPauseBtn.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        playPauseBtn.textContent = '⏸️';
    } else {
        audio.pause();
        playPauseBtn.textContent = '▶️';
    }
});

// Volume control
audioSlider.addEventListener('input', (e) => {
    audio.volume = e.target.value / 100;
});

    