
function closeAnimate() {
    $(".links .sideitem1").animate({ opacity: "0", top: "250px" , left:"-100px"}, 1300);
    $(".links .sideitem2").animate({ opacity: "0", top: "250px" , left:"-100px"}, 1100);
    $(".links .sideitem3").animate({ opacity: "0", top: "250px" , left:"-100px"}, 900);
    $(".links .sideitem4").animate({ opacity: "0", top: "250px" , left:"-100px"}, 700);
    $(".links .sideitem5").animate({ opacity: "0", top: "250px" , left:"-100px"}, 500);
    }
    function openAnimate() {
        $(".links .sideitem1").animate({ opacity: "1", top: "0px" , left:"0px"}, 500);
        $(".links .sideitem2").animate({ opacity: "1", top: "0px" , left:"0px"}, 700);
        $(".links .sideitem3").animate({ opacity: "1", top: "0px" , left:"0px"}, 900);
        $(".links .sideitem4").animate({ opacity: "1", top: "0px" , left:"0px"}, 1100);
        $(".links .sideitem5").animate({ opacity: "1", top: "0px" , left:"0px"}, 1300);
    }
    function closeSideBar(){
        $('aside').animate({left:`${-menuWidth}`},500);
    $('#openbtn').removeClass('fa-times');
    closeAnimate()
    }
// *********** SideBar Event ***************
let menuWidth = $('#menu').outerWidth(true);
$('aside').css('left', -menuWidth);
$('#openbtn').click(function (e) { 
    
    let asideLeft = $('aside').css('left');
    if(asideLeft == '0px'){
    // $('aside').animate({left:`${-menuWidth}`},500);
    // $('#openbtn').toggleClass('fa-times');
    // closeAnimate()
    $('#openbtn').toggleClass('fa-times');
    closeSideBar()

    }
    else{
        $('aside').animate({left:`0px`},500)
        $('#openbtn').toggleClass('fa-times');
        openAnimate()
           
    }

});

// ------------ End Head Evnets -----------------------

// ----------------call Api------------------ 
// ------------ Global ---------------------------
let meals=[];
let mealDetails = [];
let searchedMeals =[];
let searchedMealsLetter =[];
let categories=[];
let category=[];
let areas=[];
let region=[];
let ingredients=[];
let ingMeals=[];
// ------------Get the first API ---------------------

