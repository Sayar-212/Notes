function openCourse(courseId) {
    switch(courseId) {
        case 'trigonometry':
            window.location.href = 'trigo.html';
            break;
        case 'algebra':
            alert('Opening Linear Algebra course...');
            // window.location.href = 'algebra.html';
            break;
        case 'calculus':
            alert('Opening Differential Calculus course...');
            // window.location.href = 'calculus.html';
            break;
        case 'geometry':
            alert('Opening Coordinate Geometry course...');
            // window.location.href = 'geometry.html';
            break;
        case 'statistics':
            alert('Opening Statistics & Probability course...');
            // window.location.href = 'statistics.html';
            break;
        case 'physics':
            alert('Opening Mechanics course...');
            // window.location.href = 'physics.html';
            break;
        default:
            alert('Course not found');
    }
}