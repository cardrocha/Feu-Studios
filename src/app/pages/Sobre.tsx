import { motion } from 'motion/react';
import { Target, Eye, Heart, Users, Lightbulb, Rocket } from 'lucide-react';

export function Sobre() {
  const values = [
    {
      icon: Heart,
      title: 'Paixão',
      description: 'Criamos jogos com dedicação e amor pelo que fazemos, colocando nosso coração em cada detalhe.'
    },
    {
      icon: Lightbulb,
      title: 'Inovação',
      description: 'Buscamos constantemente novas formas de surpreender e encantar nossos jogadores com experiências únicas.'
    },
    {
      icon: Users,
      title: 'Comunidade',
      description: 'Valorizamos o feedback e o relacionamento com nossa comunidade de jogadores.'
    },
    {
      icon: Rocket,
      title: 'Excelência',
      description: 'Comprometidos com a qualidade em todos os aspectos do desenvolvimento de nossos jogos.'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-24 pb-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Sobre a <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Feu Studios</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Conheça nossa história, missão e os valores que nos guiam na criação de experiências memoráveis
          </p>
        </motion.div>

        {/* Seção História */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="max-w-4xl mx-auto">
            <div className="p-8 md:p-12 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20">
              <h2 className="text-3xl font-bold mb-6">Nossa História</h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  A Feu Studios nasceu do sonho de criar experiências únicas e memoráveis no universo dos jogos eletrônicos. 
                  Como um estúdio independente, temos a liberdade de explorar ideias criativas e desenvolver jogos que 
                  realmente nos apaixonam.
                </p>
                <p>
                  Nossa jornada começou com a visão de criar jogos que não apenas entretem, mas que também desafiam, 
                  emocionam e deixam uma marca duradoura em nossos jogadores. Cada projeto é uma oportunidade de 
                  empurrar os limites da criatividade e da tecnologia.
                </p>
                <p>
                  Com foco em jogos de horror, mistério e aventura, buscamos criar atmosferas imersivas que transportam 
                  os jogadores para mundos únicos, onde cada escolha importa e cada momento conta uma história.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Seção Missão e Visão */}
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-xl bg-gradient-to-br from-blue-500/10 to-transparent border border-blue-500/20"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-500/20 border border-blue-500/30 mb-6">
                <Target className="w-6 h-6 text-blue-400" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Nossa Missão</h2>
              <p className="text-gray-300 leading-relaxed">
                Criar jogos eletrônicos que proporcionem experiências memoráveis, desafiando e emocionando 
                jogadores ao redor do mundo através de narrativas envolventes, mecânicas inovadoras e 
                atmosferas imersivas.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-xl bg-gradient-to-br from-purple-500/10 to-transparent border border-purple-500/20"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-purple-500/20 border border-purple-500/30 mb-6">
                <Eye className="w-6 h-6 text-purple-400" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Nossa Visão</h2>
              <p className="text-gray-300 leading-relaxed">
                Ser reconhecida como um estúdio independente de referência na criação de jogos únicos e 
                impactantes, construindo uma comunidade apaixonada e estabelecendo um legado de qualidade 
                e inovação na indústria de games.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Seção Valores */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossos Valores</h2>
            <p className="text-gray-400">Os princípios que norteiam nosso trabalho diário</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-xl bg-gradient-to-br from-gray-900 to-black border border-blue-500/20 hover:border-blue-500/50 transition-all group"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-500/10 border border-blue-500/30 mb-4 group-hover:bg-blue-500/20 transition-all">
                  <value.icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Seção Equipe */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="max-w-3xl mx-auto p-8 md:p-12 rounded-2xl bg-gradient-to-r from-blue-950/30 via-purple-950/30 to-blue-950/30 border border-blue-500/20">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Quer Fazer Parte do Time?
            </h2>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Estamos sempre em busca de talentos criativos e apaixonados por jogos. 
              Se você compartilha da nossa visão e quer ajudar a criar experiências inesquecíveis, 
              conheça nossas oportunidades.
            </p>
            <a
              href="/trabalhe-conosco"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold hover:from-blue-500 hover:to-blue-400 transition-all shadow-lg shadow-blue-500/30"
            >
              <Users className="w-5 h-5" />
              <span>Ver Oportunidades</span>
            </a>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
