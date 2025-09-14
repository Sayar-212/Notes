function selectChoice(type) {
    // Store selected choice
    sessionStorage.setItem('selectedChoice', type);
    
    // Check if user is logged in
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    
    if (isLoggedIn) {
        // Redirect to payment
        window.location.href = `payment.html?type=${type}`;
    } else {
        // Redirect to login
        window.location.href = 'login.html';
    }
}