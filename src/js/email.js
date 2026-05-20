/** Assemble mailto link at runtime to keep address out of static HTML. */
export function initEmailLinks() {
  const user = String.fromCharCode(107, 110, 97, 114, 102);
  const host = [110, 97, 114, 102, 46, 98, 101].map((c) => String.fromCharCode(c)).join("");
  const address = `${user}@${host}`;

  document.querySelectorAll("[data-email-link]").forEach((el) => {
    el.setAttribute("href", `mailto:${address}`);
    if (el.hasAttribute("data-email-show")) {
      el.textContent = address;
    }
  });
}
