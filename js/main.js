var rate = '';
let ratingWrapper = document.querySelector('.rating-wrapper');
let spans = ratingWrapper.querySelectorAll('span');
let btn = document.querySelector('.submit');
spans.forEach(item=>{
    item.addEventListener('click',(e)=>{
        rateItem(e);
    })
});

btn.addEventListener('click', ()=>{
    thankYou();
});


rateItem = (e) =>{
    e.preventDefault();
    spans.forEach(e=>{
        e.style.backgroundColor = 'hsl(212, 19%, 26%)';
        e.style.color = 'hsl(216, 12%, 54%)';
    })
    let clickedRate = e.target;
    clickedRate.style.background = 'hsl(25, 97%, 53%)';
    clickedRate.style.color = 'white'; 
    clickedRate.classList.add('rateActive');

    var rate = clickedRate.innerText;

    
}

thankYou = () => {
    document.querySelector('.rate').style.display = 'none';
    document.querySelector('.thank-you').style.display = 'flex';

    let rate = document.querySelector('.rateActive').innerText;
    document.querySelector('#selected').innerHTML =
    `You selected ${rate} out of 5`;
}