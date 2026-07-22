import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "../Styles/Home.css";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-page">
      <motion.div
        className="home-card"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h1>I Made Something Special ❤️</h1>

        <p>
          Before you continue...
          <br />
          I have something very special for you. 💖
        </p>

        <img
          src="/images/bear.png"
          alt="Cute Bear"
          className="cute-image"
        />

        <div className="button-group">
          <button
            className="yes-btn"
            onClick={() => navigate("/letter")}
          >
            YES ❤️
          </button>

          <button
            className="no-btn"
            onClick={() => navigate("/why-bubu")}
          >
            NO 💔
          </button>
        </div>
      </motion.div>
    </div>
  );
}