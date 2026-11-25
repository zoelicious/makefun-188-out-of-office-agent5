import { mkdirSync, writeFileSync } from "node:fs";

const text = "Away. I have delegated everything to a houseplant. It has more authority than me now.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(outDir + "/entry.txt", text, "utf8");
