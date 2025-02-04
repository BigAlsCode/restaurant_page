import "./styles.css"
import {homeSplash, homeMessage} from "./home.js";
import { alcohol, dinner, breakfast, events, contact} from "./menu.js";
console.log("The page is up and running");

const buttons=document.querySelectorAll('.direct');
const content=document.getElementById('content');
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
buttons.forEach(button=>{
    button.addEventListener('click',()=>{
        console.log(button.className);
        
        content.replaceChildren();
        switch (button.className){
            case 'menu':
                content.appendChild(alcohol());
                content.appendChild(dinner());
                content.appendChild(breakfast());
                content.appendChild(contact());
                break;
            case 'specialEvents':
                content.appendChild(events());
                content.appendChild(contact());
                break;
            default:
                content.appendChild(homeSplash());
                content.appendChild(homeMessage());
                content.appendChild(contact());
                break;
        }
    });
});
