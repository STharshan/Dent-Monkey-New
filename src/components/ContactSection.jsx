export default function ContactSection() {
  return (
    <section id="contact" className="w-full py-20 sm:py-32 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-[38px] font-semibold text-black mb-4">
            Get In Touch
          </h2>
          <p className="text-[18px] text-[#6F6F6F] max-w-2xl mx-auto">
            Have questions? Contact us today for a free quote or to schedule your service.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Left Info Box */}
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg border border-[#E0E0E0] space-y-8">
              
              {/* Address */}
              <div>
                <h3 className="text-[24px] font-medium text-black mb-2">Address</h3>
                <p className="text-[16px] text-[#6F6F6F]">
                  123 Auto Street, San Francisco, CA 94105
                </p>
              </div>

              {/* Phone */}
              <div>
                <h3 className="text-[24px] font-medium text-black mb-2">Phone</h3>
                <a
                  href="tel:+1-555-123-4567"
                  className="text-[18px] text-black font-semibold hover:opacity-80"
                >
                  +1 (555) 123-4567
                </a>
              </div>

              {/* Hours */}
              <div>
                <h3 className="text-[24px] font-medium text-black mb-2">Hours</h3>
                <div className="text-[16px] text-[#6F6F6F] space-y-1">
                  <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                  <p>Saturday: 9:00 AM - 4:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>

              {/* Payment */}
              <div>
                <h3 className="text-[24px] font-medium text-black mb-3">
                  Payment Methods
                </h3>

                <div className="flex flex-wrap gap-3">
                  {["Google Pay", "PayPal", "Visa"].map((method) => (
                    <span
                      key={method}
                      className="px-3 py-1 text-sm rounded-full bg-[#F5F5F5] text-black border border-[#E0E0E0]"
                    >
                      {method}
                    </span>
                  ))}
                </div>

                <p className="text-[14px] text-[#6F6F6F] mt-2">
                  Contactless payments available
                </p>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="bg-white p-8 rounded-lg border border-[#E0E0E0]">
            <form className="space-y-6">
              
              {/* Full Name */}
              <div>
                <label className="block text-[16px] font-medium text-black mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 text-[16px] border border-[#E0E0E0] rounded-lg focus:ring-2 focus:ring-black outline-none"
                  placeholder="Your name"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-[16px] font-medium text-black mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 text-[16px] border border-[#E0E0E0] rounded-lg focus:ring-2 focus:ring-black outline-none"
                  placeholder="your@email.com"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-[16px] font-medium text-black mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 text-[16px] border border-[#E0E0E0] rounded-lg focus:ring-2 focus:ring-black outline-none"
                  placeholder="(555) 123-4567"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-[16px] font-medium text-black mb-2">
                  Message *
                </label>
                <textarea
                  required
                  rows="5"
                  className="w-full px-4 py-3 text-[16px] border border-[#E0E0E0] rounded-lg focus:ring-2 focus:ring-black outline-none resize-none"
                  placeholder="Tell us about your dent removal needs..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-black text-white text-[16px] font-semibold py-4 rounded-lg hover:bg-opacity-90 transition"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
