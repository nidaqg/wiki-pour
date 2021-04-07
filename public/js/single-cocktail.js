const average = require("average");
let submitBtn = document.querySelector(".btn");
// const session = require('express-session');

// event listener for when submit button is clicked
submitBtn.addEventListener("click", async function (event) {
  event.preventDefault();
  // gets value of user input star rating
  const rating_id = document.querySelector('input[name="rating"]:checked').value;

  // get id of current cocktail
  const cocktail_id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];

  // api call for ratings
  const cocktail = await fetch(`/api/rating/rate`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });

  const cocktailRatings = cocktail.json();

  let cr = await cocktailRatings;

  // filters through ratings for those associated with current cocktails
  const ratings = cr.filter((rating) => {
    return rating.cocktail_id == cocktail_id;
  });

  // returns just the rating_id
  let justRatings = ratings.map((rating) => {
    return rating.rating_id;
  });

  let rating_average;

  if (justRatings.length > 0) {
    //convert user rating to integer
    let userRatingInt = parseInt(rating_id);

    // concat array of ratings with user rating
    let newRatingArr = justRatings.concat(userRatingInt);

    // averages the ratings to nearest tenth
    rating_average = average(newRatingArr).toFixed(1);
  } else {
    rating_average = rating_id;
  }

  let responsePost = await fetch("/api/rating", {
    method: "POST",
    body: JSON.stringify({ cocktail_id, rating_id }),
    headers: { "Content-Type": "application/json" },
  });

  if (responsePost.ok) {
    let responsePut = await fetch(`/api/cocktail/edit/rating/${cocktail_id}`, {
      method: "PUT",
      body: JSON.stringify({ rating_average: rating_average }),
      headers: { "Content-Type": "application/json" },
    });
    if (responsePut.ok) {
      document.location.replace(`/cocktail/${cocktail_id}`);
    } else {
      alert("Failed to update");
    }
  }
});
