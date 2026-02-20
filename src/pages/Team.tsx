const Team = () => {
  return (
    <div className="py-20 px-6 text-center bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold text-primary mb-14">
        Our Team
      </h1>

      <div className="flex flex-col md:flex-row justify-center items-center gap-10">

        {/* Dr. Bimal Kumar */}
        <div className="bg-white p-8 shadow-lg rounded-2xl w-full max-w-md border border-gray-100 hover:shadow-2xl transition duration-300">
          
          <img
            src="/images/bimal-kumar.png"
            alt="Dr. Bimal Kumar"
            className="w-32 h-32 mx-auto rounded-full object-cover border-4 border-primary mb-6"
          />

          <h3 className="text-xl font-bold text-primary">
            Dr. Bimal Kumar
          </h3>
          <p className="text-gray-600 mt-2">
            Principal
          </p>
        </div>

        {/* Dr. Sudhir Kumar Pandey */}
        <div className="bg-white p-8 shadow-lg rounded-2xl w-full max-w-md border border-gray-100 hover:shadow-2xl transition duration-300">
          
          <img
            src="/images/sudhir-pandey.png"
            alt="Dr. Sudhir Kumar Pandey"
            className="w-32 h-32 mx-auto rounded-full object-cover border-4 border-primary mb-6"
          />

          <h3 className="text-xl font-bold text-primary">
            Dr. Sudhir Kumar Pandey
          </h3>
          <p className="text-gray-600 mt-2">
            Faculty In-charge
          </p>
        </div>

        {/* Miss Surbhi Singh */}
        <div className="bg-white p-8 shadow-lg rounded-2xl w-full max-w-md border border-gray-100 hover:shadow-2xl transition duration-300">
          
          <img
            src="/images/surbhi-singh.jpeg"
            alt="Miss Surbhi Singh"
            className="w-32 h-32 mx-auto rounded-full object-cover border-4 border-primary mb-6"
          />

          <h3 className="text-xl font-bold text-primary">
            Miss Surbhi Singh
          </h3>
          <p className="text-gray-600 mt-2">
            District Startup Coordinator
          </p>
        </div>

      </div>

      <h1 className="text-4xl font-bold text-primary mt-20 mb-14">
        Student Coordinators
      </h1>


      <div className="flex flex-col md:flex-row justify-center items-center gap-10">

        {/* Alok Ranjan */}
        <div className="bg-white p-8 shadow-lg rounded-2xl w-full max-w-md border border-gray-100 hover:shadow-2xl transition duration-300">
          
          <img
            src="/images/alok.jpg"
            alt="Alok Ranjan"
            className="w-32 h-32 mx-auto rounded-full object-cover border-4 border-primary mb-6"
          />

          <h3 className="text-xl font-bold text-primary">
            Alok Ranjan
          </h3>
          <p className="text-gray-600 mt-2">
            Student Representative
          </p>
        </div>

        {/* Vishwajeet Kumar */}
        <div className="bg-white p-8 shadow-lg rounded-2xl w-full max-w-md border border-gray-100 hover:shadow-2xl transition duration-300">
          
          <img
            src="/images/vishwajeet.jpg"
            alt="Vishwajeet Kumar"
            className="w-32 h-32 mx-auto rounded-full object-cover border-4 border-primary mb-6"
          />

          <h3 className="text-xl font-bold text-primary">
            Vishwajeet Kumar
          </h3>
          <p className="text-gray-600 mt-2">
            Student Coordinator
          </p>
        </div>

      </div>
    </div>
  );
};

export default Team;
