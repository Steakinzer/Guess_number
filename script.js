let guestedNumber = Math.trunc(Math.random() * 20) + 1;
let score = Number(document.querySelector('.score').innerHTML);
let highScore = Number(document.querySelector('.highscore').innerHTML);

document.querySelector('.check').addEventListener('click', function () {
  let currentNumber = Number(document.querySelector('.guess').value);
  if (currentNumber == guestedNumber) {
    document.querySelector('.message').innerHTML = 'Bravo tu as trouvé';
    document.querySelector('.check').style.display = 'none';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').innerHTML = guestedNumber;
    if (Number(document.querySelector('.highscore').innerHTML) < score) {
      document.querySelector('.highscore').innerHTML = score;
    }
  } else if (currentNumber !== guestedNumber) {
    document.querySelector('.message').textContent =
      currentNumber > guestedNumber ? 'Plus petit' : 'Plus grand';
    score--;
    document.querySelector('.score').textContent = score;
  }
});
document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.guess').value = '';
  guestedNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.check').style.display = 'block';
  score = 20;
  document.querySelector('.score').textContent = 20;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').innerHTML = '?';
});