async function getMealsByName() {
   document.getElementById('loading').style.cssText='z-index:90000000 !important';
    $('#loading').removeClass('d-none');
    const api = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=`);
    const response = await api.json();
   const finalResponse  = response.meals;
   meals = finalResponse;
   displayMeals(meals);
$('#loading').addClass('d-none');
document.getElementById('loading').style.cssText='z-index:10 !important';
}

function displayMeals(meals) {
    let cartona=``;
    for (let i = 0; i < 25; i++) {
        cartona += ` <div class="col-md-3 mt-4"  onclick=closeSideBar()>
        <div class="meal-img position-relative overflow-hidden" onclick="getMealDetails(${meals[i].idMeal})">
                <img src="${meals[i].strMealThumb}" alt="" class="w-100 rounded-3">
                <div class="overlay fw-bold d-flex align-items-center fs-4">${meals[i].strMeal}</div>        
        </div>
    </div>`
    }
    document.getElementById('meals-container').innerHTML = cartona;
}
getMealsByName();

// ------------End -Get the first API ---------------------


// -------------------- Start Get Instructions API ---------------------------
async function getMealDetails(id) {
    $('#loading').removeClass('d-none');
    const api = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
    const response = await api.json();
   const finalResponse  = response.meals;
   mealDetails = finalResponse;
   displayMealDetails(mealDetails);
    $('#loading').addClass('d-none');
}

function displayMealDetails(mealDetails) {
    document.querySelector('.details').classList.remove('d-none');
     document.querySelector('.meals').classList.add('d-none');
    document.querySelector('.search').classList.add('d-none');
    document.querySelector('.ingred-meal').classList.add('d-none');
    document.querySelector('.categories').classList.add('d-none');
document.querySelector('.category').classList.add('d-none');
document.querySelector('.area').classList.add('d-none');
document.querySelector('.area-meals').classList.add('d-none');
document.querySelector('.contact-us').classList.add('d-none');
document.querySelector('.ing').classList.add('d-none');

if (mealDetails[0].strTags != null) {
var tags = mealDetails[0].strTags.split(",");
} 
else{
    var tags=[];
}

    let cartona = ``;
    cartona += `
    <div class="col-md-4">
                   <div class="detail img">
                    <img src="${mealDetails[0].strMealThumb}" alt="" class="w-100 mt-4">
                   </div>
                   <h3 class="text-light">${mealDetails[0].strMeal}</h3>
                </div>
                <div class="col-md-8">
                <div class="details-content mt-4" >
                    <h3>Instructions</h3>
                    <p>${mealDetails[0].strInstructions}</p>
                    <h3>Area : <span>${mealDetails[0].strArea}</span></h3>
                    <h3>Category : <span>${mealDetails[0].strCategory}</span></h3>
                    <h3>Recipes:</h3>
                    <ul>
                        <li class="li-ing">${mealDetails[0].strMeasure1}${mealDetails[0].strIngredient1}</li>
                        <li class="li-ing">${mealDetails[0].strMeasure2}${mealDetails[0].strIngredient2}</li>
                        <li class="li-ing">${mealDetails[0].strMeasure3}${mealDetails[0].strIngredient3}</li>
                        <li class="li-ing">${mealDetails[0].strMeasure4}${mealDetails[0].strIngredient4}</li>
                        <li class="li-ing">${mealDetails[0].strMeasure5}${mealDetails[0].strIngredient5}</li>
                        <li class="li-ing">${mealDetails[0].strMeasure6}${mealDetails[0].strIngredient6}</li>
                        <li class="li-ing">${mealDetails[0].strMeasure7}${mealDetails[0].strIngredient7}</li>
                        <li class="li-ing">${mealDetails[0].strMeasure8}${mealDetails[0].strIngredient8}</li>
                        <li class="li-ing">${mealDetails[0].strMeasure9}${mealDetails[0].strIngredient9}</li>
                        <li class="li-ing">${mealDetails[0].strMeasure10}${mealDetails[0].strIngredient10}</li>
                        <li class="li-ing">${mealDetails[0].strMeasure11}${mealDetails[0].strIngredient11}</li>
                        <li class="li-ing">${mealDetails[0].strMeasure12}${mealDetails[0].strIngredient12}</li>
                        <li class="li-ing">${mealDetails[0].strMeasure13}${mealDetails[0].strIngredient13}</li>
                        <li class="li-ing">${mealDetails[0].strMeasure14}${mealDetails[0].strIngredient14}</li>
                        <li class="li-ing">${mealDetails[0].strMeasure15}${mealDetails[0].strIngredient15}</li>
                        <li class="li-ing">${mealDetails[0].strMeasure16}${mealDetails[0].strIngredient16}</li>
                        <li class="li-ing">${mealDetails[0].strMeasure17}${mealDetails[0].strIngredient17}</li>
                        <li class="li-ing">${mealDetails[0].strMeasure18}${mealDetails[0].strIngredient18}</li>
                        <li class="li-ing">${mealDetails[0].strMeasure19}${mealDetails[0].strIngredient19}</li>
                        <li class="li-ing">${mealDetails[0].strMeasure20}${mealDetails[0].strIngredient20}</li>
                    </ul>
                    <h3 id="tags">Tags:</h3>
                    <ul>
                        <li class="meal-type rounded-2">${tags[0]}</li>
                        <li class="meal-type rounded-2">${tags[1]}</li>
                        <li class="meal-type rounded-2">${tags[2]}</li>
                    </ul>
                    <a class="btn btn-success" href="${mealDetails[0].strSource}" target="_blank">Source</a>
                    <a class="btn btn-danger" href="${mealDetails[0].strYoutube}" target="_blank">Youtube</a>
                </div>
                </div>
    `

    document.getElementById('details-content').innerHTML = cartona;


    document.querySelectorAll('li').forEach((item)=>{
        if(item.innerText == "" ||item.innerText.includes(null) || item.innerText == 'undefined'){
            item.classList.add('d-none');
        }
      
    });

}
// -------------------- End Get Instructions API ---------------------------

// ---------------- Start-call Api by search name------------------ 


async function getMealsBySearchForName(name) {
    $('#loading').removeClass('d-none');
document.querySelector('.search').classList.remove('d-none');
document.querySelector('.meals').classList.add('d-none');
document.querySelector('.details').classList.add('d-none');
document.querySelector('.category').classList.add('d-none');
document.querySelector('.area').classList.add('d-none');
document.querySelector('.area-meals').classList.add('d-none');
document.querySelector('.ing').classList.add('d-none');
document.querySelector('.ingred-meal').classList.add('d-none');
document.querySelector('.contact-us').classList.add('d-none');
document.querySelector('.categories').classList.add('d-none');

    const api = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`);
    const response = await api.json();
   const finalResponse  = response.meals;
   searchedMeals = finalResponse;
   $('#loading').addClass('d-none');
   displayMealsByName(searchedMeals);

}

