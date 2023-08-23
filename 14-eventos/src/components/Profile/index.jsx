import styles from "./styles.module.css";
import Title from "../Title";
import Button from "../Button";
import ProfileSection from "../ProfileSection";

export default function Profile(props) {
  function handleClick(ev) {
    console.log(ev);
    alert("voce agora está seguindo!");
  }

  return (
    <div className={styles.container}>
      <img className={styles.avatar} src={props.avatar} alt={props.name} />
      <Title>
        <span>{props.name}</span>
        <button className={styles.followButton} onClick={handleClick}>
          Follow me
        </button>
      </Title>
      <ProfileSection>{props.bio}</ProfileSection>
      <ProfileSection>{props.phone}</ProfileSection>
      <ProfileSection>{props.email}</ProfileSection>
      <ProfileSection
        className={styles.links}
        id="links-section"
        data-test="some value"
        aria-label="social-links"
      >
        <Button href={props.githubUrl}>GitHub</Button>
        <Button href={props.linkedinUrl}>LinkedIn</Button>
        <Button href={props.twitterUrl}>Twitter</Button>
      </ProfileSection>
    </div>
  );
}

//children é uma prop especial que serve para que um componente seja capaz de aceitar outros elementos
//esses componentes serão como filhos
//A sintaxe é colocar props.children na criação do elemento
//quando chamar o elemento no arquivo desejado,podemos colocar outro componente dentro.
//tudo o que for passado para dentro do componente vai ser representado pelo children.
