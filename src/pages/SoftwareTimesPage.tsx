import React, { useState } from "react";
import { 
  Globe, 
  ShieldCheck, 
  Newspaper, 
  Target, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Play, 
  Layout,
  LayoutGrid,
  Check,
  Megaphone,
  Search,
  Users
} from "lucide-react";
import toolsImg from "../../imagens/002.png";

export default function SoftwareTimesPage({ onNavigate }: { onNavigate: (page: string) => void }) {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [activeModuleIndex, setActiveModuleIndex] = useState(0);

  const problemas = [
    {
      icon: Globe,
      tag: "Invisibilidade Digital",
      title: "Seu clube não é encontrado",
      description: "Sem um portal oficial, sua marca fica dependente apenas de redes sociais, perdendo autoridade e dificultando buscas no Google."
    },
    {
      icon: ShieldCheck,
      tag: "Falta de Transparência",
      title: "Dificuldade em prestar contas",
      description: "A falta de uma área da transparência organizada afasta investidores e gera desconfiança em relação aos projetos do clube."
    },
    {
      icon: Newspaper,
      tag: "Notícias Desatualizadas",
      title: "Comunicação fragmentada",
      description: "Informações sobre jogos, resultados e dia a dia do clube ficam perdidas em grupos, sem um arquivo histórico oficial."
    },
    {
      icon: Target,
      tag: "Perda de Patrocínios",
      title: "Espaços subutilizados",
      description: "Sites amadores não oferecem visibilidade profissional para marcas, fazendo com que o clube perca verbas de patrocínio."
    }
  ];

  const modulosFuncionalidades = [
    {
      titulo: "Construtor Inteligente",
      icone: Layout,
      descricaoSecao: "Crie e edite o portal do seu clube sem precisar de uma linha de código.",
      features: [
        {
          nome: "Editor Drag and Drop",
          descricao: "Arraste e solte elementos para criar páginas personalizadas com facilidade e rapidez."
        },
        {
          nome: "Templates Esportivos",
          descricao: "Layouts exclusivos desenhados para a realidade de clubes de futebol e ligas."
        },
        {
          nome: "Otimização Mobile",
          descricao: "Seu site nasce 100% responsivo, funcionando perfeitamente em qualquer smartphone."
        }
      ]
    },
    {
      titulo: "Portal de Notícias",
      icone: Newspaper,
      descricaoSecao: "Gerencie toda a comunicação oficial e histórica do seu clube.",
      features: [
        {
          nome: "Publicação Agendada",
          descricao: "Escreva suas notícias e deixe o sistema publicar no dia e hora que você desejar."
        },
        {
          nome: "Galerias de Fotos",
          descricao: "Álbuns de jogos, treinos e eventos com alta performance de carregamento."
        },
        {
          nome: "Integração Social",
          descricao: "Conecte seus feeds do Instagram e Facebook diretamente na página inicial."
        }
      ]
    },
    {
      titulo: "Transparência Total",
      icone: ShieldCheck,
      descricaoSecao: "Atraia investidores com uma prestação de contas profissional.",
      features: [
        {
          nome: "Cofre de Documentos",
          descricao: "Repositório seguro para estatutos, atas e documentos oficiais de fácil acesso."
        },
        {
          nome: "Projetos Incentivados",
          descricao: "Páginas dedicadas para prestação de contas de leis de incentivo e parcerias públicas."
        },
        {
          nome: "Relatórios de Impacto",
          descricao: "Mostre os resultados sociais e esportivos do seu clube para a comunidade."
        }
      ]
    },
    {
      titulo: "Hub de Receitas",
      icone: Target,
      descricaoSecao: "Transforme o portal oficial em um gerador de novos patrocínios.",
      features: [
        {
          nome: "Gestão de Banners",
          descricao: "Controle de espaços publicitários com métricas de visualização para patrocinadores."
        },
        {
          nome: "Páginas de Marcas",
          descricao: "Crie áreas exclusivas para contar a história e os benefícios dos seus parceiros."
        },
        {
          nome: "Captação de Leads",
          descricao: "Formulários integrados para interessados em apoiar ou patrocinar o clube."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#f8f9fa] text-zinc-900 pt-28 pb-16 selection:bg-lime-400 selection:text-zinc-950 overflow-hidden">
      
      {/* Header / Hero em Duas Colunas */}
      <section className="max-w-7xl mx-auto px-6 mb-40 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Coluna da Esquerda: Headline, Copy, CTA e Prova Social */}
          <div className="lg:col-span-6 text-left order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-lime-500/10 border border-lime-500/20 text-lime-600 text-[11px] font-black tracking-widest uppercase mb-4 animate-fade-in">
              <Sparkles className="w-3.5 h-3.5 text-lime-600" /> O sistema mais completo para clubes
            </div>
            
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-display font-black tracking-tight text-zinc-900 leading-[1.15] mb-4">
              Sua Vitrine Oficial,<br />
              <span className="text-lime-600 block mt-1 text-xl sm:text-2xl lg:text-3xl">Profissional e Transparente.</span>
            </h1>
            
            <div className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-light mb-6 max-w-xl space-y-2.5">
              <p>
                O <strong className="text-zinc-900 font-bold">TimesPage</strong> é o construtor definitivo para clubes que buscam autoridade digital. Crie seu portal oficial, gerencie notícias, preste contas e atraia patrocinadores com uma estrutura de elite.
              </p>
              <p className="font-medium text-zinc-900 border-l-2 border-lime-500 pl-3 py-1 bg-lime-50/50 rounded-r">
                Sua marca merece estar no topo.<br />
                <span className="text-lime-700 font-bold">O TimesPage coloca seu clube no mapa.</span>
              </p>
            </div>
            
            {/* Ações / CTA */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-6">
              <button className="px-6 py-3 bg-lime-400 text-zinc-950 rounded-xl font-bold text-xs tracking-wide uppercase hover:bg-lime-300 transition-all transform hover:scale-105 shadow-lg shadow-lime-400/20 flex items-center justify-center gap-2 group">
                <span>Agendar Demonstração</span> 
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform stroke-[3]" />
              </button>
              <button 
                onClick={() => {
                  const el = document.getElementById('funcionalidades');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-5 py-3 bg-white hover:bg-zinc-100 border border-zinc-200 text-zinc-700 rounded-xl font-bold text-xs tracking-wide transition-all flex items-center justify-center shadow-2xs"
              >
                VER FUNCIONALIDADES
              </button>
            </div>

            {/* Prova Social */}
            <div className="pt-4 border-t border-zinc-200/80 max-w-lg">
              <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-2 block">
                Presença Digital de Elite no Futebol Amador
              </p>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                <div className="flex -space-x-1.5 shrink-0">
                  <div className="w-6 h-6 rounded-full bg-zinc-900 border border-white flex items-center justify-center font-black text-[7px] text-lime-400 shadow-2xs">
                    G4
                  </div>
                  <div className="w-6 h-6 rounded-full bg-lime-600 border border-white flex items-center justify-center font-black text-[7px] text-white shadow-2xs">
                    RV
                  </div>
                  <div className="w-6 h-6 rounded-full bg-blue-600 border border-white flex items-center justify-center font-black text-[7px] text-white shadow-2xs">
                    FC
                  </div>
                  <div className="w-6 h-6 rounded-full bg-amber-500 border border-white flex items-center justify-center font-black text-[7px] text-zinc-950 shadow-2xs">
                    +20
                  </div>
                </div>
                <p className="text-[11px] text-zinc-500 leading-snug">
                  <strong className="text-zinc-900 font-bold">Portais otimizados</strong> para SEO que geram autoridade e facilitam a busca por novos parceiros e apoiadores.
                </p>
              </div>
            </div>
          </div>

          {/* Coluna da Direita: Mockup */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-tr from-lime-400/20 via-zinc-200/50 to-lime-400/10 rounded-3xl blur-xl opacity-60 z-0" />
              
              <div className="relative z-10 bg-white border border-zinc-200 rounded-2xl overflow-hidden shadow-2xl">
                {/* Topbar da Janela */}
                <div className="px-4 py-3 bg-zinc-50 border-b border-zinc-100 flex justify-between items-center">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-400 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-400 inline-block" />
                  </div>
                  
                  <div className="bg-white border border-zinc-200/80 px-3 py-0.5 rounded text-[10px] text-zinc-400 font-mono tracking-tight shadow-2xs">
                    timespro.com.br/timespage
                  </div>

                  <div className="flex items-center gap-1.5">
                    <div className="w-10 h-1 bg-zinc-200 rounded-full" />
                  </div>
                </div>

                {/* Área de Mockup */}
                <div className="relative aspect-[16/10] bg-zinc-100 flex items-center justify-center overflow-hidden group">
                  <img 
                    src={toolsImg} 
                    alt="Demonstração TimesPage" 
                    className={`w-full h-full object-cover object-top transition-transform duration-700 ${isVideoPlaying ? 'scale-105 filter blur-xs brightness-90' : 'group-hover:scale-[1.02]'}`}
                  />

                  {!isVideoPlaying ? (
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-zinc-950/10 backdrop-blur-[0px] transition-all group-hover:bg-zinc-950/5">
                      <button 
                        onClick={() => setIsVideoPlaying(true)}
                        className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-lime-400 text-zinc-950 flex items-center justify-center shadow-xl shadow-lime-400/40 transform transition-all group-hover:scale-110 group-hover:bg-lime-300"
                        aria-label="Reproduzir vídeo"
                      >
                        <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-zinc-950 ml-1" />
                      </button>
                    </div>
                  ) : (
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/95 px-6 text-center animate-fade-in">
                      <div className="w-14 h-14 rounded-full bg-lime-400/20 border border-lime-400 flex items-center justify-center mb-3 text-lime-600 animate-pulse">
                        <Play className="w-6 h-6 fill-lime-600" />
                      </div>
                      <h3 className="text-lg font-display font-bold text-zinc-900 mb-1">Demonstração Visual</h3>
                      <p className="text-xs text-zinc-500 max-w-xs mb-5">
                        Conheça o editor visual e como gerenciar as notícias e patrocinadores do seu clube.
                      </p>
                      <button 
                        onClick={() => setIsVideoPlaying(false)}
                        className="px-4 py-1.5 bg-zinc-900 hover:bg-zinc-800 text-white text-[10px] font-bold uppercase tracking-widest rounded-full transition-all shadow-sm"
                      >
                        Fechar Player
                      </button>
                    </div>
                  )}
                </div>

                <div className="bg-white px-4 py-2 border-t border-zinc-100 flex items-center justify-between text-[11px] text-zinc-500">
                  <span className="flex items-center gap-1.5 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-lime-500" /> Site Oficial e Transparência
                  </span>
                  <span className="font-bold text-lime-600 uppercase tracking-wider text-[9px] bg-lime-50 px-2 py-0.5 rounded border border-lime-100">
                    Módulo de Presença Digital
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Problemas */}
      <section className="max-w-7xl mx-auto px-6 mb-28">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-display font-black text-zinc-900 tracking-tight mb-4">
            Por que um Site Oficial?
          </h2>
          <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
            Muitos clubes ignoram o poder de sua própria plataforma e acabam deixando dinheiro e autoridade na mesa.<br />
            <strong className="text-lime-700 font-bold">O TimesPage foi criado para profissionalizar sua comunicação.</strong>
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {problemas.map((prob, index) => {
            const Icon = prob.icon;
            return (
              <div 
                key={index}
                className="bg-white border border-zinc-200 hover:border-lime-500 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group text-left relative overflow-hidden"
              >
                <div className="absolute -right-4 -bottom-4 text-zinc-100 group-hover:text-lime-50 transition-colors duration-500 pointer-events-none select-none">
                  <Icon className="w-32 h-32 stroke-[1]" />
                </div>

                <div className="relative z-10">
                  <div className="w-10 h-10 rounded-lg bg-lime-50 border border-lime-100 flex items-center justify-center text-lime-600 mb-4 group-hover:bg-lime-400 group-hover:text-zinc-950 transition-colors duration-300">
                    <Icon className="w-5 h-5" />
                  </div>
                  
                  <span className="text-[10px] font-bold text-lime-700 uppercase tracking-wider block mb-1">
                    {prob.tag}
                  </span>
                  
                  <h3 className="text-base font-display font-black text-zinc-900 mb-2 leading-snug">
                    {prob.title}
                  </h3>
                  
                  <p className="text-zinc-600 text-xs leading-relaxed font-light">
                    {prob.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Seção de Funcionalidades (Notebook) */}
      <section id="funcionalidades" className="w-full bg-zinc-950 py-12 sm:py-20 mb-28 relative overflow-hidden border-y border-zinc-900 shadow-2xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-lime-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-lime-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 px-6 relative z-10">
          <h2 className="text-3xl sm:text-4xl font-display font-black text-white mb-3 tracking-tight">
            Tecnologia de Elite para o <span className="text-lime-400">Seu Portal</span>
          </h2>
          <p className="text-zinc-400 text-xs sm:text-sm font-light">
            Conheça as ferramentas integradas que vão transformar a comunicação e a transparência do seu clube.
          </p>
        </div>

        <div className="max-w-[1280px] w-full mx-auto px-6 sm:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-0 items-start relative z-10">
            {/* Coluna do Notebook */}
            <div className="lg:col-span-6 relative z-10 pt-2 lg:pt-0">
              <div className="absolute inset-0 bg-gradient-to-tr from-lime-400/20 via-lime-500/10 to-transparent rounded-3xl blur-2xl transform -rotate-2" />
              <div className="w-full lg:w-[110%] xl:w-[115%] relative transform -rotate-3 hover:-rotate-2 origin-left transition-all duration-700 ease-out shadow-2xl rounded-2xl group cursor-pointer">
                <div className="bg-zinc-800 p-2 sm:p-2.5 rounded-t-xl sm:rounded-t-2xl border-2 sm:border-3 border-zinc-700 shadow-inner">
                  <div className="w-1 sm:w-1.5 h-1 sm:h-1.5 bg-zinc-600 rounded-full mx-auto mb-1.5 sm:mb-2" />
                  <div className="bg-zinc-950 rounded-lg overflow-hidden border border-zinc-900 aspect-video relative">
                    <img 
                      src={toolsImg} 
                      alt="Interface do TimesPage no Notebook" 
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-102"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-white/10 pointer-events-none" />
                  </div>
                </div>
                <div className="relative">
                  <div className="bg-zinc-700 h-1.5 sm:h-2 rounded-b-xs border-t border-zinc-600/50 flex items-center justify-center">
                    <div className="w-10 sm:w-14 h-0.5 bg-zinc-800 rounded-full" />
                  </div>
                  <div className="bg-zinc-400 h-1 sm:h-1.5 mx-auto w-[101%] sm:w-[102%] rounded-b-md shadow-lg" />
                </div>
              </div>
            </div>

            {/* Coluna das Abas */}
            <div className="lg:col-span-6 relative z-30 lg:-ml-6 xl:-ml-10 pt-6 lg:pt-0">
              <div className="bg-zinc-900 p-1 sm:p-1.5 rounded-xl sm:rounded-2xl border border-zinc-800/80 grid grid-cols-2 sm:grid-cols-4 gap-1 mb-5 sm:mb-6 shadow-2xl">
                {modulosFuncionalidades.map((mod, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveModuleIndex(idx)}
                    className={`py-1.5 sm:py-2 px-1 sm:px-2 rounded-lg sm:rounded-xl text-[10px] sm:text-xs font-bold tracking-wide uppercase transition-all duration-300 truncate ${
                      activeModuleIndex === idx
                        ? "bg-lime-400 text-zinc-950 shadow-md"
                        : "text-zinc-400 hover:text-white hover:bg-zinc-800/50"
                    }`}
                  >
                    {mod.titulo.split(' ')[0]}
                  </button>
                ))}
              </div>

              <div className="relative min-h-[320px]">
                {modulosFuncionalidades.map((mod, idx) => {
                  const IconeModulo = mod.icone;
                  const isActive = activeModuleIndex === idx;
                  return (
                    <div 
                      key={idx}
                      className={`transition-all duration-500 absolute inset-0 w-full ${
                        isActive 
                          ? "opacity-100 translate-x-0 pointer-events-auto relative z-10" 
                          : "opacity-0 translate-x-8 pointer-events-none hidden"
                      }`}
                    >
                      <div className="bg-zinc-900/95 backdrop-blur-md border border-zinc-800 rounded-2xl p-5 sm:p-7 shadow-[0_0_40px_rgba(0,0,0,0.8)] lg:shadow-[-20px_0_45px_rgba(0,0,0,0.95)] relative overflow-hidden h-full flex flex-col justify-between">
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-lime-400" />
                        <div>
                          <div className="flex items-start gap-3.5 mb-5">
                            <div className="w-10 h-10 rounded-xl bg-lime-400/10 border border-lime-400/20 flex items-center justify-center text-lime-400 shrink-0">
                              <IconeModulo className="w-5 h-5" />
                            </div>
                            <div>
                              <h3 className="text-sm sm:text-base font-display font-bold text-white mb-0.5">
                                {mod.titulo}
                              </h3>
                              <p className="text-[11px] text-zinc-400 font-light">
                                {mod.descricaoSecao}
                              </p>
                            </div>
                          </div>
                          <div className="grid grid-cols-1 gap-3.5 pt-3.5 border-t border-zinc-800/60">
                            {mod.features.map((feat, fIdx) => (
                              <div key={fIdx} className="flex gap-2.5 items-start">
                                <div className="w-3.5 h-3.5 rounded-full bg-lime-500/10 flex items-center justify-center text-lime-400 mt-0.5 shrink-0">
                                  <div className="w-1 h-1 rounded-full bg-lime-400" />
                                </div>
                                <div>
                                  <h4 className="text-xs font-bold text-zinc-100 mb-0.5">
                                    {feat.nome}
                                  </h4>
                                  <p className="text-[11px] sm:text-xs text-zinc-400 font-light leading-relaxed">
                                    {feat.descricao}
                                  </p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="flex items-center justify-between pt-5 mt-5 border-t border-zinc-800/40">
                          <div className="flex gap-1.5">
                            {modulosFuncionalidades.map((_, dotIdx) => (
                              <button
                                key={dotIdx}
                                onClick={() => setActiveModuleIndex(dotIdx)}
                                className={`h-1 rounded-full transition-all duration-300 ${
                                  activeModuleIndex === dotIdx ? "w-5 bg-lime-400" : "w-1.5 bg-zinc-700"
                                }`}
                              />
                            ))}
                          </div>
                          <span className="text-[9px] text-zinc-500 uppercase tracking-widest font-bold">
                            Módulo {idx + 1} de {modulosFuncionalidades.length}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="max-w-7xl mx-auto px-6 mb-28">
        <div className="bg-zinc-950 rounded-3xl p-12 text-center relative overflow-hidden border border-white/10 shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-lime-400/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl font-display font-black text-white mb-6 tracking-tight">
              Pronto para Colocar seu Clube <span className="text-lime-400">no Mapa Digital?</span>
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base mb-10 max-w-2xl mx-auto font-light leading-relaxed">
              Não perca mais tempo sendo invisível para patrocinadores e torcedores. Tenha seu portal oficial com a tecnologia mais avançada do mercado esportivo.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="px-8 py-4 bg-lime-400 text-zinc-950 rounded-xl font-bold text-sm uppercase tracking-wide hover:bg-lime-300 transition-all transform hover:scale-105 shadow-lg shadow-lime-400/20 flex items-center gap-2">
                Agendar Demonstração Gratuita <ArrowRight className="w-4 h-4" />
              </button>
              <button className="px-8 py-4 bg-transparent text-white border border-white/20 rounded-xl font-bold text-sm uppercase tracking-wide hover:bg-white/5 transition-all">
                Ver Planos e Preços
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Simples */}
      <footer className="text-center py-8 border-t border-zinc-200">
        <p className="text-xs text-zinc-400 uppercase tracking-widest font-bold">
          © 2026 TimesPro SaaS. Parte do ecossistema de gestão esportiva.
        </p>
      </footer>
    </div>
  );
}
