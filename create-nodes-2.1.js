const massiv = ["html",'css','js']
const ul = document.createElement('ul')
for(let i = 0; i < massiv.length; i++){
    const li = document.createElement('li')
    li.textContent = massiv[i]
    ul.append(li)
}
document.body.append(ul)
