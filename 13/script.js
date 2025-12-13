function runFactory(factory) {
    const rows = factory.length;
    const cols = factory[0].length;
    
    // Mapa de direcciones
    const directions = {
        '>': [0, 1],   // derecha
        '<': [0, -1],  // izquierda
        '^': [-1, 0],  // arriba
        'v': [1, 0]    // abajo
    };
    
    // Para detectar loops - almacenamos posiciones visitadas
    const visited = new Set();
    
    // Posición inicial
    let currentRow = 0;
    let currentCol = 0;
    
    while (true) {
        // Verificar si estamos fuera de los límites
        if (currentRow < 0 || currentRow >= rows || currentCol < 0 || currentCol >= cols) {
            return 'broken';
        }
        
        // Crear clave para la posición actual
        const positionKey = `${currentRow},${currentCol}`;
        
        // Verificar si ya visitamos esta posición (loop)
        if (visited.has(positionKey)) {
            return 'loop';
        }
        
        // Marcar como visitada
        visited.add(positionKey);
        
        // Obtener el símbolo en la celda actual
        const cell = factory[currentRow][currentCol];
        
        // Si encontramos un punto, completado
        if (cell === '.') {
            return 'completed';
        }
        
        // Si es un movimiento, actualizar posición
        if (directions.hasOwnProperty(cell)) {
            const [rowDelta, colDelta] = directions[cell];
            currentRow += rowDelta;
            currentCol += colDelta;
        } else {
            // Por si acaso hay algún símbolo no esperado
            return 'broken';
        }
    }
}

// Ejemplos de prueba
console.log(runFactory(['>>.'])); // 'completed'
/* console.log(runFactory(['>>>'])); // 'broken'
console.log(runFactory(['>><'])); // 'loop'
console.log(runFactory(['>>v', '..<'])); // 'completed'
console.log(runFactory(['>>v', '<<<'])); // 'broken'
console.log(runFactory(['>v.', '^..'])); // 'completed'
console.log(runFactory(['v.', '^.'])); // 'loop' */