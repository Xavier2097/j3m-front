// src/components/ProfileView.tsx
import { motion } from 'framer-motion';
import {
  User,
  AlertCircle,
  MessageSquare,
  Settings,
  HelpCircle,
  LogOut,
  ChevronRight
} from 'lucide-react';

export function ProfileView() {
  const menuItems = [
    { icon: User, label: 'Editar perfil', onClick: () => console.log('Edit profile') },
    { icon: AlertCircle, label: 'SOS de emergencia', onClick: () => console.log('SOS') },
    { icon: MessageSquare, label: 'Posts', onClick: () => console.log('Posts') },
    { icon: Settings, label: 'Ajustes', onClick: () => console.log('Settings') },
    { icon: HelpCircle, label: '¿Nos ayudas a mejorar?', onClick: () => console.log('Feedback') },
    { icon: LogOut, label: 'Cerrar sesión', onClick: () => console.log('Logout'), danger: true },
  ];

  return (
    <div className="h-full overflow-y-auto bg-background pb-24">
      {/* Header */}
      <div className="px-6 py-4">
        <h1 className="text-2xl font-bold text-text">Perfil</h1>
      </div>

      {/* Profile Card */}
      <div className="mx-6 mb-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-surface rounded-[32px] p-8 shadow-sm text-center"
        >
          <div className="w-24 h-24 rounded-full bg-text text-white flex items-center justify-center text-3xl font-bold mx-auto mb-4">
            XP
          </div>
          <h2 className="text-xl font-bold text-text mb-1">Xavier Puentestar</h2>
          <p className="text-sm text-gray-soft">Miembro desde Feb 2026</p>
        </motion.div>
      </div>

      {/* Menu Items */}
      <div className="px-6 space-y-2">
        {menuItems.map((item, index) => (
          <motion.button
            key={item.label}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.05 }}
            onClick={item.onClick}
            className={`w-full flex items-center justify-between px-4 py-4 bg-surface rounded-2xl hover:bg-gray-50 transition-colors ${
              item.danger ? 'text-red-500' : 'text-text'
            }`}
          >
            <div className="flex items-center gap-3">
              <item.icon size={20} />
              <span className="font-medium">{item.label}</span>
            </div>
            <ChevronRight size={20} className="text-gray-400" />
          </motion.button>
        ))}
      </div>

      {/* Stats (Optional) */}
      <div className="px-6 mt-8 mb-6">
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-surface rounded-2xl p-4 text-center shadow-sm">
            <div className="text-2xl font-bold text-accent">7</div>
            <div className="text-xs text-gray-soft mt-1">Hoops</div>
          </div>
          <div className="bg-surface rounded-2xl p-4 text-center shadow-sm">
            <div className="text-2xl font-bold text-accent">24</div>
            <div className="text-xs text-gray-soft mt-1">Validaciones</div>
          </div>
          <div className="bg-surface rounded-2xl p-4 text-center shadow-sm">
            <div className="text-2xl font-bold text-accent">12</div>
            <div className="text-xs text-gray-soft mt-1">Comentarios</div>
          </div>
        </div>
      </div>
    </div>
  );
}
