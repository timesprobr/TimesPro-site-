/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import {
  Users,
  ShieldCheck,
  PieChart,
  Palette,
  Megaphone,
  UserCog,
  ChevronRight,
  Trophy,
  Layout,
  Smartphone,
  Globe,
  Menu,
  X,
  CheckCircle2,
  CreditCard,
  HandCoins,
  Wrench,
  LineChart,
  Target,
  FileText,
  LayoutGrid,
  TrendingUp,
  Handshake,
  MessageCircle,
  Ticket,
  Wallet,
  Newspaper,
  Calendar,
  Bell,
  Box,
  Search,
  UserCheck,
  CheckSquare,
  Heart
} from "lucide-react";
import { useState, useEffect } from "react";
import heroImg from "../imagens/001.png";
import toolsImg from "../imagens/002.png";
import badgeGaf from "../imagens/GAF.png";
import badgeRacing from "../imagens/Racing-FC-Press-Kit (1).png";
import badgeMaio from "../imagens/3 de Maio Futebol Clube.png";
import dash01Img from "../imagens/dash 01.png";
import dashScoutImg from "../imagens/dash scout.png";
import timesImg from "../imagens/especialsta c fundo-Photoroom.png";

function TimesProTools({ onNavigate }: { onNavigate: (page: string) => void }) {
  const toolsCards = [
    {
      title: "Nossa trajetória",
      description: "Anos desenvolvendo soluções digitais e operacionais para clubes, projetos esportivos e organizações locais.",
      icon: LineChart
    },
    {
      title: "Evolução natural",
      description: "O TIMES PRO evoluiu de uma plataforma digital para uma estrutura completa de gestão esportiva.",
      icon: TrendingUp
    },
    {
      title: "Nosso propósito",
      description: "Levar profissionalização, organização e capacidade de arrecadação para clubes amadores e semi-profissionais.",
      icon: Target
    },
    {
      title: "Operação estratégica",
      description: "Mais do que tecnologia: entregamos suporte, metodologia e estrutura operacional para o dia a dia do clube.",
      icon: Wrench
    }
  ];

  const categorySolutions = [
    {
      category: "Gestão e Operação",
      description: "Ferramentas para organizar a rotina administrativa do clube.",
      items: [
        { title: "Gestão Financeira", description: "Controle de receitas, despesas e prestação de contas do clube.", icon: PieChart },
        { title: "Gestão de Documentos", description: "Organize contratos, estatutos, ofícios e arquivos importantes.", icon: FileText },
        { title: "Almoxarifado", description: "Controle de materiais esportivos, uniformes e patrimônio.", icon: Box },
        { title: "Agenda de Treinos", description: "Calendário centralizado de jogos e compromissos esportivos.", icon: Calendar },
        { title: "Alertas Automáticos", description: "Avisos e lembretes via WhatsApp e E-mail com sua marca.", icon: Bell },
      ]
    },
    {
      category: "Monetização e Receita",
      description: "Aumente a arrecadação e crie novas fontes de renda sustentáveis.",
      items: [
        { title: "Vaquinha Online", description: "Captação digital para projetos, viagens e estrutura.", icon: HandCoins },
        { title: "Ingresso Online", description: "Venda facilitada com controle de acesso e gestão financeira.", icon: Ticket },
        { title: "Carteira Digital", description: "Pagamentos e benefícios exclusivos para membros ativos.", icon: Wallet },
        { title: "Patrocinadores", description: "Gestão de cotas, contratos e exposição de marca.", icon: Handshake },
      ]
    },
    {
      category: "Futebol e Performance",
      description: "Foco total na evolução técnica e no desempenho dos seus atletas.",
      items: [
        { title: "Scout de Atletas", description: "Cadastro e observação técnica detalhada de talentos.", icon: Search },
        { title: "Gestão de Elenco", description: "Acompanhamento profissional de atletas e comissão.", icon: UserCheck },
        { title: "Categorias de Base", description: "Monitoramento completo do desenvolvimento das joias.", icon: Trophy },
        { title: "Controle de Presença", description: "Frequência automatizada em treinos e competições.", icon: CheckSquare },
      ]
    },
    {
      category: "Presença Digital",
      description: "Fortaleça a marca do seu clube e engaje sua torcida online.",
      items: [
        { title: "Builder de Sites", description: "Crie sites profissionais com transparência e notícias.", icon: Layout },
        { title: "Portal de Notícias", description: "Comunicação oficial e resultados em tempo real.", icon: Newspaper },
        { title: "App do Clube", description: "Aplicativo próprio para torcida e ambiente interno.", icon: Smartphone },
        { title: "Sócio Torcedor", description: "Área exclusiva para benefícios, planos e engajamento.", icon: Heart },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#f8f9fa] text-zinc-900 pt-32 pb-20">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-black leading-tight tracking-tighter mb-8 text-zinc-900"
            >
              O marketplace de <br />
              <span className="text-lime-600">serviços e tecnologia</span> <br />
              exclusivo do TimesPro
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-zinc-600 max-w-xl leading-relaxed font-light"
            >
              Nossa missão é profissionalizar clubes amadores e semi-profissionais através de gestão, operação, marketing e tecnologia própria, entregando estrutura para clubes crescerem dentro e fora de campo
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="relative rounded-[40px] overflow-hidden shadow-2xl border-4 border-white bg-white/50"
          >
            <img
              src={toolsImg}
              alt="TimesPro Tools Overview"
              className="w-full max-h-[440px] object-contain p-4"
            />
          </motion.div>
        </div>
      </section>

      {/* Integrated About & Cards Section */}
      <section className="bg-white py-24 border-y border-zinc-100">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-20"
          >
            <h2 className="text-3xl md:text-4xl font-black mb-6 tracking-tighter text-zinc-900">
              Entenda o que é o <span className="text-lime-500">Times Pro Tools</span>
            </h2>
            <p className="text-xl text-zinc-600 leading-relaxed font-light">
              Times Pro Tools centraliza os serviços, tecnologias e operações que profissionalizam a gestão do seu clube.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {toolsCards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-10 rounded-[40px] bg-[#f8f9fa] border border-zinc-100 shadow-sm hover:shadow-2xl transition-all h-full relative overflow-hidden group"
              >
                {/* Background Icon */}
                <div className="absolute -right-8 -bottom-8 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity pointer-events-none transform group-hover:scale-110 duration-700">
                  <card.icon size={250} strokeWidth={1} />
                </div>
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-10 shadow-sm">
                    <span className="text-lime-600 font-black text-2xl">{index + 1}</span>
                  </div>
                  <h3 className="text-2xl font-black mb-4 tracking-tight text-zinc-900">{card.title}</h3>
                  <p className="text-zinc-600 leading-relaxed font-normal">
                    {card.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-32 text-center"
          >
            <p className="text-3xl md:text-4xl font-black italic tracking-tighter text-zinc-400">
              Somos obcecados pelo <span className="text-lime-500 not-italic">sucesso</span> dos nossos parceiros.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Solutions Section - Redesigned Sticky Layout */}
      <section className="bg-[#f7f7f7] py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">

            {/* Left Column: Sticky Title, Description & Visual */}
            <div className="lg:col-span-5 lg:sticky lg:top-32 h-auto flex flex-col gap-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-lime-400/10 border border-lime-400/20 text-lime-600 text-xs font-bold uppercase tracking-widest mb-6">
                  Ecossistema Completo
                </div>
                <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight tracking-tighter text-zinc-900">
                  Exemplos de <span className="text-lime-500 italic">soluções</span> para <br /> o seu clube
                </h2>
                <p className="text-lg text-zinc-500 max-w-xl leading-relaxed font-light mb-8">
                  O Times Pro reúne ferramentas para profissionalizar a gestão, aumentar receitas e fortalecer a presença digital do seu clube.
                </p>
                <button className="px-8 py-4 bg-zinc-900 text-white rounded-full font-bold hover:bg-zinc-800 transition-all transform hover:scale-105 active:scale-95 inline-flex items-center gap-2 shadow-xl">
                  Quero estas soluções <ChevronRight className="w-4 h-4" />
                </button>
              </motion.div>


            </div>

            {/* Right Column: Carousel & Large CTA */}
            <div className="lg:col-span-7 flex flex-col gap-12">

              {/* Categories Carousel */}
              <div className="relative group">
                <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-12 scrollbar-none no-scrollbar">
                  {categorySolutions.map((category, catIdx) => (
                    <motion.div
                      key={catIdx}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: catIdx * 0.1 }}
                      className="min-w-[320px] md:min-w-[450px] snap-start flex flex-col gap-8"
                    >
                      <div className="flex flex-col h-full rounded-[40px] shadow-sm border border-zinc-200 overflow-hidden bg-white">
                        {/* Etiqueta de Cabeçalho */}
                        <div className="bg-lime-400 text-zinc-950 px-8 py-4 font-black tracking-widest text-sm uppercase flex items-center justify-between border-b border-lime-500/20">
                          <span>{category.category}</span>
                        </div>

                        {/* Corpo do Card */}
                        <div className="p-8 flex-1 flex flex-col justify-between gap-6">
                          <p className="text-zinc-500 font-light text-sm leading-relaxed">{category.description}</p>

                          <div className="flex flex-col gap-4">
                            {category.items.map((item, idx) => (
                              <div
                                key={idx}
                                className="px-6 py-4 rounded-2xl bg-zinc-50 border border-transparent hover:border-zinc-200 hover:bg-white hover:shadow-md transition-all flex gap-4 items-center"
                              >
                                <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center p-2 shadow-sm">
                                  <item.icon className="w-full h-full text-zinc-600" strokeWidth={2} />
                                </div>
                                <h4 className="text-sm font-bold text-zinc-900">{item.title}</h4>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Carousel Instruction */}
                <div className="flex items-center gap-2 text-zinc-400 text-xs font-bold uppercase tracking-widest mt-2 px-2">
                  <span className="w-8 h-[1px] bg-zinc-200" /> Deslize para ver mais categorias
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentPage, setCurrentPage] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const features = [
    {
      title: "Estrutura Operacional",
      description: "Implementação da metodologia TIMES PRO para profissionalizar a gestão, organizar processos e estruturar a operação do clube.",
      icon: Wrench,
      color: "from-lime-400 to-lime-600"
    },
    {
      title: "Alinhamento com Diretoria",
      description: "Treinamentos estratégicos com diretoria e responsáveis do clube para definição de processos, responsabilidades e metas.",
      icon: Handshake,
      color: "from-lime-300 to-lime-500"
    },
    {
      title: "Planejamento de Marketing",
      description: "Estratégia de posicionamento, comunicação, torcida, patrocinadores e fortalecimento da presença digital do clube.",
      icon: Target,
      color: "from-lime-200 to-lime-400"
    },
    {
      title: "Secretaria e Operação",
      description: "Estruturação da rotina administrativa do clube com acompanhamento operacional, organização documental e suporte contínuo.",
      icon: FileText,
      color: "from-lime-500 to-lime-700"
    },
    {
      title: "Plataforma Proprietária",
      description: "Ferramentas próprias para gestão de atletas, arrecadação, mensalidades, transparência, ingressos e operação do clube.",
      icon: LayoutGrid,
      color: "from-zinc-400 to-zinc-600"
    },
    {
      title: "Crescimento e Receita",
      description: "Implementação de estratégias para aumentar arrecadação através de sócio torcedor, patrocinadores, eventos e campanhas.",
      icon: TrendingUp,
      color: "from-lime-400 to-emerald-600"
    }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-500 ${currentPage === 'home' ? 'bg-zinc-950 text-white' : 'bg-[#f8f9fa] text-zinc-900'}`}>
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled
            ? currentPage === 'home'
              ? "bg-zinc-950/80 backdrop-blur-md border-b border-white/5 py-4"
              : "bg-white/80 backdrop-blur-md border-b border-zinc-200 py-4 shadow-sm"
            : "bg-transparent py-6"
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => setCurrentPage("home")}>
            <div className="w-10 h-10 bg-lime-400 rounded-lg flex items-center justify-center">
              <Trophy className="text-zinc-950 w-6 h-6" />
            </div>
            <span className={`text-2xl font-display font-bold tracking-tighter ${currentPage === 'home' ? 'text-white' : 'text-zinc-900'}`}>TIMES PRO</span>
          </div>

          <div className={`hidden md:flex items-center gap-8 text-sm font-medium ${currentPage === 'home' ? 'text-zinc-400' : 'text-zinc-500'}`}>
            <button onClick={() => setCurrentPage("home")} className={`hover:text-lime-400 transition-colors ${currentPage === 'home' ? 'text-lime-400' : ''}`}>Home</button>
            <button onClick={() => setCurrentPage("tools")} className={`hover:text-lime-400 transition-colors ${currentPage === 'tools' ? 'text-lime-400' : ''}`}>TimesPro Tools</button>
            <a href="#features" className="hover:text-lime-400 transition-colors">Funcionalidades</a>
            <a href="#dashboard" className="hover:text-lime-400 transition-colors">Painel ADM</a>
            <button className="px-5 py-2 bg-lime-400 text-zinc-950 rounded-full font-bold hover:bg-lime-300 transition-all transform hover:scale-105">
              Começar Agora
            </button>
          </div>

          <button className={`md:hidden ${currentPage === 'home' ? 'text-zinc-100' : 'text-zinc-900'}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`fixed inset-0 z-40 pt-24 px-6 md:hidden ${currentPage === 'home' ? 'bg-zinc-950 text-white' : 'bg-white text-zinc-900'}`}
        >
          <div className="flex flex-col gap-6 text-xl">
            <button onClick={() => { setCurrentPage("home"); setIsMenuOpen(false); }}>Home</button>
            <button onClick={() => { setCurrentPage("tools"); setIsMenuOpen(false); }}>TimesPro Tools</button>
            <a href="#features" onClick={() => setIsMenuOpen(false)}>Funcionalidades</a>
            <a href="#dashboard" onClick={() => setIsMenuOpen(false)}>Painel ADM</a>
            <button className="w-full py-4 bg-lime-400 text-zinc-950 rounded-xl font-bold">
              Começar Agora
            </button>
          </div>
        </motion.div>
      )}

      {currentPage === "tools" ? (
        <TimesProTools onNavigate={setCurrentPage} />
      ) : (
        <>
          {/* Hero Section */}
          <section className="relative pt-24 pb-24 overflow-hidden h-screen min-h-[620px] max-h-[900px] flex items-center">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none opacity-20">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-lime-400/30 blur-[120px] rounded-full" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative w-full -mt-8 md:-mt-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                {/* Left Column: Content */}
                <div className="text-left">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-lime-400/10 border border-lime-400/20 text-lime-400 text-xs font-bold uppercase tracking-widest mb-4 md:mb-6"
                  >
                    <Users className="w-3 h-3" /> Para Clubes Amadores e Semi-Profissional
                  </motion.div>

                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-[0.95] tracking-tighter mb-6"
                  >
                    Deixe que <span className="text-gradient">nosso time</span> cuide do seu.
                  </motion.h1>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-zinc-400 text-base md:text-lg lg:text-xl max-w-xl mb-8 leading-relaxed font-light"
                  >
                    Entregamos mais do que tecnologia. Colocamos um time completo para organizar, profissionalizar e impulsionar o seu clube.
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="flex flex-col sm:flex-row items-start sm:items-center gap-6 justify-start mt-4"
                  >
                    {/* Simulated Club Badges / Shields */}
                    <div className="flex items-center">
                      <div className="flex -space-x-3">
                        <div className="w-10 h-10 rounded-full border-2 border-zinc-950 bg-gradient-to-br from-red-600 to-black flex items-center justify-center shadow-md">
                          <span className="text-[9px] font-black tracking-tighter text-white">CRF</span>
                        </div>
                        <div className="w-10 h-10 rounded-full border-2 border-zinc-950 bg-gradient-to-br from-emerald-600 to-teal-900 flex items-center justify-center shadow-md">
                          <span className="text-[9px] font-black tracking-tighter text-white">SEP</span>
                        </div>
                        <div className="w-10 h-10 rounded-full border-2 border-zinc-950 bg-gradient-to-br from-blue-600 to-indigo-950 flex items-center justify-center shadow-md">
                          <span className="text-[9px] font-black tracking-tighter text-white">CEC</span>
                        </div>
                        <div className="w-10 h-10 rounded-full border-2 border-zinc-950 bg-gradient-to-br from-amber-500 to-zinc-900 flex items-center justify-center shadow-md">
                          <span className="text-[9px] font-black tracking-tighter text-zinc-950">SCC</span>
                        </div>
                        <div className="w-10 h-10 rounded-full border-2 border-zinc-950 bg-lime-400 flex items-center justify-center shadow-md">
                          <span className="text-xs font-black text-zinc-950">+</span>
                        </div>
                      </div>
                      <div className="ml-3 text-left">
                        <p className="text-xs font-bold text-white leading-tight">+20 Clubes</p>
                        <span className="text-[10px] text-zinc-400 block -mt-0.5">ativos na plataforma</span>
                      </div>
                    </div>

                    {/* Call to Action Button */}
                    <button
                      onClick={() => setCurrentPage("tools")}
                      className="px-8 py-4 bg-lime-400 text-zinc-950 rounded-full font-black text-base hover:bg-lime-300 shadow-[0_0_25px_-5px_rgba(163,230,53,0.6)] hover:scale-105 transition-all flex items-center gap-2 group"
                    >
                      Quero saber mais <ChevronRight className="w-5 h-5 stroke-[3] group-hover:translate-x-1 transition-transform" />
                    </button>
                  </motion.div>
                </div>

                {/* Right Column: Visual */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, x: 20 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="relative hidden lg:block"
                >
                  <div className="relative rounded-[2rem] overflow-hidden shadow-2xl">
                    <img
                      src={heroImg}
                      alt="TimesPro Platform Preview"
                      className="w-full max-h-[380px] xl:max-h-[440px] object-contain drop-shadow-[0_10px_30px_rgba(190,242,100,0.15)]"
                    />
                  </div>

                  {/* Decorative Glow behind image */}
                  <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-lime-400/5 blur-[80px] rounded-full" />
                </motion.div>
              </div>
            </div>

            {/* Feature Stripe at the bottom of Hero */}
            <div className="absolute bottom-4 left-0 w-full border-y border-white/5 bg-zinc-900/60 backdrop-blur-md py-5 hidden md:block z-20">
              <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-4 gap-6">
                  <div className="flex items-center gap-3 group">
                    <div className="w-9 h-9 rounded-xl bg-zinc-800 flex items-center justify-center group-hover:bg-lime-400 transition-colors shrink-0">
                      <Wrench className="w-4 h-4 text-zinc-400 group-hover:text-zinc-950 transition-colors" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[9px] text-zinc-500 font-bold uppercase tracking-widest mb-0.5 truncate">Acesso Exclusivo</p>
                      <p className="text-xs text-white font-medium truncate">TP Tools (Ferramentas Pro)</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 group">
                    <div className="w-9 h-9 rounded-xl bg-zinc-800 flex items-center justify-center group-hover:bg-lime-400 transition-colors shrink-0">
                      <LineChart className="w-4 h-4 text-zinc-400 group-hover:text-zinc-950 transition-colors" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[9px] text-zinc-500 font-bold uppercase tracking-widest mb-0.5 truncate">Alta Performance</p>
                      <p className="text-xs text-white font-medium truncate">Monitoramento de resultados</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 group">
                    <div className="w-9 h-9 rounded-xl bg-zinc-800 flex items-center justify-center group-hover:bg-lime-400 transition-colors shrink-0">
                      <TrendingUp className="w-4 h-4 text-zinc-400 group-hover:text-zinc-950 transition-colors" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[9px] text-zinc-500 font-bold uppercase tracking-widest mb-0.5 truncate">Financeiro</p>
                      <p className="text-xs text-white font-medium truncate">Foco em aumentar receita</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 group">
                    <div className="w-9 h-9 rounded-xl bg-zinc-800 flex items-center justify-center group-hover:bg-lime-400 transition-colors shrink-0">
                      <Handshake className="w-4 h-4 text-zinc-400 group-hover:text-zinc-950 transition-colors" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[9px] text-zinc-500 font-bold uppercase tracking-widest mb-0.5 truncate">Parceria Real</p>
                      <p className="text-xs text-white font-medium truncate">Equipe dedicada à gestão</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Dashboard & Video Showcase */}
          <section id="dashboard" className="pt-12 pb-32 px-6 relative overflow-hidden bg-zinc-950">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">

                {/* Left Column: Real Dashboard Tilted Mockup */}
                <motion.div
                  initial={{ opacity: 0, x: -40, rotateY: 35, rotateX: 15, scale: 1.65 }}
                  whileInView={{ opacity: 1, x: 0, rotateY: 35, rotateX: 15, scale: 1.65 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  className="relative hidden lg:block perspective-1000 lg:col-span-1 z-0 origin-right mt-32"
                >
                  <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-zinc-900 aspect-video relative group transition-transform duration-500 hover:scale-[1.03]">
                    <img src={dash01Img} alt="Painel Geral TimesPro" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-white/5 pointer-events-none" />
                    <div className="absolute bottom-3 left-3 bg-zinc-950/90 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full text-[9px] font-black text-lime-400 tracking-wider uppercase">GESTÃO INTEGRADA</div>
                  </div>
                </motion.div>

                {/* Center Column: Video */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 1 }}
                  className="lg:col-span-3 z-20"
                >
                  <div className="mb-12 text-center max-w-2xl mx-auto">
                    <p className="text-lime-400 font-bold uppercase tracking-widest text-xs mb-4 px-4 py-1 rounded-full bg-lime-400/10 border border-lime-400/20 inline-block">A Realidade dos Clubes</p>
                    <h3 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-zinc-400 tracking-tight leading-tight">
                      A diretoria precisa de tempo, o clube precisa de receita, e organização depende de <span className="text-lime-400">mais pessoas...</span>
                    </h3>
                  </div>
                  <div className="relative rounded-[3.5rem] p-5 overflow-hidden border border-white/10 shadow-[0_0_100px_rgba(163,230,53,0.25)] bg-zinc-900 group">
                    <div className="relative aspect-video w-full rounded-[2.5rem] overflow-hidden">
                      <iframe
                        className="w-full h-full"
                        src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=WpXG_vT_9vX6l9pL"
                        title="Times Pro Preview"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                </motion.div>

                {/* Right Column: Real Scout Tilted Mockup */}
                <motion.div
                  initial={{ opacity: 0, x: 40, rotateY: -35, rotateX: 15, scale: 1.65 }}
                  whileInView={{ opacity: 1, x: 0, rotateY: -35, rotateX: 15, scale: 1.65 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  className="relative hidden lg:block perspective-1000 lg:col-span-1 z-0 origin-left mt-32"
                >
                  <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-zinc-900 aspect-video relative group transition-transform duration-500 hover:scale-[1.03]">
                    <img src={dashScoutImg} alt="Scout e Estatísticas TimesPro" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-tl from-lime-400/10 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute bottom-3 right-3 bg-zinc-950/90 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full text-[9px] font-black text-lime-400 tracking-wider uppercase">SCOUT & ATLETAS</div>
                  </div>
                </motion.div>
              </div>

              {/* CTA Abaixo do Vídeo */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="mt-10 text-center relative z-30"
              >
                <button
                  onClick={() => setCurrentPage("tools")}
                  className="px-10 py-5 bg-lime-400 text-zinc-950 rounded-2xl font-black text-lg hover:bg-lime-300 shadow-[0_0_30px_-5px_rgba(163,230,53,0.5)] hover:scale-105 transition-all inline-flex items-center gap-3 group mx-auto"
                >
                  Quero conhecer a Times Pro <ChevronRight className="w-5 h-5 stroke-[3] group-hover:translate-x-1 transition-transform" />
                </button>
                <p className="text-zinc-400 text-sm md:text-base mt-4 mb-1 font-light">
                  Vamos bater um papo em uma reunião online
                </p>
                <span className="text-lime-400 font-bold uppercase tracking-widest text-xs">
                  #NossoTimeJogaJunto
                </span>
              </motion.div>
            </div>
          </section>

          {/* Trust Section / Team Carousel */}
          <section className="py-24 border-y border-white/5 bg-zinc-900/20 overflow-hidden relative">
            <div className="max-w-7xl mx-auto mb-16 text-center px-6">
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-lime-400 font-black uppercase tracking-[0.4em] text-xs md:text-sm mb-6"
              >
                Presença dentro e fora de campo
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-zinc-500 tracking-tighter"
              >
                Eles confiaram no nosso time.
              </motion.h2>
            </div>

            <div className="relative flex overflow-hidden group">
              {/* Subtle gradients to mask carousel edges */}
              <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-zinc-950 to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-zinc-950 to-transparent z-10 pointer-events-none" />

              <motion.div
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="flex whitespace-nowrap gap-20 py-4"
              >
                {[
                  { name: "Gameleira F7", img: badgeGaf },
                  { name: "Racing FC", img: badgeRacing },
                  { name: "3 de Maio", img: badgeMaio },
                  { name: "Gameleira F7", img: badgeGaf },
                  { name: "Racing FC", img: badgeRacing },
                  { name: "3 de Maio", img: badgeMaio },
                  { name: "Gameleira F7", img: badgeGaf },
                  { name: "Racing FC", img: badgeRacing },
                  { name: "3 de Maio", img: badgeMaio },
                  { name: "Gameleira F7", img: badgeGaf },
                  { name: "Racing FC", img: badgeRacing },
                  { name: "3 de Maio", img: badgeMaio },
                ].map((team, index) => (
                  <div key={index} className="flex items-center gap-5 opacity-70 hover:opacity-100 transition-all duration-500 cursor-default">
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center p-1.5 bg-zinc-800/80 border border-white/10 shadow-lg group-hover:scale-105 transition-transform">
                      <img src={team.img} alt={team.name} className="w-full h-full object-contain drop-shadow" />
                    </div>
                    <span className="text-2xl md:text-3xl font-display font-black tracking-tighter text-white uppercase italic">{team.name}</span>
                  </div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* Features Grid */}
          <section id="features" className="py-24 px-6 bg-[#f8f9fa]">
            <div className="max-w-7xl mx-auto">
              <div className="mb-16 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-zinc-900">Falta tempo, equipe e organização? Nós cuidamos da operação do seu clube.</h2>
                <p className="text-zinc-500 max-w-3xl mx-auto text-lg leading-relaxed">
                  Gestão, arrecadação, marketing, secretaria e tecnologia própria para profissionalizar seu clube.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group relative overflow-hidden p-6 rounded-3xl bg-white border border-zinc-100 shadow-sm hover:shadow-xl transition-all cursor-default"
                  >
                    {/* Desenho grande transparente de fundo (Marca D'água) */}
                    <div className="absolute -right-4 -bottom-4 text-zinc-900 opacity-[0.03] group-hover:opacity-[0.06] group-hover:scale-110 transition-all duration-500 pointer-events-none">
                      <feature.icon className="w-40 h-40 stroke-[1]" />
                    </div>

                    <div className="relative z-10">
                      <div className="w-12 h-12 rounded-xl bg-lime-400 flex items-center justify-center mb-4 transform group-hover:scale-110 group-hover:rotate-3 transition-all shadow-sm">
                        <feature.icon className="w-6 h-6 text-zinc-950 stroke-[2.5]" />
                      </div>
                      <h3 className="text-lg font-bold mb-2 text-zinc-900 group-hover:text-lime-600 transition-colors">{feature.title}</h3>
                      <p className="text-zinc-500 text-sm leading-relaxed font-light">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>


          {/* Seção dos Especialistas / Fundadores */}
          <section className="py-32 px-6 bg-zinc-950 relative overflow-hidden">
            {/* Glow de fundo */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-lime-500/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-6xl mx-auto relative z-10">
              <div className="text-center mb-24">
                <span className="inline-block text-lime-400 font-black uppercase tracking-[0.3em] text-xs mb-4 px-4 py-1.5 bg-lime-400/10 rounded-full border border-lime-400/20">
                  Quando a gestão está em jogo
                </span>
                <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-tight max-w-4xl mx-auto">
                  NOSSO TIME <br />
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-lime-400 to-lime-200">ENTRA PRA GANHAR!</span>
                </h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-zinc-900/60 backdrop-blur-xl border border-white/10 rounded-[40px] p-8 md:p-12 shadow-2xl">
                
                {/* Bio Savio Faustino */}
                <div className="lg:col-span-4 flex flex-col gap-4 text-left order-2 lg:order-1 relative z-20">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-lime-400 animate-pulse" />
                    <h3 className="text-2xl font-bold text-white">Savio Faustino</h3>
                  </div>
                  <p className="text-lime-400 text-xs font-bold uppercase tracking-widest">Estratégia & Tecnologia</p>
                  <p className="text-zinc-400 text-sm leading-relaxed font-light">
                    Especialista em modelagem financeira e arquitetura de sistemas esportivos. Focado em transformar a infraestrutura do clube em uma máquina previsível de receitas, com total segurança de dados e governança de ponta.
                  </p>
                  <div className="pt-2 flex items-center gap-2 text-xs font-semibold text-zinc-500">
                    <CheckCircle2 className="w-4 h-4 text-lime-400" /> Governança e Receita Previsível
                  </div>
                </div>

                {/* Imagem Central da Dupla (Gigantismo 3D Pop-out Supremo) */}
                <div className="lg:col-span-4 flex justify-center order-1 lg:order-2 relative group pt-8 lg:pt-0 -mb-8 md:-mb-12 z-10">
                  {/* Pódio / Aura Verde de Fundo */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-gradient-to-b from-lime-400/25 to-transparent blur-2xl pointer-events-none group-hover:from-lime-400/35 transition-all duration-500" />
                  
                  {/* Imagem Flutuante com Projeção Extrema Transbordando a Borda Superior */}
                  <div className="relative w-full max-w-[320px] flex justify-center">
                    <img 
                      src={timesImg} 
                      alt="Savio Faustino & Carlos Gabriel" 
                      className="w-full h-auto object-contain drop-shadow-[0_25px_35px_rgba(0,0,0,0.9)] transform origin-bottom scale-[1.40] md:scale-[1.45] -translate-y-20 group-hover:scale-[1.45] md:group-hover:scale-[1.50] group-hover:-translate-y-22 transition-all duration-500 filter contrast-[1.05]" 
                    />
                  </div>
                </div>

                {/* Bio Carlos Gabriel */}
                <div className="lg:col-span-4 flex flex-col gap-4 text-left order-3 relative z-20">
                  <div className="flex items-center gap-3 justify-start lg:justify-end">
                    <h3 className="text-2xl font-bold text-white">Carlos Gabriel</h3>
                    <div className="w-3 h-3 rounded-full bg-lime-400 animate-pulse hidden lg:block" />
                  </div>
                  <p className="text-lime-400 text-xs font-bold uppercase tracking-widest lg:text-right">Operação & Expansão</p>
                  <p className="text-zinc-400 text-sm leading-relaxed font-light lg:text-right">
                    Especialista em rotinas administrativas, marketing e engajamento de torcedores. Atua lado a lado com a diretoria garantindo que a metodologia seja implementada no dia a dia com máxima eficiência e impacto nas arquibancadas.
                  </p>
                  <div className="pt-2 flex items-center gap-2 text-xs font-semibold text-zinc-500 justify-start lg:justify-end">
                    <CheckCircle2 className="w-4 h-4 text-lime-400 order-1 lg:order-2" /> 
                    <span className="order-2 lg:order-1">Operação e Engajamento Real</span>
                  </div>
                </div>

              </div>

              {/* Botão de Agendamento */}
              <div className="mt-16 text-center">
                <button className="px-10 py-5 bg-lime-400 text-zinc-950 rounded-2xl font-black text-lg hover:bg-lime-300 shadow-[0_0_30px_-5px_rgba(163,230,53,0.5)] hover:scale-105 transition-all inline-flex items-center gap-3 group">
                  <MessageCircle className="w-6 h-6 fill-zinc-950 text-zinc-950" />
                  Agendar Reunião com os Fundadores
                </button>
              </div>

            </div>
          </section>
        </>
      )}

      {/* Footer */}
      <footer className="py-20 border-t border-white/5 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <Trophy className="text-lime-400 w-8 h-8" />
              <span className="text-2xl font-display font-bold tracking-tighter">TIMES PRO</span>
            </div>
            <p className="text-zinc-500 max-w-xs leading-relaxed text-sm">
              Potencializando o futebol amador através da tecnologia. Gestão, transparência e profissionalismo no asfalto ou na terra.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-zinc-300">Produto</h4>
            <ul className="space-y-4 text-zinc-500 text-sm">
              <li><a href="#" className="hover:text-lime-400 transition-colors">Funcionalidades</a></li>
              <li><a href="#" className="hover:text-lime-400 transition-colors">Painel ADM</a></li>
              <li><a href="#" className="hover:text-lime-400 transition-colors">Personalização</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-zinc-300">Suporte</h4>
            <ul className="space-y-4 text-zinc-500 text-sm">
              <li><a href="#" className="hover:text-lime-400 transition-colors">Central de Ajuda</a></li>
              <li><a href="#" className="hover:text-lime-400 transition-colors">Contato</a></li>
              <li><a href="#" className="hover:text-lime-400 transition-colors">Termos de Uso</a></li>
              <li><a href="#" className="hover:text-lime-400 transition-colors">Privacidade</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-zinc-600 text-xs uppercase tracking-widest font-bold">
          <p>© 2026 TIMES PRO SaaS. Todos os direitos reservados.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-lime-400">Instagram</a>
            <a href="#" className="hover:text-lime-400">LinkedIn</a>
            <a href="#" className="hover:text-lime-400">Twitter</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

