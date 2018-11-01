let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"];

// Returns an URL-friendly version of a string.
// Example: "North Dakota" -> "north-dakota"
function urlify(string) {
  return string.toLowerCase().split(/\s+/).join('-');
}

// urls: Imperative version
function imperativeUrls(elements) {
  let urls = [];
  elements.forEach(function(element) {
    urls.push(urlify(element));
  });
  return urls;
}
console.log(imperativeUrls(states));

// urls: Functional version
function functionalUrls(elements) {
  return elements.map(element => urlify(element));
}
console.log(functionalUrls(states));

// Returns URLs
function urlComposer(elements) {
  let url = "https://example.com/"
  return elements.map(element => url + urlify(element));
}
console.log(urlComposer(states));
