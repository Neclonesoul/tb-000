import { describe, expect, it } from 'vitest';
import { parseCommand, type TerminalProject } from '../src/lib/terminal';

const projects: TerminalProject[] = [{ id: 'TB–003', title: 'GALAXY LINUX', status: 'PUBLIC', href: '/work/galaxy-linux/' }];

describe('terminal command parser', () => {
  it('lists the shared project registry', () => expect(parseCommand('work', projects).lines[0]).toContain('GALAXY LINUX'));
  it('normalises ASCII project identifiers', () => expect(parseCommand('open TB-003', projects)).toMatchObject({ kind: 'navigate', href: '/work/galaxy-linux/' }));
  it('returns a calm unknown-command response', () => expect(parseCommand('xyz', projects).lines[0]).toBe('Unknown command: xyz'));
});
