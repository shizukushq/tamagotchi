import { defineCustomEventMessaging } from "@webext-core/messaging/page";

export interface WebsiteMessengerSchema {
  updateDataInj(data: unknown): any;
  requestDataInj(data: unknown): any;
  feedInj(data: unknown): void;
  healInj(data: unknown): void;
  sendNurseriesInj(data: string): boolean;
  sendShopsInj(data: string): boolean;
}
export const websiteMessenger =
  defineCustomEventMessaging<WebsiteMessengerSchema>({
    namespace: "<some-unique-string>",
  });
