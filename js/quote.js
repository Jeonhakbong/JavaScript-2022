const quotesList = [
  {
    quote: "Any disadvantage can be an advantage.",
    author: "Lionel Messi",
  },
  {
    quote:
      "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela",
  },
  {
    quote:
      "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",
    author: "Steve Jobs",
  },
  {
    quote:
      "I’ve failed over and over and over again in my life and that is why I succeed.",
    author: "Michael Jordan",
  },
  {
    quote:
      "실수를 부끄러워 하지 말라, 실수를 부끄러워하면 그것이 죄가 되느니라.",
    author: "공자",
  },
  {
    quote: "The greatest risk is the risk of riskless living",
    author: "Stephen Covey",
  },
  {
    quote: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney",
  },
  {
    quote:
      "Where there is no counsel, the people fall, but in the multitude of counselors there is safety.",
    author: "Proverbs 11:14",
  },
  {
    quote: "Form is Temporary, Class is Permanent.",
    author: "Bill Shankly",
  },
  {
    quote:
      "But I know, somehow, that only when it is dark enough can you see the stars.",
    author: "Martin Luther King, Jr",
  },
];
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotesList[Math.floor(Math.random() * quotesList.length)];

function getQuote() {
  quote.innerText = todaysQuote.quote;
  author.innerText = "  -" + todaysQuote.author + "-";
}

getQuote();
