const projects = [
    {
        "name": "tgchart",
        "description": "March Telegram Contest 2019",
        "github": "https://github.com/zetraison/tgchart",
        "sampleUrl": "./projects/tgchart"
    }, 
    {
        "name": "animations",
        "description": "A javascript canvas animations samples",
        "github": "https://github.com/zetraison/animations",
        "sampleUrl": "./projects/animations"
    },
    {
        "name": "weather-service",
        "description": "Weather web service implemented by React.js using openweathermap.org api",
        "github": "https://github.com/zetraison/es6-weather-service",
        "sampleUrl": "./projects/weather-service"
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

    const createItem = (name, description, githubUrl, sampleUrl) => {
        let item = document.createElement("li")
        item.className = "box width-full p-1 m-1"
    
        let itemDescription = createDescription(description)
        let itemSampleLink = createLink(name, sampleUrl, "text-bold width-full")
        let itemGithubLink = createLink("[source link]", githubUrl, "text-bold width-full")

        item.appendChild(itemSampleLink)
        item.appendChild(itemDescription)
        item.appendChild(itemGithubLink)

        return item
    }

    items.forEach(item => 
        el.appendChild(
            createItem(item["name"], item["description"], item["github"], item["sampleUrl"])
        )
    )

    return el
}

document.body
    .appendChild(createTitle("Github Projects"))
    .appendChild(createList(projects))