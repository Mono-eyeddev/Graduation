import Hero from "./components/Hero";
import Welcome from "./components/Welcome";
import EventDetails from "./components/EventDetails";
import Countdown from "./components/Countdown";
import Programme from "./components/Programme";
import Venue from "./components/Venue";
import Message from "./components/Message";
import Gallery from "./components/Gallery";
import Rsvp from "./components/Rsvp";
import Footer from "./components/Footer";

export default function App() {
  return (
    <main className="min-h-screen bg-charcoal">
      <Hero />
      <Welcome />
      <EventDetails />
      <Countdown />
      <Programme />
      <Venue />
      <Message />
      <Gallery />
      <Rsvp />
      <Footer />
    </main>
  );
}
