import { obtenerProduccion } from "./productions";

export function validacion(codigo) {
  let pila = ["$"];
  let contador = 0;
  let infoPila = [];
  pila[1] = "S";

  const pushInfo = (X) => {
    infoPila.push(`Push: ${X} - ${codigo.slice(contador)}`);
  };

  const popInfo = (X) => {
    infoPila.push(`Pop: ${X} - ${codigo.slice(contador)}`);
  };

  debugger
  while (pila.length > 0) {
    const X = pila.pop();
    if (!X) {
      break;
    }
    const a = codigo[contador];

    if (X === "$") {
      infoPila.push("TERMINADO");
      break;
    }

    if (X === a) {
      contador++;
    } else if (esNoTerminal(X)) {
      const produccion = obtenerProduccion(X, a);

      if (produccion) {
        pushInfo(X);
        if (produccion[0] !== "ε") {
          for (let i = produccion.length - 1; i >= 0; i--) {
            pila.push(produccion[i]);
          }
        }
      } else {
        infoPila.push(`Error: No encontró algo válido para ${X}.`);
        return { esValida: false, infoPila };
      }
    } else {
      popInfo(X);
      return { esValida: false, infoPila };
    }
  }
  return { esValida: contador === codigo.length, infoPila };
}

function esNoTerminal(simbolo) {
  const terminales = ["automata", "estado", ";", "[", ",", "]"];
  return !terminales.includes(simbolo);
}