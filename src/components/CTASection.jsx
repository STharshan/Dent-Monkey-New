export default function CTASection() {
  return (
    <section className="w-full py-20 sm:py-32 bg-gray-700 dark:bg-black transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Heading */}
          <h2 className="text-[38px] sm:text-[38px] font-semibold text-white dark:text-gray-100 mb-4">
            Ready to Restore Your Vehicle?
          </h2>

          {/* Subheading */}
          <p className="text-[18px] text-gray-200 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            Get a free quote today and see the Dent Monkey difference.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* Primary Button */}
            <a href="#contact">
              <button className="bg-black dark:bg-gray-800 text-white dark:text-gray-100 px-7 py-4 rounded-lg font-semibold text-[16px] hover:bg-gray-900 dark:hover:bg-gray-700 transition-colors">
                Get Free Quote
              </button>
            </a>

            {/* Secondary Button */}
            <a href="tel:07775397007">
              <button className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-black dark:text-gray-100 px-7 py-4 rounded-lg font-semibold text-[16px] hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                Call Now: 07775397007
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
