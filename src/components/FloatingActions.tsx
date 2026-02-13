// src/components/FloatingActions.tsx
import { motion } from 'framer-motion';
import { Menu, Navigation, MessageCircle, Plus } from 'lucide-react';

export function FloatingActions({ onOpenCreateModal }: { onOpenCreateModal: () => void }) {
  return (
    <div className="absolute right-4 bottom-32 z-[1000] flex flex-col gap-3">
      {/* Menu Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-shadow"
      >
        <Menu size={20} className="text-gray-700" />
      </motion.button>

      {/* Navigation/Location Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-shadow"
      >
        <Navigation size={20} className="text-accent" />
      </motion.button>

      {/* Create / Message Button - Highlighted */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={onOpenCreateModal}
        className="w-14 h-14 bg-accent rounded-full shadow-2xl shadow-accent/50 flex items-center justify-center hover:shadow-accent/70 transition-shadow relative"
      >
        <MessageCircle size={24} className="text-white" fill="white" />
        <div className="absolute top-0 right-0 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-md border border-gray-100 transform translate-x-1 -translate-y-1">
          <Plus size={16} className="text-accent" strokeWidth={3} />
        </div>
      </motion.button>
    </div>
  );
}
