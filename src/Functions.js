export const showBasket = function showBasket() {
    var selectedFoods = JSON.parse(sessionStorage.getItem('selectedFoods')) || {};
    var sum = 0;

    for (let i=0; i < selectedFoods.length ; i++) {
        var price = selectedFoods[i].price
        sum += price;
    }
    var totalSum = document.getElementById('sum');
    totalSum.innerHTML = `${sum} TL`;
}

export const addToBasket = (product) => {
    let selectedFoods = JSON.parse(sessionStorage.getItem('selectedFoods'))

    const basketBody = document.querySelector('.basket-items')
    basketBody.innerHTML += `
        <div class='d-flex justify-content-between'>
            <p className=''>
                ${product.title}
            </p>
            <p>
                ${product.price}
            </p>

        </div>
    `


    if(selectedFoods){
        selectedFoods = [...selectedFoods, product]
        sessionStorage.setItem('selectedFoods', JSON.stringify(selectedFoods))
    }else {
        sessionStorage.setItem('selectedFoods' , JSON.stringify([product]));
    }

}