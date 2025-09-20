// Chapter-based content structure
const chapters = [
    {
        title: "Basic Trigonometric Ratios",
        studyMaterial: 'https://online.flippingbook.com/view/141264682/',
        exercises: [
            {
                title: "Basic Problems",
                exerciseLink: 'https://www.dropbox.com/scl/fi/26by4m7nhgsfna1pffi63/Trigonometric_Ratios_Exercise_1.pdf?rlkey=9xs7mfha46fmc7lh9vwxdto1v&st=6zza5eoe&raw=1',
                answerLink: 'https://www.dropbox.com/scl/fi/b34szpuz5paqlrckfh2b5/Exercise_1_solution.pdf?rlkey=icfde5f05ocfrtretcquqxbj9&st=tizhu2s0&raw=1'
            }
        ]
    }
];

function openStudyMaterial(chapterIndex) {
    const link = chapters[chapterIndex].studyMaterial;
    if (link) {
        window.open(link, '_blank');
    } else {
        alert('Study material will be available soon!');
    }
}

function openExercise(chapterIndex, exerciseIndex) {
    const link = chapters[chapterIndex].exercises[exerciseIndex].exerciseLink;
    if (link) {
        window.open(link, '_blank');
    } else {
        alert('Exercise will be available soon!');
    }
}

function openAnswer(chapterIndex, exerciseIndex) {
    const link = chapters[chapterIndex].exercises[exerciseIndex].answerLink;
    if (link && link.trim() !== '') {
        window.open(link, '_blank');
    } else {
        alert('Answer will be available soon!');
    }
}

function goBack() {
    window.location.href = 'dashboard.html';
}
