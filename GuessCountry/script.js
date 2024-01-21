document.addEventListener('DOMContentLoaded', function() {
    var countries = {
        "AL": "Albania",
        "AD": "Andorra",
        "AM": "Armenia",
        "AT": "Austria",
        "AZ": "Azerbaijan",
        "BY": "Belarus",
        "BE": "Belgium",
        "BA": "Bosnia and Herzegovina",
        "BG": "Bulgaria",
        "HR": "Croatia",
        "CY": "Cyprus",
        "CZ": "Czech Republic",
        "DK": "Denmark",
        "EE": "Estonia",
        "FI": "Finland",
        "FR": "France",
        "GE": "Georgia",
        "DE": "Germany",
        "GR": "Greece",
        "HU": "Hungary",
        "IS": "Iceland",
        "IE": "Ireland",
        "IT": "Italy",
        "KZ": "Kazakhstan",
        "XK": "Kosovo",
        "LV": "Latvia",
        "LT": "Lithuania",
        "LU": "Luxembourg",
        "MD": "Moldova",
        "ME": "Montenegro",
        "NL": "Netherlands",
        "MK": "North Macedonia",
        "NO": "Norway",
        "PL": "Poland",
        "PT": "Portugal",
        "RO": "Romania",
        "RU": "Russia",
        "RS": "Serbia",
        "SK": "Slovakia",
        "SI": "Slovenia",
        "ES": "Spain",
        "SE": "Sweden",
        "CH": "Switzerland",
        "TR": "Turkey",
        "UA": "Ukraine",
        "GB": "United Kingdom",
        
    };
    

    var guessedCountries = {}; // Object to keep track of guessed countries
    var chosenCountry = null;

    // Function to choose a random country
    function chooseCountry() {
        var keys = Object.keys(countries).filter(function(country) {
            return !guessedCountries[country]; // Filter out already guessed countries
        });

        if (keys.length === 0) {
            alert("All countries guessed!");
            return; // Stop the game if all countries are guessed
        }

        chosenCountry = keys[keys.length * Math.random() << 0];
        document.getElementById('country-name').textContent = countries[chosenCountry];
    }

    // Function to check if the clicked country is correct
    function checkCountry(event) {
        var countryId = event.target.id;
        if (guessedCountries[countryId]) {
            // Do nothing if the country was already guessed
            return;
        }

        if (countryId === chosenCountry) {
            guessedCountries[countryId] = true; // Mark as guessed
            event.target.style.fill = "green"; // Highlight the correct country
            chooseCountry(); // Move to the next country
        } else {
            alert("Incorrect, YOU ARE BLACK");
        }
    }

    // Add event listener to each country path
    for (var country in countries) {
        var countryPath = document.getElementById(country);
        if (countryPath) {
            countryPath.addEventListener('click', checkCountry);
        }
    }

    // Initialize the game
    chooseCountry();
});
