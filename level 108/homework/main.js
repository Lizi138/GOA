// 1 ვერ გადმოვიტანე
fetch('https://goa-api.onrender.com/leaders/ვანო მოთიაშვილი')
    .then(res => res.json())
    .then(json => console.log(json));