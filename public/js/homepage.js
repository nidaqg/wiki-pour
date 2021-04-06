const getBrand = async () => {

    const brandEL = document.querySelector('#brand-name');

    const brandData = await fetch('/api/brand', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    });
    if (brandData) {
        const brands = await brandData.json() // parse JSON
        //console.log(brands);
        brands.forEach(brand => {
            //console.log(brand)
            const li = document.createElement('li');
            li.classList.add('dropdown-item');
            li.innerHTML = brand.brand_name;
            li.setAttribute('id', brand.id);
            brandEL.appendChild(li);
        });
    } else {
        alert(response.statusText);
    }
}

const getCategoryType = async () => {

    const categoryTypeEL = document.querySelector('#category-type');

    const categoryTypeData = await fetch('/api/categorytype', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    });
    if (categoryTypeData) {
        const categoryTypes = await categoryTypeData.json() // parse JSON
        //console.log(brands);
        categoryTypes.forEach(ct => {
            //console.log(ct)
            const li = document.createElement('li');
            li.classList.add('dropdown-item');
            li.innerHTML = ct.categoryType_name;
            li.setAttribute('id', ct.id);
            categoryTypeEL.appendChild(li);
        });
    } else {
        alert(response.statusText);
    }
}

const getIngredient = async () => {

    const ingredientEL = document.querySelector('#ingredients');

    const ingredientData = await fetch('/api/ingredient', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    });
    if (ingredientData) {
        const ingredients = await ingredientData.json() // parse JSON
        //console.log(brands);
        ingredients.forEach(ing => {
            //console.log(ct)
            const li = document.createElement('li');
            li.classList.add('dropdown-item');
            li.innerHTML = ing.ingredient_name;
            li.setAttribute('id', ing.id);
            ingredientEL.appendChild(li);
        });
    } else {
        alert(response.statusText);
    }
}

const searchByBrand = async (event) => {
    event.preventDefault();
    const id = event.target.getAttribute("id")
    //console.log("click worked"),
    // console.log(id);
    document.location.replace('/searchByBrand/' + id);
}

const searchByCategoryType = async (event) => {
    event.preventDefault();
    const id = event.target.getAttribute("id")
    //console.log("click worked"),
    //console.log(id);
    document.location.replace('/searchByCategoryType/' + id);
}

const searchByIngredients = async (event) => {
    event.preventDefault();
    const id = event.target.getAttribute("id")
    //console.log("click worked"),
    //console.log(id);
    document.location.replace('/searchByIngredient/' + id);
}

const getRandom = async (event) => {
    event.preventDefault();
    const cocktailData = await fetch(`/api/cocktail`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    });
    if (cocktailData) {
        const cocktails = await cocktailData.json()
        console.log(cocktails);

        let cocktailIds = [];
        cocktails.forEach(cocktail => {
            cocktailIds.push(cocktail.id)

        });
    

    let randomId = cocktailIds[Math.floor(Math.random()*cocktailIds.length)];

     document.location.replace(`/cocktail/${randomId}`);

    }

    }


getBrand();
getCategoryType();
getIngredient();

document
    .querySelector('#brand-name')
    .addEventListener('click', searchByBrand);

document
    .querySelector('#category-type')
    .addEventListener('click', searchByCategoryType);

document
    .querySelector('#ingredients')
    .addEventListener('click', searchByIngredients);


document.querySelector('#randomizeIt').addEventListener('click', getRandom);