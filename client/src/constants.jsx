import { 
  ChefHat, 
  Bath, 
  Layers, 
  PaintBucket, 
  Home, 
  Sun,
  Search,
  PenTool,
  Hammer,
  CheckCircle
} from 'lucide-react';
import serviceImage from './assets/service.png';
import service1Image from './assets/service1.png';

export const SERVICES = [
  {
    id: 'kitchen',
    title: 'Kitchen Remodeling',
    description: 'Bespoke culinary spaces designed for functionality and high-end aesthetics.',
    icon: 'ChefHat',
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'bathroom',
    title: 'Bathroom Renovation',
    description: 'Transform your bathroom into a spa-like retreat with premium fixtures.',
    icon: 'Bath',
    image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'flooring',
    title: 'Luxury Flooring',
    description: 'From hardwood to custom tile, we provide flooring that lasts a lifetime.',
    icon: 'Layers',
    image: serviceImage
  },
  {
    id: 'painting',
    title: 'Painting & Drywall',
    description: 'Impeccable finishes that bring character and life to every room.',
    icon: 'PaintBucket',
    image: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'basement',
    title: 'Basement Finishing',
    description: 'Unlock the potential of your home with fully functional basement living spaces.',
    icon: 'Home',
    image: service1Image
  },
  {
    id: 'outdoor',
    title: 'Outdoor Living',
    description: 'Custom decks, patios, and landscapes for the perfect outdoor experience.',
    icon: 'Sun',
    image: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&q=80&w=800'
  }
];

export const PROCESS_STEPS = [
  {
    title: 'Consultation',
    description: 'We meet to discuss your vision, budget, and project requirements in detail.',
    icon: Search
  },
  {
    title: 'Design',
    description: 'Our designers create 3D renderings and material selections for your approval.',
    icon: PenTool
  },
  {
    title: 'Build',
    description: 'Our expert craftsmen bring the design to life with meticulous attention to detail.',
    icon: Hammer
  },
  {
    title: 'Final Walkthrough',
    description: 'We review every detail with you to ensure absolute perfection and satisfaction.',
    icon: CheckCircle
  }
];

export const PROJECTS = [
  {
    id: '1',
    title: 'Modern Minimalist Kitchen',
    category: 'Kitchen',
    beforeImage: 'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?auto=format&fit=crop&q=80&w=800',
    afterImage: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '2',
    title: 'Spa Oasis Bathroom',
    category: 'Bathroom',
    beforeImage: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800',
    afterImage: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '3',
    title: 'Executive Basement Suite',
    category: 'Basement',
    beforeImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800',
    afterImage: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=800'
  }
];

export const TESTIMONIALS = [
  {
    id: '1',
    name: 'Sarah Thompson',
    role: 'Homeowner in Aspen',
    content: 'BuildCraft transformed our outdated kitchen into the heart of our home. Their attention to detail and professionalism were unmatched.',
    avatar: 'https://i.pravatar.cc/150?u=sarah'
  },
  {
    id: '2',
    name: 'Michael Chen',
    role: 'Property Developer',
    content: 'The most reliable renovation team I have worked with. They stayed on budget and delivered a finish that exceeded my high expectations.',
    avatar: 'https://i.pravatar.cc/150?u=michael'
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    role: 'Interior Designer',
    content: 'As a designer, I appreciate craftsmen who can execute a vision perfectly. BuildCraft is my go-to partner for all major renovations.',
    avatar: 'https://i.pravatar.cc/150?u=emily'
  }
];

