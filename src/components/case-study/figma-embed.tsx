type FigmaEmbedProps = {
  src: string
  title?: string
}

export function FigmaEmbed({ src, title = "Figma embed" }: FigmaEmbedProps) {
  return (
    <iframe
      src={src}
      title={title}
      loading="lazy"
      allowFullScreen
      className="aspect-video w-full rounded-lg border border-border"
    />
  )
}
