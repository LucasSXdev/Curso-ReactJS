import styles from "./styles.module.css";
import Title from "../Title";
import Button from "../Button";

export default function Profile(props) {
  return (
    <div className={styles.container}>
      <img className={styles.avatar} src={props.avatar} alt={props.name} />
      <Title>
        <span>{props.name}</span>
        <button>Follow me</button>
      </Title>
      <div>{props.bio}</div>
      <div>{props.phone}</div>
      <div>{props.email}</div>
      <div className={styles.links}>
        <Button href={props.githubUrl}>GitHub</Button>
        <Button href={props.linkedinUrl}>LinkedIn</Button>
        <Button href={props.twitterUrl}>Twitter</Button>
      </div>
    </div>
  );
}

//children é uma prop especial que serve para que um componente seja capaz de aceitar outros elementos
//esses componentes serão como filhos
//A sintaxe é colocar props.children na criação do elemento
//quando chamar o elemento no arquivo desejado,podemos colocar outro componente dentro.
