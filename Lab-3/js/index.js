import { renderFoodContainersList, countTotalVolume } from "./dom_utils.js";
const searchButton = document.getElementById("search_button");
const cancelSearchButton = document.getElementById("cancel_search_button");
const searchInput = document.getElementById("search_input");
const sortAscButton = document.getElementById("sort_asc_button");
const sortDescButton = document.getElementById("sort_desc_button");
const countButton = document.getElementById("count_button");
//Sample food containers array
let foodContainer1 = {
 id: 1,
 material: "WOOD",
 country: "CHINA",
 weightInGrams: 300,
 colour: "RED",
 priceInUah: 25,
 volumeInL: 1,
};
let foodContainer2 = {
 id: 2,
 material: "PLASTIC",
 country: "CHINA",
 weightInGrams: 300,
 colour: "RED",
 priceInUah: 25,
 volumeInL: 2,
};
let foodContainer3 = {
 id: 3,
 material: "PLASTIC",
 country: "CHINA",
 weightInGrams: 300,
 colour: "RED",
 priceInUah: 25,
 volumeInL: 3,
};
let foodContainer4 = {
 id: 4,
 material: "METAL",
 country: "CHINA",
 weightInGrams: 300,
 colour: "RED",
 priceInUah: 25,
 volumeInL: 14,
};
let foodContainers = [foodContainer1, foodContainer2, foodContainer3, foodContainer4, foodContainer1, foodContainer2, foodContainer3, foodContainer4, foodContainer1, foodContainer1];
let currentFoodContainers = [...foodContainers];

window.onload = renderFoodContainersList(currentFoodContainers);

searchButton.addEventListener("click", () => {
 event.preventDefault();
 currentFoodContainers = foodContainers.filter((foodContainer) => foodContainer.material.includes(searchInput.value.toUpperCase()));
 renderFoodContainersList(currentFoodContainers);
});

cancelSearchButton.addEventListener("click", () => {
 event.preventDefault();
 currentFoodContainers = [...foodContainers];
 searchInput.value = "";
 renderFoodContainersList(currentFoodContainers);
});

sortAscButton.addEventListener("click", () => {
 currentFoodContainers = currentFoodContainers.sort((a, b) => {
   return b.volumeInL - a.volumeInL;
 });
 renderFoodContainersList(currentFoodContainers);
});

sortDescButton.addEventListener("click", () => {
 currentFoodContainers = currentFoodContainers.sort(function (a, b) {
   return a.volumeInL - b.volumeInL;
 });
 renderFoodContainersList(currentFoodContainers);
});

countButton.addEventListener("click", () => {
 countTotalVolume(currentFoodContainers);
});
