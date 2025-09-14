// Get selected plan from URL
const urlParams = new URLSearchParams(window.location.search);
const planType = urlParams.get('type');

// Display selected plan
document.getElementById('selectedPlan').textContent = 
    planType === 'notes' ? 'Notes Access' : 'Live Lecture Notes Access';

function processPayment() {
    alert('Payment processing... (Integration with payment gateway needed)');
    // Integrate with actual payment gateway here
}

function toggleTokenSection() {
    const container = document.getElementById('tokenContainer');
    container.style.display = container.style.display === 'none' ? 'block' : 'none';
}

function validateToken() {
    const token = document.getElementById('accessToken').value.trim();
    if (!token) {
        alert('Please enter an access token');
        return;
    }
    
    if (token === 'Sayar125') {
        alert('Access token validated! Redirecting to content...');
        window.location.href = 'dashboard.html';
    } else {
        alert('Invalid access token. Please check and try again.');
    }
}