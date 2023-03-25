
 



 self.addEventListener('push', function(event) {
  console.log('[Service Worker] Push Received:', event);
  const title = 'Push Notification';
  const options = {
  body: 'This is a push notification!',
  icon: 'path/to/icon.png'
  };
  event.waitUntil(self.registration.showNotification(title, options));
  });
  self.addEventListener('notificationclick', function(event) {
  console.log('[Service Worker] Notification click Received.');
  event.notification.close();
  event.waitUntil(clients.openWindow('https://www.example.com'));
  });
 

 /*
function Food(cal, carb, prot, fat) {  // calories , .... , gorduras totais  

this.cal = cal
this.carb = carb
this.prot = prot
this.fat = fat

};



let leiteccgl          = new Food(4.923076923076923,0.38461538461538464,0.26153846153846155,0.26153846153846155) ;            
let nissimyoi          = new Food(4.549125168236878,0.5787348586810229,0.10363391655450875,0.2018842530282638) ;
let cuzcuzcoringa      = new Food(3.4,0.76,0.08,0.02);


let  boxForHoldBtns;

let foodsArray = [ "arroz" , "cuzcuz coringa", "leitebom integral" , "leite ccgl" , "arroz painho" , "cuzcuz coringa" , "frango" , "nissim yoi" , "tapioca nossa goma" , "toscana" , "presunto" , "pão francês" , "leite" ];

let totalCalRetrive = { totalCal:0 , totalCarb:0 , totalProt:0  };

let result;

let array = [];

let totalCalCarbProtGord = document.querySelector("#totalCalCarbProtGord");


let container = document.querySelector("#container");

let menuButton = document.querySelector("#menu-button");
let menu = document.querySelectorAll(".item");
let mainMenu = document.querySelector("#menu");


menuButton.onclick = () => CreateMenu()  ;

function CreateMenu (){ // This function will create a menu with option ( dark mode , add food and etc)


menu[0].style.display = "block" ;
menu[1].style.display = "block" ;
menu[2].style.display = "block" ;

mainMenu.style.boxShadow = "4px 4px 8px 8px black";

menuButton.onclick = () => CloseMenu();

};


function CloseMenu(){

  mainMenu.style.boxShadow = "";
menu[0].style.display = "none" ;
menu[1].style.display = "none" ;
menu[2].style.display = "none" ;

menuButton.onclick = () => CreateMenu();

};


function DarkMode() { // This function will  set  the dark mode  on the webpage


};

menu[0].onclick = () => CreateInput();


function  CreateInput() { // This function will create an  input for the user a  add meal name .

  CloseMenu()

let inputForUserAddMealName = document.createElement("input");
inputForUserAddMealName.style.padding = "5px";
inputForUserAddMealName.style.maxWidth = "500px"
inputForUserAddMealName.style.marginBottom = "10px";

let BtnForUserSubInput = document.createElement("button");
BtnForUserSubInput.textContent = "adicionar" ;
BtnForUserSubInput.style.background = "#5e5e5e" ;
BtnForUserSubInput.style.color = "white";
BtnForUserSubInput.style.padding = "5px";
BtnForUserSubInput.style.marginBottom = "8px";

let closeButton = document.createElement("button");
closeButton.textContent = "fechar" ;
closeButton.style.background = "#5e5e5e" ;
closeButton.style.color = "white";
closeButton.style.padding = "5px";

boxForHoldBtns = document.createElement("div");
boxForHoldBtns.style.display = "grid" ;
boxForHoldBtns.style.maxWidth = "500px" ;
boxForHoldBtns.style.padding = "10px";

boxForHoldBtns.append(inputForUserAddMealName,BtnForUserSubInput,closeButton);
container.prepend(boxForHoldBtns);

BtnForUserSubInput.onclick = () => createMainBox(inputForUserAddMealName.value,inputForUserAddMealName,menuButton)  ;


menu[0].onclick = console.log();

closeButton.onclick = () => test(boxForHoldBtns,menu[0]); 
};


function  CloseInput() { // This function will close the input for the user add the meal name . 

menuButton.remove();
btnForCreateInputs.textContent = "+" ;
btnForCreateInputs.onclick = () => CreateInput()

};

function test(boxForHoldBtns,btn) {


boxForHoldBtns.remove();
btn.onclick = () => CreateInput();;



};






function createMainBox(mealChoosen,inputForUserAddMealName) { // This function will create a container to add the meal and all its foods  
  
    if (inputForUserAddMealName.value != "") {

    let subBoxForHoldFoodName = document.createElement("h3");
    subBoxForHoldFoodName.style.color= "yellow";
    subBoxForHoldFoodName.textContent = mealChoosen;

    let plusIcon =  document.createElement("i");
    plusIcon.setAttribute("class" , "fa-solid fa-plus");
    plusIcon.style.color = "yellow" ;
    plusIcon.style.fontSize = "15px";
    
    let BtnToAddFoodName = document.createElement("button");
    BtnToAddFoodName.appendChild(plusIcon);
    BtnToAddFoodName.style.color ="yellow";
    BtnToAddFoodName.style.marginRight = "5px"; 

    let trashIcon =  document.createElement("i");
    trashIcon.setAttribute("class" , "fa-solid fa-trash-can");
    trashIcon.style.color = "yellow" ;
    trashIcon.style.fontSize = "15px";

    let BtnToRemMainBox = document.createElement("button");
    BtnToRemMainBox.appendChild(trashIcon);
    BtnToRemMainBox.setAttribute("class" , "BtnToRemMainBox");
    BtnToRemMainBox.style.color = "yellow";

    let boxForHoldsubBoxForHoldFoodNameAndBtns = document.createElement("span");
    boxForHoldsubBoxForHoldFoodNameAndBtns.append(BtnToAddFoodName,BtnToRemMainBox);
    boxForHoldsubBoxForHoldFoodNameAndBtns.style.display = "inline";

    let allDiv = document.createElement("span");
    allDiv.style.background = "#5e5e5e";
    allDiv.style.marginBottom = "5px";
    allDiv.style.display = "flex";
    allDiv.style.justifyContent = "space-between";
    
    allDiv.append(subBoxForHoldFoodName,boxForHoldsubBoxForHoldFoodNameAndBtns);

    let mainBox = document.createElement("div");
    mainBox.style.marginBottom = "15px"
    mainBox.style.marginTop = "15px";
    mainBox.style.borderRadius = "10px";
    mainBox.style.padding = "5px";

    mainBox.appendChild(allDiv);
    mainBox.style.background = "#5e5e5e";
    container.appendChild(mainBox);
    mainBox.style.maxWidth = "500px";

    let general = [] ;
    general.push(mealChoosen);
    array.push(general);

    localStorage.setItem("mealDetails" , JSON.stringify(array));

    inputForUserAddMealName.value = "" ;




  
    BtnToRemMainBox.onclick = () => RemoveBox();
    
    
    
    function RemoveBox() {  // function to remove the main box that holds the meal name and its foods ;
      
      general.shift();  
      mainBox.remove();

      array =  array.filter(value => JSON.stringify(value) !== "[]");

      localStorage.setItem("mealDetails" , JSON.stringify(array));
    };
    
  

    BtnToAddFoodName.onclick = function() { // This function will create two inputs to the user put the food name and the amount in grams 
  
    
      BtnToAddFoodName.disabled = true;
    
    let inputForUserAddFoodName  = document.createElement("input");
    inputForUserAddFoodName.style.marginBottom = "10px";
    inputForUserAddFoodName.setAttribute("class" ,"foods");
    inputForUserAddFoodName.type = "text";
    inputForUserAddFoodName.id = "united";
    
    


    let inputForUserAddFoodAmount =  document.createElement("input");
    inputForUserAddFoodAmount.style.marginBottom = "10px";
    inputForUserAddFoodAmount.setAttribute("class" ,"foods");
    
  
    let btnForUserSubFoodNameAndAmount = document.createElement("button");
    btnForUserSubFoodNameAndAmount.style.marginBottom = "10px";
    btnForUserSubFoodNameAndAmount.textContent = "adicionar";

    let btnForUserCloseInputs = document.createElement("button");
    btnForUserCloseInputs .style.marginBottom = "10px";
    btnForUserCloseInputs .textContent = "fechar";
    btnForUserCloseInputs.onclick = function(){


    mainBox.removeChild(boxForHoldBtnsAndAddBtn)
    BtnToAddFoodName.disabled = false;
    }

    let xxx = document.createElement("div");
    xxx.append(btnForUserSubFoodNameAndAmount,btnForUserCloseInputs);
    xxx.style.display = "flex"
    xxx.style.justifyContent = "space-evenly"


   
    let boxForHoldBtnsAndAddBtn = document.createElement("div");
    boxForHoldBtnsAndAddBtn.style.display = "grid";
    boxForHoldBtnsAndAddBtn.style.padding = "10px";

    boxForHoldBtnsAndAddBtn.append(inputForUserAddFoodName,inputForUserAddFoodAmount,xxx );
    mainBox.appendChild(boxForHoldBtnsAndAddBtn);

    $("#united").autocomplete({

      source : foodsArray 
    });

   
    btnForUserSubFoodNameAndAmount.onclick  = () => addFood(inputForUserAddFoodName.value, inputForUserAddFoodAmount.value ,mainBox,general,BtnToRemMainBox,inputForUserAddFoodName,inputForUserAddFoodAmount)
   
    
    
   
   

    }

  } else {  
    
    alert(" adicione o nome de uma refeição (almoço , lanche e etc ..." );

  

}
 
}
    

function addFood(foodChoosen,amountChoosen ,mainBox,general,BtnToRemMainBox,inputForUserAddFoodName,inputForUserAddFoodAmount) { 
     
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
      
  
      inputForUserAddFoodName.value = "" ;
      inputForUserAddFoodAmount.value = "" ;

      let subBoxForHoldFoodNameAndAmountChoosen =  document.createElement("div");
      subBoxForHoldFoodNameAndAmountChoosen.style.display = "flex";
      subBoxForHoldFoodNameAndAmountChoosen.style.color = "white";
      subBoxForHoldFoodNameAndAmountChoosen.style.justifyContent = "space-between";
  
      let subBoxForHoldFoodChoosen  =  document.createElement("p");
      subBoxForHoldFoodChoosen.textContent = foodChoosen;
  
      let subBoxForHoldFoodAmountChoosen =  document.createElement("p");
      subBoxForHoldFoodAmountChoosen.textContent = Math.floor(eval(newFoodChoosen).cal *  amountChoosen) + "cal";
      subBoxForHoldFoodAmountChoosen.setAttribute = "class" , "piu";
      subBoxForHoldFoodAmountChoosen.style.marginRight = "5px";
     
      let boxForHoldFoodIndividualDetails =  document.createElement("div");
      boxForHoldFoodIndividualDetails.style.color = "yellow";
      boxForHoldFoodIndividualDetails.style.textAlign = "center";
      boxForHoldFoodIndividualDetails.style.display = "none";
      boxForHoldFoodIndividualDetails.style.fontSize = "15px";

    let trashIcon =  document.createElement("i");
    trashIcon.setAttribute("class" , "fa-solid fa-trash-can");
    trashIcon.style.color = "white" ;
    trashIcon.style.fontSize = "10px";
     
      let btnToRemoveFoodChoosen = document.createElement("button");
      btnToRemoveFoodChoosen.appendChild(trashIcon);
      
      let anglesDownIcon =  document.createElement("i");
      anglesDownIcon.setAttribute("class" , "fa-solid fa-eye");
      anglesDownIcon.style.color = "white" ;
      anglesDownIcon.style.fontSize = "10px";
      anglesDownIcon.style.marginRight = "5px";

      
  
      let btnToSeeDetailsOfeachFood = document.createElement("button")
      btnToSeeDetailsOfeachFood.appendChild(anglesDownIcon);
    

    
      
      btnToSeeDetailsOfeachFood.onclick = function() {
    

        if (boxForHoldFoodIndividualDetails.style.display == "none" ) {

          boxForHoldFoodIndividualDetails.style.display = "block"

        } else {

          boxForHoldFoodIndividualDetails.style.display = "none";

        }



      };



    

      

      let containerForHoldBtns =  document.createElement("span");
      containerForHoldBtns.style.display = "flex";
      containerForHoldBtns.style.alignItems = "center";
      
      containerForHoldBtns.append(subBoxForHoldFoodAmountChoosen,btnToSeeDetailsOfeachFood,btnToRemoveFoodChoosen);
      
      let calories =  Math.floor(eval(newFoodChoosen).cal *  amountChoosen);
      let carboidrates =  Math.floor(eval(newFoodChoosen).carb *  amountChoosen);
      let proteins = Math.floor(eval(newFoodChoosen).prot *  amountChoosen) ;

      let food = {};

      food.name = foodChoosen;
      food.calories = calories;
      food.amount =  amountChoosen;
      food.carboidrates =  carboidrates;
      food.proteins =  proteins;

      boxForHoldFoodIndividualDetails.textContent =  amountChoosen  + " gram , " +  calories  + " Cal , " + carboidrates + "Carb , " + proteins + " Prot  ";

      let test = [];
      test.push(food);
      general.push(test);

      totalCalRetrive.totalCal += calories;
      totalCalRetrive.totalCarb += carboidrates;
      totalCalRetrive.totalProt += proteins;

      totalCalCarbProtGord.style.display = "block";
      totalCalCarbProtGord.style.background = "#5e5e5e" ;
  

     

      totalCalCarbProtGord.textContent = "Total: " + totalCalRetrive.totalCal  + " Cal , " +  totalCalRetrive.totalCarb + "Carb , " +  totalCalRetrive.totalProt+ " Prot ";
    
    
      localStorage.setItem("mealDetails" , JSON.stringify(array));
     
  

    subBoxForHoldFoodNameAndAmountChoosen.append(subBoxForHoldFoodChoosen ,containerForHoldBtns);
    mainBox.append(subBoxForHoldFoodNameAndAmountChoosen ,boxForHoldFoodIndividualDetails);

    
     btnToRemoveFoodChoosen.onclick = () => RemoveFood(food) ; 
     
     
     
     
     
    function RemoveFood(food) { // This functon will remove a food that the user added  and its calories .

    totalCalRetrive.totalCal -= food.calories ;
    totalCalRetrive.totalCarb -= food.carboidrates;
    totalCalRetrive.totalProt -= food.proteins ;

    totalCalCarbProtGord.textContent = "Total: " + totalCalRetrive.totalCal + " cal" + " /" + totalCalRetrive.totalCarb + "carb"  + " /" + totalCalRetrive.totalProt+ "prot"   ;
    mainBox.removeChild(subBoxForHoldFoodNameAndAmountChoosen);
    boxForHoldFoodIndividualDetails.style.display = "none";

    test.pop(food);

     general =  general.filter(value => JSON.stringify(value) !== "[]");
     
    
    localStorage.setItem("mealDetails" , JSON.stringify(array));

  
  }


  BtnToRemMainBox.onclick = () => caranga(mainBox,general,array.indexOf(general));
  
   
  
    } else { 

    
      alert(" No momento não temos essa comida , mas vamos adicionar em breve ")


    }
    
    result = false;


    }
    


  function caranga(mainBox,general,index) { // this function will remove the mainbox and its foods amd decrease fom the total calories the  caories of the foods that ae inside the mainbox;
  
    
      general =  general.filter(value => JSON.stringify(value) !== "[]");
   
       for (let i = 1 ; i < general.length  ; i++ ) {
  
      totalCalRetrive.totalCal -= general[i][0].calories;
      totalCalRetrive.totalCarb -= general[i][0].carboidrates;
      totalCalRetrive.totalProt -= general[i][0].proteins;
  
    }
  
      mainBox.remove();
      array.splice(index,1);
      localStorage.setItem("mealDetails" , JSON.stringify(array));
  
     totalCalCarbProtGord.textContent = "Total: " + totalCalRetrive.totalCal + " cal" + " /" + totalCalRetrive.totalCarb + "carb"  + " /" + totalCalRetrive.totalProt+ "prot" ;
     totalCalCarbProtGord.style.display = "block";
    
  
    }

let data = JSON.parse(localStorage.getItem("mealDetails"));

data.forEach((item) => {


  item =  item.filter(value => JSON.stringify(value) !== "[]");

  let subBoxForHoldFoodName = document.createElement("h3");
  subBoxForHoldFoodName.style.color= "yellow";
  subBoxForHoldFoodName.textContent = item[0];

  let plusIcon =  document.createElement("i");
  plusIcon.setAttribute("class" , "fa-solid fa-plus");
  plusIcon.style.color = "yellow" ;
  plusIcon.style.fontSize = "15px";
  
  let BtnToAddFoodName = document.createElement("button");
  BtnToAddFoodName.appendChild(plusIcon);
  BtnToAddFoodName.style.color ="yellow";
  BtnToAddFoodName.style.marginRight = "5px"; 

  let trashIcon =  document.createElement("i");
  trashIcon.setAttribute("class" , "fa-solid fa-trash-can");
  trashIcon.style.color = "yellow" ;
  trashIcon.style.fontSize = "15px";

  let BtnToRemMainBox = document.createElement("button");
  BtnToRemMainBox.appendChild(trashIcon);
  BtnToRemMainBox.setAttribute("class" , "BtnToRemMainBox");
   BtnToRemMainBox.style.color = "yellow";

  let boxForHoldsubBoxForHoldFoodNameAndBtns = document.createElement("span");
  boxForHoldsubBoxForHoldFoodNameAndBtns.append(BtnToAddFoodName,BtnToRemMainBox);
  boxForHoldsubBoxForHoldFoodNameAndBtns.style.display = "inline";

  let allDiv = document.createElement("span");
  allDiv.style.background = "#5e5e5e";
  allDiv.style.marginBottom = "5px";
  allDiv.style.display = "flex";
  allDiv.style.justifyContent = "space-between";
  
  allDiv.append(subBoxForHoldFoodName,boxForHoldsubBoxForHoldFoodNameAndBtns);

  let mainBox = document.createElement("div");
  mainBox.style.marginBottom = "15px"
  mainBox.style.marginTop = "15px";
  mainBox.style.borderRadius = "10px";
  mainBox.style.padding = "5px";
  mainBox.style.maxWidth = "500px";
  mainBox.id = "mainBox" ;


  mainBox.appendChild(allDiv);
  mainBox.style.background = "#5e5e5e";
  container.appendChild(mainBox);
    
  
    let general = []
    general.push(item[0]);
    array.push(general);
   
  
    localStorage.setItem("mealDetails" , JSON.stringify(array));
    
    BtnToRemMainBox.onclick = function () {  // function to remove the main box let caralho = [];
      

    general.shift();
     

    container.removeChild(mainBox);

    array =  array.filter(value => JSON.stringify(value) !== "[]");

    localStorage.setItem("mealDetails" , JSON.stringify(array));
    };
    

    BtnToAddFoodName.onclick = function() {

    BtnToAddFoodName.disabled = true;

    let inputForUserAddFoodName  = document.createElement("input");
    inputForUserAddFoodName.style.marginBottom = "10px";
    inputForUserAddFoodName.style.color = "white";
    inputForUserAddFoodName.setAttribute("class" ,"foods");
    inputForUserAddFoodName.type = "text";
    inputForUserAddFoodName.id = "united";
    
    let inputForUserAddFoodAmount =  document.createElement("input");
    inputForUserAddFoodAmount.style.marginBottom = "10px";
    inputForUserAddFoodAmount.style.color = "white";
    
  
    let btnForUserSubFoodNameAndAmount = document.createElement("button");
    btnForUserSubFoodNameAndAmount.style.marginBottom = "10px";
    btnForUserSubFoodNameAndAmount.textContent = "adicionar";

    let btnForUserCloseInputs = document.createElement("button");
    btnForUserCloseInputs .style.marginBottom = "10px";
    btnForUserCloseInputs .textContent = "fechar";
    btnForUserCloseInputs.onclick = function(){
    mainBox.removeChild(boxForHoldBtnsAndAddBtn)
    BtnToAddFoodName.disabled = false;
    }

    let xxx = document.createElement("div");
    xxx.append(btnForUserSubFoodNameAndAmount,btnForUserCloseInputs);
    xxx.style.display = "flex"
    xxx.style.justifyContent = "space-evenly";


   
    let boxForHoldBtnsAndAddBtn = document.createElement("div");
    boxForHoldBtnsAndAddBtn.style.display = "grid";
    boxForHoldBtnsAndAddBtn.style.padding = "10px";

    boxForHoldBtnsAndAddBtn.append(inputForUserAddFoodName,inputForUserAddFoodAmount,xxx );
    mainBox.appendChild(boxForHoldBtnsAndAddBtn);

    $("#united").autocomplete({

      source : foodsArray 
    });

    btnForUserSubFoodNameAndAmount.onclick  = () =>  addFood(inputForUserAddFoodName.value,inputForUserAddFoodAmount.value ,mainBox,general,BtnToRemMainBox,inputForUserAddFoodName,inputForUserAddFoodAmount)

}

let  inputForUserAddFoodName = "";
let  inputForUserAddFoodAmount = "";

for (let i = 1 ; i < item.length ; i++) {

addFood(item[i][0].name,item[i][0].amount,mainBox,general,BtnToRemMainBox,inputForUserAddFoodName,inputForUserAddFoodAmount)

};

  localStorage.setItem("mealDetails" , JSON.stringify(array));

})

  */
    

  

  
    

