import React, { useState } from "react";
import styles from "../styles/Home.module.css";
import dicionary from "../lang/dicionary";
import StackText from "./StackText";

export function HeroSection({ language }) {
  const currentTexts = dicionary.heroSection[language];

  return (
    <div className={styles.header}>
      <div className={styles.markup}>
        <ul className={styles.iconsList}>
          <li className={styles.icon}>
            <a href="https://github.com/CarlosPegoraro" target="_blank">
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
              <i className="bi bi-instagram"></i>
            </a>
          </li>
        </ul>
      </div>
      <div className={styles.welcomeBox}>
        {currentTexts && (
          <>
            <h2 className={styles.hiName}>{currentTexts.name}</h2>
            <div className={styles.welcomeStacksBox}>
              <h1 className={styles.title}>{currentTexts.main}</h1>
              <h1 className={styles.subtitle}><StackText language={language}/></h1>
              
            </div>
            <h2 className={styles.welcomeText}>{currentTexts.text}</h2>
          </>
        )}
      </div>
    </div>
  );
}
