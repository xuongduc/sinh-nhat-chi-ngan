const fire = document.getElementById("fire")
const song = document.getElementById("song")
const but = document.getElementById("button")
const letter = document.getElementById("letter")
document.getElementById("cake").addEventListener("click", (cliked) => {
    fire.style.visibility = "hidden"
    but.style.visibility = "visible"
    letter.style.visibility = "visible"
    song.muted = false

})

but.addEventListener("click", (cliked) => {
    song.muted = !song.muted
    if (song.muted){
        but.innerHTML = "muted"
    }
    else {
        but.innerHTML = "unmuted"
    }
})