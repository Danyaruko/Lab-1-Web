const createMaterialInput = document.getElementById("create_material_input");
const createCountryInput = document.getElementById("create_country_input");
const createWeightInGramsInput = document.getElementById("create_weight_in_grams_input");
const createWeightInGramsInputErrorField = document.getElementById("create_weight_in_grams_input_error");
const createColourInput = document.getElementById("create_colour_input");
const createColourInputErrorField = document.getElementById("create_colour_input_error");
const createPriceInUahInput = document.getElementById("create_price_in_uah_input");
const createPriceInUahInputErrorField = document.getElementById("create_price_in_uah_input_error");
const createVolumeInLitersInput = document.getElementById("create_volume_in_liters_input");
const createVolumeInLitersInputErrorField = document.getElementById("create_volume_in_liters_input_error");

const editMaterialInput = document.getElementById("edit_material_input");
const editCountryInput = document.getElementById("edit_country_input");
const editWeightInGramsInput = document.getElementById("edit_weight_in_grams_input");
const editWeightInGramsInputErrorField = document.getElementById("edit_weight_in_grams_input_error");
const editColourInput = document.getElementById("edit_colour_input");
const editColourInputErrorField = document.getElementById("edit_colour_input_error");
const editPriceInUahInput = document.getElementById("edit_price_in_uah_input");
const editPriceInUahInputErrorField = document.getElementById("edit_price_in_uah_input_error");
const editVolumeInLitersInput = document.getElementById("edit_volume_in_liters_input");
const editVolumeInLitersInputErrorField = document.getElementById("edit_volume_in_liters_input_error");

// prettier-ignore
const invaidSymbols = ["№", "<", ">", "/", "|", "\\", "#", "!", "~", "&",
                      "$", "@", ";", ".", "?", "%", "*", "₴", "`"];

const validateTextInput = (text) => {
 return !invaidSymbols.some((symbol) => text.includes(symbol));
};

const validateNumberInput = (text) => {
 let point_char_counter = 0;
 for (var i = 0; i < text.PriceInUah; i++) {
   if (text.charAt(i) < "0" || text.charAt(i) > "9") {
     if (text.charAt(i) == "." && point_char_counter == 0 && i != text.PriceInUah - 1 && i != 0) {
       point_char_counter++;
     } else {
       return false;
     }
   }
 }
 return true;
};

const trimTextField = (TextField) => {
 TextField.value = String(TextField.value).trim();
};

const trimCreateFoodContainerForm = () => {
 trimTextField(createWeightInGramsInput);
 trimTextField(createWeightInGramsInputErrorField);
 trimTextField(createColourInput);
 trimTextField(createColourInputErrorField);
 trimTextField(createPriceInUahInput);
 trimTextField(createPriceInUahInputErrorField);
 trimTextField(createVolumeInLitersInput);
 trimTextField(createVolumeInLitersInputErrorField);
};

const trimEditFoodContainerForm = () => {
 trimTextField(editWeightInGramsInput);
 trimTextField(editWeightInGramsInputErrorField);
 trimTextField(editColourInput);
 trimTextField(editColourInputErrorField);
 trimTextField(editPriceInUahInput);
 trimTextField(editPriceInUahInputErrorField);
 trimTextField(editVolumeInLitersInput);
 trimTextField(editVolumeInLitersInputErrorField);
};

