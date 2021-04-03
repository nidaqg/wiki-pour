let submitBtn = document.querySelector(".btn");

submitBtn.addEventListener("click", async function (event) {
  event.preventDefault();
  const rating_id = document.querySelector('input[name="rating"]:checked')
    .value;
  console.log(rating_id);
  

  const cocktail_id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];
  console.log(cocktail_id);



  const response = await fetch('/api/rating', {
    method: "POST",
    body: JSON.stringify({ cocktail_id , rating_id }),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace(`/cocktail/${cocktail_id}`);
  } else {
    alert("Failed to update");
  }

});
