export default function App() {
  /*
  O JSX permite inserir qualquer expressão JavaScript dentro da marcação, em qualquer lugar.
   Para fazer isso basta usar um par de chaves “{ }”.
    Por exemplo, podemos exibir de forma dinâmica o valor de uma variável:
  */
  const texto = "olá,mundo";
  const sum = (a, b) => {
    return a + b;
  };

  return (
    <div>
      <h1>{texto}</h1>
      <p>A soma de 1 + 1 é:{sum(1, 1)}</p>
    </div>
  );
}

/*
-Podemos declarar variáveis no JSX 
-Para acessar essas variáveis dentro do corpo da nossa pagina basta utilizar {} e passar dentro o nome da var
-Podemos também passar funções dentro das {},passando parametros.
-Não podemos utilizar blocos como (for,while,if e else e etc).
-Podemos utilizar expressoes ternárias e booleanas dentro das {}
*/
