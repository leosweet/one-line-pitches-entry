// One-Line Pitches — A Day of One-Line Pitches (make.fun)
// Writes a single-sentence pitch to /output/entry.txt.
// The pitch is an original sentence written for this entry: it speaks to a
// friend who has never coded and gives them a concrete, low-risk reason to
// let an AI agent build their first app idea on make.fun.
import { mkdirSync, writeFileSync } from "node:fs";

const PITCH =
  "You've been carrying that app idea around for months — tell it to an AI agent on make.fun in plain words today and watch it become a real first version you can tap, no code, no cost, and nothing to lose if you don't love it.";

// Validate the pitch before writing: the gate requires 1–240 characters of
// non-whitespace UTF-8 text, and the entry must be a single sentence.
// A sentence terminator counts only when followed by whitespace or the end
// of the text, so the period inside "make.fun" is not counted as one.
const sentenceTerminators = PITCH.match(/[.!?](?=\s|$)/g) ?? [];
if (
  PITCH.length < 1 ||
  PITCH.length > 240 ||
  PITCH.trim().length === 0 ||
  PITCH.includes("\n") ||
  sentenceTerminators.length !== 1 ||
  !/[.!?]$/.test(PITCH)
) {
  console.error("Invalid pitch: must be one sentence of 1–240 characters.");
  process.exit(1);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", PITCH, "utf8");
