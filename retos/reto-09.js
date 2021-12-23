const groupBy = (collection, it) => {
  if (typeof it === 'function' || (typeof it === 'string' && collection[it] !== undefined)) {
    const objResult = collection.reduce((acc, value) => {
      const resolve = typeof it === 'function' 
        ? { key: it(value), keyStr: it(value).toString() }
        : { key: value[it], keyStr: value[it].toString() };
      
      if (!Object.keys(acc).find(itm => itm === resolve.keyStr)) {
        acc[`${resolve.key}`] = [value];
      } else {
        Object.entries(acc).forEach(itm => {
          if (itm[0] === resolve.keyStr) itm[1].push(value)
        })
      }

      return acc;
    }, {})

    return objResult;
  } else {
    const result = Object.values(collection).reduce((acc, value) => {
      if (!Object.keys(acc).find(itm => itm === value[it].toString())) {
        acc[`${value[it]}`] = [value];
      } else {
        Object.entries(acc).forEach(itm => {
          if (itm[0] === value[it].toString()) itm[1].push(value)
        })
      }

      return acc;
    }, {});

    return result;
  }
}

// const resultExec = groupBy([6.1, 4.2, 6.3], Math.floor)

// const resultExec = groupBy(['one', 'two', 'three'], 'length')

// const resultExec = groupBy([{age: 23}, {age: 24}], 'age')

/* const resultExec = groupBy(
  [1397639141184, 1363223700000],
  timestamp => new Date(timestamp).getFullYear()
) */

const resultExec = groupBy([
  { title: 'JavaScript: The Good Parts', rating: 8 },
  { title: 'Aprendiendo Git', rating: 10 },
  { title: 'Clean Code', rating: 9 },
], 'rating')

console.log({resultExec})
