import dinText from "./assets/menu2edit.png"
import brkText from "./assets/breakfast2.png"
// import { indexOf } from "lodash";
// import { description } from "commander";

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

    // create all div elements for page one and page two of dinner menu
    const pageOneContainerNames=['starters', 'sides', 'soup', 'wings', 'salad', 'pizza'];
    const pageTwoContainerNames=['sandwich', 'burger', 'hoagie', 'kids'];

    let pageOneCont=[]

    for(let item of pageOneContainerNames){
        let container=document.createElement('div');
        container.className=item;
        pageOneCont.push(container);
    }

    

    // creates the recurring elements found in each section of the menu
    const elements=(title, price, desc)=>{
        const name=document.createElement('h2');
        const cost=document.createElement('span');
        const info=document.createElement('p')

        name.innerHTML=title;
        cost.innerHTML=price;
        info.textContent=desc;

        cost.className='price';

        
        return [name, cost, info];
    }


    let description={
        apps: {
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
        },
        sides:{
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
            ],
            desc:''
        },
        soups:{
            label:[
                'SOUP',
                'HOUSE CHILI'
            ],
            price:[
                '&ensp;Cup 5.5 : Bowl 6.5',
                '&ensp;Cup 5.5 : Bowl 7',
                'ADD CHEESE 0.75'
            ],
            desc:''
        },
        wings:{
            label:['DOZEN WINGS', '10 BONELESS WINGS'],
            price:['&ensp;14', '&ensp;10'],
            desc:""
        },
        salads:{
            label:[
                'GRILLED CHICKEN OR STEAK', 'CALIFORNIA SPRING', 'GREEK',
                'STRAWBERRY CHICKEN', 'CHICKEN TENDER SALAD', 'HOUSE SALAD'
            ],
            price:[
                '&ensp;12', '&ensp;12 (Add grilled chicken 14 | Grilled salmon 16)',
                '&ensp;12 (Add grilled chicken 14 | Grilled salmon 16)', '&ensp;13','&ensp;12',
                '&ensp;SMALL 5 | LARGE 6'
            ],
            desc:[
                'Seasoned Protien:Plain, Cajun, Buffalo or BBQ : Grilled peppers, onions, and mushroms on a bed of lettuce topped with house blended cheese and diced tomatoe',
                'Artichokes, roasted red peppers, zuchinni, cucumbers, black olives, red onions : served over Arcadia Spring Mix and topped with Bleu Crumble Cheese and Walnuts',
                'Roasted red peppers, black olives, artichoke hearts, cucumbers : served over Arcadia Spring Mix & topped with Feta Cheese',
                'Grilled chicken, strawberries, sliced apple : served over Arcadia Spring Mix and topped with craisins, walnuts and Bleu Crumble Cheese',
                'Crispy or grilled chicken in your choice of sauce(Plain, Buffalo, or Honey Siracha) : Diced tomatoes and house blend shredded cheese atop a bed of lettuce',
                'Fresh green peppers, mushrooms, sliced red onion and tomatoes atop a bed of lettuce'
            ]
        }
    };

    // menu functions to add names, prices and descriptions to menu pages
    (function(){
        const appTitle=document.createElement('h1');
        appTitle.textContent='Starters';

        pageOneCont[0].appendChild(appTitle);

        for(let [index, item] of description.apps.label.entries()){
            
            let [name, cost, info]=elements(item, description.apps.price[index], description.apps.desc[index])
            
            name.appendChild(cost);
            pageOneCont[0].appendChild(name);
            pageOneCont[0].appendChild(info);
        }    
    })();
    for(const key in description){
        console.log(description[key]);
        for(let index in description[key].label){
            console.log(description[key].label[index]);
            console.log(description[key].price[index]);
            if(description[key].desc[index]!==undefined)
                console.log(description[key].desc[index]);
        }
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

        for(let [index, item] of description.label.entries()){
            let [name, cost, info]=elements(item, description.price[index], null);

            name.appendChild(cost);
            sides.appendChild(name);
        }
        return sides;
    }

    const soups=()=>{
        const soup=document.createElement('div');
        const title=document.createElement('h1');
        soup.className='soup';
        title.textContent='Soups & Famous House Chili';
        soup.appendChild(title);

        let description={
            label:[
                'SOUP',
                'HOUSE CHILI'
            ],
            price:[
                '&ensp;Cup 5.5 : Bowl 6.5',
                '&ensp;Cup 5.5 : Bowl 7',
                'ADD CHEESE 0.75'
            ]
        }

        for(let [index, item] of description.label.entries()){
            let [name, cost, desc]=elements(item, description.price[index], '');

            name.appendChild(cost);
            soup.appendChild(name);
        }

        let [end, endSpan, info]=elements(null, description.price[description.price.length-1], null);
        end.appendChild(endSpan);
        soup.appendChild(end);
        return soup;
    }

    const wings=()=>{
        const wing=document.createElement('div');

    }

    pageOne.appendChild(pageOneCont[0]);
    pageOne.appendChild(side());
    pageOne.appendChild(soups());

    dinMen.appendChild(pageOne);
    dinImg.appendChild(img);
    din.appendChild(dinImg);
    din.appendChild(dinMen);

    return din;
}


export {alcohol, dinner}