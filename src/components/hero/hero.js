import './hero.css';

export const hero = () => {
  const heroElement = document.querySelector('#hero');

  heroElement.innerHTML = `
<div id="title">
    <h1>GAME ON.<span class="line-break"> DIVE RIGHT IN!</span></h1>

</div>

<section id="games">
<section/>
`;
};
