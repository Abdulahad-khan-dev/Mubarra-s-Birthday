import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "../Styles/NoPage.css";

export default function NoPage() {
  const navigate = useNavigate();

  return (
    <div className="no-page">

      <motion.div
        className="no-card"
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
      >
        <motion.img
          src="/images/sad-teddy.png"
          alt="Sad Teddy"
          className="sad-img"
          animate={{ y: [0, -10, 0] }}
          transition={{
            repeat: Infinity,
            duration: 2,
          }}
        />

        <h1>Why Bubu? 😔</h1>

        <p>
          I spent so much time making this surprise
          just to see your beautiful smile.
        </p>

        <p className="small-text">
          Please don't leave without seeing it... 🥺❤️
        </p>

        <button
          className="continue-btn"
          onClick={() => navigate("/home")}
        >
          💖 Okay I'll Continue
        </button>
      </motion.div>

    </div>
  );
}