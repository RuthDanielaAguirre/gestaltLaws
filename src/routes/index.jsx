import { Routes, Route } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Home from '../features/gestalt/pages/Home';
import Laws from '../features/gestalt/pages/AllLaws';
import LeyDetail from '../features/gestalt/pages/LeyDetail';
import About from '../features/gestalt/pages/About';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="laws" element={<Laws />} />
        <Route path="ley/:id" element={<LeyDetail />} />
        <Route path="about" element={<About />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;