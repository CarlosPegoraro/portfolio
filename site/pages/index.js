import React, { useState } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { HeroSection } from "../components/HeroSection";
import { Project } from "../components/Project";
import dicionary from "../lang/dicionary";

import logo from "../public/logo.svg"

export default function Home() {
  const [language, setLanguage] = useState("portuguese");

  const handleLanguageChange = (value) => {
    setLanguage(value);
  };

  const currentTexts = dicionary.geral[language];
  const projects = dicionary.projects;

  return (
    <div className={styles.container}>
      <Head>
        <title>Carlos Pegoraro</title>
        <link rel="icon" href="/logo.svg" />
      </Head>
      <HeroSection language={language} />
      <div className={styles.languagesBox}>
        <ul className={styles.languagesList}>
          <li className={styles.languages}>
            <i className="bi bi-arrow-left"></i>
          </li>
          <button
            className={styles.languages}
            onClick={() => handleLanguageChange("portuguese")}
          >
            Português
          </button>
          <button
            className={styles.languages}
            onClick={() => handleLanguageChange("english")}
          >
            English
          </button>
          <button
            className={styles.languages}
            onClick={() => handleLanguageChange("spanish")}
          >
            Español
          </button>
        </ul>
      </div>
      <h1 className={styles.title}>{currentTexts.project}</h1>
      <Project
        name={projects.one[language].name}
        text={projects.one[language].text}
        button={projects.one[language].button}
        stacks={projects.one[language].stacks}
        frontStack={projects.one[language].frontStack}
        backStack={projects.one[language].backStack}
        databaseStack={projects.one[language].databaseStack}
        image={logo}
      />
      <Project
        name={projects.two[language].name}
        text={projects.two[language].text}
        button={projects.two[language].button}
        stacks={projects.two[language].stacks}
        frontStack={projects.two[language].frontStack}
        backStack={projects.two[language].backStack}
        databaseStack={projects.two[language].databaseStack}
        image=""
      />
    </div>
  );
}
