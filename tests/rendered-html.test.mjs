import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const templateRoot = new URL("../", import.meta.url);

test("uses the Vercel-compatible Next.js runtime", async () => {
  const [packageJson, page, layout] = await Promise.all([
    readFile(new URL("../package.json", import.meta.url), "utf8"),
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
  ]);

  assert.match(packageJson, /"next": "\^16\.2\.6"/);
  assert.match(packageJson, /"build": "next build"/);
  assert.doesNotMatch(packageJson, /"build": ".*vinext build"/);
  assert.match(page, /MercadoChat/);
  assert.match(layout, /export const metadata: Metadata/);
});

test("does not retain the disposable Sites preview scaffold", async () => {
  const [page, layout, packageJson] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
  ]);

  assert.doesNotMatch(page, /SkeletonPreview|_sites-preview|codex-preview|react-loading-skeleton/);
  assert.doesNotMatch(layout, /codex-preview|_sites-preview|react-loading-skeleton/);
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);

  await assert.rejects(
    access(new URL("app/_sites-preview", templateRoot)),
  );
});
