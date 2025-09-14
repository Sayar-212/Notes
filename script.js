function accessCourse() {
    window.location.href = 'choice.html';
}

// Profile image placeholder
document.addEventListener('DOMContentLoaded', function() {
    const profileImg = document.getElementById('profile-img');
    
    profileImg.onerror = function() {
        this.style.display = 'none';
        const placeholder = document.createElement('div');
        placeholder.innerHTML = '<span>S</span>';
        placeholder.style.cssText = `
            width: 100%;
            height: 100%;
            background: #3498db;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 3rem;
            font-weight: 600;
            color: white;
        `;
        this.parentNode.appendChild(placeholder);
    };
});