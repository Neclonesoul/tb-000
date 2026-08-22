import { execFileSync } from 'node:child_process';

const forbidden = ['TO' + 'DO', 'FIX' + 'ME', 'Lor' + 'em', 'lor' + 'em', 'example' + '.com', 'Veld' + 'OS', 'Veld' + 'Gauge'];
for (const term of forbidden) {
  try {
    const output = execFileSync('rg', ['-n', '--glob', '!node_modules/**', '--glob', '!dist/**', '--glob', '!package-lock.json', term, '.'], { encoding: 'utf8' });
    if (output.trim()) {
      console.error(`Forbidden audit term found: ${term}\n${output}`);
      process.exit(1);
    }
  } catch (error) {
    if (error.status !== 1) throw error;
  }
}
console.log('Content audit passed.');
