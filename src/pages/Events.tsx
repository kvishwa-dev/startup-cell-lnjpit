const Events = () => {
  return (
    <div className="py-24 px-6 bg-gray-50 min-h-screen text-center">

      {/* Upcoming Events */}
      <div className="mb-20">
        <h2 className="text-3xl font-semibold text-primary mb-10">
          Upcoming Events
        </h2>

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">

          {/* Event 1 */}
          <div className="bg-white p-10 shadow-lg rounded-2xl border-l-8 border-primary hover:shadow-2xl transition duration-300">
            <h3 className="text-2xl font-bold mb-4">
              InnovateNex 2.0
            </h3>

            <p className="text-gray-600">
              <span className="font-semibold">Date:</span> 28th February 2026
            </p>

            <p className="text-gray-600 mt-1">
              <span className="font-semibold">Venue:</span> Lab Building, LNJPIT Chapra
            </p>

            <span className="inline-block mt-4 px-4 py-1 bg-primary text-white text-sm rounded-full">
              Upcoming
            </span>

            {/* Registration Button */}
            <div className="mt-6">
              <a
                href="https://forms.gle/twhX6XJua4MH7wyK8"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-primary text-white px-6 py-2 rounded-lg font-semibold hover:bg-indigo-600 transition"
              >
                Register Now
              </a>
            </div>
          </div>

          {/* Event 2 */}
          <div className="bg-white p-10 shadow-lg rounded-2xl border-l-8 border-primary hover:shadow-2xl transition duration-300">
            <h3 className="text-2xl font-bold mb-4">
              Startup Awareness Program
            </h3>

            <p className="text-gray-600">
              <span className="font-semibold">Date:</span> To be decided
            </p>

            <p className="text-gray-600 mt-1">
              <span className="font-semibold">Venue:</span> MPH, Lab Building, LNJPIT Chapra
            </p>

            <span className="inline-block mt-4 px-4 py-1 bg-primary text-white text-sm rounded-full">
              Upcoming
            </span>

            {/* Registration Button */}
            <div className="mt-6">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-primary text-white px-6 py-2 rounded-lg font-semibold hover:bg-indigo-600 transition"
              >
                Register Now
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Past Events */}
      <div>
        <h2 className="text-3xl font-semibold text-primary mb-10">
          Past Events
        </h2>

        <div className="max-w-3xl mx-auto">
          <div className="bg-white p-10 shadow-md rounded-2xl opacity-95 hover:shadow-xl transition duration-300">
            <h3 className="text-2xl font-semibold mb-4">
              Career Outreach Startup Program
            </h3>

            <p className="text-gray-600">
              <span className="font-semibold">Date:</span> 19th February 2026
            </p>

            <p className="text-gray-600 mt-1">
              <span className="font-semibold">Venue:</span> ITI Bintolia
            </p>

            <span className="inline-block mt-4 px-4 py-1 bg-gray-400 text-white text-sm rounded-full">
              Completed
            </span>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Events;