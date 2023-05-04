
function Food(cal, carb, prot, fat) {  // calories , .... , gorduras totais  

this.cal = cal
this.carb = carb
this.prot = prot
this.fat = fat

};


let retrieve = JSON.parse(localStorage.getItem("mealDetails"));



let leiteccgl          = new Food(4.923076923076923,0.38461538461538464,0.26153846153846155,0.26153846153846155) ;            
let nissimyoi          = new Food(4.549125168236878,0.5787348586810229,0.10363391655450875,0.2018842530282638) ;
let cuzcuzcoringa      = new Food(3.4,0.76,0.08,0.02);
let paodeforma         = new Food(3.4,0.76,0.08,0.02);
let mucilondemilho     = new Food (3.6666666666666665,0.8571428571428571,0.06190476190476191,0);

let  boxForHoldBtns;
let darkModeStatus;
let foodsArray = ["mucilon de milho","arroz" , "cuzcuz coringa", "leitebom integral" , "leite ccgl" , "arroz painho" , "cuzcuz coringa" , "frango" , "nissim yoi" , "tapioca nossa goma" , "toscana" , "presunto" , "pão francês" , "leite" ];
let result;
let database = [];


let totalCalories = { totalCal:0 , totalCarb:0 , totalProt:0 };

let totalCalCarbProtGord = document.createElement("p");
totalCalCarbProtGord.setAttribute("id" , "totalCalCarbProtGord" );

let container  = document.querySelector(".container");
let menuButton = document.querySelector("#menu-button");
let menuItem  = document.querySelectorAll(".item");
let  menu = document.querySelector("#menu");
let  body = document.querySelector("body");


menuButton.onclick = () => CreateMenu();  ;

function CreateMenu(){ // This function will create a menu  some  options like ( dark mode , add food and etc)

menuItem[0].style.display = "block" ;
menuItem[1].style.display = "block" ;
menuItem[2].style.display = "block" ;

menu.style.boxShadow = "4px 4px 8px 8px black";

menuButton.onclick = () => CloseMenu();

};

menuItem[0].onclick = () => CreateInput();
menuItem[1].onclick = () => darkMode();


function CloseMenu(){ // This function will close the menu

menu.style.boxShadow = "";
menuItem[0].style.display = "none" ; menuItem[1].style.display = "none" ; menuItem[2].style.display = "none" ;
menuButton.onclick = () => CreateMenu();
  

};



function  CreateInput() { // This function will create an  input for the user a  add meal name , and two button for add the mealname and close the input

CloseMenu()

let  mealNameinput = document.createElement("input");

let addButton = document.createElement("button");
addButton.textContent = "adicionar" ;
addButton.setAttribute("class" , "btn-sub-input");

let closeButton = document.createElement("button");
closeButton.textContent = "fechar" ;
closeButton.setAttribute("class" , "btn-sub-input");

let mealForm = document.createElement("div");   
mealForm.setAttribute("class" , "mealForm");   
mealForm.append(mealNameinput,addButton ,closeButton);

container.prepend(mealForm);

addButton.onclick = () => createMainBox(mealNameinput.value);
menuItem[0].onclick = console.log();
closeButton.onclick = () => closeForm(mealForm); 

addButton.addEventListener("click" , function(){ mealNameinput.value = "" })

};



function closeForm(mealForm){

  mealForm.remove();


};




function  CloseInput() { // This function will close the input for the user add the meal name . 

menuButton.remove();
btnForCreateInputs.textContent = "+" ;
btnForCreateInputs.onclick = () => CreateInput()

};



