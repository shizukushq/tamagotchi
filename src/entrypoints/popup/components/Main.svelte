<script lang="ts">
  import Header from "./Header.svelte";
  import Emoji from "./Emoji.svelte";
  import ButtonsMain from "./ButtonsMain.svelte";
  import Input from "./Input.svelte";
  import ButtonsSend from "./ButtonsSend.svelte";
  import ErrorOfSend from "./ErrorOfSend.svelte";
  import AreYouSureModal from "./AreYouSureModal.svelte";
  import ShopIsNotSupported from "./ShopIsNotSupported.svelte";
  import { blur } from "svelte/transition";
  import { sineInOut } from "svelte/easing";
  import {
    requestData,
    showSend,
    areYouSureModal,
    player,
    resultOfSend,
  } from "../store.svelte";

  onMount(requestData);
</script>

<!-- модалка для ошибки -->
{#if resultOfSend.error.value}
  <ErrorOfSend />
{/if}

<!-- модальное окно -->
{#if areYouSureModal.show}
  <AreYouSureModal />
{/if}

<!-- основа -->
{#if player.role === "nursery"}
  <main
    in:blur={{
      duration: 200,
      easing: sineInOut,
      amount: 1,
    }}
    out:blur={{ duration: 200, easing: sineInOut, amount: 1 }}
  >
    {#if !showSend.value}
      <main
        transition:blur={{
          duration: 200,
          easing: sineInOut,
          amount: 1,
        }}
      >
        <Header />
        <Emoji />
        <!-- <h1>{balance.value}</h1> -->
        <ButtonsMain />
      </main>
    {/if}
    {#if showSend.value}
      <main
        transition:blur={{
          duration: 200,
          easing: sineInOut,
          amount: 1,
        }}
      >
        <Input />
        <ButtonsSend />
      </main>
    {/if}
  </main>
{/if}

<!-- для магазинов -->
{#if player.role === "shop"}
  <main
    in:blur={{
      duration: 200,
      easing: sineInOut,
      amount: 1,
    }}
    out:blur={{ duration: 200, easing: sineInOut, amount: 1 }}
  >
    <ShopIsNotSupported />
  </main>
{/if}

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
</style>
