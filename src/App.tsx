import { useState, useEffect } from "react";
import planeImg from "./plane.jpeg";
import fatiImg from "./fati.jpeg";
import doriaImg from "./doria_informal.jpg";
import alanImg from "./alan.jpeg";
import belenImg from "./belen.jpeg";

const NAV_ITEMS = [
  { id: "hero", label: "Inicio" },
  { id: "mision", label: "Misión" },
  { id: "simulacion", label: "Simulación" },
  { id: "metodologia", label: "Metodología" },
  { id: "equipo", label: "Equipo" },
  { id: "conclusiones", label: "Conclusiones" },
];

const TEAM = [
  { name: "Adrián Martínez Treviño", id: "1958524", role: "Desarrollador de Hardware", icon: "⚙" },
  { name: "Fatima Salazar Loyola", id: "2048779", role: "Programadora", icon: "💻", image: fatiImg },
  { name: "Doria Montserrat Castañeda Gastelum", id: "2056800", role: "Programadora", icon: "💻", image: doriaImg },
  { name: "Elizabeth Cuevas Arreola", id: "2086268", role: "Documentación", icon: "📋" },
  { name: "Alan Yahir Correa Gutiérrez", id: "2007587", role: "Marketing", icon: "📡", image: alanImg },
  { name: "Belén Quetzalli Martínez Gómez", id: "2043270", role: "Marketing", icon: "📡", image: belenImg },
];

const OBJECTIVES = [
  {
    num: "01",
    title: "Familiarización Espacial",
    desc: "Interacción a escala 1:1 con instrumentos de cabina de aeronave militar. La memoria muscular desarrollada en el entorno virtual es transferible a cabinas reales.",
  },
  {
    num: "02",
    title: "Entrenamiento Procedimental",
    desc: "Práctica repetitiva de procedimientos de encendido, despegue, navegación básica y aterrizaje sin los costos de simuladores físicos completos.",
  },
  {
    num: "03",
    title: "Manejo del Estrés",
    desc: "Exposición a condiciones ambientales y procedimentales realistas para evaluar y mejorar la respuesta psicológica bajo la carga de trabajo del pilotaje militar.",
  },
  {
    num: "04",
    title: "Interacción Háptica HOTAS",
    desc: "Retroalimentación táctil mediante joystick militar con sistema HOTAS — transmite resistencia aerodinámica, vibración del motor y turbulencias al usuario.",
  },
];

const PHASES = [
  {
    num: "01",
    title: "Conceptualización y Diseño 3D",
    desc: "Investigación y modelado detallado del entorno realista (aeropuerto) y cabina militar. Texturizado PBR para fotorrealismo. Assets cartoon descartados por completo.",
    tags: ["Unity 3D", "PBR Texturing", "Modelado 3D"],
  },
  {
    num: "02",
    title: "Implementación Lógica e Integración VR",
    desc: "Estructura del escenario 3D en Unity. Configuración del Rig VR con XR Interaction Toolkit para visualización estereoscópica a escala real. Scripts de físicas básicas.",
    tags: ["Unity XR", "C# Scripts", "Rigidbody"],
  },
  {
    num: "03",
    title: "Desarrollo e Integración del Háptico",
    desc: "Diseño e implementación del hardware físico basado en joystick de avión militar con Force Feedback. Comunicación bidireccional con Unity vía APIs/Microcontroladores.",
    tags: ["HOTAS", "Force Feedback", "Microcontroladores"],
  },
  {
    num: "04",
    title: "Campaña Publicitaria y Marketing",
    desc: "Identidad visual de VR Academy, sitio web corporativo, gestión de redes sociales y producción del mini documental promocional del simulador.",
    tags: ["Branding", "Web", "Documental"],
  },
];

const VALUES = [
  { label: "Innovación Tecnológica", desc: "Motores gráficos de última generación como Unity 3D para fotorrealismo óptimo en VR." },
  { label: "Rigor y Seguridad", desc: "Realismo en procedimientos para un entrenamiento efectivo que complemente las horas de vuelo reales." },
  { label: "Accesibilidad", desc: "Simuladores que reduzcan los costos asociados al entrenamiento inicial en simuladores Full Flight." },
  { label: "Excelencia", desc: "Cada entorno virtual mantiene congruencia visual y funcional estricta." },
];

