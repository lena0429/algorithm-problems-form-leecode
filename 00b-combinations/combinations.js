const combinations = (elements) => {
  // base case
  if (elements.length === 0) return [ [] ];

  const firstEl = elements[0]
  const restEls = elements.slice(1);
  
  const combsWithoutFirst = combinations(restEls)

  const combsWithFirst = [];

  combsWithoutFirst.forEach(comb => {
    const combWithFirst = [...comb, firstEl]
    combsWithFirst.push(combWithFirst)
  })
  return [...combsWithFirst, ...combsWithoutFirst]
}

console.log(combinations([]))
console.log(combinations(["a", "b", "c", "d", "e"]))