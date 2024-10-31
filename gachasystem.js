'use strict'

//レアリティ確率の関数
function randRare(times) {
    let result = Math.random().toFixed(2);
    const ssrList = document.getElementById
    const resultBox = document.getElementById(`result${times + 1}`)
    if (result > 0.95) {
      resultBox.style.backgroundColor = "orange";
      return lotterySSR();
    } else if (result > 0.75) {
      resultBox.style.backgroundColor = "blueviolet";
      return lotterySR();
    } else {
      resultBox.style.backgroundColor = "cyan";
      return lotteryR();
    }
  }
  
  
  //レアリティ内の食材を割り当てる関数
  function lotterySSR() {
    let rand = Math.random().toFixed(2);
    let pickUp = document.getElementById("pickup").value;
    let ssr = document.getElementsByClassName("ssrClass");
    let lottery = 1 / (ssr.length + 1);
    let totalLottery = 0;
    for (const ingredients of ssr) {
      if (pickUp === ingredients.innerText) {
        totalLottery += lottery * 2;
        // console.group("SSRの食材 :");
        // console.log("食材 :",ingredients);
        // console.log("乱数 :",rand);
        // console.log("確率 :",lottery * 2);
        if (rand <= totalLottery) return ingredients.innerText;
      } else {
        totalLottery += lottery;
        // console.group("SSRの食材 :");
        // console.log("食材 :",ingredients);
        // console.log("乱数 :",rand);
        // console.log("確率 :",lottery);
        if (rand <= totalLottery) return ingredients.innerText;
      }
    }
  }
  
  function lotterySR() {
    let rand = Math.random().toFixed(2);
    let sr = document.getElementsByClassName("srClass");
    let lottery = 1 / sr.length
    let totalLottery = 0;
    for (const ingredients of sr) {
        totalLottery += lottery;
        // console.group("SRの食材 :");
        // console.log("食材 :",ingredients);
        // console.log("乱数 :",rand);
        // console.log("確率 :",lottery);
        if (rand <= totalLottery) return ingredients.innerText;
    }
  }
  
  function lotteryR() {
    let rand = Math.random().toFixed(2);
    let r = document.getElementsByClassName("rClass");
    let lottery = 1 / r.length;
    let totalLottery = 0;
    for (const ingredients of r) {
        totalLottery += lottery;
        // console.group("Rの食材 :");
        // console.log("食材 :",ingredients);
        // console.log("乱数 :",rand);
        // console.log("確率 :",lottery);
        if (rand <= totalLottery) return ingredients.innerText;
    }
  }
