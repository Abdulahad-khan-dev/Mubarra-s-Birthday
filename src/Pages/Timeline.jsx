
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect } from "react";
import "../Styles/timeline.css";

function Timeline() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const moments = [
    {
      title: "The Beginning Of Us ❤️",
      text: "Every beautiful story has a beginning, and ours became my favorite one ✨"
    },
    {
      title: "The First Smile 😊",
      text: "Your smile was the first thing that made my heart feel something special 💕"
    },
    {
      title: "A Special Connection 💫",
      text: "Some people enter our lives and make everything feel magical 🌸"
    },
    {
      title: "The Little Conversations 💬❤️",
      text: "Those small talks became the happiest parts of my days 🥰"
    },
    {
      title: "The Beautiful Bond 🤍",
      text: "With every moment, our connection became stronger and more precious ✨"
    },
    {
      title: "My Favorite Person 💖",
      text: "You are not just special, you are my favorite person in this world 🌎❤️"
    },
    {
      title: "The Endless Smiles 😊",
      text: "Your happiness became one of my biggest reasons to smile 💕"
    },
    {
      title: "Beautiful Memories 📸",
      text: "Every memory with you is a treasure I want to keep forever 🥹"
    },
    {
      title: "The Comfort Of You 🤍",
      text: "Your presence feels like my safest and happiest place 🫶"
    },
    {
      title: "Growing Together 🌱",
      text: "Every day with you teaches me the beauty of love and patience ❤️"
    },
    {
      title: "My Biggest Blessing ✨",
      text: "Having you in my life feels like a beautiful blessing 🤍"
    },
    {
      title: "The Cute Little Moments 🥰",
      text: "The smallest moments with you become my biggest memories 💕"
    },
    {
      title: "Forever In My Heart ❤️",
      text: "You will always have a special place in my heart 💖"
    },
    {
      title: "The Way You Make Me Feel 🌹",
      text: "You make ordinary days feel beautiful and unforgettable ✨"
    },
    {
      title: "My Happy Place 🏡❤️",
      text: "Somewhere between your smile and your words, I found my happiness 🥰"
    },
    {
      title: "A Love Worth Keeping 💍",
      text: "Some feelings are too precious to lose, and you are one of them 🤍"
    },
    {
      title: "Every Moment Matters ⏳",
      text: "Every second spent with you becomes a memory I cherish forever ❤️"
    },
    {
      title: "You Are My Sunshine ☀️",
      text: "You bring light, happiness, and warmth into my life 🌸"
    },
    {
      title: "My Beautiful Journey 🚶‍♂️❤️",
      text: "Life feels more beautiful when I imagine walking beside you forever 💕"
    },
    {
      title: "Always Choosing You 💖",
      text: "Among billions of people, my heart will always choose you 🫶"
    },
    {
      title: "A Heart Full Of Love ❤️",
      text: "My heart carries countless reasons to love and appreciate you 🥹"
    },
    {
      title: "Forever Memories 🌙",
      text: "The moments we share will always stay alive in my heart ✨"
    },
    {
      title: "My Favorite Chapter 📖",
      text: "You are the most beautiful chapter of my life story ❤️"
    },
    {
      title: "A Promise Forever 🤞❤️",
      text: "I want to keep creating beautiful memories with you forever 💕"
    },
    {
      title: "Happy Birthday My Love 🎂❤️",
      text: "Today and always, I celebrate the amazing person you are. I love you endlessly 🥰"
    }
  ];

  return (
    <motion.div
      className="timeline-page"
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
    >
      <h1>Our Beautiful Journey ❤️</h1>

      <div className="timeline-container">
        {moments.map((item, index) => (
          <motion.div
            className="timeline-card"
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: index * 0.08,
              duration: 0.5,
            }}
            whileHover={{
              scale: 1.03,
            }}
          >
            <h2>{item.title}</h2>
            <p>{item.text}</p>
          </motion.div>
        ))}
      </div>

      <motion.button
        className="next-btn"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => navigate("/cake")}
      >
        Next Surprise 🎂❤️
      </motion.button>
    </motion.div>
  );
}

export default Timeline;