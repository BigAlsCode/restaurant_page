import "./styles.css"
import testImage from "./assets/testRemove.png"

const image=document.createElement('img');
image.src=testImage;
console.log("The page is up and running")

const content=document.getElementById("content")
content.appendChild(image)