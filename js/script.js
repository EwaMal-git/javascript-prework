var computerMove, randomNumber;
randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('wylosowana liczba to: ' + randomNumber);
if (randomNumber == '1') {
  computerMove = 'kamień';
} else if (randomNumber == '2') {
  computerMove = 'papier';
} else if (randomNumber == '3') {
  computerMove = 'nożyce';
} else {
  computerMove = 'Nieznany ruch';
}
printMessage('Mój ruch: ' + computerMove);

'papier';

var playerMove, playerInput;
playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
console.log('Wpisana odpowiedź to: ' + playerInput);
if (playerInput == '1') {
  playerMove = 'kamień';
  printMessage('Twój ruch: ' + playerMove);
} else if (playerInput == '2') {
  playerMove = 'papier';
  printMessage('Twój ruch: ' + playerMove);
} else if (playerInput == '3') {
  playerMove = 'nożyce';
  printMessage('Twój ruch: ' + playerMove);
} else {
  playerMove = 'kamień';
  printMessage(('Zły wybór !'));
}