<script lang="ts">
  import { fade, scale } from "svelte/transition";
  import {
    feedCats,
    healCats,
    areYouSureModal,
    costAction,
    balance,
  } from "../store.svelte";

  function action(): void {
    if (areYouSureModal.action === "feed") {
      feedCats();
      areYouSureModal.toggle();
    }
    if (areYouSureModal.action === "heal") {
      healCats();
      areYouSureModal.toggle();
    }
  }
  // console.log(balance.value);
</script>

<main transition:fade={{ duration: 150 }}>
  <div transition:scale={{ duration: 150, start: 0.8 }}>
    {#if balance.value >= costAction.value}
      <modal>
        <modal-msg>
          <h3>
            {areYouSureModal.action.charAt(0).toUpperCase() +
              areYouSureModal.action.slice(1)} the cats? Its will cost
          </h3>
          <h3 style="color: #006CFA; font-weight: 600; margin-left: 6px;">
            {costAction.value}
          </h3>
          <h3>Will be {balance.value - costAction.value} coins left</h3>
        </modal-msg>
        <button onclick={areYouSureModal.toggle} class="cancelButton"
          >Cancel</button
        >
        <button onclick={action} class="confirmButton"
          >{areYouSureModal.action.charAt(0).toUpperCase() +
            areYouSureModal.action.slice(1)}!</button
        >
      </modal>
    {:else}
      <modal>
        <modal-msg>
          <h3>No money😿</h3>
        </modal-msg>
        <button
          onclick={areYouSureModal.toggle}
          class="cancelButton no-money-button">Cancel</button
        >
      </modal>
    {/if}
  </div>
</main>

<style>
  main {
    position: fixed;
    z-index: 5;
    left: 0;
    top: 0;
    width: 320px;
    height: 308px;
    background-color: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(15px);
  }
  modal {
    background-color: white;
    margin-inline: 24px;
    margin-block: 90px;
    border-radius: 12px;
    width: 248px;
    height: 104px;
    text-align: center;
    padding: 12px;
    display: flex;
    flex-wrap: wrap;
  }
  modal-msg {
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
    flex-wrap: wrap;
    margin: 0;
    margin-bottom: 8px;
    width: 248px;
    height: 60px;
  }
  h3 {
    font-family: inherit;
    font-size: 16px;
    overflow-wrap: break-word;
    font-weight: 400;
    line-height: 110%;
    margin: 0;
    height: 18px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  button {
    width: 118px;
  }
  .confirmButton {
    margin-left: 12px;
    background-color: #2c87ff;
    color: white;
    box-shadow:
      inset 0 0 0 0.5px #005fdb,
      0 1px 2px rgba(0, 0, 0, 0.05);
  }
  .confirmButton:hover {
    background-color: #006cfa;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.15);
  }
  .cancelButton:hover {
    background-color: #f5f5f5;
    box-shadow:
      inset 0 0 0 0.5px #b3b3b3,
      0px 1px 2px rgba(0, 0, 0, 0.15);
  }
  .no-money-button {
    width: 248px;
  }
</style>
