const buttons = document.querySelectorAll('button');
const result = document.querySelector('#result');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const playerChoice = button.id;
    const computerChoice = getComputerChoice();
    const resultText = getResultText(playerChoice, computerChoice);
    result.textContent = resultText;
  });
});

function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function getResultText(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return 'Gelijk spel';
  } else if (
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissors' && computerChoice === 'paper')
  ) {
    return 'Je hebt gewonnen!';
  } else {
    return 'Je hebt verloren :(';
  }
}
