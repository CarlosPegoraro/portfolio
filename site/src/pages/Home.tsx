import React, { useState, useEffect } from 'react';

export function Home() {
    const texts = ['Front-End', 'Back-End', 'Full-Stack'];
    const [currentText, setCurrentText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }, 4000);

        return () => {
            clearTimeout(timer);
        };
    }, [currentIndex]);

    useEffect(() => {
        let typedText = '';
        let isDeleting = false;
        let currentIndex = 0;
        let interval = 0;

        const type = () => {
            const currentText = texts[currentIndex];

            if (isDeleting) {
                typedText = currentText.substring(0, typedText.length - 1);
            } else {
                typedText = currentText.substring(0, typedText.length + 1);
            }

            setCurrentText(typedText);

            if (!isDeleting && typedText === currentText) {
                isDeleting = true;
                clearInterval(interval);
                setTimeout(() => {
                    interval = setInterval(type, 200);
                }, 2000);
            } else if (isDeleting && typedText === '') {
                isDeleting = false;
                currentIndex = (currentIndex + 1) % texts.length;
                setCurrentIndex(currentIndex);
                clearInterval(interval);
                setTimeout(() => {
                    interval = setInterval(type, 200);
                }, 500);
            }
        };

        interval = setInterval(type, 200);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <div className="container">
            <div className="tag">
                <ul id="icons">
                    <li>
                        <a href="https://github.com/CarlosPegoraro" target='_blank'><i className="bi bi-github"></i></a>
                    </li>
                    <li>
                    <a href="https://github.com/CarlosPegoraro" target='_blank'><i className="bi bi-file-earmark-text"></i></a>
                    </li>
                    <li>
                    <a href="https://github.com/CarlosPegoraro" target='_blank'><i className="bi bi-linkedin"></i></a>
                    </li>
                </ul>
                <div className="tag-bottom"></div>
            </div>
            <div className="welcomeDiv">
                <h1 id="hello">Hi, I'm CarlosPegoraro</h1>
                <h1 id="fullstack">
                    {currentText || '\u00A0'}
                    <span className="blinking-bar">|</span>
                </h1>
                <h1 id="developer">Developer</h1>
                <p id="mensage">
                    17-year-old completing technical high school in computer science. 1
                    year of industry experience. Eager to expand knowledge and skills.
                    Ready for new challenges.
                </p>
            </div>
        </div>
    );
}
