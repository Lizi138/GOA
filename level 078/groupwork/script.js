// ტურისტების მრიცხველი
const counter = document.getElementById("visitor-counter");
let count = 0;
const target = 100000;
const speed = 5000 / target; // დაახლოებით 5 წამში სრულდება

function updateCounter() {
    if (count < target) {
    count += Math.ceil(Math.random() * 500);
    if (count > target) count = target;
    counter.textContent = count.toLocaleString();
    setTimeout(updateCounter, speed);
}
}

// ანიმაცია ფორმებზე
const formElements = document.querySelectorAll(".booking-form input, .booking-form select");
formElements.forEach(el => {
    el.addEventListener("focus", () => {
    el.style.boxShadow = "0 0 10px rgba(255, 206, 122, 0.8)";
});
    el.addEventListener("blur", () => {
    el.style.boxShadow = "none";
});
});

// დაწყება DOM ჩატვირთვისას
window.addEventListener("DOMContentLoaded", () => {
    updateCounter();
});

const translations = {
    ka: {
    title: "სასტუმრო Panora",
    subtitle: "ქალაქის მარგალიტი — გულში ქვედა ავლაბრის",
    btnContact: "დაგვიკავშირდით",
    btnRooms: "ოთახები",
    aboutTitle: "სასტუმროს შესახებ",
    aboutText: "სასტუმრო Panora გთავაზობთ სრულ კომფორტს და სიმშვიდეს. მდებარეობს გულის ავლაბარში.",
    statsTitle: "სტატისტიკა",
    visitorsText: "ამ თვეში სტუმარი",
    roomTitle: "ოთახების ფასები",
    roomList: "<li>სტანდარტული ოთახი – <strong>150 ₾</strong></li><li>ლუქს ხედი – <strong>300 ₾</strong></li>",
    bookingTitle: "დაჯავშნა",
    contactTitle: "კონტაქტი",
    addressLabel: "მისამართი"
},

    en: {
    title: "Hotel Panora",
    subtitle: "The Jewel of the City – located in the heart of Avlabari",
    btnContact: "Contact Us",
    btnRooms: "Rooms",
    aboutTitle: "About Hotel",
    aboutText: "Hotel Panora offers full comfort and tranquility. Located in the heart of Avlabari.",
    statsTitle: "Statistics",
    visitorsText: "Visitors This Month",
    roomTitle: "Room Prices",
    roomList: "<li>Standard Room – <strong>150 ₾</strong></li><li>Luxury View – <strong>300 ₾</strong></li>",
    bookingTitle: "Book Now",
    contactTitle: "Contact",
    addressLabel: "Address"
}
};

function setLanguage(lang) {
    const t = translations[lang];
    document.getElementById("title").textContent = t.title;
    document.getElementById("subtitle").textContent = t.subtitle;
    document.getElementById("btn-contact").textContent = t.btnContact;
    document.getElementById("btn-rooms").textContent = t.btnRooms;
    document.getElementById("about-title").textContent = t.aboutTitle;
    document.getElementById("about-text").textContent = t.aboutText;
    document.getElementById("stats-title").textContent = t.statsTitle;
    document.getElementById("visitors-text").textContent = t.visitorsText;
    document.getElementById("room-title").textContent = t.roomTitle;
    document.getElementById("room-list").innerHTML = t.roomList;
    document.getElementById("booking-title").textContent = t.bookingTitle;
    document.getElementById("contact-title").textContent = t.contactTitle;
    document.getElementById("address-label").textContent = t.addressLabel;
}