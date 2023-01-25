function Stack() {
    this.pila = []
}

Stack.prototype.addStack = function(elem){
    this.pila.push(elem);
}
Stack.prototype.deleteStack = function(){
    return this.pila.pop()
}
Stack.prototype.sizeStack = function(){
    return this.pila.length;
}

var stack;
stack = new Stack();

console.log(stack.pila)

stack.sizeStack;
stack.addStack('Jano');

console.log(stack)

console.log(stack.addStack('Nanzer'));
console.log(stack.sizeStack());
console.log(stack.addStack('M1'));
console.log(stack.addStack('Henry'));
console.log(stack)
console.log(stack.deleteStack());