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

    let drinkNames=['bloody mary', 'cappys cosmo', 'moscow mule', 
                    'john daly', 'dark and stormy', 'mangaria', 
                    'lavender taquini', 'big apple', 'elderflower fizz'];

    let drinkDesc=[
        "Tito's Vodka, secret house recipe, with or without horseradish, served with lemon",
        "Smirnoff Rasberry Vodka, Cointreau, Rose's Sweet Lime, dash of bitters, served in a copper mug",
        "Tito’s vodka, Jamaica’s Finest ginger beer (NA), Rose’s sweet lime, dash of bitters, served in a copper mug.",
        "Absolut Citron, lemonade, unsweetened iced tea, served in a tall glass.",
        "Meyer’s dark rum, Jamaica’s Finest ginger beer (NA), Rose’s sweet lime, served in a copper mug.",
        "Frontera Cabernet-Merlot blend, house vodka, triple sec, orange juice, grenadine, Rose’s sweet lime.",
        "Hornitos Plata tequila, St. Germain, Chambord, sours mix, served up.",
        "CROWN ROYAL APPLE, Sweet and Dry Vermouth, bitters, served up or on the rocks with a cinnamon stick",
        "Hendricks Gin, St. Germain, soda, fresh lemon."
    ];

    let drinkList=drinkNames.map((x, i)=>[x, drinkDesc[i]]);
    

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

    const drinks=document.createElement('div');
    const cocktails=document.createElement('h1');
    cocktails.className='cocktails';
    cocktails.textContent=`Classic Cappys Cocktails`;
    drinks.className='drinks';
    drinks.appendChild(cocktails);

    for (let drink of drinkList){
        // classless container to contain all elements
        const cont=document.createElement('div');
        const title=document.createElement('h2');
        const titleP=document.createElement('span');
        const desc=document.createElement('p');

        title.textContent=drink[0];
        desc.textContent=drink[1];
        titleP.className='price';

        title.appendChild(titleP);
        cont.appendChild(title);
        cont.appendChild(desc);
        drinks.appendChild(cont);
    }

    boozeMen.appendChild(beers);
    boozeMen.appendChild(drinks);
    booze.appendChild(boozeMen);
    return booze;
}

export {alcohol}