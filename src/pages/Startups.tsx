const startups = [
  {
    name: "OG Healthy Pvt. Ltd.",
    founder: "Anshu Raj",
    description:
      "Mili Mates Multigrain Cookies - Mili Mates multigrain cookies are positioned as a healthy alternative to regular biscuits, made with a blend of wholesome grains such as oats, millets, and other nutrient-rich flours. These cookies aim to offer high dietary fiber, sustained energy, and better nutrition, catering especially to health-conscious consumers and students on-the-go.",
    website: "#",
  },
  {
    name: "T.K. Shah Makhana Pvt. Ltd.",
    founder: "Shree Kant Prasad",
    description:
      "Nutri Path Ready-to-Eat Makhana & Oats - Nutri Path is a ready-to-eat snack combining makhana (fox nuts)—a traditional Indian superfood rich in protein and micronutrients—with oats, known for fiber and heart-healthy benefits. This product targets people looking for quick, tasty, yet nutritious snack options without preservatives, ideal for busy lifestyles and health-aware eating habits.",
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
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {startups.map((startup, index) => (
          <div
            key={index}
            className="bg-white p-8 shadow-lg rounded-xl hover:shadow-2xl transition duration-300 text-center flex flex-col items-center"
          >
            <h3 className="text-xl font-semibold mb-2">
              {startup.name}
            </h3>

            <p className="text-sm text-gray-500 mb-3">
              Founder: {startup.founder}
            </p>

            <p className="mb-6 text-gray-700 leading-relaxed">
              {startup.description}
            </p>

            <a
              href={startup.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-medium hover:underline mt-auto"
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