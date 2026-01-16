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
  // ═══════════════════════════════════════════════════════════════
  // SANDWICHS — Seul / +Frites / Menu
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'sandwichs',
    title: 'Sandwichs',
    icon: '🥙',
    subtitle: 'Seul • +Frites • Menu (frites + boisson)',
    image: 'assets/plats/sandwichs/section-sandwich.jpg',
    items: [
      {
        id: 'kebab',
        name: 'Kebab',
        description: 'Pain pita, viande kebab, crudités, sauce au choix',
        prices: { seul: 7.50, frites: 9.00, menu: 10.50 },
        tags: ['Best-seller'],
        image: 'assets/plats/sandwichs/kebab.png',
        ingredients: ['Pain pita', 'Viande kebab', 'Salade', 'Tomate', 'Oignon', 'Sauce au choix'],
        categories: ['halal', 'populaire']
      },
      {
        id: 'kebab-galette',
        name: 'Galette Kebab / Pita',
        description: 'Galette de blé ou pain pita, viande kebab, crudités, sauce',
        prices: { seul: 8.00, frites: 9.50, menu: 11.00 },
        image: 'assets/plats/sandwichs/galette-kebab-pita.png',
        ingredients: ['Galette de blé', 'Viande kebab', 'Salade', 'Tomate', 'Oignon', 'Sauce au choix'],
        categories: ['halal']
      },
      {
        id: 'kebab-royal',
        name: 'Kebab Royal',
        description: 'Pain pita, double viande, crudités, sauce, fromage',
        prices: { seul: 10.00, frites: 11.50, menu: 13.00 },
        tags: ['Généreux'],
        image: 'assets/plats/sandwichs/kebab-royal.png',
        ingredients: ['Pain pita', 'Double viande kebab', 'Fromage', 'Salade', 'Tomate', 'Oignon', 'Sauce au choix'],
        categories: ['halal', 'populaire']
      },
      {
        id: 'poulet',
        name: 'Poulet',
        description: 'Pain pita, filet de poulet, crudités, sauce',
        prices: { seul: 7.50, frites: 9.00, menu: 10.50 },
        image: 'assets/plats/sandwichs/poulet.png',
        ingredients: ['Pain pita', 'Filet de poulet', 'Salade', 'Tomate', 'Oignon', 'Sauce au choix'],
        categories: ['halal']
      },
      {
        id: 'steak',
        name: 'Steak',
        description: 'Pain pita, steak haché, crudités, sauce',
        prices: { seul: 7.50, frites: 9.00, menu: 10.50 },
        image: 'assets/plats/sandwichs/steak.png',
        ingredients: ['Pain pita', 'Steak haché', 'Salade', 'Tomate', 'Oignon', 'Sauce au choix'],
        categories: ['halal']
      },
      {
        id: 'kofte',
        name: 'Köfte',
        description: 'Pain pita, boulettes de viande épicées, crudités, sauce',
        prices: { seul: 8.00, frites: 9.50, menu: 11.00 },
        tags: ['Épicé'],
        image: 'assets/plats/sandwichs/kofte.png',
        ingredients: ['Pain pita', 'Boulettes köfte', 'Épices', 'Salade', 'Tomate', 'Oignon', 'Sauce piquante'],
        categories: ['halal', 'epice']
      },
      {
        id: 'vegetarien',
        name: 'Végétarien',
        description: 'Pain pita, falafels, crudités, sauce',
        prices: { seul: 7.00, frites: 8.50, menu: 10.00 },
        tags: ['Veggie'],
        image: 'assets/plats/sandwichs/vegetarien.png',
        ingredients: ['Pain pita', 'Falafels', 'Houmous', 'Salade', 'Tomate', 'Oignon', 'Sauce blanche'],
        categories: ['vegetarien']
      }
    ]
  },

  // ═══════════════════════════════════════════════════════════════
  // TACOS — Seul / +Frites / Menu
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'tacos',
    title: 'Tacos',
    icon: '🌮',
    subtitle: 'Galette de blé, sauce fromagère • Seul / +Frites / Menu',
    image: 'assets/plats/tacos/section-tacos.png',
    items: [
      {
        id: 'tacos-1v',
        name: 'Tacos 1 viande',
        description: 'Galette de blé, 1 viande au choix, frites, sauce fromagère',
        prices: { seul: 8.50, frites: 10, menu: 11 },
        ingredients: ['Galette de blé', '1 viande au choix', 'Frites', 'Sauce fromagère'],
        categories: ['halal']
      },
      {
        id: 'tacos-2v',
        name: 'Tacos 2 viandes',
        description: 'Galette de blé, 2 viandes au choix, frites, sauce fromagère',
        prices: { seul: 10, frites: 11.50, menu: 12.50 },
        ingredients: ['Galette de blé', '2 viandes au choix', 'Frites', 'Sauce fromagère'],
        categories: ['halal', 'populaire']
      },
      {
        id: 'tacos-3v',
        name: 'Tacos 3 viandes',
        description: 'Galette XL, 3 viandes au choix, frites, sauce fromagère',
        prices: { seul: 12, frites: 13.50, menu: 14.50 },
        tags: ['XL'],
        ingredients: ['Galette de blé XL', '3 viandes au choix', 'Frites', 'Sauce fromagère'],
        categories: ['halal', 'populaire']
      },
      {
        id: 'tacos-4v',
        name: 'Tacos 4 viandes',
        description: 'Galette XXL, 4 viandes au choix, frites, sauce fromagère',
        prices: { seul: 14, frites: 15.50, menu: 16.50 },
        tags: ['XXL'],
        ingredients: ['Galette de blé XXL', '4 viandes au choix', 'Frites', 'Sauce fromagère'],
        categories: ['halal']
      }
    ]
  },

  // ═══════════════════════════════════════════════════════════════
  // PETITE FAIM — Snacks & Paninis
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'petite-faim',
    title: 'Petite Faim',
    icon: '🥪',
    subtitle: 'Paninis, nuggets et petits creux',
    image: 'assets/menu-Fast-food-La-Kebaberie.jpg',
    items: [
      {
        id: 'panini-kebab',
        name: 'Panini kebab',
        priceEuros: 6.50
      },
      {
        id: 'panini-poulet',
        name: 'Panini poulet',
        priceEuros: 6.50
      },
      {
        id: 'panini-thon',
        name: 'Panini thon',
        priceEuros: 6.00
      },
      {
        id: 'nuggets-6',
        name: 'Nuggets x6',
        priceEuros: 4.00
      },
      {
        id: 'nuggets-12',
        name: 'Nuggets x12',
        priceEuros: 7.00
      },
      {
        id: 'cordon-bleu',
        name: 'Cordon bleu',
        priceEuros: 5.00
      },
      {
        id: 'frites',
        name: 'Frites',
        priceEuros: 3.00
      },
      {
        id: 'frites-cheddar',
        name: 'Frites cheddar',
        priceEuros: 4.50
      },
      {
        id: 'potatoes',
        name: 'Potatoes',
        priceEuros: 3.50
      },
      {
        id: 'onion-rings',
        name: 'Onion rings x8',
        priceEuros: 4.00
      },
      {
        id: 'salade-verte',
        name: 'Salade verte',
        priceEuros: 3.00
      }
    ]
  },

  // ═══════════════════════════════════════════════════════════════
  // TEX MEX — Burgers & Spécialités
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'tex-mex',
    title: 'Tex Mex',
    icon: '🍔',
    subtitle: 'Burgers • Seul / +Frites / Menu',
    image: 'assets/menu-Fast-food-La-Kebaberie.jpg',
    items: [
      {
        id: 'burger-cheese',
        name: 'Burger Cheese',
        description: '1 steak 80g, cheddar, salade, tomate, oignon',
        prices: { seul: 6.00, frites: 7.50, menu: 9.00 },
        tags: ['Best-seller']
      },
      {
        id: 'burger-chicken',
        name: 'Burger Chicken',
        description: '1 galette de poulet pané, cheddar, salade, tomate, oignon',
        prices: { seul: 6.00, frites: 7.50, menu: 9.00 }
      },
      {
        id: 'burger-crousty',
        name: 'Burger Crousty',
        description: 'Frites 80g, 1 galette pomme de terre, cheddars, salade, tomate, oignon',
        prices: { seul: 8.00, frites: 9.50, menu: 11.00 },
        tags: ['Gourmand']
      },
      {
        id: 'burger-raclette',
        name: 'Burger Raclette',
        description: 'Pain brioché, 2 steaks, fromage raclette, salade, tomate',
        prices: { seul: 9.00, frites: 10.50, menu: 12.00 },
        tags: ['Premium']
      }
    ]
  },

  // ═══════════════════════════════════════════════════════════════
  // NOS ASSIETTES
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'assiettes',
    title: 'Nos Assiettes',
    icon: '🍽️',
    subtitle: 'Servies avec frites et salade',
    image: 'assets/Saint-Etienne-de-Montluc-La-Kebaberie-menu.jpg',
    items: [
      {
        id: 'assiette-kebab',
        name: 'Assiette kebab',
        priceEuros: 11.00
      },
      {
        id: 'assiette-poulet',
        name: 'Assiette poulet',
        priceEuros: 11.00
      },
      {
        id: 'assiette-mixte',
        name: 'Assiette mixte',
        description: 'Kebab + poulet',
        priceEuros: 13.00,
        tags: ['Copieux']
      },
      {
        id: 'assiette-cordon-bleu',
        name: 'Assiette cordon bleu',
        priceEuros: 12.00
      }
    ]
  },

  // ═══════════════════════════════════════════════════════════════
  // MENU KIDS
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'menu-kids',
    title: 'Menu Kids',
    icon: '👶',
    subtitle: 'Pour les petits gourmands',
    image: 'assets/La-Kebaberie-menu.jpg',
    items: [
      {
        id: 'menu-enfant',
        name: 'Menu Enfant',
        description: '6 nuggets + frites + boisson + surprise',
        priceEuros: 7.00,
        tags: ['Enfant']
      }
    ]
  },

  // ═══════════════════════════════════════════════════════════════
  // DESSERTS
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'desserts',
    title: 'Desserts',
    icon: '🍨',
    subtitle: 'Une touche sucrée',
    image: 'assets/menu-Fast-food-La-Kebaberie.jpg',
    items: [
      { id: 'tiramisu', name: 'Tiramisu', priceEuros: 3.50 },
      { id: 'mousse-chocolat', name: 'Mousse au chocolat', priceEuros: 3.00 },
      { id: 'glace-2b', name: 'Glace 2 boules', priceEuros: 3.00 },
      { id: 'glace-3b', name: 'Glace 3 boules', priceEuros: 4.00 }
    ]
  },

  // ═══════════════════════════════════════════════════════════════
  // BOISSONS
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'boissons',
    title: 'Boissons',
    icon: '🥤',
    subtitle: 'Fraîches et désaltérantes',
    image: 'assets/Saint-Etienne-de-Montluc-La-Kebaberie-menu.jpg',
    items: [
      { id: 'coca-33', name: 'Coca-Cola 33cl', priceEuros: 2.00 },
      { id: 'coca-50', name: 'Coca-Cola 50cl', priceEuros: 2.80 },
      { id: 'fanta-33', name: 'Fanta 33cl', priceEuros: 2.00 },
      { id: 'sprite-33', name: 'Sprite 33cl', priceEuros: 2.00 },
      { id: 'ice-tea-33', name: 'Ice Tea 33cl', priceEuros: 2.00 },
      { id: 'orangina-33', name: 'Orangina 33cl', priceEuros: 2.20 },
      { id: 'eau-50', name: 'Eau 50cl', priceEuros: 1.50 },
      { id: 'perrier', name: 'Perrier 33cl', priceEuros: 2.50 }
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
