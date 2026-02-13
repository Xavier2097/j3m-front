// src/components/PostsView.tsx
import { motion } from 'framer-motion';
import { mockHoops, incidentCategories } from '../data/mockData';
import { Clock, ThumbsUp, MessageSquare, MapPin } from 'lucide-react';

export function PostsView() {
  return (
    <div className="h-full overflow-y-auto bg-background px-4 py-6 pb-24">
      <h2 className="text-xl font-bold text-text mb-4">Hoops Recientes</h2>
      
      <div className="space-y-3">
        {mockHoops
          .sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime())
          .map((hoop, index) => {
            const category = incidentCategories[hoop.category];
            
            return (
              <motion.div
                key={hoop.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="bg-surface rounded-hoople-lg p-4 shadow-sm hover:shadow-md transition-shadow"
              >
                {/* Header */}
                <div className="flex items-start gap-3 mb-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-xl flex-shrink-0"
                    style={{ backgroundColor: category.color }}
                  >
                    {category.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-bold uppercase" style={{ color: category.color }}>
                        {category.label}
                      </span>
                      <span className="text-xs text-gray-soft">•</span>
                      <span className="text-xs text-gray-soft flex items-center gap-1">
                        <Clock size={12} />
                        {hoop.timestamp.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' })}
                      </span>
                    </div>
                    <h3 className="font-bold text-sm text-text mb-1">{hoop.title}</h3>
                    <p className="text-xs text-gray-soft mb-2">{hoop.description}</p>
                    
                    {/* Location */}
                    <div className="flex items-center gap-1 text-xs text-gray-soft mb-3">
                      <MapPin size={12} />
                      <span>{hoop.location.address}</span>
                    </div>
                    
                    {/* Engagement */}
                    <div className="flex items-center gap-4 text-xs">
                      <button className="flex items-center gap-1 text-gray-soft hover:text-accent transition-colors">
                        <ThumbsUp size={14} />
                        <span className="font-medium">{hoop.validations}</span>
                      </button>
                      <button className="flex items-center gap-1 text-gray-soft hover:text-accent transition-colors">
                        <MessageSquare size={14} />
                        <span className="font-medium">{hoop.comments}</span>
                      </button>
                    </div>
                  </div>
                </div>
                
                {/* Author */}
                <div className="flex items-center gap-2 pt-3 border-t border-gray-100">
                  <div className="w-6 h-6 rounded-full bg-accent text-white flex items-center justify-center text-xs font-bold">
                    {hoop.author.initials}
                  </div>
                  <span className="text-xs text-gray-soft">{hoop.author.name}</span>
                </div>
              </motion.div>
            );
          })}
      </div>
    </div>
  );
}
