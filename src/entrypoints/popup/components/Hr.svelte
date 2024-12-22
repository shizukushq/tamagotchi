<script lang="ts">
  import { localExtStorage } from "@webext-core/storage";
  import { onMessage, sendMessage } from "@/utils/messenger";
  import { DotLottieSvelte } from "@lottiefiles/dotlottie-svelte";
</script>

<main>
  <rabbitEmoji>
    <emoji>
      <DotLottieSvelte
        src="../../../assets/emoji/thinking_rabbit.json"
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
    <h1>hr</h1>
    <p>пока не сделал</p>
  </text-container>
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
  text-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    margin-top: 24px;
    height: 80px;
  }
  h1,
  p {
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
</style>
