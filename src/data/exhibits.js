// src/data/exhibits.js
// --- IMPORT LOCAL ASSETS ---
import imgSolar from '../assets/solar.jpg';
import imgSolar1 from '../assets/ss.png';
import solarKidsVideo from '../assets/videos/solar.mp4';

export const exhibitsData = {
  en: [
    {
      "id": "1",
      "name": "🌟 The Solar Journey",
      "image": imgSolar,
      "cover": imgSolar1,
      "description": "🚀 Step into The Solar Journey and explore our magnificent celestial neighborhood! This exhibit guides you through the scale, science, and history of the Sun ☀️ and its eight planetary companions. From the scorching heat of Mercury 🔥 to the frigid rings of Saturn 🪐, investigate the atmospheres, orbits, and landscapes that make each world unique. Discover fascinating facts about each planet and understand how our solar system formed billions of years ago!",
      "video_content": {
        "5-10": [solarKidsVideo],
        "11-15": ["https://www.w3schools.com/html/mov_bbb.mp4"],
        "16-21": ["https://www.w3schools.com/html/mov_bbb.mp4"]
      },
      "quiz_id": "quiz101"
    }
  ],
  
  mr: [
    {
      "id": "1",
      "name": "🌟 सौर प्रवास",
      "image": imgSolar,
      "cover": imgSolar1,
      "description": "🚀 सौर प्रवासात प्रवेश करा आणि आपल्या भव्य खगोलीय परिसराचा शोध घ्या! हे प्रदर्शन तुम्हाला सूर्याच्या ☀️ आणि त्याच्या आठ ग्रह साथीदारांच्या आकार, विज्ञान आणि इतिहासातून मार्गदर्शन करते. बुधच्या 🔥 ज्वलंत उष्णतेपासून शनिच्या 🪐 गोठलेल्या वलयांपर्यंत, प्रत्येक जगाला अद्वितीय बनवणाऱ्या वातावरणांचा, कक्षांचा आणि भूदृश्यांचा अभ्यास करा. प्रत्येक ग्रहाबद्दल आकर्षक तथ्ये शोधा आणि अब्जावधी वर्षांपूर्वी आपली सौरमाला कशी तयार झाली हे समजून घ्या!",
      "video_content": {
        "5-10": [solarKidsVideo],
        "11-15": ["https://www.w3schools.com/html/mov_bbb.mp4"],
        "16-21": ["https://www.w3schools.com/html/mov_bbb.mp4"]
      },
      "quiz_id": "quiz101"
    }
  ]
};

// Helper function to get exhibits by language
export const getExhibitsByLanguage = (lang) => {
  return exhibitsData[lang] || exhibitsData.en;
};