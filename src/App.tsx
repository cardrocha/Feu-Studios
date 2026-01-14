import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import LoginComponent from './components/LoginComponent';
import { Button } from './components/Button';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white flex flex-col">
        <Header />
        <main className="p-8 flex-1">
        <Button text="Clique aqui" />
        <Routes>
          <Route path="/login" element={<LoginComponent />} />
        </Routes>
      </main>
        <Footer />
      </div>
    </Router>
  );
}