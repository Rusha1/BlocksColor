const people =[
    {name: "Artem", budget: 3500},
    {name: "Boris", budget: 1400},
    {name: "Alexey", budget: 500}
]

const index = people.findIndex(function(person){
    console.log(person)
})

const color = ["#ff0000", "#0000ff", "#008000"]

function blockColor () {

    const randomColor = Math.floor(Math.random()*color.length)
    const randomColorText = color[randomColor]
    console.log(randomColorText)
}

blockColor()
let el = document.getElementsByClassName("test")
example = el.textContent = "Это просто текст"
console.log(example)
document.getElementsByClassName("test").innerHTML = "Пример"


document.getElementById("test").innerHTML += "Пример"

