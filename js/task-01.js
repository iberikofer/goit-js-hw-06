const listOfCategories = document.getElementById("categories");
const items = document.querySelectorAll(".item");
const numberOfItems = items.length;
console.log(`Number of categories: ${numberOfItems}`);

let markup = "";
items.forEach((item) => {
  const itemHeadingText = item.querySelector("h2").textContent;
  const numberOfLi = item.querySelectorAll("li").length;
  markup += `
		Category: ${itemHeadingText}
		Elements: ${numberOfLi}
	`;
});
console.log(markup);
