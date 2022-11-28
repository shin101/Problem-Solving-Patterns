// add whatever parameters you deem necessary
function averagePair(arr, target) {
  // assign and move left + right values for O(N)
  let left = 0;
  let right = arr.length-1;

  while (left < right){
    let avg = (arr[left] + arr[right]) / 2;
    if(avg === target) {
      return true;
    } else if (avg > target){
      right --;
    } else {
      left ++;
    }
  }
  return false
}

module.exports = averagePair;