function displayMealsByName(searchedMeals) {
    let cartona=``;
    for (let i = 0; i < searchedMeals.length; i++) {
        cartona += ` <div class="col-md-3 mt-4" onclick=closeSideBar()>
        <div class="meal-img position-relative overflow-hidden" onclick="getMealDetails(${searchedMeals[i].idMeal})">
                <img src="${searchedMeals[i].strMealThumb}" alt="" class="w-100 rounded-3">
                <div class="overlay fw-bold d-flex align-items-center fs-4">${searchedMeals[i].strMeal}</div>        
        </div>
    </div>`
    }
    document.getElementById('Namedmeals-container').innerHTML = cartona;
}

// ---------------- End-call Api by search name------------------ 

// ---------------- Start-call Api by search letter------------------ 

async function getMealsBySearchForLetter(letter) {
    const api = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`);
    const response = await api.json();
   const finalResponse  = response.meals;
   searchedMealsLetter = finalResponse;
   displayMealsByName(searchedMealsLetter);

}

function displayMealsByLetter(searchedMealsLetter) {
    let cartona=``;
    for (let i = 0; i < searchedMealsLetter.length; i++) {
        cartona += ` <div class="col-md-3 mt-4"  onclick=closeSideBar()>
        <div class="meal-img position-relative overflow-hidden" onclick="getMealDetails(${searchedMealsLetter[i].idMeal})">
                <img src="${searchedMealsLetter[i].strMealThumb}" alt="" class="w-100 rounded-3">
                <div class="overlay fw-bold d-flex align-items-center fs-4">${searchedMealsLetter[i].strMeal}</div>        
        </div>
    </div>`
    }
    document.getElementById('Namedmeals-container').innerHTML = cartona;
}
$('.sideitem1').click(function (e) { 
    document.getElementById('Namedmeals-container').innerHTML="";
    document.getElementById('mealName').value="";
    document.getElementById('mealLetter').value="";
    getMealsBySearchForName();
    getMealsBySearchForLetter();
    let asideLeft = $('aside').css('left');
    if(asideLeft == '0px'){
    $('aside').animate({left:`${-menuWidth}`},1000);
    $('#openbtn').toggleClass('fa-times')};
    closeAnimate();

    });

// ---------------- End-call Api by search letter------------------ 

// ---------------- Start-call Api by categories------------------ 

async function getMealsByCategories() {
    $('#loading').removeClass('d-none');
    const api = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`);
    const response = await api.json();
   const finalResponse  = response.categories;
   categories = finalResponse;
   displayMealsByCategory(categories);
   $('#loading').addClass('d-none');

}

function displayMealsByCategory(categories) {
    document.querySelector('.categories').classList.remove('d-none');
    document.querySelector('.meals').classList.add('d-none');
    document.querySelector('.area').classList.add('d-none');
    document.querySelector('.ing').classList.add('d-none');
    document.querySelector('.ing').classList.add('d-none');
    document.querySelector('.contact-us').classList.add('d-none');
    document.querySelector('.search').classList.add('d-none');
    document.querySelector('.area-meals').classList.add('d-none');
    document.querySelector('.details').classList.add('d-none');
    document.querySelector('.category').classList.add('d-none');

    let cartona=``;
    for (let i = 0; i < categories.length; i++) {
        cartona += ` <div class="col-md-3 mt-4"  onclick=closeSideBar()>
        <div class="meal-img position-relative overflow-hidden" onclick="getCategoryMeals('${categories[i].strCategory}')"">
                <img src="${categories[i].strCategoryThumb}" alt="" class="w-100 rounded-3">
                <div class="overlay fw-bold d-flex align-items-center fs-4 rounded-2 flex-column">
                    <h3 class="qtitle">${categories[i].strCategory}</h3>
                    <p class="text-center small fs-6 query">${categories[i].strCategoryDescription.substr(0,120)}</p>
                </div>        
        </div>
    </div>`
    }
    document.getElementById('categorisedMeals').innerHTML = cartona;
}

