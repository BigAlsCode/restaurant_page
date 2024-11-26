import dinMen from "./assets/menu2edit.png"
import brkMen from "./assets/breakfast2.png"

function alcohol(){
    const booze=document.createElement('div');
    const boozeMen=document.createElement('div');
    booze.className='beersImage';
    boozeMen.className='alcohol';
    boozeMen.id='alcohol';

    let beerList=["FATHEAD'S-HEAD HUNTER IPA", "TROEGS-PERPETUAL IPA", "ARSENAL-PUMPKIN CIDER", 
                  "GUINESS-STOUT", "SOUTHERN TIER-PUMKING", "MILLER LITE-LAGER", "YUENGLING LAGER",
                  "TROEG'S HOPRA IPA 12oz CANS", "BEER OF THE MONTH $4.5"];

    const beers=document.createElement('div');
    beers.className='beers';
    const headBeer=document.createElement('h1');
    headBeer.className='seasonal';
    headBeer.textContent='Seasonal Beer List';
    beers.appendChild(headBeer);

    for(let beer of beerList){
        const head=document.createElement('h2');
        const span=document.createElement('span');
        span.className='highlight';
        span.textContent=beer;
        head.appendChild(span);
        beers.appendChild(head);
    }

    boozeMen.appendChild(beers);
    booze.appendChild(boozeMen);
    return booze;
}

export {alcohol}