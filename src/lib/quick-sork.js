// quick sork function
function quickSork(arr) {
  if (arr.length < 2) return arr;
  let pivot = arr[0];
  let left = [];
  let right = [];
  for (let i = 1; i < arr.length; i++) {
    if (pivot > arr[i]) left.push(arr[i]);
    else right.push(arr[i]);
  }
  return quickSork(left).concat(pivot, quickSork(right));
}

function testQuickSork(arr) {
  console.log('quickSork(' + arr + ') = ' + quickSork(arr));
}

// quick sort with two pivot
// check this function

function quickSork2Pivot(arr) {
  if (arr.length < 2) return arr;
  let pivot1 = arr[0];
  let pivot2 = arr[1]; // this is not used
  
  let left = [];
  let right = [];
  for (let i = 2; i < arr.length; i++) {
    if (pivot1 > arr[i]) left.push(arr[i]);
    else right.push(arr[i]);
  }
  return quickSork2Pivot(left).concat(pivot1, quickSork2Pivot(right));
}