// ---------------------------------------------------------------------------
// Central event configuration.
// Edit the values below to update the entire site — nothing else needs to change.
// ---------------------------------------------------------------------------

export const event = {
  name: "Sajaad Iqbal",
  occasion: "Graduation Celebration",
  year: "2026",

  // ISO date/time used by the countdown. Update this when the real time is confirmed.
  dateISO: "Done",
  dateDisplay: "Done",
  timeDisplay: "Done",

  welcomeMessage:
    "With gratitude and joy, I invite you to celebrate this special milestone with me — a chapter closed, and another one just beginning.",

  thankYouMessage:
    "Thank you for being part of this special chapter of my journey. Your presence, support and encouragement have meant more than words can say.",

  venue: {
    name: "Wantam",
    address: "Click to get directions",
    mapsUrl: ", 
    mapsEmbedUrl:
    "#"
  },

  contact: {
    rsvpNote:
      "Kindly let us know if you'll be joining — it helps us prepare a celebration worthy of the occasion.",
    email: "@gmail.com",
    phone: "+254",
    whatsappUrl: "+254",
  },

  heroImage: "images/graduation.jpg",

  // Gallery placeholders — replace the `src` values with real photographs later.
  gallery: [
    { src: "images/gallery-1.jpg", alt: "Graduation moment one" },
    { src: "images/gallery-2.jpg", alt: "Graduation moment two" },
    { src: "images/gallery-3.jpg", alt: "Graduation moment three" },
    { src: "images/gallery-4.jpg", alt: "Graduation moment four" },
    { src: "images/gallery-5.jpg", alt: "Graduation moment five" },
    { src: "images/gallery-6.jpg", alt: "Graduation moment six" },
  ],
};

export const programme = [
  {
    time: "xoxo",
    title: "Guest Arrival, Opening Duas & Luncheon",
    note: "Greetings, settling in, Duas & food is served",
    details: [
      "Guests arrive",
      "Greetings & settling in",
      "Opening Dua & Food is served",
    ],
  },
  {
    time: "xoxo",
    title: "Opening of the Ceremony",
    note: "Welcoming the celebration",
    details: [
      "Welcoming remarks by the Mum",
      "Opening Prayers & Short Sermon — Led by Maalim",
      "Programme overview",
    ],
  },
  {
    time: "xoxo",
    title: "Introduction ",
    note: "A few words from those closest to the journey",
    details: [
      "Guest Recognition & Introductions", 
      "Congratulatory speech ",
      "Congratulatory speech",
      "Congratulatory speech",
      "Congratulatory Speeches",
      "Speech by the graduand",
    ],
  },
  {
    time: "3:30 – 4:00 PM",
    title: "Gift Presentation & Photography",
    note: "Celebrating the milestone with family & friends",
    details: [
      "Gift presentation",
      "Photo session with the graduand",
    ],
  },
  {
    time: "Xoxo",
    title: "Entertainment",
    note: "Let the fun begin",
    details: [
      "Competitive games",
      "Music & social time",
    ],
  },
  {
    time: "Xoxo",
    title: "Closing Remarks",
    note: "Until the next chapter",
    details: [
      "Vote of thanks",
      "Closing prayers",
      "Guests depart",
    ],
  },
];

// Event detail cards shown in the Details section.
export const details = [
  { label: "Date", value: event.dateDisplay },
  { label: "Event", value: event.occasion },
  { label: "Venue", value: event.venue.name },
  { label: "Time", value: event.timeDisplay },
];
