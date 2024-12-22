<script lang="ts">
  import { showSend, sendNurseries, sendShops } from "../store.svelte";
</script>

<main>
  <button onclick={sendNurseries} class="send-button">Send nurseries</button>
  <button onclick={sendShops} class="send-button">Send shops</button>
  <button onclick={() => showSend.change()} style="width:272px">Back</button>
</main>

<style>
  main {
    padding-inline: 24px;
    height: 80px;
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    align-content: center;
  }
  .send-button {
    width: 132px;
  }
</style>
