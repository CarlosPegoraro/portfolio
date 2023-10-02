import "../styles/global.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        :root {
          --main-color: #1660d0;
          --main-color-light: #80caff;
          --main-color-dark: #1b4078;
          --secondary-color: #11b6c2;
          --secondary-color-light: #85d5dc;
          --secondary-color-dark: #196b71;
          --light: #f9f4f5;
          --dark: #202020;
          --main-font: "Poppins", sans-serif;
          --secondary-font: "Montserrat", sans-serif;
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
