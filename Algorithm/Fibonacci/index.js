const sequency = [0, 1, 1]

const Fibonacci = (term) => {
  for (let index = 2; index <= term; index++) {
    sequency[index] = sequency[index - 2] + sequency[index - 1]
  }
  return sequency[term]
}