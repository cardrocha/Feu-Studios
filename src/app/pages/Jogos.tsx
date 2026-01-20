import { motion } from 'motion/react';
import { GameCard } from '../../components/GameCard';
import { games } from '../data/games';
import { Gamepad2 } from 'lucide-react';

export function Jogos() {
  const releasedGames = games.filter(game => game.status === 'released');
  const inDevelopmentGames = games.filter(game => game.status === 'in-development');

  return (
    <div className="min-h-screen bg-black text-white pt-24 pb-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-500/10 border border-blue-500/30 mb-6">
            <Gamepad2 className="w-8 h-8 text-blue-400" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Nossos <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Jogos</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Explore nosso catálogo de experiências únicas e inesquecíveis
          </p>
        </motion.div>

        {/* Released Games */}
        {releasedGames.length > 0 && (
          <section className="mb-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h2 className="text-3xl font-bold text-white mb-2">Jogos Lançados</h2>
              <p className="text-gray-400">Disponíveis agora na Steam</p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {releasedGames.map((game, index) => (
                <motion.div
                  key={game.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <GameCard game={game} />
                </motion.div>
              ))}
            </div>
          </section>
        )}

        {/* In Development Games */}
        {inDevelopmentGames.length > 0 && (
          <section>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h2 className="text-3xl font-bold text-white mb-2">Em Desenvolvimento</h2>
              <p className="text-gray-400">Próximos lançamentos</p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {inDevelopmentGames.map((game, index) => (
                <motion.div
                  key={game.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <GameCard game={game} />
                </motion.div>
              ))}
            </div>
          </section>
        )}

        {/* Empty State */}
        {games.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <Gamepad2 className="w-16 h-16 mx-auto mb-4 text-gray-600" />
            <p className="text-gray-400 text-lg">
              Nenhum jogo disponível no momento.
            </p>
          </motion.div>
        )}

        {/* Steam Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 p-8 rounded-xl bg-gradient-to-r from-blue-950/30 via-purple-950/30 to-blue-950/30 border border-blue-500/20 text-center"
        >
          <h3 className="text-2xl font-bold mb-4">Encontre nossos jogos na Steam</h3>
          <p className="text-gray-400 mb-6">
            Todos os nossos títulos estão disponíveis na plataforma líder de jogos digitais
          </p>
          <a
            href="https://store.steampowered.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold hover:from-blue-500 hover:to-blue-400 transition-all shadow-lg shadow-blue-500/30"
          >
            <Gamepad2 className="w-5 h-5" />
            <span>Visitar Steam</span>
          </a>
        </motion.div>
      </div>
    </div>
  );
}