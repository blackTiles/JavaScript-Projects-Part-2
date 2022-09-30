let quoteEl = document.querySelector('#quote');
let authorEl = document.querySelector('#author');

async function getQuote() {
  let url = "https://api.quotable.io/random";
  let fetchAPI = await fetch(url);
  let quoteString = await fetchAPI.json();
  quoteEl.innerHTML = quoteString.content;
  authorEl.innerHTML = quoteString.author;
}

window.onload = getQuote;