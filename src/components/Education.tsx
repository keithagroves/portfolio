import './Education.css'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

export function Education() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.3 })

  return (
    <section className="education" ref={ref as React.RefObject<HTMLElement>}>
      <div className="container">
        <h2 className={`fade-in-up ${isVisible ? 'visible' : ''}`}>Education</h2>
        <div className={`education-card fade-in-up ${isVisible ? 'visible' : ''} stagger-1`}>
          <h3>B.S. in Computer Science</h3>
          <h4>California State University, Monterey Bay</h4>
        </div>
      </div>
    </section>
  )
}
