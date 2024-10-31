'use strict'

//SSRリストにアドインする関数（ボタンクリックによるイベントリスナー）
function addSSR() {
  console.log("do: addSSR");
  let ingredients = document.getElementById("ssrIngredients").value; //
  let classSSR = document.getElementsByClassName("ssr")[0];
  if (ingredients !== "") {
    classSSR.innerHTML += `<p class="ssrClass">${ingredients + "⭐⭐⭐"}</p>`;
    const paragraph = document.createElement("option");
    paragraph.innerText = ingredients + "⭐⭐⭐";
    document.getElementById("pickup").appendChild(paragraph);
  }
}

document.getElementById("ssrButton").addEventListener("click", addSSR);

//SRリストにアドインする関数（ボタンクリックによるイベントリスナー）
function addSR() {
  console.log("do: addSR");
  let ingredients = document.getElementById("srIngredients").value;
  let classSR = document.getElementsByClassName("sr")[0];
  if (ingredients !== "") {
    classSR.innerHTML += `<p class="srClass">${ingredients + "⭐⭐"}</p>`;
  }
}

document.getElementById("srButton").addEventListener("click", addSR);


//Rリストにアドインする関数（ボタンクリックによるイベントリスナー）
function addR() {
  console.log("do: addR");
  let ingredients = document.getElementById("rIngredients").value;
  let classSR = document.getElementsByClassName("r")[0];
  if (ingredients !== "") {
    classSR.innerHTML += `<p class="rClass">${ingredients + "⭐"}</p>`;
  }
}

document.getElementById("rButton").addEventListener("click", addR);


//ガチャを開始するイベントリスナー(メイン関数)
function letsGacha() {
  // document.getElementById("result").innerHTML = "";
  console.log("do: letsGacha");
  for (let i = 0; i < 10; i++) {
    document.getElementById(`result${i + 1}`).innerText = "";
    document.getElementById(`result${i + 1}`).style.backgroundColor = null;
  }
  const numberOfTimes = document.getElementById("times").value;
  // console.log(numberOfTimes)
  for (let i = 0; i < numberOfTimes; i++) {
    document.getElementById(`result${i + 1}`).innerText = randRare(i);
  }
}

document.getElementById("gacha").addEventListener("click", letsGacha);
