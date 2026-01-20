// src/pages/DiyLab.jsx
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { diyActivitiesData } from "../data/diy";
import { useLanguage } from "../App";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100 },
  },
};

function DiyLab() {
  const { diyId } = useParams();
  const navigate = useNavigate();
  const { t } = useLanguage();

  // If no diyId, show all DIY activities
  if (!diyId) {
    return (
      <motion.div
        className="min-h-screen bg-gradient-to-b from-white to-bg-light py-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="container mx-auto px-6">
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h1 className="font-display text-5xl font-bold text-primary mb-4">
              {t.diyLab.title}
            </h1>
            <p className="text-xl text-text-dark">{t.diyLab.subtitle}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.values(diyActivitiesData).map((diy) => (
              <motion.div
                key={diy.id}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                onClick={() => navigate(`/diy-lab/${diy.id}`)}
                className="bg-white rounded-2xl shadow-lg overflow-hidden border-4 border-dashed border-primary/30 cursor-pointer hover:border-secondary transition-all"
              >
                <img
                  src={diy.cover}
                  alt={diy.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-display text-2xl font-bold text-primary mb-2">
                    {diy.title}
                  </h3>
                  <p className="text-text-dark mb-2">
                    {diy.concept.substring(0, 80)}...
                  </p>
                  <p className="text-secondary font-semibold">
                    ⏱️ {diy.time_required}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    );
  }

  // Show specific DIY activity
  const diyActivity = diyActivitiesData[diyId];

  if (!diyActivity) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-2xl text-text-dark">DIY Activity not found</p>
      </div>
    );
  }

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-b from-white to-bg-light py-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="container mx-auto px-6 max-w-5xl">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="mb-6 text-primary hover:text-secondary font-semibold flex items-center gap-2"
        >
          ← {t.diyLab.backToExhibit}
        </button>

        {/* Header */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mb-12"
        >
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary mb-4">
            {diyActivity.title}
          </h1>
          <p className="text-lg text-text-dark mb-2">{diyActivity.concept}</p>
          <p className="text-secondary font-semibold text-xl">
            ⏱️ {t.diyLab.timeRequired}: {diyActivity.time_required}
          </p>
        </motion.div>

        {/* Cover Image */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="mb-12"
        >
          <img
            src={diyActivity.cover}
            alt={diyActivity.title}
            className="w-full max-h-96 object-cover rounded-2xl shadow-2xl"
          />
        </motion.div>

        {/* Materials Needed */}
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-accent/10 rounded-2xl p-8 mb-12 border-4 border-dashed border-accent/30"
        >
          <h2 className="font-display text-3xl font-bold text-primary mb-6 flex items-center gap-3">
            🧰 {t.diyLab.materials}
          </h2>
          <ul className="space-y-3">
            {diyActivity.materials.map((material, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-secondary font-bold text-xl">•</span>
                <span className="text-lg text-text-dark">{material}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Instructions */}
        <motion.div
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="font-display text-3xl font-bold text-primary mb-8 flex items-center gap-3">
            📋 {t.diyLab.instructions}
          </h2>

          <div className="space-y-6">
            {diyActivity.instructions.map((instruction) => (
              <motion.div
                key={instruction.step}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 + instruction.step * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-secondary"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-secondary text-white font-bold rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 text-xl">
                    {instruction.step}
                  </div>
                  <p className="text-lg text-text-dark pt-2">
                    {instruction.action}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Image Guide (if available) */}
        {diyActivity.images_guide && diyActivity.images_guide.length > 0 && (
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-12"
          >
            <h2 className="font-display text-3xl font-bold text-primary mb-8 flex items-center gap-3">
              📸 Visual Guide
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {diyActivity.images_guide.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Step ${index + 1}`}
                  className="w-full rounded-xl shadow-lg hover:scale-105 transition-transform"
                />
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}

export default DiyLab;
