var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');
// Add event listener
form.addEventListener('submit', addItem)

// Delete event 
itemList.addEventListener('click', removeItem);
// filter event
filter.addEventListener('keyup', filterItem);

// Create the function
function addItem (e){
    e.preventDefault();

 // Target the input field with value
  var newItem = document.getElementById('item').value;
 //Create new li
  var li = document.createElement('li');
  // Add class to li
  li.className = 'list-group-item';

  li.appendChild(document.createTextNode(newItem));
  // Create a delete button
  var deleteBtn =  document.createElement('button');
  // Addd class to the deletebtn
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
  // Append text node
  deleteBtn.appendChild(document.createTextNode('Remove'));
  // Append button to li
  li.appendChild(deleteBtn);
  itemList.appendChild(li);
    }
  // Remove item
    function removeItem(e) {
    if(e.target.classList.contains('delete')) {
    if(confirm('are you sure?')) {
        var li = e.target.parentElement;
        itemList.removeChild(li);
    }
    }
    }

    // Filter item
    function filterItem(e) {
    // Convert text to lowercase
    var text = e.target.value.toLowerCase();
  
    //Get the lis
  var items = itemList.getElementsByTagName('li');
  // convert to an array
  Array.from(items).forEach(function(item) {
      var itemName = item.firstChild.textContent;
      if (itemName.toLowerCase().indexOf(text) != -1){
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
       
    })  
  }
