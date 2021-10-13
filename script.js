const inputInitialPrice = document.querySelector("#initial-price");
const inputQuantity= document.querySelector("#quantity");
const inputCurrentPrice= document.querySelector("#current-price");
const btnTellMe= document.querySelector("#tell-me");
const divResult= document.querySelector("#result");

btnTellMe.addEventListener("click", profitOrLoss)

function profit(costPrice, sellingPrice, qty){
  const profit = (sellingPrice - costPrice).toFixed(2) * qty;
  const profitPercentage = ((profit /  (costPrice * qty)) * 100).toFixed(2);
  return {val: profit, percent: profitPercentage};
}

function loss(costPrice, sellingPrice, qty){
  const loss = (costPrice - sellingPrice).toFixed(2) * qty;
  const lossPercentage = ((loss/ (costPrice * qty)) * 100).toFixed(2) ;
  return {val: loss, percent: lossPercentage}
}

function profitOrLoss(){
  const costPrice = inputInitialPrice.value;
  const qty = inputQuantity.value;
  const sellingPrice = inputCurrentPrice.value;
  let res = {val: "", percent: ""};

  if((costPrice === "") || (sellingPrice  === "") ||( qty  === "")) {divResult.innerText ='Please fill out all Fields';}

  else if(qty <= 0 || sellingPrice < 0 || costPrice < 0){
    divResult.innerText = "Please enter valid data. Minimum price = 0, Minimum quantity = 1";
  }
  else{
    if(sellingPrice > costPrice){ 
      res = profit(costPrice, sellingPrice, qty);
      document.body.style.backgroundImage = 'url("profit.png")'
      divResult.style.color = 'green'
      divResult.innerText = `You made a profit of ${res.val} with a profit percentage of ${res.percent}%`      
    }
    else if(costPrice > sellingPrice){
      res = loss(costPrice, sellingPrice, qty);
      if(res.percent <= 50){
        document.body.style.backgroundColor = "#43103C";
        document.body.style.color = "white";
      }
      divResult.style.color = 'red';
      divResult.innerText = `You incurred a loss of ${res.val} with a loss percentage of ${res.percent}% 🥺🥺🥺`;
    }
    else {
      divResult.style.color = 'blue'
      divResult.innerText = "The stock is static";
    }
  }
}