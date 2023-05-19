//The code from line 3 to 18 works for the list items it just removes the active link of the first element and then adds it to the clicked list item .

var listItems = document.querySelectorAll(".list-items")
 
function removeActiveClass() {
    var activeItem = document.querySelector('.active');
    activeItem.classList.remove('active');
  }
  
function addActiveClass() {
    removeActiveClass();
    this.classList.add('active');
  }
  
listItems.forEach(function(item) {
    item.addEventListener('click', addActiveClass);
  });
  
  
  
  
  
  
  
