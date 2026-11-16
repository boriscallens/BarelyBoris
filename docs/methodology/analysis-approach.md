# Analysis Approach

For anyone designing features, planning changes, or evaluating tradeoffs for BarelyBoris. After reading, you will know how to structure analysis outputs, when to use which visual form, and how to apply progressive disclosure. For writing style specifics, see `documentation-style.md`.

## Core Principle: Context-First Thinking

BarelyBoris has existing routes, components, auth flow, and deployment pipeline. Before analyzing any change:

1. **Check existing documentation** — `README.md`, route-specific markdown files, methodology files
2. **Check repo memories** — `/memories/repo/` for known quirks and past decisions
3. **Identify the affected system** — which route, which component, which dependency, which API
4. **Define new terms** before using them if they're not already in the documentation

Context is a process, not a gate. Flag gaps as you work, but do not let missing context block progress.

## Problem-First Narrative Structure

Every analysis output follows this structure:

### 1. Start With the Job-to-be-Done

Describe what the user or developer wants to accomplish and the outcome they want. Frame this in terms of the **job**, not the tool. Avoid solution language.

| ❌ Solution-first | ✅ Job-first |
|---|---|
| "Add a library for image processing" | "The visitor wants to upload a photo and see whether their solution is correct" |
| "Install a CSS animation library" | "Page transitions should feel smooth and intentional, not jarring" |
| "Add a database" | "The site needs to persist user-submitted content across deploys" |

### 2. Document the Current State

Describe the situation today: what exists, what friction the user encounters, what workarounds are in use. Reference real routes, components, and file paths — not abstract descriptions.

### 3. Explain the Design Rationale

Walk through the reasoning: why this approach over alternatives, what tradeoffs shaped the decision, what constraints apply (Vercel serverless limits, bundle size budget, SvelteKit SSR behavior).

### 4. Describe the Proposed Change

Describe what changes. Include:
- What gets created, modified, or removed
- Which routes and components are affected
- Failure modes and rollback path
- What is explicitly out of scope

### 5. List Open Questions

What remains uncertain, what needs testing, what assumptions need validation before proceeding.

## Progressive Disclosure

All outputs use three levels. Start at the top and let the reader choose depth:

- **Surface** (always visible): What problem, what solution, what decision. One paragraph.
- **Rationale** (one click away): Why this approach. Tradeoffs, constraints, alternatives considered.
- **Deep dive** (explicitly opt-in): Full code snippets, state machines, edge case matrices, step-by-step procedures.

Point to deeper levels explicitly: "A full edge case breakdown is available below." Never bury the surface-level answer behind detail.

## Output Standards

- Write for yourself six months from now. Assume you remember nothing about why you made this decision.
- Prefer concrete examples over abstract descriptions.
- Trace every assertion to a route, a constraint, or a documented fact.
- Distinguish opinion from fact: "I believe..." versus "The `/gallery` route loads..."

## Choosing the Right Visual

Different types of information need different visual forms. Match the form to the job:

| Information Type | Visual Form | Example Use |
|---|---|---|
| Data flow, request lifecycle | **Flowchart** (Mermaid flowchart) | How a form submission travels from client to server and back |
| Component states and transitions | **State diagram** (Mermaid stateDiagram) | Auth states: unauthenticated → loading → authenticated → expired |
| Decision logic, branching rules | **Decision tree** (Mermaid flowchart with diamond nodes) | Route guards, feature flag evaluation |
| Comparisons of options | **Table** | Library options, hosting platforms, auth providers |
| Relationships between entities | **Entity diagram** (Mermaid erDiagram) | Route-to-component mappings, dependency graphs |
| Hierarchies, taxonomies | **Tree diagram** (Mermaid flowchart with layered nodes) | Component tree, route hierarchy |
| Timeline or sequence | **Sequence diagram** (Mermaid sequenceDiagram) | Auth flow, API call chain, build pipeline stages |
| Spatial layout, composition | **Wireframe or layout diagram** | Page structure, responsive breakpoint behavior |

A useful diagram reveals what prose cannot: relationships, structure, or flow that are hard to hold in your head from text alone. If the diagram and the prose communicate the same thing, remove one of them.

## Decision Records

When a choice involves a non-obvious tradeoff, write a lightweight decision record. Keep it in the relevant feature's markdown file or as a repo memory.

Format:
- **Context**: What situation prompted this decision?
- **Options considered**: What alternatives were evaluated?
- **Decision**: What was chosen and why?
- **Consequences**: What becomes easier? What becomes harder?
