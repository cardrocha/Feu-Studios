import { useState } from "react";
import { motion } from "motion/react";
import {
  Briefcase,
  Send,
  CheckCircle,
  AlertCircle,
  Code,
  Palette,
  Headphones,
  FileText,
} from "lucide-react";

export function TrabalheConosco() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    position: "",
    message: "",
  });
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const positions = [
    "Desenvolvedor de Jogos",
    "Designer de Jogos",
    "Artista 2D/3D",
    "Compositor de Música",
    "Designer de Som",
    "QA Tester",
    "Outro",
  ];

  const benefits = [
    {
      icon: Code,
      title: "Projetos Criativos",
      description:
        "Trabalhe em projetos únicos e desafiadores que testam seus limites criativos.",
    },
    {
      icon: Palette,
      title: "Liberdade Artística",
      description:
        "Espaço para experimentar e contribuir com suas ideias inovadoras.",
    },
    {
      icon: Headphones,
      title: "Ambiente Flexível",
      description: "Trabalho remoto ou híbrido com horários flexíveis.",
    },
    {
      icon: FileText,
      title: "Crescimento",
      description:
        "Oportunidades de desenvolvimento profissional e aprendizado contínuo.",
    },
  ];

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Nome é obrigatório";
    }

    if (!formData.email.trim()) {
      newErrors.email = "E-mail é obrigatório";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "E-mail inválido";
    }

    if (!formData.position) {
      newErrors.position = "Selecione um cargo";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Mensagem é obrigatória";
    } else if (formData.message.trim().length < 50) {
      newErrors.message = "A mensagem deve ter pelo menos 50 caracteres";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      setSubmitStatus("error");
      return;
    }

    // Simulate form submission
    setTimeout(() => {
      setSubmitStatus("success");
      setFormData({ name: "", email: "", position: "", message: "" });
      setErrors({});

      // Reset after 5 seconds
      setTimeout(() => {
        setSubmitStatus("idle");
      }, 5000);
    }, 1000);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

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
            <Briefcase className="w-8 h-8 text-blue-400" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Trabalhe{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Conosco
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Junte-se a nós na criação de experiências memoráveis. Estamos sempre
            em busca de talentos apaixonados por jogos.
          </p>
        </motion.div>

        {/* Benefits */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">
              Por Que Trabalhar na Feu Studios?
            </h2>
            <p className="text-gray-400">
              Benefícios de fazer parte do nosso time
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-xl bg-gradient-to-br from-gray-900 to-black border border-blue-500/20 text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-500/10 border border-blue-500/30 mb-4">
                  <benefit.icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
                <p className="text-sm text-gray-400">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Application Form */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <div className="p-8 md:p-12 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20">
            <h2 className="text-3xl font-bold mb-2 text-center">
              Candidate-se
            </h2>
            <p className="text-gray-400 text-center mb-8">
              Preencha o formulário abaixo e entraremos em contato
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-gray-300 mb-2"
                >
                  Nome Completo *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-gray-900 border rounded-lg text-white placeholder-gray-500 focus:outline-none transition-colors ${
                    errors.name
                      ? "border-red-500"
                      : "border-blue-500/20 focus:border-blue-500/50"
                  }`}
                  placeholder="Seu nome completo"
                />
                {errors.name && (
                  <p className="mt-2 text-sm text-red-400 flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-300 mb-2"
                >
                  E-mail *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-gray-900 border rounded-lg text-white placeholder-gray-500 focus:outline-none transition-colors ${
                    errors.email
                      ? "border-red-500"
                      : "border-blue-500/20 focus:border-blue-500/50"
                  }`}
                  placeholder="seu.email@exemplo.com"
                />
                {errors.email && (
                  <p className="mt-2 text-sm text-red-400 flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Position */}
              <div>
                <label
                  htmlFor="position"
                  className="block text-sm font-semibold text-gray-300 mb-2"
                >
                  Cargo Desejado *
                </label>
                <select
                  id="position"
                  name="position"
                  value={formData.position}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-gray-900 border rounded-lg text-white focus:outline-none transition-colors ${
                    errors.position
                      ? "border-red-500"
                      : "border-blue-500/20 focus:border-blue-500/50"
                  }`}
                >
                  <option value="">Selecione um cargo</option>
                  {positions.map((position) => (
                    <option key={position} value={position}>
                      {position}
                    </option>
                  ))}
                </select>
                {errors.position && (
                  <p className="mt-2 text-sm text-red-400 flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    {errors.position}
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-gray-300 mb-2"
                >
                  Mensagem / Apresentação *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className={`w-full px-4 py-3 bg-gray-900 border rounded-lg text-white placeholder-gray-500 focus:outline-none transition-colors resize-none ${
                    errors.message
                      ? "border-red-500"
                      : "border-blue-500/20 focus:border-blue-500/50"
                  }`}
                  placeholder="Conte-nos sobre sua experiência, habilidades e por que você quer fazer parte da Feu Studios... (mínimo 50 caracteres)"
                />
                <div className="flex justify-between items-start mt-2">
                  {errors.message && (
                    <p className="text-sm text-red-400 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.message}
                    </p>
                  )}
                  <span
                    className={`text-sm ml-auto ${
                      formData.message.length >= 50
                        ? "text-green-400"
                        : "text-gray-500"
                    }`}
                  >
                    {formData.message.length}/50
                  </span>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={submitStatus === "success"}
                className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold hover:from-blue-500 hover:to-blue-400 transition-all shadow-lg shadow-blue-500/30 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {submitStatus === "success" ? (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    <span>Enviado com Sucesso!</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Enviar Candidatura</span>
                  </>
                )}
              </button>

              {/* Success Message */}
              {submitStatus === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 rounded-lg bg-green-500/10 border border-green-500/30 text-green-400 text-center"
                >
                  Obrigado pela candidatura! Entraremos em contato em breve.
                </motion.div>
              )}
            </form>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
