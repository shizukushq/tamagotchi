// @ts-nocheck
import { localExtStorage } from "@webext-core/storage";
import { onMessage, sendMessage } from "@/utils/messenger";

export default defineBackground(() => {
  console.info("hello back!");
});
