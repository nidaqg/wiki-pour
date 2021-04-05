const average = require('average');
let submitBtn = document.querySelector(".btn");

// event listener for when submit button is clicked
submitBtn.addEventListener("click", async function (event) {
  event.preventDefault();
  // gets value of user input star rating
  const rating_id = document.querySelector('input[name="rating"]:checked')
    .value;
  console.log(rating_id);
  
  // get id of current cocktail
  const cocktail_id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];
  console.log(cocktail_id);
  
  // api call for ratings
  const cocktail = await fetch(`/api/rating/rate`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });


  const cocktailRatings = cocktail.json()
  console.log(cocktailRatings);


  let cr = await cocktailRatings
  console.log(cr)

  // filters through ratings for those associated with current cocktails
  const ratings = cr.filter((rating) => { 
    return rating.cocktail_id == cocktail_id;
  });
  
  console.log(ratings);

  // returns just the rating_id
  const justRatings = ratings.map((rating) => { 
    return rating.rating_id;
  });


  console.log(justRatings);


  // averages the ratings to nearest tenth
  const averageRating = average(justRatings).toFixed(1);

  console.log(averageRating);

  postAverage(averageRating, cocktail_id)



  const response = await fetch('/api/rating', {
    method: "POST",
    body: JSON.stringify({ cocktail_id , rating_id }),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    // document.location.replace(`/cocktail/${cocktail_id}`);
  } else {
    alert("Failed to update");
  }

});

function postAverage(rating_average, id) {
  console.log(rating_average)
  console.log(id);


  // const response = await fetch(`/api/cocktail/edit/rating_average/${id}`, {
  //   method: 'PUT',
  //   body: JSON.stringify({rating_average}),
  //   headers: { 'Content-Type': 'application/json' },
  // });

  // if (response.ok) {
  //   document.location.replace('/profile');
  // } else {
  //   alert('Failed to update');
  // }


}
