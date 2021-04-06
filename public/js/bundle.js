(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
module.exports = function average(values) {
    return values.reduce(function (previousValue, currentValue) {
        return previousValue + currentValue
    }) / values.length
};

},{}],2:[function(require,module,exports){
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

  // filters through ratings for those associated with current cocktails
  const ratings = cr.filter((rating) => { 
    return rating.cocktail_id == cocktail_id;
  });


  // returns just the rating_id
  const justRatings = ratings.map((rating) => { 
    return rating.rating_id;
  });

  console.log(justRatings, "---justratings---");

  let rating_average;

  if (justRatings.length > 0) {

    // console.log(cocktailRatings);
    console.log("if statment ran");
  
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
      document.location.replace(`/cocktail/${cocktail_id}`);
    } else {
      alert('Failed to update');
    }
  }; 
  

});
},{"average":1}]},{},[2]);
