"use strict";

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)

  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/

function BinarySearchTree(value) {
  this.value = value;
  this.right = null;
  this.left = null;
}

BinarySearchTree.prototype.size = function (){
  if(!this.left && !this.right) return 1;
  if(!this.left) return 1 + this.right.size();
  if(!this.right) return 1 + this.left.size();
  return 1 + this.right.size() + this.left.size();
}

BinarySearchTree.prototype.insert = function (value){
  if(value > this.value){
    if(this.right !== null){
      this.right.insert(value);
    } else {
      this.right = new BinarySearchTree(value)
    }
  }

  if(value < this.value){
    if(this.left !== null){
      this.left.insert(value); 
    } else {
      this.left = new BinarySearchTree(value);
    }
  }
}

BinarySearchTree.prototype.contains = function (value){
  if(this.value === value){
    return true;
  }

  if(value < this.value){
    if(this.left === null){
      return false;
    } else {
      return this.left.contains(value);
    }
  }
  
  if(value > this.value){
    if(this.right === null){
      return false;
    } else {
      return this.right.contains(value);
    }
  }
}

BinarySearchTree.prototype.depthFirstForEach = function (cb, orden){
// root, izq, der
// izq, der, root
// izq, root, der
  if(orden === 'pre-order'){
    cb(this.value);
    if(this.left !== null) this.left.depthFirstForEach(cb, orden);
    if(this.right !== null) this.right.depthFirstForEach(cb, orden);
  }
  else if(orden === 'post-order'){
    if(this.left !== null) this.left.depthFirstForEach(cb, orden);
    if(this.right !== null) this.right.depthFirstForEach(cb, orden);
    cb(this.value);
  }
  else {
    if(this.left !== null) this.left.depthFirstForEach(cb, orden);
    cb(this.value);
    if(this.right !== null) this.right.depthFirstForEach(cb, orden);
  }
  //   let arr = [];
  //   if(!this.left){
  //     arr.push(this.value)
  //     if(this.right){
  //       return this.left.depthFirstForEach(orden)
  //     } else {return}

  //   } else{
  //      return this.left.depthFirstForEach(orden);
  //   }
  //   total.push(this.value)
  //   if(this){}
  // }
}

BinarySearchTree.prototype.breadthFirstForEach = function (cb, arr=[]){
  // let arr = []
  if(this.left !==null){
    arr.push(this.left);
  }
  if(this.right !==null){
    arr.push(this.right);
  }

  cb(this.value);

  if(arr.length > 0){
    arr.shift().breadthFirstForEach(cb, arr);
  }
  // cb(this.value);
  // if(this.left !== null) this.left.breadthFirstForEach(cb);
  // if(this.right !== null) this.right.breadthFirstForEach(cb);
}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};




// let a = []
// a = ([1],[2],[3],[4],[5])
// console.log(a)