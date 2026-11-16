# Documentation Style

For anyone writing documentation, planning features, or recording decisions for BarelyBoris. Covers voice, structure, formatting conventions, and common anti-patterns. For methodology-specific guidance, see the other files in `methodology/`.

## Voice

- **Direct, not academic.** Write like you're explaining to a fellow developer, not publishing a whitepaper.
- **Definitive, not hedging.** Say "Vercel serves the static build" not "Vercel may serve the static build." If it's uncertain, flag it with `[UNVERIFIED]`.
- **Present tense.** "The auth hook validates the session" not "The auth hook will validate the session."

### Important Information First

Lead with the outcome, the constraint, or the warning before background context. If a change can break the build, take the site offline, or leak data, say that early — before the reader has invested time getting there.

### Simplicity Over Verbosity

Complex sentence structures and elaborate prose rarely help technical readers. If the audience needs advanced detail, you can still write simply and precisely.

| ❌ Verbose | ✅ Clear |
|---|---|
| "The authentication layer facilitates the orchestration of identity verification through a distributed token paradigm." | "Auth0 validates the JWT on each request." |
| "In the event that a timeout condition is encountered, the system shall initiate a retry protocol." | "If a timeout occurs, the system retries." |

### Sentence Structure and Clarity

- **One idea per sentence.** Split semicolons and "and" joins between independent thoughts.
- **Subject-verb-object.** Put the actor first, the action second, the target third.
- **Cut filler words.** "It is important to note that..." → delete. "In order to..." → "To...". "Due to the fact that..." → "Because...".
- **Prefer the active voice.** "The server validates the token" not "The token is validated by the server."

### Coherence and Cohesion

**Coherence** is the logical flow of ideas across a document. Group related concepts and follow an order that makes intuitive sense. Readers should never wonder "why am I reading this now?"

**Cohesion** is the surface-level glue — transition words, consistent terminology, and back-references.

Use the **known-to-new contract**: start each sentence with something the reader already knows, then introduce new information.

| ❌ Violates known-to-new | ✅ Follows known-to-new |
|---|---|
| "Requests hit the Vercel edge. The adapter strips headers." | "Requests hit the Vercel edge. From there, the adapter strips headers." |

### Audience-Appropriate Language

Choose words that are only as precise as your audience needs. If you must use a technical term, define it on first use. Assume the reader is a competent web developer who may not know the specific project conventions.

| ❌ Overly technical without context | ✅ Audience-appropriate |
|---|---|
| "The isomorphic rendering pipeline hydrates the SSR payload on the client boundary." | "SvelteKit renders the page on the server, then the client takes over interactivity." |

### Factors That Reduce Readability

1. **Long, complex sentences** — if a sentence has multiple clauses, split it
2. **Dense technical clusters** — too many technical terms packed into a small area overwhelms readers
3. **Long words** — prefer the shorter synonym: "use" over "utilize," "end" over "termination"
4. **Specialized vocabulary without definition** — every undefined term is a speed bump

## Structure Rules

### Scanning-Friendly Structure

Readers rarely consume technical documentation as prose. They arrive with a specific question and need to find the answer fast.

- Lead with a **purpose statement**: the first thing after the title explains *why you should read this* and what you'll be able to do after
- For long documents, provide a **table of contents or index** immediately after the purpose statement
- Use **descriptive headings** that answer questions, not topic labels
- Put the **answer before the explanation** — a reader who only needs the "what" shouldn't have to wade through the "why"
- Keep paragraphs short (3-5 lines max) and use **bulleted lists** liberally
- **Bold key terms and conclusions** so a skimming eye catches them

### Paragraphs: One Concept Each

Every paragraph must convey **one clear concept**. If a paragraph contains two distinct ideas, split it.

| ❌ | ✅ |
|---|---|
| A single 12-line paragraph covering auth, routing, and styling. | Three paragraphs: one on auth, one on routing, one on styling. |

### Purpose Statements

The first thing after the title is a single paragraph that answers: who is this for, what will they learn, and when should they read something else instead.

