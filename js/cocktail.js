// user can enter a cocktail and get the name
// instructions and photo of that cocktail and place them in the DOM

fetch("https://thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
    .then(res => res.json())
    .then(data => {
        // console.log(data.drinks[0].strDrink)
        // console.log(data.drinks[0].strDrinkThumb)
        // console.log(data.drinks[0].strInstructions)


        document.querySelector('h2').innerText = data.drinks[0].strDrink
        document.querySelector('img').src = data.drinks[0].strDrinkThumb
        document.querySelector('h3').innerText = data.drinks[0].strInstructions
        
        // console.log(data.drinks[0].strDrinkThumb)
        // console.log(data.drinks[0].strDrink)
        // document.querySelector('img').src = data.drinks[0].strDrinkThumb
        
    })

    .catch(err => {
        console.log(`error ${err}`)
    })

// https://