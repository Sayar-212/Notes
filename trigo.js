// Chapter-based content structure
const chapters = [
    {
        title: "Basic Trigonometric Ratios",
        studyMaterial: 'https://online.flippingbook.com/view/141264682/',
        exercises: [
            {
                title: "Basic Problems",
                exerciseLink: 'https://www.dropbox.com/scl/fi/26by4m7nhgsfna1pffi63/Trigonometric_Ratios_Exercise_1.pdf?rlkey=9xs7mfha46fmc7lh9vwxdto1v&st=6zza5eoe&raw=1',
                answerLink: 'https://uce56a479eac1e7a877fed409940.dl.dropboxusercontent.com/cd/0/inline2/CxuP_tB-s0mqKNZ4kxK-wY-9L6H65QNv3rQG6PAFsu1todBArap061XBpPGWuH7_2E-Lp6UC7FOCNwEmUNyd8NrFu9lf4H6WOw4mXKweYQPFwl3qt6VhxKqOXVowuh_pxoZ3m9P0byFdmexSqbhccMKGXNKDFnyv0KybxDdELZNh2CqRrI1d0PIJlF7QhvbCmkogw0JNyDMzmD5R_0nleJHlz2GWWpyrHtGrow-AV7NIEg3oQHpKmfQWzprfbe4aEXpG2ORnZs-Zo2nTlJ0Yg-AzxUKtA2p93hSSExcShSqO3iD1NnJzBOpydiQXasuSTUI5JLrvMaybqNt_XoDqgGVqNKm1-fe6Qe-wYM4ekko7CJFHYopSGt6K3ikWd2wYhio/file?raw=1'
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