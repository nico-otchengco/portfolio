import { person } from '../../data';

export default function About() {
  return (
    <section id="about" className="about">
      <div className="bg-number">01</div>
      <div className="section-header reveal">
        <div className="section-index">01 · About</div>
        <h2 className="section-title">Who I Am</h2>
      </div>
      <div className="about-grid reveal">
        <div className="about-bio">
          <p>{person.bio1}</p>
          <p>{person.bio2}</p>
          <p>{person.bio3}</p>
        </div>
        <div className="about-stats">
          {[
            { key: 'Experience', val: person.experience, accent: true },
            { key: 'Focus', val: person.focus },
            { key: 'Location', val: person.location },
            { key: 'Remote', val: 'Available', accent: true },
            { key: 'Languages', val: person.languages },
          ].map(row => (
            <div className="stat-row" key={row.key}>
              <div className="stat-key">{row.key}</div>
              <div className={`stat-val${row.accent ? ' highlight' : ''}`}>{row.val}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
