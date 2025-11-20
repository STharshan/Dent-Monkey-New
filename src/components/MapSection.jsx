export default function MapSection() {
  return (
    <section id="map" className="w-full py-20 sm:py-32 bg-[#FFFFFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Map */}
        <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg border border-[#E0E0E0]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0972832779464!2d-122.4194!3d37.7749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7fb69c3e5d35%3A0x323f0efc17d1b6a!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1234567890"
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
