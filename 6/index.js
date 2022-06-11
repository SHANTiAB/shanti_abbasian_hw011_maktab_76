function getAdd() {
    let numOne = document.getElementById("val1").value;
    let numTwo = document.getElementById("val2").value;
    let sum = Number(numOne) + Number(numTwo);
    console.log(sum);
    console.log(typeof sum);
    
    document.getElementById('result').innerHTML = sum;
    let resultColor = document.getElementById('result');
    
    if(sum % 2 !== 0){
 
        resultColor.style.backgroundColor ='red';
    } else {
        resultColor.style.backgroundColor ='blue' ;
    }
  }
getAdd();