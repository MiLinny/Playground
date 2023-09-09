// const divElem = document.getElementById('wrapper');
// const buttonElem = divElem.getElementsByTagName('button')[0];
// const inputElem = divElem.getElementsByTagName('input')[0];


const buttonElem = document.querySelector('#wrapper button');
const inputElem = document.querySelector('#wrapper input');

buttonElem.addEventListener('click', () => {
    const oldText = inputElem.value;
      return inputElem.value = oldText === "ON" ? "OFF" : "ON";
  });