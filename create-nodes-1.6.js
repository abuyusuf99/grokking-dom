const div = document.createElement('div')
const ul = document.createElement('ul')
const li = document.createElement('li')
const lii = document.createElement('li')
const item = document.createElement('a')
const item1 = document.createElement('a')


item.textContent = "Наш Инстаграм"
item.href = "https://instagram.com/intocode"

item1.textContent = "Наш сайт"
item1.href = 'https://intocode.ru'

li.append(item)
lii.append(item1)
lii.append(li)
ul.append(lii)
div.append(ul)
document.body.append(div)
console.log(div);
