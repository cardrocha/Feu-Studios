import { Link } from 'react-router-dom';
import { Gamepad2, Mail, Github, Twitter, Linkedin } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-blue-500/20 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Gamepad2 className="w-6 h-6 text-blue-500" />
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                Feu Studios
              </span>
            </div>
            <p className="text-sm text-gray-400">
              Criando experiências únicas e imersivas no universo dos jogos eletrônicos.
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-white font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-gray-400 hover:text-blue-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/jogos" className="text-sm text-gray-400 hover:text-blue-400 transition-colors">
                  Jogos
                </Link>
              </li>
              <li>
                <Link to="/novidades" className="text-sm text-gray-400 hover:text-blue-400 transition-colors">
                  Novidades
                </Link>
              </li>
              <li>
                <Link to="/sobre" className="text-sm text-gray-400 hover:text-blue-400 transition-colors">
                  Sobre Nós
                </Link>
              </li>
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h3 className="text-white font-semibold mb-4">Empresa</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/trabalhe-conosco" className="text-sm text-gray-400 hover:text-blue-400 transition-colors">
                  Trabalhe Conosco
                </Link>
              </li>
              <li>
                <Link to="/termos" className="text-sm text-gray-400 hover:text-blue-400 transition-colors">
                  Termos de Serviço
                </Link>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-blue-400 transition-colors">
                  Privacidade
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-blue-400 transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Redes Sociais */}
          <div>
            <h3 className="text-white font-semibold mb-4">Conecte-se</h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="p-2 rounded-lg bg-white/5 text-gray-400 hover:bg-blue-500/20 hover:text-blue-400 transition-all"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg bg-white/5 text-gray-400 hover:bg-blue-500/20 hover:text-blue-400 transition-all"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg bg-white/5 text-gray-400 hover:bg-blue-500/20 hover:text-blue-400 transition-all"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg bg-white/5 text-gray-400 hover:bg-blue-500/20 hover:text-blue-400 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-blue-500/10 text-center">
          <p className="text-sm text-gray-400">
            © {currentYear} Feu Studios. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}