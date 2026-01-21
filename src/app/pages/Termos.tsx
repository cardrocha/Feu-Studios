import { motion } from 'motion/react';
import { FileText, Shield, Info } from 'lucide-react';

export function Termos() {
  const sections = [
    {
      title: '1. Aceitação dos Termos',
      content: 'Ao acessar e utilizar os jogos e serviços da Feu Studios, você concorda em cumprir e estar vinculado a estes Termos de Serviço. Se você não concordar com qualquer parte destes termos, não deve utilizar nossos serviços.'
    },
    {
      title: '2. Uso dos Serviços',
      content: 'Você concorda em usar nossos jogos e serviços apenas para fins legais e de acordo com estes Termos. Você não deve usar nossos serviços de maneira que possa prejudicar, desabilitar, sobrecarregar ou comprometer nossos servidores ou interferir no uso de terceiros.'
    },
    {
      title: '3. Contas de Usuário',
      content: 'Para acessar certas funcionalidades, você pode precisar criar uma conta. Você é responsável por manter a confidencialidade de suas credenciais de conta e por todas as atividades que ocorram sob sua conta.'
    },
    {
      title: '4. Propriedade Intelectual',
      content: 'Todos os direitos, títulos e interesses em e para os jogos da Feu Studios, incluindo mas não se limitando a gráficos, músicas, efeitos sonoros e código-fonte, são de propriedade exclusiva da Feu Studios. Você não pode copiar, modificar, distribuir ou criar trabalhos derivados sem autorização prévia.'
    },
    {
      title: '5. Compras e Pagamentos',
      content: 'Todas as compras realizadas através de nossas plataformas estão sujeitas aos termos de pagamento da plataforma correspondente (Steam, etc.). Os preços estão sujeitos a alterações sem aviso prévio. Todos os pagamentos são finais e não reembolsáveis, exceto quando exigido por lei.'
    },
    {
      title: '6. Conduta do Usuário',
      content: 'Você concorda em não se envolver em condutas que sejam ilegais, fraudulentas, assediadoras, abusivas, difamatórias, obscenas ou de qualquer forma censurável. A Feu Studios reserva-se o direito de banir ou suspender contas que violem essas regras.'
    },
    {
      title: '7. Limitação de Responsabilidade',
      content: 'A Feu Studios não será responsável por quaisquer danos diretos, indiretos, incidentais, consequenciais ou punitivos decorrentes do uso ou incapacidade de usar nossos serviços. Nossos jogos são fornecidos "como estão" sem garantias de qualquer tipo.'
    },
    {
      title: '8. Modificações dos Termos',
      content: 'Reservamo-nos o direito de modificar estes Termos de Serviço a qualquer momento. Alterações substanciais serão notificadas através de nossos canais oficiais. O uso continuado de nossos serviços após tais modificações constitui aceitação dos novos termos.'
    },
    {
      title: '9. Privacidade',
      content: 'Sua privacidade é importante para nós. Coletamos e processamos dados pessoais de acordo com nossa Política de Privacidade. Ao usar nossos serviços, você consente com a coleta e uso de informações conforme descrito em nossa política.'
    },
    {
      title: '10. Rescisão',
      content: 'Podemos rescindir ou suspender seu acesso aos nossos serviços imediatamente, sem aviso prévio ou responsabilidade, por qualquer motivo, incluindo, sem limitação, se você violar os Termos de Serviço.'
    },
    {
      title: '11. Lei Aplicável',
      content: 'Estes Termos serão regidos e interpretados de acordo com as leis do Brasil, sem consideração a conflitos de disposições legais. Você concorda em se submeter à jurisdição exclusiva dos tribunais brasileiros.'
    },
    {
      title: '12. Contato',
      content: 'Se você tiver alguma dúvida sobre estes Termos de Serviço, entre em contato conosco através de nossos canais oficiais de comunicação.'
    }
  ];

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
            <FileText className="w-8 h-8 text-blue-400" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Termos de <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Serviço</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Última atualização: 6 de janeiro de 2026
          </p>
        </motion.div>

        {/* Important Notice */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="max-w-4xl mx-auto mb-12"
        >
          <div className="p-6 rounded-xl bg-blue-500/10 border border-blue-500/30 flex gap-4">
            <Info className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-blue-400 mb-2">Importante</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Estes são os termos de serviço simulados para fins demonstrativos. Em um ambiente real, 
                estes termos devem ser revisados por profissionais jurídicos e adaptados às necessidades 
                específicas do negócio e legislação aplicável.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-12"
        >
          <div className="p-8 rounded-xl bg-gradient-to-br from-gray-900 to-black border border-blue-500/20">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Shield className="w-6 h-6 text-blue-400" />
              Introdução
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Bem-vindo aos Termos de Serviço da Feu Studios. Este documento estabelece os termos e condições 
              legais para o uso de nossos jogos, serviços e plataformas. Ao utilizar qualquer um de nossos 
              produtos, você concorda automaticamente com todos os termos aqui descritos. Por favor, leia 
              atentamente antes de prosseguir.
            </p>
          </div>
        </motion.div>

        {/* Sections */}
        <div className="max-w-4xl mx-auto space-y-6">
          {sections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="p-6 md:p-8 rounded-xl bg-gradient-to-br from-gray-900 to-black border border-blue-500/20 hover:border-blue-500/40 transition-colors"
            >
              <h2 className="text-xl font-bold mb-4 text-blue-400">
                {section.title}
              </h2>
              <p className="text-gray-300 leading-relaxed">
                {section.content}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mt-12"
        >
          <div className="p-6 rounded-xl bg-gradient-to-r from-blue-950/30 via-purple-950/30 to-blue-950/30 border border-blue-500/20 text-center">
            <p className="text-gray-300 mb-4">
              Ao continuar a usar nossos serviços, você reconhece que leu, entendeu e concorda em estar 
              vinculado a estes Termos de Serviço.
            </p>
            <p className="text-sm text-gray-400">
              Para dúvidas ou esclarecimentos sobre estes termos, entre em contato através de nossos 
              canais oficiais de comunicação.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}