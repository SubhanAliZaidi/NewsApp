import { themechange } from "../App"

document.addEventListener('keydown', e => {
    if (e.key.toLowerCase() === 'b' && e.ctrlKey){
        themechange()
    }
})

// let cirlce = document.getElementById('circle')
// document.addEventListener('mousemove',e => {
//     // console.log(e)
//     const mouseX = e.clientX - 50;
//     const mouseY = e.clientY - 50;
//     cirlce.style.left= `${mouseX}px`
//     cirlce.style.top= `${mouseY}px`
// })