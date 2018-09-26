var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

let mainNav = document.getElementById('js-menu');
let navBarToggle = document.getElementById('js-navbar-toggle');

navBarToggle.addEventListener('click', function () {
    
  mainNav.classList.toggle('active');
});


// function success(pos) {
//   var crd = pos.coords;
//   var lat = crd.latitude
//   var lon = crd.longitude


//   map = L.map('mapDiv').setView([lat, lon], 18);
//   // set map tiles source
//   L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
//     maxZoom: 18,
//   }).addTo(map);
//   // add marker to the map
//   marker = L.marker([lat, lon]).addTo(map);
//   // add popup to the marker
//   marker.bindPopup("<b>MOBIQUITY</b><br />TOMMASSOALIBOSTRAAT <br />").openPopup();



//   console.log('Your current position is:');
//   console.log(`Latitude : ${crd.latitude}`);
//   console.log(`Longitude: ${crd.longitude}`);
//   console.log(`More or less ${crd.accuracy} meters.`);
// }

// function error(err) {
//   console.warn(`ERROR(${err.code}): ${err.message}`);
// }

// navigator.geolocation.getCurrentPosition(success, error, options);







