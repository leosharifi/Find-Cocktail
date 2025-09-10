document.querySelector('button').addEventListener('click', getFetch)

function getFetch(e) {
    e.preventDefault();

    document.getElementById('cocktailDisplay').style.padding = '1em'
    const input = document.querySelector('input').value;
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${input}`)
    .then(res => {
        return res.json();
    })
    .then(data => {

        if (input === ""){
            document.getElementById('cocktailDisplay').innerHTML = '<h3>Please Enter a Cocktail Name!</h3>';
            return;
        }
        else if(data.drinks === null) {
            document.getElementById('cocktailDisplay').innerHTML = '<h3>Try Another Search!</h3>';
            return;
        }
        document.getElementById('cocktailDisplay').innerHTML = `
            <h3>${data.drinks[0].strDrink}</h3>
            <p>${data.drinks[0].strInstructions}</p>
            <img src="${data.drinks[0].strDrinkThumb}" alt="">
        `;
    })
    .catch(err => {
        console.log(err)
    })
}