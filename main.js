'use strict'


let total = 0;
let moneyInPossession = 90000;
const amount = 3000;
//SSRリストにアドインする関数（ボタンクリックによるイベントリスナー）
function addSSR() {
  console.log("do: addSSR");
  let ingredients = document.getElementById("ssrIngredients"); //
  let classSSR = document.getElementsByClassName("ssr")[0];
  if (ingredients.value !== "") {
    classSSR.innerHTML += `<p class="ssrClass">${ingredients.value + "⭐⭐⭐"}</p>`;
    const paragraph = document.createElement("option");
    paragraph.innerText = ingredients.value + "⭐⭐⭐";
    document.getElementById("pickup").appendChild(paragraph);
    ingredients.value = "";
  }
}

document.getElementById("ssrButton").addEventListener("click", addSSR);

//SRリストにアドインする関数（ボタンクリックによるイベントリスナー）
function addSR() {
  console.log("do: addSR");
  let ingredients = document.getElementById("srIngredients");
  let classSR = document.getElementsByClassName("sr")[0];
  if (ingredients.value !== "") {
    classSR.innerHTML += `<p class="srClass">${ingredients.value + "⭐⭐"}</p>`;
    ingredients.value = "";
  }
}

document.getElementById("srButton").addEventListener("click", addSR);


//Rリストにアドインする関数（ボタンクリックによるイベントリスナー）
function addR() {
  console.log("do: addR");
  let ingredients = document.getElementById("rIngredients");
  let classSR = document.getElementsByClassName("r")[0];
  if (ingredients.value !== "") {
    classSR.innerHTML += `<p class="rClass">${ingredients.value + "⭐"}</p>`;
    ingredients.value = "";
  }
}

document.getElementById("rButton").addEventListener("click", addR);


//ガチャを開始するイベントリスナー(メイン関数)
function letsGacha() {
  // document.getElementById("result").innerHTML = "";
  console.log("do: letsGacha");
  document.getElementsByClassName("result")[0].innerText = "";
  const numberOfTimes = document.getElementById("times").value;
  // console.log(numberOfTimes)
  for (let i = 0; i < numberOfTimes; i++) {
    //トータル回数
    total += 1;
    document.getElementById("total").innerText = total + "回";
    //メイン処理
    let timesId = i + 1;
    const paragraph = document.createElement("p");
    paragraph.id = `result${timesId}`;
    document.getElementsByClassName("result")[0].appendChild(paragraph);
    if (total % 90 !== 0 && i + 1 !== 10) {
      paragraph.innerText = randRare(timesId);
    } else if (total % 90 === 0) {
      paragraph.style.backgroundColor = "orange";
      paragraph.innerText = `【天井】${lotterySSR()}`;
    } else {
      paragraph.innerText = `【確定】${randRareForTen(timesId)}`;
    }
  }
  //残金
  let price = amount * Number(numberOfTimes);
  const moneyId = document.getElementById("money");
  moneyInPossession -= price;
  if (moneyInPossession >= 0) {
    moneyId.innerText = `${moneyInPossession}ペリカ`;
  } else {
    moneyId.innerText = `【借金】${Math.abs(moneyInPossession)}ペリカ`;
    moneyId.style.color = "white";
    moneyId.style.backgroundColor = "red";
  }
}

document.getElementById("gacha").addEventListener("click", letsGacha);
