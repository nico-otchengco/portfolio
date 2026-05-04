import { contact } from '../../data';

const LINKS = [
  {
    type: 'Email',
    val: contact.email,
    href: `https://mail.google.com/mail/?view=cm&fs=1&to=${contact.email}` ,
  },
  { type: 'GitHub', val: contact.github, href: contact.githubUrl },
  { type: 'LinkedIn', val: contact.linkedin, href: contact.linkedinUrl },
  {
    type: 'Resume',
    val: contact.resume,
    href: contact.resumeUrl,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="bg-number">04</div>
      <div className="contact-layout">
        <div className="reveal">
          <div className="section-index">04 · Contact</div>
          <h2 className="contact-headline">
            Let's build<br />
            something <span className="accent">real.</span>
          </h2>
          <p className="contact-subtext">
            Open to full-time roles, freelance projects, and interesting collaborations.
            If you have something worth building, let's talk.
          </p>
        </div>
        <div className="contact-links reveal">
          {LINKS.map(link => (
            <a
              key={link.type}
              href={link.href}
              target={link.type !== 'Email' ? '_blank' : undefined}
              rel="noopener noreferrer"
              className="contact-link"
            >
              <div className="contact-link-label">
                <span className="contact-link-type">{link.type}</span>
                <span className="contact-link-val">{link.val}</span>
              </div>
              <span className="contact-link-arrow">→</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
