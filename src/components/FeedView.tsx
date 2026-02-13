import { motion, AnimatePresence } from 'framer-motion';
import { ThumbsUp, MessageCircle, Bookmark, MoreHorizontal } from 'lucide-react';
import { useState, useEffect } from 'react';
import { mockNews } from '../data/mockData';

interface Post {
  id: string;
  author: {
    name: string;
    initials: string;
    location: string;
    verified: boolean;
  };
  title: string;
  description: string;
  image: string;
  likes: number;
  comments: number;
  timestamp: string;
}

const mockPosts: Post[] = [
  {
    id: '1',
    author: {
      name: 'SOS Desaparecidos',
      initials: 'SD',
      location: 'El Vallón, Madrid, España',
      verified: true,
    },
    title: 'Persona desaparecida',
    description: 'Ibtissame H.',
    image: '/placeholder-missing-person.jpg',
    likes: 99,
    comments: 0,
    timestamp: 'Hace 3h',
  },
];

export function FeedView() {
  const [likedPosts, setLikedPosts] = useState<Set<string>>(new Set());
  const [savedPosts, setSavedPosts] = useState<Set<string>>(new Set());
  
  // Slider State
  const [currentNewsIndex, setCurrentNewsIndex] = useState(0);
  const [newsDirection, setNewsDirection] = useState(0);
  const news = mockNews;

  // Auto-play for the slider
  useEffect(() => {
    const interval = setInterval(() => {
      setNewsDirection(1);
      setCurrentNewsIndex((prev) => (prev + 1) % news.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [news.length]);

  const slideVariants = {
    enter: (direction: number) => ({
      y: direction > 0 ? 400 : -400,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      y: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      y: direction < 0 ? 400 : -400,
      opacity: 0,
    }),
  };

  const toggleLike = (postId: string) => {
    setLikedPosts(prev => {
      const newSet = new Set(prev);
      if (newSet.has(postId)) {
        newSet.delete(postId);
      } else {
        newSet.add(postId);
      }
      return newSet;
    });
  };

  const toggleSave = (postId: string) => {
    setSavedPosts(prev => {
      const newSet = new Set(prev);
      if (newSet.has(postId)) {
        newSet.delete(postId);
      } else {
        newSet.add(postId);
      }
      return newSet;
    });
  };

  return (
    <div className="h-full overflow-y-auto bg-background pb-24">
      {/* Header */}
      <div className="sticky top-0 bg-background z-10 px-6 py-4 flex justify-between items-center border-b border-gray-100">
        <h1 className="text-2xl font-bold text-text">Feed</h1>
        <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
          <MoreHorizontal size={24} className="text-text" />
        </button>
      </div>

      {/* Posts */}
      <div className="space-y-0">
        {mockPosts.map((post, index) => (
          <motion.article
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-surface border-b border-gray-100"
          >
            {/* Post Header */}
            <div className="px-4 py-3 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center font-bold text-sm">
                {post.author.initials}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-1">
                  <span className="font-bold text-sm text-text">{post.author.name}</span>
                  {post.author.verified && (
                    <svg className="w-4 h-4 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                  )}
                </div>
                <p className="text-xs text-gray-soft">{post.author.location}</p>
              </div>
              <span className="text-xs text-gray-soft">{post.timestamp}</span>
            </div>

            {/* Post Content */}
            <div className="px-4 pb-2">
              <h3 className="font-bold text-base text-text mb-1">{post.title}</h3>
              <p className="text-sm text-gray-soft">{post.description}</p>
            </div>

            {/* Post Image Slider (Local implementation) */}
            <div className="w-full aspect-[4/5] bg-gray-900 overflow-hidden relative">
              <AnimatePresence initial={false} custom={newsDirection}>
                <motion.div
                  key={currentNewsIndex}
                  custom={newsDirection}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    y: { type: 'spring', stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 },
                  }}
                  className="absolute inset-0"
                >
                  <img
                    src={news[currentNewsIndex].image}
                    alt={news[currentNewsIndex].title}
                    className="w-full h-full object-cover"
                  />
                  {/* Text Overlay */}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-6 text-white text-center">
                    <div className="bg-white text-red-600 rounded-lg p-3 max-w-xs mx-auto mb-2">
                       <p className="font-bold text-lg uppercase">DESAPARECIDA</p>
                       <p className="text-sm font-medium">{news[currentNewsIndex].title}</p>
                    </div>
                    <p className="text-xs text-gray-200">
                      Actualización - {new Date(news[currentNewsIndex].date).toLocaleDateString('es-ES')}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Slider Dots */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-1.5 focus:outline-none">
                {news.map((_, i) => (
                  <div
                    key={i}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === currentNewsIndex ? 'w-6 bg-white' : 'w-1.5 bg-white/40'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Post Actions */}
            <div className="px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={() => toggleLike(post.id)}
                  className="flex items-center gap-1.5"
                >
                  <ThumbsUp
                    size={22}
                    className={likedPosts.has(post.id) ? 'text-accent fill-accent' : 'text-gray-soft'}
                  />
                  <span className={`text-sm font-medium ${likedPosts.has(post.id) ? 'text-accent' : 'text-gray-soft'}`}>
                    {post.likes + (likedPosts.has(post.id) ? 1 : 0)}
                  </span>
                </motion.button>

                <motion.button
                  whileTap={{ scale: 0.9 }}
                  className="flex items-center gap-1.5"
                >
                  <MessageCircle size={22} className="text-gray-soft" />
                  <span className="text-sm font-medium text-gray-soft">{post.comments}</span>
                </motion.button>
              </div>

              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => toggleSave(post.id)}
              >
                <Bookmark
                  size={22}
                  className={savedPosts.has(post.id) ? 'text-accent fill-accent' : 'text-gray-soft'}
                />
              </motion.button>
            </div>
          </motion.article>
        ))}

        {/* Empty State */}
        <div className="px-6 py-12 text-center">
          <p className="text-gray-soft text-sm">No hay más posts por ahora</p>
          <p className="text-gray-400 text-xs mt-1">Vuelve más tarde para ver nuevas actualizaciones</p>
        </div>
      </div>
    </div>
  );
}
