
function Foods (cal,carb,prot,gord)  {     

    this.cal  = cal;
    this.carb = carb;
    this.prot = prot;
    this.gord = gord;

 }

let arroz         =  new Foods(1.5,2,0,0);
let frango        =  new Foods(2,2,2,2);
let tapiocanossagoma =  new Foods(3.3,0.8,0,0);
let toscana       =  new Foods(2,2,2,2);
let presunto      =  new Foods(1,0.1,0.2,0);
let leite         =  new Foods(1, 0.1, 0.2 ,0);
let arrozpainho   =  new Foods(3.7, 0.74, 0.06, 0);
let cuzcuzcoringa =  new Foods(3.4, 0.76, 0.08, 0);
let paofrances    =  new Foods(135, 25 , 3 , 0);
let ovo           =  new Foods(80, 0 , 6 , 4.8);


let foodsArray = [ "arroz" , "arroz painho" , "cuzcuz coringa" , "frango" , "tapioca nossa goma" , "toscana" , "presunto" , "pão francês" , "leite" ];



 
let totalCalRetrive = { totalCal:0 , totalCarb:0 , totalProt:0  };


let result;


let array = [];

let totalCalCarbProtGord = document.querySelector("#totalCalCarbProtGord");



let btnForCreateInputs = document.querySelector("#plusBtn");



let container = document.querySelector("#container");

btnForCreateInputs.onclick = () => tralha() ;


