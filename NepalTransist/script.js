
let map;
let directionsService;
let directionsRenderer;

function initMap() {
   
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 27.7172, lng: 85.3240 }, // Centered at Kathmandu
        zoom: 7,
    });

    directionsService = new google.maps.DirectionsService();
    directionsRenderer = new google.maps.DirectionsRenderer();
    directionsRenderer.setMap(map);
}

function calculateRoute() {
    const origin = document.getElementById('originInput').value;
    const destination = document.getElementById('destinationInput').value;

    if (!origin || !destination) {
        alert('Please enter both origin and destination.');
        return;
    }

    directionsService.route(
        {
            origin: origin,
            destination: destination,
            travelMode: google.maps.TravelMode.DRIVING,
        },
        (response, status) => {
            if (status === 'OK') {
                directionsRenderer.setDirections(response);
            } else {
                alert('Directions request failed: ' + status);
            }
        }
    );
}

const hamburger = document.getElementById('hamburger');
const navbar = document.getElementById('navbar');

hamburger.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

document.addEventListener('click', (e) => {
    if (!e.target.closest('.header') && navbar.classList.contains('active')) {
        navbar.classList.remove('active');
    }
});