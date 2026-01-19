import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles, Users, Trophy, ExternalLink } from 'lucide-react';
import { GameCard } from "../../components/GameCard";
import { NewsCard } from "../../components/NewsCard";
import { games } from '../data/games';
import { newsItems } from '../data/news';

export function Home() {
  const latestGames = games.slice(0, 2);
  const latestNews = newsItems.slice(0, 3);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Banner */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-950/50 via-black to-black" />
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1920&h=1080&fit=crop')] bg-cover bg-center opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-blue-600/10 animate-pulse" style={{ animationDuration: '4s' }} />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-sm font-semibold">
              <Sparkles className="w-4 h-4" />
              <span>Estúdio Independente de Jogos</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Criando Experiências
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                Inesquecíveis
              </span>
            </h1>

            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Na Feu Studios, desenvolvemos jogos que desafiam, emocionam e surpreendem. 
              Explore mundos únicos e viva aventuras memoráveis.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/jogos"
                className="group flex items-center gap-2 px-8 py-4 rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold hover:from-blue-500 hover:to-blue-400 transition-all shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50"
              >
                <span>Nossos Jogos</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/sobre"
                className="px-8 py-4 rounded-lg border border-blue-500/30 text-white font-semibold hover:bg-blue-500/10 hover:border-blue-500/50 transition-all"
              >
                Conheça o Estúdio
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 rounded-full border-2 border-blue-500/30 flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-2 rounded-full bg-blue-500"
            />
          </div>
        </motion.div>
      </section>

      {/* Steam Integration Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Disponível na <span className="text-blue-400">Steam</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Explore nossos títulos publicados na plataforma líder de jogos
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {latestGames.map((game, index) => (
              <motion.div
                key={game.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <GameCard game={game} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-blue-950/20">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { icon: Trophy, value: '2', label: 'Jogos Lançados' },
              { icon: Users, value: '10K+', label: 'Jogadores' },
              { icon: Sparkles, value: '100%', label: 'Dedicação' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-8 rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20"
              >
                <stat.icon className="w-12 h-12 mx-auto mb-4 text-blue-400" />
                <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-between mb-12"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Últimas <span className="text-blue-400">Novidades</span>
              </h2>
              <p className="text-gray-400 text-lg">
                Fique por dentro de tudo que acontece na Feu Studios
              </p>
            </div>
            <Link
              to="/novidades"
              className="hidden md:flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold group"
            >
              <span>Ver todas</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestNews.map((news) => (
              <NewsCard key={news.id} news={news} />
            ))}
          </div>

          <div className="md:hidden text-center mt-8">
            <Link
              to="/novidades"
              className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold"
            >
              <span>Ver todas as novidades</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-950/30 via-purple-950/30 to-blue-950/30">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold">
              Faça Parte da Nossa Jornada
            </h2>
            <p className="text-xl text-gray-400">
              Estamos sempre em busca de talentos criativos para se juntarem ao nosso time
            </p>
            <Link
              to="/trabalhe-conosco"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold hover:from-blue-500 hover:to-blue-400 transition-all shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50"
            >
              <span>Ver Oportunidades</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
