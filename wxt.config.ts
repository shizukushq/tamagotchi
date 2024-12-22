import { defineConfig } from "wxt";
// See https://wxt.dev/api/config.html
export default defineConfig({
  srcDir: "src",
  extensionApi: "chrome",
  modules: ["@wxt-dev/module-svelte"],
  manifest: {
    permissions: ["tabs", "activeTab", "storage"],
    host_permissions: ["https://*.hr.alabuga.ru/*"],
    web_accessible_resources: [
      {
        resources: ["/injectScript.js"],
        matches: ["*://cats.hr.alabuga.ru/*"],
      },
    ],
    content_security_policy: {
      extension_pages:
        "script-src 'self' 'wasm-unsafe-eval'; object-src 'self';",
    },
  },
});
