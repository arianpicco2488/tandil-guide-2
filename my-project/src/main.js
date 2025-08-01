import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'


const data = {
  "Aire Libre": [
    {
      name: "Dique de Tandil",
      img: "images/dique.jpg",
      link: "https://maps.google.com?q=Dique+de+Tandil",
      label: "Disfruta de un día al aire libre"
    },
    {
      name: "Parque de los Dinosaurios",
      img: "images/dinosaurios.jpg",
      link: "https://maps.google.com?q=Parque+de+los+Dinosaurios",
      label: "A las 11 los dinosaurios cobran vida"
    },
    {
      name: "Fuerte Independencia",
      img: "images/fuerte.jpg",
      link: "https://maps.google.com?q=Fuerte+Independencia",
      label: "Un paseo histórico"
    },
    {
      name: "Calvario",
      img: "images/calvario.jpg",
      link: "https://maps.google.com?q=Calvario+Tandil",
      label: "Visitar a Jesús en la cima"
    }, {
      name: "Centinela",
      img: "images/centinela.jpg",
      link: "https://maps.google.com?q=Centinela+Tandil",
      label: "Caminata y recorridos en la naturaleza"
    },
    {
      name: "Movediza",
      img: "images/movediza.jpg",
      link: "https://maps.google.com?q=Piedra+Movediza+Tandil",
      label: "La famosa piedra que se mueve"
    },
    {
      name: "Parque Aéreo",
      img: "images/parque-aereo.jpg",
      link: "https://maps.google.com?q=Parque+Aéreo+Tandil",
      label: "Volar entre los árboles"
    }
  ],
  "Salamines": [
    {
      name: "Época de Quesos",
      img: "images/epoca.jpg",
      link: "https://maps.google.com?q=Época+de+Quesos+Tandil",
      label: "Disfruta de los mejores quesos"
    },
    {
      name: "Syquet",
      img: "images/syquet.jpg",
      link: "https://maps.google.com?q=Syquet+Tandil", 
      label: "Quesos y fiambres de calidad"
    }
  ],
  "Casa de Ari": [
    {
      name: "Casa de Ari",
      img: "images/casa.jpg",
      link: "https://maps.app.goo.gl/mBfFKLwXJw68RxGG7",
      label: "Bienvenida a la casa de Ari"
    }
  ],
  "Hospedaje": [
    {
      name: "Airbnb",
      img: "images/airbnb.jpg",
      link: "https://airbnb.com",
      label: "Encuentra tu lugar ideal"
    }  ]
};

function createCard({ name, img, link, label }) {
  const div = document.createElement("div");
  div.className =
    "w-full min-w-[250px] group cursor-pointer relative overflow-hidden transform transition-all duration-700 hover:scale-105 hover:rotate-1 hover:shadow-xl hover:-translate-y-2 bg-white/90 backdrop-blur-md rounded-xl shadow-md hover:shadow-emerald-200/40";

  div.innerHTML = `
    <!-- Animated Border -->
    <div class="absolute inset-0 bg-gradient-to-r from-emerald-300 via-green-300 to-lime-200 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    <div class="absolute inset-[2px] bg-white rounded-xl z-10"></div>

    <!-- Blurred Background Image -->
    <div class="relative z-20 h-72 w-full overflow-hidden rounded-xl">
      <div class="absolute inset-0 bg-cover bg-center blur-[1px] scale-105" style="background-image: url('${img}')"></div>

      <!-- Gradient overlays -->
      <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-emerald-900/60 transition-all duration-700 rounded-xl"></div>
      <div class="absolute inset-0 bg-gradient-to-br from-emerald-300/20 via-transparent to-lime-200/20 opacity-0 group-hover:opacity-100 transition-all duration-700 rounded-xl"></div>

      <!-- Decorative Lights -->
      <div class="absolute top-2 left-2 w-2 h-2 bg-lime-300 rounded-full opacity-0 group-hover:opacity-100 animate-bounce transition-opacity duration-500 delay-100"></div>
      <div class="absolute top-4 right-8 w-1 h-1 bg-emerald-300 rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-500 delay-200"></div>
      <div class="absolute bottom-20 left-4 w-1.5 h-1.5 bg-green-300 rounded-full opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-500 delay-300"></div>

      <!-- Content -->
      <div class="absolute bottom-0 left-0 right-0 p-6 transform transition-all duration-700 group-hover:translate-y-0">
        <h3 class="text-white font-bold text-xl mb-2 drop-shadow-lg group-hover:text-lime-500 transition-all duration-500 transform group-hover:scale-105">
          ${name}
        </h3>
        <p class="text-white/90 text-sm mb-4 opacity-0 group-hover:opacity-100 transform translate-y-6 group-hover:translate-y-0 transition-all duration-700 delay-150 leading-relaxed">
          ${label || "Ver en Google Maps"}
        </p>
        <a
          href="${link}"
          target="_blank"
          rel="noopener noreferrer"
          class="relative z-10 block w-full text-sm text-white font-semibold text-center bg-gradient-to-r from-emerald-300 via-green-300 to-lime-200 hover:from-emerald-400 hover:to-lime-300 py-2 px-4 rounded-md shadow-md transform transition-all duration-500 hover:shadow-lg hover:shadow-emerald-300/40 group-hover:scale-105 opacity-90 group-hover:opacity-100 overflow-hidden"
        >
         <div class="absolute inset-0 bg-gradient-to-r from-lime-200 to-emerald-200 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
<span class="relative z-10 text-green-800">Google Maps</span>
        </a>
      </div>

      <!-- Shimmer -->
      <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 delay-300"></div>
    </div>
  `;

  return div;
}

