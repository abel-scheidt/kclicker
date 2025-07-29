let score = 0;

        // Increment score on cookie click
        const cookie = document.getElementById('cookie');
        const scoreDisplay = document.getElementById('score');

        cookie.addEventListener('click', () => {
            score++;
            scoreDisplay.textContent = score;
        });
