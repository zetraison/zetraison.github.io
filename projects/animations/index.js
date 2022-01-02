const animations = [
    {
        "name": "Firework",
        "description": "Firework animation",
        "url": "./fireworks"
    }, 
    {
        "name": "Rain",
        "description": "Rain animation",
        "url": "./rain"
    }
]

const createTitle = (title) => {
    let el = document.createElement("div")

    let text = document.createElement("p")
    text.className = "m-1 text-bold"
    text.innerText = title

    el.appendChild(text)

    return el
}

const createList = (items) =>  {
    let el = document.createElement("ul")
    el.className = "flex-wrap"

    const createLink = (name, url, classes) => {
        let el = document.createElement("a")
        el.href = url
        el.className = classes
        el.innerText = name
        return el
    }

    const createDescription = (description) => {
        let el = document.createElement("p")
        el.innerText = description
        return el
    }

    const createItem = (name, description, url) => {
        let item = document.createElement("li")
        item.className = "box width-full p-1 m-1"
    
        let itemLink = createLink(name, url, "text-bold width-full")
        let itemDescription = createDescription(description)

        item.appendChild(itemLink)
        item.appendChild(itemDescription)

        return item
    }

    items.forEach(item => 
        el.appendChild(
            createItem(item["name"], item["description"], item["url"])
        )
    )

    return el
}

document.body
    .appendChild(createTitle("Animations"))
    .appendChild(createList(animations))