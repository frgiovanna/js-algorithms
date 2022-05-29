// Given a sorted array of integers, the function should find the first pair where the sum is 0

// it will check all of the items
function sumZero1(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
}

// it will check the last item and try to match the previous ones
function sumZero2(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

sumZero1([-4, -3, -2, -1, 0, 2, 5, 6])
sumZero2([-4, -3, -2, -1, 0, 2, 5, 6])

