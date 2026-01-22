

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Novidades } from './pages/Novidades';
import { Jogos } from './pages/Jogos';
import { Sobre } from './pages/Sobre';
import { TrabalheConosco } from './pages/TrabalheConosco';
import { Termos } from './pages/Termos';
import { Login } from './pages/Login';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/novidades" element={<Novidades />} />
            <Route path="/jogos" element={<Jogos />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/trabalhe-conosco" element={<TrabalheConosco />} />
            <Route path="/termos" element={<Termos />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}