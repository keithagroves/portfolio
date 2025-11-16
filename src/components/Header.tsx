import './Header.css'

export function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <h1>Keith Groves</h1>
        <p className="tagline">Technology Leader & Chief Technologist</p>
        <div className="contact-info">
          <a href="mailto:keithalgroves@gmail.com">keithalgroves@gmail.com</a>
          <span className="separator">•</span>
          <a href="tel:+17603008629">(760) 300-8629</a>
          <span className="separator">•</span>
          <span>Oceanside, CA</span>
        </div>
        <div className="social-links">
          <a href="https://linkedin.com/in/keithalgroves" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="https://github.com/keithagroves" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </div>
      </div>
    </header>
  )
}
