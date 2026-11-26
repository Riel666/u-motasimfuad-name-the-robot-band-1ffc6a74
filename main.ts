import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "The Circuit Breakers — their hit 'We Will Reboot You' has been stuck at number one for six weeks, mostly because nobody can find the off switch.";

const OUT_DIR = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(OUT_DIR + "/entry.txt", LINE, "utf8");
