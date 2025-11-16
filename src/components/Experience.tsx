import './Experience.css'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

interface Job {
  title: string
  company: string
  period: string
  highlights: string[]
  website?: string
}

export function Experience() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 })

  const jobs: Job[] = [
    {
      title: 'Software Consultant',
      company: 'Neopolis.ai',
      period: 'March 2024 – Present',
      website: 'https://neopolis.ai',
      highlights: [
        'Building AI-powered platform for automated interviews and hiring workflows',
        'Implemented Model Context Protocol (MCP) integration to enable multiple AI tool connections',
        'Developing full-stack features using TypeScript, React, Django, and PostgreSQL',
        'Implemented and deployed multiple conversational AI solutions (Vapi, OpenAI Realtime API, LiveKit) in production'
      ]
    },
    {
      title: 'Security Consultant',
      company: 'Biorbank/BiorVault',
      period: 'August 2024 – Present',
  website: 'https://biorlabs.com',
      highlights: [
        'Conducted security audit of biobank infrastructure and data handling processes',
        'Architecting passwordless crypto authentication system for seamless integration with Moon digital credit card platform',
        'Enhanced development operations by implementing secure branching strategies and establishing security best practices',
        'Sourced developer to migrate from traditional social authentication to Web3Auth for decentralized identity management'
      ]
    },
    {
      title: 'Software Consultant',
      company: 'Enji.co',
      period: 'October 2024 – February 2025',
  website: 'https://enji.co',
      highlights: [
        'Enhanced platform reliability by optimizing Python-based API (Pyramid) integrations and authentication systems',
        'Improved backend infrastructure performance and system stability',
        'Collaborated with cross-functional teams to ensure seamless feature rollouts aligned with product requirements'
      ]
    },
    {
      title: 'Chief Technology Officer',
      company: 'Defispot',
      period: 'March 2022 – October 2024',
  website: 'https://defispot.com',
      highlights: [
        'Built and led 7-member engineering team to deliver security-critical fintech platform processing $200M+ in cross-chain cryptocurrency transactions',
        'Architected and integrated blockchain protocols across EVM and UTXO chains, enabling seamless multi-chain swaps',
        'Implemented threat detection system to identify and mitigate cyber exploits, governance risks, and compliance issues',
        'Partnered with executive leadership to align technical roadmap with business objectives and drive user adoption'
      ]
    },
    {
      title: 'Senior Software Developer',
      company: 'Stack IT',
      period: 'February 2022 – March 2023',
  website: 'https://www.stackitgroup.com',
      highlights: [
        'Provided strategic consulting on architecture decisions and technology selection for scalable SaaS solutions',
        'Introduced standardized engineering practices to improve code quality and deployment efficiency',
        'Streamlined client onboarding processes and project workflows'
      ]
    },
    {
      title: 'Founder & Software Developer',
      company: 'Hyix LLC',
      period: 'September 2019 – October 2024',
      highlights: [
        'Established profitable software consultancy delivering custom full-stack and UI/UX solutions',
        'Implemented DevOps best practices using Docker, Kubernetes, and Terraform for high availability deployments',
        'Maintained long-term client relationships through consistent delivery of quality solutions'
      ]
    },
    {
      title: 'Director of Education & Software Developer',
      company: 'The League of Amazing Programmers',
      period: 'March 2016 – February 2023',
      website: 'https://www.jointheleague.org/',
      highlights: [
        'Scaled educational offerings from 100 to 500+ concurrent students (500% growth) through engaging online programming curricula',
        'Deployed AWS-based remote learning environments (VNC/DVC systems) to support distributed education',
        'Mentored junior instructors and standardized teaching methodologies to ensure consistent quality across programs'
      ]
    },
    {
      title: 'Java Board Member / Instructor',
      company: 'UC San Diego Division of Extended Studies',
      period: 'March 2018 – December 2023',
      website: 'https://extendedstudies.ucsd.edu/',
      highlights: [
        'Developed and delivered four-level Java certificate program aligned with industry standards',
        'Taught thousands of professionals market-ready programming skills',
        'Collaborated with industry partners to ensure curriculum relevance and maintain high student satisfaction ratings'
      ]
    }
  ]

  return (
    <section className="experience" ref={ref as React.RefObject<HTMLElement>}>
      <div className="container">
        <h2 className={`fade-in-up ${isVisible ? 'visible' : ''}`}>Professional Experience</h2>
        <div className={`timeline fade-in-up ${isVisible ? 'visible' : ''} stagger-1`}>
          {jobs.map((job) => (
            <div key={`${job.company}-${job.period}`} className="job">
              <div className="job-header">
                <div>
                  <h3>{job.title}</h3>
                  <h4>
                    {job.company}
                    {job.website && (
                      <a
                        href={job.website}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="company-link"
                      >
                        <span aria-hidden="true">·</span>
                        <span>Visit site</span>
                        <span aria-hidden="true">↗</span>
                      </a>
                    )}
                  </h4>
                </div>
                <span className="period">{job.period}</span>
              </div>
              <ul className="highlights">
                {job.highlights.map((highlight, index) => (
                  <li key={index}>{highlight}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
