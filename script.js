const results = document.querySelector(".results");
const textInput = document.querySelector(".textInput");

console.log(textInput.value);

function random(num) {
  return Math.trunc(Math.random() * num);
}
let txt = "";

function textArr(text) {
  const textArray = text.split(",");
  console.log(text[text.length - 1]);

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
  const randomElem = elems[random(elems.length - 1)];
  randomElem.classList.add("active");
  setTimeout(() => {
    randomElem.classList.remove("active");
  }, 200);
}

window.addEventListener("keyup", (eve) => {
  console.log(eve.key);
  if (eve.key != "Enter") {
    arrElem(textArr(textInput.value));
  } else {
    const interval = setInterval(randomElem, 100);
    setTimeout(() => {
      clearInterval(interval);
      const elems = document.querySelectorAll(".result");
      const randomElem = elems[random(elems.length - 1)];
      console.log(randomElem);
      randomElem.classList.add("active");
    }, 2000);
  }
});
