// Modèles typés et évolutifs pour la carte.
// Objectif : pouvoir réutiliser ces types plus tard avec une BDD (Firestore/SQL),
// une gestion de commandes/paiements, etc.

export type Allergens =
  | 'gluten'
  | 'lait'
  | 'oeufs'
  | 'moutarde'
  | 'sesame'
  | 'soja'
  | 'poisson'
  | 'crustaces'
  | 'mollusques'
  | 'arachides'
  | 'fruits_a_coque'
  | 'celeri'
  | 'lupin'
  | 'sulfites';

export interface MenuItem {
  /** Identifiant stable (utile pour tracking, futures commandes, etc.) */
  readonly id: string;
  readonly name: string;
  readonly description?: string;

  /** Prix TTC en euros (ex: 10.5). */
  readonly priceEuros: number;

  /** Tags marketing (ex: Menu, Best-seller, Épicé…). */
  readonly tags?: readonly string[];

  /** Image du plat (chemin relatif ou URL) */
  readonly image?: string;

  /** Allergènes potentiels (à compléter si besoin). */
  readonly allergens?: readonly Allergens[];
}

export interface MenuSection {
  readonly id: string;
  readonly title: string;
  readonly subtitle?: string;
  readonly icon?: string;
  readonly items: readonly MenuItem[];
}

export interface ChoiceOption {
  readonly id: string;
  readonly label: string;
  readonly examples?: readonly string[];
}

export interface PricingHighlight {
  readonly id: string;
  readonly title: string;
  readonly description?: string;
  readonly priceEuros: number;
  readonly badge?: string;
}
