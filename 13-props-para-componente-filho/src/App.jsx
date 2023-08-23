import Profile from "./components/Profile";

export default function App() {
  return (
    <div className="app">
      <Profile
        avatar="https://randomuser.me/api/portraits/men/75.jpg"
        name="John Doe"
        bio="Full-stack javascript developer at Acme Inc."
        email="john.doe@email.com"
        phone="+5511987654321"
        githubUrl="https://github.com"
        linkedinUrl="https://linkedin.com"
        twitterUrl="https://twitter.com"
      />
    </div>
  );
}

//podemos utilizar props com rest param para passar qualquer props de um componente pai para um componente filho
//para utilizarmos basta abrir {...props} e usar os rest param, passando assim, todas as propriedades para o componente
//para poder usar mais de uma classe, utilizamos a classname seguido de chaves e template literals, onde dentro delas podemos passar mais de uma classe para o componente.
