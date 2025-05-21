import { useState, useEffect } from "react";

const Navbar = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const HandleScroll = () => {
      console.log("ScrollY:", window.scrollY);
      if (window.scrollY > 50) {
        setActive(true);
      } else {
        setActive(false);
      }
    };

    window.addEventListener("scroll", HandleScroll);
    return () => {
      window.removeEventListener("scroll", HandleScroll);
    };
  }, []);

  return (
    <div className="navbar flex py-7 justify-between items-center">
      <div className="logo text-2xl font-bold bg-white text-black p-1 md:bg-transparent md:text-white">
        <h1>Portofolio Risma</h1>
      </div>
      <ul
        className={`menu flex items-center sm:gap-10 gap-4  md:static fixed left-1/2 -translate-x-1/2 md:-translate-x-0 md:opacity-100 bg-white/30 backdrop-blur-md p-4 rounded-br-2xl rounded-bl-2xl md:bg-transparent transition-all md:transition-none 
        ${active ? "top-0 opacity-100" : "top-10 opacity-0"}`}
      >
        <li>
          <a href="#home" className="text-base sm:text-lg font-medium">
            Home
          </a>
        </li>
        <li>
          <a href="#about" className="text-base sm:text-lg font-medium">
            About
          </a>
        </li>
        <li>
          <a href="#project" className="stext-base sm:text-lg font-medium">
            Project
          </a>
        </li>
        <li>
          <a href="#contact" className="text-base sm:text-lg font-medium">
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
