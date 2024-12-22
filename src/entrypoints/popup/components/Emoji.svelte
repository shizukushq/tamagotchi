<script lang="ts">
  import { DotLottieSvelte } from "@lottiefiles/dotlottie-svelte";
  import { catState, credits } from "../store.svelte";
  import { blur } from "svelte/transition";
  import { cubicIn } from "svelte/easing";

  // отрисовка плеера (кота) с задержкой т.к. не успевает обновиться catState
  let delayDraw = $state(false);
  setTimeout(() => {
    delayDraw = true;
  }, 50);

  catState.update();
  $effect(() => {
    catState.update();
  });
</script>

<main>
  <button
    onclick={() => {
      credits.clicks++;
    }}
  >
    {#if delayDraw}
      <catEmoji
        in:blur={{ duration: 350, amount: 5 }}
        onoutend={() => (catState.love ? null : null)}
      >
        {#if !catState.love}
          <catEmoji
            in:blur={{ duration: 200, easing: cubicIn, amount: 1 }}
            onoutend={() => (catState.love ? null : null)}
          >
            <DotLottieSvelte
              src={catState.emoji.value}
              loop
              autoplay
              renderConfig={{
                devicePixelRatio: 3,
                autoResize: true,
              }}
            />
          </catEmoji>
        {/if}
        {#if catState.love}
          <loveEmoji
            in:blur={{ duration: 200, easing: cubicIn, amount: 1 }}
            onoutend={() => (catState.love ? null : null)}
          >
            <DotLottieSvelte
              src={catState.emoji.love}
              loop
              autoplay
              renderConfig={{
                devicePixelRatio: 3,
                autoResize: true,
              }}
            ></DotLottieSvelte>
          </loveEmoji>
        {/if}
      </catEmoji>
    {/if}
  </button>
</main>

<style>
  main {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-top: 0;
    width: 320px;
    height: 88px;
  }
  button,
  button:hover {
    border: none;
    background: none;
    padding: 0;
    box-shadow: none;
    cursor: unset;
    width: 88px;
    height: 100%;
    z-index: 3;
    transition: 0.2s ease;
  }
  button:active {
    transform: scale(0.75);
    transition: 0.15s ease;
  }
  /* emoji {
    width: 88px;
    height: 100%;
    z-index: 3;
    transition: 0.15s ease;
  }
  emoji:active {
    transform: scale(0.75);
    transition: 0.15s ease;
  } */
</style>
