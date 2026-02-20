const initiatives = [
  "Startup Workshops",
  "Hackathons",
  "Mentorship Programs",
  "Funding Guidance",
  "Industry Collaborations",
  "Incubation Support"
];

const Initiatives = () => {
  return (
    <div className="py-20 px-6 text-center">
      <h1 className="text-4xl font-bold text-primary mb-12">
        Our Initiatives
      </h1>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {initiatives.map((item, index) => (
          <div
            key={index}
            className="bg-white p-8 shadow-lg rounded-xl hover:scale-105 transition"
          >
            <h3 className="text-xl font-semibold">{item}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Initiatives;
