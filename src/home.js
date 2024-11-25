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
    const homeMess=document.createElement('div');
    homeMess.className='home_message';
    const homeCont=document.createElement('div');
    homeCont.className='homeContainer';

    const header=document.createElement('h3');
    header.textContent='Cappys is known for Healthy, Fresh, and Reasonably Priced Food and Drinks.'
    const message=document.createElement('p');
    message.textContent=`
                    We use a Grease-Free Eco-Friendly Cooking system. Super-Heated Convection
                    Air is used to cook many traditionally fried items such as Hot Wings, Seasoned
                    Waffle Fries and Battered Cheese Sticks. We serve everything cooked to order
                    and all items are available for TAKE-OUT. We add new Daily Special items each day.
                    Hot Meatloaf Dinner, Pasta with Meat Sauce and Garlic Toast, Strawberry Chicken Salad
                    and Pot Roast are a few of the many items we offer in addition to our regular menu.
                    Cappy's offers a full breakfast menu every SAT & SUN 10am - 2pm.
                    Gourmet Omelettes, Corned Beef Hash, Pancakes, Raisin Bread French Toast,
                    Egg Whites, Yogurt, Oatmeal and much more. (Try one of our famous Bloody Marys).
                    Stop in and find out what smart Pittsburghers have known for years.
    `;

    homeCont.appendChild(header);
    homeCont.appendChild(message);
    homeMess.appendChild(homeCont);

    return homeMess;
}

export{homeSplash, homeMessage}

