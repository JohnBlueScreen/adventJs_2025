const gifts1 = ['car', 'doll#arm', 'ball', '#train'];

// 1. Bucle for sencillo 
const filterGifts = (arr) =>{

    const gifts1Sinregalo =[];
    for (let i = 0; i < arr.length; i++) {
    
        let palabra = arr[i];
        let contieneCaracter = false;

        for(let j = 0 ; j<palabra.length ; j++){
            letra = palabra[j];
            if(letra ==='#'){
                contieneCaracter = true;
                break;
            }           
        }
        if(!contieneCaracter){
            gifts1Sinregalo.push(palabra);
            
        }
        
    }
    return gifts1Sinregalo;
    
}

// 2. Solucion con index of

const gifts2 = ['#broken', 'rusty','excelent','#rusteeze'];

const filterGifts2 =(arr2) =>{

    const giftsSinReagalo2 =[];
    for (let i = 0; i < arr2.length; i++) {
        if (arr2[i].indexOf('#') === -1) {
            giftsSinReagalo2.push(arr2[i])
        }       
    }
    return giftsSinReagalo2;

}

// 3. Solucion For of

const gifts3 = ['car', 'doll#arm', 'ball', '#train'];

const filterGifts3 =(arr3) =>{

const gifts1Sinregalo3 = []

for (const e of arr3) {
    if(!e.includes('#')){
        filterGifts3.push(e)
    }
}
return gifts1Sinregalo3;
}


// Resultados

const good1 = `Solucion 1 : Bucle for sencillo  \n` +  filterGifts(gifts1) + `\n` ;
console.log(good1);

const good2 = `Solucion 2 : Usando IndexOf ("#")  \n` +  filterGifts2(gifts2) + `\n`;
console.log(good2)

const good3 = `Solucion 2 : Usando for...of ("#")  \n` +  filterGifts2(gifts3) + `\n`;
console.log(good3)