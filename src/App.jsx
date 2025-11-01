import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../src/features/gestalt/pages/Home';
import Laws from '../src/features/gestalt/pages/AllLaws';
import LeyDetail from '../src/features/gestalt/pages/LeyDetail';
import About from '../src/features/gestalt/pages/About';
import Navbar from './components/organisms/Navbar/Navbar';
import Footer from './components/organisms/Footer/Footer';
import Test3D from '../src/features/gestalt/pages/Test3D'; 

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ley/:id" element={<LeyDetail />} />
        <Route path="/laws" element={<Laws />} />
        <Route path="/about" element={<About />} />
        <Route path="/test-3d" element={<Test3D />} /> 
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;