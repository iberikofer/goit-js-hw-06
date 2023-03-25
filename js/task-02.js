const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.getElementById("ingredients");
let markup = "";

ingredients.forEach((ingredient) => {
  markup += `<li class="item">${ingredient}</li>`;
});

ingredientsList.innerHTML = markup;
console.log(ingredientsList);
