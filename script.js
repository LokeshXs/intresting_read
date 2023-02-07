
// Hiding options on clicking the categories

let categoryOptions = document.querySelector('.category-options');
let selectCategoryClick = document.querySelector('.select-category-click');

selectCategoryClick.addEventListener('click',function(){
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
