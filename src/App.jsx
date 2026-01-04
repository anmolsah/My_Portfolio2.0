import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import GitHubGraph from "./components/GitHubGraph";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import { ThemeProvider, useTheme } from "./context/ThemeContext";

const AppContent = () => {
  const { isDark } = useTheme();

  return (
    <main
      className={`${
        isDark ? "bg-[#0a0a0a] text-white" : "bg-[#fafafa] text-gray-900"
      } transition-colors duration-300`}
    >
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <GitHubGraph />
      <Skills />
      <Contact />
    </main>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

export default App;
