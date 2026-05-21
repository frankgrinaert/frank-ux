type YouTubeEmbedProps = {
  src: string
  title?: string
}

function toYouTubeEmbedSrc(src: string): string {
  const short = src.match(/youtu\.be\/([a-zA-Z0-9_-]+)/)
  if (short) return `https://www.youtube.com/embed/${short[1]}`

  const watch = src.match(/[?&]v=([a-zA-Z0-9_-]+)/)
  if (watch) return `https://www.youtube.com/embed/${watch[1]}`

  if (src.includes("youtube.com/embed")) return src

  return src
}

export function YouTubeEmbed({
  src,
  title = "YouTube video",
}: YouTubeEmbedProps) {
  return (
    <iframe
      src={toYouTubeEmbedSrc(src)}
      title={title}
      loading="lazy"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
      className="aspect-video w-full rounded-lg border border-border"
    />
  )
}
