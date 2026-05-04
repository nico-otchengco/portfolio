import { useEffect, useState, useRef } from 'react';
import { person } from '../../data';

const WORDS = ['web apps', 'interfaces', 'systems', 'solutions', 'experiences'];

export default function Hero() {
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const word = WORDS[wordIndex];

    if (!deleting && text === word) {
      timerRef.current = setTimeout(() => setDeleting(true), 2000);
      return;
    }
    if (deleting && text === '') {
      setDeleting(false);
      setWordIndex(i => (i + 1) % WORDS.length);
      return;
    }

    timerRef.current = setTimeout(() => {
      setText(deleting
        ? word.substring(0, text.length - 1)
        : word.substring(0, text.length + 1)
      );
    }, deleting ? 45 : 90);

    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [text, deleting, wordIndex]);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="hero" className="hero">
      <div className="bg-grid" />
      <div className="bg-number">00</div>

      <div className="hero-left reveal visible">
        <div className="hero-tag">
          <span className="hero-tag-line" />
          {person.title}
        </div>
        <h1 className="hero-name">
          {person.name.split(' ').slice(0, 2).join(' ')}<br />
          <span className="hero-name-accent">
            {person.name.split(' ').slice(2).join(' ')}
          </span>
        </h1>
        <div className="hero-typewriter">
          <span className="hero-tw-prefix">$ build --output </span>
          <span className="hero-tw-text">{text}</span>
          <span className="hero-cursor" />
        </div>
        <p className="hero-subtitle">{person.bio1}</p>
        <div className="hero-ctas">
          <button className="btn-primary" onClick={() => scrollTo('projects')}>
            View Work
          </button>
          <button className="btn-ghost" onClick={() => scrollTo('contact')}>
            Get In Touch
          </button>
        </div>
      </div>

      <div className="hero-right reveal visible">
        <div className="hero-coords">{person.coords}</div>
        <div className="hero-img-wrap">
          <img src={person.photo} alt={person.name} className="hero-img" />
          <div className="hero-img-border" />
          <div className="hero-img-label">{person.locationLabel}</div>
        </div>
      </div>
    </section>
  );
}
