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
        data.drinks.forEach(drink => {
            document.querySelector('#cocktailDisplay').innerHTML += `
            
                <section class="cocktailList">
                    <h3>${drink.strDrink}</h3>
                    <p>${drink.strInstructions}</p>
                    <img src="${drink.strDrinkThumb}" alt="">
                </section>
            
        `;
        })
        
    })
    .catch(err => {
        console.log(err)
    })
}