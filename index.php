<!DOCTYPE html>
<html lang="en" class="p-0 m-0">

<head>

  <meta name="author" content="Arya Azizi">
  <meta name="designer" content="Arya Azizi \ Front End">
  <meta name="description" content="Arya Azizi \ Home">

  <meta name="title" content="Arya Azizi - Front end developer">

  <link rel="icon" type="image/x-icon" href="/util/favicon.ico">

  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Title</title>

  <link href="./dist/output.css" rel="stylesheet">

</head>
<body class="bg-[#181818] font-mono w-screen h-screen">

<header class="bg-[#ffffff0a] fixed border-b border-[#ffffff2a] h-[35px] w-full">
    <div class="flex justify-between w-[90%] mx-auto h-full">
      <div class="my-auto">
        <a href="../" class="text-sm text-gray-200 hover:text-gray-400">../</a>
      </div>
      <div class="my-auto text-lg text-white">
        <span class="text-[#3ae57f]">W</span><span>ault</span>
      </div>
    </div>
</header>

<section class="flex h-screen">

    <div class="w-full max-w-xl m-auto">

      <div class="flex flex-col justify-between md:flex-row-reverse">
        <div class="grid overflow-hidden grid-cols-1 grid-rows-4 gap-4 h-[300px] mx-auto md:mx-0">
          <ul class="hidden rowA">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
          <ul class="hidden rowB">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
          <ul class="hidden rowC">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
          <ul class="hidden rowD">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>

        <div class="flex flex-col max-w-[200px] w-full mx-auto md:mx-0 submitArea mt-10 md:mt-0">
          <div class="flex flex-row w-full">
            <input type="number" onKeyPress="if(this.value.length==4) return false;" maxlength="4"
            placeholder="4-digit code" pattern="[0-9]{4}"
            class="bg-[#0f0f0f] text-slate-400 text-center outline-none w-[90%]" id="vaultInput" />
            <div class="bg-[#1b1b1b] w-[10%] text-center text-slate-500 chancesWrapper">4</div>
          </div>
          <div class="h-[50px]">
            <button type="submit" class="bg-[#1b1b1b] text-slate-300 hover:text-slate-400 w-full" id="vaultSubmit">Confirm</button>
          </div>
        </div>
      </div>

    </div>


</section>

<script>

const animateIt = (shown, hidden) => {
  const visibleElement = document.querySelector(`.${shown}`)
  const hiddenElement = document.querySelector(`.${hidden}`)

  const first = visibleElement.getBoundingClientRect();
  hiddenElement.classList.toggle('hidden')
  const last = visibleElement.getBoundingClientRect();

  const deltaX = first.left - last.left
  const deltaY = first.top - last.top
  const deltaW = first.width / last.width
  const deltaH = first.height / last.height

  visibleElement.animate([{

      transform: `
          translate(${deltaX}px, ${deltaY}px)
          `
      }, {
          transform: 'none'
      }], {
          duration: 300,
          easing: 'ease-in-out',
          fill: 'both'
  });

  hiddenElement.animate ([{
      opacity: '0'
  }, {
      opacity: '1'
  }], {
      duration: 300,
      easing: 'ease-in-out',
      fill: 'both'
  })
}


  const userInput = document.querySelector('#vaultInput')
  const submitButton = document.querySelector('#vaultSubmit')

  const vaultRow_1 = document.querySelector('.rowA').children
  const vaultRow_2 = document.querySelector('.rowB').children
  const vaultRow_3 = document.querySelector('.rowC').children
  const vaultRow_4 = document.querySelector('.rowD').children
  
  let chances = 4
  let order = 0

  userInput.addEventListener('keyup', (event) => {
    event.preventDefault();
    if (event.keyCode === 13) {
        submitButton.click();
    }
  })

  submitButton.addEventListener('click', () => {

    let currentCode = userInput.value

    if (currentCode.length === 4) {
      order++;

      if (order==1) {
        document.querySelector('.rowA').classList.toggle('hidden')
        vaultRow_1.item(0).innerHTML = currentCode[0]
        vaultRow_1.item(1).innerHTML = currentCode[1]
        vaultRow_1.item(2).innerHTML = currentCode[2]
        vaultRow_1.item(3).innerHTML = currentCode[3]
      }
      else if (order==2) {
        document.querySelector('.rowB').classList.toggle('hidden')
        vaultRow_2.item(0).innerHTML = currentCode[0]
        vaultRow_2.item(1).innerHTML = currentCode[1]
        vaultRow_2.item(2).innerHTML = currentCode[2]
        vaultRow_2.item(3).innerHTML = currentCode[3]
      }
      else if (order==3) {
        document.querySelector('.rowC').classList.toggle('hidden')
        vaultRow_3.item(0).innerHTML = currentCode[0]
        vaultRow_3.item(1).innerHTML = currentCode[1]
        vaultRow_3.item(2).innerHTML = currentCode[2]
        vaultRow_3.item(3).innerHTML = currentCode[3]
      }
      else if (order==4) {
        document.querySelector('.rowD').classList.toggle('hidden')
        vaultRow_4.item(0).innerHTML = currentCode[0]
        vaultRow_4.item(1).innerHTML = currentCode[1]
        vaultRow_4.item(2).innerHTML = currentCode[2]
        vaultRow_4.item(3).innerHTML = currentCode[3]
      };

      userInput.value = '';


      chances--;
      document.querySelector('.chancesWrapper').innerHTML = chances
      if (chances == 0) {
        submitButton.remove();
        userInput.setAttribute('placeholder', 'out of tries.')
        userInput.setAttribute('disabled', '');
      };
    }

  })
  


</script>

</body>
</html>

<?php
  $min= 1000;
  $max= 9999;
  $vaultCode = rand($min,$max);
?>