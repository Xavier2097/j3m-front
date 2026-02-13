/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Hoople Color Palette
        background: '#F2F4F6',  // Gris pálido premium
        surface: '#FFFFFF',     // Blanco puro
        accent: '#2D68FF',      // Azul eléctrico Hoople
        text: '#1A1D1F',        // Casi negro
        'accent-light': '#E8EFFF', // Azul claro para fondos
        'gray-soft': '#8F9BB3', // Gris suave para texto secundario
        
        // Incident Category Colors
        'incident-robo': '#FF6B6B',      // Rojo para robos
        'incident-accidente': '#4ECDC4',  // Turquesa para accidentes
        'incident-trafico': '#FFE66D',    // Amarillo para tráfico
        'incident-vandalismo': '#A8DADC', // Azul claro para vandalismo
        'incident-otro': '#95E1D3',       // Verde menta para otros
      },
      borderRadius: {
        'hoople': '32px',       // Contenedores principales
        'hoople-lg': '28px',    // Tarjetas medianas
        'hoople-md': '24px',    // Elementos pequeños
        'hoople-sm': '20px',    // Botones y chips
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}