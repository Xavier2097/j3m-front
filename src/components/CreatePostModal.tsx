// src/components/CreatePostModal.tsx
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useState } from 'react';

interface CreatePostModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CreatePostModal({ isOpen, onClose }: CreatePostModalProps) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = () => {
    // TODO: Implement post creation
    console.log('Creating post:', { title, content });
    setTitle('');
    setContent('');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 z-[2000]"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, y: '100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="absolute inset-x-0 bottom-0 bg-surface rounded-t-[32px] z-[2001] max-h-[90vh] overflow-hidden flex flex-col shadow-2xl border-t border-gray-100"
          >
            {/* Header */}
            <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
              <h2 className="text-xl font-bold text-text">Crear post</h2>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X size={24} className="text-text" />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto px-6 py-6">
              <div className="space-y-6">
                {/* Instructions */}
                <div>
                  <h3 className="text-lg font-bold text-text mb-2">¿Qué ha pasado?</h3>
                  <p className="text-sm text-gray-soft leading-relaxed">
                    Cuenta lo que ha sucedido mediante un titular y una descripción.
                    Trata de que tu post sea lo más claro y conciso posible. Ten en
                    cuenta que cualquier vocabulario inadecuado, ofensivo,
                    denigrante, etc. podrá suponer la eliminación de este post.
                  </p>
                </div>

                {/* Title Input */}
                <div>
                  <label className="block text-base font-bold text-text mb-2">
                    Titular
                  </label>
                  <input
                    type="text"
                    placeholder="Titular"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    maxLength={120}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl text-text placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                  />
                  <p className="text-xs text-gray-400 mt-1">{title.length}/120 caracteres</p>
                </div>

                {/* Content Input */}
                <div>
                  <label className="block text-base font-bold text-text mb-2">
                    Contenido
                  </label>
                  <textarea
                    placeholder="Contenido"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    maxLength={500}
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl text-text placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent resize-none"
                  />
                  <p className="text-xs text-gray-400 mt-1">{content.length}/500 caracteres</p>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="px-6 py-4 border-t border-gray-100">
              <button
                onClick={handleSubmit}
                disabled={!title.trim() || !content.trim()}
                className={`w-full py-3 rounded-full font-bold text-base transition-all ${
                  title.trim() && content.trim()
                    ? 'bg-accent text-white hover:bg-blue-700 active:scale-95'
                    : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                }`}
              >
                Siguiente
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
