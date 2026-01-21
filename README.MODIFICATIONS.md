# La Kebaberie — Application Angular

Site de démonstration pour un restaurant (menu, sections, panier) construit avec Angular 21.

Ce dépôt contient une application Angular standalone (sans module Angular traditionnel) présentant une carte de produits, des sections, un panier client et des composants réutilisables.

## Fonctionnalités principales

- Affichage des sections de menu et des plats
- Filtre de recherche / choix d'ingrédients
- Panier client (ajout, mise à jour de quantités, suppression)
- Composants standalone réutilisables (header, footer, modals, etc.)

## Prérequis

- Node.js (version LTS recommandée compatible avec npm fournie)
- npm
- Angular 21 (les dépendances du projet sont déjà configurées dans `package.json`)

## Installation

Depuis la racine du projet :

```powershell
npm install
```

## Commandes de développement (PowerShell)

Démarrer le serveur de développement :

```powershell
npm start
# ou
ng serve
```

Construire l'application pour la production :

```powershell
npm run build
```

Lancer les tests unitaires (si configurés) :

```powershell
npm test
```

Contrôle de type TypeScript :

```powershell
npm run typecheck
```

Lancer ESLint (analyse statique) :

```powershell
npm run lint
```

Formater le code avec Prettier :

```powershell
npm run format
```

## Structure du projet (aperçu)

- `src/` — code source de l'application
  - `app/` — composants, pages, services
    - `pages/home/` — page d'accueil et sections du menu
    - `shared/` — composants partagés, services, données et modèles
  - `assets/` — images et ressources statiques
  - `index.html`, `main.ts`, `styles.css` — point d'entrée et styles globaux
- `angular.json`, `tsconfig.json`, `package.json` — configuration du projet

## Conventions et bonnes pratiques suivies

- Composants standalone quand possible (Angular 21)
- Typage strict TypeScript (strict mode activé)
- Pas d'usage non justifié de `any` dans le code applicatif
- Réutilisation via des barrels (`shared/components`, `shared/models`, etc.)
- Services pour la logique métier (ex : `CartService` pour gérer le panier)
- Templates accessibles (attributs `aria`, gestion du focus quand pertinent)

## Notes de maintenance

- ESLint : configuration minimale ajoutée, exécutez `npm install` puis `npm run lint` pour analyser le code.
- CSS : certains fichiers de styles sont volumineux ; si nécessaire, extraire les styles partagés ou réduire la taille pour respecter les budgets de build configurés dans `angular.json`.
- Tests : ajouter progressivement des tests unitaires pour `CartService`, composants critiques et pages (objectif de couverture ultérieur : 80%).

## Contribution

- Forkez le dépôt, créez une branche feature/bugfix, et ouvrez une pull request décrivant les changements.
- Respectez les conventions de formatage (Prettier) et vérifiez le typecheck avant PR.

## Aide / Contact

Pour toute question liée à ce projet, commentez la PR ou envoyez un message au mainteneur du dépôt.

---

Ce README remplace le fichier de modifications — il décrit désormais le projet et la manière de l'utiliser localement.
