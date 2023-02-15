
// Hiding options on clicking the categories

let categoryOptions = document.querySelector('.category-options');
let selectCategoryClick = document.querySelector('.select-category-click');
let selectCategoryIcon = document.querySelector('.select-category-icon');

selectCategoryClick.addEventListener('click', function () {

  categoryOptions.classList.toggle('hidden');

});


// Hiding the categories drop down on clicking outside it
window.onclick = function (event) {
  if (!event.target.matches('.select-category-click')) {
    categoryOptions.classList.add('hidden');
  }

  // changing arrow icon
  if (categoryOptions.classList.contains('hidden')) {
    selectCategoryIcon.attributes[0].value = "chevron-down-outline"
  } else {
    selectCategoryIcon.attributes[0].value = "chevron-up-outline"
  }

}

// Inserting the categories
const categories = ["category 1", "category 2", "category 3", "category 4", "category 5", "category 6", "category 8", "category 9", "category 10"];

console.log(document.documentElement);

categories.forEach(function (categoryName) {
  const categoryElement = document.createElement('div');
  categoryElement.classList.add('category-option');
  categoryElement.innerHTML = `<span>${categoryName}</span>`;
  categoryOptions.append(categoryElement);
});

//Displaying category option text in categories text box on selecting it

let categoryText = document.querySelector('.category-text');
let categoryOption = document.querySelectorAll('.category-option');


categoryOption.forEach(function (option) {
  option.addEventListener('click', function () {
    categoryText.textContent = option.textContent;
  });
});


//  Changing layout on clicking the search button and logo icon

const searchButton = document.querySelector('.btn--search');
const mainSection = document.querySelector('main');
const logoIcon = document.querySelector('.logo');
const articleSection = document.querySelector('.section-articles');

searchButton.addEventListener('click', function () {

  mainSection.classList.add('main-new-layout');
  articleSection.style.display = "grid";

});

logoIcon.addEventListener('click', function () {
  mainSection.classList.remove('main-new-layout');
  articleSection.style.display="none";

});

// Clicking the icons

const featureIcons = document.querySelectorAll('.feature-icons');

featureIcons.forEach(function(featureIcon){
  featureIcon.addEventListener('click',function(e){

    if(e.target.classList.contains('fa-share')||!e.target.classList.contains('fa-solid')) return;
  
    e.target.classList.toggle('fill');
    console.log('clicked');
  
  });
});












