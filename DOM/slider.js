const leftBtn = document.querySelector("#left");
const rightBtn = document.querySelector("#right");
const items = document.querySelector('#items');
// const computedStyles = getComputedStyle(items);
// const item = document.querySelectorAll(".item");


const loop = (direction, e) => {
  e.preventDefault();

  if (direction == "right") {
    items.appendChild(items.firstElementChild);
  } else {
    items.insertBefore(items.lastElementChild, items.firstElementChild);
  }
}



rightBtn.addEventListener("click", (e) => {
  loop("right", e);
})

leftBtn.addEventListener("click", (e) => {
  loop("left", e);
})

// const minRight = 0;
// const itemWidth = getComputedStyle(item[0]).width; 
// const step = parseInt(itemWidth);
// const preShownItems = 300 / step;
// const maxRight = (item.length - preShownItems) * step;
// let currentRight = 0;

// items.style.right = currentRight;

// right.addEventListener("click", (e) => {
//   e.preventDefault();

//   if(currentRight < maxRight) {
//     currentRight += step;
//     items.style.right = `${currentRight}px`;
//   }
// }) 

// left.addEventListener("click", (e) => {
//   e.preventDefault();

//   if(currentRight > minRight) {
//     currentRight -= step;
//     items.style.right = `${currentRight}px`;
//   }
// })

////////////////////////////////////////////////////////

// rightBtn.addEventListener("click", (e) => {
//   e.preventDefault();
//   let currentRight = parseInt(computedStyles.right);

//   if (currentRight < 500) {   
//     items.style.right = `${currentRight + 100}px`;
//   }
// });

// leftBtn.addEventListener("click", (e) => {
//   e.preventDefault();
//   let currentRight = parseInt(computedStyles.right);

//   if (currentRight > 0) {   
//     items.style.right = `${currentRight - 100}px`;
//   }
// });