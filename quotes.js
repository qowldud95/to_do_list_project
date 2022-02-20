const quotes = [
    {
      quote:
        "Genius is one percent inspiration, ninety-nine percent perspiration.",
      author: "Thomas Alva Edison"
    },
    {
      quote: "Never, never, never, never give up.",
      author: "Winston Churchill"
    },
    {
      quote:
        "Liberty without learning is always in peril and learning without liberty is always in vain.",
      author: "John F. Kennedy"
    },
    {
      quote: "Action is the foundational key to all success",
      author: "pablo picasso"
    },
    {
      quote:
        "It is your determination and persistence that will make you a successful person",
      author: "Kenneth J Hutchins"
    },
    {
      quote:
        "You can waste your life drawing lines, Or you can live your life crossing them",
      author: "Shonda Rhimes"
    },
    {
      quote:
        "Develop success from failures. Discouragement and failure are two of the surest stepping stones to success",
      author: "Dale Carnegie"
    },
    {
      quote:
        "Don't let the fear of losing be greater than the excitement of winning",
      author: "Robert Kiyosaki"
    },
    {
      quote:
        "Move out of your comfort zone, you can only grow if you are willing to feel awkward and uncomfortable when you try something new",
      author: "Brian Tracy"
    },
    {
      quote:
        "Working hard for someting we don't care about is clled stressed, working hard for something we love is called passion",
      author: "Simon Sinek"
    }
  ];
  
  const quote = document.querySelector("#quote span:first-child");
  const autor = document.querySelector("#quote span:last-child");
  
  const randIndex = Math.floor(Math.random() * quotes.length);
  
  const todaysQuote = quotes[randIndex];
  
  quote.innerText = todaysQuote.quote;
  autor.innerText = todaysQuote.author;
  