### Headings: Descriptive, Concise, Parallel

If someone reads only your headings, they should understand the narrative arc.

- **Descriptive** — each heading conveys the smallest meaningful unit with keywords that signal the section's content.
- **Concise** — convey the message in as few words as possible.
- **Parallel in grammar** — all headings at the same level share the same structure.

| ❌ Inconsistent | ✅ Parallel |
|---|---|
| "Adding Auth" / "Route Setup" / "How to Configure the Build" | "Adding Authentication" / "Setting Up Routes" / "Configuring the Build" |

### Lists: Bullets for Options, Numbers for Sequences

| List Type | Use When |
|---|---|
| **Bulleted** | Items without a fixed order — options, features, principles, rules |
| **Numbered** | Sequential steps, ranked priorities, or items where order matters |

All list items must follow parallel grammatical structure.

## Project-Specific Conventions

### Routes and Files

- Refer to routes by their URL path on first use in a section: `/resume` route (`src/routes/resume/+page.svelte`)
- After first use, use the short path: `/resume`
- Reference source files with backticked relative paths: `src/lib/form.ts`

### Terminal Output

- Precede commands with a comment explaining the intent:
  ```bash
  # Check whether the dev server is running
  bun run dev
  ```
- Trim irrelevant output. Show only what proves the point.
- Use `[OUTPUT TRUNCATED]` when cutting long output mid-stream.
- Never include sensitive output (tokens, passwords, keys) in documentation.

### Configuration Snippets

- Always include the file path as a comment on the first line:
  ```typescript
  // svelte.config.js (excerpt)
  const config = {
    kit: {
      adapter: vercel()
    }
  };
  ```
- Mark excerpts explicitly: `(excerpt)` or `(relevant section only)`
- Never include full config files in documentation — reference the repo path instead.

### Architecture and Data Flow

- Use **Mermaid** for flows and logical relationships (auth flow, data fetching, form submission pipelines)
- Use **tables** for mappings (route-to-component, environment variable reference)
- Every architecture change gets a diagram update in the same commit

### Cross-References

- Link to other project docs with relative paths: `[README.md](../README.md)`
- Reference methodology files: `[analysis-approach.md](analysis-approach.md)`
- Reference repo memories with their path: `` `/memories/repo/vercel-deploy-notes.md` ``

## Formatting Conventions

| Element | Convention |
|---------|-----------|
| Route paths on first use | Backticked with source file — `` `/resume` route (`src/routes/resume/+page.svelte`) `` |
| File paths | `backticks` |
| Commands to run | `code blocks` with intent comment |
| System responses / output | `code blocks` (separate from commands) |
| Decisions / tradeoffs | `> Blockquote` for rationale asides |
| Open questions | `[OPEN]` tag — `[OPEN] Should the gallery use client-side or server-side pagination?` |
| Unverified claims | `[UNVERIFIED]` tag |
| Warnings / footguns | `> ⚠️` blockquote — put these *before* the dangerous step |

## Anti-Patterns

- ❌ Wall-of-text paragraphs longer than 5 lines
- ❌ "Obviously" / "clearly" / "simply" — these hide complexity
- ❌ Linking without context — every link explains what the reader will find
- ❌ Passive voice that hides the actor — "The form is submitted" → "The client submits the form"
- ❌ Documentation that duplicates source code — link to source, explain the *why* not the *what*
- ❌ Burying critical information — warnings, constraints, and breaking changes go at the top
- ❌ Prose-structured documentation — if a reader can't find their answer in 10 seconds of scanning, the structure failed
- ❌ No purpose statement — if the reader doesn't know within 5 seconds whether this page is for them, they leave
- ❌ Filler phrases — "It should be noted that," "It is worth mentioning," "In order to" — cut them all

---

*This style guide incorporates principles from* The Practical Guide to Technical Writing for Engineers and Computer Scientists *by Stuart James MacMillan and Filiz Ozek (CC BY 4.0).*
