// Allowing an action to happen once you click the button
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
    const url = 'https://themealdb.com/api/json/v1/1/random.php'


    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data.meals[0])

        // contents of the meal displayed through the DOM

        

            document.getElementById('category').innerHTML = data.meals[0].strCategory
            document.querySelector('h3').innerText = data.meals[0].strMeal
            document.querySelector('h4').innerText = data.meals[0].strInstructions

        // getting the image of the meal
            document.querySelector('img').src = data.meals[0].strMealThumb
        })
        .catch(err => {
            console.log(`error ${err}`)
        })
}

// function getFetch(){
//     const choice = document.querySelector('input').value
//     const url = `https://themealdb.com/api/json/v1/1/search.php?s=Arrabiata`


// fetch(url)
//     .then(res => res.json()) //parse response as JSON
//     .then(data => {
//         console.log(data)

//         // document.querySelector('h2').innerText = data.meals[0].strCategory
//         // document.querySelector('h3').innerText = data.meals[0].strMeal
//         // document.querySelector('h4').innerText = data.meals[0].strInstructions

//     })
//     .catch(err => {
//         console.log(`error ${err}`)
//     })
// }

// fetch("http://themealdb.com/api/json/v1/1/search.php?s=Arrabiata")
//     .then(res => res.json()) //parse response as JSON
//     .then(data => {
//         console.log(data.categories)
//         // document.querySelector('img').src = data.message
//         document.querySelector('h2').innerHTML = data.categories.strCategory

//         // hopefully an image
//         document.querySelector('img').src = data.categories.strCategoryThumb

//         // category description
//         document.querySelector('h3').innerHTML = data.categories.strCategoryDescription
//     })
//     .catch(err => {
//         console.log(`error ${err}`)
//     })
// }