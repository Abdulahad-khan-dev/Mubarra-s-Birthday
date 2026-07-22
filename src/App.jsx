import { Routes, Route, Navigate } from "react-router-dom";


// Pages
import Welcome from "./Pages/Welcome";
import Password from "./Pages/Password";
import Home from "./Pages/Home";
import Letter from "./Pages/Letter";
import Gallery from "./Pages/Gallery";
import Timeline from "./Pages/Timeline";
import Cake from "./Pages/Cake";
import Ending from "./Pages/Ending";
import NoPage from "./Pages/NoPage";

// Components
import MusicPlayer from "./components/MusicPlayer";
import FloatingHearts from "./components/FloatingHearts";

function App() {
  return (
    <>
      <FloatingHearts />
      <MusicPlayer />

      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/password" element={<Password />} />
        <Route path="/home" element={<Home />} />
        <Route path="/letter" element={<Letter />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="/cake" element={<Cake />} />
        <Route path="/ending" element={<Ending />} />
        <Route path="/why-bubu" element={<NoPage />} />

        
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}

export default App;