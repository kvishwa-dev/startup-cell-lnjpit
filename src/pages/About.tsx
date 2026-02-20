const About = () => {
  return (
    <div className="py-24 px-6 bg-gradient-to-b from-gray-50 to-white min-h-screen">
      <div className="max-w-3xl mx-auto text-center">

        {/* Main Heading */}
        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-12">
          About Startup Cell
        </h1>

        {/* Intro Card */}
        <div className="bg-white p-10 rounded-2xl shadow-md mb-12 hover:shadow-xl transition duration-300">
          <p className="text-gray-700 leading-relaxed text-lg mb-6">
            The Startup Cell at Loknayak Jai Prakash Institute of Technology, Chapra 
            is a dynamic platform dedicated to nurturing innovation, entrepreneurship, 
            and leadership among students. We aim to empower young minds to transform 
            ideas into impactful ventures by providing mentorship, resources, and industry exposure.
          </p>
          
          <p className="text-gray-700 leading-relaxed text-lg">
            The Startup Cell serves as a bridge between aspiring entrepreneurs and 
            industry leaders, investors, and mentors. We believe that innovation 
            begins with a single idea — and we are here to help turn that idea into reality.
          </p>
        </div>

        {/* Mission */}
        <div className="bg-white p-10 rounded-3xl shadow-md mb-12 hover:-translate-y-1 hover:shadow-xl transition duration-300">
          <h2 className="text-2xl font-semibold text-primary mb-5">
            Our Mission
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Our mission is to create an entrepreneurial ecosystem within the campus 
            that encourages creativity, problem-solving, and risk-taking. Through 
            workshops, hackathons, expert sessions, incubation support, and networking 
            opportunities, we help students develop the skills and confidence required 
            to build successful startups.
          </p>
        </div>

        {/* Vision */}
        <div className="bg-white p-10 rounded-3xl shadow-md mb-12 hover:-translate-y-1 hover:shadow-xl transition duration-300">
          <h2 className="text-2xl font-semibold text-primary mb-5">
            Our Vision
          </h2>
          <p className="text-gray-700 leading-relaxed">
            To build a vibrant entrepreneurial ecosystem that empowers students 
            to innovate, lead, and create sustainable ventures that drive 
            economic and social impact.
          </p>
        </div>

        {/* Faculty Coordinator */}
        <div className="bg-gradient-to-r from-primary to-indigo-600 text-white p-10 rounded-3xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">
            Faculty Coordinator
          </h2>
          <p className="text-2xl font-bold tracking-wide">
            Dr. Sudhir Kumar Pandey
          </p>
        </div>

      </div>
    </div>
  );
};

export default About;
