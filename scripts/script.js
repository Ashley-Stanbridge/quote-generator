var quotes = [
  {
  "quote" : "Footsteps always follow us, whenever it is snowing. They always show us where we've been, but never where we're going.",
  "author" : "Winnie the Pooh's A-Z"
  },
  {
  "quote" : "I have decided to make my life my argument.",
  "author" : "Albert Schweitzer"
  },
  {
  "quote" : "Do not go gentle into that good night. Rage, rage against the dying of the light.",
  "author" : "Dylan Thomas"
  },
  {
  "quote" : "There are two types of people in this world. Those that enter a room and say 'Here I am!' and those that enter a room and say 'There you are!'.",
  "author" : "Unknown"
  },
];

function getRandomQuote (array) {
  var index =   Math.floor(Math.random() * ((array.length - 1) - 0 + 1)) + 0;
  return array[index];
}

function returnQuoteBody(object) {
  return object.quote;
}

function returnQuoteAuthor(object) {
return object.author;
}
