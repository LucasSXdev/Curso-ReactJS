import { useState } from "react";
import Input from "./components/Input";

export default function App() {
  const [password, setPassword] = useState("");
  const [copyText, setCopyText] = useState("Copiar");
  const [passwordSize, setPasswordSize] = useState(12);
  const [showInput, setShowInput] = useState(false);

  function generatePwd() {
    let characteres =
      "qwertyuiopasdfghjklçzxcvbnmQWERTYUIOPASDFGHJKLÇZXCVBNM123456789";
    const length = passwordSize;
    let newPwd = "";
    for (let i = 0; i < length; i++) {
      const position = Math.floor(Math.random() * characteres.length);
      newPwd += characteres[position];
    }
    setPassword(newPwd);
    setCopyText("Copiar");
  }

  function copyToClipboard() {
    window.navigator.clipboard.writeText(password);
    setCopyText("Copiado");
  }
  return (
    <div className="app">
      <h1>Gerador de senhas</h1>
      <div>
        <label htmlFor="showInput">Customizar Tamanho</label>
        <input
          type="checkbox"
          id="showInput"
          onChange={() => setShowInput((currentState) => !currentState)}
        />
      </div>
      {showInput ? (
        <div>
          <label htmlFor="passwordSize">Tamanho</label>
          <Input
            passwordSize={passwordSize}
            setPasswordSize={setPasswordSize}
          />
        </div>
      ) : null}

      <button onClick={generatePwd}>
        Gerar senha de {passwordSize} caracteres
      </button>
      <button onClick={copyToClipboard}>{copyText}</button>

      <div>{password}</div>
    </div>
  );
}

//Para utilizarmos o state de um componente externo, que esteja em outra pasta devemos:
//Utilizar na função que retorna o componente o props."nome da variavel ou função"
//Depois devemos manter o state desse componente no arquivo principal
//Por fim devemos referenciar as variaveis no arquivo principal
