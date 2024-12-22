<script lang="ts">
  import { msg, resultOfSend } from "../store.svelte";
</script>

<input-container>
  <textarea
    bind:value={msg.value}
    name="msg"
    id="msg"
    placeholder="Write your message..."
    class={(resultOfSend.value ? "ok" : "") ||
      (resultOfSend.empty ? "empty" : "")}
  ></textarea>
</input-container>

<style>
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    20% {
      transform: translateX(-5px);
    }
    40% {
      transform: translateX(5px);
    }
    60% {
      transform: translateX(-5px);
    }
    80% {
      transform: translateX(5px);
    }
    100% {
      transform: translateX(0);
    }
  }

  input-container {
    display: block;
    height: 156px;
    padding: 24px;
  }
  textarea {
    font-family: inherit;
    font-size: 14px;
    border: 0;
    padding-inline: 12px;
    padding-block: 10px;
    width: 248px;
    height: 136px;
    background-color: #f5f5f5;
    resize: none;
    outline: none;
    box-shadow:
      inset 0 0 0 0.5px #cccccc,
      0px 1px 2px rgba(0, 0, 0, 0.05);
    border-radius: 8px;
    transition: 0.3s ease;
  }
  textarea:hover {
    background-color: #f0f0f0;
    box-shadow:
      inset 0 0 0 0.5px #b3b3b3,
      0px 1px 2px rgba(0, 0, 0, 0.15);
  }
  .ok {
    background-color: #c0e5b6;
  }
  .ok:hover {
    background-color: #c0e5b6;
    box-shadow:
      inset 0 0 0 0.5px #b3b3b3,
      0px 1px 2px rgba(0, 0, 0, 0.15);
  }
  .empty {
    animation: shake 0.3s ease-in-out;
    background-color: #e6e6e6;
  }
  .empty:hover {
    background-color: #e6e6e6;
    box-shadow:
      inset 0 0 0 0.5px #b3b3b3,
      0px 1px 2px rgba(0, 0, 0, 0.15);
  }
  /* .error {
    background-color: red;
  }
  .error:hover {
    background-color: red;
    box-shadow:
      inset 0 0 0 0.5px #b3b3b3,
      0px 1px 2px rgba(0, 0, 0, 0.15);
  } */
</style>
