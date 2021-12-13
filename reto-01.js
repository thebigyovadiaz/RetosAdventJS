const ovejas = [
  { name: 'Noa', color: 'azul' },
  { name: 'Euge', color: 'rojo' },
  { name: 'Navidad', color: 'rojo' },
  { name: 'Ki Na Ma', color: 'rojo'},
  { name: 'AAAAAaaaaa', color: 'rojo' },
  { name: 'Nnnnnnnn', color: 'rojo'}
];

const countOvejas = (ovejas) => {
  return ovejas.filter(oveja => oveja.color.toLowerCase() === 'rojo' && oveja.name.toLowerCase().includes('a') && oveja.name.toLowerCase().includes('n'));
};

const result = countOvejas(ovejas);
console.log(result);