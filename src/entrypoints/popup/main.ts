import { mount } from "svelte";
import App from "./App.svelte";
import "./app.css";

const app = mount(App, {
  target: document.getElementById("app")!,
});

export default app;

// отключил пкм
document.addEventListener("contextmenu", function (event) {
  event.preventDefault();
});
