import React, { useRef, useState, useEffect } from 'react';
import './App.css';
import Profile from './components/Profile';
import Contact from './components/Contact';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const audioRef = useRef(null);
  const [volume, setVolume] = useState(0.5); // เริ่มต้นที่ 50%

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const handleVolumeChange = (delta) => {
    let newVolume = Math.min(1, Math.max(0, volume + delta));
    setVolume(newVolume);
  };

  return (
    <>
      {/* เพลงที่เล่น (แทน YouTube ด้วยลิงก์ mp3 จริง) */}
      <audio
        ref={audioRef}
        src="c:\Users\PC\Downloads\YOASOBI Official Music Video.mp3"
        autoPlay
        loop
      />

      {/* ปุ่มควบคุมเสียง */}
      <div
        style={{
          position: 'fixed',
          top: 10,
          right: 10,
          background: 'white',
          padding: '1rem',
          borderRadius: '1rem',
          boxShadow: '0 0 10px rgba(0,0,0,0.2)',
          zIndex: 999,
        }}
      >
        
        <p>🔊 Volume: {(volume * 100).toFixed(0)}%</p>
        <button onClick={() => handleVolumeChange(-0.1)}>➖ ลดเสียง</button>
        <button onClick={() => handleVolumeChange(0.1)}>➕ เพิ่มเสียง</button>
      </div>

      {/* ระบบ Routing */}
      <Router>
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
