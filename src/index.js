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

// Function to determine what page to load
function loadPage(link){
    // scroll to the top of the page if not already there
    window.scrollTo({top:0, behavior:'smooth'});

    // executes the functions of menu.js and home.js
    // based on the id given in the link argument
    switch(link.id){
        case 'specialEvents':
            content.replaceChildren();
            content.appendChild(events());
            break;

        case 'drinks':
            content.replaceChildren();
            content.appendChild(alcohol());
            break;

        case 'dinner':
            content.replaceChildren();
            content.appendChild(dinner());
            break;

        case 'breakfast':
            content.replaceChildren();
            content.appendChild(breakfast());
            break;

        case 'about':
            document.querySelector('footer').scrollIntoView({behavior:'smooth'});
            break;

        default:
            content.replaceChildren();
            content.appendChild(homeSplash());
            content.appendChild(homeMessage());
            break;
    }
    content.appendChild(contact());
}

// Loads the webpage clicked on
links.forEach(link=>{
    link.addEventListener('click',()=>{
        loadPage(link);
    });
});
