const breakfastPrice = [200, 300, 400, 500, 600];
const lunchPrice = [400, 500, 600, 700, 800];
const dinnerPrice = [150, 250, 350, 450, 550];

const dropDownComponent = document.querySelector(".dropdown");

let dropDownElement = document.createElement("li");

let dropdownHTML = `<div class='dropdown-elements'>
                        <div class='dropdown-image'></div>
                        <div class='dropdown-text'>
                            <h1>Breakfast Item</h1>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium maiores hic exercitationem suscipit numquam labore modi! Nemo nihil ad sit molestiae dolorum, consectetur impedit sunt doloribus rem rerum tempora incidunt.</p>
                        </div>
                        <div class='span-container'>
                            <span class='dropdown-span price'><br><br>Price <br> <strong class='large'>Rs.$100<strong></span>
                        </div>
                        
                    </div>
                    <span class='dropdown-footer'>
                         <div class='span-item'>⏱ 15 mins</div>
                         <div class='span-item'> 👯  2 serves</div> 
                    </span>
`;

breakfastClicked = document
  .querySelector(".breakfast")
  .addEventListener("click", (event) => {
    for (let i = 0; i <= 5; i++) {}
  });
lunchClicked = document
  .querySelector(".lunch")
  .addEventListener("click", (event) => console.log(event.target.classList[1]));
dinnerClicked = document
  .querySelector(".dinner")
  .addEventListener("click", (event) => console.log(event.target.classList[1]));

dropDownElement.innerHTML = dropdownHTML;

dropDownComponent.appendChild(dropDownElement);
