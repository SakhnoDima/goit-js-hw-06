const ulCategories = document.querySelectorAll(".item")
console.log(`Number of categories: ${ulCategories.length}`);

//=====================================================

ulCategories.forEach((elem) => console.log( `\nCategory:` , elem.firstElementChild.innerHTML, 
`\nElements:`, elem.lastElementChild.children.length))