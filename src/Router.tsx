import {Route, Routes} from "react-router";
import Home from "./pages/home";
import ProjectsGallery from "./pages/projects";
import AboutPage from "./pages/about";

export default function Router() {
  return (
      <Routes>
        <Route path={"/"} element={<Home />}/>
        <Route path={"/projects"} element={<ProjectsGallery />}/>
        <Route path={"/about"} element={<AboutPage />}/>
      </Routes>
  )
}
