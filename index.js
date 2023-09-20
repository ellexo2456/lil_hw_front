const content = document.createElement('span')
content.className = "modal"
content.innerText = "I'm good, good\n" +
    "I'm good\n" +
    "Don't you know I'm good? Yeah, I'm feelin' alright"

const root = document.getElementById("root")
root.appendChild(content)
const modal = document.getElementsByClassName("modal")[0]

root.addEventListener("click", e => {
    root.removeChild(modal)
})

modal.addEventListener("click", e => {
    e.stopPropagation()
})
