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
  timeDisplay: "2:00 PM",

  welcomeMessage:
    "With gratitude and joy, I invite you to celebrate this special milestone with me — a chapter closed, and another one just beginning.",

  thankYouMessage:
    "Thank you for being part of this special chapter of my journey. Your presence, support and encouragement have meant more than words can say.",

  venue: {
    name: "Meru,Kaaga(Mpakone)",
    address: "Click to get directions",
    mapsUrl: "https://maps.app.goo.gl/8jqyiudD5hPh7TkT9", 
    mapsEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d295.79443092956484!2d37.658031997883384!3d0.06750307082078265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x17882217d8f3ce41%3A0x4102381bbebacc7b!2sMpakone%20-%20Kaaga!5e1!3m2!1sen!2ske!4v1789402826590!5m2!1sen!2ske",
  },

  contact: {
    rsvpNote:
      "Kindly let us know if you'll be joining — it helps us prepare a celebration worthy of the occasion.",
    email: "hello@example.com",
    phone: "+254 700 000 000",
    whatsappUrl: "https://wa.me/254700000000",
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

// Programme timeline — edit this single array to change the run of show.
export const programme = [
  { time: "2:00 PM", title: "Guest Arrival", note: "Welcome drinks & seating" },
  { time: "2:30 PM", title: "Welcome & Opening", note: "Opening remarks" },
  { time: "3:00 PM", title: "Graduation Celebration", note: "The main ceremony" },
  { time: "4:00 PM", title: "Speeches", note: "Words from family & friends" },
  { time: "4:30 PM", title: "Cake Cutting", note: "A sweet milestone moment" },
  { time: "5:00 PM", title: "Photography & Social Time", note: "Portraits & mingling" },
  { time: "6:00 PM", title: "Closing", note: "Farewell & thank yous" },
];

// Event detail cards shown in the Details section.
export const details = [
  { label: "Date", value: event.dateDisplay },
  { label: "Event", value: event.occasion },
  { label: "Venue", value: event.venue.name },
  { label: "Time", value: event.timeDisplay },
];
