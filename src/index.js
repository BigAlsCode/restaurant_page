import "./styles.css"
import {homeSplash, homeMessage} from "./home.js";
import { alcohol, dinner } from "./menu.js";

console.log("The page is up and running")

let content=document.getElementById('content')

content.appendChild(homeSplash());
content.appendChild(homeMessage());
content.appendChild(alcohol());
content.appendChild(dinner());
