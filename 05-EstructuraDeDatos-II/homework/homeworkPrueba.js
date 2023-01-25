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

LinkedList.prototype.removeAt = function(){}

LinkedList.prototype.addAt = function(){}

LinkedList.prototype.count = function(){}