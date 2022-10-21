let clearInput = () => {
  userInput.value = '';
}

const userInput = document.querySelector('#vaultInput')
const submitButton = document.querySelector('#vaultSubmit')

let disableAll = () => {
  userInput.setAttribute('placeholder', 'out of tries.');
  userInput.setAttribute('disabled', '');
  submitButton.setAttribute('disabled', '');
  submitButton.classList.toggle('hover:text-slate-400');
  submitButton.classList.replace('text-slate-300', 'text-slate-400');
}

function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const invalidChars = [
  "-",
  "+",
  "e",
];

userInput.addEventListener('keyup', (event) => {
  event.preventDefault();
  if (event.keyCode === 13) {
    submitButton.click();
  }
})

userInput.addEventListener("input", function () {
  this.value = this.value.replace(/[e\+\-]/gi, "");
});

userInput.addEventListener("keydown", function (e) {
  if (invalidChars.includes(e.key)) {
    e.preventDefault();
  }
});


let chances = 4
let i, x;
x = 0;

const rowsCh = ['A', 'B', 'C', 'D'].map(label => document.querySelector(`.row${label}`).children)
const rows = ['A', 'B', 'C', 'D'].map(label => document.querySelector(`.row${label}`))

const vaultCode = String(getRandom(1000, 9999))

console.log(vaultCode)
console.log(vaultCode[0])


let addRow = () => {

  let currentCode = userInput.value

  if (currentCode.length === 4) {

    for (i = 0; i < currentCode.length; i++) {
      rowsCh[x].item(i).innerHTML = currentCode[i];
      rows[x].classList.remove('hidden')
      
      if (rowsCh[x].item(i).innerHTML == vaultCode[i]) {
        console.log('hello')
      }
    }

    

    

    chances--;
    document.querySelector('.chancesWrapper').innerHTML = chances

    if (chances == 0) {
      disableAll();
    };

    clearInput();
    x++;
  }
}