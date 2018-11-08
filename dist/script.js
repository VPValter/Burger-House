function initMap() {
  let locOne = { lat: 44.831168, lng: 20.416366 };
  let locTwo = { lat: 44.805636, lng: 20.474724 };

  let mapOne = new google.maps.Map(document.getElementById('gmap-1'), {
    center: locOne,
    zoom: 15
  });
  let mapTwo = new google.maps.Map(document.getElementById('gmap-2'), {
    center: locTwo,
    zoom: 15
  });

  let markOne = new google.maps.Marker({ position: locOne, map: mapOne });
  let markTwo = new google.maps.Marker({ position: locTwo, map: mapTwo });
}

// Select DOM items
const menuBtn = document.querySelector('.menu-btn');
const navMenu = document.querySelector('.nav-menu');

// Set the initial state of the menu
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);
navMenu.addEventListener('click', closeMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add('close');
    navMenu.classList.add('show');
    showMenu = true;
  } else {
    menuBtn.classList.remove('close');
    navMenu.classList.remove('show');
    showMenu = false;
  }
}

function closeMenu() {
  menuBtn.classList.remove('close');
  navMenu.classList.remove('show');
  showMenu = false;
}
