import { skills } from '../../data';

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="bg-number">02</div>
      <div className="section-header reveal">
        <div className="section-index">02 · Stack</div>
        <h2 className="section-title">Tech Stack</h2>
      </div>
      <div className="skills-grid reveal">
        {skills.map(skill => (
          <div className="skill-cell" key={skill.name}>
            <img
              src={skill.logo}
              alt={skill.name}
              style={skill.invert ? { filter: 'invert(1)' } : {}}
            />
            <span className="skill-name">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
