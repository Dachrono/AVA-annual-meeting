document.getElementById('about').style.display = 'block';

function ajustar() {
  if (window.innerWidth < 768) {
    document.getElementById('navBar').style.display = 'none';
  } else {
    document.getElementById('navBar').style.display = '';
  }
}

window.addEventListener('load', () => {
  ajustar();
});

window.addEventListener('resize', () => {
  ajustar();
});

const pagAct = window.location.pathname;

if (pagAct === '/index.html') {
  document.getElementById('home').style.display = 'none';
}

// eslint-disable-next-line no-unused-vars
function hamFunction() {
  if (document.getElementById('navBar').style.display === 'none') {
    document.getElementById('navBar').style.display = 'block';
    document.getElementById('menu').style.position = 'fixed';
    document.getElementById('barClose').src = 'pics/icon/xicon.png';
  } else {
    document.getElementById('navBar').style.display = 'none';
    document.getElementById('barClose').src = 'pics/icon/navicon.png';
    document.getElementById('menu').style.position = '';
  }
}

const cardsInfo = [
  {
    pic: 'pics/photo/E_Andy.png',
    name: 'Marconi Morales',
    position: 'Director, cardiology specialist',
    description: 'Speaker at UNAM and part-time professor',
  },
  {
    pic: 'pics/photo/E_Rebeca.png',
    name: 'Rebeca Garcia',
    position: 'Marketing, social network specialist',
    description: 'More than 5 years coordinating our social media team',
  },
  {
    pic: 'pics/photo/E_Daniel.png',
    name: 'Daniel Alcaraz',
    position: 'Desing, image consultant',
    description: 'Corporate image advisor nestle for 5 years',
  },
  {
    pic: 'pics/photo/E_Luis.png',
    name: 'Luis Perez',
    position: 'I.T., IT support',
    description: 'Information technology specialist with 10 years of experience',
  },
  {
    pic: 'pics/photo/E_Marco.png',
    name: 'Marco Mercado',
    position: 'Nutritionist, development nutritional portions',
    description: 'nutrition specialist for small species, UNAM consultant',
  },
  {
    pic: 'pics/photo/E_Mariana.png',
    name: 'Mariana Medina',
    position: 'Chief doctor, general veterinary doctor',
    description: 'medical specialist in small species since 2010',
  },
];

const cardsContainer = document.querySelector('.team');
const title = document.createElement('h2');
title.textContent = 'Team Members';
title.classList.add('teamMem');
cardsContainer.appendChild(title);
const bar = document.createElement('div');
bar.classList.add('line2');
cardsContainer.appendChild(bar);

function teamCard(index) {
  const card = document.createElement('section');
  card.classList.remove(`teamCard${index}`);
  card.classList.add(`teamCard${index + 1}`);
  card.innerHTML = `
  <img src="${cardsInfo[index].pic}" alt="Photo">
  <div>
      <h3>${cardsInfo[index].name}</h3>
      <h4>${cardsInfo[index].position}</h4>
      <div class="lineCard"></div>
      <p>${cardsInfo[index].description}</p>
  </div>`;
  return card;
}

for (let i = 0; i < cardsInfo.length; i += 1) {
  const element = teamCard(i);
  cardsContainer.appendChild(element);
}
