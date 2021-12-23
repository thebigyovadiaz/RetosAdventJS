const carta = 'bici coche  balón _playstation  bici coche peluche';
const arrGifs = carta.split(' ')
  .filter(gif => !gif.includes('_'))
  .filter(item => item)

const result = arrGifs.reduce((acc, value) => {
  if (!acc[value]) {
    return {
      ...acc,
      [value]: 1
    }
  }
  
  return {
    ...acc,
    [value]: acc[value] + 1
  }
}, {});

console.log(result);