<script lang="ts">
  import { sineIn } from "svelte/easing";
  import { blur } from "svelte/transition";
  import { credits } from "../store.svelte";
</script>

<main transition:blur={{ duration: 200, easing: sineIn, amount: 1 }}>
  <container>
    <img
      draggable="false"
      src="../../../assets/meow.jpg"
      alt="здесь была картинка"
    />
  </container>
  <div>
    <button
      onclick={() => chrome.tabs.create({ url: "http://t.me/shizukushq" })}
      class="telegram">Me: @shizukushq</button
    >
    <button
      onclick={() => {
        credits.clicks = 0;
      }}>Back</button
    >
  </div>
</main>

<style>
  main {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    width: 320px;
    height: 308px;
    margin: 0;
    top: 0;
    left: 0;
    background-color: #fafafa;
  }
  img {
    width: 272px;
    height: 156px;
    margin: 24px 24px 0px 24px;
    border-radius: 8px;
  }
  div {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 8px;
    margin-block: 24px;
  }
  button {
    width: 272px;
  }
  .telegram {
    color: white;
    background-color: #2c87ff;
    box-shadow:
      inset 0 0 0 0.5px #005fdb,
      0 1px 2px rgba(0, 0, 0, 0.05);
  }
  .telegram:hover {
    background-color: #006cfa;
  }
</style>
