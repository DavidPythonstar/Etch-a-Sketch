let container = document.querySelector('.container');
let number = 10;
let numberOfElements = number * number;
let space = 100 / number;
let color = 'red';

console.log(color)

console.log(space);

for (let i = 0; i < numberOfElements; i++) {
  let div = document.createElement('div');
  div.classList.add("items");
  container.appendChild(div);
}
function cselect()
{
  color = document.querySelector('#color').value;
}

let items = document.querySelectorAll('.items');

items.forEach(function(item) {
  item.style.width = space + '%';   // Include 'px' for width
  item.style.height = space + '%';  // Include 'px' for height

  item.addEventListener('mouseover',()=>{
    item.style.backgroundColor = color;
  })
  
});
