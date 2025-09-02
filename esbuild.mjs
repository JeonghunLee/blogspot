// esbuild.mjs
import { build } from "esbuild";
import { mkdirSync, copyFileSync } from "fs";
import { join } from "path";
import { readFileSync, writeFileSync } from "fs";

const outDir = "dist";
mkdirSync(outDir, { recursive: true });

// 태그에서 버전 추출 (GITHUB_REF_NAME = v1.2.3)
const gitTag = process.env.GITHUB_REF_NAME || "";
const version = (gitTag.startsWith("v") ? gitTag.slice(1) : "") || process.env.VERSION || "dev";

// 1) CSS
await build({
  entryPoints: ["src/css/index.css"],
  outfile: join(outDir, "jeonghun-latest.css"),
  bundle: true,
  minify: true,
  loader: { ".css": "css" }
});
if (version !== "dev") {
  copyFileSync(
    join(outDir, "jeonghun-latest.css"),
    join(outDir, `jeonghun-v${version}.css`)
  );
}

// 2) JS
await build({
  entryPoints: ["src/js/index.js"],
  outfile: join(outDir, "jeonghun-latest.js"),
  bundle: true,
  minify: true,
  platform: "browser",
  target: ["es2018"]
});
if (version !== "dev") {
  copyFileSync(
    join(outDir, "jeonghun-latest.js"),
    join(outDir, `jeonghun-v${version}.js`)
  );
}


// 3) Blogger Release HTML
if (version !== "dev") {
  const template = readFileSync("src/html/release.html", "utf8");
  const html = template.replace(/\$\{version\}/g, version);
  writeFileSync(join(outDir, "release.html"), html, "utf8");
}


console.log("Built:", { version });
