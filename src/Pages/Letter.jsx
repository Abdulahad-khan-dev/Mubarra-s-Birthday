
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "../Styles/letter.css";

export default function Letter() {
  const navigate = useNavigate();

  return (
    <div className="letter-page">

      {/* Background Animation */}
      <div className="background-animation">
        {[...Array(20)].map((_, i) => (
          <span
            key={`heart-${i}`}
            className="heart"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${8 + Math.random() * 6}s`,
            }}
          >
            ❤️
          </span>
        ))}

        {[...Array(15)].map((_, i) => (
          <span
            key={`flower-${i}`}
            className="flower"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${10 + Math.random() * 6}s`,
            }}
          >
            🌸
          </span>
        ))}
      </div>

      <motion.div
        className="letter-card"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>
          🎂😭🫠 جانم دن مبارک ہو مبارہ میری جان ❤️
        </h1>

        <p>
          آج کا دن میرے لیے صرف ایک تاریخ نہیں، بلکہ میری پوری دنیا کی
          سب سے خوبصورت صبح ہے۔ کیونکہ آج کے دن اللہ تعالیٰ نے اس ہستی
          کو اس دنیا میں بھیجا جس نے ایک دن میری زندگی کو محبت، سکون
          اور خوشیوں سے بھر دینا تھا۔
        </p>

        <p>
          اور پھر وہ خوبصورت دن آیا... 13 مئی۔
          وہ دن جب ہم دونوں ایک ہوئے۔ وہ دن میری زندگی کا سب سے حسین دن تھا۔
          اس دن کے بعد میری ہر دعا میں تم شامل ہو گئیں،
          میری ہر خوشی کا نام تم بن گئیں،
          اور میری ہر مسکراہٹ کی وجہ بھی صرف تم ہو۔
        </p>

        <p>
          مبارہ میری جان، تم صرف میری بیوی نہیں ہو،
          تم میری دعا، میرا سکون، میری ہمت،
          میری خوشی اور میری پوری دنیا ہو۔
        </p>

        <p>
          تمہاری مسکراہٹ میری سب سے بڑی خوشی ہے،
          تمہارا ساتھ میری سب سے بڑی طاقت ہے۔
          میری دعا ہے کہ میں ہمیشہ تمہارے چہرے کی
          مسکراہٹ کی وجہ بنوں۔
        </p>

        <p>
          اللہ تعالیٰ تمہیں ہمیشہ سلامت رکھے،
          ہر خوشی تمہارے قدم چومے،
          اور ہماری محبت ہر گزرتے دن کے ساتھ
          پہلے سے بھی زیادہ مضبوط ہوتی جائے۔
        </p>

        <p>
          اگر مجھے ہزار زندگیاں بھی مل جائیں،
          تو ہر زندگی میں میں صرف تمہیں ہی مانگوں گا۔
        </p>

        <h2>
          جانم دن بہت بہت مبارک ہو مبارہ میری جان ❤️💋🫂
        </h2>

        <h3>
          میں تم سے بےحد محبت کرتا ہوں،
          آج بھی، کل بھی، اور ہمیشہ۔ 🫶🫠
        </h3>

        <button
          className="next-btn"
          onClick={() => navigate("/gallery")}
        >
          Next Surprise ❤️
        </button>
      </motion.div>

    </div>
  );
}