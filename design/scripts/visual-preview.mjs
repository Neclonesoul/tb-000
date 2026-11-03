// Browser-based visual and navigation smoke test for the isolated design portfolio.
// Run from design/ after npm install, npm install --no-save playwright,
// and npx playwright install chromium.
import { chromium } from 'playwright';
import { spawn } from 'node:child_process';
import { mkdir, writeFile } from 'node:fs/promises';

const rootUrl = 'http://127.0.0.1:4327';
const outputDir = new URL('../preview-artifacts/', import.meta.url);
const server = spawn('./node_modules/.bin/astro', ['preview', '--host', '127.0.0.1', '--port', '4327'], { stdio: 'pipe', shell: false });
let serverOutput = '';
server.stdout.on('data', chunk => { serverOutput += chunk.toString(); });
server.stderr.on('data', chunk => { serverOutput += chunk.toString(); });

async function awaitServer() {
  for (let i = 0; i < 60; i++) {
    if (server.exitCode !== null) throw new Error('Preview server stopped: ' + serverOutput);
    try {
      const response = await fetch(rootUrl);
      if (response.ok) return;
    } catch { /* Server is starting */ }
    await new Promise(resolve => setTimeout(resolve, 300));
  }
  throw new Error('Could not start Astro preview server: ' + serverOutput);
}
const errors = [];
let browser;
try {
  await mkdir(outputDir, { recursive: true });
  await awaitServer();
  browser = await chromium.launch({ headless: true });

  const desktop = await browser.newPage({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1, reducedMotion: 'reduce' });
  desktop.on('pageerror', error => errors.push('desktop JS: ' + error.message));
  await desktop.goto(rootUrl, { waitUntil: 'networkidle' });
  await desktop.locator('#hero-title').waitFor();
  const header = await desktop.locator('#hero-title').textContent();
  if (!header?.includes('first') || !header?.includes('final form')) throw new Error('Desktop hero text missing');
  const projects = await desktop.locator('.project-card').count();
  if (projects !== 4) throw new Error(`Expected four featured project cards, found ${projects}`);
  if (await desktop.evaluate(() => document.documentElement.scrollWidth > innerWidth + 3)) throw new Error('Desktop horizontal overflow');
  await desktop.screenshot({ path: new URL('desktop.jpg', outputDir).pathname, fullPage: true, animations: 'disabled', type: 'jpeg', quality: 78 });

  const caseLink = await desktop.locator('.project-card').first().getAttribute('href');
  if (!caseLink) throw new Error('Missing first project link');
  const caseResponse = await desktop.goto(new URL(caseLink, rootUrl).toString(), {waitUntil:'networkidle'});
  if (!caseResponse?.ok()) throw new Error('Case study returned non-200 response');
  await desktop.locator('.case-page h1').waitFor();
  await desktop.screenshot({ path: new URL('case-study.jpg', outputDir).pathname, fullPage: true, animations: 'disabled', type: 'jpeg', quality: 78 });

  const mobile = await browser.newPage({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 1, isMobile: true, hasTouch: true, reducedMotion: 'reduce' });
  mobile.on('pageerror', error => errors.push('mobile JS: ' + error.message));
  await mobile.goto(rootUrl, { waitUntil: 'networkidle' });
  await mobile.locator('#hero-title').waitFor();
  const mobileOverflow = await mobile.evaluate(() => ({ width: document.documentElement.scrollWidth, viewport: innerWidth }));
  if (mobileOverflow.width > mobileOverflow.viewport + 3) throw new Error('Mobile horizontal overflow: ' + JSON.stringify(mobileOverflow));
  await mobile.screenshot({ path: new URL('mobile.jpg', outputDir).pathname, fullPage: true, animations: 'disabled', type: 'jpeg', quality: 78 });

  const toggle = mobile.locator('.mobile-menu-button');
  await toggle.click();
  if (await toggle.getAttribute('aria-expanded') !== 'true') throw new Error('Mobile navigation did not open');
  await mobile.locator('.mobile-nav a[href="#work"]').click();
  if (await toggle.getAttribute('aria-expanded') !== 'false') throw new Error('Mobile navigation did not close after following anchor');
  if (errors.length) throw new Error('JS runtime errors: ' + errors.join('; '));

  const report = { result: 'PASS', desktop: '1440 × 900', mobile: '390 × 844', featuredProjects: projects, caseStudyStatus: caseResponse?.status(), mobileMenu: 'PASS', horizontalOverflow: 'NONE', javascriptErrors: errors };
  await writeFile(new URL('report.json', outputDir), JSON.stringify(report, null, 2));
  console.log('Browser review passed:', JSON.stringify(report));
} finally {
  await browser?.close();
  server.kill('SIGTERM');
}
