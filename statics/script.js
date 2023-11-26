let container = document.querySelector('.container');
let number = 10; // Initial value
let space = 100 / number;

console.log(space);

// Function to create the elements based on the current number
function createElements() {
  // Clear the container
  container.innerHTML = '';

  // Calculate the new space value
  space = 100 / number;

  // Create new elements
  if (number <=100)
  {
  for (let i = 0; i < number * number; i++) 
    {
      let div = document.createElement('div');
      div.classList.add("items");
      container.appendChild(div);
    }
  }
  else
  {
    alert("You cant put more than 100")
    number = 99;
  }

  // Update the styles for the new elements
  let items = document.querySelectorAll('.items');
  items.forEach(function (item) {
    item.style.width = space + '%';
    item.style.height = space + '%';

    item.addEventListener('mouseover', () => {
      item.style.backgroundColor = document.querySelector('#color').value;
    });
  });
}

// Add an event listener to the number input field
document.querySelector('#number').addEventListener('input', function () {
  // Get the selected number value from the input feild
  number = parseInt(this.value);
  console.log(number);

  // Recreate the elements based on the new number
  createElements();
});

// Add an event listener to the color input field
document.querySelector('#color').addEventListener('input', function () {
  // Loop through each item and update the background color
  let items = document.querySelectorAll('.items');
  items.forEach(function (item) {
    item.addEventListener('mouseover', () => {
      item.style.backgroundColor = this.value;
    });
  });
});

//first set of divs
createElements();
