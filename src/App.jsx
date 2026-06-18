import React, { useState, useEffect } from "react";

const CustomStyles = () => (
  <style dangerouslySetInnerHTML={{__html: `
    @keyframes morph {
      0% { border-radius: 42% 58% 70% 30% / 45% 45% 55% 55%; }
      50% { border-radius: 70% 30% 52% 48% / 60% 40% 60% 40%; }
      100% { border-radius: 42% 58% 70% 30% / 45% 45% 55% 55%; }
    }
    @keyframes float {
      0% { transform: translateY(0px) rotate(0deg); }
      50% { transform: translateY(-10px) rotate(2deg); }
      100% { transform: translateY(0px) rotate(0deg); }
    }
    .profile-shape {
      animation: morph 6s ease-in-out infinite, float 5s ease-in-out infinite;
      transition: all 0.4s ease;
    }
    .profile-shape:hover {
      transform: scale(1.05) rotate(-2deg);
      animation-play-state: paused;
    }
    .clip-trapezoid-left {
      clip-path: polygon(0 0, 100% 0, 88% 100%, 0% 100%);
    }
    .clip-trapezoid-right {
      clip-path: polygon(12% 0, 100% 0, 100% 100%, 0% 100%);
    }
    .clip-slanted {
      clip-path: polygon(0 0, 92% 0, 100% 100%, 8% 100%);
    }
  `}} />
);

const PROJECTS = [
  {
    id: "millyfoods",
    title: "Millyfoods",
    role: "Full-Stack Retail Platform",
    description: "A fast, streamlined consumer food ordering application built to handle heavy daily traffic blocks. Features layout routing, dynamic item arrays, and an automated handshake directly to WhatsApp checkout.",
    link: "https://millyfood.vercel.app/",
    tech: ["HTML5", "Tailwind CSS", "JavaScript"],
    accent: "border-cyan-500/30 group-hover:border-cyan-400",
    badge: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20"
  },
  {
    id: "prime-vetted",
    title: "PRIME·VETTED",
    role: "Premium Property Showcase Engine",
    description: "An architectural real estate application engineered with ultra-high contrast layout grids. Implements complex array data filtering matrices for instant client property matches.",
    link: "https://realestate-chi-five.vercel.app/",
    tech: ["React", "Tailwind CSS", "Array Filters"],
    accent: "border-amber-500/30 group-hover:border-amber-400",
    badge: "text-amber-400 bg-amber-500/10 border-amber-500/20"
  },
  {
    id: "nexus",
    title: "NEXUS // SYS",
    role: "Business Operations Workspace",
    description: "A high-density minimalist workspace dashboard handling real-time analytical parameter calculations and state persistence tracking via local storage pipelines.",
    link: "https://workspace-bay-kappa.vercel.app/",
    tech: ["React", "Tailwind CSS", "State Caching"],
    accent: "border-indigo-500/30 group-hover:border-indigo-400",
    badge: "text-indigo-400 bg-indigo-500/10 border-indigo-500/20"
  }
];

