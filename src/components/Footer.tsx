import './Footer.css'

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Keith Groves. All rights reserved.</p>
        <div className="footer-links">
          <a href="mailto:keithalgroves@gmail.com">Email</a>
          <a href="https://linkedin.com/in/keithalgroves" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="https://github.com/keithagroves" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </div>
      </div>
    </footer>
  )
}
