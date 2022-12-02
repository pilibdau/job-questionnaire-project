document.addEventListener("DOMContentLoaded", function() {

    const range = document.querySelector("#workLife");
    const faces = document.querySelectorAll(".form__question--2__faces > div");

    range.addEventListener('change', (event) => {
        const value = event.target.value;

        faces.forEach((face) => {
            if(face.classList.contains('active')){
                face.classList.remove('active');
            }
        });

        faces[value-1].classList.add('active');
    })
})
