// add whatever parameters you deem necessary
function constructNote(str1, str2) {
  let obj1 = {};
  let obj2 = {};

  for(let char of str1){
    obj1[char] = obj1[char] + 1 || 1
  }
  // {'a':1, 'b':1, 'c':1}
  for(let char of str2){
    obj2[char] = obj2[char] + 1 || 1
  }

  for(let char in obj1){
    if(!obj2[char]) return false;
    if(obj1[char] > obj2[char]) return false;
  }


  return true;
}

module.exports = constructNote;
