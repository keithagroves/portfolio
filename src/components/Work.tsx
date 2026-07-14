interface WorkItem {
  title: string
  meta: string
  description: string
  link?: { href: string; label: string }
  image?: { src: string; alt: string }
  video?: { src: string; poster: string }
}

const asset = (name: string) => `${import.meta.env.BASE_URL}${name}`

const items: WorkItem[] = [
  {
    title: 'Hyix',
    meta: 'Founder · 2019–present',
    description:
      'My software consultancy, pivoted into AI consulting for personal injury law firms — automating record review, intake, and demand-letter drafting while client files stay under the firm’s control. Engagements run Explore → Engineer → Elevate, from workflow assessments to an AI team on retainer.',
    link: { href: 'https://hyixteam.com', label: 'hyixteam.com ↗' },
    image: { src: asset('hyix.webp'), alt: 'Hyix landing page' },
  },
  {
    title: 'CodeSwim',
    meta: 'Desktop app · Electron',
    description:
      'An IDE for browsing a codebase as diagrams. It opens a folder and renders its markdown files as a navigable diagram tree — the diagrams are the spec; the code implements them.',
    link: { href: 'https://codeswim.xyz', label: 'codeswim.xyz ↗' },
    image: { src: asset('codeswim-demo.gif'), alt: 'CodeSwim rendering a codebase as diagrams' },
  },
  {
    title: 'BiorSwap',
    meta: 'Security consultant · DEX',
    description:
      'A multi-chain decentralized exchange for trading 5,000+ crypto assets. I led security audits across the stack and designed its passwordless Web3Auth authentication, integrated with the Moon digital credit card platform.',
    link: { href: 'https://biorswap.com', label: 'biorswap.com ↗' },
    image: { src: asset('biorswap.webp'), alt: 'BiorSwap decentralized exchange interface' },
  },
  {
    title: 'Enact',
    meta: 'Open source · 2024',
    description:
      'An open-source Agent Skills registry that lets AI assistants discover and run CLI tools through MCP. Tools execute inside Dagger containers for isolation, with cryptographically signed and semantically versioned releases.',
    link: { href: 'https://enact.tools', label: 'enact.tools ↗' },
    image: { src: asset('enact.webp'), alt: 'Enact — the Agent Skills platform' },
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
      src: asset('visitor-demo.mp4'),
      poster: asset('visitor-poster.jpg'),
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
          {item.image &&
            (item.link ? (
              <a
                className="work-media"
                href={item.link.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={item.image.src} alt={item.image.alt} loading="lazy" />
              </a>
            ) : (
              <span className="work-media">
                <img src={item.image.src} alt={item.image.alt} loading="lazy" />
              </span>
            ))}
          {item.video && (
            <video
              className="work-media work-video"
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
        </div>
      ))}
    </section>
  )
}
