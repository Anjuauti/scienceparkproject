// src/pages/ExhibitsHub.jsx
import React from "react";
import { motion } from "framer-motion";
import ExhibitCard from "../components/ExhibitCard";
import { getExhibitsByLanguage } from "../data/exhibits";
import { useLanguage } from "../App";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 30, opacity: 0, scale: 0.9 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 12,
    },
  },
};

function ExhibitsHub() {
  const { t, language } = useLanguage();
  const exhibits = getExhibitsByLanguage(language);

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-b from-bg-light to-white py-20"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h1 className="font-display text-5xl md:text-6xl font-extrabold text-primary mb-4">
            {t.exhibitsHub.title}
          </h1>
          <p className="text-xl text-text-dark/80">{t.exhibitsHub.subtitle}</p>
        </motion.div>

        {/* Single Exhibit - Solar System Only */}
        <motion.div variants={containerVariants} className="max-w-2xl mx-auto">
          {exhibits.map((exhibit) => (
            <motion.div key={exhibit.id} variants={itemVariants}>
              <ExhibitCard
                title={exhibit.name}
                imageUrl={exhibit.image}
                description={exhibit.description}
                link={`/exhibits/${exhibit.id}`}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}

export default ExhibitsHub;