$('.sideitem2').click(function (e) { 
getMealsByCategories();
let asideLeft = $('aside').css('left');
    if(asideLeft == '0px'){
    $('aside').animate({left:`${-menuWidth}`},1000);
    $('#openbtn').toggleClass('fa-times')};
    closeAnimate();
});

// ---------------- End-call Api by search categories------------------ 

// ---------------- Start-call Api by filter category------------------ 

async function getCategoryMeals(x) {
    $('#loading').removeClass('d-none');
    const api = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${x}`);
    const response = await api.json();
   const finalResponse  = response.meals;
   category = finalResponse;
   displayCategory(category);
   $('#loading').addClass('d-none');
}

function displayCategory(category) {
    document.querySelector('.category').classList.remove('d-none');

    document.querySelector('.categories').classList.add('d-none');
    document.querySelector('.area').classList.add('d-none');
    document.querySelector('.area-meals').classList.add('d-none');
    document.querySelector('.ing').classList.add('d-none');
    document.querySelector('.area').classList.add('d-none');
    document.querySelector('.ingred-meal').classList.add('d-none');
    document.querySelector('.contact-us').classList.add('d-none');
    document.querySelector('.meals').classList.add('d-none');
    document.querySelector('.details').classList.add('d-none');
    let cartona=``;
    if (category.length > 20) {
        category.length = 20;
    }
    for (let i = 0; i < category.length; i++) {
        cartona += ` <div class="col-md-3 mt-4"  onclick=closeSideBar()>
        <div class="meal-img position-relative overflow-hidden" onclick="getMealDetails(${category[i].idMeal})">
                <img src="${category[i].strMealThumb}" alt="" class="w-100 rounded-3">
                <div class="overlay fw-bold d-flex align-items-center fs-4 rounded-2 flex-column">
                    <h3>${category[i].strMeal}</h3>
                </div>        
        </div>
    </div>`
    }
    document.getElementById('category').innerHTML = cartona;
}

// ---------------- End-call Api by filter category------------------ 

// ---------------- Start-call Api by Area------------------ 

async function getAreas() {
    $('#loading').removeClass('d-none');
    const api = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`);
    const response = await api.json();
   const finalResponse  = response.meals;
   areas = finalResponse;
   displayAreas(areas);
   $('#loading').addClass('d-none');
}
function displayAreas(areas) {
    document.querySelector('.area').classList.remove('d-none');

    document.querySelector('.meals').classList.add('d-none');
    document.querySelector('.contact-us').classList.add('d-none');
    document.querySelector('.ing').classList.add('d-none');
    document.querySelector('.categories').classList.add('d-none');
    document.querySelector('.search').classList.add('d-none');   
    document.querySelector('.area-meals').classList.add('d-none');
    document.querySelector('.details').classList.add('d-none');
    document.querySelector('.category').classList.add('d-none');
    document.querySelector('.ingred-meal').classList.add('d-none');



 


    let cartona=``;
    for (let i = 0; i < areas.length; i++) {
        cartona += `<div class="col-md-3 text-white" onclick="getArea('${areas[i].strArea}')">
        <div class="item py-3"  onclick=closeSideBar()>
            <i class="fa-solid fa-house-laptop fa-4x"></i>
            <h3>${areas[i].strArea}</h3>
        </div>
    </div>`
    }
    document.getElementById('areas-container').innerHTML = cartona;
}
$('.sideitem3').click(function (e) { 
    getAreas();
    let asideLeft = $('aside').css('left');
    if(asideLeft == '0px'){
    $('aside').animate({left:`${-menuWidth}`},1000);
    $('#openbtn').toggleClass('fa-times')};
    closeAnimate();

    });
    
// ---------------- End-call Api by Area------------------ 

// ---------------- Start-call Api to get area meals------------------ 

