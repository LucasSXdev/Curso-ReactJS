import styles from "./styles.module.css";
import Title from "../Title";
import Button from "../Button";
import ProfileSection from "../ProfileSection";
import { useState } from "react";

export default function Profile(props) {
  const [followText, setFollowText] = useState("Follow");

  function handleClick(ev) {
    alert("voce agora está seguindo!");
    setFollowText("Following");
  }

  return (
    <div className={styles.container}>
      <img className={styles.avatar} src={props.avatar} alt={props.name} />
      <Title>
        <span>{props.name}</span>
        <button className={styles.followButton} onClick={handleClick}>
          {followText}
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

//state é um recurso do react que permite que tenhamos informações na tela que sejam renderizadas e atulazidas de forma dinamica de acordo com o javascript
//Para refletir a mudança na tela, é preciso declarar uma variavel state, utilizando a função useState.
//A convenção para usar o usestate é desestruturar e dentro vai ser passado 2 valores
//O primeiro valor precisa ser o nome da variável com o valor
//O segundo valor precisa uma função modificadora desse valor que precisa começar com a palavra set.
