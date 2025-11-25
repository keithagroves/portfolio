import './Projects.css'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

interface Project {
  title: string
  period: string
  description: string[]
  link?: string
  videoUrl?: string
}

export function Projects() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.15 })

  const projects: Project[] = [
    {
      title: 'Enact Protocol',
      period: 'November 2024 – Present',
      description: [
        'Designing an open protocol that lets AI agents safely discover, install, and execute command-line tools (think npm for AI tools)',
        'Defined a self-describing enact.md manifest for tools with typed inputs/outputs, environment, and signed execution commands',
        'Implemented containerized execution using Dagger for secure tool isolation, cryptographic signing (Sigstore), and semantic versioning',
        'Built a Node.js CLI that allows agents (Claude, GPT, etc.) to run tools deterministically via MCP and local registries'
      ],
      link: 'https://enactprotocol.com'
    },
    {
      title: 'Rocket Music Platform',
      period: 'January 2024 – Present',
      description: [
        'Built comprehensive web-based music education platform for guitar and piano instruction with role-based access for students, teachers, and administrators',
        'Implemented real-time audio processing using Web Audio API for recording, playback, and pitch detection with professional-quality instrument capture',
        'Developed audio-to-MIDI transcription pipeline using Spotify\'s Basic Pitch for automated performance analysis and grading',
        'Architected multi-tenant course management system with hierarchical lesson structures, progress tracking, and interactive sheet music rendering'
      ]
    },
    {
      title: 'Think Machine',
      period: 'February 2023 – December 2024',
      description: [
        'Developed educational platform teaching AI and machine learning concepts to K-12 students using Jupyter Notebooks',
        'Created hands-on curriculum covering neural networks, computer vision, and NLP using Keras/TensorFlow',
        'Partnered with two nonprofit organizations to deliver AI literacy programs to underserved communities',
        'Designed interactive projects enabling students to build and train their own AI models',
        'Built "Abel", a talking AI avatar, to demonstrate conversational AI concepts to students'
      ],
      videoUrl: 'https://youtu.be/LFDjk6pIy4c?si=U31cKn55w0XJrTXk'
    }
  ]

  return (
    <section className="projects" ref={ref as React.RefObject<HTMLElement>}>
      <div className="container">
        <h2 className={`fade-in-up ${isVisible ? 'visible' : ''}`}>Personal Projects</h2>
        <div className={`projects-grid fade-in-up ${isVisible ? 'visible' : ''} stagger-1`}>
          {projects.map((project) => (
            <div key={project.title} className="project-card">
              <div className="project-header">
                <h3>{project.title}</h3>
                <span className="project-period">{project.period}</span>
              </div>
              <ul className="project-description">
                {project.description.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              {project.link && (
                <div className="project-links">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="project-link"
                  >
                    Visit site<span aria-hidden="true">↗</span>
                  </a>
                </div>
              )}
              {project.videoUrl && (
                <div className="project-links">
                  <a
                    href={project.videoUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="project-link"
                  >
                    Watch Abel demo<span aria-hidden="true">▶</span>
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
