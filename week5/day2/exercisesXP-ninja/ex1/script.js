const API_KEY = "hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";
// Giphy Search Endpoint
const GIPHY_SEARCH_API_URL = "https://api.giphy.com/v1/gifs/search";

// --- DOM Elements ---
const gifSearchForm = document.getElementById('gifSearchForm');
const categoryInput = document.getElementById('categoryInput');
const gifContainer = document.getElementById('gifContainer');
const deleteAllGifsBtn = document.getElementById('deleteAllGifsBtn');
const statusMessage = document.getElementById('statusMessage');
const errorMessage = document.getElementById('errorMessage');

// --- Helper Functions for UI Messages ---
function displayMessage(element, message, isError = false) {
    element.textContent = message;
    element.classList.remove('hidden');
    element.classList.toggle('error-text', isError);
    // Ensure it's the only message visible
    if (element === statusMessage) hideMessage(errorMessage);
    if (element === errorMessage) hideMessage(statusMessage);
}

function hideMessage(element) {
    element.classList.add('hidden');
}


async function fetchGifs(category) {
    // Clear previous error messages and show loading status
    hideMessage(errorMessage);
    displayMessage(statusMessage, `Searching for "${category}" GIFs...`);

    try {
        // Construct the URL for Giphy search
        const url = `${GIPHY_SEARCH_API_URL}?api_key=${API_KEY}&q=${encodeURIComponent(category)}&limit=10&rating=g`;
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status} - ${response.statusText}`);
        }

        const data = await response.json();

        // Clear existing GIFs before appending new ones
        gifContainer.innerHTML = ''; 

        if (data.data && data.data.length > 0) {
            // Append each fetched GIF to the DOM
            data.data.forEach(gif => {
                // Hint: URL of the gif is in images.fixed_height.url
                const gifUrl = gif.images.fixed_height.url;
                appendGifToDOM(gifUrl);
            });
            hideMessage(statusMessage); // Hide status message on success
        } else {
            // No GIFs found for the category
            displayMessage(statusMessage, `No GIFs found for "${category}". Try another category!`);
        }
    } catch (error) {
        console.error("Error fetching GIFs:", error);
        // Display a user-friendly error message
        displayMessage(errorMessage, `Failed to load GIFs: ${error.message}`, true);
    }
}


function appendGifToDOM(gifUrl) {
    const gifCard = document.createElement('div');
    gifCard.classList.add('gif-card');

    const img = document.createElement('img');
    img.src = gifUrl;
    img.alt = "Giphy GIF";
    img.onerror = () => { // Fallback for broken image links
        img.src = "https://placehold.co/200x200/cccccc/333333?text=Image+Error";
        img.alt = "Image failed to load";
    };

    gifCard.appendChild(img);
    gifContainer.appendChild(gifCard);
}


function handleFormSubmit(event) {
    event.preventDefault(); // Prevent default form submission (page reload)
    const category = categoryInput.value.trim();

    if (category) {
        fetchGifs(category);
        categoryInput.value = ''; // Clear the input field
    } else {
        displayMessage(errorMessage, "Please enter a category to search for GIFs.", true);
    }
}


function handleDeleteAllGifs() {
    // Optionally confirm with the user before deleting all
    if (confirm("Are you sure you want to delete all displayed GIFs?")) {
        gifContainer.innerHTML = ''; // Clear all child elements
        displayMessage(statusMessage, 'All GIFs cleared.');
        hideMessage(errorMessage); // Also clear any error messages
    }
}

// --- Event Listeners ---
gifSearchForm.addEventListener('submit', handleFormSubmit);
deleteAllGifsBtn.addEventListener('click', handleDeleteAllGifs);

// --- Initial State ---
displayMessage(statusMessage, 'Enter a category above to search for GIFs!');