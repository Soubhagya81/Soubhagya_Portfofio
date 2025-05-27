import { HelmetProvider } from 'react-helmet-async';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import './index.css';

function App() {
  return (
    <HelmetProvider>
      <div className="min-h-screen bg-white text-black dark:bg-dark dark:text-white transition-colors duration-300">
        <Header />
        <main>
          <Hero />
          <Projects />
          <Skills />
          <Contact />
        </main>
      </div>
    </HelmetProvider>
  );
}

export default App;