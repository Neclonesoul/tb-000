<script lang="ts">
  type Project = { id: string; title: string; href: string; status: string; summary: string; disciplines: string[]; technologies: string[]; type: string };
  export let projects: Project[] = [];
  const filters = ['ALL', 'SOFTWARE', 'SYSTEMS', 'WEB', 'FIELD'];
  let active = 'ALL';
  let selected = 0;
  $: visible = active === 'ALL' ? projects : projects.filter((project) => project.disciplines.includes(active));
  $: if (selected >= visible.length) selected = 0;
  function keydown(event: KeyboardEvent) {
    if (event.key === 'ArrowDown') { event.preventDefault(); selected = Math.min(selected + 1, visible.length - 1); }
    if (event.key === 'ArrowUp') { event.preventDefault(); selected = Math.max(selected - 1, 0); }
    if (event.key === 'Enter' && visible[selected]) window.location.href = visible[selected].href;
  }
</script>

<section class="explorer" aria-label="Project explorer" on:keydown={keydown}>
  <div class="explorer-filters" aria-label="Filter projects">
    {#each filters as filter}
      <button type="button" class:active={active === filter} aria-pressed={active === filter} on:click={() => { active = filter; selected = 0; }}>{filter}</button>
    {/each}
  </div>
  <div class="explorer-grid">
    <div class="explorer-list" role="list">
      {#each visible as project, index}
        <a href={project.href} role="listitem" class:selected={index === selected} on:mouseenter={() => selected = index} on:focus={() => selected = index}>
          <span>{project.id}</span>
          <strong>{project.title}</strong>
          <small>{project.status}</small>
        </a>
      {/each}
    </div>
    {#if visible[selected]}
      <aside class="explorer-preview" aria-live="polite">
        <span class="eyebrow">SELECTED RECORD / {visible[selected].id}</span>
        <h2>{visible[selected].title}</h2>
        <p>{visible[selected].summary}</p>
        <dl>
          <div><dt>DISCIPLINE</dt><dd>{visible[selected].disciplines.join(' / ')}</dd></div>
          <div><dt>SYSTEM</dt><dd>{visible[selected].technologies.slice(0, 4).join(' · ')}</dd></div>
        </dl>
      </aside>
    {/if}
  </div>
</section>
