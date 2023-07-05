// The filter() method returns a new array with all elements that pass the test defined by the given function


const ul = document.querySelector('#todo-list');

// Create a repeatable function that adds a list element, accepting label and category as arguments
function appendListElement(label, category){
   // create the list element
   const li = document.createElement('li');

   // Add the label to the list item
   li.innerHTML = label;

   // Add a class to the list item (from the category)
   li.classList.add(category);

   // Append the li to the ul element
   ul.appendChild(li);
}

for (
    let i = 0; // Expression 1 is executed (one time) before the execution of the code block. Sets a variable before the loop starts.
    i < todoList.length; // Expression 2 defines the condition for executing the code block.
    i++ //Expression 3 is executed (every time) after the code block has been executed. Increases a value each time the code is executed.
    ){
    appendListElement(todoList[i].label, todoList[i].category);
}

function filterByCategory(){
    // return an array filtered by the category that has been clicked
    // replace the list that is displayed on the page
 
    const chosenCategory = this.innerHTML.toLowerCase(); // in a function, 'this' refers to a global object

    const newArray = todoList.filter(function(item, i){ 
        return item.category === chosenCategory;
    })
    console.log(newArray);

    ul.innerHTML = '';

    for(let i = 0; i < newArray.length; i++){  
        appendListElement(newArray[i].label, newArray[i].category); // adding both label and category
    }
}

// event listener
const buttons = document.querySelectorAll('.filter');
console.log(buttons);

for(let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener('click', filterByCategory ); // when clicking, function filterByCategory starts running
}

