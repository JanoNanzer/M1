"use strict";

const { notEqual } = require("assert");
const { Hash } = require("crypto");

/*
Implementar la clase LinkedList, definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;
  - remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía);
  - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser un valor o un callback. En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado; en el segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, retorne true. 
  Ejemplo: 
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par, busca un nodo cuyo valor sea un número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar null.
*/

function LinkedList() {
  this.head = null;
  this._length = 0;
}

function Node(value) {
  this.value = value
  this.next = null
}

LinkedList.prototype.add = function(value){
  var nuevoNodo = new Node(value);
  
  let actual = this.head 

  if(!actual){
    this.head = nuevoNodo;
    this._length++;
    return;
  }

  while(actual.next){
    actual = actual.next
  }

  actual.next = nuevoNodo;
  // this._length++;
  return nuevoNodo;
}

LinkedList.prototype.remove = function(){

  let actual = this.head;
  let eliminado;

  if(actual === null){
    return null;
  } 
  
  // if(actual && !actual.next){
  //   let aux = actual.value;
  //   this.head = null;
  //   return aux;
  // }

  if(actual.next === null){
    this.head = null;
    return actual.value;
  }

  while(actual.next){
    eliminado = actual;
    actual = actual.next;
  }

  // let aux = actual.next.value
  // actual.next = null
  eliminado.next = null
  return actual.value;

  //   if(actual.next.next === null){
  //     eliminado = actual.next;
  //     actual.next = null
  //     return eliminado;
  //   } if(actual.next.next !== null){
  //     actual = actual.next;
  //   }
  // }
}

 // do while

LinkedList.prototype.search = function(dato){
  let actual = this.head;
  let resultado = null;

  if(actual === null){return null}
  while(actual){
    if(actual.value === dato){return actual.value;}
    else if(typeof dato === 'function'){
      if(dato(actual.value)){
        return actual.value
      }
    }
    actual = actual.next
  }
  return null;
  // while(actual){
  //   if(actual.value === dato){
  //     resultado = dato;
  //     return resultado
  //   }
  //   if(actual.value !== dato){
  //   actual = actual.next
  //   }
  // } 
  // return resultado;
}

/*
Implementar la clase HashTable.

Nuetra tabla hash, internamente, consta de un arreglo de buckets (slots, contenedores, o casilleros; es decir, posiciones posibles para almacenar la información), donde guardaremos datos en formato clave-valor (por ejemplo, {instructora: 'Ani'}).
Para este ejercicio, la tabla debe tener 35 buckets (numBuckets = 35). (Luego de haber pasado todos los tests, a modo de ejercicio adicional, pueden modificar un poco la clase para que reciba la cantidad de buckets por parámetro al momento de ser instanciada.)

La clase debe tener los siguientes métodos:
  - hash: función hasheadora que determina en qué bucket se almacenará un dato. Recibe un input alfabético, suma el código numérico de cada caracter del input (investigar el método charCodeAt de los strings) y calcula el módulo de ese número total por la cantidad de buckets; de esta manera determina la posición de la tabla en la que se almacenará el dato.
  - set: recibe el conjunto clave valor (como dos parámetros distintos), hashea la clave invocando al método hash, y almacena todo el conjunto en el bucket correcto.
  - get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto de la tabla.
  - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave (retorna un booleano).

Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. Primero puedo chequear, con hasKey, si ya hay algo en la tabla con el nombre 'instructora'; luego, invocando set('instructora', 'Ani'), se almacenará el par clave-valor en un bucket específico (determinado al hashear la clave)
*/

function HashTable() {
  this.numBuckets = 35;
  this.buckets = []
}

HashTable.prototype.hash = function(key){
  let sum = 0;
   for(let i = 0; i < key.length; i++){
     sum += key.charCodeAt(i);
   }
   return sum % this.numBuckets;
}

HashTable.prototype.set = function(key, value){
  if(typeof key !== 'string') throw new TypeError('Keys must be strings');

  let i = this.hash(key); // indice donde va a ir el key:value

  // this.buckets.push(bucket.key = value);
  // let bucket = {key:value}

  if(this.buckets[i] === undefined){
    this.buckets[i] = {};
  }
  this.buckets[i][key] = value;
}

HashTable.prototype.get = function(key){
  let i = this.hash(key);
  return this.buckets[i][key];

  // if(this.key === key){
  //   return this.value;
  // }
  // this.buckets[i][key] = value;
}

HashTable.prototype.hasKey = function(key){
  let i = this.hash(key);
  return this.buckets[i].hasOwnProperty(key);
  
  
  // for(let i = 0; i < this.buckets.length; i++){
  //   if(key === this.bucket[i][key]){
  //     return true;
  //   }
  // } 
  // return false;
}

// HashTable.prototype.Hash = function(key){
//   let sum = 0;
//   for(let i  = 0; i < key.length; i++){
//     sum += key.charCodeAt(i);
//   }
//   return sum % this.num.Buckets;
// }

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Node,
  LinkedList,
  HashTable,
};
