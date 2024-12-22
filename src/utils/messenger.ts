import { defineExtensionMessaging } from "@webext-core/messaging";

interface ProtocolMap {
  updateDataExt(data: any): void;
  requestDataExt(data: any): void;
  feedExt(data: any): void;
  healExt(data: any): void;
  sendNurseries(data: string): boolean;
  sendShops(data: string): boolean;
}
export const { sendMessage, onMessage } =
  defineExtensionMessaging<ProtocolMap>();
