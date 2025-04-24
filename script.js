<<<<<<< HEAD
// --- Your foodItems array (Looks like you've updated the structure well!) ---
// --- Remember to add a location for the first item if possible ---
const foodItems = [
    // Make sure this first one has a location if applicable
    { name: "Khatu Shyam HoteL & Maggie point", location: "117, Station Road, Cantt Area, Fatehgarh", type: 'spicy' },
    { name: "Winni Cakes & More", location: "1/C-3 Mandir Road, in front of Hindustan Hotel, Awas Vikas Colony, Farrukhabad", type: 'sweet' },
    { name: "Chhabra bakery", location: "Near Christian Inter College, Barhpur", type: 'sweet' },
    { name: "Om Bakery", location: "Khatrana St, Manhari, Farrukhabad", type: 'sweet' },
    { name: "Om Sai Ram Bakers", location: "4/169 nawab niyamat kha west, Railway Road, Farrukhabad", type: 'sweet' },
    { name: "Seema Bakery", location: "Railway Road, near Railway Station, Bazaria Nihal Chand, Farrukhabad", type: 'sweet' },
    { name: "The hideout cafe", location: "Awas Vikas Rd, LIC Officers Colony, Awas Vikas Colony, Farrukhabad", type: 'meal' },
    { name: "Verandah Rooftop Restaurant", location: "Madhur Milan lawn, Awas Vikas Colony, Farrukhabad", type: 'meal' },
    { name: "One Bite Farrukhabad", location: "Nitganja South, Madarwadi Road, Farrukhabad", type: 'meal' },
    { name: "Quick Bites", location: "Awas Vikas Rd, Awas Vikas Colony, Farrukhabad", type: 'meal' },
    { name: "Kanchan Bhog Sweets", location: "Bikampura road, near tikona chowki, Bhikampura, Farrukhabad", type: 'sweet' },
    { name: "CHAAP HOUSE", location: "1/161, near R.K Hospital, Awas Vikas Colony, Farrukhabad", type: 'meal' },
    { name: "Puvika Cafe", location: "1st Floor, Rambagh ,Barhpur, Rambag, Barhpur, above Reliance Smart Point Infront of Vishal Mega Mart", type: 'meal' },
    { name: "Suryaa Namkeen Bhandar", location: "3/25, Lohai Rd, Dilli Khyali Kuncha, Manhari, Farrukhabad", type: 'spicy' },
    { name: "Neelkanth Sweets & Namkeen", location: "2B/110, Awas Vikas Rd, Awas Vikas Colony, Farrukhabad", type: 'spicy' },
    { name: "Neelkanth Sweets & Namkeen", location: "2B/110, Awas Vikas Rd, Awas Vikas Colony, Farrukhabad", type: 'sweet' }, // Note: Duplicate location, maybe intentional?
    { name: "Chaipanti", location: "Globus Shoping Complex, Awas Vikas Rd, near Neelkanth Sweets, Awas Vikas Colony, Farrukhabad", type: 'beverage' },
    { name: "Chaipanti", location: "Globus Shoping Complex, Awas Vikas Rd, near Neelkanth Sweets, Awas Vikas Colony, Farrukhabad", type: 'spicy' }, // Note: Duplicate location, maybe intentional?
    // Add many more...
];
// -------------------------------------------------------------

// Get references to HTML elements
const randomizeButton = document.getElementById('randomizeButton');
const resultDisplay = document.getElementById('resultDisplay');
const resultText = resultDisplay.querySelector('p'); // This targets the <p> INSIDE the resultDisplay div
const filterButtons = document.querySelectorAll('.filter-button'); // Get ALL filter buttons

let currentFilter = 'any'; // Variable to store the active filter, 'any' by default