function createSection(title, places, iconSVG = '') {
  const section = document.createElement("section");
  section.className = "mb-16 relative";

  section.innerHTML = `
    <!-- Background Pattern -->
    <div class="absolute inset-0 bg-gradient-to-r from-green-100/40 to-lime-100/40 rounded-3xl transform -skew-y-1 scale-105 -z-10"></div>

    <!-- Section Header -->
    <div class="relative mb-8">
      <div class="bg-gradient-to-r from-green-300 via-lime-100 to-green-200 rounded-2xl p-6 shadow-md transform hover:scale-105 transition-all duration-300">
        <div class="flex items-center gap-4">
          <div class="bg-white/30 backdrop-blur-md rounded-xl p-3">
            ${iconSVG}
          </div>
          <div>
            <h2 class="text-2xl sm:text-3xl font-bold text-green-900 drop-shadow-md">${title}</h2>
            <div class="h-1 w-20 bg-gradient-to-r from-lime-400 to-green-400 rounded-full mt-2"></div>
          </div>
        </div>
      </div>
    </div>

    <!-- Cards Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-2 sm:px-4" id="sec-${title.replace(/\s/g, '')}"></div>
  `;

  const container = section.querySelector(`#sec-${title.replace(/\s/g, '')}`);

  places.forEach((place, index) => {
    const card = createCard(place);
    card.classList.add("transform", "transition-all", "duration-500");
    card.style.animationDelay = `${index * 100}ms`;
    container.appendChild(card);
  });

  return section;
}

const main = document.getElementById("mainContent");


document.addEventListener('DOMContentLoaded', () => {
  const header = document.getElementById('mainHeader');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
      header.classList.add('shadow-xl');
    } else {
      header.classList.remove('shadow-xl');
    }
  });
});


const sectionIcons = {
  "Aire Libre": `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shrub-icon lucide-shrub text-white">
      <path d="M12 22v-5.172a2 2 0 0 0-.586-1.414L9.5 13.5"/>
      <path d="M14.5 14.5 12 17"/>
      <path d="M17 8.8A6 6 0 0 1 13.8 20H10A6.5 6.5 0 0 1 7 8a5 5 0 0 1 10 0z"/>
    </svg>
  `,
  "Salamines": `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-drumstick-icon lucide-drumstick text-white">
      <path d="M15.4 15.63a7.875 6 135 1 1 6.23-6.23 4.5 3.43 135 0 0-6.23 6.23"/>
      <path d="m8.29 12.71-2.6 2.6a2.5 2.5 0 1 0-1.65 4.65A2.5 2.5 0 1 0 8.7 18.3l2.59-2.59"/>
    </svg>
  `,
  "Casa de Ari": `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-person-standing-icon lucide-person-standing text-white">
      <circle cx="12" cy="5" r="1"/>
      <path d="m9 20 3-6 3 6"/>
      <path d="m6 8 6 2 6-2"/>
      <path d="M12 10v4"/>
    </svg>
  `,
  "Hospedaje": `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-house-icon lucide-house text-white">
      <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/>
      <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
    </svg>
  `
};



const header = document.createElement("header");
header.id = "mainHeader";
header.className = "fixed top-0 left-0 w-full z-50 backdrop-blur-lg";

header.innerHTML = `
  <div class="max-w-screen-xl mx-auto px-6 py-6 flex items-center justify-center sm:justify-start gap-6">
    <div class="relative">
      <div class="w-20 h-20 rounded-2xl bg-gradient-to-br from-emerald-400 via-green-500 to-lime-500 shadow-lg flex items-center justify-center transform rotate-12 hover:rotate-0 transition-transform duration-700">
        <img src="/images/tandil.png" alt="Tandil" class="w-12 h-12" />
      </div>
      <div class="absolute -top-2 -right-2 w-5 h-5 bg-lime-400 rounded-full animate-ping"></div>
    </div>
    <div>
      <h1 class="text-3xl sm:text-5xl font-bold bg-gradient-to-r from-emerald-600 via-green-600 to-lime-600 bg-clip-text text-transparent">
        Guía Rápida de Tandil
      </h1>
      <div class="h-1 w-24 bg-gradient-to-r from-emerald-400 to-lime-400 rounded-full mt-2 shadow" />
    </div>
  </div>
`;

document.body.insertBefore(header, document.body.firstChild);



Object.entries(data).forEach(([sectionName, cards]) => {
  const icon = sectionIcons[sectionName] || ""; // fallback empty string if no match
  main.appendChild(createSection(sectionName, cards, icon));
});