function tralha() { // This function will create an  input for the user a  add meal name .

if ( btnForCreateInputs.disabled == true) {
 alert();

}


else { 
let inputForUserAddMealName = document.createElement("input");

inputForUserAddMealName.style.padding = "5px";
inputForUserAddMealName.style.maxWidth = "500px"
inputForUserAddMealName.style.marginBottom = "10px";

let BtnForUserSubInput = document.createElement("button");
BtnForUserSubInput.textContent = "adicionar" ;
BtnForUserSubInput.style.background = "#5e5e5e" ;
BtnForUserSubInput.style.color = "white";
BtnForUserSubInput.style.padding = "5px";

let  boxForHoldBtns= document.createElement("div");
boxForHoldBtns.style.display = "grid" ;
boxForHoldBtns.style.background = "#1b1b1b";
boxForHoldBtns.style.maxWidth = "500px" ;
boxForHoldBtns.style.padding = "10px";

boxForHoldBtns.append(inputForUserAddMealName,BtnForUserSubInput);
container.prepend(boxForHoldBtns);

BtnForUserSubInput.onclick = () => createMainBox(inputForUserAddMealName.value,inputForUserAddMealName,btnForCreateInputs)  ;
btnForCreateInputs.textContent = "-" ;
btnForCreateInputs.onclick = function() { console.log() 

  if (btnForCreateInputs.textContent == "-") {

      container.removeChild(boxForHoldBtns);
      btnForCreateInputs.textContent = "+";
      btnForCreateInputs.onclick = () =>  tralha();
  }


};


}

}





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

    
  
    console.log(array);
    localStorage.setItem("mealDetails" , JSON.stringify(array));

    inputForUserAddMealName.value = "" ;


   
  

    BtnToRemMainBox.onclick = function () {  // function to remove the main box let caralho = [];
      
      general.shift();
      console.log(general);
      console.log(array);
       

      mainBox.remove();

      array =  array.filter(value => JSON.stringify(value) !== "[]");

      localStorage.setItem("mealDetails" , JSON.stringify(array));
    }
    
  

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

    btnForUserSubFoodNameAndAmount.onclick = function(){

       
    };
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


      console.log(barao2);
      
     

      let newFoodChoosen = barao2.replaceAll(" " , "");
      console.log(newFoodChoosen);
      

      


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
      subBoxForHoldFoodAmountChoosen.textContent = eval(newFoodChoosen).cal *  amountChoosen + "cal";
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
      
      let calories =  eval(newFoodChoosen).cal *  amountChoosen;
      let carboidrates =  eval(newFoodChoosen).carb *  amountChoosen;
      let proteins =  eval(newFoodChoosen).prot *  amountChoosen;

      let object = {};

      object.food = foodChoosen;
      object.calo = calories;
      object.amou =  amountChoosen;
      object.carb =  carboidrates;
      object.prot =  proteins;

      boxForHoldFoodIndividualDetails.textContent =  amountChoosen  + " gram , " +  calories  + " Cal , " + carboidrates + "Carb , " + proteins + " Prot  ";
  


      let puta = [];
      puta.push(object);
      general.push(puta);

      console.log(array);

      

      totalCalRetrive.totalCal += calories;
      totalCalRetrive.totalCarb += carboidrates;
      totalCalRetrive.totalProt += proteins;

      totalCalCarbProtGord.style.display = "block";
      totalCalCarbProtGord.style.background = "#5e5e5e" ;
  

     

      totalCalCarbProtGord.textContent = "Total: " + totalCalRetrive.totalCal  + " Cal , " +  totalCalRetrive.totalCarb + "Carb , " +  totalCalRetrive.totalProt+ " Prot ";
    
    
      localStorage.setItem("mealDetails" , JSON.stringify(array));
      console.log(array);
  

    subBoxForHoldFoodNameAndAmountChoosen.append(subBoxForHoldFoodChoosen ,containerForHoldBtns);
    mainBox.append(subBoxForHoldFoodNameAndAmountChoosen ,boxForHoldFoodIndividualDetails);

    
     btnToRemoveFoodChoosen.onclick = function() {    // thi functon will

    totalCalRetrive.totalCal-= eval(newFoodChoosen).cal * amountChoosen;
    totalCalRetrive.totalCarb -= eval(newFoodChoosen).carb * amountChoosen;
    totalCalRetrive.totalProt-= eval(newFoodChoosen).prot * amountChoosen;
    totalCalCarbProtGord.textContent = "Total: " + totalCalRetrive.totalCal + " cal" + " /" + totalCalRetrive.totalCarb + "carb"  + " /" + totalCalRetrive.totalProt+ "prot"   ;
    mainBox.removeChild(subBoxForHoldFoodNameAndAmountChoosen);
    boxForHoldFoodIndividualDetails.style.display = "none";

    puta.pop(object);
    console.log(array);
     
     general =  general.filter(value => JSON.stringify(value) !== "[]");
     
    
    localStorage.setItem("mealDetails" , JSON.stringify(array));

    console.log(array);
     console.log(general);
     console.log(puta);
    

  }


  BtnToRemMainBox.onclick = () => caranga(mainBox,general,array.indexOf(general));
  
   
  
    } else { 

    
      alert(" No momento não temos essa comida , mas vamos adicionar em breve ")


    }
    
    result = false;


    }
    


    function caranga(mainBox,general,index) {

      console.log(general);
   
    
      general =  general.filter(value => JSON.stringify(value) !== "[]");
  
    for (let i = 1 ; i < general.length  ; i++ ) {
  


      console.log(general[i][0].calo);
      
      totalCalRetrive.totalCal -= general[i][0].calo;
      totalCalRetrive.totalCarb -= general[i][0].carb;
      totalCalRetrive.totalProt -= general[i][0].prot;
  
    }
  
      
      mainBox.remove();
      array.splice(index,1);
      localStorage.setItem("mealDetails" , JSON.stringify(array));
       
    console.log(array);
  
     totalCalCarbProtGord.textContent = "Total: " + totalCalRetrive.totalCal + " cal" + " /" + totalCalRetrive.totalCarb + "carb"  + " /" + totalCalRetrive.totalProt+ "prot" ;
     totalCalCarbProtGord.style.display = "block";
    
     
  
    }
 /*   
  

function  removeMainBoxAndCals(container,subBoxForHoldFoodNameAndAmountChoosen) { 

  let cal = mainBox.querySelectorAll(".calories");
  let car = mainBox.querySelectorAll(".carboidrates");
  let pro = mainBox.querySelectorAll(".proteins");
  let gor = mainBox.querySelectorAll(".gorduras");
 
  
}



*/

let data = JSON.parse(localStorage.getItem("mealDetails"));


data.forEach((item) => {

 
  
  item =  item.filter(value => JSON.stringify(value) !== "[]");

  
  console.log(data);
  console.log(item);
  console.log(array);

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


for(let i = 1 ; i < item.length ; i++ ) {
  
  

   

  addFood(item[i][0].food,item[i][0].amou,mainBox,general,BtnToRemMainBox,inputForUserAddFoodName,inputForUserAddFoodAmount);  

   console.log(item[i][0].food);

  localStorage.setItem("mealDetails" , JSON.stringify(array));


  
}

   
})

  

    

  

  
    

