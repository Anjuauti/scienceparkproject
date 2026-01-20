// src/pages/Home.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useLanguage } from "../App";
import BackgroundImageFile from "../assets/bg.webp";

const headlineVariants = {
  hidden: { opacity: 0, y: 50, rotate: 10 },
  visible: {
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: { type: "spring", stiffness: 120 },
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0, scale: 0.8 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 150,
      damping: 10,
    },
  },
};

function Home() {
  const navigate = useNavigate();
  const { t } = useLanguage();

  const headlineWords = t.home.hero.title.split(" ");

  const handleStartJourney = () => {
    navigate("/exhibits");
  };

  return (
    <motion.div
      className="overflow-hidden bg-bg-light"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Hero Section Only */}
      <div
        className="relative overflow-hidden min-h-screen flex items-center text-white"
        style={{
          backgroundImage: `url(${BackgroundImageFile})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Dark overlay on left side */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent z-10"></div>

        {/* Hero Content */}
        <div className="relative container mx-auto px-6 z-30">
          <div className="max-w-xl text-left">
            <motion.h1
              className="font-display text-5xl md:text-7xl font-extrabold mb-4 leading-tight"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {headlineWords.map((word, index) => (
                <motion.span
                  key={index}
                  variants={headlineVariants}
                  className="inline-block mx-1 text-white"
                >
                  {word}
                  {index < headlineWords.length - 1 ? " " : ""}
                </motion.span>
              ))}
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-2xl text-white/90 mb-4 font-light"
            >
              {t.home.hero.subtitle}
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-md md:text-xl text-white/80 mb-10 font-light"
            >
              {t.home.hero.description}
            </motion.p>

            <motion.div variants={itemVariants}>
              <motion.button
                onClick={handleStartJourney}
                className="inline-block bg-secondary text-white font-bold text-xl py-4 px-8 rounded-md shadow-lg border-2 border-secondary cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t.home.hero.startButton}
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Home;
