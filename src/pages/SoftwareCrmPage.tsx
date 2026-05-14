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
  Megaphone,
  Calculator,
  PiggyBank,
  Percent,
  CreditCard,
  Wallet,
  Check
} from "lucide-react";
import dashCrmImg from "../../imagens/dash crm.png";
import dashCrmLightImg from "../../imagens/dash crm ligth.png";

export default function SoftwareCrmPage({ onNavigate }: { onNavigate: (page: string) => void }) {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [activeTab, setActiveTab] = useState<"light" | "dark">("light");
  const [activeModuleIndex, setActiveModuleIndex] = useState(0);
  const [isPlanoAnual, setIsPlanoAnual] = useState(true);
  const [simAtletas, setSimAtletas] = useState(80);
  const [simMensalidade, setSimMensalidade] = useState(120);
  const [simVaquinha, setSimVaquinha] = useState(15000);

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

  const modulosFuncionalidades = [
    {
      titulo: "Finanças & Inteligência",
      icone: DollarSign,
      descricaoSecao: "Controle absoluto do fluxo de caixa e automação das cobranças.",
      features: [
        {
          nome: "Dashboard Executivo",
          descricao: "Análise de dados avançada com gráficos intuitivos, indicadores de adimplência e projeções financeiras em tempo real."
        },
        {
          nome: "Gestão Financeira em Tempo Real",
          descricao: "Monitoramento de contas a pagar e receitas com categorização inteligente, fluxo de caixa e relatórios gerenciais."
        },
        {
          nome: "Planos de Mensalidades",
          descricao: "Criação de planos com cobrança automatizada via Pix ou Cartão, excelente para gestão de escolinhas e categorias de base."
        }
      ]
    },
    {
      titulo: "Elenco & Estrutura",
      icone: Users,
      descricaoSecao: "Profissionalização do departamento de futebol e logística interna.",
      features: [
        {
          nome: "Cadastro e Controle de Atletas",
          descricao: "Prontuário completo do atleta gerenciando contratos, mensalidades, histórico de lesões e minutagem nas partidas."
        },
        {
          nome: "Agenda Inteligente",
          descricao: "Calendário organizado de treinos e competições com disparos de lembretes automáticos para toda a comissão técnica."
        },
        {
          nome: "Cofre de Documentos Digital",
          descricao: "Armazene e organize atestados, certidões e termos legais na nuvem de forma totalmente categorizada e rastreável."
        }
      ]
    },
    {
      titulo: "Captação & Receitas",
      icone: Sparkles,
      descricaoSecao: "Novas fontes de renda ativas para fortalecer o caixa do clube.",
      features: [
        {
          nome: "Vaquinha Online Nativa",
          descricao: "Criação ágil de campanhas de arrecadação transparentes para viagens, reformas ou projetos especiais do clube."
        },
        {
          nome: "Bilheteria e Ingressos",
          descricao: "Venda e gerencie ingressos das partidas com controle digital de acesso e liquidação direta na conta da instituição."
        },
        {
          nome: "Torcedores e Sócio-Torcedor",
          descricao: "Listagem da base de apoiadores e gestão de planos de sócio com carteirinha digital e benefícios exclusivos."
        }
      ]
    },
    {
      titulo: "Operação & Comunicação",
      icone: Megaphone,
      descricaoSecao: "Logística interna blindada e conexão de alto impacto com todos.",
      features: [
        {
          nome: "Controle de Almoxarifado",
          descricao: "Gerencie rigorosamente o estoque e os materiais do clube, desde bolas e coletes até uniformes de jogo."
        },
        {
          nome: "Disparos no WhatsApp Oficial",
          descricao: "Conecte o WhatsApp do clube e comunique convocações, novidades e avisos para todos com um único disparo."
        },
        {
          nome: "Automação de Lembretes",
          descricao: "Cobranças automáticas e réguas de relacionamento programadas enviadas diretamente por WhatsApp e e-mail."
        },
        {
          nome: "Gestão de Usuários e Permissões",
          descricao: "Cadastre membros da diretoria e comissão com níveis de acesso customizados, garantindo total segurança dos dados."
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

      {/* Tabela/Lista de Funcionalidades por Módulo com Notebook na Diagonal (Tema Escuro) */}
      <section className="w-full bg-zinc-950 py-12 sm:py-20 mb-28 relative overflow-hidden border-y border-zinc-900 shadow-2xl">
        {/* Luz de fundo decorativa */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-lime-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-lime-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 px-6 relative z-10">
          <h2 className="text-3xl sm:text-4xl font-display font-black text-white mb-3 tracking-tight">
            Tudo o que Seu Clube Precisa em <span className="text-lime-400">Um Só Lugar</span>
          </h2>
          <p className="text-zinc-400 text-xs sm:text-sm font-light">
            Conheça as ferramentas e módulos desenvolvidos sob medida para profissionalizar cada setor da sua instituição.
          </p>
        </div>

        {/* Container recalibrado para 1280px para uma leitura extremamente elegante e sem linhas longas demais */}
        <div className="max-w-[1280px] w-full mx-auto px-6 sm:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-0 items-start relative z-10">
            {/* Coluna da Esquerda: Notebook (O papel de baixo, alinhado à esquerda) */}
            <div className="lg:col-span-6 relative z-10 transition-all duration-700 ease-out pt-2 lg:pt-0">
              {/* Efeito de brilho poderoso por trás */}
              <div className="absolute inset-0 bg-gradient-to-tr from-lime-400/20 via-lime-500/10 to-transparent rounded-3xl blur-2xl transform -rotate-2" />
              
              {/* Laptop Container mais compacto e na proporção exata, transbordando na medida ideal */}
              <div className="w-full lg:w-[110%] xl:w-[115%] relative transform -rotate-3 hover:-rotate-2 origin-left transition-all duration-700 ease-out shadow-2xl rounded-2xl group cursor-pointer">
                {/* Tampa do Notebook (Moldura da Tela) */}
                <div className="bg-zinc-800 p-2 sm:p-2.5 rounded-t-xl sm:rounded-t-2xl border-2 sm:border-3 border-zinc-700 shadow-inner">
                  {/* WebCam dot */}
                  <div className="w-1 sm:w-1.5 h-1 sm:h-1.5 bg-zinc-600 rounded-full mx-auto mb-1.5 sm:mb-2" />
                  
                  {/* Tela */}
                  <div className="bg-zinc-950 rounded-lg overflow-hidden border border-zinc-900 aspect-video relative">
                    <img 
                      src={activeTab === "light" ? dashCrmLightImg : dashCrmImg} 
                      alt="Interface do Software CRM no Notebook" 
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-102"
                    />
                    {/* Overlay de reflexo premium */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-white/10 pointer-events-none" />
                  </div>
                </div>
                
                {/* Base do Laptop */}
                <div className="relative">
                  {/* Faixa metálica superior da base */}
                  <div className="bg-zinc-700 h-1.5 sm:h-2 rounded-b-xs border-t border-zinc-600/50 flex items-center justify-center">
                    <div className="w-10 sm:w-14 h-0.5 bg-zinc-800 rounded-full" />
                  </div>
                  {/* Base chanfrada inferior */}
                  <div className="bg-zinc-400 h-1 sm:h-1.5 mx-auto w-[101%] sm:w-[102%] rounded-b-md shadow-lg" />
                </div>
              </div>

              {/* Distintivo flutuante de autoridade mais sutil no canto inferior esquerdo */}
              <div className="absolute -bottom-5 left-0 sm:-bottom-3 sm:left-4 bg-zinc-900 border border-zinc-800 rounded-2xl p-2.5 sm:p-3 shadow-2xl flex items-center gap-2.5 z-20">
                <div className="w-7 sm:w-8 h-7 sm:h-8 rounded-xl bg-lime-400/10 text-lime-400 flex items-center justify-center font-bold shrink-0">
                  <CheckCircle2 className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-zinc-100 leading-none mb-0.5">Módulos Nativos</div>
                  <div className="text-[9px] text-zinc-400 leading-tight">Sem integrações complexas</div>
                </div>
              </div>
            </div>

            {/* Coluna da Direita: Carrossel/Abas de Funcionalidades (O papel de cima, cobrindo com precisão a lateral) */}
            <div className="lg:col-span-6 relative z-30 lg:-ml-6 xl:-ml-10 pt-6 lg:pt-0">
              {/* Navegação por Abas (Tabs) do Carrossel */}
              <div className="bg-zinc-900 p-1 sm:p-1.5 rounded-xl sm:rounded-2xl border border-zinc-800/80 grid grid-cols-2 sm:grid-cols-4 gap-1 mb-5 sm:mb-6 shadow-2xl">
                {["Finanças", "Elenco", "Receitas", "Operação"].map((label, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveModuleIndex(idx)}
                    className={`py-1.5 sm:py-2 px-1 sm:px-2 rounded-lg sm:rounded-xl text-[10px] sm:text-xs font-bold tracking-wide uppercase transition-all duration-300 truncate ${
                      activeModuleIndex === idx
                        ? "bg-lime-400 text-zinc-950 shadow-md"
                        : "text-zinc-400 hover:text-white hover:bg-zinc-800/50"
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>

              {/* Conteúdo do Módulo Ativo com padding e fontes na medida perfeita para uma leitura natural */}
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
                        {/* Detalhe lateral de cor */}
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-lime-400" />
                        
                        <div>
                          {/* Cabeçalho da Seção/Módulo */}
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

                          {/* Lista de Features do Módulo */}
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

                        {/* Indicador de passos/pontos na base do card */}
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

              {/* Controles Inferiores de Navegação com Setas */}
              <div className="flex items-center justify-between mt-5 px-1 sm:px-2">
                <button
                  onClick={() => setActiveModuleIndex((prev) => (prev === 0 ? modulosFuncionalidades.length - 1 : prev - 1))}
                  className="flex items-center gap-1.5 text-[11px] sm:text-xs text-zinc-400 hover:text-white transition-colors duration-200 group/btn"
                >
                  <div className="w-7 h-7 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover/btn:border-zinc-700 transition-colors">
                    <span className="text-xs font-bold">{"<"}</span>
                  </div>
                  <span className="hidden sm:inline font-medium">Módulo Anterior</span>
                </button>

                <button
                  onClick={() => setActiveModuleIndex((prev) => (prev === modulosFuncionalidades.length - 1 ? 0 : prev + 1))}
                  className="flex items-center gap-1.5 text-[11px] sm:text-xs text-zinc-400 hover:text-white transition-colors duration-200 group/btn"
                >
                  <span className="hidden sm:inline font-medium">Próximo Módulo</span>
                  <div className="w-7 h-7 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover/btn:border-zinc-700 transition-colors">
                    <span className="text-xs font-bold">{">"}</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Investimento e Simulador de Receitas (Planos) */}
      <section className="max-w-7xl mx-auto px-6 sm:px-12 mb-28">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-bold text-lime-600 bg-lime-50 px-3 py-1 rounded-full uppercase tracking-wider border border-lime-100 inline-block mb-3">
            Investimento Transparente
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-black text-zinc-900 mb-3 tracking-tight">
            Planos Sob Medida para o <span className="text-lime-600">Seu Crescimento</span>
          </h2>
          <p className="text-zinc-600 text-sm sm:text-base font-light">
            Sem pegadinhas ou custos ocultos. O TimesPro se paga nos primeiros meses apenas com a recuperação de mensalidades atrasadas.
          </p>

          {/* Toggle Mensal / Anual */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <span className={`text-xs font-bold transition-colors ${!isPlanoAnual ? "text-zinc-900" : "text-zinc-400"}`}>
              Mensal
            </span>
            <button
              onClick={() => setIsPlanoAnual(!isPlanoAnual)}
              className="w-12 h-6 bg-zinc-900 rounded-full p-1 relative transition-colors focus:outline-hidden"
              aria-label="Alternar entre plano mensal e anual"
            >
              <div 
                className={`w-4 h-4 bg-lime-400 rounded-full transition-transform duration-300 ${isPlanoAnual ? "translate-x-6" : "translate-x-0"}`} 
              />
            </button>
            <div className="flex items-center gap-2">
              <span className={`text-xs font-bold transition-colors ${isPlanoAnual ? "text-zinc-900" : "text-zinc-400"}`}>
                Anual
              </span>
              <span className="text-[10px] font-bold text-lime-800 bg-lime-100 px-2 py-0.5 rounded-md uppercase tracking-wider animate-pulse">
                2 Meses Grátis
              </span>
            </div>
          </div>
        </div>

        {/* Grid de Duas Colunas: O Plano à Esquerda e O Simulador à Direita */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Coluna da Esquerda: O Plano (Card Premium) */}
          <div className="lg:col-span-5 bg-zinc-950 text-white rounded-3xl p-8 sm:p-10 border-2 border-lime-400 shadow-2xl relative flex flex-col justify-between">
            {/* Tag Popular Superior */}
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-lime-400 text-zinc-950 font-bold text-[10px] uppercase tracking-widest px-4 py-1 rounded-full shadow-md">
              Acesso Ilimitado
            </div>

            <div>
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-xl font-display font-bold text-white mb-1">TimesPro CRM</h3>
                  <p className="text-xs text-zinc-400 font-light">Todas as 13 funcionalidades liberadas</p>
                </div>
                <div className="w-10 h-10 rounded-xl bg-lime-400/10 flex items-center justify-center text-lime-400 shrink-0">
                  <Sparkles className="w-5 h-5" />
                </div>
              </div>

              {/* Preço Dinâmico */}
              <div className="mb-6 pb-6 border-b border-zinc-800/80">
                <div className="flex items-baseline gap-1.5">
                  <span className="text-xs text-zinc-400 font-bold">R$</span>
                  <span className="text-4xl sm:text-5xl font-display font-black tracking-tight text-white transition-all duration-300">
                    {isPlanoAnual ? "2.849" : "297"}
                  </span>
                  <span className="text-xs text-lime-400 font-bold">
                    {isPlanoAnual ? ",90" : ",00"}
                  </span>
                  <span className="text-xs text-zinc-500 font-light">
                    / {isPlanoAnual ? "ano" : "mês"}
                  </span>
                </div>
                {isPlanoAnual && (
                  <p className="text-[11px] text-lime-400/90 font-light mt-1">
                    Equivale a apenas R$ 237,49 por mês
                  </p>
                )}
              </div>

              {/* Tabela de Vantagens e Taxas Inclusas */}
              <div className="space-y-3.5 mb-8">
                {[
                  "Atletas e Usuários Ilimitados",
                  "Dashboard Financeiro em Tempo Real",
                  "Cobrança Automatizada de Mensalidades",
                  "Módulo de Vaquinha Online Integrado",
                  "Cofre Digital e Controle de Almoxarifado",
                  "Suporte Dedicado e Implementação Guiada"
                ].map((item, iIdx) => (
                  <div key={iIdx} className="flex items-center gap-3">
                    <div className="w-4 h-4 rounded-full bg-lime-400/10 flex items-center justify-center text-lime-400 shrink-0">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </div>
                    <span className="text-xs text-zinc-300 font-light">{item}</span>
                  </div>
                ))}
              </div>

              {/* Transparência das Taxas Transacionais */}
              <div className="bg-zinc-900/80 rounded-xl p-3.5 border border-zinc-800 space-y-2 mb-8">
                <div className="text-[11px] font-bold text-zinc-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Percent className="w-3.5 h-3.5 text-lime-400" />
                  Taxas de Processamento
                </div>
                <div className="text-[11px] text-zinc-300 flex justify-between">
                  <span className="font-light">Vaquinha Online:</span>
                  <span className="font-bold text-lime-400">7% sobre o arrecadado</span>
                </div>
                <div className="text-[11px] text-zinc-300 flex justify-between">
                  <span className="font-light">Mensalidades (Pix/Cartão):</span>
                  <span className="font-bold text-zinc-400">Taxas de mercado</span>
                </div>
              </div>
            </div>

            <button className="w-full py-4 bg-lime-400 hover:bg-lime-300 text-zinc-950 rounded-xl font-bold text-xs uppercase tracking-wider transition-all transform hover:scale-102 shadow-lg shadow-lime-400/10 flex items-center justify-center gap-2">
              Assinar Plano {isPlanoAnual ? "Anual" : "Mensal"}
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Coluna da Direita: O Simulador Interativo (Card Duplo de Receitas) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-zinc-200 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-zinc-100">
                <div className="w-10 h-10 rounded-xl bg-lime-50 flex items-center justify-center text-lime-600 shrink-0">
                  <Calculator className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-display font-bold text-zinc-900">Simulador de Receita do Clube</h3>
                  <p className="text-xs text-zinc-500 font-light">Veja quanto seu clube arrecada e recebe limpo</p>
                </div>
              </div>

              {/* Parte 1: Simulação de Mensalidades */}
              <div className="space-y-5 mb-8">
                <div className="text-xs font-bold text-zinc-800 uppercase tracking-wide flex items-center gap-2">
                  <Users className="w-4 h-4 text-lime-600" />
                  1. Arrecadação com Mensalidades (Atletas/Alunos)
                </div>

                {/* Slider Atletas */}
                <div className="bg-zinc-50 p-4 rounded-2xl border border-zinc-100">
                  <div className="flex justify-between items-center mb-2">
                    <label htmlFor="range-atletas" className="text-xs font-bold text-zinc-700">
                      Total de Atletas Ativos
                    </label>
                    <span className="text-sm font-black text-lime-600 bg-white px-3 py-1 rounded-lg border border-zinc-200 shadow-2xs">
                      {simAtletas} atletas
                    </span>
                  </div>
                  <input
                    id="range-atletas"
                    type="range"
                    min="10"
                    max="300"
                    step="5"
                    value={simAtletas}
                    onChange={(e) => setSimAtletas(Number(e.target.value))}
                    className="w-full accent-lime-600 cursor-pointer h-1.5 bg-zinc-200 rounded-lg"
                  />
                  <div className="flex justify-between text-[10px] text-zinc-400 mt-1">
                    <span>10 atletas</span>
                    <span>150</span>
                    <span>300 atletas</span>
                  </div>
                </div>

                {/* Slider Mensalidade Média */}
                <div className="bg-zinc-50 p-4 rounded-2xl border border-zinc-100">
                  <div className="flex justify-between items-center mb-2">
                    <label htmlFor="range-mensalidade" className="text-xs font-bold text-zinc-700">
                      Valor da Mensalidade Média
                    </label>
                    <span className="text-sm font-black text-lime-600 bg-white px-3 py-1 rounded-lg border border-zinc-200 shadow-2xs">
                      R$ {simMensalidade},00
                    </span>
                  </div>
                  <input
                    id="range-mensalidade"
                    type="range"
                    min="30"
                    max="350"
                    step="10"
                    value={simMensalidade}
                    onChange={(e) => setSimMensalidade(Number(e.target.value))}
                    className="w-full accent-lime-600 cursor-pointer h-1.5 bg-zinc-200 rounded-lg"
                  />
                  <div className="flex justify-between text-[10px] text-zinc-400 mt-1">
                    <span>R$ 30</span>
                    <span>R$ 190</span>
                    <span>R$ 350</span>
                  </div>
                </div>

                {/* Resultado do Simulador de Mensalidades */}
                {(() => {
                  const bruto = simAtletas * simMensalidade;
                  // Estimativa de taxa média de transação em 3.5%
                  const taxa = bruto * 0.035;
                  const liquido = bruto - taxa;
                  return (
                    <div className="bg-zinc-900 text-white p-5 rounded-2xl shadow-inner relative overflow-hidden">
                      <div className="absolute right-0 top-0 bottom-0 w-2 bg-lime-400" />
                      <div className="grid grid-cols-2 gap-4 items-center">
                        <div>
                          <div className="text-[11px] text-zinc-400 font-light mb-0.5">Arrecadação Bruta:</div>
                          <div className="text-sm font-bold text-zinc-300">
                            R$ {bruto.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                          </div>
                          <div className="text-[10px] text-zinc-500 mt-1">
                            *Estimativa de taxa transacional: R$ {taxa.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                          </div>
                        </div>

                        <div className="text-right pr-2">
                          <div className="text-[11px] text-lime-400 font-bold uppercase tracking-wider mb-0.5">
                            Você Recebe Limpo:
                          </div>
                          <div className="text-xl sm:text-2xl font-display font-black text-white">
                            R$ {liquido.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                          </div>
                          <div className="text-[10px] text-zinc-400 font-light">por mês direto na conta</div>
                        </div>
                      </div>
                    </div>
                  );
                })()}
              </div>

              {/* Parte 2: Simulação de Vaquinha Online */}
              <div className="space-y-4 pt-6 border-t border-zinc-100">
                <div className="text-xs font-bold text-zinc-800 uppercase tracking-wide flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <PiggyBank className="w-4 h-4 text-lime-600" />
                    2. Simular Campanha de Vaquinha Online
                  </div>
                  <span className="text-[10px] font-bold text-lime-700 bg-lime-50 px-2 py-0.5 rounded border border-lime-200">
                    Taxa Fixa: 7%
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center bg-zinc-50 p-4 rounded-2xl border border-zinc-100">
                  <div>
                    <label htmlFor="input-vaquinha" className="text-[11px] font-bold text-zinc-600 block mb-1">
                      Meta de Arrecadação (R$)
                    </label>
                    <select
                      id="input-vaquinha"
                      value={simVaquinha}
                      onChange={(e) => setSimVaquinha(Number(e.target.value))}
                      className="w-full bg-white border border-zinc-300 rounded-xl px-3 py-2 text-xs font-bold text-zinc-800 focus:outline-hidden focus:border-lime-600 shadow-2xs"
                    >
                      <option value="5000">R$ 5.000,00</option>
                      <option value="10000">R$ 10.000,00</option>
                      <option value="15000">R$ 15.000,00</option>
                      <option value="25000">R$ 25.000,00</option>
                      <option value="50000">R$ 50.000,00</option>
                      <option value="100000">R$ 100.000,00</option>
                    </select>
                  </div>

                  {(() => {
                    const taxaVaq = simVaquinha * 0.07;
                    const liqVaq = simVaquinha - taxaVaq;
                    return (
                      <div className="text-right sm:border-l sm:border-zinc-200 sm:pl-4">
                        <div className="text-[10px] text-zinc-500 font-light mb-0.5">Clube recebe para o projeto:</div>
                        <div className="text-base font-black text-lime-600">
                          R$ {liqVaq.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                        </div>
                        <div className="text-[9px] text-zinc-400">Taxa retida: R$ {taxaVaq.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
                      </div>
                    );
                  })()}
                </div>
              </div>

            </div>

            <div className="mt-6 pt-4 border-t border-zinc-100 flex items-center justify-between text-[11px] text-zinc-400">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-lime-600" />
                Repasse seguro e auditável via split
              </span>
              <button 
                onClick={() => {
                  // Reseta simulação para valores padrão de alta conversão
                  setSimAtletas(120);
                  setSimMensalidade(150);
                  setSimVaquinha(25000);
                }}
                className="text-lime-600 font-bold hover:underline"
              >
                Resetar Simulação
              </button>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
