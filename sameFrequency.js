function sameFrequency(firstNumber, secondNumber) {
  if (firstNumber === secondNumber) {
    return true;
  }

  if (firstNumber.toString().length !== secondNumber.toString().length) {
    return false;
  }
  let list = secondNumber.toString().split("");
  let firstList = firstNumber.toString().split("");

  let valid = false;
  for (let i = 0; i < firstList.length; i++) {
    valid = list.includes(firstList[i]);
    if (!valid) {
      return false;
    }
  }
  return valid;
}

function sameFrequencySecondOption(num1, num2){
    let strNum1 = num1.toString();
    let strNum2 = num2.toString();
    if(strNum1.length !== strNum2.length) return false;
    
    let countNum1 = {};
    let countNum2 = {};
    
    for(let i = 0; i < strNum1.length; i++){
      countNum1[strNum1[i]] = (countNum1[strNum1[i]] || 0) + 1
    }
    
    for(let j = 0; j < strNum1.length; j++){
      countNum2[strNum2[j]] = (countNum2[strNum2[j]] || 0) + 1
    }
    
    for(let key in countNum1){
      if(countNum1[key] !== countNum2[key]) return false;
    }
   
    return true;
  }

console.log(sameFrequency(3421, 2143));
