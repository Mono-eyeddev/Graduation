import { event } from "../data/event";

export default function Footer() {
  return (
    <footer className="border-t border-gold/15 bg-charcoal py-12">
      <div className="container-narrow flex flex-col items-center gap-3 text-center">
        <p className="font-display text-lg text-ivory">{event.name}</p>
        <p className="eyebrow">
          {event.occasion} &middot; {event.year}
        </p>
      </div>
    </footer>
  );
}
