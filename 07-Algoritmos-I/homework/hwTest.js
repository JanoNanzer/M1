function factorear(num) {
    // Factorear el número recibido como parámetro y devolver en un array
    // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
    // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
    // Tu código:
    let factor = [1]
    let i = 2
    while(num !== 1){
        if(num % i === 0){
            factor.push(i)
            num == num/i
        } else {
            i++
        }
    }
    // let arr = [1,2,3,5,7];
    // let factor = [];
    // for(let i = arr.length-1; i > 0; i--){
    //   if(num / arr[i] > Math.floor(num/arr[i]) && num / arr[i] < Math.ceil(num/arr[i])){
    //     return
    //   } 
    //   if(num / arr[i] >= Math.floor(num/arr[i]) && num / arr[i] <= Math.ceil(num/arr[i])){
    //     num = num / arr[i]
    //     factor.push(arr[i])
    //   }
    // }
    // return factor;
  }

console.log(factorear(180))