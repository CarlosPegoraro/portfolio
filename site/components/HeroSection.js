import styles from '../styles/Home.module.css';

export function HeroSection({name, main, secondary, text}) {
  return (
    <div className={styles.header}>
      <div className={styles.markup}>
        <ul className={styles.iconsList}>
          <li className={styles.icon}>
            <a href="https://github.com/CarlosPegoraro">
              <i className="bi bi-github"></i>
            </a>
          </li>
          <li className={styles.icon}>
            <a href="">
              <i className="bi bi-linkedin"></i>
            </a>
          </li>
          <li className={styles.icon}>
            <a href="">
              <i className="bi bi-filetype-pdf"></i>
            </a>
          </li>
        </ul>
      </div>
      <div className={styles.welcomeBox}>
        <h2 className={styles.hiName}>
          {name}
        </h2>
        <div className={styles.welcomeStacksBox}>
          <h1 className={styles.fullStack}>{main}</h1>
          <h1 className={styles.developer}>{secondary}</h1>
        </div>
        <h2 className={styles.welcomeText}>
        {text}
        </h2>
      </div>
      <nav className={styles.languangesBox}>
        <ul className={styles.languangesList}>
          <li className={styles.languanges}>Português</li>
          <li className={styles.languanges}>English</li>
          <li className={styles.languanges}>Spanish</li>
        </ul>
      </nav>
    </div>
  );
}
