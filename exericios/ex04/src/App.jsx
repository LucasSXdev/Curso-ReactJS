import { useState } from "react";

export default function App() {
  const [password, setPassword] = useState("");
  const [copyText, setCopyText] = useState("Copiar");
  function generatePwd() {
    let characteres =
      "qwertyuiopasdfghjklçzxcvbnmQWERTYUIOPASDFGHJKLÇZXCVBNM123456789";
    const length = 12;
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
      <button onClick={generatePwd}>Gerar</button>
      <button onClick={copyToClipboard}>{copyText}</button>
      <div>{password}</div>
    </div>
  );
}
