
export default function ai(){
    const aiPage=document.createElement('div');
    const aiComingSoon=document.createElement('h1');

    aiPage.className='aiMain';
    aiComingSoon.className='comingSoon';

    aiComingSoon.textContent='Coming Soon!'

    aiPage.appendChild(aiComingSoon);

    return aiPage;
}

