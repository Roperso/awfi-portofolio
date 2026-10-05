import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink } from 'lucide-react';

interface CertificateLightboxProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  image: string;
}

export default function CertificateLightbox({
  isOpen,
  onClose,
  title,
  image,
}: CertificateLightboxProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-6"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="relative max-w-4xl w-full max-h-[90vh] flex flex-col items-center bg-[#121212] border border-[#242424] rounded-2xl p-4 md:p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header / Close */}
            <div className="w-full flex items-center justify-between pb-4 mb-2 border-b border-[#242424]">
              <h3 className="text-white font-bold text-sm md:text-base truncate pr-4">
                {title}
              </h3>
              <button
                onClick={onClose}
                aria-label="Close modal"
                className="w-8 h-8 rounded-lg bg-[#1a1a1a] hover:bg-[#242424] text-[#8e8e93] hover:text-white flex items-center justify-center transition-colors cursor-pointer shrink-0"
              >
                <X size={18} />
              </button>
            </div>

            {/* Image Box */}
            <div className="w-full max-h-[72vh] flex items-center justify-center overflow-hidden rounded-xl bg-[#0a0a0a]">
              {image ? (
                <img
                  src={image}
                  alt={title}
                  className="max-w-full max-h-[72vh] object-contain rounded-lg"
                />
              ) : (
                <div className="w-full aspect-video flex items-center justify-center text-[#8e8e93] text-sm">
                  Certificate image preview
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
