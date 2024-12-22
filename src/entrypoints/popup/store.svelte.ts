import { localExtStorage } from "@webext-core/storage";
import { onMessage, sendMessage } from "@/utils/messenger";

export const currentTab = $state({ url: "", value: "wrong", id: 0 });
chrome.tabs.query({ active: true, lastFocusedWindow: true }, function (tabs) {
  currentTab.url = tabs[0].url!;
  currentTab.id = tabs[0].id!;
  if (currentTab.url.includes("https://cats.hr.alabuga.ru")) {
    currentTab.value = "cats";
  } else if (currentTab.url.includes("https://hr.alabuga.ru")) {
    currentTab.value = "hr";
  } else {
    currentTab.value = "wrong";
  }
});

// Хранилище для реактивных значений
export const balance = $state({ value: 0 });
export const season = $state({ value: 0 });
export const game = $state({ uuid: "" });
export const player = $state({ uuid: "", role: "", token: "" });
export const hungryCats = $state({ value: 0 });
export const sickCats = $state({ value: 0 });
export const catState = $state({
  status: "",
  love: false,
  emoji: {
    value: "",
    default: "../../../assets/emoji/wrongEmoji.json",
    love: "../../../assets/emoji/loveCat.json",
  },
  update: (): void => {
    switch (true) {
      case hungryCats.value === 0 && sickCats.value === 0:
        catState.emoji.value = "../../../assets/emoji/happyCat.json";
        catState.status = "happy";
        break;
      case hungryCats.value > 0 && sickCats.value === 0:
        catState.emoji.value = "../../../assets/emoji/hungryCat.json";
        catState.status = "hungry";
        break;
      case hungryCats.value === 0 && sickCats.value > 0:
        catState.emoji.value = "../../../assets/emoji/sicklyCat.json";
        catState.status = "sickly";
        break;
      case hungryCats.value > 0 && sickCats.value > 0:
        catState.emoji.value = "../../../assets/emoji/screamCat.json";
        catState.status = "bad";
        break;
      default:
        catState.emoji.value = catState.emoji.default;
        catState.status = "idk";
    }
  },
});
export const msg = $state({ value: "" });
export const showSend = $state({
  value: false,
  change() {
    this.value = !this.value;
  },
});
export const resultOfSend = $state({
  value: false,
  empty: false,
  error: { value: false, description: "" },
  show: false,
  showResult: (): void => {
    resultOfSend.show = true;
    setTimeout(() => (resultOfSend.show = false), 1000);
  },
});
export const areYouSureModal = $state({
  show: false,
  action: "",
  toggle: (): void => {
    areYouSureModal.show = !areYouSureModal.show;
  },
});
export const costAction = $state({ value: 0 });
export const credits = $state({
  clicks: 0,
  needClicks: 50,
});

// получение данных
onMessage("updateDataExt", async () => {
  await updateData();
});
export async function updateData() {
  let data = await localExtStorage.getItem("data");
  balance.value = data.balance;
  season.value = data.season;
  game.uuid = data.game.uuid;
  player.uuid = data.player.uuid;
  player.role = data.player.role;
  player.token = data.player.token;
  hungryCats.value = data.hungryCats;
  sickCats.value = data.sickCats;
  console.info("data updated", data);
}
export async function requestData() {
  sendMessage("requestDataExt", "", currentTab.id);
  await updateData();
}

////////////  функции
export function feedCats() {
  sendMessage("feedExt", "", currentTab.id);
  hungryCats.value = 0;
  catState.love = true;
  setTimeout(() => (catState.love = false), 3000);
}
export function healCats(): void {
  sendMessage("healExt", "", currentTab.id);
  sickCats.value = 0;
  catState.love = true;
  setTimeout(() => (catState.love = false), 3000);
}
export async function sendNurseries() {
  if (msg.value.length === 0) {
    // empty
    resultOfSend.value = false;
    resultOfSend.empty = true;
    setTimeout(() => (resultOfSend.empty = false), 750);
    console.log("msg is empty");
    return;
  } else {
    let result = await sendMessage("sendNurseries", msg.value, currentTab.id);
    if (result) {
      // ok
      resultOfSend.value = true;
      setTimeout(() => (resultOfSend.value = false), 750);
    } else {
      resultOfSend.error.value = true;
    }
  }
  return;
}
export async function sendShops() {
  if (msg.value.length === 0) {
    //empty
    resultOfSend.value = false;
    resultOfSend.empty = true;
    setTimeout(() => (resultOfSend.empty = false), 750);
    console.log("msg is empty");
    return;
  } else {
    let result = await sendMessage("sendShops", msg.value, currentTab.id);
    if (result) {
      // ok
      resultOfSend.value = true;
      setTimeout(() => (resultOfSend.value = false), 750);
    } else {
      resultOfSend.error.value = true;
    }
  }
  return;
}
