const average = require('average');
let submitBtn = document.querySelector(".btn");
// const session = require('express-session');

// event listener for when submit button is clicked
submitBtn.addEventListener("click", async function (event) {
  event.preventDefault();
  // gets value of user input star rating
  const rating_id = document.querySelector('input[name="rating"]:checked').value;
  console.log(rating_id, "-----rating----");
  
  // get id of current cocktail
  const cocktail_id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];
  console.log(cocktail_id, "----cid----");
  
  // api call for ratings
  const cocktail = await fetch(`/api/rating/rate`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  
  const cocktailRatings = cocktail.json()
  console.log(cocktailRatings);

  let cr = await cocktailRatings
  console.log(cr)

  let rating_average;

  if (cr.length > 0) {

    // console.log(cocktailRatings);
    console.log("if statment ran");
  
  
    // filters through ratings for those associated with current cocktails
    const ratings = cr.filter((rating) => { 
      return rating.cocktail_id == cocktail_id;
    });
  
  
    // returns just the rating_id
    const justRatings = ratings.map((rating) => { 
      return rating.rating_id;
    });
  
  
    console.log(justRatings, "---justratings---");
  
  
    // averages the ratings to nearest tenth
    rating_average = average(justRatings).toFixed(1);
  
    console.log(rating_average, "----ratingavg-----");
    
  } else {
    rating_average = rating_id
  }


  
  
  
  let responsePost = await fetch('/api/rating', {
    method: "POST",
    body: JSON.stringify({ cocktail_id , rating_id }),
    headers: { "Content-Type": "application/json" },
  });
  
  if (responsePost.ok) {
    console.log(rating_average, "--------")
    let responsePut = await fetch(`/api/cocktail/edit/rating/${cocktail_id}`, {
      method: 'PUT',
      body: JSON.stringify({rating_average:rating_average}),
      headers: { 'Content-Type': 'application/json' },
    });
    if (responsePut.ok) {
      console.log("ok")
      // document.location.replace(`/cocktail/${cocktail_id}`);
    } else {
      alert('Failed to update');
    }
  }; 
  

});