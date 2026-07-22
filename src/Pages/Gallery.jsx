import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect } from "react";
import "../Styles/Gallery.css";

function Gallery() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const images = [
    "/images/mubarra1.jpg",
    "/images/mubarra2.jpg",
    "/images/mubarra3.jpg",
    "/images/mubarra4.jpg",
    "/images/mubarra5.jpg",
    "/images/mubarra6.jpg",
  ];

  return (
    <motion.div
      className="gallery"
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
    >
      <h1>Our Beautiful Memories ❤️</h1>

      <div className="gallery-box">
        {images.map((image, index) => (
          <motion.img
            key={index}
            src={image}
            alt={`memory-${index + 1}`}
            initial={{ opacity: 0, scale: 0.8, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              delay: index * 0.15,
              duration: 0.6,
            }}
            whileHover={{
              scale: 1.05,
              rotate: 1,
            }}
          />
        ))}
      </div>

      <motion.button
        className="next-btn"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => navigate("/timeline")}
      >
        Our Story ❤️
      </motion.button>
    </motion.div>
  );
}

export default Gallery;