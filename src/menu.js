import dinText from "./assets/menu2edit.png"
import brkText from "./assets/breakfast2.png"
import { indexOf } from "lodash";

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

function dinner(){
    const din=document.createElement('div');
    const dinImg=document.createElement('div');
    const img=document.createElement('img');
    const dinMen=document.createElement('div');

    din.className='dinner';
    dinImg.className='dinnerText';
    img.src=dinText;
    img.alt='Dinner Text';
    dinMen.className='dinnerMenu';

    // dinner menu pages
    const pageOne=document.createElement('div');
    const pageTwo=document.createElement('div');
    pageOne.className='dinner1';
    pageTwo.className='dinner2';

    
    let name=document.createElement('h2');
    let cost=document.createElement('span');
    let info=document.createElement('p');
    cost.className='price';

    // appetizers for page one
    let apps= (name, cost, info) =>{
        const starters=document.createElement('div');
        const appTitle=document.createElement('h1');
        starters.className='starters';
        appTitle.textContent='Starters';

        // This was made into an object for organization purposes. All lists should be tied to one object
        let description={
            label: [
                'SOFT PRETZEL STICKS', 'SPINACH & ARTICHOKE DIP', 'PITA & HOUSE HUMMUS',
                'CHICKEN TENDERS', 'BUFFALO CHICKEN DIP', 'BATTERED CHEESE STICKS',
                'POTATO PANCAKE MIDGIES', 'NACHOS GRANDE', 'QUESADILLA'
            ],
            price: [
                '&ensp;9','&ensp;9','&ensp;8.5',
                '&ensp;9','&ensp;9','&ensp;9',
                '&ensp;8','&ensp;11','&ensp;10'
            ],
            desc:[
                'House beer cheese dip',
                'Toasted wheat or white pita or tri-colored totilla chips',
                'Toasted white or whole wheat pita',
                'Ranch, BBQ or Buffalo Sauce',
                'Toasted white or wheat pita, or Tri-Colored Tortillia chips',
                'With Marinara Sauce',
                'Served up with apple sauce and sourcream on the side',
                'Grilled Chicken or Chili. Jalapenos, olives, banana peppers & house blend shredded cheese',
                'Chicken, Portebella, or Steak: grilled onions and green peppers & house blend shredded cheese'
            ]
        }

        starters.appendChild(appTitle);

        for(let [index, item] of description.label.entries()){
            

            name.innerHTML=item;
            cost.innerHTML=description.price[index];
            info.textContent=description.desc[index];

            name.appendChild(cost);
            starters.appendChild(name);
            starters.appendChild(info);
        }
        return starters;
    }

    const side=()=>{
        const sides=document.createElement('div');
        const title=document.createElement('h1');
        title.textContent='Sides';
        sides.appendChild(title);

        let description={
            label:[
                'SEASONED WAFFLE FRIES',
                'SWEET POTATO FRIES',
                'BASKET OF FRENCH FRIES',
                'ONION RINGS',
                'STEAMED BROCCOLI OR COLE SLAW'
            ],
            price:[
                '&ensp;5', '&ensp;5', '&ensp;4.5: WITH CHEESE(5.5)',
                '&ensp;5.5', '&ensp;3.5'
            ]
        }

        
    }

    pageOne.appendChild(apps(name, cost, info));
    dinMen.appendChild(pageOne);
    dinImg.appendChild(img);
    din.appendChild(dinImg);
    din.appendChild(dinMen);

    return din;
}


export {alcohol, dinner}