const METRICS = [
  { count: "10+", label: "Pipelines Compiled", color: "text-cyan-400" },
  { count: "20", label: "Years of Age Cycle", color: "text-amber-400" },
  { count: "100%", label: "Uptime Mentality", color: "text-indigo-400" }
];

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [collabMode, setCollabMode] = useState("git");
  const [copiedText, setCopiedText] = useState(false);

  const [collabForm, setCollabForm] = useState({ gitUser: "", role: "frontend", note: "" });
  const [collabLogs, setCollabLogs] = useState([
    { id: 1, user: "DevNode_04", role: "Backend Eng", status: "Connected", color: "text-cyan-400 border-cyan-500/20" }
  ]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const triggerCopy = () => {
    navigator.clipboard.writeText("git clone https://github.com/kamaldeen-sys/matrix.git");
    setCopiedText(true);
    setTimeout(() => setCopiedText(false), 2000);
  };

  const handleCollabSubmit = (e) => {
    e.preventDefault();
    if (!collabForm.gitUser.trim()) return;
    
    const colors = ["text-cyan-400 border-cyan-500/20", "text-amber-400 border-amber-500/20", "text-indigo-400 border-indigo-500/20"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    setCollabLogs([
      { id: Date.now(), user: collabForm.gitUser, role: collabForm.role, status: "Handshaking", color: randomColor },
      ...collabLogs
    ]);
    setCollabForm({ gitUser: "", role: "frontend", note: "" });
  };

  return (
    <div className="min-h-screen bg-[#070b14] text-[#e2e8f0] font-mono selection:bg-cyan-500 selection:text-black antialiased flex flex-col">
      <CustomStyles />

      <header className="fixed w-full z-50 top-0 bg-[#070b14]/90 backdrop-blur-md border-b border-[#131e35]">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <div onClick={() => setCurrentPage("home")} className="cursor-pointer flex items-center space-x-3 group">
            <div className="w-9 h-9 bg-gradient-to-br from-cyan-400 to-indigo-600 text-white font-black text-lg flex items-center justify-center clip-trapezoid-left shadow-lg shadow-cyan-500/10">
              H
            </div>
            <div className="leading-none">
              <span className="text-sm font-black tracking-widest text-white block group-hover:text-cyan-400 transition-colors">KAMALDEEN //</span>
              <span className="text-[10px] text-slate-500 block font-mono">SYS_CORE_v2.5</span>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-1 bg-[#0b1324] p-1 border border-[#131e35]">
            {[
              { id: "home", label: "OVERVIEW" },
              { id: "projects", label: "PRODUCTION_VECTORS" },
              { id: "collab", label: "COLLAB_MATRIX" }
            ].map((link) => (
              <button
                key={link.id}
                onClick={() => setCurrentPage(link.id)}
                className={`text-[11px] font-bold tracking-wider px-4 py-2 transition-all ${
                  currentPage === link.id 
                    ? "bg-gradient-to-r from-cyan-500 to-indigo-500 text-white clip-slanted font-black shadow-md" 
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="text-[10px] text-cyan-400 border border-cyan-500/20 px-3 py-1 bg-cyan-500/5 font-bold tracking-wider">
            LOC // OYO_STATE_NG
          </div>
        </div>
      </header>

      <main className="flex-grow">
        {currentPage === "home" && (
          <div className="animate-fade-in">
            <section className="max-w-6xl mx-auto px-6 pt-36 pb-16 border-b border-[#131e35]/60">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                
                <div className="lg:col-span-8 space-y-6">
                  <div className="inline-block bg-[#0b1324] border border-indigo-500/20 text-indigo-400 text-[10px] px-3 py-1 font-bold tracking-widest uppercase rounded-sm">
                    SYS_STATUS // FULL_STACK_ENGINEER
                  </div>
                  
                  <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tighter leading-none uppercase">
                    HAMMED KAMALDEEN <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-400 to-amber-400 font-light">AYOMIDE.</span>
                  </h1>
                  
                  <p className="text-slate-400 text-sm max-w-2xl leading-relaxed font-sans">
                    A 20-year-old developer based in Oyo State, Nigeria. Specializing in high-contrast layouts, clean system interfaces, and structured application mechanics. Merging front-end runtime control with Node.js logic stacks to deliver robust web operations.
                  </p>

                  <div className="flex flex-wrap gap-3 pt-2">
                    <button 
                      onClick={() => setCurrentPage("projects")}
                      className="px-6 py-3 bg-white hover:bg-cyan-400 text-black font-black text-xs uppercase tracking-widest clip-trapezoid-left transition-all shadow-lg shadow-white/5 hover:shadow-cyan-400/10"
                    >
                      Inspect Live Codebases
                    </button>
                    <button 
                      onClick={() => setCurrentPage("collab")}
                      className="px-6 py-3 bg-[#0b1324] hover:bg-[#111c35] text-white border border-[#1d2d4f] font-black text-xs uppercase tracking-widest clip-trapezoid-right transition-colors"
                    >
                      Initialize Collaboration
                    </button>
                  </div>
                </div>

                <div className="lg:col-span-4 flex justify-center lg:justify-end">
                  <div className="relative w-48 h-48 sm:w-56 sm:h-56 border border-cyan-500/20 p-2 bg-[#0b1324] shadow-xl shadow-indigo-500/5">
                    <div className="absolute top-0 left-0 text-[9px] text-cyan-400 bg-[#070b14] px-1 -mt-2 ml-2 font-bold tracking-wider">IMG_FRAME_01</div>
                    <img 
                      src="/my-photo.jpeg" 
                      alt="Hammed Kamaldeen" 
                      className="profile-shape w-full h-full object-cover bg-[#0f1a30] border border-[#131e35]"
                    />
                  </div>
                </div>

              </div>
            </section>

            <section className="max-w-6xl mx-auto px-6 py-12 border-b border-[#131e35]/60 bg-[#090f1c]">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {METRICS.map((m, i) => (
                  <div key={i} className="border border-[#131e35] p-5 bg-[#0b1324] space-y-1 hover:border-slate-700 transition-colors">
                    <div className={`text-2xl font-black ${m.color}`}>{m.count}</div>
                    <div className="text-[10px] text-slate-500 uppercase tracking-wider font-bold">{m.label}</div>
                  </div>
                ))}
              </div>
            </section>

            <section className="max-w-6xl mx-auto px-6 py-16 space-y-8">
              <div className="space-y-2">
                <h2 className="text-xs font-black tracking-widest text-indigo-400 uppercase">// PRIMARY_TOOLKIT_CAPABILITIES</h2>
                <p className="text-xl font-bold text-white uppercase tracking-tight">System Core Stack Parameters</p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs">
                {[
                  { name: "React / Vite Engine", desc: "Component Architecture", line: "border-l-cyan-400" },
                  { name: "JavaScript ES6+", desc: "Logic & Array Control", line: "border-l-amber-400" },
                  { name: "Node.js Environment", desc: "Server Data Processing", line: "border-l-indigo-400" },
                  { name: "Tailwind CSS", desc: "Fluid Interface Layouts", line: "border-l-purple-400" }
                ].map((s, i) => (
                  <div key={i} className={`bg-[#0b1324] border border-[#131e35] border-l-2 ${s.line} p-4 space-y-2`}>
                    <div className="font-black text-white">{s.name}</div>
                    <div className="text-[10px] text-slate-500">{s.desc}</div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {currentPage === "projects" && (
          <div className="max-w-6xl mx-auto px-6 pt-36 pb-20 space-y-12 animate-fade-in">
            <div className="space-y-2 border-b border-[#131e35]/60 pb-6">
              <h1 className="text-3xl font-black uppercase text-white tracking-tighter">Production Vectors</h1>
              <p className="text-slate-500 text-xs">Three main software layout deployments actively running live client routing blocks.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {PROJECTS.map((p) => (
                <div key={p.id} className={`bg-[#0b1324] border ${p.accent} p-6 flex flex-col justify-between space-y-6 transition-all group shadow-md hover:shadow-xl`}>
                  <div className="space-y-4">
                    <div className="flex justify-between items-start">
                      <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 border ${p.badge}`}>
                        {p.role}
                      </span>
                      <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse"></span>
                    </div>
                    
                    <h3 className="text-xl font-black text-white uppercase tracking-tight group-hover:text-white transition-colors">{p.title}</h3>
                    
                    <p className="text-slate-400 text-xs font-sans leading-relaxed">
                      {p.description}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-1.5">
                      {p.tech.map((t, idx) => (
                        <span key={idx} className="text-[9px] bg-[#070b14] border border-[#131e35] text-slate-400 px-2 py-0.5">
                          {t}
                        </span>
                      ))}
                    </div>

                    <a 
                      href={p.link}
                      target="_blank"
                      rel="noreferrer"
                      className="block w-full text-center py-3 bg-[#111c35] hover:bg-white hover:text-black text-white font-black text-xs uppercase tracking-widest transition-colors border border-[#1d2d4f]"
                    >
                      Execute Instance ↗
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {currentPage === "collab" && (
          <div className="max-w-6xl mx-auto px-6 pt-36 pb-20 space-y-12 animate-fade-in">
            <div className="space-y-2 border-b border-[#131e35]/60 pb-6">
              <h1 className="text-3xl font-black uppercase text-white tracking-tighter">Collaboration Matrix</h1>
              <p className="text-slate-500 text-xs">Open architecture pipelines for developer team integration, open-source testing, and modular system reviews.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              <div className="lg:col-span-7 space-y-6">
                <div className="border border-[#131e35] bg-[#0b1324] p-1 flex">
                  <button 
                    onClick={() => setCollabMode("git")}
                    className={`flex-1 text-center py-2.5 text-xs font-black uppercase tracking-wider transition-colors ${collabMode === "git" ? "bg-gradient-to-r from-cyan-500 to-indigo-500 text-white" : "text-slate-400 hover:text-white"}`}
                  >
                    Open Source Sync
                  </button>
                  <button 
                    onClick={() => setCollabMode("team")}
                    className={`flex-1 text-center py-2.5 text-xs font-black uppercase tracking-wider transition-colors ${collabMode === "team" ? "bg-gradient-to-r from-cyan-500 to-indigo-500 text-white" : "text-slate-400 hover:text-white"}`}
                  >
                    Direct Collaboration Form
                  </button>
                </div>

                {collabMode === "git" ? (
                  <div className="border border-[#131e35] p-6 space-y-6 bg-[#090f1c]">
                    <div className="space-y-2">
                      <h3 className="text-sm font-black uppercase text-white">Fork the Active Project Pipeline</h3>
                      <p className="text-xs text-slate-400 font-sans leading-relaxed">
                        Are you an engineer wanting to test, refactor, or clone the baseline architectures? Use the terminal token pipeline below to sync the codebase into your local directory environment.
                      </p>
                    </div>

                    <div className="bg-[#070b14] border border-[#131e35] p-4 flex items-center justify-between font-mono text-xs text-slate-300">
                      <span className="truncate text-cyan-400">git clone https://github.com/kamaldeen010/portfolio-.git</span>
                      <button 
                        onClick={triggerCopy}
                        className="ml-4 px-3 py-1 bg-[#111c35] border border-[#1d2d4f] text-white text-[10px] uppercase font-bold hover:bg-white hover:text-black transition-colors"
                      >
                        {copiedText ? "COPIED" : "COPY"}
                      </button>
                    </div>

                    <div className="p-4 bg-[#0b1324] border-l-2 border-indigo-500 text-[11px] text-slate-400 leading-relaxed">
                      SYSTEM NOTE: Open branches must configure tracking parameters before running automated deploy hooks onto Vercel pipeline environments.
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleCollabSubmit} className="border border-[#131e35] p-6 space-y-4 bg-[#090f1c]">
                    <h3 className="text-sm font-black uppercase text-white border-b border-[#131e35] pb-2">Join Development Queue</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-[10px] uppercase text-slate-500 font-bold">GitHub Moniker Handle</label>
                        <input 
                          type="text" 
                          required
                          value={collabForm.gitUser}
                          onChange={(e) => setCollabForm({...collabForm, gitUser: e.target.value})}
                          placeholder="e.g., kamaldeen-sys"
                          className="w-full bg-[#070b14] border border-[#131e35] px-3 py-2 text-xs focus:outline-none focus:border-cyan-500 text-white placeholder-slate-600"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-[10px] uppercase text-slate-500 font-bold">Engineering Scope Target</label>
                        <select 
                          value={collabForm.role}
                          onChange={(e) => setCollabForm({...collabForm, role: e.target.value})}
                          className="w-full bg-[#070b14] border border-[#131e35] px-3 py-2 text-xs focus:outline-none focus:border-cyan-500 text-white uppercase font-bold"
                        >
                          <option value="frontend">Frontend Implementation</option>
                          <option value="backend">Backend Runtime Architecture</option>
                          <option value="ui-ux">System Interface Control</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="text-[10px] uppercase text-slate-500 font-bold">System Scope Parameter Integration Objective</label>
                      <textarea 
                        rows="3"
                        value={collabForm.note}
                        onChange={(e) => setCollabForm({...collabForm, note: e.target.value})}
                        placeholder="Detail specific codebase alignment instructions..."
                        className="w-full bg-[#070b14] border border-[#131e35] px-3 py-2 text-xs focus:outline-none focus:border-cyan-500 text-white resize-none placeholder-slate-600"
                      />
                    </div>

                    <button type="submit" className="w-full py-3 bg-white hover:bg-cyan-400 text-black font-black text-xs uppercase tracking-widest clip-trapezoid-left transition-colors">
                      Register System Handshake
                    </button>
                  </form>
                )}
              </div>

              <div className="lg:col-span-5 border border-[#131e35] p-6 bg-[#0b1324] space-y-4">
                <h3 className="text-xs font-black uppercase tracking-widest text-slate-500">Active Pipeline Listeners</h3>
                
                <div className="space-y-2 h-64 overflow-y-auto pr-1">
                  {collabLogs.map(log => (
                    <div key={log.id} className="p-3 bg-[#070b14] border border-[#131e35] flex justify-between items-center text-[11px]">
                      <div>
                        <div className="font-bold text-white">{log.user}</div>
                        <div className="text-[9px] text-slate-500 uppercase font-mono">{log.role}</div>
                      </div>
                      <span className={`text-[9px] font-bold border px-2 py-0.5 bg-[#0b1324] ${log.color}`}>
                        {log.status}
                      </span>
                    </div>
                  ))}
                </div>

                <p className="text-[10px] text-slate-500 leading-relaxed pt-2 border-t border-[#131e35]">
                  Listener threads monitor active requests. Register handles to link system capabilities across unified production models.
                </p>
              </div>

            </div>
          </div>
        )}
      </main>

      <footer className="border-t border-[#131e35] bg-[#070b14] py-8 text-center text-[11px] text-slate-500 font-bold uppercase tracking-wider">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>© 2026 HAMMED KAMALDEEN AYOMIDE // INTEGRITY PARALLELS MAINTAINED</div>
          <div className="text-indigo-400">BUILT // REACT // TAILWIND // ZERO_LEGACY_CODE</div>
        </div>
      </footer>
    </div>
  );
}