import { rmSync } from "node:fs";
import { spawn } from "node:child_process";

try {
  rmSync(".next", { recursive: true, force: true });
} catch {
  // ignore
}

const child = spawn("npx", ["next", "dev"], {
  stdio: "inherit",
  shell: true,
  cwd: process.cwd(),
});

child.on("exit", (code) => process.exit(code ?? 0));
