// @ts-nocheck
import { websiteMessenger } from "@/utils/eventMessenger";

export default defineUnlistedScript(() => {
  // получение всех участников чата
  let sendsReady = false;
  let nurseries: string[] = [];
  let shops: string[] = [];
  const checkAlbChat = setInterval(() => {
    if (window.AlbChat) {
      clearInterval(checkAlbChat);
      setTimeout(() => {
        console.info("lobby👀:", window.AlbChat.members);
        for (const member of window.AlbChat.members) {
          console.log(member);
          if (member.role === "nursery") {
            nurseries.push(member.id);
          }
          if (member.role === "shop") {
            shops.push(member.id);
          }
        }
        if (nurseries.length === 0 && shops.length === 0) {
          console.log("похоже тут никого нет😿");
        } else {
          sendsReady = true;
        }
      }, 1000);
    }
  }, 50);

  // подмена функций для отслеживания их выполнения (я же не еблан ставить статический таймер)
  const checkAppStore = setInterval(() => {
    if (window.store.appStore) {
      clearInterval(checkAppStore);
      sendData();

      // подмена handleOurCats
      const originalHandleOurCats = window.store.appStore.handleOurCats;
      window.store.appStore.handleOurCats = function (...args) {
        console.info("ourCats👀:", args);
        if (args) {
          for (const [index, cat] of args[0].entries()) {
            if (cat.sickness !== "none") {
              sickCats.push(cat.cat_id);
            }
            // условие срабатывает только на последней итерации
            if (index === args[0].length - 1) {
              sendData();
              originalHandleOurCats.apply(this, args);
            }
          }
        }
        sendData();
        originalHandleOurCats.apply(this, args);
      };
      // подмена onReceiveMessage__cache_message
      const originalCache_message =
        window.store.appStore.onReceiveMessage__cache_message;
      window.store.appStore.onReceiveMessage__cache_message = function (
        ...args
      ) {
        if (
          args[0].messages[0].message_owner === window.localStorage.USER_UID
        ) {
          console.info("message👀:", args);
          sendData();
        }
        originalCache_message.apply(this, args);
      };
      // подмена game_over для отслеживания окончания игры
      const originalGame_over =
        window.store.appStore.onReceiveMessage__game_over;
      window.store.appStore.onReceiveMessage__game_over = function (...args) {
        if (args[0].message_owner === window.localStorage.USER_UID) {
          console.info("game_over👀:", args);
          sendData();
        }
        originalGame_over.apply(this, args);
      };
      // подмена balance
      const originalBalance = window.store.appStore.onReceiveMessage__balance;
      window.store.appStore.onReceiveMessage__balance = function (...args) {
        console.info("balance👀:", args);
        sendData();
        originalBalance.apply(this, args);
      };
    }
  }, 10);

  // data
  websiteMessenger.onMessage("requestDataInj", () => {
    sendData();
  });
  let sickCats: string[] = [];
  function sendData() {
    setTimeout(() => {
      websiteMessenger.sendMessage("updateDataInj", {
        balance: window.store.appStore.balance,
        season: window.store.appStore.currentSeason + 1,
        game: { uuid: window.localStorage.GAME_UID },
        player: {
          uuid: window.localStorage.USER_UID,
          role: window.localStorage.PLAYER_ROLE,
          token: window.localStorage.USER_TOKEN,
        },
        hungryCats: window.store.appStore.allMyHungryCats.length,
        sickCats: sickCats.length,
      });
      console.info("Actin dataSent");
    }, 100);
  }

  // действия от ext
  websiteMessenger.onMessage("feedInj", () => {
    for (const cat of window.store.appStore.allMyHungryCats) {
      window.store.appStore.feedCat(cat);
    }
    setTimeout(() => {
      sendData();
    }, 200);
    console.info("feedfeed🤡");
  });
  websiteMessenger.onMessage("healInj", () => {
    let beforeBalance = window.store.appStore.balance;
    for (const cat of sickCats) {
      window.store.appStore.sendMessage("heal_cats", {
        msg_type: "cat_treatment",
        cat_id: cat,
      });
    }
    setTimeout(() => {
      if (beforeBalance > window.store.appStore.balance) {
        sickCats = [];
      }
    }, 200);
    setTimeout(() => {
      sendData();
    }, 250);
    console.info("healheal🤡");
  });

  // сообщения
  websiteMessenger.onMessage("sendNurseriesInj", (message) => {
    if (sendsReady) {
      console.info("Сообщение питомникам: ", message.data);
      for (const member of nurseries) {
        window.AlbChat.observePlayer().socket.emit("msgPrivate", {
          body: message.data,
          toId: member,
        });
      }
      window.AlbChat.toggle(true);
      return true;
    } else {
      return false;
    }
  });
  websiteMessenger.onMessage("sendShopsInj", (message) => {
    if (sendsReady) {
      console.info("Сообщение магазинам: ", message.data);
      for (const member of shops) {
        window.AlbChat.observePlayer().socket.emit("msgPrivate", {
          body: message.data,
          toId: member,
        });
      }
      window.AlbChat.toggle(true);
      return true;
    } else {
      return false;
    }
  });
});
