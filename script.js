const themeToggle = document.getElementById('theme-toggle');

const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  document.body.classList.add('dark');
  themeToggle.checked = true;
}

themeToggle.addEventListener('change', () => {
  if (themeToggle.checked) {
    document.body.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  } else {
    document.body.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  }
});

const snowContainer = document.querySelector('.snow');

function createSnowflake() {
  const snowflake = document.createElement('div');
  snowflake.classList.add('snowflake');
  snowflake.style.width = snowflake.style.height = `${Math.random() * 5 + 2}px`;
  snowflake.style.left = `${Math.random() * 100}vw`;
  snowflake.style.animationDuration = `${Math.random() * 3 + 2}s`;
  snowflake.style.animationDelay = `${Math.random() * 2}s`;
  snowContainer.appendChild(snowflake);

  snowflake.addEventListener('animationend', () => {
    snowflake.remove();
  });
}

setInterval(createSnowflake, 50);

const audio = document.getElementById('background-audio');
document.addEventListener('click', function playAudio() {
  audio.play();
  document.removeEventListener('click', playAudio);
});
audio.addEventListener('ended', () => {
  audio.play();
});
