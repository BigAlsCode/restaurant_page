import headline from "./assets/headlinehome4.png";

 function homeSplash(){
    const homeBack=document.createElement('div');
    homeBack.className='home-background';
    const container=document.createElement('div');
    container.className='container';

    const image=document.createElement("img");
    image.src=headline;
    image.alt="home title";
    container.appendChild(image);
    homeBack.appendChild(container);

    return homeBack;
}

function homeMessage(){
    
}

export{homeSplash}

