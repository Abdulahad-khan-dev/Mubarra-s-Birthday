import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FaHeart } from "react-icons/fa";

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div className="welcome-page">

      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
        className="welcome-card"
      >
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
          }}
        >
          <FaHeart className="heart-icon" />
        </motion.div>

        <h1>A Special Surprise 💝</h1>

        <p>
          Someone spent time making something
          very special just for you ❤️
        </p>

        <button
          className="start-btn"
       onClick={() => {
  document.dispatchEvent(new Event("click"));
  navigate("/password");
}}
        >
          Open Surprise
        </button>
      </motion.div>

    </div>
  );
};

export default Welcome;