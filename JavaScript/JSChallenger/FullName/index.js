const button = document.getElementById('button');
button.addEventListener('click' , () => {
  // type in your code here
  //  document.querySelector('#fullName').setAttribute('value', `${document.querySelector('#firstName').value}${document.querySelector('#lastName').value}`);
  document.querySelector('#fullName').setAttribute('value', document.querySelector('#firstName').value+document.querySelector('#lastName').value);
});


// const list = document.getElementById('list');
// const handleHover = event => {
//   if(event.target !== list) {
//     event.target.style.visibility = 'hidden';
//   }
// };

// list.addEventListener('mouseover', handleHover);