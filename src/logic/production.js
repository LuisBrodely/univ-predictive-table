export function obtenerProduccion(noTerminal, siguiente) {
	console.log('siguiente', siguiente)

	const producciones = {
		S: ["A", "B", ":", "D", "-", "C", ";", "Q", ":", "D", ";", "P", ":", "C", ";"],
		A: ["a", "u", "t", "o", "m", "a", "t", "a"],
		B: ["e", "s", "t", "a", "d", "o"],
		D: /[0-9]/.test(siguiente) ? [siguiente] : null,
		C: /[0-9]/.test(siguiente) ? ["D", "C"] : ["ε"],
		Q: ["i", "n", "i", "c", "i", "o"],
		P: ["a", "c", "e", "p", "t", "a", "c", "i", "o", "n"],
	};
  
	return producciones[noTerminal];
}