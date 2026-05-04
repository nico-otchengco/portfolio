import { person } from '../data';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-copy">
        &copy; 2026 <span className="footer-accent">{person.name}</span> · All rights reserved.
      </div>
      <div className="footer-build">Built with intention.</div>
    </footer>
  );
}
