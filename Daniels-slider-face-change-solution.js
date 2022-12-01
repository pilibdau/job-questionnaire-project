const rangeElement = document.querySelector("#workLife");
const faces = document.querySelectorAll(".form__question--2__faces > div");

rangeElement.addEventListener('change', (event) => {
    const value = event.target.value;
    // Remove active class from previously active face
    faces.forEach(face => {
        if (face.classList.contains('active')) {
            face.classList.remove('active')
        }
    });

    // Add active class to newly active face
    faces[value - 1].classList.add('active');
});


//======== this goes in face.css =============//
// .form__question--2__face.active .face {
//     fill: var(--pink);
// }
