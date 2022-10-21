const clearInput = () => {
  userInput.value = '';
}

const showRefresh = () => {
  document.querySelector('#refresh').classList.remove('invisible')
}

const userInput = document.querySelector('#vaultInput')
const submitButton = document.querySelector('#vaultSubmit')
const alertSection = document.querySelector('#alert')

const disableAll = () => {
  userInput.setAttribute('placeholder', 'out of tries.');
  userInput.setAttribute('disabled', '');
  submitButton.setAttribute('disabled', '');
  submitButton.classList.toggle('hover:text-slate-400');
  submitButton.classList.replace('text-slate-300', 'text-slate-400');
}

const displayAlert = () => {
  alertSection.classList.remove('hidden')
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

let addRow = () => {

  let currentCode = userInput.value

  if (currentCode.length === 4) {

    for (i = 0; i < currentCode.length; i++) {
      rowsCh[x].item(i).innerHTML = currentCode[i];
      rows[x].classList.remove('hidden')
      
      if (currentCode[i] == vaultCode[i]) {
        rowsCh[x].item(i).style.background = '#00475e'
        rowsCh[x].item(i).setAttribute('correct', 'true')
      }

      else if (vaultCode.includes(currentCode[i]) == true) {
        rowsCh[x].item(i).style.background = '#6b6600';
        
      }

    }
    
    chances--;

    document.querySelector('.chancesWrapper').innerHTML = chances

    if (chances == 0) {
      disableAll()
      document.querySelector('#alertTitle').innerHTML = 'Unlucky'
      document.querySelector('#alertDesc').innerHTML = 'You Failed to Guess the Wault Code.'
      displayAlert()
      showRefresh()
    };

    if (currentCode == vaultCode) {
      disableAll()
      document.querySelector('#alertTitle').innerHTML = 'Victory'
      document.querySelector('#alertDesc').innerHTML = 'Well done, Your Guess was Correct.'
      displayAlert()
      showRefresh()
    }

    clearInput()
    x++;
  }
}