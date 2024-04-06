const randomNum = Math.floor(Math.random() * 100);
console.log(randomNum);

const startGame = () => {
  let userNumber = +document.querySelector('#userInput').value;
  let result = document.querySelector('#result');

  if (randomNum === userNumber) {
    result.innerHTML = 'Congratulation, you win!';
    result.style.backgroundColor = 'green';
    //  ----------------------------------------
  } else if (randomNum < userNumber) {
    result.innerHTML = `Number is less then ${userNumber}`;
    result.style.backgroundColor = 'red';
    //  ----------------------------------------
  } else if (randomNum > userNumber) {
    result.innerHTML = `Number is greter then ${userNumber}`;
    result.style.backgroundColor = 'red';
  }
};

const reset = () => {
  window.location.reload();
};
