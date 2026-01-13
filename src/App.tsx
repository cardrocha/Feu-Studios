import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Button } from "./components/Button";
import LoginComponent from './components/LoginComponent'; 

function App() {
  return (
    <>
      <Header />
      <main className="p-8">
        <Button text="Clique aqui" />
        <LoginComponent />
      </main>
      <Footer />
    </>
  );
}

export default App;
