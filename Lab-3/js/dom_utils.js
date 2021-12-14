const foodContainersContainer = document.getElementById("food-containers_list");
const totalVolumeDisplay = document.getElementById("total_volume");

const getFoodContainerId = (id) => `food-container_${id}`;
const EDIT_BUTTON_PREFIX = "edit_button_";
const DELETE_BUTTON_PREFIX = "delete_button_";


const foodContainerTemplate = ({ id, material, country, weight_in_grams, colour, price_in_uah, volume_in_liters }) =>
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
     <p class="food-container-card__body__paragraph">Weight: ${weight_in_grams} g</p>
     <p class="food-container-card__body__paragraph">Colour: ${colour}</p>
     <p class="food-container-card__body__paragraph">Price: ${price_in_uah} UAH</p>
     <p class="food-container-card__body__paragraph">Volume: ${volume_in_liters} L</p>
   </div>
   <div class="food-container-card__buttons">
     <button class="food-container-card__edit-button" id="${EDIT_BUTTON_PREFIX}${getFoodContainerId(id)}">Edit</button>
     <button class="food-container-card__deletion-button" id="${DELETE_BUTTON_PREFIX}${getFoodContainerId(id)}">Delete</button>
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

export const addFoodContainerToPage = (
  { id, material, country, weight_in_grams, colour, price_in_uah, volume_in_liters },
  prepareDeleteFoodContainerWindow,
  prepareUpdateFoodContainerWindow) => {
 foodContainersContainer.insertAdjacentHTML(
   "afterbegin",
   foodContainerTemplate({ id, material, country, weight_in_grams, colour, price_in_uah, volume_in_liters })
 );


const edit_button = document.getElementById(`${EDIT_BUTTON_PREFIX}${getFoodContainerId(id)}`);
console.log(edit_button);
const delete_button = document.getElementById(`${DELETE_BUTTON_PREFIX}${getFoodContainerId(id)}`);
 
edit_button.addEventListener("click", () => {
    prepareUpdateFoodContainerWindow(id);
  });
 
delete_button.addEventListener("click", () => {
    prepareDeleteFoodContainerWindow(id);
  });
};

export const renderFoodContainersList = (foodContainers, prepareDeleteFoodContainerWindow, prepareUpdateFoodContainerWindow) => {
 foodContainersContainer.innerHTML = "";

 for (const foodContainer of foodContainers) {
   addFoodContainerToPage(foodContainer, prepareDeleteFoodContainerWindow, prepareUpdateFoodContainerWindow);
 }
};

 export const openModalWindow = (modalWindow) => {
  modalWindow.style.display = "block";
};

export const closeModalWindow = (modalWindow) => {
  modalWindow.style.display = "none";
};

