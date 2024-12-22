<script lang="ts">
  import Main from "./components/Main.svelte";
  import Hr from "./components/Hr.svelte";
  import WrongTab from "./components/WrongTab.svelte";
  import Credits from "./components/Credits.svelte";
  import { currentTab, credits } from "./store.svelte";
</script>

<!-- титры -->
{#if credits.clicks === credits.needClicks}
  <Credits />
{/if}

<!-- основа -->
{#if currentTab.value === "cats" && credits.clicks != credits.needClicks}
  <Main />
{/if}

<!-- hr -->
{#if currentTab.value === "hr"}
  <Hr />
{/if}

<!-- если не открыта игра -->
{#if currentTab.value === "wrong"}
  <WrongTab />
{/if}

<style>
</style>
