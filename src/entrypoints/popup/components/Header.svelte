<script lang="ts">
  // import {} from ;
</script>

<main>
  <button>
    <img
      draggable="false"
      src="../../../assets/headerSHQ.png"
      alt="tamagotchi logo))"
    />
  </button>
</main>

<style>
  main {
    z-index: 1;
  }
  img {
    width: 320px;
    height: 100px;
    -moz-user-select: none;
    -o-user-select: none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
    transition: 10s ease;
  }
  img:active {
    filter: hue-rotate(3600deg);
  }
  button,
  button:hover,
  button:active {
    border: none;
    background: none;
    padding: 0;
    box-shadow: none;
    cursor: unset;
    transform: none;
  }
</style>
