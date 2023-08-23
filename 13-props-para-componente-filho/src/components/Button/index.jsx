import styles from "./styles.module.css";

export default function Button(props) {
  return (
    <a href="" target="blank" className={styles.button}>
      {props.children}
    </a>
  );
}
