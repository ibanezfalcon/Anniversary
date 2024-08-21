const yesButton = document.getElementById('yes-btn');
const noButton = document.getElementById('no-btn');
const container = document.querySelector('.container');

// Function to handle button movement
function moveButton(event) {
    // Get container dimensions
    const containerRect = container.getBoundingClientRect();
    const buttonRect = noButton.getBoundingClientRect();

    // Calculate maximum X and Y to avoid overlapping with the pointer
    const maxX = containerRect.width - buttonRect.width;
    const maxY = containerRect.height - buttonRect.height;

    // Determine pointer position depending on event type
    let pointerX, pointerY;
    if (event.type === 'touchstart' || event.type === 'touchmove') {
        const touch = event.touches[0];
        pointerX = touch.clientX - containerRect.left;
        pointerY = touch.clientY - containerRect.top;
    } else {
        pointerX = event.clientX - containerRect.left;
        pointerY = event.clientY - containerRect.top;
    }

    // Ensure the button moves away from the pointer
    let x, y;

    // Loop to find a position not close to the pointer
    do {
        x = Math.floor(Math.random() * maxX);
        y = Math.floor(Math.random() * maxY);
    } while (Math.abs(x - pointerX) < 150 && Math.abs(y - pointerY) < 150); // Adjust distance as needed

    // Move the button to the new position within the container
    noButton.style.position = 'absolute';
    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;
}

// Add event listeners for both mouse and touch events
noButton.addEventListener('mouseover', moveButton);
noButton.addEventListener('mousemove', moveButton); // Additional mouse event
noButton.addEventListener('touchstart', moveButton); // Handle touch start
noButton.addEventListener('touchmove', moveButton); // Handle touch move

// Function to handle "Absolutely!" button click
function handleYesButtonClick() {
    window.location.href = 'steps.html'; // Redirect to the new page
}

yesButton.addEventListener('click', handleYesButtonClick);
