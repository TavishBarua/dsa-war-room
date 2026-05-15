import { Routes, Route } from 'react-router-dom';
import Nav from './components/layout/Nav';
import DSAPage from './pages/DSAPage';
import SystemDesignPage from './pages/SystemDesignPage';
import AIPage from './pages/AIPage';

export default function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<DSAPage />} />
        <Route path="/system-design" element={<SystemDesignPage />} />
        <Route path="/ai" element={<AIPage />} />
      </Routes>
    </>
  );
}
