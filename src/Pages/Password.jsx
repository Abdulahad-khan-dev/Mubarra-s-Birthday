import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "../Styles/password.css";

const PASSWORD = "5555";

export default function Password() {
  const navigate = useNavigate();

  const [value, setValue] = useState("");
  const [error, setError] = useState(false);

  const pressNumber = (num) => {
    if (value.length >= 4) return;

    const newValue = value + num;
    setValue(newValue);
    setError(false);

    if (newValue.length === 4) {
      setTimeout(() => {
        if (newValue === PASSWORD) {
          navigate("/home");
        } else {
          setError(true);
          setValue("");
        }
      }, 300);
    }
  };

  const deleteNumber = () => {
    setValue(value.slice(0, -1));
  };

  return (
    <div className="password-page">
      <motion.div
        className={`password-card ${error ? "shake" : ""}`}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1>🔐 Enter Password</h1>

        <p>This surprise is protected ❤️</p>

        <div className="dots">
          {[0, 1, 2, 3].map((i) => (
            <span key={i} className={i < value.length ? "filled" : ""}></span>
          ))}
        </div>

        {error && (
          <p className="error-text">Wrong Password 💔</p>
        )}

        <div className="keypad">
          {[1,2,3,4,5,6,7,8,9].map((num)=>(
            <button key={num} onClick={()=>pressNumber(num.toString())}>
              {num}
            </button>
          ))}

          <button onClick={deleteNumber}>⌫</button>

          <button onClick={()=>pressNumber("0")}>0</button>

          <button
            onClick={()=>{
              if(value===PASSWORD){
                navigate("/home");
              }else{
                setError(true);
                setValue("");
              }
            }}
          >
            ❤️
          </button>
        </div>
      </motion.div>
    </div>
  );
}