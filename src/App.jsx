import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code2 } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      desc: "Built with React and Tailwind, featuring a custom cart system.",
      link: "#"
    },
    {
      title: "Task Management App",
      desc: "A productivity tool with drag-and-drop functionality.",
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      {/* Navigation */}
      <nav className="p-6 flex justify-between items-center max-w-6xl mx-auto">
        <h1 className="text-xl font-bold flex items-center gap-2">
          <Code2 className="text-blue-600" /> Syed Saleha
        </h1>
        <div className="space-x-6 hidden md:block">
          <a href="#about" className="hover:text-blue-600 transition">About</a>
          <a href="#projects" className="hover:text-blue-600 transition">Projects</a>
          <a href="#contact" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <header id="about" className="max-w-6xl mx-auto px-6 py-20 text-center md:text-left md:flex items-center justify-between">
        <div className="md:w-2/3">
          <h2 className="text-5xl md:text-7xl font-extrabold mb-6">
            Building digital <span className="text-blue-600">experiences</span> that matter.
          </h2>
          <p className="text-lg text-slate-600 mb-8 max-w-xl">
            I'm a Frontend Developer specializing in React.js and modern CSS. 
            Currently hosting my work at <span className="font-mono text-blue-500">syedsaleha.site</span>.
          </p>
          <div className="flex gap-4 justify-center md:justify-start">
            <a href="https://github.com" className="p-2 bg-white shadow-sm border rounded-full hover:scale-110 transition"><Github /></a>
            <a href="https://linkedin.com" className="p-2 bg-white shadow-sm border rounded-full hover:scale-110 transition"><Linkedin /></a>
          </div>
        </div>
      </header>

      {/* Projects Section */}
      <section id="projects" className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold mb-12">Featured Projects</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((p, i) => (
              <div key={i} className="group p-8 border border-slate-100 rounded-2xl bg-slate-50 hover:bg-blue-50 transition">
                <h4 className="text-xl font-bold mb-2 group-hover:text-blue-600">{p.title}</h4>
                <p className="text-slate-600 mb-4">{p.desc}</p>
                <a href={p.link} className="flex items-center gap-2 text-sm font-semibold text-blue-600">
                  View Project <ExternalLink size={16} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <footer id="contact" className="py-20 px-6 max-w-6xl mx-auto text-center">
        <h3 className="text-3xl font-bold mb-4">Let's connect</h3>
        <p className="text-slate-600 mb-8">Have a project in mind? I'd love to help.</p>
        <a href="mailto:contact@syedsaleha.site" className="inline-flex items-center gap-2 bg-slate-900 text-white px-8 py-3 rounded-full hover:bg-slate-800 transition">
          <Mail size={18} /> Say Hello
        </a>
      </footer>
    </div>
  );
};

export default Portfolio;
