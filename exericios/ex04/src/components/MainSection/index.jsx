import styles from "./styles.module.css";
export default function MainSection(props) {
  return <div className={styles.container}>{props.children}</div>;
}
