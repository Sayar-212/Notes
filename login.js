// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC_XjKwnAk8TkIPiYAV0NODCrfXqxrPJbY",
    authDomain: "sayarnotes.firebaseapp.com",
    projectId: "sayarnotes",
    storageBucket: "sayarnotes.firebasestorage.app",
    messagingSenderId: "56577477072",
    appId: "1:56577477072:web:3df5dab0802662fe9c51d5",
    measurementId: "G-9H95DXFRSZ"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Google Auth Provider
const provider = new firebase.auth.GoogleAuthProvider();

// Google Login
document.getElementById('googleLogin').addEventListener('click', () => {
    auth.signInWithPopup(provider)
        .then((result) => {
            // User signed in
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('userEmail', result.user.email);
            
            // Get selected choice and redirect to payment
            const selectedChoice = sessionStorage.getItem('selectedChoice');
            window.location.href = `payment.html?type=${selectedChoice}`;
        })
        .catch((error) => {
            console.error('Login error:', error);
            alert('Login failed. Please try again.');
        });
});