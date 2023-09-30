import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { HeroSection } from '../components/HeroSection';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Carlos Lopes</title>
        <link rel="icon" href="/logo.svg" />
      </Head>
      <HeroSection 
        name="Olá, eu me chamo Carlos Eduardo Pegoraro Lopes!"
        main="Desenvolvedor"
        secondary="Full-Stack"
        text="Jovem de 17 anos concluindo o ensino médio técnico em ciência da computação. 1 ano de experiência na indústria. Ansioso para expandir conhecimentos e     habilidades. Pronto para novos desafios."
        />
    </div>
  );
}