async function getArea(region) {
    $('#loading').removeClass('d-none');
    const api = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${region}`);
    const response = await api.json();
   const finalResponse  = response.meals;
   region = finalResponse;
   displayAreaMeals(region);
   $('#loading').addClass('d-none');
}
function displayAreaMeals(region) {
document.querySelector('.area-meals').classList.remove('d-none');
document.querySelector('.area').classList.add('d-none');
document.querySelector('.categories').classList.add('d-none');
document.querySelector('.meals').classList.add('d-none');
document.querySelector('.details').classList.add('d-none');
document.querySelector('.search').classList.add('d-none');
document.querySelector('.category').classList.add('d-none');
document.querySelector('.ing').classList.add('d-none');
document.querySelector('.ingred-meal').classList.add('d-none');
document.querySelector('.contact-us').classList.add('d-none');




    let cartona=``;
    if (region.length > 20) {
        region.length = 20;
    }
    for (let i = 0; i < region.length; i++) {
        cartona += ` <div class="col-md-3 mt-4"  onclick=closeSideBar()>
        <div class="meal-img position-relative overflow-hidden" onclick="getMealDetails(${region[i].idMeal})">
                <img src="${region[i].strMealThumb}" alt="" class="w-100 rounded-3">
                <div class="overlay fw-bold d-flex align-items-center fs-4">${region[i].strMeal}</div>        
        </div>
    </div>`
    }
    document.getElementById('area-meals-container').innerHTML = cartona;
}
// ---------------- Start-call Api to get area meals------------------ 

// ---------------- Start-call Api by ingredients------------------ 

async function getingred() {
    $('#loading').removeClass('d-none');
    const api = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`);
    const response = await api.json();
   const finalResponse  = response.meals;
   ingredients = finalResponse;
    displayingred(ingredients);
    $('#loading').addClass('d-none');

}
function displayingred(ingredients) {
    document.querySelector('.ing').classList.remove('d-none');
    document.querySelector('.meals').classList.add('d-none');
    document.querySelector('.area').classList.add('d-none');
    document.querySelector('.contact-us').classList.add('d-none');
    document.querySelector('.categories').classList.add('d-none');
    document.querySelector('.search').classList.add('d-none');
    document.querySelector('.area-meals').classList.add('d-none');
    document.querySelector('.ingred-meal').classList.add('d-none');
    document.querySelector('.details').classList.add('d-none');
    document.querySelector('.category').classList.add('d-none');

    let cartona=``;
    for (let i = 0; i < 20; i++) {
        cartona += `<div class="col-md-3"  onclick=closeSideBar()>
        <div class="ingred-item" onclick="getingredMeal('${ingredients[i].strIngredient}')">
            <i class="fa-solid fa-drumstick-bite fa-4x"></i>
            <h3>${ingredients[i].strIngredient}</h3>
            <p>${ingredients[i].strDescription.substr(0,120)}</p>
        </div>
    </div>`
    }
    document.getElementById('ing-container').innerHTML = cartona;
}
$('.sideitem4').click(function (e) { 
    getingred();
    let asideLeft = $('aside').css('left');
    if(asideLeft == '0px'){
    $('aside').animate({left:`${-menuWidth}`},1000);
    $('#openbtn').toggleClass('fa-times')};
    closeAnimate();
    });
    

// ---------------- End-call Api by ingredients------------------ 

// ---------------- Start-call Api by ingredient-meal ------------------ 

