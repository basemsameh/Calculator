let divideBtn = document.querySelector("#divide");
let multiBtn = document.querySelector("#multi");
let sumBtn = document.querySelector("#sum");
let equalBtn = document.querySelector("#equal");
let minusBtn = document.querySelector("#minus");
let acBtn = document.querySelector("#acBtn");
let result = document.querySelector("#result");
let buttons = document.querySelectorAll(".btn-num");

acBtn.onclick = () => {
  result.textContent = "0";
  buttons.forEach(btn => {
    btn.onclick = () => {
      if (result.textContent === "0") {
        result.textContent = btn.textContent;
      } else {
        result.textContent += btn.textContent;
      }
    }
  })
}

buttons.forEach(btn => {
  btn.onclick = () => {
    if (result.textContent === "0") {
      result.textContent = btn.textContent;
    } else {
      result.textContent += btn.textContent;
    }
  }
})

let numberOne = 0;
let numberTwo = 0;
let operation = '';

function calc() {
  numberOne = result.textContent;
  buttons.forEach(btn => {
    btn.onclick = () => {
      if (result.textContent === numberOne) {
        result.textContent = btn.textContent;
      } else {
        result.textContent += btn.textContent;
      }
    }
  })
}

equalBtn.onclick = () => {
  numberTwo = result.textContent;
  if (operation === '+') {
    result.textContent = +numberOne + +numberTwo;
  }
  else if (operation === '-') {
    result.textContent = +numberOne - +numberTwo;
  }
  else if (operation === '*') {
    result.textContent = +numberOne * +numberTwo;
  }
  else if (operation === '/') {
    result.textContent = +numberOne / +numberTwo;
  }
}

sumBtn.onclick = () => {
  calc();
  operation = '+';
}
minusBtn.onclick = () => {
  calc();
  operation = "-";
}
multiBtn.onclick = () => {
  calc();
  operation = "*";
}
divideBtn.onclick = () => {
  calc();
  operation = "/";
}