
// template
// random meal recipe API
fetch("https://coffee.alexflipnote.dev/2eNmNBzJpgM_coffee.jpg")
    .then(res => res.json()) //parse response as JSON
    .then(data => {
        console.log(data.message)
        document.querySelector('img').src = data.message
    })
    .catch(err => {
        console.log(`error ${err}`)
    })