<script lang="ts">
  import { DotLottieSvelte } from "@lottiefiles/dotlottie-svelte";
</script>

<main>
  <wrongEmoji>
    <emoji>
      <DotLottieSvelte
        src="../../../assets/emoji/BREAD.json"
        loop
        autoplay
        renderConfig={{
          devicePixelRatio: 3,
          autoResize: true,
        }}
      />
    </emoji>
  </wrongEmoji>
  <text-container>
    <h1>Work only on</h1>
    <a href="http://hr.alabuga.ru">hr.alabuga.ru</a>
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
  wrongEmoji {
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
  a {
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
  a {
    color: #2c87ff;
    cursor: pointer;
  }
</style>
