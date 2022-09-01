const validateString = (string) => {
  const regex = /[^a-z0-9 ]/gi
  const extraSpaces = /(^[\s\t]+|[\s\t]+([\s\t]|$))/g
  let regexString = string.replace(regex, " ")
  return regexString.replace(extraSpaces, " ").trim()
}

module.exports = validateString
