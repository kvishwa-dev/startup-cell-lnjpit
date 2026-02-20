import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md w-full">

      {/* Top Header Section */}
      <div className="w-full px-12 py-6 flex items-center justify-between">

        {/* Left Logo (Startup Cell) */}
        <img
          src="/startup-logo.svg"
          alt="Startup Cell Logo"
          className="h-20 w-auto"
        />

        {/* Center Title */}
        <div className="text-center leading-tight">
          <h1 className="text-3xl md:text-4xl font-bold text-primary">
            Startup Cell
          </h1>
          <p className="text-lg md:text-xl font-semibold text-gray-700 mt-2">
            Loknayak Jai Prakash Institute of Technology
          </p>
        </div>

        {/* Right Logo (LNJPIT Logo) */}
        <img
          src="/lnjpit-logo.png"
          alt="LNJPIT Logo"
          className="h-20 w-auto"
        />
      </div>

      {/* Navigation Links */}
      <div className="border-t border-gray-200">
        <div className="flex justify-center space-x-12 py-4 font-medium text-gray-700 text-lg">

          <NavLink
            to="/"
            className={({ isActive }) =>
              `transition pb-1 ${
                isActive
                  ? "text-primary border-b-2 border-primary"
                  : "hover:text-primary"
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `transition pb-1 ${
                isActive
                  ? "text-primary border-b-2 border-primary"
                  : "hover:text-primary"
              }`
            }
          >
            About
          </NavLink>

          <NavLink
            to="/initiatives"
            className={({ isActive }) =>
              `transition pb-1 ${
                isActive
                  ? "text-primary border-b-2 border-primary"
                  : "hover:text-primary"
              }`
            }
          >
            Initiatives
          </NavLink>

          <NavLink
            to="/startups"
            className={({ isActive }) =>
              `transition pb-1 ${
                isActive
                  ? "text-primary border-b-2 border-primary"
                  : "hover:text-primary"
              }`
            }
          >
            Startups
          </NavLink>

          <NavLink
            to="/events"
            className={({ isActive }) =>
              `transition pb-1 ${
                isActive
                  ? "text-primary border-b-2 border-primary"
                  : "hover:text-primary"
              }`
            }
          >
            Events
          </NavLink>

          <NavLink
            to="/team"
            className={({ isActive }) =>
              `transition pb-1 ${
                isActive
                  ? "text-primary border-b-2 border-primary"
                  : "hover:text-primary"
              }`
            }
          >
            Team
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `transition pb-1 ${
                isActive
                  ? "text-primary border-b-2 border-primary"
                  : "hover:text-primary"
              }`
            }
          >
            Contact
          </NavLink>

        </div>
      </div>

    </nav>
  );
};

export default Navbar;