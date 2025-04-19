// utils/quotes.js

export const quotes = [
  {
    text: "There is no greater agony than bearing an untold story inside you.",
    author: "Maya Angelou",
    designation: "Poet & Civil Rights Activist"
  },
  {
    text: "You can make anything by writing.",
    author: "C.S. Lewis",
    designation: "Author of The Chronicles of Narnia"
  },
  {
    text: "The scariest moment is always just before you start.",
    author: "Stephen King",
    designation: "Best-selling Horror Author"
  },
  {
    text: "Start writing, no matter what. The water does not flow until the faucet is turned on.",
    author: "Louis L’Amour",
    designation: "American Novelist"
  },
  {
    text: "Don’t tell me the moon is shining; show me the glint of light on broken glass.",
    author: "Anton Chekhov",
    designation: "Russian Playwright & Short Story Writer"
  },
  {
    text: "The role of a writer is not to say what we all can say, but what we are unable to say.",
    author: "Anaïs Nin",
    designation: "French-Cuban-American Diarist"
  },
  {
    text: "Write what should not be forgotten.",
    author: "Isabel Allende",
    designation: "Chilean Author"
  },
  {
    text: "We write to taste life twice, in the moment and in retrospect.",
    author: "Anaïs Nin",
    designation: "French-Cuban-American Diarist"
  },
  {
    text: "A word after a word after a word is power.",
    author: "Margaret Atwood",
    designation: "Author of The Handmaid’s Tale"
  },
  {
    text: "You own everything that happened to you. Tell your stories. If people wanted you to write warmly about them, they should have behaved better.",
    author: "Anne Lamott",
    designation: "Writer & Teacher"
  }
];

export type Quote = {
  text: string;
  author: string;
  designation: string;
};

export function fetchQuote(): Quote {
  return quotes[Math.floor(Math.random() * quotes.length)];
}