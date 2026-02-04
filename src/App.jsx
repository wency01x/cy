// src/App.jsx
import Header from './components/Header';
import About from './components/About';
import TechStack from './components/TechStack';
import Timeline from './components/Timeline';
import LogoLoop from './components/LogoLoop'; 
// MODIFIED: Added SiGithub to the import list
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiNodedotjs, SiPython, SiMysql, SiPostgresql, SiGithub } from 'react-icons/si';

const techLogos = [
  // MODIFIED: Added href properties to make them clickable. 
  // Added SiGithub to match your professional tech stack.
  { node: <SiGithub />, title: "GitHub", href: "https://github.com/wency01x" }, 
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiNodedotjs />, title: "Node.js", href: "https://nodejs.org" },
  { node: <SiPython />, title: "Python", href: "https://www.python.org" },
  { node: <SiMysql />, title: "MySQL", href: "https://www.mysql.com" },
  { node: <SiPostgresql />, title: "PostgreSQL", href: "https://www.postgresql.org" },
];

function App() {
  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-10 font-sans text-gray-800">
      <div className="max-w-5xl mx-auto space-y-6">
        <Header />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <About />
            <TechStack />
            
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
               <h2 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-6">Technologies in Motion</h2>
               <LogoLoop
                 logos={techLogos}
                 speed={60} 
                 direction="left"
                 logoHeight={40}
                 gap={50}
                 pauseOnHover={true}
                 // MODIFIED: Enabled scaleOnHover to provide visual feedback when clicking
                 scaleOnHover={true} 
                 fadeOut={true}
                 fadeOutColor="#ffffff" 
               />
            </div>
          </div>

          <div className="space-y-6">
            <Timeline title="Experience" type="experience" />
            <Timeline title="Education" type="education" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;