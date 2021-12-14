const arbolNavidad = (numb) => {
  let strEnd = '\n';
  const numbFinal = numb + (numb - 1)
  const strInit = '_'.repeat(numbFinal);
  const middle = Math.round(numbFinal / 2);
  const pieArbol = strInit.split('');
  pieArbol[middle - 1] = '#';

  for (let i = 1; i <= numb; i++) {
      const numNewStr = i + (i - 1);
      const newStr = '*'.repeat(numNewStr);
      const sliceStart = strInit.slice(0, middle - i);
      const numSliceEnd = (middle - 1) + i;
      const sliceEnd = strInit.slice(numSliceEnd, numbFinal);
      const strEnded = sliceStart + newStr + sliceEnd;
      strEnd += strEnded + '\n';   
  }
  
  strEnd += pieArbol.join('') + '\n';
  strEnd += pieArbol.join('') + '\n';
  return strEnd;
}

console.log(arbolNavidad(40));