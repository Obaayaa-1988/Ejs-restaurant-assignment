const apiUrl = "http://localhost:9080/get-contact"

fetchData(apiUrl)

async function fetchData(url){
    const response = await fetch(apiUrl)
    const data = await response.json()
    console.log(data)
}

const list = document.querySelector(".reviews")


function getItems(comments){
    comments.forEach((items) => {
        const {name, message} = items

        const newList = document.createElement('li')
        newList.classList.add('cards')


        newList.innerHTML = 
        `<ul class="reviews">

        <li>
            <h3>${name}</h3>
            <p>${message}</p>
        </li>
    
    </ul> `

    list.appendChild(newList);

    });
}

