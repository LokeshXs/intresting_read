
// Hiding options on clicking the categories

let categoryOptions = document.querySelector('.category-options');
let selectCategoryClick = document.querySelector('.select-category-click');

selectCategoryClick.addEventListener('click',function(){
  console.log('clicked');
  categoryOptions.classList.toggle('hidden');
});

window.onclick = function(event){
  if(!event.target.matches('.select-category-click')){
    categoryOptions.classList.add('hidden');
  }
}

//Displaying option text in categories text box on selecting it

let categoryText = document.querySelector('.category-text');
 let categoryOption = document.querySelectorAll('.category-option');


 categoryOption.forEach(function(option){
  option.addEventListener('click',function(){
    categoryText.textContent = option.textContent;
  });
 });


//  Changing layout on clciking the search button

const searchButton = document.querySelector('.btn--search');
const mainSection = document.querySelector('main');
const logoIcon = document.querySelector('.logo');



searchButton.addEventListener('click',function(){


    mainSection.classList.add('main-new-layout');
    
});

logoIcon.addEventListener('click',function(){
  mainSection.classList.remove('main-new-layout');

});







