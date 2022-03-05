<script>
  export let name;
  let dark = false;

  function toggleDarkMode() {
    dark = !dark
    document.documentElement.classList[dark ? 'add' : 'remove']('dark')
  }
</script>

<main>
  <h1 bg='blue-4090 hover:blue-500'>Hello {name}!</h1>
  <button on:click={toggleDarkMode}>{#if dark}Light{:else}Dark{/if} Mode</button>
</main>