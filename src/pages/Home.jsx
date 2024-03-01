import { useState } from "react";
import { validacion } from "../logic";
import { ExamplesCodes } from "../logic";
import Monaco from "@monaco-editor/react";
import CopyCode from "../components/CopyCode";

function Home() {
  const [codigo, setCodigo] = useState("");
  const [resul, setResul] = useState([]);
  const [esValido, setEsValido] = useState(null);

  const analizarCodigo = () => {
    const cadenaS = codigo.replace(/\s/g, "");
    const { esValida, infoPila } = validacion(cadenaS);
    console.log(infoPila)
    setEsValido(esValida);
    setResul(infoPila);
  };

  function setEditorTheme(monaco) {
    monaco.editor.defineTheme("predictiva", {
      base: "vs-dark",
      inherit: true,
      rules: [],
      colors: {},
    });
  }

  return (
    <main className="mx-6 my-8 flex gap-10">
      <section>
        <h1 className=" font-medium text-4xl mb-2">Tabla Predictica</h1>
        <p className="text-[#DCEF64] font-semibold text-xl mb-4">Gramatica 2</p>
        <Monaco
          beforeMount={setEditorTheme}
          width="800px"
          height="60px"
          theme="predictiva"
          value={codigo}
          options={{
            selectOnLineNumbers: false,
            mouseStyle: "text",
            acceptSuggestionOnEnter: "off",
            quickSuggestions: false,
          }}
          onChange={(newValue) => {
            console.log("Valor:", newValue);
            setCodigo(newValue);
          }}
        />

        <button onClick={analizarCodigo} className="mt-8 bg-[#DCEF64] text-[#1A1A1C] h-10 w-44 rounded-lg font-medium">Verificar</button>
        
        <div className="my-10">
          <h3 className="font-medium text-xl mb-6">Ejemplos</h3>
          {
            ExamplesCodes.map((examble, index) => (
              <CopyCode code={ examble.code} key={ index } />
            ))
          }
        </div>
      </section>

      <section>
        <h3 className="font-medium text-2xl mb-2">Resultados = {esValido !== null && 
          <span className="text-[#a9a9a9]">{ esValido ? "Exitoso :)" : "Falló D:" }</span>
        }</h3>
        <div className="h-1 w-11 bg-[#DCEF64] rounded-sm mb-3"></div>
        <ul>
          {resul.map((info, index) => (
            <li key={index} className="mb-1">
              { info }
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Home;
