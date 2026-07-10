interface WorkItem {
  title: string
  meta: string
  description: string
  link?: { href: string; label: string }
  video?: { src: string; poster: string }
}

const items: WorkItem[] = [
  {
    title: 'Hyix',
    meta: 'Founder · 2019–present',
    description:
      'My software consultancy, pivoted into AI consulting for personal injury law firms — automating record review, intake, and demand-letter drafting while client files stay under the firm’s control. Engagements run Explore → Engineer → Elevate, from workflow assessments to an AI team on retainer.',
    link: { href: 'https://hyixteam.com', label: 'hyixteam.com ↗' },
  },
  {
    title: 'CodeSwim',
    meta: 'Desktop app · Electron',
    description:
      'An IDE for browsing a codebase as diagrams. It opens a folder and renders its markdown files as a navigable diagram tree — the diagrams are the spec; the code implements them.',
    link: { href: 'https://codeswim.xyz', label: 'codeswim.xyz ↗' },
  },
  {
    title: 'Enact',
    meta: 'Open source · 2024',
    description:
      'An open-source Agent Skills registry that lets AI assistants discover and run CLI tools through MCP. Tools execute inside Dagger containers for isolation, with cryptographically signed and semantically versioned releases.',
    link: { href: 'https://enact.tools', label: 'enact.tools ↗' },
  },
  {
    title: 'skills-over-mcp',
    meta: 'MCP working group',
    description:
      'Early implementation of the skill:// pattern, cited as foundational work for the MCP working group’s official Skills-as-Resources reference implementation. Contributed to SEP-2640, the skill:// URI scheme in the draft Skills Extension spec.',
    link: {
      href: 'https://github.com/keithagroves/skills-over-mcp',
      label: 'github.com/keithagroves/skills-over-mcp ↗',
    },
  },
  {
    title: 'Visitor',
    meta: 'Game · in progress',
    description:
      'A physics-driven rocket game about flying cargo runs on a fuel budget — manage thrust and velocity, land softly, don’t run dry. Early demo below.',
    video: {
      src: `${import.meta.env.BASE_URL}visitor-demo.mp4`,
      poster: `${import.meta.env.BASE_URL}visitor-poster.jpg`,
    },
  },
]

export function Work() {
  return (
    <section>
      <h2 className="section-label">Selected Work</h2>
      {items.map((item) => (
        <div key={item.title} className="work-item">
          <div className="work-header">
            <h3>
              {item.link ? (
                <a href={item.link.href} target="_blank" rel="noopener noreferrer">
                  {item.title}
                </a>
              ) : (
                item.title
              )}
            </h3>
            <span className="work-meta">{item.meta}</span>
          </div>
          <p>{item.description}</p>
          {item.link && (
            <a
              className="work-link"
              href={item.link.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.link.label}
            </a>
          )}
          {item.video && (
            <video
              className="work-video"
              src={item.video.src}
              poster={item.video.poster}
              controls
              muted
              loop
              playsInline
              preload="none"
              aria-label="Visitor gameplay demo"
            />
          )}
        </div>
      ))}
    </section>
  )
}
