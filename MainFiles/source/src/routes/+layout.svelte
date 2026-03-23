<script lang="ts">
  import Header from '../components/Header.svelte'
  import Footer from '../components/Footer.svelte'
</script>

<svelte:window on:scroll={() => {}} />

<Header />

<main>
  <slot />
</main>

<Footer />

<style global>
  :global(body) {
    margin: 0;
    padding: 0;
  }
</style>
