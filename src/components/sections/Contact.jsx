import React, { useState } from 'react';
import { MapPin, Phone, Send, MessageCircle } from 'lucide-react';

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const name = e.target.name.value;
    const phone = e.target.phone.value;
    const message = e.target.message.value;

    const mailLink = `mailto:ankushjain279@gmail.com?subject=New Order from ${name}&body=Name: ${name}%0APhone: ${phone}%0AMessage: ${message}`;

    setTimeout(() => {
      window.location.href = mailLink;
      setLoading(false);
      setSuccess(true);

      setTimeout(() => setSuccess(false), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="section-padding bg-black relative overflow-hidden">
      <div className="container mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-6 gold-text">
            Get In Touch
          </h2>
          <p className="text-gray-400 text-lg md:text-xl font-light max-w-2xl mx-auto">
            Have a question or want to order a custom cake? We’re here to help.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">

          {/* LEFT SIDE (NOW CARD) */}
          <div className="p-10 border border-gold-500/20 rounded-[40px] bg-black/40 flex flex-col justify-between h-full">
            <div className="space-y-8">

              <h3 className="text-3xl font-black mb-16 gold-text ">Reach Out to Gupta Bakery</h3>

              {/* Location */}
              <a
                href="https://www.google.com/maps/place/Gupta+Bakery/@25.4542547,78.5388782,18z"
                target="_blank"
                className="flex items-start gap-6 group cursor-pointer"
              >
                <div className="w-14 h-14 bg-gold-600/10 rounded-2xl flex items-center justify-center group-hover:bg-gold-600">
                  <MapPin className="text-gold-500 group-hover:text-black" size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-bold gold-text">Visit Our Bakery</h4>
                  <p className="text-gray-400">
                    Nandanpura, Jhansi, Uttar Pradesh
                  </p>
                </div>
              </a>

              {/* Call */}
              <a
                href="tel:9278101964"
                className="flex items-start gap-6 group cursor-pointer"
              >
                <div className="w-14 h-14 bg-gold-600/10 rounded-2xl flex items-center justify-center group-hover:bg-gold-600">
                  <Phone className="text-gold-500 group-hover:text-black" size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-bold gold-text">Call Us</h4>
                  <p className="text-gray-400">
                    +91 9278101964 <br />
                    Available 9 AM - 10 PM
                  </p>
                </div>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/919278101964"
                target="_blank"
                className="flex items-start gap-6 group cursor-pointer"
              >
                <div className="w-14 h-14 bg-gold-600/10 rounded-2xl flex items-center justify-center group-hover:bg-gold-600">
                  <MessageCircle className="text-gold-500 group-hover:text-black" size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-bold gold-text">WhatsApp Support</h4>
                  <p className="text-gray-400">
                    Direct message for custom orders and inquiries.
                  </p>
                </div>
              </a>

            </div>
          </div>

          {/* RIGHT SIDE (FORM CARD) */}
          <div className="p-10 border border-gold-500/20 rounded-[40px] bg-black/40 flex flex-col justify-between h-full">

            <h3 className="text-3xl font-black mb-8 gold-text">Send a Message</h3>

            <form className="space-y-6" onSubmit={handleSubmit}>

              <input
                name="name"
                type="text"
                required
                placeholder="Your Name"
                className="w-full p-4 rounded-xl bg-black border border-gold-500/30 text-white"
              />

              <input
                name="phone"
                type="tel"
                required
                placeholder="Phone Number"
                className="w-full p-4 rounded-xl bg-black border border-gold-500/30 text-white"
              />

              <textarea
                name="message"
                required
                placeholder="Your Message"
                rows="4"
                className="w-full p-4 rounded-xl bg-black border border-gold-500/30 text-white"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-gold-600 text-black py-4 rounded-xl font-bold flex justify-center items-center gap-2 cursor-pointer"
              >
                {loading ? "Sending..." : "SEND MESSAGE"}
                {!loading && <Send size={18} />}
              </button>

            </form>

            {/* Success Message */}
            {success && (
              <p className="text-green-400 mt-4 text-center">
                Message sent successfully!
              </p>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;