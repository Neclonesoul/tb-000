<script lang="ts">
  type Project = {
    id: string;
    title: string;
    href: string;
    year: number;
    status: string;
    summary: string;
    disciplines: string[];
    technologies: string[];
    type: string;
    sourceUrl?: string | undefined;
    liveUrl?: string | undefined;
    demoUrl?: string | undefined;
    releaseUrl?: string | undefined;
  };

  export let projects: Project[] = [];
  const filters = ['ALL', 'LIVE', 'RELEASED', 'IN DEVELOPMENT', 'PUBLIC'];
  let active = 'ALL';

  $: visible =
    active === 'ALL'
      ? projects
      : projects.filter((project) => project.status === active);
</script>

<div class="project-register">
  <div class="explorer-filters" aria-label="Filter project registry">
    {#each filters as filter}
      <button
        type="button"
        class:active={active === filter}
        aria-pressed={active === filter}
        on:click={() => (active = filter)}
      >
        {filter}
      </button>
    {/each}
  </div>

  <ol class="project-register-list">
    {#each visible as project}
      <li class="project-register-record">
        <div class="project-register-primary">
          <span class="project-register-id">{project.id}</span>
          <div>
            <a class="project-register-title" href={project.href}>
              {project.title}
            </a>
            <p>{project.summary}</p>
          </div>
        </div>

        <div class="project-register-classification">
          <span>{project.type}</span>
          {#if project.disciplines.length}
            <small>{project.disciplines.join(' / ')}</small>
          {/if}
          {#if project.technologies.length}
            <small>{project.technologies.slice(0, 5).join(' · ')}</small>
          {/if}
        </div>

        <div class="project-register-state">
          <span class="status">{project.status}</span>
          <small>{project.year}</small>
        </div>

        <div class="project-register-evidence">
          <a href={project.href}>RECORD →</a>
          {#if project.sourceUrl}<a href={project.sourceUrl}>SOURCE ↗</a>{/if}
          {#if project.liveUrl}<a href={project.liveUrl}>LIVE ↗</a>{/if}
          {#if project.demoUrl}<a href={project.demoUrl}>DEMO ↗</a>{/if}
          {#if project.releaseUrl}<a href={project.releaseUrl}>RELEASE ↗</a>{/if}
        </div>
      </li>
    {/each}
  </ol>
</div>
