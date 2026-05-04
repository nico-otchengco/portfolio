import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import Footer from './components/Footer';
import { setFavicon } from '@/utils/seticon';

export default function App() {

  useEffect(() => {
    setFavicon('👋');
      const icons = ["👋", "👨‍💻"];
      let index = 0;

      setFavicon(icons[index]);

      const interval = setInterval(() => {
        index = (index + 1) % icons.length;
        setFavicon(icons[index]);
      }, 3000);

      return () => clearInterval(interval);
    


  }, []);
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.1 }
    );
    reveals.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
