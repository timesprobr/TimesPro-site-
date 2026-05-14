import React, { useState } from "react";
import { 
  TrendingUp, 
  Users, 
  DollarSign, 
  Package, 
  CheckCircle2, 
  Play, 
  ArrowRight, 
  ShieldCheck, 
  Zap,
  ChevronRight,
  Sparkles,
  Trophy,
  Clock,
  FileText,
  TrendingDown,
  Megaphone
} from "lucide-react";
import dashCrmImg from "../../imagens/dash crm.png";
import dashCrmLightImg from "../../imagens/dash crm ligth.png";

export default function SoftwareCrmPage({ onNavigate }: { onNavigate: (page: string) => void }) {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [activeTab, setActiveTab] = useState<"light" | "dark">("light");

  const problemas = [
    {
      icon: Clock,
      tag: "Diretoria Sobrecarregada",
      title: "Falta Tempo para a Diretoria",
      description: "A rotina do clube vira correria, decisões atrasam e a gestão fica no improviso por falta de processos e organização."
    },
    {
      icon: FileText,
      tag: "Desorganização Administrativa",
      title: "Documentos Perdidos e Falta de Controle",
      description: "Mensalidades, contratos, atletas e informações importantes espalhadas em planilhas, WhatsApp e papelada."
    },
    {
      icon: TrendingDown,
      tag: "Receita Travada",
      title: "Dificuldade para Captar Recursos",
      description: "O clube depende sempre das mesmas fontes de renda e perde oportunidades por falta de estrutura e organização."
    },
    {
      icon: Megaphone,
      tag: "Pouco Engajamento",
      title: "Sua Torcida Poderia Estar Mais Próxima",
      description: "Falta presença digital, comunicação e ferramentas para envolver torcedores, apoiadores e patrocinadores."
    }
  ];

  const depoimentos = [
    {
      quote: "Antes do TimesPro CRM, a nossa gestão era no caderno e no grupo de WhatsApp. Hoje temos DRE auditável, captação recorde de patrocínios e controle total do elenco. É a G4 do nosso futebol.",
      author: "Marcos 'Tubarão' Silva",
      role: "Presidente Executivo",
      club: "Real Várzea F.C."
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
              <Sparkles className="w-3.5 h-3.5 text-lime-600" /> Sistema Principal • Controladoria G4
            </div>
            
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-display font-black tracking-tight text-zinc-900 leading-[1.15] mb-4">
              Falta Tempo, Falta Organização e o Dinheiro Nunca Sobra.<br />
              <span className="text-lime-600 block mt-1 text-xl sm:text-2xl lg:text-3xl">Essa é a realidade da maioria dos clubes.</span>
            </h1>
            
            <div className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-light mb-6 max-w-xl space-y-2.5">
              <p>
                O <strong className="text-zinc-900 font-bold">TimesPro CRM</strong> foi criado para trazer controle, organização e novas fontes de receita para a gestão do clube. Financeiro, atletas, documentos, mensalidades, ingressos, vaquinha online e operação administrativa em um só lugar.
              </p>
              <p className="font-medium text-zinc-900 border-l-2 border-lime-500 pl-3 py-1 bg-lime-50/50 rounded-r">
                Seu time joga dentro de campo.<br />
                <span className="text-lime-700 font-bold">O TimesPro ajuda você a vencer fora dele.</span>
              </p>
            </div>
            
            {/* Ações / CTA */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-6">
              <button className="px-6 py-3 bg-lime-400 text-zinc-950 rounded-xl font-bold text-xs tracking-wide uppercase hover:bg-lime-300 transition-all transform hover:scale-105 shadow-lg shadow-lime-400/20 flex items-center justify-center gap-2 group">
                <span>Agendar Demonstração</span> 
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform stroke-[3]" />
              </button>
              <button 
                onClick={() => onNavigate("home")} 
                className="px-5 py-3 bg-white hover:bg-zinc-100 border border-zinc-200 text-zinc-700 rounded-xl font-bold text-xs tracking-wide transition-all flex items-center justify-center shadow-2xs"
              >
                Voltar para o Início
              </button>
            </div>

            {/* Prova Social Acoplada na Base da Esquerda */}
            <div className="pt-4 border-t border-zinc-200/80 max-w-lg">
              <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-2 block">
                Resultados Comprovados no Futebol Amador
              </p>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                {/* Avatares / Escudos Simulados */}
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
                {/* Copy da Prova Social */}
                <p className="text-[11px] text-zinc-500 leading-snug">
                  <strong className="text-zinc-900 font-bold">R$ 40 mil+ transacionados</strong> com 98.4% de taxa média de adimplência em mais de 20 clubes ativos.
                </p>
              </div>
            </div>

          </div>

          {/* Coluna da Direita: O Vídeo / Player Interativo */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="relative">
              {/* Sombra e Efeito Glow de Fundo */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-lime-400/20 via-zinc-200/50 to-lime-400/10 rounded-3xl blur-xl opacity-60 z-0" />
              
              {/* Janela de Software Premium */}
              <div className="relative z-10 bg-white border border-zinc-200 rounded-2xl overflow-hidden shadow-2xl">
                
                {/* Topbar da Janela (Light Theme) */}
                <div className="px-4 py-3 bg-zinc-50 border-b border-zinc-100 flex justify-between items-center">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-400 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-400 inline-block" />
                  </div>
                  
                  <div className="bg-white border border-zinc-200/80 px-3 py-0.5 rounded text-[10px] text-zinc-400 font-mono tracking-tight shadow-2xs">
                    timespro.com.br/crm
                  </div>

                  <div className="flex items-center gap-1.5">
                    <button 
                      onClick={() => setActiveTab("light")}
                      className={`px-2 py-0.5 rounded text-[10px] font-bold tracking-wide transition-colors ${activeTab === 'light' ? 'bg-zinc-900 text-white' : 'text-zinc-400 hover:text-zinc-600'}`}
                    >
                      Light
                    </button>
                    <button 
                      onClick={() => setActiveTab("dark")}
                      className={`px-2 py-0.5 rounded text-[10px] font-bold tracking-wide transition-colors ${activeTab === 'dark' ? 'bg-zinc-900 text-white' : 'text-zinc-400 hover:text-zinc-600'}`}
                    >
                      Dark
                    </button>
                  </div>
                </div>

                {/* Área de Reprodução / Mockup */}
                <div className="relative aspect-[16/10] bg-zinc-100 flex items-center justify-center overflow-hidden group">
                  <img 
                    src={activeTab === "light" ? dashCrmLightImg : dashCrmImg} 
                    alt="Demonstração TimesPro CRM" 
                    className={`w-full h-full object-cover object-top transition-transform duration-700 ${isVideoPlaying ? 'scale-105 filter blur-xs brightness-90' : 'group-hover:scale-[1.02]'}`}
                  />

                  {/* Player Overlay de Vídeo */}
                  {!isVideoPlaying ? (
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-zinc-950/20 backdrop-blur-[1px] transition-all group-hover:bg-zinc-950/10">
                      <button 
                        onClick={() => setIsVideoPlaying(true)}
                        className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-lime-400 text-zinc-950 flex items-center justify-center shadow-xl shadow-lime-400/40 transform transition-all group-hover:scale-110 group-hover:bg-lime-300"
                        aria-label="Reproduzir vídeo de demonstração"
                      >
                        <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-zinc-950 ml-1" />
                      </button>
                      <span className="mt-4 text-xs font-bold tracking-widest text-zinc-900 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-md border border-zinc-200 uppercase">
                        Ver Vídeo de Apresentação
                      </span>
                    </div>
                  ) : (
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/95 px-6 text-center animate-fade-in">
                      <div className="w-14 h-14 rounded-full bg-lime-400/20 border border-lime-400 flex items-center justify-center mb-3 text-lime-600 animate-pulse">
                        <Play className="w-6 h-6 fill-lime-600" />
                      </div>
                      <h3 className="text-lg font-display font-bold text-zinc-900 mb-1">Vídeo Institucional em Execução</h3>
                      <p className="text-xs text-zinc-500 max-w-xs mb-5">
                        Aqui o clube assiste em detalhes a conciliação bancária, fechamento de folha de atletas e emissão de boletos integrados.
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

                {/* Legenda de Status da Janela */}
                <div className="bg-white px-4 py-2 border-t border-zinc-100 flex items-center justify-between text-[11px] text-zinc-500">
                  <span className="flex items-center gap-1.5 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-lime-500" /> Súmula e Fluxo de Caixa Auditados
                  </span>
                  <span className="font-bold text-lime-600 uppercase tracking-wider text-[9px] bg-lime-50 px-2 py-0.5 rounded border border-lime-100">
                    Módulo de Operação
                  </span>
                </div>

              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Seção Foco no Problema */}
      <section className="max-w-7xl mx-auto px-6 mb-28">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-display font-black text-zinc-900 tracking-tight mb-4">
            Talvez o Problema do Seu Clube Não Seja Dentro de Campo.
          </h2>
          <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
            A maioria dos clubes sofre com falta de tempo, desorganização e dificuldade para gerar receita.<br />
            <strong className="text-lime-700 font-bold">O TimesPro CRM foi criado para resolver exatamente isso.</strong>
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
                {/* Ícone Grande de Fundo (Transparente / Estiloso) */}
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

      {/* Depoimento / Prova Social Centralizada */}
      <section className="max-w-4xl mx-auto px-6 mb-28 text-center">
        <div className="bg-white border border-zinc-200 rounded-3xl p-8 sm:p-12 shadow-lg relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-lime-500 via-lime-400 to-lime-600" />
          
          <div className="w-12 h-12 rounded-full bg-zinc-100 border border-zinc-200 flex items-center justify-center mx-auto mb-6 text-zinc-400 shadow-2xs">
            <Trophy className="w-6 h-6 text-lime-600" />
          </div>

          <blockquote className="text-lg sm:text-xl text-zinc-800 italic leading-relaxed mb-6 font-serif">
            "{depoimentos[0].quote}"
          </blockquote>

          <div className="inline-flex items-center gap-3 bg-zinc-50 px-4 py-2 rounded-full border border-zinc-100">
            <div className="w-8 h-8 rounded-full bg-zinc-900 text-lime-400 flex items-center justify-center font-bold text-xs">
              MS
            </div>
            <div className="text-left">
              <div className="text-xs font-bold text-zinc-900">{depoimentos[0].author}</div>
              <div className="text-[10px] text-zinc-500">{depoimentos[0].role} • {depoimentos[0].club}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Premium */}
      <section className="max-w-3xl mx-auto px-6 text-center bg-zinc-900 text-white rounded-3xl p-12 shadow-2xl relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-lime-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <h2 className="text-3xl sm:text-4xl font-display font-black mb-4">
          Pronto para Subir de Patamar?
        </h2>
        <p className="text-zinc-400 text-sm sm:text-base mb-8 max-w-xl mx-auto font-light">
          A implementação do TimesPro CRM leva menos de 48 horas. Assuma as rédeas da sua gestão e aumente a receita do seu clube nesta temporada.
        </p>
        <button className="px-8 py-4 bg-lime-400 text-zinc-950 rounded-xl font-bold text-sm uppercase tracking-wider hover:bg-lime-300 transition-all transform hover:scale-105 shadow-xl shadow-lime-400/20">
          Solicitar Proposta Comercial
        </button>
      </section>

    </div>
  );
}
