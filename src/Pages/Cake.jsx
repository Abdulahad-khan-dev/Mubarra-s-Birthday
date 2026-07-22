import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect } from "react";
import "../Styles/Cake.css";

function Cake() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      className="cake-page"
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
    >
      <motion.div
        className="sparkles"
        animate={{
          opacity: [0.5, 1, 0.5],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      >
        ✨ ✨ ✨ ✨ ✨
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.7 }}
      >
        Happy Birthday My Love Mubarra ❤️🎂
      </motion.h1>

      <motion.div
        className="cake-container"
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        <div className="cake">
          <div className="candle">
            <div className="flame"></div>
          </div>

          <div className="cake-top"></div>
          <div className="cake-middle"></div>
          <div className="cake-bottom"></div>
        </div>
      </motion.div>

      <motion.div
        className="message-box"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.6,
          duration: 0.8,
        }}
      >
        <h2>Make A Wish My Princess 👑❤️</h2>

        <p>
          Today is not just your birthday, it is the day when a beautiful
          soul came into this world ✨
          <br /><br />

          You are the reason behind many of my smiles and the person who
          makes ordinary moments feel special ❤️
          <br /><br />

          I hope your life is always filled with happiness, love and
          endless beautiful memories 🥰
          <br /><br />

          Keep smiling because your smile is my favorite thing in this world 💕
        </p>
      </motion.div>

      <motion.button
        className="next-btn"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => navigate("/ending")}
      >
        One Last Surprise ❤️✨
      </motion.button>
    </motion.div>
  );
}

export default Cake;