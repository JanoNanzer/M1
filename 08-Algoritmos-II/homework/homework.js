'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if(array.length <= 1) return array;
  let indice = array[Math.floor(Math.random() * (array.length))];  
  let izquierda = [];
  let equal = [];
  let derecha = [];
  for(let i = 0; i < array.length; i++){
    if(array[i] < indice){
      izquierda.push(array[i]);
    } else if(array[i] > indice){
      derecha.push(array[i]);
    } else {
      equal.push(array[i]);
    }
  }
  return quickSort(izquierda).concat(equal, quickSort(derecha));
}

// function merge(left, right){
//   let contadorLeft = 0;
//   let contadorRight = 0;
//   let array2 = [];
//   while(contadorLeft < left.length && contadorRight < right.length){
//     if(left[contadorLeft] < right[contadorRight]){
//       array2.push([contadorLeft]);
//       contadorLeft++;
//     } else {
//       array2.push([contadorRight]);
//       contadorRight++;
//     }
//   }
//   array2.concat(left.slice(contadorLeft)).concat(right.slice(contadorRight));
// }

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if(array.length === 1) return array;
  // function ourSplit(array){
  //   let middle = Math.floor(array.length/2);
  //   let left = array.slice(0,middle);
  //   let right = array.slice(middle);
  //   return [left, right]
  // }
  let middle = Math.floor(array.length/2);
  let left = array.slice(0,middle);
  let right = array.slice(middle);

  function merge(left, right){
    let contadorLeft = 0;
    let contadorRight = 0;
    let array2 = [];
    while(contadorLeft < left.length && contadorRight < right.length){
      if(left[contadorLeft] < right[contadorRight]){
        array2.push(left[contadorLeft]);
        contadorLeft++;
      } else {
        array2.push(right[contadorRight]);
        contadorRight++;
      }
    }
    return array2.concat(left.slice(contadorLeft)).concat(right.slice(contadorRight));
  }
  return merge(mergeSort(left), mergeSort(right));
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
