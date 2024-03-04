export function obtenerProduccion(noTerminal, siguiente) {
	console.log('siguiente', siguiente)

	const producciones = {
		S: ["A", "B", "V"],
		A: ["a", "u", "t", "o", "m", "a", "t", "a"],
		B: ["e", "s", "t", "a", "d", "o", ":", "D", "-", "C", ";", "Q", ":", "D", ";", "P", ":", "DC", ";",],
		D: /[0-9]/.test(siguiente) ? [siguiente] : null,
		C: /[0-9]/.test(siguiente) ? ["D", "C"] : ["ε"],
		DC: /[0-9]/.test(siguiente) ? ["D", "C"] : null,
		Q: ["i", "n", "i", "c", "i", "o"],
		P: ["a", "c", "e", "p", "t", "a", "c", "i", "o", "n"],
		V: ["f", "i", "n"],
	  };	
  
	return producciones[noTerminal];
}