// The Joke the Reviewer Laughs At — a one-line joke about working beside
// AI coding agents, assembled from a setup and a punchline and written to
// entry.txt in the directory named by MAKEFUN_OUTPUT_DIR (default /output).
// Node 22, standard library only.
//
// Why two pieces? A one-liner still has comic structure: the setup puts the
// reviewer in a recognisable moment (an agent's total confidence, a merge
// made on the spot), and the punchline re-reads that moment as a lesson.
// Keeping the halves as separate constants makes that structure explicit —
// each half can be tuned on its own, and the join is the only place the
// timing lives: one em dash, no wasted words.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The setup line, from the reviewer's chair: the agent's confidence is
// total, and it is contagious — the merge happens on the spot.
const setupLine = "Our agent writes the code, a second agent reviews it";
// The punchline line: the lesson that confidence teaches, the hard way.
const punchlineLine = "my job is to attend the meeting where they agree with each other.";

const joke = `${setupLine} — ${punchlineLine}`;

// Self-check: the entry must be a single line of 1–280 characters.
if (joke.includes("\n")) {
  throw new Error("joke must be a single line");
}
if (joke.length < 1 || joke.length > 280) {
  throw new Error(`joke is ${joke.length} characters, outside the 1–280 range`);
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), joke + "\n", "utf8");

console.log(`wrote entry.txt (${joke.length} characters)`);
