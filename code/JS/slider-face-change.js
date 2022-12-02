document.addEventListener("DOMContentLoaded", function() {

    const range = document.querySelector("#workLife");
    const faces = document.querySelectorAll(".form__question--2__faces > div");

    const reset = document.querySelector(".button--reset");

    range.addEventListener('change', (event) => {
        const value = event.target.value;

        faces.forEach((face) => {
            if(face.classList.contains('active')){
                face.classList.remove('active');
            }
        });

        faces[value-1].classList.add('active');
    })

    reset.addEventListener('click', () => {
        faces.forEach((face) => {
            if(face.classList.contains('active')){
                face.classList.remove('active');
            }
        });
        faces[2].classList.add('active');
    })
})
