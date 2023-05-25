const events = [
  {
    imag: 'pics/platica1.jpg',
    year: '2022',
    ubi: 'Veterinary international meet, Huston',
  },
  {
    imag: 'pics/platica2.jpg',
    year: '2021',
    ubi: 'Veterinary international meet, Chile',
  },
];

const pictures = document.querySelector('.pastEvent');
const title = document.createElement('h2');
title.textContent = 'See the past meeting events';
pictures.appendChild(title);
const bar = document.createElement('div');
bar.classList.add('line');
pictures.appendChild(bar);
const desc = document.createElement('p');
desc.textContent = 'Take a second to look at the photos of our last two talks';
pictures.appendChild(desc);

function hola(index) {
  const cont = document.createElement('div');
  cont.classList.remove('item');
  cont.classList.add('item');
  cont.innerHTML = `
    <img src="${events[index].imag}" alt="Event">
    <div class="superPos">
    <h4>${events[index].year}</h4>
    <h5>${events[index].ubi}</h4>
  </div>`;
  return cont;
}

for (let i = 0; i < events.length; i += 1) {
  const event = hola(i);
  pictures.appendChild(event);
}
