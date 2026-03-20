import { motion } from "motion/react";
import { Layout, Shield, Globe, Server, Rocket, CheckCircle2 } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-900">
      {/* Navigation */}
      <nav className="border-b border-stone-200 bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center text-white font-bold">B</div>
            <span className="font-semibold tracking-tight text-xl">BMAS Indonesia</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-600">
            <a href="#storyboard" className="hover:text-emerald-600 transition-colors">Storyboard</a>
            <a href="#compliance" className="hover:text-emerald-600 transition-colors">Compliance</a>
            <a href="#tech" className="hover:text-emerald-600 transition-colors">Tech Stack</a>
          </div>
          <button className="bg-stone-900 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-stone-800 transition-all">
            Project Dashboard
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight mb-6">
              Building the Future of <span className="text-emerald-600">BMAS Indonesia</span>
            </h1>
            <p className="text-xl text-stone-600 mb-8 leading-relaxed">
              A modern, compliant, and high-performance corporate presence built with Next.js, 
              Storyblok, and Huawei Cloud Jakarta.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#storyboard"
                className="bg-emerald-600 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-600/20 flex items-center gap-2"
              >
                View Storyboard <Rocket size={18} />
              </a>
              <div className="bg-white border border-stone-200 px-8 py-4 rounded-2xl font-semibold flex items-center gap-2">
                <Shield size={18} className="text-emerald-600" /> PP 71/2019 Compliant
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Background Accent */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-emerald-50 -z-0 rounded-l-[100px] hidden lg:block" />
      </header>

      {/* Project Phases */}
      <section id="storyboard" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Project Phases</h2>
            <p className="text-stone-500">Our strategic roadmap for a successful deployment.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                phase: "Phase 1", 
                title: "Preparation & Architecture", 
                icon: <Layout className="text-emerald-600" />,
                tasks: ["Git Repo Init", "Next.js Setup", "Compliance Audit"]
              },
              { 
                phase: "Phase 2", 
                title: "Storyblok Setup", 
                icon: <Globe className="text-emerald-600" />,
                tasks: ["Space Registration", "Blok Schemas", "API Key Mgmt"]
              },
              { 
                phase: "Phase 3", 
                title: "Frontend Integration", 
                icon: <Server className="text-emerald-600" />,
                tasks: ["Visual Editor Bridge", "Tailwind Components", "SEO Setup"]
              },
              { 
                phase: "Phase 4", 
                title: "Huawei Cloud", 
                icon: <Shield className="text-emerald-600" />,
                tasks: ["Jakarta Region ECS", "WAF & SSL", "Data Residency"]
              },
              { 
                phase: "Phase 5", 
                title: "Launch & CI/CD", 
                icon: <Rocket className="text-emerald-600" />,
                tasks: ["Pipeline Setup", "Perf Optimization", "Go-Live"]
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -5 }}
                className="p-8 rounded-3xl border border-stone-100 bg-stone-50/50 hover:bg-white hover:shadow-xl transition-all"
              >
                <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 mb-2 block">{item.phase}</span>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <ul className="space-y-3">
                  {item.tasks.map((task, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-stone-600">
                      <CheckCircle2 size={14} className="text-emerald-500" /> {task}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section id="compliance" className="py-24 bg-stone-900 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold tracking-tight mb-6">Strict Data Residency & Compliance</h2>
              <p className="text-stone-400 text-lg mb-8 leading-relaxed">
                Adhering to Indonesian Government Regulation No. 71 of 2019 (PP 71/2019). 
                All PII and transactional data is strictly isolated within the Huawei Cloud Jakarta Region.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="mt-1 p-2 bg-emerald-500/20 rounded-lg">
                    <CheckCircle2 size={20} className="text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="font-bold">Jakarta Data Sovereignty</h4>
                    <p className="text-stone-500 text-sm">Servers and databases hosted exclusively in ap-southeast-3.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="mt-1 p-2 bg-emerald-500/20 rounded-lg">
                    <CheckCircle2 size={20} className="text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="font-bold">PII Isolation</h4>
                    <p className="text-stone-500 text-sm">Zero PII data routed through third-party CMS providers.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-emerald-600/10 rounded-full blur-3xl absolute inset-0" />
              <div className="relative bg-stone-800 border border-stone-700 p-8 rounded-3xl shadow-2xl">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="space-y-4 font-mono text-xs text-emerald-400">
                  <p>// Compliance Check: PP 71/2019</p>
                  <p>const REGION = "ap-southeast-3"; // Jakarta</p>
                  <p>const DATA_RESIDENCY = true;</p>
                  <p>const PII_IN_CMS = false;</p>
                  <p className="text-stone-500 mt-4">{"{"}</p>
                  <p className="ml-4">"status": "SECURE",</p>
                  <p className="ml-4">"location": "Indonesia",</p>
                  <p className="ml-4">"provider": "Huawei Cloud"</p>
                  <p className="text-stone-500">{"}"}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-stone-900 rounded flex items-center justify-center text-white text-xs font-bold">B</div>
            <span className="font-semibold text-stone-900">BMAS Indonesia</span>
          </div>
          <p className="text-stone-500 text-sm">
            © 2026 BMAS Indonesia. All rights reserved.
          </p>
          <div className="flex gap-6 text-stone-400">
            <a href="#" className="hover:text-stone-900 transition-colors">Privacy</a>
            <a href="#" className="hover:text-stone-900 transition-colors">Terms</a>
            <a href="#" className="hover:text-stone-900 transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
