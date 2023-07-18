const div = document.createElement('div')
const div1 = document.createElement("div")
const div2 = document.createElement('div')
div.classList.add('red')
div1.classList.add('green')
div2.classList.add('blue')
div2.textContent = "Вложен"

div1.append(div2)
div.append(div1)
console.log(div);