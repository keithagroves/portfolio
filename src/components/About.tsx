import './About.css'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

export function About() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 })

  return (
    <section className="about" ref={ref as React.RefObject<HTMLElement>}>
      <div className="container">
        <h2 className={`fade-in-up ${isVisible ? 'visible' : ''}`}>About Me</h2>
        <p className={`about-text fade-in-up ${isVisible ? 'visible' : ''} stagger-1`}>
          Engineering leader who loves using technology to tell stories and help people learn.
          I&apos;ve architected and delivered security-critical systems processing $200M+ in
          cryptocurrency transactions, and more recently have been focused on building playful,
          agentic AI experiences and tools like Enact Protocol. I especially enjoy creating
          interactive projects&mdash;from teaching kids to code to bringing AI characters like
          talking avatars to life.
        </p>
      </div>
    </section>
  )
}
