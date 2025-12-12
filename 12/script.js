function elfBattle(moves1, moves2) {
    let vida1 = 3;
    let vida2 = 3;
    
    // Determinar cuántas rondas jugar (mínimo de longitudes)
    const maxRounds = Math.min(moves1.length, moves2.length);
    
    for (let i = 0; i < maxRounds; i++) {
        const move1 = moves1[i];
        const move2 = moves2[i];
        
        let daño1 = 0;
        let daño2 = 0;
        
        // Calcular daños para esta ronda
        if (move1 === 'A') {
            if (move2 === 'A') {
                // A vs A
                daño1 = 1;
                daño2 = 1;
            } else if (move2 === 'B') {
                // A vs B: A es bloqueado
                daño1 = 0;
                daño2 = 0;
            } else if (move2 === 'F') {
                // A vs F
                daño1 = 2;  // F hace 2 daños
                daño2 = 1;  // A hace 1 daño
            }
        } else if (move1 === 'B') {
            if (move2 === 'A') {
                // B vs A: A es bloqueado
                daño1 = 0;
                daño2 = 0;
            } else if (move2 === 'B') {
                // B vs B
                daño1 = 0;
                daño2 = 0;
            } else if (move2 === 'F') {
                // B vs F: F no puede ser bloqueado
                daño1 = 0;
                daño2 = 2;  // F hace 2 daños
            }
        } else if (move1 === 'F') {
            if (move2 === 'A') {
                // F vs A
                daño1 = 1;  // A hace 1 daño
                daño2 = 2;  // F hace 2 daños
            } else if (move2 === 'B') {
                // F vs B: F no puede ser bloqueado
                daño1 = 0;
                daño2 = 2;  // F hace 2 daños
            } else if (move2 === 'F') {
                // F vs F
                daño1 = 2;
                daño2 = 2;
            }
        }
        
        // Aplicar daños
        vida1 -= daño1;
        vida2 -= daño2;
        
        // Verificar si la batalla terminó
        if (vida1 <= 0 || vida2 <= 0) {
            // Si ambos llegaron a 0 o menos en la misma ronda
            if (vida1 <= 0 && vida2 <= 0) {
                return 0;
            }
            // Si solo elfo 1 perdió
            if (vida1 <= 0) {
                return 2;
            }
            // Si solo elfo 2 perdió
            if (vida2 <= 0) {
                return 1;
            }
        }
    }
    
    // Si terminaron todas las rondas sin que nadie llegue a 0
    if (vida1 > vida2) {
        return 1;
    } else if (vida2 > vida1) {
        return 2;
    } else {
        return 0;
    }
}

// Pruebas con los ejemplos dados:
console.log(elfBattle('A', 'B')); // 0
/* console.log(elfBattle('F', 'B')); // 1
console.log(elfBattle('AAB', 'BBA')); // 0
console.log(elfBattle('AFA', 'BBA')); // 1
console.log(elfBattle('AFAB', 'BBAF')); // 1
console.log(elfBattle('AA', 'FF')); // 2 */