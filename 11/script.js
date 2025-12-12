function findUnsafeGifts(warehouse) {
    const rows = warehouse.length;
    const cols = warehouse[0].length;
    let unsafe = 0;
    
    // Coordenadas de las 4 posiciones adyacentes
    const adjacentPositions = [
        { row: -1, col: 0 },  // arriba
        { row: 1, col: 0 },   // abajo
        { row: 0, col: -1 },  // izquierda
        { row: 0, col: 1 }    // derecha
    ];
    
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (warehouse[i][j] === '*') {
                let hasCamera = false;
                
                // Revisar cada posición adyacente
                for (const pos of adjacentPositions) {
                    const adjRow = i + pos.row;
                    const adjCol = j + pos.col;
                    
                    // Verificar que esté dentro de los límites
                    if (adjRow >= 0 && adjRow < rows && 
                        adjCol >= 0 && adjCol < cols) {
                        
                        // Si hay una cámara en esta posición adyacente
                        if (warehouse[adjRow][adjCol] === '#') {
                            hasCamera = true;
                            break; // Ya sabemos que está vigilado
                        }
                    }
                }
                
                // Si no tiene cámara en ninguna posición adyacente
                if (!hasCamera) {
                    unsafe++;
                }
            }
        }
    }
    
    return unsafe;
}

// Más pruebas
console.log("=== Pruebas adicionales ===");

// Caso 1: Todos los regalos están vigilados
console.log(findUnsafeGifts([
  '*#*',
  '#*#',
  '*#*'
])); // ➞ 0 (todos vigilados)

// Caso 2: Solo regalos en los bordes
/* console.log(findUnsafeGifts([
  '****',
  '....',
  '....',
  '....'
])); // ➞ 4 (los 4 de arriba no tienen cámaras)

// Caso 3: Regalo completamente aislado
console.log(findUnsafeGifts([
  '.....',
  '..*..',
  '.....'
])); // ➞ 1

// Caso 4: Almacén vacío
console.log(findUnsafeGifts([
  '.....',
  '.....',
  '.....'
])); // ➞ 0 */