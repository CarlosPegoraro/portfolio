import Image from "next/image";
import bg from "../../assets/heroSectionBg.png";
import me from "../../assets/me.png";

export default function HeroSection() {
  return (
    <div className="flex flex-col items-center justify-center h-screen relative">
      <Image src={bg} alt="background" className="z-0 w-full h-full absolute" style={{ userSelect: 'none' }}/>

      <div className="flex flex-col sm:flex-row-reverse items-center justify-around p-10 text-center w-full">
        <Image src={me} alt="me" className="z-50 mb-6 sm:mb-0" />

        <div className="flex flex-col gap-4">
            <p className="text-xl sm:text-2xl text-neutral-800 dark:text-neutral-200 z-50">{"<Software Engineer stack='Php' />"}</p>
            <h1 className="text-4xl sm:text-6xl font-bold text-teal-500 z-50">Carlos Pegoraro</h1>
            <p className="text-neutral-800 dark:text-neutral-200 z-50">Software Engineer</p>
        </div>
      </div>
    </div>
  );
}
