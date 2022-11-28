// add whatever parameters you deem necessary
function countPairs(arr,num) {
  let count = 0;
  let left = 0;
  let right = arr.length -1
  arr.sort((a,b) => a-b);
  // if num is in arr, count ++;
  //for each value in array, if left + right = num, count ++ 
  while(left < right){
    let sum = arr[left] + arr[right]
    if(sum === num){
      count++;
      left++;
      right--;
    } else if (sum > num) {
      right--;
    } else {
      left ++;
    }

  }

  return count;
}

module.exports = countPairs;