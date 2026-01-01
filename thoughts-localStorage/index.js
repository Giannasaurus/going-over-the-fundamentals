const postButton = document.getElementById("postButton")
const input = document.getElementById("thoughtInput")
const wall = document.getElementById("thoughtsWall")

let thoughts = localStorage.getItem("local_thoughts") ? JSON.parse(localStorage.getItem("local_thoughts")) : []

function renderThoughts() {
    console.log("re-rendered")
    
    wall.innerHTML = ""
    
    thoughts.forEach((thought) => {
        const p = document.createElement("p")
        p.textContent = thought
        wall.appendChild(p)
    })
    
    const clearButton = document.getElementById("clearButton")
    clearButton.style.display = thoughts.length > 0 ? "inline-block" : "none"
    
    console.log(thoughts)
}

function addToWall() {
    const value = input.value.trim()
    if (value === "") return
    
    thoughts.push(value)
    localStorage.setItem("local_thoughts", JSON.stringify(thoughts))
    
    input.value = ""
    renderThoughts()
}

function clearAll() {
    console.clear()
    thoughts = []
    localStorage.removeItem("local_thoughts")
    renderThoughts()
}

postButton.addEventListener("click", () => addToWall())

document.addEventListener("keydown", (e) => {
    if (e.key === 'Enter') addToWall()
})

document.getElementById("clearButton").addEventListener("click", () => clearAll())

renderThoughts()