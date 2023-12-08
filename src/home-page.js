const loadPage = function (){
    let content = document.querySelector('#content');

    //h1
    let h1 = document.createElement('h1');
    h1.textContent = 'La Bonnelli';
    content.appendChild(h1);
    
    //nav
    let nav = document.createElement('nav');
    content.appendChild(nav);

    let homeBtn = document.createElement('button');
    homeBtn.textContent = 'Home';
    nav.appendChild(homeBtn);

    let separator = document.createElement('div');
    separator.classList.add('separator');
    nav.appendChild(separator);
    
    let menuBtn = document.createElement('button');
    menuBtn.textContent = 'Menu';
    nav.appendChild(menuBtn);
    
    separator = document.createElement('div');    
    separator.classList.add('separator');
    nav.appendChild(separator)

    let contactBtn = document.createElement('button');
    contactBtn.textContent = 'Contact';
    nav.appendChild(contactBtn);

    //About
    let about = document.createElement('div');
    about.classList.add('about');
    content.appendChild(about);

    let aboutPara = document.createElement('p');
    aboutPara.textContent = "Welcome to La Bonnelli, where passion for authentic Italian pizza meets a commitment to quality and tradition. Established with love and dedication, La Bonnelli is more than just a pizzeria; it's a celebration of Italian culinary artistry.";
    about.appendChild(aboutPara);

    //Hours
    let hours = document.createElement('div');
    hours.classList.add('hours');
    content.appendChild(hours);

    let hoursH2 = document.createElement('h2');
    hoursH2.innerHTML = '<div class="emoji">🍕</div>Hours'
    hours.appendChild(hoursH2);

    let weekDay = document.createElement('div');
    weekDay.classList.add('week-day');
    let dayLabel = document.createElement('label');
    dayLabel.setAttribute('for', 'monday');
    dayLabel.textContent = 'Monday to Thursday';
    hours.appendChild(dayLabel);
    let weekDayUl = document.createElement('ul');
    
    for(i = 0; i < 3; i++) {
        weekDay = document.createElement('div');
        weekDay.classList.add('week-day');
    }


    
    console.log(content)
};

export default loadPage;