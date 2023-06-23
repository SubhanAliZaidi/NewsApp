// Naziya = 'naziya'
import { themechange } from "../App"



document.addEventListener('Blur' , (e) => {
    document.title = 'Come Back :('
})

document.addEventListener('Focus' , (e) => {
    document.title = 'Nazloop'
})

document.addEventListener('keydown', e => {
    if (e.key.toLowerCase() === 'b' && e.ctrlKey) {
        themechange()
    }
})

let circle = document.getElementById("circle");
document.addEventListener("mousemove", (e) => {
    const { pageX, pageY } = e;
    let swidth = window.innerWidth
    if (pageX === 0 || pageX === swidth - 1) {
        circle.style.display = 'none';
    } else {
        circle.style.display = "block";
        circle.style.left = `${pageX}px`;
        circle.style.top = `${pageY}px`;
    }
});

document.addEventListener("mouseout", (e) => {
    circle.style.display = "none";
});
