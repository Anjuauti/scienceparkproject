// src/App.jsx
import { Routes, Route } from "react-router-dom";
import React, { useState, createContext, useContext, useEffect } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import StarCursor from "./components/StarCursor";
import Home from "./pages/Home";
import ExhibitsHub from "./pages/ExhibitsHub";
import ExhibitPage from "./pages/ExhibitPage";
import DiyLab from "./pages/DiyLab";
import GamePage from "./pages/GamePage";
import { translations } from "./data/translations";
import "./LanguageSelection.css";

// Create Language Context
export const LanguageContext = createContext();

// Custom hook to use language
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
};

function App() {
  const [language, setLanguage] = useState(null);

  const changeLanguage = (lang) => {
    setLanguage(lang);
    localStorage.setItem("scispark-language", lang);
  };

  // Language Selection Screen
  if (!language) {
    return (
      <div className="lang-container">
        <div className="lang-box">
          <h1 className="title-en">WELCOME! ✨</h1>
          <h1 className="title-mr">स्वागत आहे 🚀</h1>

          <div className="instruction-container">
            <p className="instruction-en">
              🌍 Choose a language to proceed further
            </p>
            <p className="instruction-mr">🌏 पुढे जाण्यासाठी भाषा निवडा</p>
          </div>

          <div className="button-group">
            <button
              className="lang-btn english"
              onClick={() => changeLanguage("en")}
              aria-label="Select English"
            >
              <span className="flag-code">EN</span>
              <span>ENGLISH</span>
            </button>

            <button
              className="lang-btn marathi"
              onClick={() => changeLanguage("mr")}
              aria-label="Select Marathi"
            >
              <span className="flag-code">MR</span>
              <span>मराठी</span>
            </button>
          </div>

          <div className="lang-note">
            <p className="note-en">💡 You can change the language anytime</p>
            <p className="note-mr">💡 तुम्ही कधीही भाषा बदलू शकता</p>
          </div>
        </div>
      </div>
    );
  }

  // Main App with Language Context
  return (
    <LanguageContext.Provider
      value={{
        language,
        changeLanguage,
        t: translations[language],
      }}
    >
      <DndProvider backend={HTML5Backend}>
        <div className="min-h-screen flex flex-col">
          <Navbar />

          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/exhibits" element={<ExhibitsHub />} />
              <Route path="/exhibits/:exhibitId" element={<ExhibitPage />} />
              <Route path="/diy-lab" element={<DiyLab />} />
              <Route path="/diy-lab/:diyId" element={<DiyLab />} />
              <Route path="/game" element={<GamePage />} />
            </Routes>
          </main>

          <Footer />
          <StarCursor />
        </div>
      </DndProvider>
    </LanguageContext.Provider>
  );
}

export default App;