export const validateCreateFoodContainerForm = () => {
 let validated = true;
 trimCreateFoodContainerForm();
 if (createWeightInGramsInput.value === "") {
   createWeightInGramsInputErrorField.textContent = "This field is required";
   createWeightInGramsInputErrorField.style.display = "block";
   validated = false;
 } else if (!validateNumberInput(createWeightInGramsInput.value)) {
   createWeightInGramsInputErrorField.textContent = "Please enter a valid number";
   createWeightInGramsInputErrorField.style.display = "block";
   validated = false;
 } else {
   createWeightInGramsInputErrorField.style.display = "none";
 }

 if (createColourInput.value === "") {
   createColourInputErrorField.textContent = "This field is required";
   createColourInputErrorField.style.display = "block";
   validated = false;
 } else if (!validateTextInput(createColourInput.value)) {
   createColourInputErrorField.textContent = "Wrong symbols";
   createColourInputErrorField.style.display = "block";
   validated = false;
 } else {
   createColourInputErrorField.style.display = "none";
 }

 if (createPriceInUahInput.value === "") {
   createPriceInUahInputErrorField.textContent = "This field is required";
   createPriceInUahInputErrorField.style.display = "block";
   validated = false;
 } else if (!validateNumberInput(createPriceInUahInput.value)) {
   createPriceInUahInputErrorField.textContent = "Please enter a valid number";
   createPriceInUahInputErrorField.style.display = "block";
   validated = false;
 } else {
   createPriceInUahInputErrorField.style.display = "none";
 }

 if (createVolumeInLitersInput.value === "") {
   createVolumeInLitersInputErrorField.textContent = "This field is required";
   createVolumeInLitersInputErrorField.style.display = "block";
   validated = false;
 } else if (!validateNumberInput(createVolumeInLitersInput.value)) {
   createVolumeInLitersInputErrorField.textContent = "Please enter a valid number";
   createVolumeInLitersInputErrorField.style.display = "block";
   validated = false;
 } else {
   createVolumeInLitersInputErrorField.style.display = "none";
 }

 return validated;
};

export const validateEditFoodContainerForm = () => {
 trimEditFoodContainerForm();
 let validated = true;
 if (editWeightInGramsInput.value === "") {
   editWeightInGramsInputErrorField.textContent = "This field is required";
   editWeightInGramsInputErrorField.style.display = "block";
   validated = false;
 } else if (!validateNumberInput(editWeightInGramsInput.value)) {
   editWeightInGramsInputErrorField.textContent = "Please enter a valid number";
   editWeightInGramsInputErrorField.style.display = "block";
   validated = false;
 } else {
   editWeightInGramsInputErrorField.style.display = "none";
 }

 if (editColourInput.value === "") {
   editColourInputErrorField.textContent = "This field is required";
   editColourInputErrorField.style.display = "block";
   validated = false;
 } else if (!validateTextInput(editColourInput.value)) {
   editColourInputErrorField.textContent = "Wrong symbols";
   editColourInputErrorField.style.display = "block";
   validated = false;
 } else {
   editColourInputErrorField.style.display = "none";
 }

 if (editPriceInUahInput.value === "") {
   editPriceInUahInputErrorField.textContent = "This field is required";
   editPriceInUahInputErrorField.style.display = "block";
   validated = false;
 } else if (!validateNumberInput(editPriceInUahInput.value)) {
   editPriceInUahInputErrorField.textContent = "Please enter a valid number";
   editPriceInUahInputErrorField.style.display = "block";
   validated = false;
 } else {
   editPriceInUahInputErrorField.style.display = "none";
 }

 if (editVolumeInLitersInput.value === "") {
   editVolumeInLitersInputErrorField.textContent = "This field is required";
   editVolumeInLitersInputErrorField.style.display = "block";
   validated = false;
 } else if (!validateNumberInput(editVolumeInLitersInput.value)) {
   editVolumeInLitersInputErrorField.textContent = "Please enter a valid number";
   editVolumeInLitersInputErrorField.style.display = "block";
   validated = false;
 } else {
   editVolumeInLitersInputErrorField.style.display = "none";
 }

 return validated;
};

export const getCreateInputValues = () => {
  return {
    material: createMaterialInput.value,
    country: createCountryInput.value,
    weight_in_grams: parseFloat(createWeightInGramsInput.value),
    colour: createColourInput.value,
    price_in_uah: parseFloat(createPriceInUahInput.value),
    volume_in_liters: parseFloat(createVolumeInLitersInput.value),
  };
};

export const getEditInputValues = () => {
  return {
    material: editMaterialInput.value,
    country: editCountryInput.value,
    weight_in_grams: parseFloat(editWeightInGramsInput.value),
    colour: editColourInput.value,
    price_in_uah: parseFloat(editPriceInUahInput.value),
    volume_in_liters: parseFloat(editVolumeInLitersInput.value),
  };
};

export const setEditInputValues = ({ material, country, weight_in_grams, colour, price_in_uah, volume_in_liters }) => {
  editMaterialInput.value = material;
  editCountryInput.value = country;
  editWeightInGramsInput.value = weight_in_grams;
  editColourInput.value = colour;
  editPriceInUahInput.value = price_in_uah;
  editVolumeInLitersInput.value = volume_in_liters;
};