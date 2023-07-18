

function render (text) {
        let ul = document.createElement('ul')
    
    
    
        for (let i = 0; i < text.length; i++) {
                let li = document.createElement('li')
                let link = document.createElement('a')

        link.textContent = text[i].name
        link.href = text[i].url
        li.append(link)
        ul.append(li)
   
    }
    console.log(ul);
    return document.body.prepend(ul)

}

render ([
    {
      name: 'Google',
      url: 'https://google.com'
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com'
    },
    {
      name: 'intocode',
      url: 'https://intocode.ru'
    },
  ])