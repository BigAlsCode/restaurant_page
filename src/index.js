import "./styles.css"
import {homeSplash, homeMessage} from "./home.js";
import { alcohol, dinner, breakfast, events, contact} from "./menu.js";

console.log("The page is up and running");
// Main div container for each page
const content=document.getElementById('content');

const links=document.querySelectorAll('.direct')
const menuDropDown=document.querySelector('.menu');
const dropDownCont=document.querySelector('.dropdown__menu');

(()=>{
    content.appendChild(homeSplash());
    content.appendChild(homeMessage());
    content.appendChild(contact());
})();

menuDropDown.addEventListener('click', ()=>{
    //get menu & remove hide class
    dropDownCont.classList.toggle('hide')

});

window.addEventListener('click', (e)=>{
    if(e.target!==menuDropDown){
        if(!dropDownCont.classList.contains('hide')){
            dropDownCont.classList.add('hide');
        }
    }
});


// Loads the webpage clicked on
links.forEach(link=>{
    link.addEventListener('click',()=>{
        console.log(link.className);
    });
});
