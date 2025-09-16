function openCourse(courseId) {
    switch(courseId) {
        case 'trigonometry-study':
            window.open('https://online.flippingbook.com/view/141264682/', '_blank');
            break;
        case 'trigonometry-exercise':
            window.open('https://ucd4e520245339c50849a1876aa7.dl.dropboxusercontent.com/cd/0/inline2/Cxfa8jtZFvbUk8niwNRk6uv27wJjbcOk-s-ptLWYFmR-2eeC8-eV36K3qdfxwnSF4ZmEnBuDkGiZwuaZG1uxbFjNs7xZf0drU98LcT_CBUy6ix7ZYDeLHdhJXJQcqHGv346w16JkmxBf0IrHg-vRriG5iISAAy4eO24J0oT2ijZNX5SDhSl-1rAIfdK1wOekNF7edvyqApkBA0TxjusTxEajHrE09_i0PwgxXhM9ZEB8QLlrhGcfVN7fj3pI_SSTwp_1PQxUreJMDkI00tCvOjfNHVwt61r6tCpQ9jmkRjekfoKcHyk65TcOPMSqjyTSCIZ1ErrlikvSk4IFPZi-Qram8KwfZHhTPHxMeALoMZTcPRVIuoBn9i15ELNntRabSWM/file', '_blank');
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