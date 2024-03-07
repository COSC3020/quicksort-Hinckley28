
function partition(arr, left, right) {
  const pivot = arr[right];

  let i = left - 1;

  for (let j = left; j < right; j++) {
    if (arr[j] <= pivot) {
      i++;
      const temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }

  const temp = arr[i + 1];
  arr[i + 1] = arr[right];
  arr[right] = temp;

  return i + 1;
}


function quicksort(arr) {
  let left = 0;
  let right = arr.length - 1;

  const stack = [];
  stack.push({ left, right });

  while (stack.length > 0) {
    const { left, right } = stack.pop();

    if (left >= right) {
      continue;
    }

    const pivotIndex = partition(arr, left, right);

    if (pivotIndex < right) {
      stack.push({ left: pivotIndex + 1, right });
    }

    if (pivotIndex > left) {
      stack.push({ left, right: pivotIndex - 1 });
    }
  }

  return arr;
}
  
