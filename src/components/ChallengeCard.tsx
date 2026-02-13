// src/components/ChallengeCard.tsx
import { motion } from 'framer-motion';
import { Clock, Trophy, Flame } from 'lucide-react';
import type { Challenge } from '../data/mockData';

interface ChallengeCardProps {
  challenge: Challenge;
  index: number;
}

export function ChallengeCard({ challenge, index }: ChallengeCardProps) {
  const statusColors = {
    pending: 'bg-yellow-50 text-yellow-600 border-yellow-200',
    active: 'bg-green-50 text-green-600 border-green-200',
    completed: 'bg-blue-50 text-blue-600 border-blue-200'
  };

  const statusIcons = {
    pending: Clock,
    active: Flame,
    completed: Trophy
  };

  const StatusIcon = statusIcons[challenge.status];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileTap={{ scale: 0.98 }}
      className="bg-surface rounded-hoople p-5 shadow-sm hover:shadow-md transition-all cursor-pointer border border-gray-100"
    >
      {/* Header con estado y monto */}
      <div className="flex justify-between items-start mb-4">
        <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold border ${statusColors[challenge.status]}`}>
          <StatusIcon size={14} />
          <span className="capitalize">{challenge.status === 'pending' ? 'Pendiente' : challenge.status === 'active' ? 'Activo' : 'Completado'}</span>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold text-accent">${challenge.amount}</div>
          <div className="text-xs text-gray-soft font-medium">en juego</div>
        </div>
      </div>

      {/* Título del desafío */}
      <h3 className="text-base font-bold text-text mb-4 leading-tight">
        {challenge.title}
      </h3>

      {/* Rival info */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center font-bold text-sm">
            {challenge.rival.initials}
          </div>
          <div>
            <div className="text-sm font-bold text-text">vs {challenge.rival.name}</div>
            <div className="text-xs text-gray-soft font-medium">{challenge.category}</div>
          </div>
        </div>

        {/* Botón de acción */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-9 h-9 rounded-full bg-accent-light text-accent flex items-center justify-center font-bold text-sm hover:bg-accent hover:text-white transition-colors"
        >
          →
        </motion.button>
      </div>
    </motion.div>
  );
}
