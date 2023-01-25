'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  let factor = [1];
  let i = 2;
  while(num !== 1){
    if(num % i === 0){
        factor.push(i);
        num = num/i;
    } else {
        i++;
    }
  }
  return factor;
  // let arr = [1,2,3,5,7];
  // let factor = [];
  //  for(let i = arr.length-1; i > 0; i--){
  //    if(num / i > Math.floor(num/i) && num / i < Math.ceil(num/i)){
  //      return
  //    } else {
  //        factor.push((num/i))
  //    }
  //  }
  //  return factor;
}

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  let cambio = true
  while(cambio){
    cambio = false
    for(let i=0; i<array.length-1; i++){
      if(array[i] > array[i+1]) {
        let aux = array[i];
        array[i] = array[i+1];
        array[i+1] = aux
        cambio = true
      }
    }
  }
  return array;

  // var len = array.length;
  // for (var i = 0; i < len ; i++) {
  //   for(var j = 0 ; j < len - i - 1; j++){ 
  //   if (array[j] > array[j + 1]) {
  //     var temp = array[j];
  //     array[j] = array[j+1];
  //     array[j + 1] = temp;
  //   }
  //  }
  // }
  // return bubbleSort(array);
  // }

  // let indice = 0
  // for(let i = 0; i<array.length; i++){
  //   for(let j = 0; j < array.length-i-1; j++){
  //     if(array[j] > array[j+1]){
  //     let aux2 = array[i]
  //     let aux = array[i+1]
  //     array[i] = aux
  //     array[i+1] = aux2
  //     }
  //   }
  // }
  // return array
}


function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for(let i = 1; i < array.length; i++){
    let j = i-1;
    let aux = array[i];
    while(j >= 0 && aux < array[j]){
      array[j+1] = array[j];
      j--;
    }
    array[j+1] = aux;
  }
  return array;
}


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for(let i = 0; i < array.length-1;  i++){
    let min = i;
    for(let j = i+1; j < array.length; j++){
      if(array[min] > array[j])
      min = j;
    }
    if(i!==min){
      let aux = array[i];
      array[i] = array[min];
      array[min] = aux;
    }
  }
  return array;
    
  // let cambio = true
  // while(cambio){
  //   cambio = false
  //   for(let i=0; i<array.length-1; i++){
  //     if(array[i] > array[i+1]) {
  //       let aux = array[i];
  //       array[i] = array[i+1];
  //       array[i+1] = aux
  //       cambio = true
  //     }
  //   }
  // }
  // return array;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
