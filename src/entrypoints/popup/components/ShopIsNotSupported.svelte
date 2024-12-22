<script lang="ts">
  import { DotLottieSvelte } from "@lottiefiles/dotlottie-svelte";
  import { balance } from "../store.svelte";
  import NumberFlow from "@number-flow/svelte";
</script>

<main>
  <rabbitEmoji>
    <emoji>
      <DotLottieSvelte
        src="../../../assets/emoji/cat-laughing.json"
        loop
        autoplay
        renderConfig={{
          devicePixelRatio: 3,
          autoResize: true,
        }}
      />
    </emoji>
  </rabbitEmoji>
  <text-container>
    <p>Not supported</p>
    <p>
      for
      <shops-text>shops</shops-text>
    </p>
  </text-container>
  <balance-container>
    <h1>
      Your balance:
      <span>
        <NumberFlow continuous={true} value={balance.value}></NumberFlow>
      </span>
    </h1>
  </balance-container>
</main>

<style>
  main {
    position: absolute;
    width: 320px;
    height: 308px;
    margin: 0;
    top: 0;
    left: 0;
    background-color: #fafafa;
  }
  rabbitEmoji {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-top: 24px;
    width: 320px;
    height: 86px;
  }
  emoji {
    width: 88px;
    height: 100%;
    z-index: 3;
    transition: 0.15s ease;
  }
  emoji:active {
    transform: scale(0.75);
    transition: 0.15s ease;
  }
  text-container,
  balance-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    margin-top: 24px;
    height: 80px;
  }
  balance-container {
    margin-top: 0;
  }

  p,
  h1 {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    font-family: inherit;
    line-height: 110%;
    font-weight: 400;
    font-size: 36px;
    margin: 0;
  }
  h1 {
    font-size: 24px;
  }
  shops-text {
    color: #2c87ff;
  }
  span {
    font-size: 28px;
    font-weight: 600;
    font-variant-numeric: tabular-nums;
    color: #f28100;
    text-shadow: 0 0 20px #fe88017b;
  }
</style>
