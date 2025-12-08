const drawTree = (altura, frecuencia, adornoEspecial) => {
    const arbol = [];
    const ancho = 2 * altura - 1;
    const centro = Math.floor(ancho / 2);
    
    // 1. Construir el triángulo (copa del árbol)
    for (let fila = 0; fila < altura; fila++) {
        arbol[fila] = [];
        
        for (let col = 0; col < ancho; col++) {
            if (col >= centro - fila && col <= centro + fila) {
                const posicionRelativa = col - (centro - fila);
                
                if (frecuencia > 0 && posicionRelativa % frecuencia === 0) {
                    arbol[fila][col] = adornoEspecial;
                } else {
                    arbol[fila][col] = '*';
                }
            } else {
                arbol[fila][col] = ' ';
            }
        }
    }
    
    // 2. Añadir el tronco (fuera de los bucles principales)
    // El tronco tiene ancho + 2 para que quede centrado
    const troncoAncho = ancho + 2;
    const troncoCentro = Math.floor(troncoAncho / 2)-1;
    
    // Crear fila del tronco
    const tronco = [];
    for (let col = 0; col < troncoAncho; col++) {
        // Solo poner '#' en el centro
        if (col === troncoCentro) {
            tronco[col] = '#';
        } else {
            tronco[col] = ' ';
        }
    }
    
    // Añadir el tronco al árbol
    arbol.push(tronco);
    
    // 3. Mostrar resultado
    console.log(`\nÁrbol con tronco:`);
    arbol.forEach(fila => console.log(fila.join('')));
    
    return arbol;
}

// Probar
drawTree(5, 2, '@');