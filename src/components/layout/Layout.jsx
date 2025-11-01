import { Outlet } from 'react-router-dom';
import Navbar from '../organisms/Navbar/Navbar';
import Footer from '../organisms/Footer/Footer';

function Layout() {
  return (
    <div className="app-layout">
      <Navbar />
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;