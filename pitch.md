# enact.tools

---

## 1. Title

# enact.tools

**Agent Capability Infrastructure for the Enterprise**

Give your agents powerful capabilities — and keep control as you scale.

---

## 2. Founder

**Keith Groves** — Creator of the [Agent Actions](https://agentactions.xyz) open standard

I've spent a decade building security-critical systems at scale. As CTO at Defispot — Norway's largest decentralized exchange — I led a team that processed $200M+ in crypto transactions, implementing threat detection systems and cross-chain protocols across EVM and UTXO chains.

Before that, I scaled educational platforms from 100 to 500+ concurrent students and taught thousands of developers through UC San Diego's Extended Studies program.

Now I'm focused on the infrastructure layer for AI agents. I created the Agent Actions standard because I saw the same problem emerging in AI that I saw in crypto: powerful capabilities with no governance, no verification, and no visibility into what's actually running.

**Background:**
- CTO, Defispot — Norway's largest DEX ($200M+ in transactions)
- Creator, Agent Actions open standard
- Director of Education, The League of Amazing Programmers (500% growth)
- Java Board Member & Instructor, UC San Diego Extended Studies
- Security Consultant, BiorVault (Web3 authentication systems)

---

## 3. Context

**AI agents are going to production.**

Every enterprise is deploying AI agents — for customer support, internal operations, code generation, data analysis. These agents need capabilities: querying databases, calling APIs, processing documents, interacting with internal systems.

The Model Context Protocol (MCP) has emerged as the standard for giving agents access to tools. Every major platform is adopting it. The infrastructure for agent capabilities is being built right now.

But there's a problem.

---

## 4. Problem (Detail)

### 1. Context Bloat

Agents are drowning in tool definitions. Anthropic's research found **55,000 to 134,000 tokens** consumed by tool descriptions before any work begins. A typical five-server MCP setup — GitHub, Slack, Sentry, Grafana, Splunk — burns 55K tokens on definitions alone.

More tools = slower responses, higher costs, worse accuracy.

### 2. No Governance

Who approved this capability? Who published it? Has it been audited? Today, there's no answer. Capabilities are scattered across repos, scripts, and ad-hoc integrations that nobody fully controls.

Shadow AI proliferates. Compliance gaps emerge.

### 3. No Visibility

Which agents are using which capabilities? How are they performing? When something goes wrong, there's no single place to investigate. Teams dig through logs across systems, hoping to piece together what happened.

---

## 5. Problem (Agitation)

**The status quo doesn't scale.**

- **Too many tools, and agents choke.** Response times slow. Costs spike. Agents pick the wrong tool. Context windows fill with descriptions instead of work.

- **Too few tools, and agents fail.** They can't complete tasks. Users lose trust. Teams build workarounds.

- **No management layer, and you lose control.** Every agent gets everything, whether it needs it or not. No scoping. No versioning. No audit trail.

The result: **context bloat, compliance gaps, and agents you can't trust in production.**

This is the dirty secret of the MCP era — most teams are now drowning in the context they used to beg for.

---

## 6. Social Proof

*[Customer logos]*

*[Testimonials validating the problem]*

*[Design partner quotes]*

> "We had 70+ MCP tools configured and our agents were slower and less accurate than when we started."
> — *[Customer title, Company]*

---

## 7. Vision

**enact.tools is the infrastructure layer for AI agent capabilities.**

We solve context management by giving agents a governed registry where they discover capabilities on-demand — not a static list of every tool you own, but dynamic access to exactly what they need, when they need it.

With cryptographic verification and complete observability built in.

**The capabilities your agents need. The governance your team requires.**

---

## 8. Solution

| Feature | Value |
|---------|-------|
| **Dynamic Discovery** | 4 meta-tools in context, thousands of capabilities on-demand. 85% reduction in token usage. |
| **Cryptographic Trust** | Every capability signed with verified identities. Third-party attestations. Immutable transparency logs. |
| **Complete Observability** | See every invocation across your fleet. Audit trail of who used what, when, with what inputs. |

### How it works

Instead of loading every tool upfront, agents get **4 meta-tools**:

| Tool | What it does |
|------|--------------|
| `enact_search` | Find capabilities by what they do |
| `enact_learn` | Get docs and schemas for a specific capability |
| `enact_run` | Execute any capability on-demand |
| `enact_install` | Pin a capability for repeated use |

Agents discover what they need, when they need it. Context that's curated, not dumped.

---

## 9. Product

```
┌─────────────────────────────────────────────────────────────────┐
│                        Your AI Agents                           │
│              Claude  ·  GPT  ·  Cursor  ·  Custom               │
└─────────────────────────┬───────────────────────────────────────┘
                          │ MCP / SDK / CLI
                          ▼
┌─────────────────────────────────────────────────────────────────┐
│                       enact.tools                               │
│                                                                 │
│   ┌───────────┐   ┌───────────┐   ┌───────────┐   ┌─────────┐  │
│   │ Discovery │   │ Trust &   │   │ Execution │   │ Observe │  │
│   │           │   │ Verify    │   │ (Sandbox) │   │ & Audit │  │
│   └───────────┘   └───────────┘   └───────────┘   └─────────┘  │
│                                                                 │
└─────────────────────────┬───────────────────────────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────────────────┐
│                  Your Capability Registry                       │
│                                                                 │
│   @acme/data-extractor    @acme/crm-lookup    @acme/reporter   │
│   v2.1.0 · verified       v1.4.2 · verified   v3.0.0 · audit   │
│                                                                 │
│   enact/firecrawl         enact/pdf-extract   enact/sentiment  │
│   v1.0.0 · public         v2.0.1 · public     v1.1.0 · public  │
└─────────────────────────────────────────────────────────────────┘
```

### Enterprise Capabilities

| Capability | What it does |
|------------|--------------|
| **Private namespaces** | `@yourcompany/*` capabilities that never leave your infrastructure |
| **SSO integration** | Publish with your corporate identity; authenticate with your IdP |
| **Trust policies** | Require attestations from approved auditors before capabilities can run |
| **Execution limits** | Rate limiting, resource caps, timeout controls |
| **Audit logs** | Export to your SIEM; retention policies you control |
| **Self-hosted option** | Run the entire registry on your infrastructure |

---

## 10. Market

**TAM: $XX B** — Enterprise AI infrastructure spend

**SAM: $XX B** — AI agent tooling and orchestration

**SOM: $XX M** — Enterprises deploying MCP-based agent systems

*[Market sizing methodology and sources]*

---

## 11. Competition

| | enact.tools | DIY Scripts | Generic Registries |
|---|-------------|-------------|--------------------|
| Dynamic tool discovery | ✓ | ✗ | ✗ |
| Cryptographic signing | ✓ Sigstore + OIDC | ✗ | ✗ |
| Third-party attestations | ✓ | ✗ | ✗ |
| Sandboxed execution | ✓ Dagger containers | ✗ | ✗ |
| MCP native | ✓ | ✗ | ✗ |
| Execution observability | ✓ Built-in | Manual | Partial |
| Enterprise namespaces | ✓ | N/A | Partial |
| Semantic versioning | ✓ | ✗ | Partial |

**Why now?**

Anthropic's own research validates dynamic discovery — 85% token reduction, accuracy improvements from 49% → 74%. The pattern is proven. Enterprises need infrastructure to operationalize it with governance, security, and observability.

---

## 12. Future

**Phase 1: Registry & Discovery**
Governed capability registry with dynamic discovery, cryptographic signing, and MCP integration.

**Phase 2: Observability Platform**
Fleet-wide visibility into agent behavior. Performance analytics. Anomaly detection.

**Phase 3: Capability Marketplace**
Verified third-party capabilities. Enterprise procurement workflows. Revenue share for publishers.

**The long-term vision:**

Every AI agent in the enterprise discovers capabilities through enact. Every capability is versioned, verified, and observable. Teams ship agents with confidence because they know exactly what their agents can do — and can prove it.

---

## Get Started

**Pilot program** — We're working with design partners to shape the enterprise offering. If your organization is deploying AI agents at scale, let's talk.

**Open registry** — The public registry is available today. Your teams can start using verified community capabilities immediately.

---

## Contact

**Website:** [enact.tools](https://enact.tools)
**Email:** hello@enact.tools
**Demo:** [enact.tools/demo](https://enact.tools/demo)
