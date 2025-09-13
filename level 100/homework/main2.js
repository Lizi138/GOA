const quotes = [
        "Believe you can and you're halfway there.",
        "Stay hungry, stay foolish.",
        "Do what you can with what you have.",
        "The best way to get started is to quit talking and begin doing.",
        "Push yourself, because no one else is going to do it for you.",
        "Great things never come from comfort zones."
    ];

    function generateQuote() {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        document.getElementById("quote").textContent = quotes[randomIndex];

      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);
        document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
    }