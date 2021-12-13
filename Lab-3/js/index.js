import { renderFoodContainersList, countTotalVolume, openModalWindow, 
  closeModalWindow, renderButtons  } from "./dom_utils.js";
import { validateCreateFoodContainerForm, validateEditFoodContainerForm } from "./input_validate.js";


const showAllFoodContainersButton = document.getElementById("show_all_food-containers_button");

const createFoodContainerButton = document.getElementById("create_food-container_button");
const createFoodContainerWindow = document.getElementById("create_food-container_window");
const createFoodContainerForm = document.getElementById("create_food-container_form");
const confirmFoodContainerCreationButton = document.getElementById("confirm_food-container_creation_button");
const closeCreateFoodContainerWindowButton = document.getElementById("close_create_food-container_window_button");

const searchButton = document.getElementById("search_button");
const cancelSearchButton = document.getElementById("cancel_search_button");
const searchInput = document.getElementById("search_input");

const sortAscButton = document.getElementById("sort_asc_button");
const sortDescButton = document.getElementById("sort_desc_button");
const countButton = document.getElementById("count_button");

const editFoodContainerWindow = document.getElementById("edit_food-container_window");
const editFoodContainerForm = document.getElementById("edit_food-container_form");
const confirmFoodContainerEditingButton = document.getElementById("confirm_food-container_editing_button");
const closeEditFoodContainerWindowButton = document.getElementById("close_edit_food-container_window_button");

const deleteFoodContainerWindow = document.getElementById("delete_food-container_window");
const confirmFoodContainerDeletionButton = document.getElementById("confirm_food-container_deletion_button");
const cancelFoodContainerDeletionButton = document.getElementById("cancel_food-container_deletion_button");
const closeDeleteFoodContainerWindowButton = document.getElementById("close_delete_food-container_window_button");

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
renderButtons();

showAllFoodContainersButton.addEventListener("click", () => {
 currentFoodContainers = [...foodContainers];
 renderFoodContainersList(currentFoodContainers);
 renderButtons();
});

createFoodContainerButton.addEventListener("click", () => {
 openModalWindow(createFoodContainerWindow);
 console.log("Sasi")
});

confirmFoodContainerCreationButton.addEventListener("click", (event) => {
 event.preventDefault();
 if (validateCreateFoodContainerForm()) {
   closeModalWindow(createFoodContainerWindow);
   createFoodContainerForm.reset();
 }
});

closeCreateFoodContainerWindowButton.addEventListener("click", () => {
 closeModalWindow(createFoodContainerWindow);
});

confirmFoodContainerEditingButton.addEventListener("click", (event) => {
 event.preventDefault();
 if (validateEditFoodContainerForm()) {
   closeModalWindow(editFoodContainerWindow);
   editFoodContainerForm.reset();
 }
});

closeEditFoodContainerWindowButton.addEventListener("click", () => {
 closeModalWindow(editFoodContainerWindow);
});

cancelFoodContainerDeletionButton.addEventListener("click", () => {
 closeModalWindow(deleteFoodContainerWindow);
});

confirmFoodContainerDeletionButton.addEventListener("click", () => {
 closeModalWindow(deleteFoodContainerWindow);
});

closeDeleteFoodContainerWindowButton.addEventListener("click", () => {
 closeModalWindow(deleteFoodContainerWindow);
});


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
 currentFoodContainers = currentFoodContainers.sort((function (a, b) {
   return a.volumeInL - b.volumeInL;
 }));
 renderFoodContainersList(currentFoodContainers);
});

countButton.addEventListener("click", () => {
 countTotalVolume(currentFoodContainers);
});
