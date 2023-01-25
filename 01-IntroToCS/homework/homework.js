'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  var numString = num.split('');
  var decimal = 0;
  for(var i = numString.length - 1; i >= 0; i--){
    decimal = decimal + Math.pow(2, numString.length-1-i) * numString[i];
  }
  return decimal;
}

function DecimalABinario(num) {
  // tu codigo aca
  var binario = [];
  while(num > 0){
    binario.unshift(num % 2);
    num = Math.floor(num / 2);
  }
  return binario.join('');
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}