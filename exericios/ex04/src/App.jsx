import Button from "./components/Button";
import MainSection from "./components/MainSection";

export default function App() {
  return (
    <>
      <MainSection>
        <h1>Gerador de senhas</h1>
        <Button text="Gerar senha"></Button>
        <Button text="Copiar senha"></Button>
        <div id="output"></div>
      </MainSection>
    </>
  );
}
