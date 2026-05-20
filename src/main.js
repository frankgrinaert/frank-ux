import "./styles/main.css";
import { initEmailLinks } from "./js/email.js";
import { renderSiteChrome } from "./js/layout.js";

document.addEventListener("DOMContentLoaded", () => {
  renderSiteChrome();
  initEmailLinks();
});
