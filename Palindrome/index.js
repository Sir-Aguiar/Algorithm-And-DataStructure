const IsPalindrome = (word) => {
  const formatted = String(word)
    .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")
    .replace(/\s{2,}/g, " ")
    .toLowerCase()
  const reversed = formatted.split("").reverse().join("")
  if (reversed === formatted) return true
  return false
}