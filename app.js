
  const userInput = document.querySelector('#vaultInput')
  const submitButton = document.querySelector('#vaultSubmit')

  const vaultRow_1 = document.querySelector('.rowA').children
  const vaultRow_2 = document.querySelector('.rowB').children
  const vaultRow_3 = document.querySelector('.rowC').children
  const vaultRow_4 = document.querySelector('.rowD').children

  let clearInput = () => {
    userInput.value = '';
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
    }})

  userInput.addEventListener("input", function() {
    this.value = this.value.replace(/[e\+\-]/gi, "");
    });

    userInput.addEventListener("keydown", function(e) {
    if (invalidChars.includes(e.key)) {
    e.preventDefault();
  }
});

  let chances = 4
  let order = 0

  submitButton.addEventListener('click', () => {

    let currentCode = userInput.value

    if (currentCode.length === 4) {
      order++;

      if (order==1) {
        document.querySelector('.rowA').classList.toggle('hidden');
        vaultRow_1.item(0).innerHTML = currentCode[0]
        vaultRow_1.item(1).innerHTML = currentCode[1]
        vaultRow_1.item(2).innerHTML = currentCode[2]
        vaultRow_1.item(3).innerHTML = currentCode[3]
      }
      else if (order==2) {
        document.querySelector('.rowB').classList.toggle('hidden');
        vaultRow_2.item(0).innerHTML = currentCode[0]
        vaultRow_2.item(1).innerHTML = currentCode[1]
        vaultRow_2.item(2).innerHTML = currentCode[2]
        vaultRow_2.item(3).innerHTML = currentCode[3]
      }
      else if (order==3) {
        document.querySelector('.rowC').classList.toggle('hidden');
        vaultRow_3.item(0).innerHTML = currentCode[0]
        vaultRow_3.item(1).innerHTML = currentCode[1]
        vaultRow_3.item(2).innerHTML = currentCode[2]
        vaultRow_3.item(3).innerHTML = currentCode[3]
      }
      else if (order==4) {
        document.querySelector('.rowD').classList.toggle('hidden');
        vaultRow_4.item(0).innerHTML = currentCode[0]
        vaultRow_4.item(1).innerHTML = currentCode[1]
        vaultRow_4.item(2).innerHTML = currentCode[2]
        vaultRow_4.item(3).innerHTML = currentCode[3]
      };

      clearInput();

      chances--;
      document.querySelector('.chancesWrapper').innerHTML = chances
      if (chances == 0) {
        userInput.setAttribute('placeholder', 'out of tries.');
        userInput.setAttribute('disabled', '');
        submitButton.setAttribute('disabled', '');
        submitButton.classList.toggle('hover:text-slate-400');
        submitButton.classList.replace('text-slate-300', 'text-slate-400');
      };
    }

  })
