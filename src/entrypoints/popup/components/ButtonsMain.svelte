<script lang="ts">
  import {
    updateData,
    hungryCats,
    sickCats,
    areYouSureModal,
    showSend,
    costAction,
  } from "../store.svelte";
  import NumberFlow from "@number-flow/svelte";

  let fromZero = $state(true);
  onMount(() => {
    setTimeout(() => {
      fromZero = false;
    }, 150);
  });

  function feed(): void {
    if (hungryCats.value <= 0) {
      return;
    }
    costAction.value = hungryCats.value;
    areYouSureModal.action = "feed";
    areYouSureModal.toggle();
    return;
  }
  function heal(): void {
    if (sickCats.value <= 0) {
      return;
    }
    costAction.value = sickCats.value * 2;
    areYouSureModal.action = "heal";
    areYouSureModal.toggle();
    return;
  }
</script>

<container>
  <button onclick={() => showSend.change()} style="width:272px"
    >Send everyone</button
  >
  <button onclick={feed} class="button-counter"
    >Feed
    <span class="hungry-counter">
      <NumberFlow
        spinTiming={{
          duration: 850,
          easing:
            "linear(0, 0.0021, 0.0083, 0.0182 1.47%, 0.0339 2.04%, 0.0771 3.16%, 0.1416 4.42%, 0.2798 6.6%, 0.5937 10.95%, 0.7233 12.84%, 0.8434 14.81%, 0.9387, 1.0165 18.46%, 1.0487 19.37%, 1.0785 20.35%, 1.1017 21.27%, 1.1221, 1.138, 1.1497 24.21%, 1.1591 25.48%, 1.1629 26.81%, 1.1612 28.22%, 1.1536 29.76%, 1.1434 31.09%, 1.1292 32.57%, 1.0508 39.37%, 1.0165 42.88%, 1.0016 44.85%, 0.9904 46.74%, 0.982 48.71%, 0.9765 50.74%, 0.9735 53.55%, 0.9749 56.78%, 0.9966 69.41%, 1.0033 76.5%, 1.0042 83.38%, 0.9999 99.95%)",
        }}
        continuous={true}
        value={fromZero ? 0 : hungryCats.value}
      />
    </span>
  </button>
  <button onclick={heal} class="button-counter"
    >Health
    <span class="sickly-counter">
      <NumberFlow
        spinTiming={{
          duration: 850,
          easing:
            "linear(0, 0.0021, 0.0083, 0.0182 1.47%, 0.0339 2.04%, 0.0771 3.16%, 0.1416 4.42%, 0.2798 6.6%, 0.5937 10.95%, 0.7233 12.84%, 0.8434 14.81%, 0.9387, 1.0165 18.46%, 1.0487 19.37%, 1.0785 20.35%, 1.1017 21.27%, 1.1221, 1.138, 1.1497 24.21%, 1.1591 25.48%, 1.1629 26.81%, 1.1612 28.22%, 1.1536 29.76%, 1.1434 31.09%, 1.1292 32.57%, 1.0508 39.37%, 1.0165 42.88%, 1.0016 44.85%, 0.9904 46.74%, 0.982 48.71%, 0.9765 50.74%, 0.9735 53.55%, 0.9749 56.78%, 0.9966 69.41%, 1.0033 76.5%, 1.0042 83.38%, 0.9999 99.95%)",
        }}
        continuous={true}
        value={fromZero ? 0 : sickCats.value}
      />
    </span>
  </button>
</container>

<style>
  container {
    margin-block: 12px 24px;
    padding-inline: 24px;
    height: 80px;
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    align-content: center;
    z-index: 2;
  }

  .button-counter {
    width: 132px;
  }
  .hungry-counter,
  .sickly-counter {
    font-family: inherit;
    font-size: 15px;
    font-weight: 600;
    background-color: black;
    color: rgb(255, 255, 255);
    padding: 2px 9px;
    border-radius: 12px;
    margin-left: 8px;
    height: 17px;
    min-width: 2ch;
    font-variant-numeric: tabular-nums;
  }
</style>
