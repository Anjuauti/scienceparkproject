// src/components/ExhibitCard.jsx
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLanguage } from "../App";

function ExhibitCard({ title, imageUrl, description, link }) {
  const { t } = useLanguage();

  return (
    <motion.div
      whileHover={{
        scale: 1.02,
        boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)",
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      className="bg-white rounded-lg-fancy shadow-fancy-sm overflow-hidden border-2 border-dashed border-primary/50 transition-all duration-300"
    >
      {/* Image Wrapper */}
      <div className="p-3 overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-52 object-cover transition-transform duration-300 hover:scale-96 rounded-lg"
        />
      </div>

      {/* Content Area */}
      <div className="p-6 pt-3">
        <h3 className="font-display text-2xl font-bold text-primary mb-2">
          {title}
        </h3>
        <p className="text-text-dark/90 mb-6 h-24 overflow-hidden text-lg font-sans">
          {description.substring(0, 100)}...
        </p>

        {/* Large Start to Learn Button */}
        <Link
          to={link}
          className="block w-full bg-white border-4 border-primary text-black font-bold text-xl py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all text-center"
        >
          {t.exhibitPage.startToLearn}
        </Link>
      </div>
    </motion.div>
  );
}

export default ExhibitCard;
