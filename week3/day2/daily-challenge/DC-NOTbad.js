// Step 1: Create the sentence
let sentence = "The movie is not that bad, I like it";

// Step 2: Find the position of 'not' and 'bad'
let wordNot = sentence.indexOf("not");
let wordBad = sentence.indexOf("bad");

// Step 3: Replace if 'bad' comes after 'not'
if (wordNot !== -1 && wordBad !== -1 && wordBad > wordNot) {
  let newSentence = sentence.slice(0, wordNot) + "good" + sentence.slice(wordBad + 3);
  console.log(newSentence);
} else {
  console.log(sentence);
}
