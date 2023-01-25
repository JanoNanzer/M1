
String.prototype.repeatify = function(int){
    if(int <= 0){
        return '';
    } else {
        var resultado = [];
        for(let i = 0; i < int; i++){
            resultado.push(this);
        }
        return resultado.join('');
    }
}

console.log('Hola'.repeatify(3));

















// var Shape = {
//     type: undefined,
//     getType: function(){
//         return 'Triangle';
//     }
// }

// Shape.prototype.triangle = function(a,b,c){
//     a = a,
//     b = b,
//     c = c;
//     return a
// }

// Shape.prototype.getPerimeter = function(){
//     let perimetro = this.a + this.b + this.c;
//     return perimetro
// }
