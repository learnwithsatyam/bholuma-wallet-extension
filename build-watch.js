// build-watch.js (ES module-compatible)
import { exec } from "child_process";
import chokidar from "chokidar";
import { fileURLToPath } from "url";
import { dirname } from "path";

// Needed to use __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const watcher = chokidar.watch("./src", {
  ignored: /(^|[\/\\])\../,
  persistent: true,
});

const build = () => {
  console.log("📦 Rebuilding project...");
  exec("vite build", (error, stdout, stderr) => {
    if (error) {
      console.error(`❌ Build error: ${error.message}`);
      return;
    }
    if (stderr) console.error(`⚠️ ${stderr}`);
    console.log(stdout);
  });
};

watcher.on("change", build).on("add", build).on("unlink", build);

console.log("👀 Watching files for rebuild...");
