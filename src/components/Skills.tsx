import './Skills.css'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

export function Skills() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.15 })

  const skillCategories = [
    {
      title: 'Leadership',
      skills: ['Technology Strategy', 'Team Building', 'Stakeholder Alignment']
    },
    {
      title: 'Engineering',
      skills: ['TypeScript', 'React.js', 'Next.js', 'Java Spring Boot', 'Python', 'Django']
    },
    {
      title: 'Infrastructure',
      skills: ['AWS', 'Kubernetes', 'Terraform', 'Docker', 'Serverless Architecture']
    },
    {
      title: 'Blockchain',
      skills: ['EVM', 'UTXO', 'Thorchain', 'Solidity', 'Cross-chain Protocols']
    },
    {
      title: 'Security',
      skills: ['Web Application Security', 'Smart Contracts']
    },
    {
      title: 'AI & Machine Learning',
      skills: [
        'AI Agents & Tooling (MCP, Enact Protocol)',
        'OpenAI / Claude APIs',
        'AI Voice Agents',
        'LangChain / RAG / Langfuse',
      ]
    }
  ]

  return (
    <section className="skills" ref={ref as React.RefObject<HTMLElement>}>
      <div className="container">
        <h2 className={`fade-in-up ${isVisible ? 'visible' : ''}`}>Technical Skills</h2>
        <div className={`skills-grid fade-in-up ${isVisible ? 'visible' : ''} stagger-1`}>
          {skillCategories.map((category) => (
            <div key={category.title} className="skill-category">
              <h3>{category.title}</h3>
              <div className="skill-tags">
                {category.skills.map((skill) => (
                  <span key={skill} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
