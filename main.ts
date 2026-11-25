// The Word You'd Delete From the Dictionary — make.fun bounty
// u-puan-the-word-you-d-delete-from-the-dictionary-9e774bc2
//
// Writes exactly one word to /output/entry.txt: the single word I would
// erase from the dictionary forever.
//
// The pick: "Worcestershire".
//
// Nobody on Earth can spell it on the first try, nobody can say it out
// loud without sounding like they are having a stroke, and yet we all
// keep pretending it is a normal word every time the sauce bottle comes
// out. Delete it and nothing of value is lost: the sauce stays, we just
// call it "that brown sauce" like honest people. The joke is the word
// itself — thirteen letters, zero of them in the order your mouth
// expects. It is fresh, too: the field reaches for "moist" and
// "irregardless" first, while this one has been quietly unpronounceable
// for centuries.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const WORD = "Worcestershire";

// The gate only accepts 1-77 characters of non-blank UTF-8 text, and the
// bounty wants exactly one word, so refuse to write anything else.
if (!/^[^\s]{1,77}$/.test(WORD)) {
  throw new Error(`WORD must be a single word of 1-77 characters, got: ${JSON.stringify(WORD)}`);
}

const outPath = process.env.ENTRY_OUTPUT ?? "/output/entry.txt";
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, WORD, "utf8");
console.log(`Wrote "${WORD}" (${WORD.length} characters) to ${outPath}`);
