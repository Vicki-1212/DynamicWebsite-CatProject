let GroceryList = ["Milk", "Bread", "Jam", "Butter", "Chaco Chips"];

//background Container
let bgContainer = document.createElement("div");
bgContainer.classList.add("bg-container");
document.body.appendChild(bgContainer);

//Heading 
let headingElement = document.createElement("h1");
headingElement.textContent = "Grocery List";
headingElement.classList.add("heading");
bgContainer.appendChild(headingElement);

//Unorder list(ul)
let listContainer = document.createElement("ul");
listContainer.classList.add("list-container");
bgContainer.appendChild(listContainer);

//List(li)
for(let eachItem of GroceryList){
    let listItem = document.createElement("li");
    listItem.textContent = eachItem;
    listContainer.appendChild(listItem);
}

//Input CheckBox
let inputElement = document.createElement("input");
inputElement.setAttribute("type", "checkbox");
inputElement.setAttribute("id", "deliveryMode");
inputElement.classList.add("input-checkbox");
bgContainer.appendChild(inputElement);

//label for input CheckBox
let labelElement = document.createElement("label");
labelElement.setAttribute("for", "deliveryMode");
labelElement.textContent = "Need for Home Delivery";
labelElement.classList.add("label-input");
bgContainer.appendChild(labelElement);

//nextLine Command(br)
let nextLine = document.createElement("br");
bgContainer.appendChild(nextLine);

//Button
let buttonElement = document.createElement("button");
buttonElement.textContent = "Need To Pay";
buttonElement.classList.add("btn","btn-primary");
bgContainer.appendChild(buttonElement);