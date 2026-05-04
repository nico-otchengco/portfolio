import { useState, useEffect } from 'react';
import { projects, Project } from '../../data';

function Modal({ project, onClose }: { project: Project; onClose: () => void }) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handler);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handler);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h2 className="modal-title">{project.title}</h2>
          <button className="modal-close" onClick={onClose}>[ ESC ]</button>
        </div>
        <div className="modal-body">
          <div className="modal-section">
            <div className="modal-section-label">Overview</div>
            <p className="modal-overview">{project.overview}</p>
          </div>
          <div className="modal-section">
            <div className="modal-section-label">Tech Stack</div>
            <div className="modal-tags">
              {project.tags.map(t => <span className="tag" key={t}>{t}</span>)}
            </div>
          </div>
          <div className="modal-section">
            <div className="modal-section-label">Features</div>
            <ul className="modal-features">
              {project.features.map(f => <li key={f}>{f}</li>)}
            </ul>
          </div>
          <div className="modal-section">
            <div className="modal-section-label">Screenshots</div>
            <div className="modal-img-grid">
              {project.screenshots.map((s, i) => (
                <img key={i} src={s} alt={`Screenshot ${i + 1}`} />
              ))}
            </div>
          </div>
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="modal-live">
            View Live Project →
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="projects" className="projects">
      <div className="bg-number">03</div>
      <div className="section-header reveal">
        <div className="section-index">03 · Work</div>
        <h2 className="section-title">Featured Projects</h2>
      </div>
      <div className="projects-list reveal">
        {projects.map(p => (
          <div className="project-row" key={p.num} onClick={() => setSelected(p)}>
            <div className="project-num">{p.num}</div>
            <div className="project-info">
              <div className="project-title">{p.title}</div>
              <div className="project-desc">{p.desc}</div>
            </div>
            <div className="project-tags">
              {p.tags.map(t => <span className="tag" key={t}>{t}</span>)}
            </div>
            <div className="project-arrow">→</div>
          </div>
        ))}
      </div>
      {selected && <Modal project={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}
