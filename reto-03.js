const letter = "bici coche (balón) bici coche peluche";
const letterII = "peluche (bici [coche) bici coche balón";
const letterIII = "(peluche {) bici";
const letterIV = "() bici";
const letterV = "bici coche (balón bici coche";
const letterVI = "(muñeca) consola bici";

const searchStr = (str) => {
  const search = str.includes('(');
  const searchII = str.includes(')');
  const init = str.indexOf('(');
  const end = str.indexOf(')') + 1;
  
  if (search && searchII && (end > init)) {
    const sliceStr = str.slice(init + 1, end - 1);    
    if (!sliceStr || sliceStr.includes('[') || sliceStr.includes(']') || sliceStr.includes('{') || sliceStr.includes('}')) return false;
    
    return true;
  } else {
    return false;
  }
}

console.log(searchStr(letter));