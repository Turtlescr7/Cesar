const guests = {
  ANTONY: {
    title: "General",
    region: "Rome",
    dietaryPreference: "Vegetarian",
    pastGifts: ["Golden Laurel", "Chariot"],
  },
  CICERO: {
    title: "Orator",
    region: "Arpinum",
    dietaryPreference: "Omnivore",
    pastGifts: ["Scroll of Proverbs", "Quill"],
  },
  BRUTUS: {
    title: "Senator",
    region: "Rome",
    dietaryPreference: "Vegan",
    pastGifts: ["Silver Dagger", "Marble Bust"],
  },
};

guests.CICERO.pastGifts.push("Golden Lyre");

const antonyRegion = guests.ANTONY.region;

delete guests.CICERO;

const generalProfile = guests.ANTONY;
generalProfile.region = "Egypt";

console.log(guests);
console.log(antonyRegion);
console.log(generalProfile);

//Question: The region will know stay as Egypt for Antony since we changed it
