# La Kebaberie — Application Angular

Application frontend de démonstration pour un restaurant (menu, sections, panier) développée avec Angular 21.

## Description

Cette application présente un catalogue de plats organisé par sections, un système de filtrage, et un panier client. Le projet utilise des composants standalone (Angular 21), des services pour la logique métier et un design sombre avec variables CSS.

## Fonctionnalités

- Navigation simple sur la page d'accueil
- Affichage des sections et des plats (images, description, prix)
- Filtrage par ingrédients / catégories
- Panier client : ajout, modification de quantité, suppression, total
- Composants réutilisables (header, footer, modals, cart)

## Prérequis

- Node.js (version LTS recommandée)
- npm
- Angular CLI (optionnel pour le développement local)

## Installation

Ouvrir un terminal PowerShell depuis la racine du projet puis :

```powershell
npm install
```

## Commandes utiles (PowerShell)

- Lancer le serveur de développement :

```powershell
npm start
# ou
ng serve
```

- Construire l'application :

```powershell
npm run build
```

- Contrôle de type TypeScript :

```powershell
npm run typecheck
```

- Lancer l'analyse statique (ESLint) :

```powershell
npm run lint
```

- Formater le code (Prettier) :

```powershell
npm run format
```

- Lancer les tests unitaires (si configurés) :

```powershell
npm test
```

## Structure du projet

- `src/`
  - `app/` — composants, pages, services
    - `pages/home/` — page d'accueil et sous-composants de la carte
    - `shared/` — composants partagés, services, données et modèles
  - `assets/` — images et ressources statiques
  - `index.html`, `main.ts`, `styles.css`
- `angular.json`, `tsconfig.json`, `package.json` — configuration et scripts

## Conventions et bonnes pratiques

- Typage TypeScript strict (mode `strict` activé)
- Composants standalone quand pertinent (Angular 21)
- Pas d'usage non justifié de `any` dans le code applicatif
- Réutilisation et barrels (`shared/components`, `shared/models`)
- Services pour la logique métier (ex : `CartService`)
- Attributs ARIA et bonnes pratiques d'accessibilité dans les templates

## Développement & maintenance

- Pour contribuer, créez une branche feature/xxx et ouvrez une PR claire.
- Exécutez `npm run typecheck` et `npm run lint` avant de soumettre.
- Les assets (images) sont stockés dans `src/assets/` — optimisez les images si vous publiez en production.

## Suggestions futures

- Ajouter des tests unitaires et d'intégration pour atteindre une couverture souhaitée.
- Extraire les composants de présentation (ex: InfoCard) pour améliorer la réutilisabilité.
- Mettre en place CI pour exécuter build, lint et tests sur les PRs.

---

Licence : voir les fichiers de licence du dépôt (si présents).
