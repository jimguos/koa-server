exports.queryToObj = function(keywords) {
  const result = keywords.replace(/&/g, '","').replace(/=/g, '":"')
  const reqDataString = '{"' + result + '"}'
  return JSON.parse(reqDataString)
}
