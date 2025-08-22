var quotes = [
  {
    quote: "Be yourself; everyone else is already taken.",
    author: "Oscar Wilde",
    likes: 17540,
    image: "images/2.jpg",
  },
  {
    quote:
      "I'm selfish, impatient and a little insecure. I make mistakes... But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
    author: "Marilyn Monroe",
    likes: 15000,
    image: "images/3.jpg",
  },
  {
    quote: "So many books, so little time.",
    author: "Frank Zappa",
    likes: 9500,
    image: "images/4.jpg",
  },
  {
    quote:
      "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    author: "Albert Einstein",
    likes: 20000,
    image: "images/5.jpg",
  },
  {
    quote: "A room without books is like a body without a soul.",
    author: "Marcus Tullius Cicero",
    likes: 10000,
    image: "images/6.jpg",
  },
  {
    quote:
      "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
    author: "Bernard M. Baruch",
    likes: 2000,
    image: "images/7.jpg",
  },
  {
    quote:
      "You've gotta dance like there's nobody watching, Love like you'll never be hurt...",
    author: "William W. Purkey",
    likes: 500,
    image: "images/8.jpg",
  },
  {
    quote:
      "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
    author: "Dr. Seuss",
    likes: 100000,
    image: "images/9.jpg",
  },
  {
    quote: "Be the change that you wish to see in the world.",
    author: "Mahatma Gandhi",
    likes: 56000,
    image: "images/10.jpg",
  },
  {
    quote:
      "In three words I can sum up everything I've learned about life: it goes on.",
    author: "Robert Frost",
    likes: 30000,
    image: "images/11.jpg",
  },
];
var glassBox = document.getElementById("glassBox");
function change() {
  var randomNum = Math.floor(Math.random() * quotes.length);
  glassBox.innerHTML = `
        <h1 class="fw-bolder p-2">Quote of the Day</h1>
        <div class="quotes-box d-flex justify-content-center align-items-center p-2">
            <p id="demo">${quotes[randomNum].quote}</p>
        </div>
        <div class="py-2 row g-2">
            <div class="inner col-md-6">
                <div class="quotes-box overflow-hidden d-flex justify-content-center align-items-center imgs d-flex align-items-center gap-3 px-2">
                    <img class="rounded-circle border border-2 border-light" width="60" height="60" 
                        src="${quotes[randomNum].image}" alt="Author Image">
                    <h2 class="name h5 m-0">Oscar Wilde</h2>
                </div>
            </div>
            <div class="inner col-md-6">
                <div class="quotes-box overflow-hidden d-flex justify-content-center align-items-center likes d-flex align-items-center justify-content-center gap-2 p-2">
                    <i class="fa-solid fa-heart text-danger"></i>
                    <span>${quotes[randomNum].likes}</span>
                </div>
            </div>
        </div>
        <div class="btns row gx-2">
            <div class="inner col-md-6">
                <button class="badge w-100 p-3 fs-6 border-0" onclick="copyQuote()">Copy Quote</button>
            </div>
            <div class="inner col-md-6 mt-2 m-md-0">
                <button class="badge w-100 p-3 fs-6 border-0" onclick="change()">Next Quote</button>
            </div>
        </div>`;
}
function copyQuote() {
  var text = document.getElementById("demo").innerText;
  navigator.clipboard.writeText(text);
  alert("Quote copied");
}
