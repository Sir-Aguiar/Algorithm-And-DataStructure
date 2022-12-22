const IsPalindrome = (word) => {
  const formatted = String(word).replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "").replace(/\s{2,}/g, " ").toLowerCase()
  if (formatted.split("").reverse().join("") === formatted) return true
  return false
}