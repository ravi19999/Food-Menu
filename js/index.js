const breakfastPrice = [200, 300, 400, 500, 600];
const lunchPrice = [400, 500, 600, 700, 800];
const dinnerPrice = [150, 250, 350, 450, 550];

serves = [2, 4, 3, 5, 6];
time = [15, 25, 35, 40, 50];

let dropDownComponent = document.querySelector(".dropdown");

// let dropDownElement = document.createElement("li");

let dropdownHTML = `<div class='dropdown-elements'>
                        <div class='dropdown-image'></div>
                        <div class='dropdown-text'>
                            <h1>Breakfast Item</h1>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium maiores hic exercitationem suscipit numquam labore modi! Nemo nihil ad sit molestiae dolorum, consectetur impedit sunt doloribus rem rerum tempora incidunt.</p>
                        </div>
                        <div class='span-container'>
                            <span class='dropdown-span price'><br><br>Price <br> <strong class='large'>Rs. 150<strong></span>
                        </div>
                        
                    </div>
                    <span class='dropdown-footer'>
                         <div class='span-item'>⏱ 15 mins</div>
                         <div class='span-item'> 👯  2 serves</div> 
                    </span>
`;

// breakfastClicked =

document.querySelector(".lunch").addEventListener("click", () => {
  dropDownComponent.innerHTML = "";
  let foodType = "Lunch Item";
  for (let i = 0; i < 5; i++) {
    let dropDownElement = document.createElement("li");
    let price = lunchPrice[i];
    let image = lunch[i];

    let dropdownHTML = `<div class='dropdown-elements'>
                        <div class='dropdown-image' style="background-image:url(${image})"></div>
                        <div class='dropdown-text'>
                            <h1>${foodType}</h1>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium maiores hic exercitationem suscipit numquam labore modi! Nemo nihil ad sit molestiae dolorum, consectetur impedit sunt doloribus rem rerum tempora incidunt.</p>
                        </div>
                        <div class='span-container'>
                            <span class='dropdown-span price'><br><br>Price <br> <strong class='large'>Rs. ${price}<strong></span>
                        </div>
                        
                    </div>
                    <span class='dropdown-footer'>
                         <div class='span-item'>⏱ 15 mins</div>
                         <div class='span-item'> 👯  2 serves</div> 
                    </span>
`;
    dropDownElement.innerHTML = dropdownHTML;
    dropDownComponent.appendChild(dropDownElement);
  }
});

document.querySelector(".dinner").addEventListener("click", () => {
  dropDownComponent.innerHTML = "";

  let foodType = "Dinner Item";
  for (let i = 0; i < 5; i++) {
    let dropDownElement = document.createElement("li");
    let price = dinnerPrice[i];
    let image = dinner[i];
    let dropdownHTML = `<div class='dropdown-elements'>
                        <div class='dropdown-image' style="background-image:url(${image})"></div>
                        <div class='dropdown-text'>
                            <h1>${foodType}</h1>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium maiores hic exercitationem suscipit numquam labore modi! Nemo nihil ad sit molestiae dolorum, consectetur impedit sunt doloribus rem rerum tempora incidunt.</p>
                        </div>
                        <div class='span-container'>
                            <span class='dropdown-span price'><br><br>Price <br> <strong class='large'>Rs. ${price}<strong></span>
                        </div>
                        
                    </div>
                    <span class='dropdown-footer'>
                         <div class='span-item'>⏱ 40 mins</div>
                         <div class='span-item'> 👯  4 serves</div> 
                    </span>
`;
    dropDownElement.innerHTML = dropdownHTML;
    dropDownComponent.appendChild(dropDownElement);
  }
});

// dropDownElement.innerHTML = dropdownHTML;

document.querySelector(".breakfast").addEventListener("click", () => {
  dropDownComponent.innerHTML = "";

  let foodType = "Breakfast Item";
  for (let i = 0; i < 5; i++) {
    let dropDownElement = document.createElement("li");
    let price = breakfastPrice[i];
    let image = breakfast[i];

    let dropdownHTML = `<div class='dropdown-elements'>
                        <div class='dropdown-image' style="background-image:url(${image})"></div>
                        <div class='dropdown-text'>
                            <h1>${foodType}</h1>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium maiores hic exercitationem suscipit numquam labore modi! Nemo nihil ad sit molestiae dolorum, consectetur impedit sunt doloribus rem rerum tempora incidunt.</p>
                        </div>
                        <div class='span-container'>
                            <span class='dropdown-span price'><br><br>Price <br> <strong class='large'>Rs. ${price}<strong></span>
                        </div>
                        
                    </div>
                    <span class='dropdown-footer'>
                         <div class='span-item'>⏱ 30 mins</div>
                         <div class='span-item'> 👯  3 serves</div> 
                    </span>
`;
    dropDownElement.innerHTML = dropdownHTML;
    dropDownComponent.appendChild(dropDownElement);
  }
});

let foodType = "Breakfast Item";
for (let i = 0; i < 5; i++) {
  let dropDownElement = document.createElement("li");
  let price = breakfastPrice[i];
  let image = breakfast[i];

  let dropdownHTML = `<div class='dropdown-elements'>
                        <div class='dropdown-image' style="background-image:url(${image})"></div>
                        <div class='dropdown-text'>
                            <h1>${foodType}</h1>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium maiores hic exercitationem suscipit numquam labore modi! Nemo nihil ad sit molestiae dolorum, consectetur impedit sunt doloribus rem rerum tempora incidunt.</p>
                        </div>
                        <div class='span-container'>
                            <span class='dropdown-span price'><br><br>Price <br> <strong class='large'>Rs. ${price}<strong></span>
                        </div>
                        
                    </div>
                    <span class='dropdown-footer'>
                         <div class='span-item'>⏱ 15 mins</div>
                         <div class='span-item'> 👯  2 serves</div> 
                    </span>
`;
  dropDownElement.innerHTML = dropdownHTML;
  dropDownComponent.appendChild(dropDownElement);
}
// dropDownComponent.appendChild(dropDownElement);
