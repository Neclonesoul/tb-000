export type TerminalProject = {
  id: string;
  title: string;
  status: string;
  href: string;
};

export type TerminalAction =
  | { kind: 'output'; lines: string[] }
  | { kind: 'navigate'; href: string; lines: string[] }
  | { kind: 'clear'; lines: [] };

const routes: Record<string, string> = {
  systems: '/systems/', notes: '/notes/', photos: '/photography/',
  photography: '/photography/', about: '/about/', github: 'https://github.com/Neclonesoul'
};

export function parseCommand(input: string, projects: TerminalProject[]): TerminalAction {
  const value = input.trim();
  const [command = '', ...args] = value.split(/\s+/);
  const cmd = command.toLowerCase();
  if (!cmd || cmd === 'help') return { kind: 'output', lines: [
    'systems     system registry', 'open <id>   open a system',
    'systems     systems map', 'notes       writing', 'photos      photography',
    'about       operator', 'github      source repositories', 'clear       clear display'
  ] };
  if (cmd === 'clear') return { kind: 'clear', lines: [] };
  if (cmd === 'systems' || cmd === 'work') return { kind: 'output', lines: projects.map((p) => `${p.id.padEnd(8)} ${p.title.padEnd(24)} ${p.status}`) };
  if (cmd === 'open') {
    const query = args.join(' ').toUpperCase().replace('-', '–');
    const project = projects.find((p) => p.id === query || p.title.toUpperCase() === query);
    return project
      ? { kind: 'navigate', href: project.href, lines: [`Opening ${project.id} / ${project.title}`] }
      : { kind: 'output', lines: [`No project matches: ${args.join(' ') || '(missing id)'}`, 'Try `systems` to list systems.'] };
  }
  if (routes[cmd]) return { kind: 'navigate', href: routes[cmd], lines: [`Opening ${cmd}`] };
  return { kind: 'output', lines: [`Unknown command: ${command}`, 'Type `help` for available commands.'] };
}
