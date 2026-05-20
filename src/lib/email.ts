/** Assemble address at runtime — not stored as plain text in bundle as a single string */
export function getEmailAddress(): string {
  const user = String.fromCharCode(
    102,
    114,
    97,
    110,
    107,
    103,
    114,
    105,
    110,
    97,
    101,
    114,
    116
  )
  const host = [103, 109, 97, 105, 108, 46, 99, 111, 109]
    .map((c) => String.fromCharCode(c))
    .join("")
  return `${user}@${host}`
}

export async function copyEmailAddress(): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(getEmailAddress())
    return true
  } catch {
    return false
  }
}
