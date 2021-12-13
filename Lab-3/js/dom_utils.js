const foodContainersContainer = document.getElementById("food-containers_list");
const totalVolumeDisplay = document.getElementById("total_volume");
const editFoodContainerWindow = document.getElementById("edit_food-container_window");
const deleteFoodContainerWindow = document.getElementById("delete_food-container_window");

const getFoodContainerId = (id) => `food-container-${id}`;

const foodContainerTemplate = ({ id, material, country, weightInGrams, colour, priceInUah, volumeInL }) =>
 `
 <div id="${getFoodContainerId(id)}" class="food-container-card">
   <img
     src="https://www.ikea.com/us/en/images/products/ikea-365-food-container-with-lid-square-glass-plastic__0594413_pe675730_s5.jpg"
     class="food-container-card__image"
     width="200px"
     alt="card image"
   />
   <div class="food-container-card__body">
     <h5 class="food-container-card__body__title">Food Container №${id}</h5>
     <p class="food-container-card__body__paragraph">Material: ${material}</p>
     <p class="food-container-card__body__paragraph">Country of origin: ${country}</p>
     <p class="food-container-card__body__paragraph">Weight: ${weightInGrams} g</p>
     <p class="food-container-card__body__paragraph">Colour: ${colour}</p>
     <p class="food-container-card__body__paragraph">Price: ${priceInUah} UAH</p>
     <p class="food-container-card__body__paragraph">Volume: ${volumeInL} L</p>
   </div>
   <div class="food-container-card__buttons">
     <button class="food-container-card__edit-button" id="edit_button_${getFoodContainerId(id)}">Edit</button>
     <button class="food-container-card__deletion-button" id="deletion_button_${getFoodContainerId(id)}">Delete</button>
   </div>
 </div>
`;

export const countTotalVolume = (foodContainers) => {
 let totalVolume = 0;
 for (const foodContainer of foodContainers) {
   totalVolume += foodContainer.volumeInL;
 }
 totalVolumeDisplay.textContent = `${totalVolume} L`;
};

export const addFoodContainerToPage = ({ id, material, country, weightInGrams, colour, priceInUah, volumeInL }) => {
 foodContainersContainer.insertAdjacentHTML(
   "afterbegin",
   foodContainerTemplate({ id, material, country, weightInGrams, colour, priceInUah, volumeInL })
 );
};

export const renderFoodContainersList = (foodContainers) => {
 foodContainersContainer.innerHTML = "";

 for (const foodContainer of foodContainers) {
   addFoodContainerToPage(foodContainer);
 }
};

 export const openModalWindow = (modalWindow) => {
  modalWindow.style.display = "block";
};

export const closeModalWindow = (modalWindow) => {
  modalWindow.style.display = "none";
};

export const renderButtons = () => {
  let editButtons = document.getElementsByClassName("food-container-card__edit-button");
  for (let button of editButtons) {
    button.addEventListener("click", () => {
      openModalWindow(editFoodContainerWindow);
    });
  }
  let deleteButtons = document.getElementsByClassName("food-container-card__deletion-button");
  for (let button of deleteButtons) {
    button.addEventListener("click", () => {
      openModalWindow(deleteFoodContainerWindow);
    });
  }
};
