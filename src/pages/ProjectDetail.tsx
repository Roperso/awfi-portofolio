import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, ExternalLink, Github, CheckCircle2, Layers, Cpu, Sparkles, Wrench } from 'lucide-react';
import { projects } from '@/data/projects';

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <main className="min-h-screen pt-32 pb-24 px-6 md:px-12 flex flex-col items-center justify-center text-center">
        <h1 className="t-display text-white text-4xl mb-3">Project Not Found</h1>
        <p className="text-[#8e8e93] mb-8 font-light">The project you are looking for does not exist or has been moved.</p>
        <Link
          to="/"
          className="bg-primary hover:bg-[#8b25f0] text-white px-6 py-2.5 rounded-lg text-sm font-semibold transition-all flex items-center gap-2"
        >
          <ArrowLeft size={16} /> Return to Home
        </Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen pt-32 pb-24 px-6 md:px-12 lg:px-16 relative">
      {/* Background Glow */}
      <div
        className="absolute top-24 left-1/2 -translate-x-1/2 w-[600px] h-[500px] rounded-full pointer-events-none opacity-10 blur-[140px]"
        style={{
          background: 'radial-gradient(circle, #a855f7 0%, transparent 80%)',
        }}
      />

      <div className="section-container max-w-4xl relative z-10">
        {/* Back Link */}
        <Link
          to="/#work"
          className="inline-flex items-center gap-2 text-sm text-[#8e8e93] hover:text-white transition-colors mb-8 group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Back to portfolio
        </Link>

        {/* Category & Status */}
        <div className="flex items-center gap-3 mb-4">
          <span className="px-3 py-1 rounded-md text-[11px] font-mono uppercase tracking-wider bg-primary/10 text-primary border border-primary/20">
            {project.category}
          </span>
          {project.year && (
            <span className="text-xs font-mono text-[#8e8e93] bg-[#121212] border border-[#242424] px-3 py-1 rounded-md">
              {project.year}
            </span>
          )}
          {project.status && (
            <span className="text-xs font-mono text-green-400 bg-green-500/10 border border-green-500/20 px-3 py-1 rounded-md">
              {project.status}
            </span>
          )}
        </div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="t-display text-white"
          style={{ fontSize: 'clamp(32px, 5vw, 56px)' }}
        >
          {project.title}
        </motion.h1>

        {project.role && (
          <p className="text-sm font-mono text-[#8e8e93] mt-3 flex items-center gap-2">
            <span className="text-primary">&bull;</span> Role: {project.role}
          </p>
        )}

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-8 aspect-video rounded-2xl overflow-hidden border border-[#242424] bg-[#121212] shadow-2xl"
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-center"
          />
        </motion.div>

        {/* Overview & Description */}
        <div className="mt-10 bg-[#121212] border border-[#242424] rounded-2xl p-6 md:p-8">
          <h2 className="t-heading text-lg text-white mb-3 flex items-center gap-2">
            <Sparkles size={18} className="text-primary" /> Project Overview
          </h2>
          <p className="text-[#f5f5f5]/90 text-base leading-relaxed font-light">
            {project.overview || project.description}
          </p>
        </div>

        {/* Technologies Used */}
        {project.technologies && project.technologies.length > 0 && (
          <div className="mt-8">
            <h3 className="t-heading text-sm uppercase tracking-wider text-[#8e8e93] mb-3 flex items-center gap-2">
              <Cpu size={16} className="text-primary" /> Tech Stack & Tools
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="bg-[#121212] border border-[#242424] px-3.5 py-1.5 rounded-lg text-xs font-mono text-white"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Key Features */}
        {project.features && project.features.length > 0 && (
          <div className="mt-10 bg-[#121212] border border-[#242424] rounded-2xl p-6 md:p-8">
            <h3 className="t-heading text-lg text-white mb-4 flex items-center gap-2">
              <Layers size={18} className="text-primary" /> Key Features & Architecture
            </h3>
            <ul className="space-y-3">
              {project.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3 text-[#8e8e93] text-sm leading-relaxed">
                  <CheckCircle2 size={16} className="text-primary shrink-0 mt-1" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Challenges & Solutions */}
        {((project.challenges && project.challenges.length > 0) ||
          (project.solutions && project.solutions.length > 0)) && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
            {project.challenges && project.challenges.length > 0 && (
              <div className="bg-[#121212] border border-[#242424] rounded-2xl p-6">
                <h4 className="t-heading text-base text-white mb-3 flex items-center gap-2">
                  <Wrench size={16} className="text-amber-400" /> Challenges
                </h4>
                <ul className="space-y-2.5">
                  {project.challenges.map((c, idx) => (
                    <li key={idx} className="text-xs text-[#8e8e93] leading-relaxed flex items-start gap-2">
                      <span className="text-amber-400 font-bold">&bull;</span>
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {project.solutions && project.solutions.length > 0 && (
              <div className="bg-[#121212] border border-[#242424] rounded-2xl p-6">
                <h4 className="t-heading text-base text-white mb-3 flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-green-400" /> Solutions
                </h4>
                <ul className="space-y-2.5">
                  {project.solutions.map((s, idx) => (
                    <li key={idx} className="text-xs text-[#8e8e93] leading-relaxed flex items-start gap-2">
                      <span className="text-green-400 font-bold">&bull;</span>
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        {/* Results */}
        {project.results && (
          <div className="mt-8 bg-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8">
            <h3 className="t-heading text-sm uppercase tracking-wider text-primary mb-2">
              Results & Impact
            </h3>
            <p className="text-white text-sm md:text-base leading-relaxed font-light">
              {project.results}
            </p>
          </div>
        )}

        {/* Action Links */}
        <div className="mt-10 pt-6 border-t border-[#242424] flex items-center gap-4 flex-wrap">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary hover:bg-[#8b25f0] text-white px-6 py-2.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-2 shadow-lg shadow-primary/20"
            >
              Live Demo <ExternalLink size={14} />
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1a1a1a] hover:bg-[#242424] text-white border border-[#242424] px-6 py-2.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-2"
            >
              <Github size={14} /> Source Code
            </a>
          )}
          {project.externalUrl && (
            <a
              href={project.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1a1a1a] hover:bg-[#242424] text-white border border-[#242424] px-6 py-2.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-2"
            >
              External Link <ExternalLink size={14} />
            </a>
          )}
        </div>
      </div>
    </main>
  );
}
