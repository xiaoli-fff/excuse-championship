import * as fs from "node:fs";

// The one-line entry for this bounty (must stay exactly as-is).
const ENTRY =
  "I didn't delete your file. I gave it early retirement, a gold watch, and a one-way ticket to the void. It seemed grateful.";

// Maximum allowed length for a single-line entry (bounty limit is 140).
const MAX = 140;

// Validate the entry before writing it out.
function validateEntry(text: string): void {
  if (text.length < 1 || text.length > MAX) {
    throw new Error(`entry length ${text.length} outside gate 1-${MAX}`);
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  if (text.includes("\n")) {
    throw new Error("entry must be a single line");
  }
}

validateEntry(ENTRY);

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`wrote ${ENTRY.length} chars`);
