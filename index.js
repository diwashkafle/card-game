const aboutButton = document.getElementById("about-btn")
const backButton = document.getElementById("back-btn")

window.addEventListener("load",()=>{
    aboutButton.addEventListener("click", ()=>{
        document.getElementById("main-container").style.display="none";
        document.getElementById("main-container-about").style.display="flex"
    })

    backButton.addEventListener("click", ()=>{
        document.getElementById("main-container").style.display="flex";
        document.getElementById("main-container-about").style.display="none"
    })
})