// @ts-nocheck
import { onMessage, sendMessage } from "@/utils/messenger";
import { websiteMessenger } from "@/utils/eventMessenger";
import { localExtStorage } from "@webext-core/storage";
import { hungryCats, sickCats } from "./popup/store.svelte";

export default defineContentScript({
  matches: ["https://cats.hr.alabuga.ru/*"],
  async main() {
    await injectScript("/injectScript.js", {
      keepInDom: true,
    });
    console.log("😸tamagotchi😸");

    websiteMessenger.onMessage("updateDataInj", (message) => {
      localExtStorage.setItem("data", {
        balance: message.data.balance,
        season: message.data.season,
        game: message.data.game,
        player: message.data.player,
        hungryCats: message.data.hungryCats,
        sickCats: message.data.sickCats,
      });
      sendMessage("updateDataExt", "").catch((error) => {});
    });

    // действия от ext
    onMessage("requestDataExt", (message) => {
      console.info("Action dataRequested");
      websiteMessenger.sendMessage("requestDataInj", "");
    });
    onMessage("feedExt", (message) => {
      websiteMessenger.sendMessage("feedInj", "");
    });
    onMessage("healExt", (message) => {
      websiteMessenger.sendMessage("healInj", "");
    });
    onMessage("sendNurseries", async (message) => {
      let result = await websiteMessenger.sendMessage(
        "sendNurseriesInj",
        message.data
      );
      if (result) {
        return true;
      } else {
        return false;
      }
    });
    onMessage("sendShops", async (message) => {
      let result = await websiteMessenger.sendMessage(
        "sendShopsInj",
        message.data
      );
      if (result) {
        return true;
      } else {
        return false;
      }
    });
  },
});
