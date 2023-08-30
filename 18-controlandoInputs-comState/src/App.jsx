import { useState } from "react";

export default function App() {
  const [password, setPassword] = useState("");
  const [copyText, setCopyText] = useState("Copiar");
  const [passwordSize, setPasswordSize] = useState("12");
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
        <label htmlFor="passwordSize">Tamanho</label>
        <input
          type="number"
          id="passwordSize"
          min={1}
          value={passwordSize}
          onChange={(ev) => setPasswordSize(ev.target.value)}
        />
      </div>
      <button onClick={generatePwd}>
        Gerar senha de {passwordSize} caracteres
      </button>
      <button onClick={copyToClipboard}>{copyText}</button>

      <div>{password}</div>
    </div>
  );
}
