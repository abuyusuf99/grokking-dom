const ul = document.createElement('ul')
const li = document.createElement('li')
ul.classList = ('list')
li.textContent =("Привет мир")

ul.prepend(li)
console.log(ul.textContent);
document.body.append(ul)