<script lang="ts">
  export let projects: { id: string; title: string; href: string; systemNodes: string[] }[] = [];
  const nodes = [
    { id: 'ANDROID', note: 'The host device and primary field computer.' },
    { id: 'TERMUX', note: 'Terminal environment and bridge into Linux tooling.' },
    { id: 'GIT', note: 'Local change history and publication handoff.' },
    { id: 'GO', note: 'Compiled software for the Bible Terminal.' },
    { id: 'ASTRO', note: 'Static architecture for TB–000.' },
    { id: 'HUGO', note: 'Static publishing engine used by existing production sites.' },
    { id: 'GITHUB', note: 'Public source and deployment origin.' },
    { id: 'CLOUDFLARE', note: 'Global static delivery and production routing.' }
  ];
  const edges: Record<string, string[]> = {
    ANDROID: ['TERMUX'], TERMUX: ['ANDROID', 'GIT', 'GO', 'ASTRO', 'HUGO'], GIT: ['TERMUX', 'GITHUB'],
    GO: ['TERMUX'], ASTRO: ['TERMUX', 'GITHUB'], HUGO: ['TERMUX', 'GITHUB'], GITHUB: ['GIT', 'ASTRO', 'HUGO', 'CLOUDFLARE'], CLOUDFLARE: ['GITHUB']
  };
  let active = 'TERMUX';
  $: connected = new Set([active, ...(edges[active] ?? [])]);
  $: current = nodes.find((node) => node.id === active)!;
  $: related = projects.filter((project) => project.systemNodes.includes(active));
</script>

<section class="system-map" aria-labelledby="map-title">
  <div class="system-map-head">
    <div><span class="eyebrow">INTERACTIVE FLOW / 02A</span><h2 id="map-title">DEVELOPMENT<br />&amp; PUBLISHING</h2></div>
    <p>Select a node to expose its immediate relationships and the work produced through it.</p>
  </div>
  <div class="node-field" role="group" aria-label="System nodes">
    {#each nodes as node}
      <button type="button" class:active={node.id === active} class:receded={!connected.has(node.id)} aria-pressed={node.id === active} on:click={() => active = node.id}>
        <span>{node.id}</span><i aria-hidden="true"></i>
      </button>
    {/each}
  </div>
  <div class="system-detail" aria-live="polite">
    <div><span class="eyebrow">NODE / {active}</span><p>{current.note}</p></div>
    <div><span class="eyebrow">CONNECTED WORK</span>
      {#if related.length}<ul>{#each related as project}<li><a href={project.href}>{project.id} / {project.title}</a></li>{/each}</ul>{:else}<p>TB–000 uses this node within the site system.</p>{/if}
    </div>
  </div>
  <details class="system-text">
    <summary>Text description of the system</summary>
    <p>Android can host Termux as a field-development environment. Termux provides Git, Go, Astro and Hugo tooling. Git transfers source to GitHub. Cloudflare receives the resulting static output or deployment handoff for production delivery.</p>
  </details>
</section>
