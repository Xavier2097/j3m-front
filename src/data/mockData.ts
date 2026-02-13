// src/data/mockData.ts

// News Item Type
export interface NewsItem {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  date: string;
}

// Incident Category Type
export type IncidentCategory = 'robo' | 'accidente' | 'trafico' | 'vandalismo' | 'otro';

export interface Hoop {
  id: string;
  title: string;
  description: string;
  category: IncidentCategory;
  location: {
    lat: number;
    lng: number;
    address: string;
  };
  timestamp: Date;
  author: {
    name: string;
    initials: string;
  };
  validations: number;
  comments: number;
}

// Categorías con sus colores e iconos
export const incidentCategories = {
  robo: {
    label: 'Robo',
    color: '#FF6B6B',
    icon: '🚨',
  },
  accidente: {
    label: 'Accidente',
    color: '#4ECDC4',
    icon: '🚗',
  },
  trafico: {
    label: 'Tráfico',
    color: '#FFE66D',
    icon: '🚦',
  },
  vandalismo: {
    label: 'Vandalismo',
    color: '#A8DADC',
    icon: '⚠️',
  },
  otro: {
    label: 'Otro',
    color: '#95E1D3',
    icon: '📍',
  },
};

// Mock data - Incidentes en Barcelona
export const mockHoops: Hoop[] = [
  {
    id: '1',
    title: 'Robo en Passeig de Gràcia',
    description: 'Robo de bolso reportado cerca de la estación de metro',
    category: 'robo',
    location: {
      lat: 41.3917,
      lng: 2.1649,
      address: 'Passeig de Gràcia, Barcelona',
    },
    timestamp: new Date('2026-02-13T14:30:00'),
    author: {
      name: 'María García',
      initials: 'MG',
    },
    validations: 12,
    comments: 5,
  },
  {
    id: '2',
    title: 'Accidente de tráfico',
    description: 'Colisión entre dos vehículos en la Diagonal',
    category: 'accidente',
    location: {
      lat: 41.3954,
      lng: 2.1619,
      address: 'Avinguda Diagonal, Barcelona',
    },
    timestamp: new Date('2026-02-13T15:45:00'),
    author: {
      name: 'Carlos Ruiz',
      initials: 'CR',
    },
    validations: 8,
    comments: 3,
  },
  {
    id: '3',
    title: 'Tráfico denso',
    description: 'Mucho tráfico en Gran Via debido a obras',
    category: 'trafico',
    location: {
      lat: 41.3851,
      lng: 2.1734,
      address: 'Gran Via de les Corts Catalanes, Barcelona',
    },
    timestamp: new Date('2026-02-13T16:00:00'),
    author: {
      name: 'Ana López',
      initials: 'AL',
    },
    validations: 15,
    comments: 7,
  },
  {
    id: '4',
    title: 'Grafiti en parque',
    description: 'Vandalismo reportado en Parc Güell',
    category: 'vandalismo',
    location: {
      lat: 41.4145,
      lng: 2.1527,
      address: 'Parc Güell, Barcelona',
    },
    timestamp: new Date('2026-02-13T12:20:00'),
    author: {
      name: 'Pedro Sánchez',
      initials: 'PS',
    },
    validations: 6,
    comments: 2,
  },
  {
    id: '5',
    title: 'Robo de bicicleta',
    description: 'Bicicleta robada en la zona de la Barceloneta',
    category: 'robo',
    location: {
      lat: 41.3809,
      lng: 2.1909,
      address: 'La Barceloneta, Barcelona',
    },
    timestamp: new Date('2026-02-13T11:15:00'),
    author: {
      name: 'Laura Martín',
      initials: 'LM',
    },
    validations: 10,
    comments: 4,
  },
  {
    id: '6',
    title: 'Semáforo averiado',
    description: 'Semáforo no funciona en cruce importante',
    category: 'trafico',
    location: {
      lat: 41.3888,
      lng: 2.1590,
      address: 'Plaça Catalunya, Barcelona',
    },
    timestamp: new Date('2026-02-13T13:30:00'),
    author: {
      name: 'Javier Torres',
      initials: 'JT',
    },
    validations: 20,
    comments: 8,
  },
  {
    id: '7',
    title: 'Accidente de moto',
    description: 'Motorista caído en la Rambla',
    category: 'accidente',
    location: {
      lat: 41.3818,
      lng: 2.1685,
      address: 'La Rambla, Barcelona',
    },
    timestamp: new Date('2026-02-13T10:00:00'),
    author: {
      name: 'Isabel Fernández',
      initials: 'IF',
    },
    validations: 18,
    comments: 6,
  },
];

// Legacy data for backward compatibility (will be removed)
export interface Goal {
  id: string;
  title: string;
  progress: number;
  category: string;
  color: string;
}

export const rawGoals: Goal[] = [];

// Legacy Challenge type (will be removed)
export type ChallengeStatus = 'pending' | 'active' | 'completed';

export interface Challenge {
  id: string;
  title: string;
  amount: number;
  rival: {
    name: string;
    avatar: string;
    initials: string;
  };
  status: ChallengeStatus;
  category: string;
  createdAt: Date;
  expiresAt?: Date;
}

// Mock News Data
export const mockNews: NewsItem[] = [
  {
    id: '1',
    title: 'Nueva actualización de seguridad en Barcelona',
    description: 'Las autoridades implementan nuevas medidas de seguridad en zonas clave de la ciudad',
    image: '/src/assets/pictures/image_1.jpg',
    category: 'Seguridad',
    date: '2026-02-13',
  },
  {
    id: '2',
    title: 'Mejoras en el transporte público',
    description: 'Metro de Barcelona anuncia expansión de líneas y nuevos horarios',
    image: '/src/assets/pictures/image_2.png',
    category: 'Transporte',
    date: '2026-02-12',
  },
  {
    id: '3',
    title: 'Eventos culturales este fin de semana',
    description: 'Descubre los mejores eventos y actividades en la ciudad',
    image: '/src/assets/pictures/image_1.jpg',
    category: 'Cultura',
    date: '2026-02-11',
  },
];

export const mockChallenges: Challenge[] = [];