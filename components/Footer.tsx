import styles from "../styles/Home.module.css";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <p>copyright @hotel & co {new Date().getFullYear()}</p>
    </div>
  );
}
