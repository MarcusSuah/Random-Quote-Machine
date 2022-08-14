const QUOTEBANK = [
    {
    quote: "Our lives begin to end the day we become silent about things that matter.", 
    author: "- Martin Luthur King Jr."
    },
    {
        quote: "Strive not to be a success, but rather to be of value.",
        author: "- Albert Einstein"
    },
    {
        quote: "I came, I saw, I conquered.",
         author: "- Julius Caesar"
    },
    {
        quote: "Great minds discuss ideas; average minds discuss events; small minds discuss people.",
        author: "- Eleanor Roosevelt"
    },
    {
        quote: "Practice makes perfect.",
        author: "- Vince Lombardi"
    },
    {
        quote: "That's one small step for a man, one giant leap for mankind.",
        author: "- Neil Armstrong"
    },
    {
        quote: "Knowledge is power.",
        author: "- Sir Francis Bacon"
    },
    {
        quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        author: "- Nelson Mandela"
    },
    {
        quote: "Every great dream begins with a dreamer. Always remember, you have within you the strength, the patience, and the passion to reach for the stars to change the world.",
        author: "- Harriet Tubman"
    },
    {
        quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
        author: "- Winston Churchill"
    },
    {
        quote: "Insanity is doing the same thing over and over again and expecting different results.",
        author: "- Albert Einstein"
    },
    {
        quote: "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
        author: "- Marilyn Monroe"
    },
    {
        quote: "Every accomplishment starts with the decision to try.",
        author: "- John F. Kennedy"
    },
    {
        quote: "A man may die, nations may rise and fall, but an idea lives on.",
        author:  "- John F. Kennedy"
    },
    {
        quote:  "The journey of a thousand miles begins with one step.",
        author:  "- Lao Tzu"
    },
    {
        quote: "Life is 10% what happens to you and 90% how you react to it. ... We cannot change our past. We can not change the fact that people",
        author: "- Swindoll"
    },
    {
        quote: "You will face many defeats in life, but never let yourself be defeated",
        author: "- Napoleon Hill"
    },
    {
        quote: "You must be the change you wish to see in the world.",
        author: "- Mahatma Gandhi"
    }           
];

window.onload() = init;
function init() {
generateQuote()
}
//random quote data
function generateQuote() {
let quoteSize = QUOTEBANK.length;
let randomIndex = Math.floor(Math.random()  *  quoteSize);
let randomQuoteData = QUOTEBANK[randomIndex];

//add twitter link
let twitterLink ="https://twitter.com/intent/tweet?hashtags=quotes&amp;text=%22Life%20is%2010%25%20";

//add the quote
let quoteInApiFormat = randomQuoteData.quote.replace(/ /g, "%20");
twitterLink += quoteInApiFormat
//add the author
let authorInApiFormat = randomQuoteData.author.replace(/ /g, "%20");
twitterLink += "-" +authorInApiFormat

document.getElementById("tweet-quote").href = twitterLink;
document.getElementById("text").innerText = randomQuoteData.quote;
document.getElementById("author").innerText = randomQuoteData.author;
}

function getQuote() {
  let randomQuote = randomQuoteData();

    $('.quote-text').animate({ opacity: 0 }, 500, function () {
    $(this).animate({ opacity: 1 }, 500);
    $('#text').text(randomQuote.quote);
  });

  $('.quote-author').animate({ opacity: 0 }, 500, function () {
    $(this).animate({ opacity: 1 }, 500);
    $('#author').html(randomQuote.author);
  });

  var color = Math.floor(Math.random() * colors.length);
  $('html body').animate(
    {
      backgroundColor: colors[color],
      color: colors[color]
    },
    1000
  );
  $('.button').animate(
    {
      backgroundColor: colors[color]
    },
    1000
  );
}

$(document).ready(function () {
    randomQuoteData().then(() => {
    QUOTEBANK();
  });

  $('#new-quote').on('click', getQuote);
});
