import { ChoiceOption, MenuSection, PricingHighlight } from '../models/menu.models';

export const PRICING_HIGHLIGHTS: readonly PricingHighlight[] = [
  {
    id: 'menu-kebab',
    title: 'Menu Kebab',
    description: 'Kebab + frites + boisson',
    priceEuros: 10.5,
    badge: 'Dès'
  },
  {
    id: 'tacos-xl',
    title: 'Tacos XL',
    description: '3 viandes, sauce fromagère',
    priceEuros: 12,
    badge: 'Copieux'
  },
  {
    id: 'assiette',
    title: 'Assiette mixte',
    description: 'Viande + frites + salade',
    priceEuros: 13,
    badge: 'Complet'
  }
];

export const MENU_SECTIONS: readonly MenuSection[] = [
  {
    id: 'kebabs',
    title: 'Kebabs',
    icon: '🥙',
    items: [
      {
        id: 'kebab-classique',
        name: 'Kebab classique',
        description: 'Pain pita, viande kebab, crudités, sauce au choix',
        priceEuros: 7.5,
        tags: ['Best-seller']
      },
      {
        id: 'kebab-galette',
        name: 'Kebab galette',
        description: 'Galette de blé, viande kebab, crudités, sauce',
        priceEuros: 8
      },
      {
        id: 'kebab-assiette',
        name: 'Assiette kebab',
        description: 'Viande kebab, frites, salade, sauce',
        priceEuros: 11
      },
      {
        id: 'double-kebab',
        name: 'Double kebab',
        description: 'Pain pita, double viande, crudités, sauce',
        priceEuros: 10,
        tags: ['Généreux']
      }
    ]
  },
  {
    id: 'tacos',
    title: 'Tacos',
    icon: '🌮',
    subtitle: 'Galette de blé, sauce fromagère, frites',
    items: [
      {
        id: 'tacos-1v',
        name: 'Tacos 1 viande',
        priceEuros: 8.5
      },
      {
        id: 'tacos-2v',
        name: 'Tacos 2 viandes',
        priceEuros: 10
      },
      {
        id: 'tacos-3v',
        name: 'Tacos 3 viandes',
        priceEuros: 12,
        tags: ['XL']
      },
      {
        id: 'tacos-4v',
        name: 'Tacos 4 viandes',
        priceEuros: 14,
        tags: ['XXL']
      }
    ]
  },
  {
    id: 'burgers',
    title: 'Burgers',
    icon: '🍔',
    items: [
      {
        id: 'burger-classique',
        name: 'Burger classique',
        description: 'Steak haché, salade, tomate, oignon, sauce',
        priceEuros: 7
      },
      {
        id: 'burger-cheese',
        name: 'Burger cheese',
        description: 'Steak haché, cheddar, salade, tomate, sauce',
        priceEuros: 7.5
      },
      {
        id: 'burger-double',
        name: 'Double burger',
        description: 'Double steak, double cheddar, salade, sauce',
        priceEuros: 10,
        tags: ['Généreux']
      },
      {
        id: 'burger-chicken',
        name: 'Burger poulet',
        description: 'Filet de poulet pané, salade, tomate, sauce',
        priceEuros: 8
      }
    ]
  },
  {
    id: 'assiettes',
    title: 'Assiettes',
    icon: '🍽️',
    subtitle: 'Servies avec frites et salade',
    items: [
      {
        id: 'assiette-kebab',
        name: 'Assiette kebab',
        priceEuros: 11
      },
      {
        id: 'assiette-poulet',
        name: 'Assiette poulet',
        priceEuros: 11
      },
      {
        id: 'assiette-mixte',
        name: 'Assiette mixte',
        description: 'Kebab + poulet',
        priceEuros: 13,
        tags: ['Copieux']
      },
      {
        id: 'assiette-cordon-bleu',
        name: 'Assiette cordon bleu',
        priceEuros: 12
      }
    ]
  },
  {
    id: 'menus',
    title: 'Menus',
    icon: '🍟',
    subtitle: 'Sandwich + frites + boisson 33cl',
    items: [
      {
        id: 'menu-kebab',
        name: 'Menu kebab',
        priceEuros: 10.5,
        tags: ['Menu']
      },
      {
        id: 'menu-tacos-1v',
        name: 'Menu tacos 1 viande',
        priceEuros: 11,
        tags: ['Menu']
      },
      {
        id: 'menu-tacos-2v',
        name: 'Menu tacos 2 viandes',
        priceEuros: 12.5,
        tags: ['Menu']
      },
      {
        id: 'menu-burger',
        name: 'Menu burger',
        priceEuros: 10,
        tags: ['Menu']
      },
      {
        id: 'menu-enfant',
        name: 'Menu enfant',
        description: '6 nuggets + frites + boisson + surprise',
        priceEuros: 7,
        tags: ['Enfant']
      }
    ]
  },
  {
    id: 'snacks',
    title: 'Snacks & Paninis',
    icon: '🥪',
    items: [
      {
        id: 'panini-kebab',
        name: 'Panini kebab',
        priceEuros: 6.5
      },
      {
        id: 'panini-poulet',
        name: 'Panini poulet',
        priceEuros: 6.5
      },
      {
        id: 'panini-thon',
        name: 'Panini thon',
        priceEuros: 6
      },
      {
        id: 'nuggets-6',
        name: 'Nuggets x6',
        priceEuros: 4
      },
      {
        id: 'nuggets-12',
        name: 'Nuggets x12',
        priceEuros: 7
      },
      {
        id: 'cordon-bleu',
        name: 'Cordon bleu',
        priceEuros: 5
      }
    ]
  },
  {
    id: 'accompagnements',
    title: 'Accompagnements',
    icon: '🍟',
    items: [
      { id: 'frites', name: 'Frites', priceEuros: 3 },
      { id: 'frites-cheddar', name: 'Frites cheddar', priceEuros: 4.5 },
      { id: 'potatoes', name: 'Potatoes', priceEuros: 3.5 },
      { id: 'onion-rings', name: 'Onion rings x8', priceEuros: 4 },
      { id: 'salade-verte', name: 'Salade verte', priceEuros: 3 }
    ]
  },
  {
    id: 'boissons',
    title: 'Boissons',
    icon: '🥤',
    items: [
      { id: 'coca-33', name: 'Coca-Cola 33cl', priceEuros: 2 },
      { id: 'coca-50', name: 'Coca-Cola 50cl', priceEuros: 2.8 },
      { id: 'fanta-33', name: 'Fanta 33cl', priceEuros: 2 },
      { id: 'sprite-33', name: 'Sprite 33cl', priceEuros: 2 },
      { id: 'ice-tea-33', name: 'Ice Tea 33cl', priceEuros: 2 },
      { id: 'orangina-33', name: 'Orangina 33cl', priceEuros: 2.2 },
      { id: 'eau-50', name: 'Eau 50cl', priceEuros: 1.5 },
      { id: 'perrier', name: 'Perrier 33cl', priceEuros: 2.5 }
    ]
  },
  {
    id: 'desserts',
    title: 'Desserts',
    icon: '🍨',
    items: [
      { id: 'tiramisu', name: 'Tiramisu', priceEuros: 3.5 },
      { id: 'mousse-chocolat', name: 'Mousse au chocolat', priceEuros: 3 },
      { id: 'glace-2b', name: 'Glace 2 boules', priceEuros: 3 },
      { id: 'glace-3b', name: 'Glace 3 boules', priceEuros: 4 }
    ]
  }
];

