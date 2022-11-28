
function validAnagram(str){
  // if(!str1.length===str2.length) return false;
  let obj = new Map();

  for (let letter of str){
    obj[letter] == obj[letter]+1 || 1 ;
  }
  return obj;
}

function isValidAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;
  const charMap1 = validAnagram(str1);
  const charMap2 = validAnagram(str2);
  console.log(charMap1, charMap2);

}

isValidAnagram("qwerty","qeywrt")
