import { games } from '../utils/gamesArray';
import './games.css';

export const printGames = () => {
  const gamesSection = document.querySelector('#games');

  for (const game of games) {
    const gameArticle = document.createElement('article');
    gameArticle.className = 'game-container';

    const imageDiv = document.createElement('div');
    imageDiv.className = 'img-container';

    const img = document.createElement('img');
    img.className = 'img-game';
    img.src = game.image;
    img.alt = game.name;

    const dataDiv = document.createElement('div');
    dataDiv.className = 'data-container';

    const gameName = document.createElement('h2');
    gameName.textContent = game.name;

    const gameDescription = document.createElement('p');
    gameDescription.textContent = game.description;
    gameDescription.className = 'game-description';

    const playButton = document.createElement('a');
    playButton.className = 'play-button';
    playButton.textContent = ' PLAY NOW';
    playButton.href = game.href;
    playButton.target = '_blank';
    playButton.rel = 'noopener noreferrer';

    imageDiv.appendChild(img);
    dataDiv.append(gameName, gameDescription, playButton);
    gameArticle.append(imageDiv, dataDiv);
    gamesSection.appendChild(gameArticle);
  }
};
