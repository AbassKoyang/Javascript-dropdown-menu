

// Get the select field element by its ID
let selectField = document.getElementById('selectField');

// Get the element that will display the selected option text
let selectText = document.getElementById('selectText');

// Get all the elements with class name 'options'
let options = document.getElementsByClassName('options');

// Get the list element by its ID
let list = document.getElementById('list');

let arrowIcon = document.getElementById('arrowIcon')


selectField.addEventListener('click', ()=>{
    arrowIcon.classList.toggle('rotate');
    list.classList.toggle('hide');
})

// Loop through each element in 'options'
for (let option of options) {
    // Add a click event listener to each 'option'
    option.addEventListener('click', function() {
        // Update the selectText content with the clicked option's text
        selectText.innerHTML = this.textContent;
        // Hide the dropdown menu and reset it back to default state
        list.classList.toggle('hide');
    });
}
