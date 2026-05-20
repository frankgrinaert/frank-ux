/** Assemble address at runtime — not stored as plain text in bundle as a single string */
export function getEmailAddress(): string {
  const user = String.fromCharCode(107, 110, 97, 114, 102)
  const host = [110, 97, 114, 102, 46, 98, 101]
    .map((c) => String.fromCharCode(c))
    .join("")
  return `${user}@${host}`
}
