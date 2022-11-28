// add whatever parameters you deem necessary
function twoArrayObject(arr1, arr2) {
  return arr1.reduce((obj, value, idx) => {
    obj[value] = idx + 1 > arr2.length  ? null : arr2[idx] ;
    return obj;
  }, {});
}

module.exports = twoArrayObject;