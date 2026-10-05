import { ArrowUp } from 'lucide-react';
import { FaLinkedin } from 'react-icons/fa';
import { SiGithub, SiInstagram } from 'react-icons/si';
import { socialLinks } from '@/data/socials';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#080808] border-t border-[#242424] text-[#8e8e93]">
      <div className="section-container px-6 md:px-12 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary"></span>
              <span className="font-bold text-white text-base tracking-tight">Awfi Muhammad</span>
            </div>
            <p className="text-sm mt-1.5 text-[#8e8e93] font-light">
              Informatics Student &bull; Software Developer &bull; Creative Designer
            </p>
            <p className="text-xs text-[#8e8e93]/80 mt-1 font-mono">
              Sariwangi, Bandung Barat, Indonesia
            </p>
          </div>

          {/* Social Links & Back to Top */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-5 text-sm font-medium">
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors flex items-center gap-1.5 group"
              >
                <FaLinkedin size={15} className="text-[#0A66C2] group-hover:scale-110 transition-transform" /> LinkedIn
              </a>
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors flex items-center gap-1.5 group"
              >
                <SiGithub size={15} className="text-white group-hover:scale-110 transition-transform" /> GitHub
              </a>
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors flex items-center gap-1.5 group"
              >
                <SiInstagram size={15} className="text-[#E4405F] group-hover:scale-110 transition-transform" /> Instagram
              </a>
            </div>

            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="w-9 h-9 rounded-full bg-[#121212] border border-[#242424] hover:border-primary/50 text-[#8e8e93] hover:text-white flex items-center justify-center transition-colors cursor-pointer ml-2"
            >
              <ArrowUp size={15} />
            </button>
          </div>
        </div>

        <div className="border-t border-[#242424]/80 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-[#8e8e93]/70">
          <p>© 2026 Awfi Muhammad. All rights reserved.</p>
          <p>Designed with high-end product studio aesthetic.</p>
        </div>
      </div>
    </footer>
  );
}
