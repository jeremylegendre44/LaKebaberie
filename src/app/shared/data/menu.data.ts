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
        prices: { seul: 7.5, frites: 9, menu: 10.5 },
        tags: ['Best-seller'],
        image: 'assets/plats/sandwichs/kebab.png',
        ingredients: ['Pain pita', 'Viande kebab', 'Salade', 'Tomate', 'Oignon', 'Sauce au choix'],
        categories: ['halal', 'populaire']
      },
      {
        id: 'kebab-galette',
        name: 'Galette Kebab / Pita',
        description: 'Galette de blé ou pain pita, viande kebab, crudités, sauce',
        prices: { seul: 8, frites: 9.5, menu: 11 },
        image: 'assets/plats/sandwichs/galette-kebab-pita.png',
        ingredients: ['Galette de blé', 'Viande kebab', 'Salade', 'Tomate', 'Oignon', 'Sauce au choix'],
        categories: ['halal']
      },
      {
        id: 'kebab-royal',
        name: 'Kebab Royal',
        description: 'Pain pita, double viande, crudités, sauce, fromage',
        prices: { seul: 10, frites: 11.5, menu: 13 },
        tags: ['Généreux'],
        image: 'assets/plats/sandwichs/kebab-royal.png',
        ingredients: ['Pain pita', 'Double viande kebab', 'Fromage', 'Salade', 'Tomate', 'Oignon', 'Sauce au choix'],
        categories: ['halal', 'populaire']
      },
      {
        id: 'poulet',
        name: 'Poulet',
        description: 'Pain pita, filet de poulet, crudités, sauce',
        prices: { seul: 7.5, frites: 9, menu: 10.5 },
        image: 'assets/plats/sandwichs/poulet.png',
        ingredients: ['Pain pita', 'Filet de poulet', 'Salade', 'Tomate', 'Oignon', 'Sauce au choix'],
        categories: ['halal']
      },
      {
        id: 'steak',
        name: 'Steak',
        description: 'Pain pita, steak haché, crudités, sauce',
        prices: { seul: 7.5, frites: 9, menu: 10.5 },
        image: 'assets/plats/sandwichs/steak.png',
        ingredients: ['Pain pita', 'Steak haché', 'Salade', 'Tomate', 'Oignon', 'Sauce au choix'],
        categories: ['halal']
      },
      {
        id: 'kofte',
        name: 'Köfte',
        description: 'Pain pita, boulettes de viande épicées, crudités, sauce',
        prices: { seul: 8, frites: 9.5, menu: 11 },
        tags: ['Épicé'],
        image: 'assets/plats/sandwichs/kofte.png',
        ingredients: ['Pain pita', 'Boulettes köfte', 'Épices', 'Salade', 'Tomate', 'Oignon', 'Sauce piquante'],
        categories: ['halal', 'epice']
      },
      {
        id: 'vegetarien',
        name: 'Végétarien',
        description: 'Pain pita, falafels, crudités, sauce',
        prices: { seul: 7, frites: 8.5, menu: 10 },
        tags: ['Veggie'],
        image: 'assets/plats/sandwichs/vegetarien.png',
        ingredients: ['Pain pita', 'Falafels', 'Houmous', 'Salade', 'Tomate', 'Oignon', 'Sauce blanche'],
        categories: ['vegetarien']
      }
    ]
  },

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
        prices: { seul: 8.5, frites: 10, menu: 11 },
        ingredients: ['Galette de blé', '1 viande au choix', 'Frites', 'Sauce fromagère'],
        categories: ['halal']
      },
      {
        id: 'tacos-2v',
        name: 'Tacos 2 viandes',
        description: 'Galette de blé, 2 viandes au choix, frites, sauce fromagère',
        prices: { seul: 10, frites: 11.5, menu: 12.5 },
        ingredients: ['Galette de blé', '2 viandes au choix', 'Frites', 'Sauce fromagère'],
        categories: ['halal', 'populaire']
      },
      {
        id: 'tacos-3v',
        name: 'Tacos 3 viandes',
        description: 'Galette XL, 3 viandes au choix, frites, sauce fromagère',
        prices: { seul: 12, frites: 13.5, menu: 14.5 },
        tags: ['XL'],
        ingredients: ['Galette de blé XL', '3 viandes au choix', 'Frites', 'Sauce fromagère'],
        categories: ['halal', 'populaire']
      }
    ]
  },

  {
    id: 'petite-faim',
    title: 'Petite Faim',
    icon: '🥪',
    subtitle: 'Paninis, nuggets et petits creux',
    image: 'assets/plats/petite-faim/section-petite-faim.png',
    items: [
      { id: 'panini-kebab', name: 'Panini kebab', priceEuros: 6.5, ingredients: ['Pain panini', 'Viande kebab', 'Fromage', 'Sauce au choix'] },
      { id: 'panini-poulet', name: 'Panini poulet', priceEuros: 6.5, ingredients: ['Pain panini', 'Poulet', 'Fromage', 'Sauce au choix'] },
      { id: 'panini-thon', name: 'Panini thon', priceEuros: 6, ingredients: ['Pain panini', 'Thon', 'Fromage', 'Sauce au choix'] },
      { id: 'nuggets-6', name: 'Nuggets x6', priceEuros: 4, ingredients: ['Poulet pané'] },
      { id: 'nuggets-12', name: 'Nuggets x12', priceEuros: 7, ingredients: ['Poulet pané'] },
      { id: 'cordon-bleu', name: 'Cordon bleu', priceEuros: 5, ingredients: ['Escalope de poulet', 'Fromage', 'Jambon de dinde', 'Panure'] },
      { id: 'frites', name: 'Frites', priceEuros: 3, ingredients: ['Pommes de terre', 'Sel'] },
      { id: 'frites-cheddar', name: 'Frites cheddar', priceEuros: 4.5, ingredients: ['Pommes de terre', 'Sauce cheddar'] },
      { id: 'potatoes', name: 'Potatoes', priceEuros: 3.5, ingredients: ['Pommes de terre', 'Épices'] },
      { id: 'onion-rings', name: 'Onion rings x8', priceEuros: 4, ingredients: ['Oignons', 'Panure'] },
      { id: 'salade-verte', name: 'Salade verte', priceEuros: 3, ingredients: ['Salade verte', 'Vinaigrette'] }
    ]
  },

  {
    id: 'tex-mex',
    title: 'Tex Mex',
    icon: '🍔',
    subtitle: 'Burgers • Seul / +Frites / Menu',
    image: 'assets/plats/tex-mex/section-tex-mex.png',
    items: [
      {
        id: 'burger-cheese',
        name: 'Burger Cheese',
        description: '1 steak 80g, cheddar, salade, tomate, oignon',
        prices: { seul: 5.5, frites: 6.5, menu: 7.5 },
        tags: ['Best-seller'],
        image: 'assets/plats/tex-mex/cheeseburger.png',
        ingredients: ['Pain burger', 'Steak haché 80g', 'Cheddar', 'Salade', 'Tomate', 'Oignon', 'Sauce burger']
      },
      {
        id: 'double-burger-cheese',
        name: 'Double Cheese',
        description: '2 steaks 80g, cheddar, salade, tomate, oignon',
        prices: { seul: 6.5, frites: 7.5, menu: 8.5 },
        tags: ['Gourmand'],
        image: 'assets/plats/tex-mex/double-cheeseburger.png',
        ingredients: ['Pain burger', '2 steaks hachés 80g', 'Cheddar', 'Salade', 'Tomate', 'Oignon', 'Sauce burger']
      },
      {
        id: 'burger-chicken',
        name: 'Burger Chicken',
        description: '1 galette de poulet pané, cheddar, salade, tomate, oignon',
        prices: { seul: 6, frites: 7.5, menu: 9 },
        image: 'assets/plats/tex-mex/chicken.png',
        ingredients: ['Pain burger', 'Galette de poulet pané', 'Cheddar', 'Salade', 'Tomate', 'Oignon', 'Sauce burger']
      },
      {
        id: 'burger-crousty',
        name: 'Burger Crousty',
        description: 'Frites 80g, galette pomme de terre, cheddar',
        prices: { seul: 8, frites: 9.5, menu: 11 },
        tags: ['Gourmand'],
        image: 'assets/plats/tex-mex/burger-crousty.png',
        ingredients: ['Pain burger', 'Galette de pommes de terre', 'Frites', 'Cheddar', 'Salade', 'Tomate', 'Oignon', 'Sauce burger']
      },
      {
        id: 'burger-raclette',
        name: 'Burger Raclette',
        description: 'Pain brioché, 2 steaks, fromage raclette',
        prices: { seul: 9, frites: 10.5, menu: 12 },
        tags: ['Premium', 'Gourmand', 'Complet'],
        image: 'assets/plats/tex-mex/burger-raclette.png',
        ingredients: ['Pain brioché', '2 steaks hachés', 'Fromage raclette', 'Salade', 'Tomate', 'Sauce burger']
      },
      {
        id: 'le-moelleux',
        name: 'Le Moelleux',
        description: 'Pain brioché, 2 steaks, cheddar',
        prices: { seul: 6.5, frites: 7.5, menu: 8.5 },
        tags: ['Premium', 'Gourmand', 'Complet'],
        image: 'assets/plats/tex-mex/le-moelleuxV3.png',
        ingredients: ['Pain brioché', '2 steaks hachés', 'Cheddar', 'Salade', 'Tomate', 'Oignon', 'Sauce burger']
      }
    ]
  },

  {
    id: 'assiettes',
    title: 'Nos Assiettes',
    icon: '🍽️',
    subtitle: 'Servies avec frites et salade',
    image: 'assets/Saint-Etienne-de-Montluc-La-Kebaberie-menu.jpg',
    items: [
      { id: 'assiette-kebab', name: 'Assiette kebab', priceEuros: 11, ingredients: ['Viande kebab', 'Frites', 'Salade', 'Sauce au choix'] },
      { id: 'assiette-poulet', name: 'Assiette poulet', priceEuros: 11, ingredients: ['Poulet', 'Frites', 'Salade', 'Sauce au choix'] },
      { id: 'assiette-mixte', name: 'Assiette mixte', description: 'Kebab + poulet', priceEuros: 13, tags: ['Copieux'], ingredients: ['Viande kebab', 'Poulet', 'Frites', 'Salade', 'Sauce au choix'] },
      { id: 'assiette-cordon-bleu', name: 'Assiette cordon bleu', priceEuros: 12, ingredients: ['Cordon bleu', 'Frites', 'Salade', 'Sauce au choix'] }
    ]
  },

  {
    id: 'menu-kids',
    title: 'Menu Kids',
    icon: '👶',
    subtitle: 'Pour les petits gourmands',
    image: 'assets/plats/menu-kids/section-menu-kids.png',
    items: [
      {
        id: 'menu-enfant',
        name: 'Menu Enfant',
        description: '6 nuggets + frites + boisson + surprise',
        priceEuros: 7,
        tags: ['Enfant'],
        image: 'assets/plats/menu-kids/section-menu-kids.png',
        ingredients: ['Nuggets de poulet', 'Frites', 'Boisson']
      }
    ]
  },

  {
    id: 'desserts',
    title: 'Desserts',
    icon: '🍨',
    subtitle: 'Une touche sucrée',
    image: 'assets/menu-Fast-food-La-Kebaberie.jpg',
    items: [
      { id: 'tiramisu', name: 'Tiramisu', priceEuros: 3.5, ingredients: ['Mascarpone', 'Biscuit', 'Café', 'Cacao'] },
      { id: 'mousse-chocolat', name: 'Mousse au chocolat', priceEuros: 3, ingredients: ['Chocolat', 'Œufs', 'Sucre'] },
      { id: 'glace-2b', name: 'Glace 2 boules', priceEuros: 3, ingredients: ['Glace (2 parfums au choix)'] },
      { id: 'glace-3b', name: 'Glace 3 boules', priceEuros: 4, ingredients: ['Glace (3 parfums au choix)'] }
    ]
  },

  {
    id: 'boissons',
    title: 'Boissons',
    icon: '🥤',
    subtitle: 'Fraîches et désaltérantes',
    image: 'assets/plats/boissons/section-boisson.png',
    items: [
      { id: 'coca-33', name: 'Coca-Cola 33cl', priceEuros: 2, ingredients: ['Boisson gazeuse'] },
      { id: 'coca-50', name: 'Coca-Cola 50cl', priceEuros: 2.8, ingredients: ['Boisson gazeuse'] },
      { id: 'fanta-33', name: 'Fanta 33cl', priceEuros: 2, ingredients: ['Boisson gazeuse'] },
      { id: 'sprite-33', name: 'Sprite 33cl', priceEuros: 2, ingredients: ['Boisson gazeuse'] },
      { id: 'ice-tea-33', name: 'Ice Tea 33cl', priceEuros: 2, ingredients: ['Boisson au thé'] },
      { id: 'orangina-33', name: 'Orangina 33cl', priceEuros: 2.2, ingredients: ['Boisson gazeuse'] },
      { id: 'eau-50', name: 'Eau 50cl', priceEuros: 1.5, ingredients: ['Eau'] },
      { id: 'perrier', name: 'Perrier 33cl', priceEuros: 2.5, ingredients: ['Eau gazeuse'] }
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
  'En attendant la commande en ligne, appelle-nous au 02 40 85 21 97 ou passe directement au restaurant.';

export const RESTAURANT_INFO = {
  name: 'La Kebaberie',
  address: '3 Rte de Savenay',
  city: 'Saint-Étienne-de-Montluc',
  postalCode: '44360',
  phone: '02 40 85 21 97',
  hours: {
    monday: '11:30–14:30, 18:00–22:00',
    tuesday: '11:30–14:30, 18:00–22:00',
    wednesday: '11:30–14:30, 18:00–22:00',
    thursday: '11:30–14:30, 18:00–22:00',
    friday: '11:30–14:30, 18:00–23:00',
    saturday: '11:30–14:30, 18:00–23:00',
    sunday: '18:00–22:00'
  }
} as const;
