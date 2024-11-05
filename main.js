import { printGames } from './src/components/games/games';
import { hero } from './src/components/hero/hero';
import './style.css';

const divApp = document.querySelector('#app');

divApp.innerHTML = `
<main id="main">
<section id="hero"></section>
</main>
`;
hero();
printGames();
