const capitalize = (string) => {
  const firstLetter = string.slice(0, 1).toUpperCase()
  string = firstLetter + string.slice(1).toLowerCase()
  return string
}

export default capitalize
