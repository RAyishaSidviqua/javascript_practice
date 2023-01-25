const textInputField = document.querySelector("#text-input-field");
const addButton = document.querySelector("#add-button");
const grocerieslist = document.querySelector(".groceries-list");

addButton.addEventListener("click", () => {
  if (textInputField.value.trim().length == "") return;

  //   *********************add items in groceries*********************
  const groceriesItemContainer = document.createElement("div");
  groceriesItemContainer.classList.add("groceries-item-container");

  grocerieslist.appendChild(groceriesItemContainer);

  const groceriesText = document.createElement("p");
  groceriesText.id = "groceries-text";
  groceriesText.innerText = textInputField.value;
  groceriesItemContainer.appendChild(groceriesText);
  // ************************************************************************

  // *************************edit button cod*********************************
  const editButton = document.createElement("button");
  editButton.id = "edit-button";
  //  edit button img code
  const editImage = document.createElement("img");
  editImage.src = "assets/img/edit.png";
  editButton.appendChild(editImage);
  groceriesItemContainer.appendChild(editButton);
  //  add click event to edit-button here
  editButton.addEventListener("click", () => {
    console.log("odoText.innerText", groceriesText.innerText);
    textInputField.value = groceriesText.innerText;
    const parent = editButton.parentElement;
    parent.parentElement.removeChild(parent);
  });

  // *****************************************************************************

  // ******************************delete button code**************************
  const deleteButton = document.createElement("button");
  deleteButton.id = "delete-button";
  //  delete button img code
  const deleteImage = document.createElement("img");
  deleteImage.src = "assets/img/delete.png";
  deleteButton.appendChild(deleteImage);
  groceriesItemContainer.appendChild(deleteButton);

  // add click event for deleteButton
  deleteButton.addEventListener("click", () => {
    const parent = deleteButton.parentElement;
    parent.parentElement.removeChild(parent);
  });
  // ******************************************************************************

  textInputField.value = "";
});
// ************************************clearAll button code****************************

function clearItems() {
  const items = document.querySelectorAll(".groceries-item-container");
  console.log("itmes", items);
  if (items.length > 0) {
    console.log(">o");
    items.forEach(function (item) {
      grocerieslist.removeChild(item);
    });
  }

  container.classList.remove("groceries-item-container");
  displayAlert("empty list", "danger");
  // setBackToDefault();
}

// ******************************************************************************
