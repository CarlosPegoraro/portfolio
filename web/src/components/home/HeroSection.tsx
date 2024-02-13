import bg from "../../assets/heroSectionBg.png";
import me from "../../assets/me.png";

export default function HeroSection() {
  return (
    <div className="flex flex-col items-center justify-center h-screen relative">
      <img src={bg} alt="background" className="z-0 w-full h-full absolute dark:block" style={{ userSelect: 'none' }} />

      <div className="flex flex-col sm:flex-row-reverse items-center justify-around p-10 text-center w-full">
        <img src={me} alt="me" className="z-50 mb-6 sm:mb-0" />

        <div className="flex flex-col gap-10 ">
          <p className="text-xl sm:text-2xl text-neutral-800 dark:text-neutral-200 z-50">{"<Software Engineer stack='Php' />"}</p>
          <h1 className="text-4xl sm:text-6xl font-bold text-teal-500 z-50">Carlos Pegoraro</h1>
          <nav className="flex justify-around">
            <a className="text-4xl text-teal-500 hover:text-teal-300 transition duration-300" href="https://github.com/CarlosPegoraro">
              <i className="bi bi-github"></i>
            </a>
            <a className="text-4xl text-teal-500 hover:text-teal-300 transition duration-300" href="https://github.com/CarlosPegoraro">
              <i className="bi bi-linkedin"></i>
            </a>
            <a className="text-4xl text-teal-500 hover:text-teal-300 transition duration-300" href="https://github.com/CarlosPegoraro">
              <i className="bi bi-instagram"></i>
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
}
