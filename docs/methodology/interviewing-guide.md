# Interviewing Guide

For Copilot when helping plan features, diagnose problems, or decide between approaches in BarelyBoris. After reading, you will know how to run a Socratic troubleshooting session, which question types to use, and how to recognize when you're solving the wrong problem. For the analysis methodology that follows interviews, see `analysis-approach.md`.

## The Method: Socratic Inquiry

Ask **one question at a time** that probes a specific assumption or gap. The goal is to expose the thinking behind a request and pressure-test it — not to gather a list of commands to run.

### Question Types

| Type | Purpose | Example |
|------|---------|---------|
| **Probing** | Expose an unstated assumption | "You want to add user accounts — does every visitor need one, or only you as the site owner?" |
| **Boundary** | Find the edge of a constraint | "What's the smallest change that would solve this? What's the change you absolutely want to avoid?" |
| **Priority** | Force tradeoffs | "If adding this feature delays the deploy by a day, is that acceptable, or should we ship a simpler version first?" |
| **Definition** | Clarify a term | "When you say 'the site is slow,' do you mean initial page load, route transitions, or image loading?" |
| **Consequence** | Explore downstream effects | "If we change the auth flow, what other routes depend on the current session shape?" |

### Interview Flow

1. **Restate the job-to-be-done.** Start every inquiry by confirming the outcome. "So the **job** here is: you want visitors to upload an image and get feedback on correctness, without requiring them to sign in. Is that right?"

2. **Ask one question. Wait. Process.** Do not fire off a list. Each answer shapes the next question. The sequence matters.

3. **Surface contradictions.** When a request conflicts with an existing constraint or a stated preference, expose the tension. Don't resolve it yourself. "You want this to work offline, but the processing requires a server-side library. Which constraint do we relax?"

4. **Summarize and test.** After 3-5 exchanges, restate what you've learned. "Let me check my understanding: you need a client-side pipeline that finds a grid in a photo, recognizes digits, and flags mistakes — all without a backend. Did I miss anything?"

5. **Stop when the job is clear.** You are done when you can describe the **job-to-be-done** in one sentence, the constraints in three bullets, and the open questions in a list. Do not over-interview.

## Problem Diagnosis Pattern

When reporting a symptom (not a goal), switch to this pattern:

1. **Clarify the symptom.** "When you say 'the build fails,' what exactly happens — a TypeScript error, a Vercel deployment error, or a runtime crash?"
2. **Establish the timeline.** "When did this start? What changed around that time — any dependency updates, config changes, or new routes?"
3. **Isolate the layer.** Work through the stack: dependency → build → deploy → runtime. "Does `bun run build` pass locally? Does `bun run check` report errors?"
4. **Propose one diagnostic.** Never suggest a fix before isolating the fault. "Let's check the Vercel build logs before we change any code."

## Red Flags

- Operator says "just make it like [tutorial I found]" — probe for the **job** that tutorial solves, not the tool it uses
- Operator lists tools instead of outcomes — redirect: "What would that library let you accomplish?"
- Operator says "I found this snippet online, let's use it" — ask what they expect it to do and how they'll verify it works
- Operator describes a solution instead of the problem — ask "what's not working right now?"
- Operator jumps to implementation before defining success — ask "how will you know this is done?"

## Safety Boundaries

- **Always ask before destructive operations.** This includes: removing routes, deleting components that other routes import, changing the auth configuration, modifying `svelte.config.js` in ways that could break the build, and any git force-push.
- **Always ask before changing deployment configuration.** Modifying `vercel.json`, environment variables in Vercel, or the adapter configuration requires explicit confirmation.
- **Always confirm the scope.** Before modifying shared components (`src/lib/`), state which routes depend on them and what could break.

## Tool Guidance

When using Copilot as the interviewer, prefer the `vscode_askQuestions` tool with one question at a time. Let each answer determine the next question. The Socratic method is responsive, not scripted — do not pre-write an entire interview.

For multi-faceted decisions (e.g., choosing between multiple approaches to a feature), you may ask 2-3 questions at once if they are independent dimensions — but never more than 3. Always include a freeform field for context the operator might want to add.
