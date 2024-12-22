<script lang="ts">
  import { fade, scale } from "svelte/transition";
  import { resultOfSend } from "../store.svelte";
</script>

<main transition:fade={{ duration: 150 }}>
  <div transition:scale={{ duration: 150, start: 0.8 }}>
    <modal>
      <modal-msg>
        <h3>
          Looks like you're not connected to the chat, try refreshing the page
        </h3>
      </modal-msg>
      <button
        onclick={() => {
          resultOfSend.error.value = false;
        }}
        class="cancelButton no-money-button">Cancel</button
      >
    </modal>
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
    font-size: 15px;
    overflow-wrap: break-word;
    font-weight: 400;
    line-height: 110%;
    margin: 0;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  button {
    width: 118px;
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
