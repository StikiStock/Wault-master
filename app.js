console.log('Dear cheaters, You are free to cheat UNTIL the very day of introducing node.js to the Wault ;) Have Fun')

const clearInput = () => {
  userInput.value = "";
};

const flipTo = (el, top, right, bottom, left, width, height) => {
  const element = document.querySelector(`#${el}`)

  const shortDirections = ["t", "r", "b", "l"]
  const Directions = [top, right, bottom, left]


  const first = element.getBoundingClientRect(); //shoroo

  let d;
  for(d = 0; d < 4; d++) {
    if (Directions[d] != undefined && Directions[d] != '') {
      element.classList.toggle(`m${shortDirections[d]}-[${Directions[d]}]`)
    }
  }

  //  

  if (width !== undefined && height !== undefined) {
    element.classList.toggle(`w-[${width}]`)
    element.classList.toggle(`h-[${height}]`)
  }

  const last = element.getBoundingClientRect(); //payan

  const deltaX = first.left - last.left
  const deltaY = first.top - last.top
  const deltaW = first.width / last.width
  const deltaH = first.height / last.height

  element.animate([{

      transform: `
          translate(${deltaX}px, ${deltaY}px)
          scale(${deltaW}, ${deltaH})
          `
      }, {
          transform: 'none'
      }], {
          duration: 300,
          easing: 'ease-in-out',
          fill: 'both'
  });

}


const waultLogo = '<div class="inline-block mx-1"><div class="text-lg flex text-white font-medium"><img class="w-[14px] mr-1 h-auto rotate-[315deg]" src="./util/key.svg" /><span class="text-[#3ae57f]">W</span><span>ault</span></div></div>'

const userInput = document.querySelector("#vaultInput");
const submitButton = document.querySelector("#vaultSubmit");
const alertSection = document.querySelector("#alert");

const disableAll = () => {
  userInput.setAttribute("placeholder", "out of tries.");
  userInput.setAttribute("disabled", "");
  submitButton.setAttribute("disabled", "");
  submitButton.classList.toggle("hover:text-slate-400");
  submitButton.classList.replace("text-slate-300", "text-slate-400");
};

const displayAlert = () => {
  alertSection.classList.remove("hidden");
};

function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const invalidChars = ["-", "+", "e"];

userInput.addEventListener("keyup", (event) => {
  event.preventDefault();
  if (event.keyCode === 13) {
    submitButton.click();
  }
});

userInput.addEventListener("input", function () {
  this.value = this.value.replace(/[e\+\-]/gi, "");
});

userInput.addEventListener("keydown", function (e) {
  if (invalidChars.includes(e.key)) {
    e.preventDefault();
  }
});

let chances = 4;
let i, x;
x = 0;

const rowsCh = ["A", "B", "C", "D"].map(
  (label) => document.querySelector(`.row${label}`).children
);
const rows = ["A", "B", "C", "D"].map((label) =>
  document.querySelector(`.row${label}`)
);

const vaultCode = String(getRandom(1000, 9999));

let addRow = () => {
  let currentCode = userInput.value;

  if (currentCode.length === 4) {
    for (i = 0; i < currentCode.length; i++) {
      rowsCh[x].item(i).innerHTML = currentCode[i];
      rows[x].classList.remove("hidden");

      if (currentCode[i] == vaultCode[i]) {
        rowsCh[x].item(i).style.background = "#00475e";
        rowsCh[x].item(i).setAttribute("correct", "true");
      } else if (vaultCode.includes(currentCode[i]) == true) {
        rowsCh[x].item(i).style.background = "#6b6600";
      }
    }

    chances--;

    document.querySelector(".chancesWrapper").innerHTML = chances;

    if (chances == 0) {
      disableAll();
      document.querySelector("#alertTitle").innerHTML = "Unlucky";
      document.querySelector("#alertDesc").innerHTML =
        "Nex time, You will guess the" + waultLogo + "Code.";
      displayAlert();
    }

    if (currentCode == vaultCode) {
      disableAll();
      document.querySelector("#alertTitle").innerHTML = "Victory";
      document.querySelector("#alertDesc").innerHTML =
        "Well done, You Guessed the" + waultLogo + "Code";
      displayAlert();
    }

    clearInput();
    x++;
  }
};
