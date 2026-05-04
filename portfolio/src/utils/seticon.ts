export function setFavicon(icon: string) {
  const link =
    document.querySelector<HTMLLinkElement>("link#favicon") ||
    document.createElement("link");

  link.id = "favicon";
  link.rel = "icon";
  link.type = "image/svg+xml";

  link.href = `data:image/svg+xml,
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'>
      <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='80'>
        ${icon}
      </text>
    </svg>`;

  document.head.appendChild(link);
}