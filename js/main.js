var elMoney = document.querySelector(".money");
var elMoneyInput = document.querySelector(".money__input");
var elMoneySelect = document.querySelector(".money__select");
var elMoneyButton = document.querySelector(".money__button");
var elMoneySpan = document.querySelector(".money__span");




//  var elMoneySpan =  elMoneyInput * UZS;
//   var elMoneySpan = elMoneyInput * EVRO;
//   var elMoneySpan = elMoneyInput * RUBL;

elMoney.addEventListener("submit" , function (event){
  event.preventDefault();

  var elMoneyInputVal = elMoneyInput.value;
  var elMoneySelectVal = elMoneySelect.value;
  var elMoneySpans = elMoneyInputVal * elMoneySelectVal ;
  
  
  elMoneySpan.textContent = (`${elMoneySpans}`);
 
})




