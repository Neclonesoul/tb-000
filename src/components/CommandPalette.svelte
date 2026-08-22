<script lang="ts">
  export let items: { label: string; detail: string; href: string }[] = [];
  let dialog: HTMLDialogElement;
  let query = '';
  let selected = 0;
  $: matches = items.filter((item) => `${item.label} ${item.detail}`.toLowerCase().includes(query.toLowerCase()));
  $: if (selected >= matches.length) selected = 0;

  function open() {
    query = '';
    selected = 0;
    dialog?.showModal();
    requestAnimationFrame(() => dialog?.querySelector<HTMLInputElement>('input')?.focus());
  }
  function close() { dialog?.close(); }
  function go(href: string) { close(); window.location.href = href; }
  function keydown(event: KeyboardEvent) {
    if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') { event.preventDefault(); open(); return; }
    if (!dialog?.open) return;
    if (event.key === 'ArrowDown') { event.preventDefault(); selected = Math.min(selected + 1, matches.length - 1); }
    if (event.key === 'ArrowUp') { event.preventDefault(); selected = Math.max(selected - 1, 0); }
    if (event.key === 'Enter' && matches[selected]) { event.preventDefault(); go(matches[selected].href); }
  }
  function clickOutside(event: MouseEvent) { if (event.target === dialog) close(); }

  $: if (typeof document !== 'undefined') {
    document.querySelectorAll('[data-open-palette]').forEach((button) => {
      if (!button.hasAttribute('data-bound')) {
        button.setAttribute('data-bound', 'true');
        button.addEventListener('click', open);
      }
    });
  }
</script>

<svelte:window on:keydown={keydown} />
<dialog bind:this={dialog} class="command-palette" aria-labelledby="palette-title" on:click={clickOutside}>
  <div class="palette-panel">
    <header>
      <span id="palette-title">GO TO / FIND</span>
      <button type="button" on:click={close} aria-label="Close command palette">ESC</button>
    </header>
    <label class="sr-only" for="palette-query">Search site</label>
    <input id="palette-query" bind:value={query} on:input={() => selected = 0} placeholder="Project, section or instrument" autocomplete="off" />
    <ul role="listbox" aria-label="Results">
      {#each matches as item, index}
        <li class:active={index === selected}>
          <button type="button" on:mouseenter={() => selected = index} on:click={() => go(item.href)}>
            <span>{item.label}</span><small>{item.detail}</small>
          </button>
        </li>
      {:else}
        <li class="palette-empty">No matching record.</li>
      {/each}
    </ul>
    <footer><span>↑↓ SELECT</span><span>↵ OPEN</span></footer>
  </div>
</dialog>
