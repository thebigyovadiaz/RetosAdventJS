const pricesBTC = [39, 18, 29, 25, 34, 2, 5]
const pricesBTC2 = [10, 20, 30, 40, 50, 60, 70]
const pricesBTC3 = [18, 15, 12, 11, 9, 7]
const pricesBTC4 = [3, 3, 3, 3, 3]


const maxProfit = (arrValue) => {
  let newArr = [...arrValue];
  if (arrValue.indexOf(Math.max(...arrValue)) === 0 || arrValue.indexOf(Math.min(...arrValue)) === arrValue.length) {
    newArr = arrValue.slice(1, 6)
  }

  if (newArr.indexOf(Math.min(...newArr)) > newArr.indexOf(Math.max(...newArr))) {
    return -1;
  }

  const result = Math.max(...newArr) - Math.min(...newArr);
  return result > 0 ? result : -1;
}

//console.log("Result 1: ", maxProfit(pricesBTC))
console.log("Result 2: ", maxProfit(pricesBTC2))
// console.log("Result 3: ", maxProfit(pricesBTC3))
// console.log("Result 4: ", maxProfit(pricesBTC4))
