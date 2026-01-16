export interface Game {
  id: string;
  title: string;
  description: string;
  genre: string;
  releaseDate: string;
  status: 'released' | 'in-development';
  steamUrl?: string;
  coverImage: string;
  tags: string[];
  developer: string;
  publisher: string;
}

export const games: Game[] = [
  {
    id: '1',
    title: 'O Show de Zozo',
    description: 'Um jogo de horror e puzzles em primeira pessoa que vai testar seus nervos. Entre no show macabro de Zozo e desvende os mistérios aterrorizantes que aguardam nas sombras.',
    genre: 'Ação e Aventura',
    releaseDate: '21 de fevereiro de 2025',
    status: 'released',
    steamUrl: 'https://store.steampowered.com/app/3226180/O_Show_de_Zozo/',
    coverImage: 'https://images.unsplash.com/photo-1618609378039-b572f64c5b42?w=800&h=600&fit=crop',
    tags: ['Horror', 'Puzzles', 'Primeira Pessoa', 'Mistério', 'Atmosférico'],
    developer: 'Douglas Feu',
    publisher: 'Feu Studios'
  },
  {
    id: '2',
    title: 'O Medo Desconhecido',
    description: 'The Unknown Fear é uma experiência de ação e aventura com narrativa focada em mistério e suspense. Explore ambientes sombrios e desvende os segredos que atormentam a cidade.',
    genre: 'Ação e Aventura',
    releaseDate: '11 de janeiro de 2024',
    status: 'released',
    steamUrl: 'https://store.steampowered.com/app/2619300/O_Medo_Desconhecido/',
    coverImage: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&h=600&fit=crop',
    tags: ['Ação', 'Aventura', 'Mistério', 'Suspense', 'Narrativa'],
    developer: 'Douglas Feu',
    publisher: 'Feu Studios'
  }
];