function createMainBox(mealChoosen,item) { // This function will create a container to add the meal and all its foods  
  menuItem[0].onclick = () => CreateInput();

    

    let mealName = document.createElement("h3");
    mealName.textContent =  mealChoosen; 

    let plusIcon = document.createElement("i"); 
    plusIcon.setAttribute("class" , "fa-solid fa-plus");
    plusIcon.style.color = "yellow" ;
    plusIcon.style.fontSize = "15px";
    
    let plusIconButton = document.createElement("button")
    plusIconButton.textContent = "+" ; 
    plusIconButton.style.marginRight = "5px"; 

    let trashIcon = document.createElement("i");
    trashIcon.setAttribute("class" , "fa-solid fa-trash-can");
    trashIcon.style.color = "yellow";
    trashIcon.style.fontSize = "15px";

    let trashIconButton = document.createElement("button");
    trashIconButton.textContent = "xx" ;

    let buttonsBox = document.createElement("div");
    buttonsBox.append(plusIconButton,trashIconButton);
    buttonsBox.style.display = "inline";

    let mealNameButtonsBoxContainer =  document.createElement("div");
    mealNameButtonsBoxContainer.append(mealName,buttonsBox);
    mealNameButtonsBoxContainer.setAttribute("class" , "mealNameButtonsBoxContainer");


    let mealContainer = document.createElement("div");
    mealContainer.setAttribute("class" , "real");
    mealContainer.append(mealNameButtonsBoxContainer);

    container.appendChild(mealContainer);

    
    let mealArray = [];
    mealArray.push(mealChoosen)
    database.push(mealArray);

    console.log(database);


    localStorage.setItem("mealDetails" , JSON.stringify(database));
    

    trashIconButton.onclick = () => RemoveBox(mealArray,mealContainer);
    plusIconButton.onclick = () => CreateFoodForm(mealArray,mealContainer,mealNameButtonsBoxContainer);







 if(retrieve != 0 ) { //This function will retrieve the date of the foods when the user load the page 

  for (let i = 1; i < item.length ; i++ ) {


     addFood(item[i].name,item[i].amount,mealArray,mealContainer); 
    
  }}
             
              
  }

      function RemoveBox(mealArray,mealContainer) {  // function to remove the main box that holds the meal name and its foods ;
      
        let MealArrayIndexNumber = database.indexOf(mealArray);

        console.log(mealArray);
        console.log(mealArray[1]);

        database.splice(MealArrayIndexNumber , 1);

        console.log(database);

        mealContainer.remove();

      localStorage.setItem("mealDetails" , JSON.stringify(database));


        for (let i = 1; i < mealArray.length ; i++) {

          console.log(mealArray[i].calories) 
      
         totalCalories.totalCal -= mealArray[i].calories ;
          totalCalories.totalCarb -= mealArray[i].carboidrates;
          totalCalories.totalProt -= mealArray[i].proteins ; 
         
      
        }
      
        totalCalCarbProtGord.textContent = "Total : " + "Cal " + totalCalories.totalCal  + " /  Carb " + totalCalories.totalCarb  + " /  Prot " + totalCalories.totalProt;
        
          

    };

    function  CreateFoodForm(mealArray,mealContainer,mealNameButtonsBoxContainer) { // This function will create two inputs to the user put the food name and the amount in grams 
    
      let foodNameInput  = document.createElement("input");
      foodNameInput.setAttribute("class" ,"united");
      
      let amountFoodInput =  document.createElement("input");
      amountFoodInput.setAttribute("class" ,"united");
      
      let addButton = document.createElement("button");
      addButton.style.marginBottom = "10px";
      addButton.textContent = "adicionar";
  
      let closeButton = document.createElement("button");
      closeButton.style.marginBottom = "10px";
      closeButton.textContent = "fechar";
  
      let buttonsBox =  document.createElement("div");
      buttonsBox.append(addButton,closeButton);
      buttonsBox.style.display = "flex" ;
      buttonsBox.style.justifyContent = "space-evenly"
      
   
      let foodForm = document.createElement("div");
      foodForm.append(foodNameInput,amountFoodInput,buttonsBox);
      foodForm.setAttribute("class" , "foodForm");
  
      foodForm.append(foodNameInput,amountFoodInput,buttonsBox);
  
      mealNameButtonsBoxContainer.after(foodForm);
  
      closeButton.onclick = function(){
        
      foodForm.remove();
  
      addButton.disabled = false;
  
      }
  
      
      $(".united").autocomplete({
  
        source : foodsArray 
  
      });
  
      addButton.addEventListener("click" , function(){ 
  
        addFood(foodNameInput.value,amountFoodInput.value,mealArray,mealContainer);
        foodNameInput.value = "" ;
        amountFoodInput.value = "" ;
  
      })
       
  
      
    }


    function addFood(foodChoosen,amountChoosen,mealArray,mealContainer) { 
     
      foodChoosen.toLowerCase();
      
      let barao1 = foodChoosen.normalize("NFD").replace(/[\u0300\u0302]/g, "");
      let barao2 = barao1.normalize("NFD").replace(/\u0303/g, "");
      
      let newFoodChoosen = barao2.replaceAll(" " , "");
      
      for (let i = 0 ; i < foodsArray.length  ; i++)  {

      if (foodChoosen == foodsArray[i]) { 
   
      result = true ;

      }

  }


  
  if (result == true ) {
      

    let foodName = document.createElement("p");
    foodName.textContent = foodChoosen;
      
    let foodCalories  =  document.createElement("p");
    foodCalories.textContent = Math.floor(eval(newFoodChoosen).cal *  amountChoosen) + "cal";
    foodCalories.style.marginRight = "5px";
      
    let foodNutritionalDetails  = document.createElement("p");

    let trashIcon =  document.createElement("i");
    trashIcon.setAttribute("class" , "fa-solid fa-trash-can");
    trashIcon.style.color = "white" ;
    trashIcon.style.fontSize = "10px";

    let trashIconButton = document.createElement("button")
    trashIconButton.textContent = "xx";

      
      let anglesDownIcon =  document.createElement("i");
      anglesDownIcon.setAttribute("class" , "fa-solid fa-eye");
      anglesDownIcon.style.color = "white" ;
      anglesDownIcon.style.fontSize = "10px";
      anglesDownIcon.style.marginRight = "5px";

      let anglesDownIconButton= document.createElement("button")
      anglesDownIconButton.textContent = "^";

      let buttonsBox =  document.createElement("div");
      buttonsBox.style.display = "flex";
      buttonsBox.style.alignItems = "center";
      buttonsBox.append(foodCalories,trashIconButton,anglesDownIconButton);

      let foodNameButtonsBoxContainer = document.createElement("div");
      foodNameButtonsBoxContainer.append(foodName,buttonsBox);
      foodNameButtonsBoxContainer.setAttribute("class" , "foodNameButtonsBoxContainer");

      mealContainer.append(foodNameButtonsBoxContainer);


      let calories =  Math.floor(eval(newFoodChoosen).cal *  amountChoosen);
      let carboidrates =  Math.floor(eval(newFoodChoosen).carb *  amountChoosen);
      let proteins = Math.floor(eval(newFoodChoosen).prot *  amountChoosen) ;

      totalCalories.totalCal += calories ;
      totalCalories.totalCarb += carboidrates ;
      totalCalories.totalProt += proteins ;

      console.log(totalCalories);

      totalCalCarbProtGord.textContent = "Total : " + "Cal " + totalCalories.totalCal  + " /  Carb " + totalCalories.totalCarb  + " /  Prot " + totalCalories.totalProt;
      body.appendChild(totalCalCarbProtGord);
      


      let food = {};

      food.name = foodChoosen;
      food.calories = calories;
      food.amount =  amountChoosen;
      food.carboidrates =  carboidrates;
      food.proteins =  proteins;

      mealArray.push(food);
      
      console.log(database);

     trashIconButton.onclick = () => RemoveFood(food,foodNameButtonsBoxContainer,mealArray);

     localStorage.setItem("mealDetails" , JSON.stringify(database));
      
  }

  
}
   
    
  
  

    

   
    



