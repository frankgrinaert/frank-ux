type FigmaEmbedProps = {
  src: string
  title?: string
}

/** Normalize common Figma URL mistakes into a working iframe src. */
function toFigmaEmbedSrc(src: string): string {
  // embed.figma.com/proto/KEY&embed-host=share → ?embed-host=share
  if (
    src.includes("embed.figma.com") &&
    src.includes("&embed-host=") &&
    !src.includes("?")
  ) {
    return src.replace("&embed-host=", "?embed-host=")
  }

  if (src.includes("figma.com/embed")) {
    return src
  }

  if (src.includes("embed.figma.com")) {
    return src.includes("embed-host")
      ? src
      : `${src}${src.includes("?") ? "&" : "?"}embed-host=share`
  }

  if (/figma\.com\/proto\//.test(src)) {
    return `https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(src)}`
  }

  return src
}

export function FigmaEmbed({ src, title = "Figma embed" }: FigmaEmbedProps) {
  return (
    <div
      className="relative w-full overflow-hidden rounded-lg border border-border"
      // 56.25% is exactly the 16:9 aspect ratio (9 / 16 = 0.5625)
      // We add 45px to account for the white Figma footer
      style={{ paddingBottom: "calc(56.25% + 45px)" }}
    >
      <iframe
        src={toFigmaEmbedSrc(src)}
        title={title}
        loading="lazy"
        allowFullScreen
        className="absolute top-0 left-0 h-full w-full"
      />
    </div>
  )
}
