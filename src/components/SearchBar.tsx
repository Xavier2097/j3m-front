// src/components/SearchBar.tsx
import { Search, SlidersHorizontal } from 'lucide-react';

export function SearchBar() {
  return (
    <div className="absolute top-4 left-4 right-4 z-[1000]">
      <div className="bg-white rounded-full shadow-lg px-4 py-3 flex items-center gap-3">
        <Search size={20} className="text-gray-soft flex-shrink-0" />
        <input
          type="text"
          placeholder="¿Dónde quieres buscar?"
          className="flex-1 outline-none text-sm text-text placeholder:text-gray-soft"
        />
        <button className="p-1.5 hover:bg-gray-100 rounded-full transition-colors">
          <SlidersHorizontal size={18} className="text-gray-soft" />
        </button>
      </div>
    </div>
  );
}
