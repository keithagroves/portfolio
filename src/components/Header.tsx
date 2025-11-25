import './Header.css'

function Name() {
  const name = "Keith Groves"
  return (
    <h1 aria-label={name}>
      {name.split('').map((letter, index) => (
        <span
          key={index}
          className="name-letter"
        >
          {letter === ' ' ? '\u00A0' : letter}
        </span>
      ))}
    </h1>
  )
}

export function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <Name />
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
