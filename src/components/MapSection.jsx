export default function MapSection() {
  return (
    <section id="map" className="w-full py-20 sm:py-32 bg-[#FFFFFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Map */}
        <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg border border-[#E0E0E0]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2402.322457504971!2d-1.2266374!3d52.9786019!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4879eb06bca570ad%3A0x5ce663b86ba72d62!2sDent%20monkey-mobile%20dent%20removal%20Nottingham-Derby-Mansfield!5e0!3m2!1sen!2slk!4v1763655671175!5m2!1sen!2slk"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-lg"
          ></iframe>
        </div>

      </div>
    </section>
  );
}
