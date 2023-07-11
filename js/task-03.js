const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
// ? ====================================================

const elemToAdd = images
.map(({url, alt})  => `<li class="list-items">  <img src=${url} alt=${alt}  height=200 width=350 ></img>    </li>` )
.join("");


const ulForInsert = document.querySelector(".gallery");
ulForInsert.insertAdjacentHTML("afterbegin", elemToAdd);

ulForInsert.style.display = "flex";
ulForInsert.style.gap = "10px";

const classForLi = document.querySelectorAll(".list-items");

classForLi.forEach(elem => elem.style.display = "block");