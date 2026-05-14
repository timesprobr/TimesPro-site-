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
  Trophy
} from "lucide-react";
import dashCrmImg from "../../imagens/dash crm.png";
import dashCrmLightImg from "../../imagens/dash crm ligth.png";

export default function SoftwareCrmPage({ onNavigate }: { onNavigate: (page: string) => void }) {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [activeTab, setActiveTab] = useState<"light" | "dark">("light");

  const features = [
    {
      icon: DollarSign,
      title: "DRE & Previsibilidade Financeira",
      description: "Saiba exatamente para onde vai cada centavo. Automatize o fluxo de caixa, projete receitas de patrocínios e elimine o rombo financeiro no final do mês.",
      metrics: "+340% de controle de caixa"
    },
    {
      icon: Users,
      title: "Elenco & Gestão Técnica",
      description: "Ficha médica, histórico de lesões, minutagem em campo, controle de cartões e estatísticas individuais. O verdadeiro Raio-X do seu plantel na palma da mão.",
      metrics: "Dados centralizados 100%"
    },
    {
      icon: Zap,
      title: "Mensalidades & Inadimplência Zero",
      description: "Esqueça a cobrança manual e o desgaste com atletas. Régua de cobrança automática via Pix/Cartão com baixa inteligente e bloqueio de inadimplentes na súmula.",
      metrics: "Inadimplência reduzida a 2%"
    },
    {
      icon: Package,
      title: "Almoxarifado & Patrimônio",
      description: "Controle de saída e devolução de uniformes, bolas, coletes e materiais de treino. Chega de prejuízo com sumiço de equipamentos a cada temporada.",
      metrics: "Zero extravio de material"
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
    <div className="min-h-screen bg-[#f8f9fa] text-zinc-900 pt-32 pb-20 selection:bg-lime-400 selection:text-zinc-950 overflow-hidden">
      
      {/* Header / Hero em Duas Colunas */}
      <section className="max-w-7xl mx-auto px-6 mb-28 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Coluna da Esquerda: Headline, Copy, CTA e Prova Social */}
          <div className="lg:col-span-6 text-left order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-lime-500/10 border border-lime-500/20 text-lime-600 text-xs font-black tracking-widest uppercase mb-6 animate-fade-in">
              <Sparkles className="w-3.5 h-3.5 text-lime-600" /> Sistema Principal • Controladoria G4
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-black tracking-tight text-zinc-900 leading-[1.05] mb-6">
              A Controladoria Definitiva para Clubes que Buscam o <span className="text-lime-600">Topo.</span>
            </h1>
            
            <p className="text-base sm:text-lg text-zinc-600 leading-relaxed font-light mb-8 max-w-xl">
              Deixe a adivinhação e o amadorismo no passado. O <strong className="text-zinc-900 font-bold">TimesPro CRM</strong> centraliza finanças, comissão técnica, mensalidades e patrimônio em uma única tela focada em resultado e previsibilidade.
            </p>
            
            {/* Ações / CTA */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
              <button className="px-8 py-4 bg-lime-400 text-zinc-950 rounded-xl font-bold text-sm tracking-wide uppercase hover:bg-lime-300 transition-all transform hover:scale-105 shadow-xl shadow-lime-400/20 flex items-center justify-center gap-2 group">
                <span>Agendar Demonstração</span> 
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform stroke-[3]" />
              </button>
              <button 
                onClick={() => onNavigate("home")} 
                className="px-6 py-4 bg-white hover:bg-zinc-100 border border-zinc-200 text-zinc-700 rounded-xl font-bold text-sm tracking-wide transition-all flex items-center justify-center shadow-sm"
              >
                Voltar para o Início
              </button>
            </div>

            {/* Prova Social Acoplada na Base da Esquerda */}
            <div className="pt-6 border-t border-zinc-200/80 max-w-lg">
              <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-3 block">
                Resultados Comprovados no Futebol Amador
              </p>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                {/* Avatares / Escudos Simulados */}
                <div className="flex -space-x-2 shrink-0">
                  <div className="w-8 h-8 rounded-full bg-zinc-900 border-2 border-white flex items-center justify-center font-black text-[8px] text-lime-400 shadow-sm">
                    G4
                  </div>
                  <div className="w-8 h-8 rounded-full bg-lime-600 border-2 border-white flex items-center justify-center font-black text-[8px] text-white shadow-sm">
                    RV
                  </div>
                  <div className="w-8 h-8 rounded-full bg-blue-600 border-2 border-white flex items-center justify-center font-black text-[8px] text-white shadow-sm">
                    FC
                  </div>
                  <div className="w-8 h-8 rounded-full bg-amber-500 border-2 border-white flex items-center justify-center font-black text-[8px] text-zinc-950 shadow-sm">
                    +120
                  </div>
                </div>
                {/* Copy da Prova Social */}
                <p className="text-xs text-zinc-500 leading-snug">
                  <strong className="text-zinc-900 font-bold">R$ 4.2M+ transacionados</strong> com 98.4% de taxa média de adimplência em mais de 120 clubes ativos no país.
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

      {/* Grid de Features - Clean & Minimalista */}
      <section className="max-w-7xl mx-auto px-6 mb-28">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-display font-black text-zinc-900 tracking-tight mb-3">
            Engenharia de Software para o seu Clube
          </h2>
          <p className="text-zinc-600 text-sm sm:text-base">
            Cada funcionalidade foi lapidada com foco absoluto em dar clareza financeira, poupar tempo da diretoria e profissionalizar o trato com atletas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feat, index) => {
            const Icon = feat.icon;
            return (
              <div 
                key={index}
                className="bg-white border border-zinc-200 hover:border-lime-500 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group text-left"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-lime-50 border border-lime-100 flex items-center justify-center text-lime-600 mb-6 group-hover:bg-lime-400 group-hover:text-zinc-950 transition-colors duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-display font-black text-zinc-900 mb-2">
                    {feat.title}
                  </h3>
                  <p className="text-zinc-600 text-sm leading-relaxed mb-6 font-light">
                    {feat.description}
                  </p>
                </div>
                
                <div className="pt-4 border-t border-zinc-100 flex items-center justify-between text-xs font-bold">
                  <span className="text-zinc-400 uppercase tracking-wider text-[10px]">Impacto Direto</span>
                  <span className="text-lime-700 bg-lime-50 px-2.5 py-1 rounded-md border border-lime-200/60 font-mono">
                    {feat.metrics}
                  </span>
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
