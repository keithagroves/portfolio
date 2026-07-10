export function Header() {
  return (
    <header className="hero">
      <h1>Keith Groves</h1>
      <p className="tagline">
        Agentic developer — production AI systems. MCP contributor, former fintech CTO.
      </p>
      <p className="bio">
        I work at the agent layer: Model Context Protocol, tool discovery and
        orchestration, and the plumbing that makes agents reliable with sensitive
        data. I contribute to the MCP Skills Extension spec — my skills-over-mcp
        implementation is cited as foundational work for the official
        Skills-as-Resources reference implementation.
      </p>
      <p className="bio">
        Previously CTO of a security-critical fintech platform that processed
        $200M+ in transactions. Based in Oceanside, CA.
      </p>
      <div className="hero-links">
        <a href={`${import.meta.env.BASE_URL}Keith_Groves_Resume.pdf`} className="resume-link" download>
          Resume
        </a>
        <a href="mailto:keithalgroves@gmail.com">Email</a>
        <a href="https://github.com/keithagroves" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a href="https://linkedin.com/in/keithalgroves" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        <a href="https://hyixteam.com" target="_blank" rel="noopener noreferrer">
          Hyix
        </a>
      </div>
    </header>
  )
}
