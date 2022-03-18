const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');
const ball = document.querySelectorAll('.js-ball');
const text = document.querySelector('p')

let intervalID = null;
console.log(btnStart);

btnStart.addEventListener('click', changesBackgroundColor );
btnStop.addEventListener('click', stopChangesBackgroundColorOfBody);


function changesBackgroundColor() {
  
    intervalID = setInterval(() => {
      text.style.color = `${getRandomHexColor()}`;
      ball.forEach((element) => {
      element.style.backgroundColor = `${getRandomHexColor()}`;
      });
    // console.log('генерим цвет', `${getRandomHexColor()}`);
    }, 1000);
  btnStart.disabled = true;
}

function stopChangesBackgroundColorOfBody() {
  clearInterval(intervalID);
  console.log('хватит', btnStop); 
  btnStart.disabled = false;
}

function getRandomHexColor() {
return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// text.style.color = `${getRandomHexColor()}`;