export const CHOICES: readonly ChoiceOption[] = [
  {
    id: 'viandes',
    label: 'Viandes',
    examples: ['Kebab', 'Poulet', 'Tenders', 'Steak haché', 'Cordon bleu', 'Merguez']
  },
  {
    id: 'sauces',
    label: 'Sauces',
    examples: ['Blanche', 'Samouraï', 'Harissa', 'Algérienne', 'Biggy', 'Barbecue', 'Ketchup', 'Mayo']
  },
  {
    id: 'crudites',
    label: 'Crudités',
    examples: ['Salade', 'Tomates', 'Oignons', 'Maïs', 'Carottes râpées']
  },
  {
    id: 'supplements',
    label: 'Suppléments',
    examples: ['Fromage +1€', 'Double viande +2€', 'Frites dans tacos +0,50€']
  }
];

export const ORDERING_NOTE =
  "En attendant la commande en ligne, appelle-nous au 02 XX XX XX XX ou passe directement au restaurant.";

// Informations du restaurant
export const RESTAURANT_INFO = {
  name: 'La Kebaberie',
  address: '12 Place de l\'Église',
  city: 'Saint-Étienne-de-Montluc',
  postalCode: '44360',
  phone: '02 XX XX XX XX',
  hours: {
    lunch: '11h30 - 14h00',
    dinner: '18h30 - 22h00',
    closed: 'Lundi'
  }
} as const;
