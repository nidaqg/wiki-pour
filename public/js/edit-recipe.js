let editRecipe = document.querySelector("#editRecipe");
let deleteRecipe = document.querySelector("#deleteRecipe");

editRecipe.addEventListener("click", async function (event) {
  event.preventDefault();

  const cocktail_name = document.querySelector("#recipeName").value.trim();
  const instructions = document.querySelector("#recipeContent").value.trim();
  const id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];

  const response = await fetch(`/api/cocktail/edit/${id}`, {
    method: "PUT",
    body: JSON.stringify({ cocktail_name, instructions }),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/profile");
  } else {
    alert("Failed to update");
  }
});

deleteRecipe.addEventListener("click", async function (event) {
  event.preventDefault();

  const id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];

  const response = await fetch(`/api/cocktail/edit/${id}`, {
    method: "DELETE",
    body: JSON.stringify({ id: id }),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/profile");
  } else {
    alert("Failed to delete recipe");
  }
});
