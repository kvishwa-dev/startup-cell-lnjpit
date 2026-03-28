import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/initiatives", label: "Initiatives" },
    { to: "/startups", label: "Startups" },
    { to: "/events", label: "Events" },
    { to: "/team", label: "Team" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <nav className="bg-white shadow-md w-full sticky top-0 z-50">

      {/* Top Header */}
      <div className="w-full px-4 md:px-12 py-4 md:py-6 flex items-center justify-between gap-2">

        {/* Left Logo */}
        <img
          src="/startup-logo.svg"
          alt="Startup Cell Logo"
          className="h-10 sm:h-12 md:h-20 w-auto"
        />

        {/* Center Title (VISIBLE ON ALL SCREENS) */}
        <div className="text-center leading-tight flex-1 px-2">
          <h1 className="text-lg sm:text-xl md:text-3xl font-bold text-primary">
            Startup Cell
          </h1>
          <p className="text-[10px] sm:text-sm md:text-lg font-semibold text-gray-700 mt-1">
            Loknayak Jai Prakash Institute of Technology
          </p>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-3">
          {/* Right Logo */}
          <img
            src="/lnjpit-logo.png"
            alt="LNJPIT Logo"
            className="h-10 sm:h-12 md:h-20 w-auto"
          />

          {/* Hamburger */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:block border-t border-gray-200">
        <div className="flex justify-center space-x-12 py-4 font-medium text-gray-700 text-lg">
          {navLinks.map((link) => (
            <NavItem key={link.to} {...link} />
          ))}
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="flex flex-col items-center space-y-4 py-4 font-medium text-gray-700 text-lg">
            {navLinks.map((link) => (
              <NavItem
                key={link.to}
                {...link}
                onClick={() => setIsOpen(false)}
              />
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

const NavItem = ({ to, label, onClick }) => (
  <NavLink
    to={to}
    onClick={onClick}
    className={({ isActive }) =>
      `transition pb-1 ${
        isActive
          ? "text-primary border-b-2 border-primary"
          : "hover:text-primary"
      }`
    }
  >
    {label}
  </NavLink>
);

export default Navbar;