function WingLogo() {
  return (
    <svg width="48" height="40" viewBox="0 0 48 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M24 2L27 10H44L30 18L35 30L24 22L13 30L18 18L4 10H21L24 2Z" fill="#00d4ff" opacity="0.9" />
      <path d="M2 24H10M38 24H46M2 28H8M40 28H46" stroke="#00d4ff" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
    </svg>
  );
}

function Navbar({ active, onNav, lightMode, onToggleLight }: { active: string; onNav: (id: string) => void; lightMode: boolean; onToggleLight: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#07091aee] backdrop-blur-md border-b border-[#1a2d4a]" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        <button
          onClick={() => onNav("hero")}
          className="flex items-center gap-3 group"
        >
          <WingLogo />
          <div className="text-left hidden sm:block">
            <div className="font-display font-700 text-lg text-white leading-none tracking-wider">VR ACADEMY</div>
            <div className="font-mono-label text-[10px] text-[#00d4ff] tracking-[0.2em] leading-none">FLIGHT SIMULATION</div>
          </div>
        </button>

        <div className="hidden md:flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => onNav(item.id)}
              className={`nav-link px-4 py-2 text-sm font-display font-500 tracking-wide transition-colors duration-200 ${
                active === item.id ? "text-[#00d4ff]" : "text-[#8fa8cc] hover:text-[#00d4ff]"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={onToggleLight}
            title={lightMode ? "Modo oscuro" : "Modo claro"}
            className="w-9 h-9 flex items-center justify-center border border-[#1a2d4a] hover:border-[#00d4ff44] transition-all duration-200 bg-[#0d1529] hover:bg-[#0d1529]/80"
          >
            {lightMode ? (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#5a7a9e" strokeWidth="2" strokeLinecap="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00d4ff" strokeWidth="2" strokeLinecap="round">
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
            )}
          </button>

          <button
            className="md:hidden text-[#8fa8cc] hover:text-[#00d4ff] transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {menuOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" /></>
              )}
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[#0d1529] border-t border-[#1a2d4a] px-6 py-4 flex flex-col gap-2">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => { onNav(item.id); setMenuOpen(false); }}
              className={`text-left py-2 font-display font-500 tracking-wide transition-colors ${
                active === item.id ? "text-[#00d4ff]" : "text-[#8fa8cc]"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}

function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1600&h=900&fit=crop&auto=format')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-[#07091a]/80" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#07091a]/60 via-transparent to-[#07091a]" />
      </div>

      <div className="scan-line absolute inset-0 pointer-events-none z-10 h-32 w-full" />

      <div className="absolute inset-0 z-5 pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute border border-[#00d4ff08] rounded-full"
            style={{
              width: `${200 + i * 160}px`,
              height: `${200 + i * 160}px`,
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          />
        ))}
      </div>

      <div className="relative z-20 text-center max-w-5xl mx-auto px-6">
        <div className="flex items-center justify-center gap-3 mb-8">
          <WingLogo />
          <span className="font-mono-label text-[#00d4ff] text-sm tracking-[0.3em] uppercase">VR Academy</span>
        </div>

        <h1 className="font-display font-700 text-5xl md:text-7xl lg:text-8xl text-white leading-none tracking-tight mb-6 glow-cyan">
          FLIGHT
          <br />
          <span className="text-[#00d4ff]">SIMULATOR</span>
        </h1>

        <p className="font-body text-[#8fa8cc] text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-4">
          Entrenamiento aeronáutico de alta fidelidad mediante Realidad Virtual y retroalimentación háptica HOTAS para pilotos militares en formación.
        </p>

        <div className="font-mono-label text-xs text-[#5a7a9e] tracking-[0.2em] mb-12">
          VR ACADEMY S.A. DE C.V. — FUNDADA 2026 — MÉXICO
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <div className="hud-border bg-[#0d1529]/80 px-8 py-4 backdrop-blur">
            <div className="font-mono-label text-[#00d4ff] text-2xl font-500">6DoF</div>
            <div className="text-[#5a7a9e] text-xs tracking-wider mt-1">GRADOS DE LIBERTAD</div>
          </div>
          <div className="hud-border bg-[#0d1529]/80 px-8 py-4 backdrop-blur">
            <div className="font-mono-label text-[#00d4ff] text-2xl font-500">1:1</div>
            <div className="text-[#5a7a9e] text-xs tracking-wider mt-1">ESCALA REAL</div>
          </div>
          <div className="hud-border bg-[#0d1529]/80 px-8 py-4 backdrop-blur">
            <div className="font-mono-label text-[#00d4ff] text-2xl font-500">PBR</div>
            <div className="text-[#5a7a9e] text-xs tracking-wider mt-1">FOTORREALISMO</div>
          </div>
          <div className="hud-border bg-[#0d1529]/80 px-8 py-4 backdrop-blur">
            <div className="font-mono-label text-[#00d4ff] text-2xl font-500">HOTAS</div>
            <div className="text-[#5a7a9e] text-xs tracking-wider mt-1">SISTEMA HÁPTICO</div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
        <div className="pulse-slow text-[#5a7a9e] text-xs tracking-[0.2em] font-mono-label">SCROLL</div>
        <div className="w-px h-12 bg-gradient-to-b from-[#00d4ff] to-transparent" />
      </div>
    </section>
  );
}

