
function changeMode (size, weight, transform, background, color) {
  return function () {
    document.body.style.fontSize = size;
    document.body.style.fontWeight = weight;
    document.body.style.textTransform = transform;
    document.body.style.backgroundColor = background;
    document.body.style.color = color;
  };
}

function main () {
  const spooky = changeMode(9, 'bold', 'uppercase', 'pink', 'green');
  const darkMode = changeMode(12, 'bold', 'capitalize', 'black', 'white');
  const screamMode = changeMode(12, 'normal', 'lowercase', 'white', 'black');

  const sampleParagraph = document.createElement('p');
  sampleParagraph.innerHTML = 'Welcome Holberton! Lorem Ipsum is simply dummy text of the printing and typesetting industry';
  document.body.appendChild(sampleParagraph);

  const spMode = document.createElement('button');
  spMode.innerHTML = 'Spooky';
  document.body.appendChild(spMode);
  spMode.addEventListener('click', spooky);

  const dkMode = document.createElement('button');
  dkMode.innerHTML = 'Dark Mode';
  dkMode.addEventListener('click', darkMode);
  document.body.appendChild(dkMode);

  const scmMode = document.createElement('button');
  scmMode.innerHTML = 'Scream Mode';
  scmMode.addEventListener('click', screamMode);
  document.body.appendChild(scmMode);
}

main();
