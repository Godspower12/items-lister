var form = document.getElementById('addForm');
var listItems = document.getElementById('items');
var filter = document.getElementById('filter');

//Add an event listener to the addItem

form.addEventListener('submit', addItems);

//Create an event listener for removeItem
 listItems.addEventListener('click', removeItem);

// creat an event listener for filter 
filter.addEventListener('keyup', filterItems)
//Create a function for the addItems

function addItems(e) {
    e.preventDefault();

    // target the input field
    var newItem = document.getElementById('item').value;

    // create new li
    var li = document.createElement('li');
    // give the li a class
    li.className = 'list-group-item';

    // append li and and create a textnode
    li.appendChild(document.createTextNode(newItem));

    //create a delete button
    var deleteBtn = document.createElement('button');

    // Give the deleteBtn a class

    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

    // append deleteBtn and create a text node 
    deleteBtn.appendChild(document.createTextNode('remove'));

    // append deleteBtn to li
     li.appendChild(deleteBtn);

    // append li to listItem

    listItems.appendChild(li);
}

//create a function for removeItem

function removeItem(e) {
    if(e.target.classList.contains('delete')) {
    if(confirm('are you sure?')) {
        var li = e.target.parentElement;
        listItems.removeChild(li);
    }
    }
}

function filterItems(e) {
    // convert to lowercase
    var text = e.target.value.toLowerCase();

    // get all the lis
    var items = listItems.getElementsByTagName('li');

    // convert to an array
   Array.from(items).forEach(function(item) {
       var itemName = item.firstChild.textContent;
       if(itemName.toLowerCase().indexOf(text) != -1) {
           item.style.display = 'block';
       } else {
           item.style.display = 'none';
       }
   })
};