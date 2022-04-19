const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');

// Get quotes from API
// let apiQuotes = [];

// Show new quote

// function newQuote(){
     //Pick random quote from apiQuotes array
//     const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
//     Check if author field is null if so replace with 'Unknown'
//     if (!quote.author) {
//     author.Text.textContent = 'Unknown'
// } else {
//     authorText.textContent = quote.author;
// }
// // Check quote length to determine styling
// if (quote.text.length > 120) {
//     quoteText.classList.add('long-quote'); // long-quote is the css styling 
// } else {
//     quoteText.classList.remove('long-quote');
// }
// quoteText.textContent = quote.text;
// }

// async function getQuotes() {
//     const apiUrl = 'https://type.fit/api/quotes';
//     try{
//         const response = await fetch(apiUrl);
//         apiQuotes = await response.json();
//         newQuote();
//     }   catch (error) {
//         //Catch error here
//     }
// }

// On Load
// getQuotes();


// Get quotes locally

function newQuote(){
    //Pick random quote from quotes.js local array
    const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
    //Check if author field is null if so replace with 'Unknown'
    if (!quote.author) {
        author.Text.textContent = 'Unknown'
    } else {
        authorText.textContent = quote.author;
    }
    // Check quote length to determine styling
    if (quote.text.length > 120) {
        quoteText.classList.add('long-quote'); // long-quote is the css styling 
    } else {
        quoteText.classList.remove('long-quote');
    }
    quoteText.textContent = quote.text;
}

// Tweet a quote
function tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl, '_blank');
}

// Event listeners
newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);

// trigger random quote from local storage 
newQuote();

