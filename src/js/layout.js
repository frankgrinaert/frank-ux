const NAV_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/work/", label: "Work" },
];

const CV_URL =
  "https://www.figma.com/proto/k8lvoh7nfDJVLTlee81J3e/Frank-Grinaert?page-id=17%3A25&node-id=2102-110&node-type=frame&viewport=-2475%2C240%2C0.34&t=yvzG9LxU0OHfQEhN-8&scaling=min-zoom&content-scaling=fixed&hide-ui=1";
const LINKEDIN_URL = "https://www.linkedin.com/in/frankgrinaert/";

function navLinkClass(path) {
  const current = window.location.pathname.replace(/\/$/, "") || "/";
  const target = path.replace(/\/$/, "") || "/";
  const active =
    current === target || (target !== "/" && current.startsWith(target));
  return active
    ? "text-indigo-600 font-medium"
    : "text-zinc-600 hover:text-zinc-900 transition";
}

export function renderSiteChrome() {
  const headerMount = document.getElementById("site-header");
  const footerMount = document.getElementById("site-footer");
  if (!headerMount || !footerMount) return;

  const navLinks = NAV_ITEMS.map(
    (item) =>
      `<a href="${item.href}" class="${navLinkClass(item.href)}">${item.label}</a>`
  ).join(`<span class="text-zinc-300" aria-hidden="true">·</span>`);

  headerMount.innerHTML = `
    <header class="sticky top-0 z-50 border-b border-zinc-200/80 bg-white/90 backdrop-blur-md">
      <div class="mx-auto flex max-w-content items-center justify-between gap-6 px-6 py-4 lg:px-8">
        <a href="/" class="text-sm font-semibold tracking-tight text-zinc-900 hover:text-indigo-700 transition">
          Frank Grinaert
        </a>
        <nav class="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm" aria-label="Primary">
          ${navLinks}
          <span class="text-zinc-300" aria-hidden="true">·</span>
          <a href="${CV_URL}" class="text-zinc-600 hover:text-zinc-900 transition" target="_blank" rel="noopener noreferrer">CV</a>
        </nav>
      </div>
    </header>
  `;

  footerMount.innerHTML = `
    <footer class="border-t border-zinc-200 bg-surface-muted">
      <div class="mx-auto max-w-content px-6 py-12 lg:px-8">
        <div class="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p class="text-sm font-semibold text-zinc-900">Frank Grinaert</p>
            <p class="mt-1 max-w-sm text-sm text-zinc-600">
              Lead product designer in the design-engineering space — design systems, platform UX, and shipping work teams actually use.
            </p>
          </div>
          <div class="flex flex-col gap-3 text-sm">
            <a href="${LINKEDIN_URL}" class="font-medium text-indigo-600 hover:text-indigo-800" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a data-email-link data-email-show href="#" class="font-medium text-indigo-600 hover:text-indigo-800">Email</a>
            <a href="${CV_URL}" class="text-zinc-600 hover:text-zinc-900" target="_blank" rel="noopener noreferrer">CV (Figma)</a>
          </div>
        </div>
        <p class="mt-10 text-xs text-zinc-400">© ${new Date().getFullYear()} Frank Grinaert</p>
      </div>
    </footer>
  `;
}
