$(document).ready(function() {
    // Toggle mobile navigation
    $('#hamburger').click(function() {
        $('#navbar').toggleClass('active');
    });

    // Search button functionality (Placeholder for future API integration)
    $('#searchBtn').click(function() {
        let origin = $('#originInput').val();
        let destination = $('#destinationInput').val();
        
        if (origin && destination) {
            alert(`Searching routes from ${origin} to ${destination}...`);
        } else {
            alert('Please enter both origin and destination!');
        }
    });

    // Google Maps API integration (Ensure API key is added)
    window.initMap = function() {
        var map = new google.maps.Map(document.getElementById('map'), {
            center: { lat: 27.7172, lng: 85.3240 }, // Default to Kathmandu
            zoom: 7
        });
    };

    // Smooth scrolling for navigation links
    $('nav a').click(function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            let hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800);
        }
    });
});

// About Us and Contact Section
$(document).ready(function() {
    $('body').append(`
        <section class="about-us" id="about">
            <div class="container">
                <h2>About Us</h2>
                <p>Nepal Transit is a leading route planning and ticket booking platform dedicated to making travel across Nepal easier, faster, and more convenient. Headquartered in Kathmandu, Nepal, we provide real-time route information, estimated travel durations, and seamless booking options for buses and other transit services.</p>
                <p>Our mission is to enhance the public transportation experience by integrating smart technology with accurate data. Whether you're planning a journey from Kathmandu to Pokhara, Chitwan, Lumbini, or any other destination, Nepal Transit ensures that you get the best travel options at your fingertips.</p>
                <p>With a user-friendly interface, interactive maps, and 24/7 customer support, we make transportation across Nepal efficient and hassle-free.</p>
            </div>
        </section>

        <section class="contact" id="contact">
            <div class="container">
                <h2>Contact Us</h2>
                <p><strong>Headquarters:</strong> Kathmandu, Nepal</p>
                <p><strong>Email:</strong> support@nepaltransit.com</p>
                <p><strong>Phone:</strong> +977-1-1234567</p>
            </div>
        </section>
    `);
});