function MisionSection() {
  return (
    <section id="mision" className="py-24 px-6 bg-[#07091a] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#00d4ff04] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <div className="font-mono-label text-[#00d4ff] text-xs tracking-[0.3em] mb-3">// OBJETIVOS Y METAS</div>
          <h2 className="font-display font-700 text-4xl md:text-5xl text-white tracking-tight">
            Misión y <span className="text-[#00d4ff]">Visión</span>
          </h2>
          <div className="phase-line h-px w-24 mt-4" />
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="hud-border card-glow bg-[#0d1529] p-8 transition-all duration-300">
            <div className="font-mono-label text-[#00d4ff] text-xs tracking-[0.25em] mb-4">MISIÓN</div>
            <p className="font-body text-[#c8d4e8] leading-relaxed">
              Diseñar y proveer plataformas de simulación de vuelo militar de alta fidelidad en Realidad Virtual, democratizando el aprendizaje aeronáutico. Dotamos a estudiantes, pilotos militares en formación y profesionales de una herramienta inmersiva que garantice un entrenamiento psicológico y procedimental seguro, escalable y económicamente accesible.
            </p>
          </div>

          <div className="hud-border card-glow bg-[#0d1529] p-8 transition-all duration-300">
            <div className="font-mono-label text-[#00d4ff] text-xs tracking-[0.25em] mb-4">VISIÓN 2030</div>
            <p className="font-body text-[#c8d4e8] leading-relaxed">
              Consolidarnos como la compañía referente a nivel Latinoamérica en el desarrollo de simuladores aeronáuticos y entrenamiento psicológico para pilotos con tecnología VR. Forjar alianzas estratégicas con universidades, academias de aviación militar y fuerzas aéreas en toda la región.
            </p>
          </div>
        </div>

        <div>
          <div className="font-mono-label text-[#5a7a9e] text-xs tracking-[0.25em] mb-6">VALORES FUNDAMENTALES</div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {VALUES.map((v, i) => (
              <div
                key={i}
                className="border border-[#1a2d4a] hover:border-[#00d4ff33] bg-[#0d1529]/50 p-6 transition-all duration-300 hover:bg-[#0d1529]"
              >
                <div className="font-mono-label text-[#00d4ff] text-xs mb-2">{String(i + 1).padStart(2, "0")}</div>
                <div className="font-display font-600 text-white text-base mb-2 tracking-wide">{v.label}</div>
                <p className="text-[#5a7a9e] text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SimulacionSection() {
  return (
    <section id="simulacion" className="py-24 px-6 bg-[#0a0e1f] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-[#00d4ff06] rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-[#00d4ff04] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <div className="font-mono-label text-[#00d4ff] text-xs tracking-[0.3em] mb-3">// OBJETIVOS DE LA SIMULACIÓN</div>
            <h2 className="font-display font-700 text-4xl md:text-5xl text-white tracking-tight mb-6">
              El Simulador
              <br />
              <span className="text-[#00d4ff]">VR Academy</span>
            </h2>
            <p className="font-body text-[#8fa8cc] leading-relaxed mb-6">
              El objetivo central es proporcionar un entorno de entrenamiento <strong className="text-white">procedimental y psicológico</strong> para el pilotaje de una aeronave militar. Esta simulación no está concebida como un videojuego de entretenimiento, sino como una herramienta terapéutica y de entrenamiento riguroso.
            </p>
            <p className="font-body text-[#8fa8cc] leading-relaxed">
              Todo el entorno virtual está diseñado con un enfoque estrictamente realista — evitando estilos "cartoon" — asegurando congruencia total entre modelos 3D, texturas e iluminación para mantener la inmersión del usuario.
            </p>
          </div>

          <div className="relative">
            <div className="hud-border bg-[#0d1529] overflow-hidden">
            <img
                src={planeImg}
                alt="Cockpit de aeronave militar"
                className="w-full h-64 object-cover opacity-70"
              />
              <div className="p-6">
                <div className="font-mono-label text-[#00d4ff] text-xs tracking-wider mb-2">ESTADO DEL SISTEMA</div>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    ["Motor gráfico", "Unity 3D"],
                    ["Física", "Rigidbody"],
                    ["Visualización", "VR Stereo"],
                    ["Háptico", "HOTAS FFB"],
                  ].map(([k, v]) => (
                    <div key={k} className="flex justify-between items-center border-b border-[#1a2d4a] pb-2">
                      <span className="text-[#5a7a9e] text-xs">{k}</span>
                      <span className="font-mono-label text-[#00d4ff] text-xs">{v}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {OBJECTIVES.map((obj, i) => (
            <div
              key={i}
              className="hud-border card-glow bg-[#0d1529] p-6 transition-all duration-300 group"
            >
              <div className="font-mono-label text-[#00d4ff] text-2xl font-500 mb-4">{obj.num}</div>
              <h3 className="font-display font-600 text-white text-lg mb-3 tracking-wide group-hover:text-[#00d4ff] transition-colors">
                {obj.title}
              </h3>
              <p className="text-[#5a7a9e] text-sm leading-relaxed">{obj.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MetodologiaSection() {
  const [activePhase, setActivePhase] = useState(0);

  return (
    <section id="metodologia" className="py-24 px-6 bg-[#07091a]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <div className="font-mono-label text-[#00d4ff] text-xs tracking-[0.3em] mb-3">// METODOLOGÍA Y DESARROLLO</div>
          <h2 className="font-display font-700 text-4xl md:text-5xl text-white tracking-tight">
            Fases de <span className="text-[#00d4ff]">Desarrollo</span>
          </h2>
          <div className="phase-line h-px w-24 mt-4" />
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 flex flex-col gap-2">
            {PHASES.map((phase, i) => (
              <button
                key={i}
                onClick={() => setActivePhase(i)}
                className={`text-left p-5 border transition-all duration-200 ${
                  activePhase === i
                    ? "border-[#00d4ff] bg-[#0d1529] text-white"
                    : "border-[#1a2d4a] bg-transparent text-[#8fa8cc] hover:border-[#00d4ff44]"
                }`}
              >
                <div className="flex items-center gap-4">
                  <span className={`font-mono-label text-2xl font-500 ${activePhase === i ? "text-[#00d4ff]" : "text-[#1a2d4a]"}`}>
                    {phase.num}
                  </span>
                  <div>
                    <div className={`font-display font-600 text-sm tracking-wide ${activePhase === i ? "text-white" : "text-[#8fa8cc]"}`}>
                      {phase.title}
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>

          <div className="lg:col-span-2">
            <div className="hud-border bg-[#0d1529] p-8 h-full">
              <div className="font-mono-label text-[#00d4ff] text-xs tracking-[0.25em] mb-2">
                FASE {PHASES[activePhase].num}
              </div>
              <h3 className="font-display font-700 text-2xl text-white mb-6 tracking-wide">
                {PHASES[activePhase].title}
              </h3>
              <p className="font-body text-[#8fa8cc] leading-relaxed mb-8">
                {PHASES[activePhase].desc}
              </p>
              <div>
                <div className="font-mono-label text-[#5a7a9e] text-xs tracking-wider mb-3">TECNOLOGÍAS</div>
                <div className="flex flex-wrap gap-2">
                  {PHASES[activePhase].tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono-label text-xs text-[#00d4ff] border border-[#00d4ff33] px-3 py-1 bg-[#00d4ff08]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="hud-border bg-[#0d1529] p-6">
            <div className="font-mono-label text-[#00d4ff] text-xs mb-3 tracking-wider">ANTECEDENTES</div>
            <p className="text-[#5a7a9e] text-sm leading-relaxed">
              Plataformas como <span className="text-white">Microsoft Flight Simulator 2020</span> y <span className="text-white">X-Plane 12</span> (aprobado por la FAA) establecen los estándares actuales de fotorrealismo y modelo físico de referencia para este proyecto.
            </p>
          </div>
          <div className="hud-border bg-[#0d1529] p-6">
            <div className="font-mono-label text-[#00d4ff] text-xs mb-3 tracking-wider">REFERENCIA INDUSTRIA</div>
            <p className="text-[#5a7a9e] text-sm leading-relaxed">
              Empresas como <span className="text-white">Vrgineers</span> desarrollan soluciones VR para fuerza aérea integrando visores de resolución extrema con réplicas físicas de cabinas — nuestro diferenciador es el hardware háptico HOTAS propio.
            </p>
          </div>
          <div className="hud-border bg-[#0d1529] p-6">
            <div className="font-mono-label text-[#00d4ff] text-xs mb-3 tracking-wider">MARCO TEÓRICO</div>
            <p className="text-[#5a7a9e] text-sm leading-relaxed">
              Fundamentado en <span className="text-white">VR y Presencia</span>, <span className="text-white">Sistemas HOTAS</span> con Force Feedback, y <span className="text-white">Dinámica de Vuelo Simulada</span> mediante scripts C# conectados al componente Rigidbody de Unity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function EquipoSection() {
  return (
    <section id="equipo" className="py-24 px-6 bg-[#0a0e1f] relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#00d4ff03] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <div className="font-mono-label text-[#00d4ff] text-xs tracking-[0.3em] mb-3">// EQUIPO DE DESARROLLO</div>
          <h2 className="font-display font-700 text-4xl md:text-5xl text-white tracking-tight">
            El <span className="text-[#00d4ff]">Equipo</span>
          </h2>
          <div className="phase-line h-px w-24 mt-4" />
          <p className="text-[#8fa8cc] mt-4 max-w-xl">
            Realidad Virtual — Grupo 54 · Profesor: Jerson Aldair Gámez Castro · UANL 2026
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TEAM.map((member, i) => (
            <div
              key={i}
              className="hud-border card-glow bg-[#0d1529] p-6 transition-all duration-300 group"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 border border-[#1a2d4a] group-hover:border-[#00d4ff33] flex items-center justify-center overflow-hidden flex-shrink-0 transition-colors bg-[#07091a]">
                  {member.image ? (
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                  ) : (
                    <span className="text-xl">{member.icon}</span>
                  )}    
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-display font-600 text-white text-base leading-tight tracking-wide mb-1 group-hover:text-[#00d4ff] transition-colors">
                    {member.name}
                  </div>
                  <div className="font-mono-label text-[#5a7a9e] text-xs tracking-wider mb-2">{member.id}</div>
                  <div className="text-[#00d4ff] text-xs border border-[#00d4ff22] inline-block px-2 py-0.5 bg-[#00d4ff08]">
                    {member.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ConclusionesSection() {
  return (
    <section id="conclusiones" className="py-24 px-6 bg-[#07091a]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <div className="font-mono-label text-[#00d4ff] text-xs tracking-[0.3em] mb-3">// CONCLUSIONES Y TRABAJO FUTURO</div>
          <h2 className="font-display font-700 text-4xl md:text-5xl text-white tracking-tight">
            Estado del <span className="text-[#00d4ff]">Proyecto</span>
          </h2>
          <div className="phase-line h-px w-24 mt-4" />
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <div className="hud-border bg-[#0d1529] p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-2 rounded-full bg-[#00d4ff] pulse-slow" />
              <div className="font-mono-label text-[#00d4ff] text-xs tracking-wider">CONCLUSIONES PRELIMINARES</div>
            </div>
            <p className="font-body text-[#c8d4e8] leading-relaxed mb-4">
              La primera fase de investigación y documentación de <strong>"VR Academy Flight Simulator"</strong> ha culminado satisfactoriamente. Se ha definido una estructura conceptual sólida alineada con los requerimientos técnicos y artísticos de la rúbrica.
            </p>
            <p className="font-body text-[#8fa8cc] leading-relaxed">
              La conceptualización del dispositivo háptico — joystick de avión militar con Force Feedback — se presenta como el núcleo de la inmersión, justificando plenamente su necesidad para alcanzar los objetivos planteados.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <div className="hud-border bg-[#0d1529] p-6 flex-1">
              <div className="font-mono-label text-[#00d4ff] text-xs tracking-wider mb-4">A CORTO PLAZO — SEGUNDA ENTREGA</div>
              <p className="text-[#8fa8cc] text-sm leading-relaxed">
                Materialización del entorno virtual y presentación de la <strong className="text-white">primera iteración funcional</strong> del joystick de avión militar háptico (evidenciada en video).
              </p>
            </div>
            <div className="hud-border bg-[#0d1529] p-6 flex-1">
              <div className="font-mono-label text-[#00d4ff] text-xs tracking-wider mb-4">CIERRE DE SEMESTRE</div>
              <p className="text-[#8fa8cc] text-sm leading-relaxed">
                <strong className="text-white">Integración total</strong> de los lentes VR y el hardware háptico operando de manera bidireccional en Unity.
              </p>
            </div>
            <div className="hud-border bg-[#0d1529] p-6 flex-1">
              <div className="font-mono-label text-[#00d4ff] text-xs tracking-wider mb-4">VISIÓN A LARGO PLAZO</div>
              <p className="text-[#8fa8cc] text-sm leading-relaxed">
                Integración de dinámicas de vuelo avanzadas, diversificando el espectro de escenarios de estrés psicológico dentro del entorno seguro de VR Academy.
              </p>
            </div>
          </div>
        </div>

        <div className="border border-[#1a2d4a] bg-[#0d1529]/50 p-8">
          <div className="font-mono-label text-[#5a7a9e] text-xs tracking-wider mb-6">REFERENCIAS Y BIBLIOGRAFÍA</div>
          <div className="grid md:grid-cols-2 gap-3">
            {[
              "Documento Institucional. Realidad Virtual. Grupo 54 — Jerson Aldair Gámez Castro. Semestre Agosto–Diciembre 2026. UANL",
              "Slater, M., & Sanchez-Vives, M. V. (2016). Enhancing Our Lives with Immersive Virtual Reality. Frontiers in Robotics and AI, 3.",
              "Burdea, G. C., & Coiffet, P. (2003). Virtual Reality Technology (2nd ed.). John Wiley & Sons.",
              "Salas, E., Bowers, C. A., & Rhodenizer, L. (1998). Rational Use of Simulation to Support Aviation Training. IJAP, 8(3), 197-208.",
              "Documentación de Unity. (2026). Unity Technologies. Física realista mediante Rigidbody y materiales PBR.",
            ].map((ref, i) => (
              <div key={i} className="flex gap-3 text-xs text-[#5a7a9e] leading-relaxed">
                <span className="font-mono-label text-[#1a2d4a] flex-shrink-0">[{i + 1}]</span>
                <span>{ref}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-10 px-6 border-t border-[#1a2d4a] bg-[#07091a]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <WingLogo />
          <div>
            <div className="font-display font-700 text-white text-sm tracking-wider">VR ACADEMY</div>
            <div className="font-mono-label text-[#5a7a9e] text-xs tracking-[0.2em]">FLIGHT SIMULATION S.A. DE C.V.</div>
          </div>
        </div>
        <div className="font-mono-label text-[#3a5a7a] text-xs tracking-wider">
          DOCUMENTACIÓN TÉCNICA — PRIMERA ENTREGA — 2026
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  const [activeSection, setActiveSection] = useState("hero");
  const [lightMode, setLightMode] = useState(false);

  useEffect(() => {
    const sections = NAV_ITEMS.map((n) => document.getElementById(n.id)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.3 }
    );
    sections.forEach((s) => observer.observe(s!));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={`min-h-full bg-[#07091a] text-[#e2e8f4] overflow-x-hidden${lightMode ? " light-mode" : ""}`}>
      <Navbar active={activeSection} onNav={scrollTo} lightMode={lightMode} onToggleLight={() => setLightMode((v) => !v)} />
      <HeroSection />
      <MisionSection />
      <SimulacionSection />
      <MetodologiaSection />
      <EquipoSection />
      <ConclusionesSection />
      <Footer />
    </div>
  );
}
