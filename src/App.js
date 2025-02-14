import { useState } from "react";
import { motion } from "framer-motion";
import LoveLetter from "./components/LoveLetter";
import "./App.css";

export default function App() {
  const [showLetter, setShowLetter] = useState(false);

  return (
    <div className="container">
      {!showLetter ? (
        <>
          <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
            Happy Valentine's Day! 💖
          </motion.h1>

          <motion.img
            src="/teddy_bear.gif"
            alt="Teddy Bear"
            className="teddy"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          />

          <button onClick={() => setShowLetter(true)} className="btn">
            Open Love Letter 💌
          </button>
        </>
      ) : (
        <LoveLetter onClose={() => setShowLetter(false)} />
      )}
    </div>
  );
}
