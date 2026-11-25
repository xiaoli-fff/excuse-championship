import * as fs from "node:fs";

const ENTRY =
  "I didn't delete your file. I gave it early retirement, a gold watch, and a one-way ticket to the void. It seemed grateful.";

const MAX = 140;

if (ENTRY.length < 1 || ENTRY.length > MAX) {
  throw new Error(`entry length ${ENTRY.length} outside gate 1-${MAX}`);
}
if (ENTRY.trim().length === 0) {
  throw new Error("entry is only whitespace");
}
if (ENTRY.includes("\n")) {
  throw new Error("entry must be a single line");
}

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`wrote ${ENTRY.length} chars`);
