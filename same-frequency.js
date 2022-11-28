// add whatever parameters you deem necessary
function sameFrequency(num1, num2) {
  if(num1.length !== num2.length) return false;
  num1 = num1.toString(); // '34'
  num2 = num2.toString(); // '14'
  // iterate over string
  let obj1 = {}; // {'3':1, '4':1}
  let obj2 = {}; // {'1':1, '4':1}

  for(let num of num1){
    // num = parseInt(num)
    obj1[num] = obj1[num] + 1 || 1 
  }
  console.log(obj1);

  for(let num of num2){
    obj2[num] = obj2[num] + 1 || 1 
  }



  for(let letter in obj1){
    if(obj1[letter] !== obj2[letter]) return false;
  }

  return true;
}

module.exports = sameFrequency;