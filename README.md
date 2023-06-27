
# cocktails-visualizer

Test technique Front-End

## Description

L'objectif de ce test est de développer une web app simple permettant
d'afficher 3 cocktails aléatoires qui changent à chaque accès à la page à l'aide
de l'API TheCocktailDB.

## Spécifications

- Vue.js 3.2.13 (framework)
- Axios 1.4.0 (optionnel pour requêter l'API)
- Vue test utils 2.4.0 (tests unitaires avec Jest 27.0.5)

## Project setup

```bash
npm install
```

### Compiles and hot-reloads for development

```bash
npm run serve
```

### Compiles and minifies for production

```bash
npm run build
```

### Lints and fixes files

```bash
npm run lint
```

### Empaqueter l'application en image docker et le démarrer dans un conteneur

```bash
docker build -t cocktails-visualizer .
docker run -it -p 8080:80 --rm --name cocktails-visualizer-container cocktails-visualizer
```
