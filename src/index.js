import "./styles.css"
import {homeSplash} from "./home.js";

console.log("The page is up and running")

let content=document.getElementById('content')

content.appendChild(homeSplash());

