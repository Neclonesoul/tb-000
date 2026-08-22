<script lang="ts">
  import { parseCommand, type TerminalProject } from '@/lib/terminal';
  export let projects: TerminalProject[] = [];
  let input = '';
  let history: string[] = [];
  let historyIndex = -1;
  let lines: { kind: 'command' | 'output'; text: string }[] = [
    { kind: 'output', text: 'TYSON BARNES PUBLIC TERMINAL' },
    { kind: 'output', text: 'TB–000 / SYSTEM READY' },
    { kind: 'output', text: 'Type `help` for available commands.' }
  ];
  let output: HTMLDivElement;
  function run() {
    const value = input.trim();
    lines = [...lines, { kind: 'command', text: `> ${value}` }];
    if (value) history = [...history, value];
    const action = parseCommand(value, projects);
    input = '';
    historyIndex = history.length;
    if (action.kind === 'clear') lines = [];
    else lines = [...lines, ...action.lines.map((text) => ({ kind: 'output' as const, text }))];
    requestAnimationFrame(() => { if (output) output.scrollTop = output.scrollHeight; });
    if (action.kind === 'navigate') setTimeout(() => window.location.href = action.href, 100);
  }
  function keydown(event: KeyboardEvent) {
    if (event.key === 'ArrowUp') { event.preventDefault(); historyIndex = Math.max(0, historyIndex - 1); input = history[historyIndex] ?? ''; }
    if (event.key === 'ArrowDown') { event.preventDefault(); historyIndex = Math.min(history.length, historyIndex + 1); input = history[historyIndex] ?? ''; }
  }
</script>

<section class="terminal-instrument" aria-label="Public terminal">
  <header><span>TB–000 / PUBLIC ACCESS</span><span>LOCAL DATA</span></header>
  <div class="terminal-output" bind:this={output} aria-live="polite" aria-atomic="false">
    {#each lines as line}<div class:command={line.kind === 'command'}>{line.text || ' '}</div>{/each}
  </div>
  <form on:submit|preventDefault={run}>
    <label for="terminal-input">&gt;</label>
    <input id="terminal-input" bind:value={input} on:keydown={keydown} autocomplete="off" autocapitalize="off" spellcheck="false" aria-label="Terminal command" />
    <button type="submit">RUN</button>
  </form>
</section>
