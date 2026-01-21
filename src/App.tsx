import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import LoginComponent from './components/LoginComponent';
import { Sobre } from './app/pages/Sobre';
import { Termos } from './app/pages/Termos';
import { Home } from './app/pages/Home';
import { Jogos } from './app/pages/Jogos';
import { Novidades } from './app/pages/Novidades';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white flex flex-col">
        <Header />
        <main className="p-8 flex-1">
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jogos" element={<Jogos />} />
          <Route path="/novidades" element={<Novidades />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/termos" element={<Termos />} />
          <Route path="/login" element={<LoginComponent />} />

        </Routes>
      </main>
        <Footer />
      </div>
    </Router>
  );
}