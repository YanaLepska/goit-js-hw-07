const items = document.querySelectorAll(".item");

console.log(`Number of categories: ${items.length}`);


items.forEach(elem => {
const heading = elem.querySelector('h2').textContent;
const valueOfItem = elem.querySelectorAll('li').length;
console.log(`Categoty:`, heading);
console.log(`Elements:`, valueOfItem);
});