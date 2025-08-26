import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from "./components/Footer";
import Home from './Home';
import Abouts from './Abouts';
import Contact from './Contact';
import Feedback from './Feedback';
import Upload from './Upload';

function App() {
  return (
   <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Abouts />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/upload" element={<Upload />} />
      </Routes>
      <Footer />
   </>
  );
}

export default App;
