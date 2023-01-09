const IsArmstrong = (num) => {
  const chars = String(num).split('')

  if (chars.length >= 60) return false

  let arm = 0
  chars.forEach(value => {
    arm += Number(value) ** chars.length
  })

  if (arm === num) return true
  return false

}