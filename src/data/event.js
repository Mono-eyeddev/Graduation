// ---------------------------------------------------------------------------
// Central event configuration.
// Edit the values below to update the entire site — nothing else needs to change.
// ---------------------------------------------------------------------------

export const event = {
  name: "Sajaad Iqbal",
  occasion: "Graduation Celebration",
  year: "2026",

  // ISO date/time used by the countdown. Update this when the real time is confirmed.
  dateISO: "2026-09-19T14:00:00",
  dateDisplay: "19 September 2026",
  timeDisplay: "12:00 Noon",

  welcomeMessage:
    "With gratitude and joy, I invite you to celebrate this special milestone with me — a chapter closed, and another one just beginning.",

  thankYouMessage:
    "Thank you for being part of this special chapter of my journey. Your presence, support and encouragement have meant more than words can say.",

  venue: {
    name: "Meru,Kaaga(Mpakone)",
    address: "Click to get directions",
    mapsUrl: "https://maps.app.goo.gl/13uYvmQXqq38E4jF6", 
    mapsEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d297.7425827582432!2d37.6581825!3d0.0675514!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2ske!4v1789418764285!5m2!1sen!2ske"
  },

  contact: {
    rsvpNote:
      "Kindly let us know if you'll be joining — it helps us prepare a celebration worthy of the occasion.",
    email: "Sajaadiqbalkarim7@gmail.com",
    phone: "+254722813903/0115760476",
    whatsappUrl: "https://wa.me/2547115760476",
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
    time: "1:00 – 2:00 PM",
    title: "Guest Arrival & Luncheon",
    note: "Greetings, settling in & food is served",
    details: [
      "Guests arrive",
      "Greetings & settling in",
      "Food is served",
    ],
  },
  {
    time: "2:00 – 2:20 PM",
    title: "Opening of the Ceremony",
    note: "Welcoming the celebration",
    details: [
      "Welcoming remarks by the graduand & Mum",
      "Opening prayers",
      "Programme overview",
    ],
  },
  {
    time: "2:20 – 3:00 PM",
    title: "Introduction of the Graduand",
    note: "A few words from those closest to the journey",
    details: [
      "Congratulatory speech — Family member 1",
      "Congratulatory speech — Family member 2",
      "Congratulatory speech — Friend",
      "Speech by the graduand",
    ],
  },
  {
    time: "3:00 – 4:00 PM",
    title: "Gift Presentation & Photography",
    note: "Celebrating the milestone with family & friends",
    details: [
      "Gift presentation",
      "Photo session with the graduand",
    ],
  },
  {
    time: "4:00 – 5:30 PM",
    title: "Entertainment",
    note: "Let the fun begin",
    details: [
      "Fruits & refreshments",
      "Competitive games",
      "Music & social time",
    ],
  },
  {
    time: "5:30 PM",
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
