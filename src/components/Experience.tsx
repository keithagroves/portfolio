interface Job {
  period: string
  title: string
  company: string
  summary: string
  website?: string
}

const jobs: Job[] = [
  {
    period: '2019 – now',
    title: 'Founder & Principal AI/Software Consultant',
    company: 'Hyix LLC',
    website: 'https://hyixteam.com',
    summary:
      'Started as a full-stack software consultancy; pivoted to AI adoption for businesses — custom agents, workflow automation, and PII-safe pipelines for privileged data, including a production deployment for a private investigation firm. First production automation typically ships in under 30 days.',
  },
  {
    period: '2025 – now',
    title: 'Chief Technology Officer',
    company: 'Rocket Music Lab',
    website: 'https://rocketmusiclab.com',
    summary:
      'Music-education app teaching kids piano and guitar: one Flutter codebase for web, iOS, and Android on Supabase, live MIDI capture, and a Rust pitch checker compiled to WebAssembly. One of three engineers on a cross-functional team of 5 with a design partner and a music teacher.',
  },
  {
    period: '2025 – now',
    title: 'Security Consultant',
    company: 'Biorbank / BiorVault',
    summary:
      'Security audits across the biobank stack; designed passwordless Web3Auth authentication integrated with the Moon digital credit card platform.',
  },
  {
    period: '2025',
    title: 'Software Consultant',
    company: 'Neopolis.ai',
    summary:
      'Built an automated AI interviewing platform (React, Django) with MCP wiring up the multi-tool AI side; cut voice-AI latency and cost across Vapi, OpenAI Realtime, and LiveKit.',
  },
  {
    period: '2024 – 2025',
    title: 'Software Consultant',
    company: 'Enji.co',
    summary:
      'Tuned Python (Pyramid) integrations for faster API responses and hardened flaky auth flows.',
  },
  {
    period: '2022 – 2024',
    title: 'Chief Technology Officer',
    company: 'Defispot',
    summary:
      'Led a 7-person team behind a fintech platform processing $200M+ in cross-chain transactions; built in-house threat detection for exploits and compliance issues.',
  },
  {
    period: '2023 – now',
    title: 'Part-Time Instructor',
    company: 'The League of Amazing Programmers',
    summary:
      'Teach Java, Python, and AI-assisted development with Claude Code to students on weekends at a 501(c)(3) nonprofit.',
  },
  {
    period: '2016 – 2023',
    title: 'Director of Education',
    company: 'The League of Amazing Programmers',
    summary:
      'Grew the program 5× (100 → 500+ concurrent students) by rebuilding curricula for remote delivery on AWS-based dev environments.',
  },
  {
    period: '2018 – 2023',
    title: 'Java Board Member & Instructor',
    company: 'UC San Diego Extended Studies',
    summary:
      'Designed and taught a four-level Java certificate program completed by thousands of working professionals.',
  },
]

export function Experience() {
  return (
    <section>
      <h2 className="section-label">Experience</h2>
      {jobs.map((job) => (
        <div key={`${job.company}-${job.period}`} className="job">
          <span className="period">{job.period}</span>
          <div>
            <h3>
              {job.title}{' '}
              <span className="company">
                ·{' '}
                {job.website ? (
                  <a href={job.website} target="_blank" rel="noopener noreferrer">
                    {job.company}
                  </a>
                ) : (
                  job.company
                )}
              </span>
            </h3>
            <p>{job.summary}</p>
          </div>
        </div>
      ))}
    </section>
  )
}
