// src/pages/ExhibitPage.jsx
import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { getExhibitsByLanguage } from "../data/exhibits";
import { useLanguage } from "../App";

function ExhibitPage() {
  const { exhibitId } = useParams();
  const navigate = useNavigate();
  const { t, language } = useLanguage();

  const [selectedAge, setSelectedAge] = useState(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [showDIYPopup, setShowDIYPopup] = useState(false);

  // Get exhibits in current language
  const exhibits = getExhibitsByLanguage(language);
  const exhibit = exhibits.find((ex) => ex.id === exhibitId);

  if (!exhibit) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-2xl text-text-dark">
          {language === "en" ? "Exhibit not found" : "प्रदर्शन सापडले नाही"}
        </p>
      </div>
    );
  }

  const ageGroups = [
    { key: "5-10", label: t.exhibitPage.ageGroup1, icon: "🧒" },
    { key: "11-15", label: t.exhibitPage.ageGroup2, icon: "👦" },
    { key: "16-21", label: t.exhibitPage.ageGroup3, icon: "👨" },
  ];

  const handleAgeSelection = (ageKey) => {
    setSelectedAge(ageKey);
    setIsVideoPlaying(true);
  };

  const handleVideoEnd = () => {
    setShowDIYPopup(true);
  };

  const handleGoToDIY = () => {
    // Navigate directly to game page
    navigate("/game");
  };

  const handleStartGame = () => {
    // Navigate to game page
    navigate("/game");
  };

  const getVideoUrl = () => {
    if (!selectedAge || !exhibit.video_content) return null;
    const videos = exhibit.video_content[selectedAge];
    return videos && videos.length > 0 ? videos[0] : null;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-bg-light py-12">
      <div className="container mx-auto px-6">
        {/* Exhibit Header with Emojis */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="font-display text-4xl md:text-6xl font-bold text-primary mb-6">
            {exhibit.name}
          </h1>
          <div className="max-w-4xl mx-auto bg-white rounded-2xl p-8 shadow-xl border-4 border-dashed border-primary/30">
            <p className="text-lg md:text-xl text-text-dark leading-relaxed">
              {exhibit.description}
            </p>
          </div>
        </motion.div>

        {/* Age Selection (if no age selected) */}
        {!selectedAge && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-5xl mx-auto"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-center text-primary mb-10">
              🎯 {t.exhibitPage.selectAge}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {ageGroups.map((group) => (
                <motion.button
                  key={group.key}
                  onClick={() => handleAgeSelection(group.key)}
                  whileHover={{ scale: 1.08, y: -10 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-br from-white to-primary/5 border-4 border-primary/30 rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all hover:border-secondary"
                >
                  <div className="text-7xl mb-6">{group.icon}</div>
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-primary">
                    {group.label}
                  </h3>
                  <div className="mt-4 text-4xl">
                    {group.key === "5-10" && "🎨"}
                    {group.key === "11-15" && "🔬"}
                    {group.key === "16-21" && "🚀"}
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}

        {/* Video Player */}
        {selectedAge && isVideoPlaying && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="max-w-5xl mx-auto"
          >
            <div className="bg-white rounded-3xl shadow-2xl p-8 border-4 border-primary/20">
              <h2 className="font-display text-3xl font-bold text-primary mb-6 text-center flex items-center justify-center gap-3">
                <span>📺</span>
                <span>{t.exhibitPage.watchingVideo}</span>
              </h2>

              <video
                controls
                autoPlay
                onEnded={handleVideoEnd}
                className="w-full rounded-2xl shadow-lg"
                src={getVideoUrl()}
              >
                Your browser does not support the video tag.
              </video>

              <button
                onClick={() => {
                  setSelectedAge(null);
                  setIsVideoPlaying(false);
                }}
                className="mt-6 text-primary hover:text-secondary font-semibold flex items-center gap-2"
              >
                <span>←</span>
                <span>{t.exhibitPage.backToExhibits}</span>
              </button>
            </div>
          </motion.div>
        )}

        {/* DIY Popup with Single Game Button */}
        <AnimatePresence>
          {showDIYPopup && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
              onClick={() => setShowDIYPopup(false)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0, y: 50 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.8, opacity: 0, y: 50 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white rounded-3xl p-12 max-w-lg shadow-2xl border-4 border-secondary relative"
              >
                <div className="text-center mt-8">
                  {/* More Celebration Emojis */}

                  <div className="text-7xl mb-4 animate-bounce">🎉</div>

                  {/* Title */}
                  <h2 className="font-display text-5xl font-bold text-primary mb-3">
                    {t.exhibitPage.videoComplete}
                  </h2>

                  {/* Party Popper */}
                  <div className="flex justify-center gap-4 mb-6 text-5xl">
                    <span className="animate-pulse">👏</span>
                    <span className="animate-pulse">✨</span>
                    <span className="animate-pulse delay-200">⭐</span>
                  </div>

                  {/* Subtitle */}
                  <p className="text-2xl text-text-dark/70 mb-2 font-semibold">
                    {t.exhibitPage.curiositySatisfied}
                  </p>

                  {/* Description */}
                  <p className="text-lg text-text-dark mb-10">
                    {t.exhibitPage.readyToCreate}
                  </p>

                  {/* Single Start Game Button */}
                  <div className="flex flex-col gap-4">
                    <motion.button
                      onClick={handleStartGame}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-white border-4 border-primary text-black font-bold py-5 px-10 rounded-xl shadow-xl hover:shadow-2xl transition-all text-2xl"
                    >
                      {t.exhibitPage.startGame}
                    </motion.button>

                    {/* Close Button */}
                    <button
                      onClick={() => setShowDIYPopup(false)}
                      className="text-primary hover:text-secondary font-semibold text-lg mt-2"
                    >
                      {t.common.close}
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default ExhibitPage;
