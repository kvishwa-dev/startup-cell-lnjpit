const Home = () => {
  return (
    <div>
      
{/* Poster + Notice Section */}
<section className="py-20 px-6 bg-white">
  <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">

    {/* Poster Section (2/3 Width) */}
    <div className="md:col-span-2 bg-gray-50 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition">
      <h2 className="text-2xl font-bold text-primary mb-6 text-center">
        Latest Event Poster
      </h2>

      <img
        src="/posters/latest-event.jpeg"
        alt="Latest Event Poster"
        className="rounded-xl shadow-md w-full object-cover"
      />

      <p className="mt-4 text-gray-600 text-center">
        Stay updated with our latest workshops, hackathons and startup events.
      </p>
    </div>

    {/* Notice Section (1/3 Width) */}
    <div className="md:col-span-1 bg-gray-50 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition">
      <h2 className="text-2xl font-bold text-primary mb-6 text-center">
        Notices & Announcements
      </h2>

      <ul className="space-y-4 text-gray-700 text-left">
        <li className="border-b pb-3">
          📢 Registration open for Startup Bootcamp 2025
        </li>

        <li className="border-b pb-3">
          🚀 Hackathon scheduled on 15th March
        </li>

        <li className="border-b pb-3">
          🎯 Mentorship session with industry expert this Friday
        </li>

        <li>
          📌 Incubation applications now live
        </li>
      </ul>
    </div>

  </div>
</section>

    {/* Hero Section */}
      <section className="bg-primary text-white py-28 text-center">
        <h1 className="text-5xl font-bold mb-6">
          Startup Cell – LNJPIT Chapra
        </h1>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Empowering students to innovate, build startups and shape the future
          through mentorship, incubation and entrepreneurial programs.
        </p>
        <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:scale-105 transition">
          Join Us
        </button>
      </section>


      {/* Features Section */}
      <section className="py-20 px-6 bg-gray-50">
        <h2 className="text-3xl font-bold text-center text-primary mb-12">
          What We Offer
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white p-8 shadow-lg rounded-xl hover:shadow-2xl transition">
            <h3 className="text-xl font-semibold mb-3">Mentorship</h3>
            <p>
              Guidance from experienced faculty and industry professionals.
            </p>
          </div>

          <div className="bg-white p-8 shadow-lg rounded-xl hover:shadow-2xl transition">
            <h3 className="text-xl font-semibold mb-3">Workshops</h3>
            <p>
              Entrepreneurship programs, startup bootcamps and hackathons.
            </p>
          </div>

          <div className="bg-white p-8 shadow-lg rounded-xl hover:shadow-2xl transition">
            <h3 className="text-xl font-semibold mb-3">Incubation</h3>
            <p>
              Support to transform innovative ideas into scalable startups.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
