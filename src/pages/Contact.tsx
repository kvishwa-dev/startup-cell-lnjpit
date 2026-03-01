import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="py-20 px-6 bg-gray-50 min-h-screen">
      
      <h1 className="text-4xl font-bold text-primary text-center mb-16">
        Contact Us
      </h1>

      {/* Map + Contact Info */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 mb-16">

        {/* Google Map */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <iframe
            title="LNJPIT Location"
            src="https://www.google.com/maps?q=LNJPIT%20Chapra&output=embed"
            width="100%"
            height="350"
            loading="lazy"
            className="rounded-2xl"
          ></iframe>
        </div>

        {/* Email + Social */}
        <div className="bg-white p-10 rounded-2xl shadow-lg flex flex-col items-center text-center justify-center">
          <h2 className="text-2xl font-semibold text-primary mb-6">
            Get in Touch
          </h2>

          <p className="text-lg text-gray-700 mb-3">
            Email: startupcell@lnjpitchapra.ac.in
          </p>

          <p className="text-lg text-gray-700 mb-3">
            Phone: +91 99558 00193
          </p>

          <p className="text-gray-600 mb-6">
            LNJPIT Campus, Chapra, Bihar
          </p>

          {/* Social Icons */}
          <div className="flex space-x-6 text-2xl mt-4">
            <a href="#" className="text-gray-600 hover:text-blue-600 transition">
              <FaFacebook />
            </a>
            <a href="#" className="text-gray-600 hover:text-pink-500 transition">
              <FaInstagram />
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-700 transition">
              <FaLinkedin />
            </a>
            <a href="#" className="text-gray-600 hover:text-sky-500 transition">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      {/* Query + Developer Section */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 items-center">

        {/* Query Form */}
        <div className="md:col-span-2 bg-white p-10 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-semibold text-primary text-center mb-8">
            Send Us a Message
          </h2>

          <form className="space-y-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
            />

            <textarea
              rows={2}
              placeholder="Your Message"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
            ></textarea>

            <button
              type="submit"
              className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:scale-105 transition"
            >
              Submit Query
            </button>
          </form>
        </div>

        {/* Developer Section (Vertically Centered) */}
        <div className="flex items-center">
          <div className="bg-gradient-to-br from-primary via-indigo-600 to-blue-700 p-10 rounded-3xl shadow-2xl text-white text-center flex flex-col items-center hover:scale-105 transition duration-500 w-full">

            <h2 className="text-xl font-semibold mb-6 tracking-wide opacity-90">
              Developed By
            </h2>

            <p className="text-2xl font-bold">
              Vishwajeet Kumar
            </p>

            <p className="mt-1 opacity-90">
              CSE 2K23
            </p>

            <p className="mt-2 text-sm opacity-80 mb-6">
              cse.kvishwa@gmail.com
            </p>

            {/* Developer Social Media */}
            <div className="flex space-x-5 text-lg">

              <a
                href="https://www.linkedin.com/in/kvishwa-dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/20 p-3 rounded-full hover:bg-white hover:text-primary transition"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://github.com/kvishwa-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/20 p-3 rounded-full hover:bg-white hover:text-black transition"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.instagram.com/vishwajeetofficiall/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/20 p-3 rounded-full hover:bg-white hover:text-pink-500 transition"
              >
                <FaInstagram />
              </a>

              <a
                href="https://x.com/wivktech"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/20 p-3 rounded-full hover:bg-white hover:text-sky-500 transition"
              >
                <FaTwitter />
              </a>

            </div>
          </div>
        </div>

      </div>

    </div>
  );
};

export default Contact;