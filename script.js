const results = document.querySelector(".results");
const textInput = document.querySelector(".textInput");
let txt = "";

textInput.focus();

function random(num) {
  return Math.trunc(Math.random() * num);
}

function textArr(text) {
  const textArray = text.split(",");

  if (text[text.length - 1] === ",") {
    textArray.splice(-1, 1);
  }
  return textArray;
}

function arrElem(arr) {
  results.innerHTML = "";
  arr.forEach((text) => {
    const div = document.createElement("div");
    div.classList.add("result");
    div.innerText = text;
    results.appendChild(div);
  });
}

function randomElem() {
  const elems = document.querySelectorAll(".result");
  elems.forEach((element) => {
    element.classList.remove("active");
  });
  const randomElem = elems[random(elems.length)];
  randomElem.classList.add("active");
  setTimeout(() => {
    randomElem.classList.remove("active");
  }, 201);
}

window.addEventListener("keyup", (eve) => {
  if (eve.key != "Enter") {
    arrElem(textArr(textInput.value));
  } else {
    textInput.value = "";
    const interval = setInterval(randomElem, 100);
    setTimeout(() => {
      clearInterval(interval);
      setTimeout(() => {
        const elems = document.querySelectorAll(".result");
        const elemNum = random(elems.length);
        const randomElem = elems[elemNum];
        randomElem.classList.add("active");
      }, 201);
    }, 2000);
  }
});
