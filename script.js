// --- 1. Background Floating Hearts ---
function createHearts() {
    const container = document.getElementById('heart-container');
    const heartCount = 20; 
    for (let i = 0; i < heartCount; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart-bg');
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = (Math.random() * 3 + 3) + 's';
        heart.style.animationDelay = Math.random() * 5 + 's';
        heart.style.backgroundColor = `rgba(255, ${Math.random() * 50 + 150}, ${Math.random() * 50 + 150}, 0.6)`;
        container.appendChild(heart);
    }
}
createHearts();

// --- 2. Page Navigation ---
function nextPage(pageNumber) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));
    const selectedPage = document.getElementById('page' + pageNumber);
    if (selectedPage) {
        selectedPage.classList.add('active');
    }
}

// --- 3. CURSOR TRAIL EFFECT (NEW!) ---
document.addEventListener('mousemove', function(e) {
    createTrailHeart(e.clientX, e.clientY);
});
document.addEventListener('touchmove', function(e) {
    const touch = e.touches[0];
    createTrailHeart(touch.clientX, touch.clientY);
});
function createTrailHeart(x, y) {
    const body = document.body;
    const heart = document.createElement('span');
    heart.classList.add('trail-heart');
    heart.innerHTML = '❤️';
    heart.style.left = x + 'px';
    heart.style.top = y + 'px';
    const size = Math.random() * 20 + 10;
    heart.style.fontSize = size + 'px';
    heart.style.transform = `translate(-50%, -50%) rotate(${Math.random() * 360}deg)`;
    body.appendChild(heart);
    setTimeout(() => {
        heart.remove();
    }, 1000);
}
// Function to display a message when a rose is clicked
function showRoseMessage(message) {
    const existingMessage = document.querySelector('.rose-message');
    if (existingMessage) {
        existingMessage.remove();
    }
    const messageElement = document.createElement('p');
    messageElement.className = 'rose-message';
    messageElement.style.textAlign = 'center';
    messageElement.style.color = '#d6336c';
    messageElement.style.fontSize = '1.2rem';
    messageElement.textContent = message;
    document.querySelector('.rose-container').insertAdjacentElement('afterend', messageElement);
    setTimeout(() => {
        messageElement.remove();
    }, 2000);
}
function showRoseMessageAndNavigate(message, pageNumber) {
    showRoseMessage(message);
    setTimeout(() => nextPage(pageNumber), 2000);
}
