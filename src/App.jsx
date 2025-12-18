import Navbar from "./components/Navbar";
import Landing from "./pages/Landing";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <>
      <div className="relative">
        <Navbar />
        <div className="fixed blur-[100px] -z-10 bg-blue-600/20 h-150 top-[15%] w-200"></div>
        <Landing />
        <About />
        <Projects />
        <Contact />
      </div>
    </>
  );
};

export default App;
