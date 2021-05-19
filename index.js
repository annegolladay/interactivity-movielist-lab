//console.log('Hello World!')




function addMovie(event) {
    event.preventDefault()
    let inputField = document.querySelector('input')
    let movie = document.createElement('li')
    let movieTitle = document.createElement('span')

    movieTitle.textContent = inputField.value
    movieTitle.addEventListener('click', crossOffMovie)
    movie.appendChild(movieTitle)

    //Delete Button
    let deleteBtn = document.createElement('button')
    deleteBtn.textContent = 'X'
    deleteBtn.addEventListener('click', deleteMovie)
    movie.appendChild(deleteBtn)


    let movieList = document.querySelector('ul')
    movieList.appendChild(movie)

    inputField.value = ''

    console.log(addMovie)
}

let submitBtn = document.querySelector('form')
submitBtn.addEventListener('submit', addMovie)

//Delete Function

let message = document.querySelector('#message')

function deleteMovie(event) {
    event.target.parentNode.remove()
    message.textContent = 'Movie deleted!'
}

//Step 4
//CrossOffMovie function

function crossOffMovie(event) {
    event.target.classList.toggle('checked')
    if(event.target.classList.contains('checked')) {
        message.textContent = 'Movie watched!'
    } else {
        message.textContent = 'Movie added back!'
    }
}

