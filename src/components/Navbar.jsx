// src/components/Navbar.jsx
import React from "react";
import { NavLink, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLanguage } from "../App";

function Navbar() {
  const { t, language, changeLanguage } = useLanguage();

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 14,
        delay: 0.2,
      },
    },
  };

  return (
    <motion.nav
      className="bg-white shadow-fancy-sm sticky top-0 z-50 py-4"
      variants={navVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link
          to="/"
          className="font-display text-3xl font-extrabold text-primary"
        >
          {t.navbar.brand}
        </Link>

        <ul className="flex gap-8 items-center">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `font-semibold text-lg transition-colors relative group ${
                  isActive
                    ? "text-secondary"
                    : "text-text-dark hover:text-secondary"
                }`
              }
            >
              {t.navbar.home}
              <span className="absolute left-0 bottom-0 w-full h-[2px] bg-secondary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/exhibits"
              className={({ isActive }) =>
                `font-semibold text-lg transition-colors relative group ${
                  isActive
                    ? "text-secondary"
                    : "text-text-dark hover:text-secondary"
                }`
              }
            >
              {t.navbar.exhibits}
              <span className="absolute left-0 bottom-0 w-full h-[2px] bg-secondary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </NavLink>
          </li>

          <li>
            <motion.div
              whileHover={{ scale: 1.05, rotate: 5 }}
              whileTap={{ scale: 0.95, rotate: -5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <NavLink
                to="/game"
                className="border-blue-950 border-2 text-black font-bold py-2 px-6 rounded-md shadow-md text-lg"
              >
                {t.navbar.diyLab}
              </NavLink>
            </motion.div>
          </li>

          {/* Language Toggle */}
          <li>
            <motion.button
              onClick={() => changeLanguage(language === "en" ? "mr" : "en")}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="flex items-center gap-2 border-2 border-primary px-4 py-2 rounded-md font-bold text-primary hover:bg-primary hover:text-white transition-colors"
              title={
                language === "en" ? "मराठी मध्ये बदला" : "Switch to English"
              }
            >
              <span className="text-2xl">
                {language === "en" ? "🇬🇧" : "🇮🇳"}
              </span>
              <span className="text-lg">{language === "en" ? "EN" : "MR"}</span>
            </motion.button>
          </li>
        </ul>
      </div>
    </motion.nav>
  );
}

export default Navbar;
