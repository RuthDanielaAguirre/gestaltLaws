import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../src/features/gestalt/pages/Home';
import LeyDetail from '../src/features/gestalt/pages/LeyDetail';
import About from '../src/features/gestalt/pages/About';
import Navbar from './components/organisms/Navbar/Navbar';
import Footer from './components/organisms/Footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ley/:id" element={<LeyDetail />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;