function RemoveFood(food,foodNameButtonsBoxContainer,mealArray) { // This functon will remove a food that the user added  and its calories .

  totalCalories.totalCal -= food.calories ;
  totalCalories.totalCarb -= food.carboidrates;
  totalCalories.totalProt -= food.proteins ;


  let foodIndexNumber = mealArray.indexOf(food);

  mealArray.splice(foodIndexNumber , 1);

  console.log(foodIndexNumber);
  
  console.log(mealArray);
  console.log(database);

  localStorage.setItem("mealDetails" , JSON.stringify(database));
  
  totalCalCarbProtGord.textContent = "Total : " + "Cal " + totalCalories.totalCal  + " /  Carb " + totalCalories.totalCarb  + " /  Prot " + totalCalories.totalProt;


  foodNameButtonsBoxContainer.remove();


}











    
retrieve.forEach( item => {

  
  
  console.log(item[0]);
  console.log(item[1]);
  
  createMainBox(item[0],item);




});


    let dora;

    function darkMode(){ // This function will toggle the page between dark mode and light mode .


      if(dora == undefined ){

        localStorage.setItem("lightmode" , "on")
        dora = "on" ;

        menuItem[1].textContent = "dark mode : off"

      }else {

    localStorage.setItem("lightmode" , "off")
        dora = undefined;

        menuItem[1].textContent = "dark mode : on"

      }


      body = document.body.classList.toggle("dark-mode");
       
      let nav = document.querySelector("nav").classList.toggle("light-nav");
     
       menu.classList.toggle("light-menu");


     container.classList.toggle("dark-container");


    }
     
    
    
    if(localStorage.getItem("lightmode") == "on") {

      darkMode();
      
      }







  

  
    

