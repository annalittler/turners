const validateString = (string) => {
  const regex = /[^a-z0-9 ]/gi;
  return string.replace(regex, "").trim();
};

module.exports = validateString;
