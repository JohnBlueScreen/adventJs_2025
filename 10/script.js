const maxDepth = (str) => {
    let depth = 0;
    let max = 0;
    
    for (let char of str) {
        if (char === '[') {
            depth++;
            max = Math.max(max, depth);
        } else if (char === ']') {
            depth--;
            if (depth < 0) return -1; // Cierra antes de abrir
        }
    }
    
    return depth === 0 ? max : -1; // Si depth != 0, hay desbalance
}

// Test rápido
const tests = [
    { input: '[][[]][]', expected: 2 },
    { input: '[[[]]]', expected: 3 },
    { input: '][', expected: -1 },
    { input: '[[]', expected: -1 },
    { input: '[]', expected: 1 },
    { input: '', expected: 0 }
];

tests.forEach(test => {
    const result = maxDepth(test.input);
    console.log(`maxDepth("${test.input}") = ${result} ${result === test.expected ? '✓' : '✗'}`);
});