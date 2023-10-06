import React from "react";
import styles from "../styles/Home.module.css";
import dicionary from "../lang/dicionary";

export function AboutMe({ language }) {
  const currentTexts = dicionary.aboutMe[language];

  return (
    <div className={styles.aboutMeContainer}>
        <h1 className={styles.title}>{currentTexts.title}</h1>
        <p className={styles.textAboutMe}>
            {currentTexts.text}
        </p>
        <ul className={styles.socialMediaList}>
            <li className={styles.socialMedia}>
                <i class="bi bi-instagram"></i>
                <a href="#" className={styles.socialMediaLink}>Instagram</a>
            </li>
            <li className={styles.socialMedia}>
                <i class="bi bi-instagram"></i>
                <a href="#" className={styles.socialMediaLink}>Instagram</a>
            </li>
            <li className={styles.socialMedia}>
                <i class="bi bi-instagram"></i>
                <a href="#" className={styles.socialMediaLink}>Instagram</a>
            </li>
            <li className={styles.socialMedia}>
                <i class="bi bi-instagram"></i>
                <a href="#" className={styles.socialMediaLink}>Instagram</a>
            </li>
            <li className={styles.socialMedia}>
                <i class="bi bi-instagram"></i>
                <a href="#" className={styles.socialMediaLink}>Instagram</a>
            </li>
        </ul>
    </div>
  );
}
