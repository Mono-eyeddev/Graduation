import { useState } from "react";
import { AnimatePresence } from "framer-motion";

import Preloader from "./components/Preloader";
import Fireworks from "./components/Fireworks";
import ScrollToTop from "./components/Scrolltotop";
import Hero from "./components/Hero";
import Welcome from "./components/Welcome";
import EventDetails from "./components/EventDetails";
import Countdown from "./components/Countdown";
import Programme from "./components/Programme";
import Journey from "./components/Journey";
import Venue from "./components/Venue";
import Message from "./components/Message";
import Gift from "./components/Gift";
import Gallery from "./components/Gallery";
import Rsvp from "./components/Rsvp";
import Footer from "./components/Footer";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [showFireworks, setShowFireworks] = useState(false);

  const handlePreloaderComplete = () => {
    setLoading(false);
    setShowFireworks(true);
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && (
          <Preloader onComplete={handlePreloaderComplete} />
        )}

        {showFireworks && (
          <Fireworks
            onComplete={() => setShowFireworks(false)}
          />
        )}
      </AnimatePresence>

      <main className="min-h-screen bg-charcoal">
        <Hero />
        <Welcome />
        <EventDetails />
        <Countdown />
        <Programme />
        <Journey />
        <Venue />
        <Message />
        <Gift />
        <Gallery />
        <Rsvp />
        <Footer />
      </main>
      <ScrollToTop />
    </>
  );
}
