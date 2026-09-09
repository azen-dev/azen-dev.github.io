export interface Project {
  number: string;
  key: string;
  name: string;
  liveUrl: string;
  image: string;
}

export const projects: Project[] = [
  {
    number: '01',
    key: 'p1',
    name: 'TEG',
    liveUrl: 'https://teg.kiev.ua/',
    image: '/projects/teg.webp',
  },
  {
    number: '02',
    key: 'p2',
    name: 'eSTetdruk',
    liveUrl: 'https://estetdruk.shop/',
    image: '/projects/estetdruk.webp',
  },
  {
    number: '03',
    key: 'p3',
    name: 'FORMA',
    liveUrl: 'https://next-shop-ih5f.vercel.app/',
    image: '/projects/forma.webp',
  },
];
