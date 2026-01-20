// src/pages/GamePage.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useLanguage } from "../App";

function GamePage() {
  const navigate = useNavigate();
  const { language } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 flex items-center justify-center p-6"
    >
      <div className="max-w-2xl w-full bg-white rounded-3xl shadow-2xl p-12 text-center border-4 border-dashed border-primary/30">
        {/* Game Icon */}
        <div className="text-8xl mb-8 animate-bounce">🎮</div>

        {/* Title */}
        <h1 className="font-display text-5xl font-bold text-primary mb-6">
          {language === "en" ? "Game Coming Soon!" : "गेम लवकरच येत आहे!"}
        </h1>

        {/* Description */}
        <p className="text-xl text-text-dark mb-8">
          {language === "en"
            ? "We are working on an exciting interactive game for you. Stay tuned!"
            : "आम्ही तुमच्यासाठी एक रोमांचक संवादात्मक गेम तयार करत आहोत. थांबा!"}
        </p>

        {/* Fun Emojis */}
        <div className="flex justify-center gap-6 text-6xl mb-10">
          <span className="animate-pulse">🚀</span>
          <span className="animate-pulse delay-100">⚡</span>
          <span className="animate-pulse delay-200">🌟</span>
        </div>

        {/* Back Button */}
        <motion.button
          onClick={() => navigate(-1)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-secondary text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:bg-secondary/90 transition-all text-lg"
        >
          {language === "en" ? "← Go Back" : "← परत जा"}
        </motion.button>
      </div>
    </motion.div>
  );
}

export default GamePage;
