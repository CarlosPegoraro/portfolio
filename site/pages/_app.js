import '../styles/global.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        :root {
          --main-color: #1660D0;
          --main-color-light: #80CAFF;
          --main-color-dark: #1B4078;
          --secondary-color: #11B6C2;
          --secondary-color-light: #85D5DC;
          --secondary-color-dark: #196B71;
          --light: #F9F4F5;
          --dark: #202020;
          --main-font: 'Poppins', sans-serif;
          --secondary-font: 'Montserrat', sans-serif;
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
