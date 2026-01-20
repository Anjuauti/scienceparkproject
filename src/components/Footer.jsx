// src/components/Footer.jsx
import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../App";

function Footer() {
  const { t } = useLanguage();

  const footerVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        delay: 0.5,
      },
    },
  };

  return (
    <motion.footer
      className="bg-primary text-white py-10"
      variants={footerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container mx-auto px-6 text-center">
        <p className="font-display text-2xl font-bold mb-2">{t.footer.brand}</p>
        <p>
          &copy; 2025 {t.footer.brand}. {t.footer.rights} {t.footer.tagline}
        </p>
      </div>
    </motion.footer>
  );
}

export default Footer;
