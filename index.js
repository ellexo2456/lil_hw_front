const content = document.createElement('span')
content.className = "modal"
content.innerText = "A lot of interesting text"

const root = document.getElementById("root")
root.appendChild(content)
const modal = document.getElementsByClassName("modal")[0]

root.addEventListener("click", e => {
    root.removeChild(modal)
})

modal.addEventListener("click", e => {
    e.stopPropagation()
})