// --- Logic for Filter Buttons ---
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove 'active' class from previously active button
        document.querySelector('.filter-button.active').classList.remove('active');
        // Add 'active' class to the clicked button
        button.classList.add('active');
        // Update the current filter state
        currentFilter = button.dataset.filter; // Get filter type from data-filter attribute
         // Optional: Update placeholder text based on filter
         // We use innerHTML here too now, just in case, though textContent would be fine for plain text
         resultText.innerHTML = `<span style="color: #777; font-weight: 300; font-size: 1em;">Click the button for a ${currentFilter !== 'any' ? currentFilter : ''} suggestion!</span>`;
         // Removed direct style setting here as placeholder handled above or via CSS
    });
});

// --- Logic for Randomize Button (Now includes filtering AND HTML output) ---
randomizeButton.addEventListener('click', () => {
    // 1. Filter the array based on the currentFilter
    let filteredItems;
    if (currentFilter === 'any') {
        filteredItems = foodItems; // No filter applied
    } else {
        // Ensure item.type exists before comparing
        filteredItems = foodItems.filter(item => item.type && item.type === currentFilter);
    }

    // 2. Check if any items match the filter
    if (filteredItems.length === 0) {
        // Display error message using innerHTML as well
        resultText.innerHTML = `<span style="color: #2c3e50; font-weight: 600; font-size: 1.2em;">Sorry, no ${currentFilter} items found in the list!</span>`;
        return; // Stop the function here
    }

    // 3. Generate random index from the FILTERED list
    const randomIndex = Math.floor(Math.random() * filteredItems.length);

    // 4. Select the random food item from the FILTERED list
    const randomFood = filteredItems[randomIndex]; // Get the object

    // 5. === THIS IS THE UPDATED DISPLAY LOGIC (STEP 2 from previous explanation) ===
    //    Update the display using innerHTML to allow for styling with classes
    resultText.innerHTML = `
        <strong class="food-name">${randomFood.name}</strong> 
        <br>
        <small class="food-location">${randomFood.location || ''}</small> 
    `;
    // Using innerHTML inserts the <strong> and <small> tags.
    // The classes "food-name" and "food-location" can now be styled by your CSS.
    // No direct style setting needed here anymore if CSS is set up correctly.
=======
// --- Your foodItems array (Looks like you've updated the structure well!) ---
// --- Remember to add a location for the first item if possible ---
const foodItems = [
    // Make sure this first one has a location if applicable
    { name: "Khatu Shyam HoteL & Maggie point", location: "117, Station Road, Cantt Area, Fatehgarh", type: 'spicy' },
    { name: "Winni Cakes & More", location: "1/C-3 Mandir Road, in front of Hindustan Hotel, Awas Vikas Colony, Farrukhabad", type: 'sweet' },
    { name: "Chhabra bakery", location: "Near Christian Inter College, Barhpur", type: 'sweet' },
    { name: "Om Bakery", location: "Khatrana St, Manhari, Farrukhabad", type: 'sweet' },
    { name: "Om Sai Ram Bakers", location: "4/169 nawab niyamat kha west, Railway Road, Farrukhabad", type: 'sweet' },
    { name: "Seema Bakery", location: "Railway Road, near Railway Station, Bazaria Nihal Chand, Farrukhabad", type: 'sweet' },
    { name: "The hideout cafe", location: "Awas Vikas Rd, LIC Officers Colony, Awas Vikas Colony, Farrukhabad", type: 'meal' },
    { name: "Verandah Rooftop Restaurant", location: "Madhur Milan lawn, Awas Vikas Colony, Farrukhabad", type: 'meal' },
    { name: "One Bite Farrukhabad", location: "Nitganja South, Madarwadi Road, Farrukhabad", type: 'meal' },
    { name: "Quick Bites", location: "Awas Vikas Rd, Awas Vikas Colony, Farrukhabad", type: 'meal' },
    { name: "Kanchan Bhog Sweets", location: "Bikampura road, near tikona chowki, Bhikampura, Farrukhabad", type: 'sweet' },
    { name: "CHAAP HOUSE", location: "1/161, near R.K Hospital, Awas Vikas Colony, Farrukhabad", type: 'meal' },
    { name: "Puvika Cafe", location: "1st Floor, Rambagh ,Barhpur, Rambag, Barhpur, above Reliance Smart Point Infront of Vishal Mega Mart", type: 'meal' },
    { name: "Suryaa Namkeen Bhandar", location: "3/25, Lohai Rd, Dilli Khyali Kuncha, Manhari, Farrukhabad", type: 'spicy' },
    { name: "Neelkanth Sweets & Namkeen", location: "2B/110, Awas Vikas Rd, Awas Vikas Colony, Farrukhabad", type: 'spicy' },
    { name: "Neelkanth Sweets & Namkeen", location: "2B/110, Awas Vikas Rd, Awas Vikas Colony, Farrukhabad", type: 'sweet' }, // Note: Duplicate location, maybe intentional?
    { name: "Chaipanti", location: "Globus Shoping Complex, Awas Vikas Rd, near Neelkanth Sweets, Awas Vikas Colony, Farrukhabad", type: 'beverage' },
    { name: "Chaipanti", location: "Globus Shoping Complex, Awas Vikas Rd, near Neelkanth Sweets, Awas Vikas Colony, Farrukhabad", type: 'spicy' }, // Note: Duplicate location, maybe intentional?
    // Add many more...
];
// -------------------------------------------------------------

// Get references to HTML elements
const randomizeButton = document.getElementById('randomizeButton');
const resultDisplay = document.getElementById('resultDisplay');
const resultText = resultDisplay.querySelector('p'); // This targets the <p> INSIDE the resultDisplay div
const filterButtons = document.querySelectorAll('.filter-button'); // Get ALL filter buttons

let currentFilter = 'any'; // Variable to store the active filter, 'any' by default

// --- Logic for Filter Buttons ---
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove 'active' class from previously active button
        document.querySelector('.filter-button.active').classList.remove('active');
        // Add 'active' class to the clicked button
        button.classList.add('active');
        // Update the current filter state
        currentFilter = button.dataset.filter; // Get filter type from data-filter attribute
         // Optional: Update placeholder text based on filter
         // We use innerHTML here too now, just in case, though textContent would be fine for plain text
         resultText.innerHTML = `<span style="color: #777; font-weight: 300; font-size: 1em;">Click the button for a ${currentFilter !== 'any' ? currentFilter : ''} suggestion!</span>`;
         // Removed direct style setting here as placeholder handled above or via CSS
    });
});

