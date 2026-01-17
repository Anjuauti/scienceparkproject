import { Routes, Route } from 'react-router-dom'
import React from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import StarCursor from './components/StarCursor'
import Home from './pages/Home'
import ExhibitsHub from './pages/ExhibitsHub'
import ExhibitPage from './pages/ExhibitPage'
import DiyLab from './pages/DiyLab'

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="min-h-screen flex flex-col">
        <Navbar />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/exhibits" element={<ExhibitsHub />} />
            <Route path="/exhibits/:exhibitId" element={<ExhibitPage />} />
            <Route path="/diy-lab" element={<DiyLab />} />
          </Routes>
        </main>

        <Footer />
        <StarCursor />
      </div>
    </DndProvider>
  )
}

export default App
