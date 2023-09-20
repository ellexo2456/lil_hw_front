const content = document.createElement('span')
content.className = "modal"
content.innerText = "I'm blue\n" +
    "Da ba dee da ba di\n" +
    "Da ba dee da ba di\n" +
    "Da ba dee da ba di\n" +
    "Da ba dee da ba di\n" +
    "Da ba dee da ba di\n" +
    "Da ba dee da ba di\n" +
    "Da ba dee da ba di\n"

const root = document.getElementById("root")
root.appendChild(content)

root.addEventListener("click", (e) => {
    const modal = document.getElementsByClassName("modal")[0]
    if (e.target !== modal) {
        document.getElementById("root").removeChild(modal)
    }
})
