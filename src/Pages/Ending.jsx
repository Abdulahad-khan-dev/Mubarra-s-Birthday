import { motion } from "framer-motion";
import { useEffect } from "react";
import "../Styles/ending.css";

export default function Ending() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const hearts = Array.from({ length: 30 });

  return (
    <motion.div
      className="ending-page"
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
    >
      <div className="heart-rain">
        {hearts.map((_, i) => (
          <span
            key={i}
            className="heart"
            style={{
              left: `${(i * 3.3) % 100}%`,
              animationDelay: `${i * 0.3}s`,
            }}
          >
            ❤️
          </span>
        ))}
      </div>

      <motion.h1
        className="title"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          delay: 0.2,
          duration: 0.8,
        }}
      >
        Forever & Always ❤️
      </motion.h1>

      <motion.div
        className="photo-wrap"
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          delay: 0.5,
          duration: 0.8,
        }}
      >
        <motion.img
          src="/images/bubu-dudu.png"
          alt="Bubu & Dudu"
          className="hug-photo"
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
        />
      </motion.div>

      <motion.div
        className="card"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.8,
          duration: 0.8,
        }}
      >
        <h2>To My Beautiful Mubarra 🌹</h2>

        <p>
          Happy Birthday, my beautiful Mubarra ❤️ Today is a celebration of the
          most precious person in my life. Thank you for every smile, every
          laugh, every memory and every little moment that made my world more
          beautiful. You are my peace, my happiness and my favorite place.
        </p>

        <p>
          No matter what happens, I promise to stand beside you, respect you,
          support you and love you with all my heart. I pray that every dream
          you have comes true and that your life is filled with endless joy,
          health and success. 🥹💕
        </p>

        <p>
          If I could choose again, I would still choose you every single time.
          Thank you for being my Bubu. I will always be your Dudu. 🤍🫂
        </p>

        <h3>Happy Birthday My Love 🎂❤️</h3>

        <div className="footer">
          Made with ❤️ by Dudu for Bubu
          <br />
          iloveyou Mubarra Meri Jan
        </div>
      </motion.div>
    </motion.div>
  );
}