import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, ExternalLink, Github } from 'lucide-react';
import { projects } from '@/data/projects';
import GlowCard from '@/components/GlowCard';
import SectionHeading from '@/components/SectionHeading';

export default function SelectedWork() {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  // Extract unique categories for filter chips
  const categoryFilters = useMemo(() => {
    return ['All', 'Data Science', 'Game Development', 'Computer Vision', 'UI/UX & Design'];
  }, []);

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') return projects;
    return projects.filter((p) => {
      const cat = p.category.toLowerCase();
      if (activeCategory === 'Data Science') return cat.includes('data science');
      if (activeCategory === 'Game Development') return cat.includes('game') || cat.includes('unity');
      if (activeCategory === 'Computer Vision') return cat.includes('vision') || cat.includes('yolo');
      if (activeCategory === 'UI/UX & Design') return cat.includes('design') || cat.includes('ui/ux') || cat.includes('graphic');
      return true;
    });
  }, [activeCategory]);

  return (
    <section id="work" className="py-28 px-6 md:px-12 lg:px-16 relative">
      <div className="section-container">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Sparkles size={14} className="text-primary" />
              <span className="t-label text-primary">Featured Portfolio</span>
            </div>
            <SectionHeading>Selected work.</SectionHeading>
          </div>
          <p className="text-[#8e8e93] text-sm md:text-base max-w-md font-light">
            Interactive digital experiences, data science machine learning applications, software development, and creative design systems.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 mb-10 flex-wrap">
          {categoryFilters.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-medium transition-all duration-300 border cursor-pointer ${
                  isActive
                    ? 'bg-primary text-white border-primary shadow-lg shadow-primary/25'
                    : 'bg-[#121212] text-[#8e8e93] border-[#242424] hover:text-white hover:border-[#8e8e93]/40'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Asymmetric Project Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => {
              const isFirst = index === 0 && activeCategory === 'All';
              return (
                <motion.div
                  key={project.slug}
                  layout
                  className={isFirst ? 'md:col-span-2' : 'col-span-1'}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <GlowCard className="h-full rounded-xl overflow-hidden group border border-[#242424] bg-[#121212]">
                    <div className="flex flex-col h-full justify-between">
                      <Link to={`/projects/${project.slug}`} className="block relative flex-1">
                        {/* Image Box */}
                        <div
                          className={`relative overflow-hidden bg-[#1a1a1a] ${
                            isFirst ? 'aspect-[21/9] md:aspect-[21/9]' : 'aspect-video'
                          }`}
                        >
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                            loading="lazy"
                          />

                          {/* Subtle Dark Gradient Overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-300" />

                          {/* Category Badge on Image Top Left */}
                          <div className="absolute top-4 left-4 z-10">
                            <span className="px-3 py-1 rounded-md text-[10px] font-mono uppercase tracking-wider bg-[#0a0a0a]/80 backdrop-blur-md border border-[#242424] text-white">
                              {project.category}
                            </span>
                          </div>

                          {/* Year Badge Top Right */}
                          <div className="absolute top-4 right-4 z-10">
                            <span className="px-2.5 py-1 rounded-md text-[11px] font-mono text-[#8e8e93] bg-[#0a0a0a]/80 backdrop-blur-md border border-[#242424]">
                              {project.year}
                            </span>
                          </div>
                        </div>

                        {/* Card Content Header & Body */}
                        <div className="p-6 md:p-7">
                          <h3 className="t-heading text-lg md:text-xl text-white group-hover:text-primary transition-colors flex items-center justify-between">
                            <span>{project.title}</span>
                            <ArrowRight
                              size={18}
                              className="text-[#8e8e93] group-hover:text-primary group-hover:translate-x-1.5 transition-all shrink-0 ml-2"
                            />
                          </h3>
                          <p className="text-[#8e8e93] text-sm mt-2.5 line-clamp-2 font-light leading-relaxed">
                            {project.description}
                          </p>
                        </div>
                      </Link>

                      {/* Card Content Footer with Quick Links & Tech Tags */}
                      <div className="px-6 md:px-7 pb-6 pt-2">
                        {/* Action Buttons if Demo / GitHub Links exist */}
                        {(project.demoUrl || project.githubUrl) && (
                          <div className="flex items-center gap-2 mb-4">
                            {project.demoUrl && (
                              <a
                                href={project.demoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="bg-primary hover:bg-[#8b25f0] text-white px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 shadow-md shadow-primary/20 z-20"
                              >
                                Live Demo <ExternalLink size={12} />
                              </a>
                            )}
                            {project.githubUrl && (
                              <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="bg-[#1a1a1a] hover:bg-[#242424] text-white border border-[#242424] px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 z-20"
                              >
                                <Github size={12} /> GitHub
                              </a>
                            )}
                          </div>
                        )}

                        {/* Technologies Tags */}
                        <div className="flex flex-wrap gap-2 pt-4 border-t border-[#242424]">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="text-[11px] font-mono px-2.5 py-1 rounded bg-[#1a1a1a] text-[#8e8e93] border border-[#242424]/60"
                            >
                              {tech}
                            </span>
                          ))}
                          <Link
                            to={`/projects/${project.slug}`}
                            className="text-[11px] font-medium text-primary ml-auto flex items-center gap-1 hover:underline self-center"
                          >
                            Details &rarr;
                          </Link>
                        </div>
                      </div>
                    </div>
                  </GlowCard>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
