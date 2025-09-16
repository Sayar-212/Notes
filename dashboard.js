function openCourse(courseId) {
    switch(courseId) {
        case 'trigonometry-study':
            window.open('https://online.flippingbook.com/view/141264682/', '_blank');
            break;
        case 'trigonometry-exercise':
            window.open('https://www.dropbox.com/scl/fi/26by4m7nhgsfna1pffi63/Trigonometric_Ratios_Exercise_1.pdf?rlkey=9xs7mfha46fmc7lh9vwxdto1v&st=6zza5eoe&raw=1', '_blank');
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