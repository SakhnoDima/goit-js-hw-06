const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

 const listElem1 = document.createElement("li");
 listElem1.textContent = 'Potatoes';
 listElem1.classList.add("item");

const listElem2 = document.createElement("li");
listElem2.textContent = 'Mushrooms';
listElem2.classList.add("item");

const listElem3 = document.createElement("li");
listElem3.textContent = 'Garlic';
listElem3.classList.add("item");

const listElem4 = document.createElement("li");
listElem4.textContent = 'Tomatos';
listElem4.classList.add("item");

const listElem5 = document.createElement("li");
listElem5.textContent = 'Herbs';
listElem5.classList.add("item");

const listElem6 = document.createElement("li");
listElem6.textContent = 'Condiments';
listElem6.classList.add("item");


const ingredientsToAdd = document.querySelector('#ingredients')
ingredientsToAdd.append(listElem1, listElem2, listElem3, listElem4, listElem5, listElem6)

console.log(ingredientsToAdd);
//?==========================================================
// const newArr =[];

// ingredients.forEach(({element}) => {  
//   const listElem = document.createElement("li");
//   listElem.textContent = element;
//   listElem.classList.add("item");
//   newArr.push(listElem);
// })
// console.log(newArr);
// const newArrToStr = newArr.join(",")
// console.log(newArrToStr);

// const ingredientsToAdd2 = document.querySelector('#ingredients2')
// ingredientsToAdd2.append(newArrToStr)