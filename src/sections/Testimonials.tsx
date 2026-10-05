import { motion } from 'motion/react';
import GlowCard from '@/components/GlowCard';
import SectionHeading from '@/components/SectionHeading';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote:
      'Awfi demonstrates strong technical foundations in software development and consistently delivers creative UI/UX designs with attention to detail.',
    name: 'Academic Peer / Project Collaborator',
    role: 'Software Engineering Team',
  },
  {
    quote:
      'Exceptional ability in translating complex ideas into intuitive visual assets and digital interfaces. Highly collaborative and communicative.',
    name: 'Organization Partner',
    role: 'HMTI Division Lead',
  },
  {
    quote:
      'Reliable delivery across freelance graphic design and front-end development tasks with a keen eye for modern dark aesthetic design standards.',
    name: 'Freelance Client',
    role: 'Digital Media Project',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-28 px-6 md:px-12 lg:px-16 relative">
      <div className="section-container">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-primary"></span>
              <span className="t-label text-primary">Recommendations</span>
            </div>
            <SectionHeading>From clients.</SectionHeading>
          </div>
          <p className="text-[#8e8e93] text-sm md:text-base max-w-md font-light">
            Feedback and peer reviews on project execution, technical reliability, and design collaboration.
          </p>
        </div>

        {/* 3 Testimonials in a row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <GlowCard className="p-8 h-full flex flex-col justify-between border-t-2 border-t-primary rounded-xl bg-[#121212] border-[#242424]">
                <div>
                  <Quote size={24} className="text-primary/40 mb-5" />
                  <blockquote className="text-[#f5f5f5]/90 text-[14px] italic leading-relaxed font-light">
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>
                </div>

                <div className="mt-8 pt-5 border-t border-[#242424]">
                  <p className="font-semibold text-white text-sm">{testimonial.name}</p>
                  <p className="font-mono text-[10px] text-[#8e8e93] uppercase tracking-wider mt-1">
                    {testimonial.role}
                  </p>
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
