import styles from "../styles/Home.module.css";

export function Project({ name, text, button, stacks, frontStack, backStack, databaseStack, image }) {

  return (
    <div>
      <section className={styles.card}>
        <article>
          <h1 className={styles.appTitle}>{name}</h1>
          <p className={styles.appText}>{text}</p>
          <a className={styles.seeButton}>
            {button} <i className="bi bi-arrow-right"></i>
          </a>
          <h1 className={styles.appTitle}>{stacks}</h1>
          <ul className={styles.stackList}>
            <li className={styles.stackItem}>Front-End: {frontStack}</li>
            <li className={styles.stackItem}>Back-End: {backStack}</li>
            <li className={styles.stackItem}>Database: {databaseStack}</li>
          </ul>
        </article>
        <article>
          <img className={styles.image} src={image} />
        </article>
      </section>
    </div>
  );
}
