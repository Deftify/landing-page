export const stringShortner = (text?: string, length: number = 10) => {
  if (text !== undefined) {
    const first: string = text.substring(0, 6)
    const end: string = text.substring(text.length, text.length - length)
    return `********${end}`
  }
  return `Input a string!!`
}
