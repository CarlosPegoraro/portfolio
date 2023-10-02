import React, { useState, useEffect } from 'react';
import dicionary from "../lang/dicionary";

const StackText = ({language}) => {
  const [displayText, setDisplayText] = useState('');
  const texts = [
    dicionary.heroSection[language].secondary.first, 
    dicionary.heroSection[language].secondary.secondary, 
    dicionary.heroSection[language].secondary.third
    ];
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const typingEffect = setInterval(() => {
      if (charIndex < texts[textIndex].length) {
        setDisplayText((prevText) => prevText + texts[textIndex][charIndex]);
        setCharIndex((prevCharIndex) => prevCharIndex + 1);
      } else {
        clearInterval(typingEffect);
        setTimeout(() => {
          if (textIndex === texts.length - 1) {
            setTextIndex(0);
          } else {
            setTextIndex((prevTextIndex) => prevTextIndex + 1);
          }
          setCharIndex(0);
          setDisplayText('');
        }, 3000); // Pausa antes de iniciar o próximo texto
      }
    }, 100); // Velocidade de digitação em milissegundos

    return () => clearInterval(typingEffect);
  }, [charIndex, textIndex]);

  return <div>{displayText}</div>;
};

export default StackText;