// --- Logic for Randomize Button (Now includes filtering AND HTML output) ---
randomizeButton.addEventListener('click', () => {
    // 1. Filter the array based on the currentFilter
    let filteredItems;
    if (currentFilter === 'any') {
        filteredItems = foodItems; // No filter applied
    } else {
        // Ensure item.type exists before comparing
        filteredItems = foodItems.filter(item => item.type && item.type === currentFilter);
    }

    // 2. Check if any items match the filter
    if (filteredItems.length === 0) {
        // Display error message using innerHTML as well
        resultText.innerHTML = `<span style="color: #2c3e50; font-weight: 600; font-size: 1.2em;">Sorry, no ${currentFilter} items found in the list!</span>`;
        return; // Stop the function here
    }

    // 3. Generate random index from the FILTERED list
    const randomIndex = Math.floor(Math.random() * filteredItems.length);

    // 4. Select the random food item from the FILTERED list
    const randomFood = filteredItems[randomIndex]; // Get the object

    // 5. === THIS IS THE UPDATED DISPLAY LOGIC (STEP 2 from previous explanation) ===
    //    Update the display using innerHTML to allow for styling with classes
    resultText.innerHTML = `
        <strong class="food-name">${randomFood.name}</strong> 
        <br>
        <small class="food-location">${randomFood.location || ''}</small> 
    `;
    // Using innerHTML inserts the <strong> and <small> tags.
    // The classes "food-name" and "food-location" can now be styled by your CSS.
    // No direct style setting needed here anymore if CSS is set up correctly.
>>>>>>> 476cc6f3ecb8979dace56d3ca6feae2a2056e7a1
});