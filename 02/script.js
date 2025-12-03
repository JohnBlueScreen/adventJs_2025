const production1 = [
  { toy: 'car', quantity: 3 },
  { toy: 'doll', quantity: 1 },
  { toy: 'ball', quantity: 2 }
];




// 1. Metodo Map


const manufactureGifts = (arr) => {

  const finalGifts = arr.map(item => Array(item.quantity).fill(item.toy)).flat();

  // Array(item.quantity) -> crea un array con el numero de items que tenemos
  // fill(item.toy) -> añade ese elemento la cantidad de veces
  // flat(); -> aplana / une los arrays en uno solo -> finalGifts

  console.log(finalGifts);



}
const result1 = manufactureGifts(production1);
console.log(result1);
