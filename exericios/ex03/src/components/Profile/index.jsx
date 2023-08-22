import styles from "./styles.module.css";

export default function Profile(props) {
  return (
    <div className={styles.cardProfile}>
      <img src={props.avatar} className={styles.avatarProfile} />
      <h2 className={styles.title}>{props.name}</h2>
      <hr />
      <p className={styles.description}>{props.bio}</p>
      <hr />
      <p className={styles.description}>{props.email}</p>
      <hr />
      <p className={styles.description}>{props.phone}</p>
      <hr />
      <a href={props.githubUrl} className={styles.button}>
        Github
      </a>
      <a href={props.linkedinUrl} className={styles.button}>
        Linkedin
      </a>
      <a href={props.twitterUrl} className={styles.button}>
        twitter
      </a>
    </div>
  );
}
