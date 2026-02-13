import { useState } from 'react';
import { Home, FileText, Bell, User } from 'lucide-react';
import { motion } from 'framer-motion';
import { MapView } from './components/MapView';
import { PostsView } from './components/PostsView';
import { FeedView } from './components/FeedView';
import { ProfileView } from './components/ProfileView';
import { CreatePostModal } from './components/CreatePostModal';

function App() {
  const [activeTab, setActiveTab] = useState('feed');
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-text font-sans flex justify-center overflow-hidden">
      {/* Mobile Container */}
      <div className="w-full max-w-md bg-background min-h-screen relative shadow-2xl flex flex-col overflow-hidden">
        
        {/* Main Content - Full Height */}
        <main className="flex-1 relative overflow-hidden">
          {activeTab === 'feed' && <FeedView />}
          {activeTab === 'home' && (
            <MapView onOpenCreateModal={() => setIsCreateModalOpen(true)} />
          )}
          {activeTab === 'posts' && <PostsView />}
          {activeTab === 'notifications' && (
            <div className="h-full flex items-center justify-center px-6 text-center">
              <div>
                <Bell size={48} className="mx-auto text-gray-soft mb-4" />
                <h2 className="text-xl font-bold text-text mb-2">Notificaciones</h2>
                <p className="text-gray-soft">No tienes notificaciones nuevas</p>
              </div>
            </div>
          )}
          {activeTab === 'profile' && <ProfileView />}
        </main>

        {/* Bottom Navigation */}
        <nav className="absolute bottom-0 left-0 right-0 bg-surface border-t border-gray-100 px-2 py-2 flex justify-around items-center z-[1001] safe-area-inset-bottom">
          {[
            { id: 'feed', icon: Home, label: 'Inicio' },
            { id: 'home', icon: FileText, label: 'Explora' },
            { id: 'notifications', icon: Bell, label: 'Notificaciones' },
            { id: 'profile', icon: User, label: 'Perfil' }
          ].map((tab) => (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              whileTap={{ scale: 0.95 }}
              className={`flex flex-col items-center gap-1 px-4 py-2 rounded-lg transition-colors ${
                activeTab === tab.id
                  ? 'text-accent'
                  : 'text-gray-soft'
              }`}
            >
              <tab.icon size={22} strokeWidth={activeTab === tab.id ? 2.5 : 2} />
              <span className="text-[10px] font-medium">{tab.label}</span>
            </motion.button>
          ))}
        </nav>

        {/* Create Post Modal */}
        <CreatePostModal
          isOpen={isCreateModalOpen}
          onClose={() => setIsCreateModalOpen(false)}
        />

      </div>
    </div>
  );
}

export default App;