async function getingredMeal(ingredMeal) {
    $('#loading').removeClass('d-none');
    const api = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredMeal}`);
    const response = await api.json();
   const finalResponse  = response.meals;
   ingMeals = finalResponse;
   displayIngMeals(ingMeals);
   $('#loading').addClass('d-none');

}
function displayIngMeals(ingMeals) {
    document.querySelector('.ingred-meal').classList.remove('d-none');
    // document.getElementById('ing-container').classList.add('d-none');
     document.querySelector('.categories').classList.add('d-none');
document.querySelector('.meals').classList.add('d-none');
document.querySelector('.details').classList.add('d-none');
document.querySelector('.search').classList.add('d-none');
document.querySelector('.category').classList.add('d-none');
document.querySelector('.area').classList.add('d-none');
document.querySelector('.area-meals').classList.add('d-none');
document.querySelector('.ing').classList.add('d-none');
document.querySelector('.contact-us').classList.add('d-none');


    let cartona=``;
    if (ingMeals.length > 20) {
        ingMeals.length = 20;
    }
    for (let i = 0; i < ingMeals.length; i++) {
        cartona += ` <div class="col-md-3 mt-4"  onclick=closeSideBar()>
        <div class="meal-img position-relative overflow-hidden" onclick="getMealDetails(${ingMeals[i].idMeal})">
                <img src="${ingMeals[i].strMealThumb}" alt="" class="w-100 rounded-3">
                <div class="overlay fw-bold d-flex align-items-center fs-4">${ingMeals[i].strMeal}</div>        
        </div>
    </div>`
    }
    document.getElementById('ingred-meals-container').innerHTML = cartona;
}
// ---------------- End-call Api by ingredient-meal ------------------ 

// ------------------Contact-US------------------------------------

let inputName = document.getElementById('name');
let inputEmail = document.getElementById('email');
let inputPhone = document.getElementById('phone');
let inputAge = document.getElementById('age');
let inputPassword = document.getElementById('password');
let inputRepassword = document.getElementById('repassword');

$('.sideitem5').click(function (e) { 
    document.querySelector('.contact-us').classList.remove('d-none');
    document.querySelector('.meals').classList.add('d-none');
    document.querySelector('.ing').classList.add('d-none');
    document.querySelector('.area').classList.add('d-none'); 
    document.querySelector('.categories').classList.add('d-none');
    document.querySelector('.search').classList.add('d-none');
    document.querySelector('.details').classList.add('d-none');
    document.querySelector('.category').classList.add('d-none');
    document.querySelector('.ingred-meal').classList.add('d-none');
    document.querySelector('.area-meals').classList.add('d-none');
    inputName.value="";
    inputEmail.value="";
    inputPhone.value="";
    inputAge.value="";
    inputPassword.value="";
    inputRepassword.value="";
    closeAnimate();
    let asideLeft = $('aside').css('left');
    if(asideLeft == '0px'){
    $('aside').animate({left:`${-menuWidth}`},1000);
    $('#openbtn').toggleClass('fa-times')};
    });

function nameValidation() {
    let regx= /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z])$/;
    if (regx.test(inputName.value) || inputName.value == "") {
        document.querySelector('.name-alert').classList.add('d-none');
        if (regx.test(inputName.value)) {
        document.querySelector('.name-alert').classList.add('d-none');
        return true;
        }

    }

    else{
        document.querySelector('.name-alert').classList.remove('d-none');
        return false;
    }
    
}
function emailValidation() {
    let regx = /^\S+@\S+\.\S+$/;
    if (regx.test(inputEmail.value) || inputEmail.value == "") {
        document.querySelector('.email-alert').classList.add('d-none');

        if (regx.test(inputEmail.value)) {
        document.querySelector('.email-alert').classList.add('d-none');
        return true;
            
        }
    }
    else{
        document.querySelector('.email-alert').classList.remove('d-none');
        return false;
    }
}
function phoneValidation() {
    let regx = /^(002)?01[125][0-9]{8}$/;
    if (regx.test(inputPhone.value) || inputPhone.value == "") {
        document.querySelector('.phone-alert').classList.add('d-none');
        if (regx.test(inputPhone.value)) {
        document.querySelector('.phone-alert').classList.add('d-none');
        return true;
            
        }
    }
    else{
        document.querySelector('.phone-alert').classList.remove('d-none');
        return false;
    }
}
function ageValidation() {
    let regx = /^([1-9][0-9]{0,1})$/;
    if (regx.test(inputAge.value) || inputAge.value == "") {
        document.querySelector('.age-alert').classList.add('d-none');
        if (regx.test(inputAge.value)) {
        document.querySelector('.age-alert').classList.add('d-none');
        return true;
            
        }
        

    }
    else{
        document.querySelector('.age-alert').classList.remove('d-none');
        return false;
    }
}
function passwordValidation() {
    let regx = /^(?=.*\d).{8,}$/;
    if (regx.test(inputPassword.value) || inputPassword.value == "") {
        document.querySelector('.password-alert').classList.add('d-none');
        if (regx.test(inputPassword.value)) {
        document.querySelector('.password-alert').classList.add('d-none');
        return true;
            
        }
    }
    else{
        document.querySelector('.password-alert').classList.remove('d-none');
        return false;

    }
}
function repasswordValidation() {
    if (inputPassword.value == inputRepassword.value) {
        document.querySelector('.repassword-alert').classList.add('d-none');
        return true;
    }
    else{
        document.querySelector('.repassword-alert').classList.remove('d-none');
        return false;

    }
}

function checkValid() {
    if (nameValidation() && emailValidation() && phoneValidation() && ageValidation() && passwordValidation() && repasswordValidation()) {
        document.getElementById('submit').classList.remove('disabled');
        return true;
        
    }
    else{
        document.getElementById('submit').classList.add('disabled');
        return false;
    }
}

let x =setInterval(()=>{
    checkValid();
},1000)

(function contniueValid() {
    if (checkValid()) {
       clearInterval(x);
    }
    else{
        setInterval(()=>{
            checkValid();
        },1000)
    }
})();


// ----------------- End-Contact-US------------------------------------



