const sumNumbers = (arr, numb) => {
  const arrResult = [];

  for (let i = 0; i < arr.length; i++) {
    let equal = false;
    for (let j = i + 1; j < arr.length; j++) {
      const sum = arr[i] + arr[j];
      if (sum === numb) {
        arrResult.push(arr[i])
        arrResult.push(arr[j])
        equal = true;
        break;
      }
    }

    if (equal) break;
  }

  return arrResult.length ? arrResult : null;
}

console.log(sumNumbers([0, 2, 2, 3, -1, 1, 5], 6));