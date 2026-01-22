import './About.css'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

export function About() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 })

  return (
    <section className="about" ref={ref as React.RefObject<HTMLElement>}>
      <div className="container">
        <h2 className={`fade-in-up ${isVisible ? 'visible' : ''}`}>About Me</h2>
        <p className={`about-text fade-in-up ${isVisible ? 'visible' : ''} stagger-1`}>
          I&apos;m focused on the infrastructure layer for AI agents&mdash;the tooling
          and execution environments that let agents safely interact with the world.
          I created the <a href="https://agentactions.xyz" target="_blank" rel="noopener noreferrer">Agent Actions</a> open
          standard and am building <a href="https://enact.tools" target="_blank" rel="noopener noreferrer">Enact</a>,
          a platform for AI tool discovery and sandboxed execution.
        </p>
        <p className={`about-text fade-in-up ${isVisible ? 'visible' : ''} stagger-2`}>
          Before diving into AI infrastructure, I was CTO at Defispot&mdash;Norway&apos;s largest
          decentralized exchange&mdash;where I led a team building security-critical systems
          processing $200M+ in crypto transactions.
          I&apos;ve also spent years teaching&mdash;from UC San Diego to nonprofits serving
          underserved communities&mdash;because I believe the best technology should be
          accessible to everyone.
        </p>
      </div>
    </section>
  )
}
