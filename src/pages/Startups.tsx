const startups = [
  {
    name: "AgroTech Solutions",
    founder: "Rahul Kumar",
    description:
      "A smart agriculture startup providing IoT-based solutions for farmers.",
    website: "#",
  },
  {
    name: "EduSpark",
    founder: "Priya Singh",
    description:
      "An ed-tech platform helping rural students prepare for competitive exams.",
    website: "#",
  },
  {
    name: "HealthBridge",
    founder: "Aman Verma",
    description:
      "A healthcare startup connecting patients with affordable diagnostics.",
    website: "#",
  },
];

const Startups = () => {
  return (
    <div className="py-20 px-6 bg-gray-50 min-h-screen">
      
      {/* Page Title */}
      <h1 className="text-4xl font-bold text-primary text-center mb-12">
        Startups from Our Startup Cell
      </h1>

      {/* Startup Cards */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {startups.map((startup, index) => (
          <div
            key={index}
            className="bg-white p-8 shadow-lg rounded-xl hover:shadow-2xl transition duration-300"
          >
            <h3 className="text-xl font-semibold mb-2">
              {startup.name}
            </h3>

            <p className="text-sm text-gray-500 mb-3">
              Founder: {startup.founder}
            </p>

            <p className="mb-4 text-gray-700">
              {startup.description}
            </p>

            <a
              href={startup.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-medium hover:underline"
            >
              Visit Website →
            </a>
          </div>
        ))}
      </div>

      {/* Bihar Startup Policy CTA Section */}
      <div className="mt-20 max-w-4xl mx-auto bg-gradient-to-r from-primary to-indigo-600 text-white p-10 rounded-2xl shadow-lg text-center">
        
        <h2 className="text-3xl font-bold mb-4">
          Have a Startup Idea?
        </h2>

        <p className="mb-6 text-lg">
          Register your startup under the Bihar Startup Policy and get
          mentorship, incubation support, and funding opportunities.
        </p>

        <a
          href="https://startup.bihar.gov.in/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:scale-105 transition"
        >
          Register / Pitch Your Idea
        </a>
      </div>

    </div>
  );
};

export default Startups;