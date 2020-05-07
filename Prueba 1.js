


function convertToRoman(num) {
    if(typeof num != "number"){
      return undefined
    }
    function shit(arr){
      var arrC=["I","IV","V","IX"],
          arrX=["X","XL","L","XC"],
          arrI=["C","CD","D","CM"];
      let emptyArr=[];
  
      let newArr= arr;
  
      if (newArr[0] < 4){
          emptyArr.push( arrI[0].repeat(newArr[0]) );
      } 
      else if (newArr[0] === 4){
          emptyArr.push(arrI[1]);
      } 
      else if (newArr[0] > 4 && newArr[0] < 9){
          emptyArr.push(arrI[2] + arrI[0].repeat(newArr[0] - 5));
      } 
      else {
          emptyArr.push(arrI[3]);
      }
  
      if (newArr[1] < 4){
          emptyArr.push( arrX[0].repeat(newArr[1]) );
      } 
      else if (newArr[1] === 4){
          emptyArr.push(arrX[1]);
      } 
      else if (newArr[1] > 4 && newArr[0] < 9){
          emptyArr.push(arrX[2] + arrX[0].repeat(newArr[1] - 5));
      } 
      else {
          emptyArr.push(arrX[3]);
      }
  
      if (newArr[2] < 4){
          emptyArr.push( arrC[0].repeat(newArr[2]) );
      } 
      else if (newArr[2] === 4){
          emptyArr.push(arrC[1]);
      } 
      else if (newArr[2] > 4 && newArr[2] < 9){
          emptyArr.push(arrC[2] + arrC[0].repeat(newArr[2] - 5));
      } 
      else {
          emptyArr.push(arrC[3]);
      }
      
      return emptyArr;
  
  }
  
    let first= num.toString().split(""),
        seg=[], 
        ter=[];
    if( first.length > 3){
      let m = "M";
      for(let i = 0; i < 3;i++){
      seg.unshift(first.pop());
      }
      ter.push(m.repeat(parseInt(first.join(""))))
      var x= 100;
      let some= shit(seg);
      return ter.concat(some).join("");
    } else {
      return shit(first)
    }
  
    
  }
  convertToRoman(1789);