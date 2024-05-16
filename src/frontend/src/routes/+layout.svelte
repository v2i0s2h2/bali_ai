<script>
  import ConnectCard from "$lib/ConnectCard.svelte";
  import Nav from "$lib/Nav.svelte";
  import { authStore } from "$lib/auth.store";
  import "../app.css";
</script>

{#if $authStore.isAuthenticated}
  <Nav />
  <slot />
{:else}
  <ConnectCard />
{/if}
