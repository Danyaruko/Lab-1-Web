import { renderFoodContainersList, countTotalVolume, openModalWindow, 
  closeModalWindow } from "./dom_utils.js";
import { validateCreateFoodContainerForm, validateEditFoodContainerForm, getCreateInputValues,
         getEditInputValues, setEditInputValues } from "./input_validate.js";
import { getAllFoodContainers, postFoodContainer, updateFoodContainer, deleteFoodContainer } from "./api.js";


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
const editFoodContainerWindowHeaderText = document.getElementById("edit_food-container_window_header_text");
const editFoodContainerForm = document.getElementById("edit_food-container_form");
const confirmFoodContainerEditingButton = document.getElementById("confirm_food-container_editing_button");
const closeEditFoodContainerWindowButton = document.getElementById("close_edit_food-container_window_button");

const deleteFoodContainerWindow = document.getElementById("delete_food-container_window");
const deleteFoodContainerWindowHeaderText = document.getElementById("delete_food-container_window_header_text");
const confirmFoodContainerDeletionButton = document.getElementById("confirm_food-container_deletion_button");
const cancelFoodContainerDeletionButton = document.getElementById("cancel_food-container_deletion_button");
const closeDeleteFoodContainerWindowButton = document.getElementById("close_delete_food-container_window_button");

let foodContainers = [];


 
const prepareDeleteFoodContainerWindow = async (id) => {
  deleteFoodContainerWindowHeaderText.textContent = `Delete food container №${id}?`;
  openModalWindow(deleteFoodContainerWindow);
 
 confirmFoodContainerDeletionButton.addEventListener(
    "click",
    async () => {
      await deleteFoodContainer(id);
      closeModalWindow(deleteFoodContainerWindow);
      refetchAllFoodContainers();
    },
    { once: true }
  );
 };
 
const prepareUpdateFoodContainerWindow = (id) => {
  editFoodContainerWindowHeaderText.textContent = `Edit food container №${id}`;
  openModalWindow(editFoodContainerWindow);
  setEditInputValues(foodContainers.find((foodContainer) => foodContainer.id == id));
 
  confirmFoodContainerEditingButton.addEventListener(
    "click",
    async (event) => {
      event.preventDefault();
      if (validateEditFoodContainerForm()) {
        await updateFoodContainer(id, getEditInputValues());
        closeModalWindow(editFoodContainerWindow);
        editFoodContainerForm.reset();
        refetchAllFoodContainers();
      }
    },
    { once: true }
  );
 };
 
showAllFoodContainersButton.addEventListener("click", () => {
 refetchAllFoodContainers();
});

createFoodContainerButton.addEventListener("click", () => {
 openModalWindow(createFoodContainerWindow);
 console.log("Sasi")
});

confirmFoodContainerCreationButton.addEventListener("click", async (event) => {
 event.preventDefault();
 if (validateCreateFoodContainerForm()) {
   await postFoodContainer(getCreateInputValues());
   closeModalWindow(createFoodContainerWindow);
   createFoodContainerForm.reset();
   refetchAllFoodContainers();
 }
});

closeCreateFoodContainerWindowButton.addEventListener("click", () => {
 closeModalWindow(createFoodContainerWindow);
});



closeEditFoodContainerWindowButton.addEventListener("click", () => {
 closeModalWindow(editFoodContainerWindow);
});

cancelFoodContainerDeletionButton.addEventListener("click", () => {
 closeModalWindow(deleteFoodContainerWindow);
});

closeDeleteFoodContainerWindowButton.addEventListener("click", () => {
 closeModalWindow(deleteFoodContainerWindow);
});


searchButton.addEventListener("click", async (event) => {
 event.preventDefault();
 foodContainers = await getAllFoodContainers();
 foodContainers = foodContainers.filter((foodContainer) => foodContainer.material.includes(searchInput.value.toUpperCase()));
 renderFoodContainersList(foodContainers, prepareDeleteFoodContainerWindow, prepareUpdateFoodContainerWindow);
});

cancelSearchButton.addEventListener("click", (event) => {
 event.preventDefault();
 searchInput.value = "";
refetchAllFoodContainers();
});

sortAscButton.addEventListener("click", () => {
 foodContainers = foodContainers.sort((a, b) => {
   return b.volumeInL - a.volumeInL;
 });
 renderFoodContainersList(foodContainers, prepareDeleteFoodContainerWindow, prepareUpdateFoodContainerWindow);
});

sortDescButton.addEventListener("click", () => {
 foodContainers = foodContainers.sort((function (a, b) {
   return a.volumeInL - b.volumeInL;
 }));
 renderFoodContainersList(foodContainers, prepareDeleteFoodContainerWindow, prepareUpdateFoodContainerWindow);
});

countButton.addEventListener("click", () => {
 countTotalVolume(foodContainers);
});

const refetchAllFoodContainers = async () => {
  foodContainers = await getAllFoodContainers();
  renderFoodContainersList(foodContainers, prepareDeleteFoodContainerWindow, prepareUpdateFoodContainerWindow);
 }; 

refetchAllFoodContainers();