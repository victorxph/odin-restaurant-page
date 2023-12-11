import loadMenuPage from './menu';
import loadContactPage from './contact';

const loadHomePage = function (){
    let content = document.querySelector('#content');
    content.innerHTML = ''

    //h1
    let h1 = document.createElement('h1');
    h1.textContent = 'La Bonnelli';
    content.appendChild(h1);
    
    //nav
    let nav = document.createElement('nav');
    content.appendChild(nav);

    let homeBtn = document.createElement('button');
    homeBtn.classList.add('home-btn');
    homeBtn.textContent = 'Home';
    nav.appendChild(homeBtn);

    let separator = document.createElement('div');
    separator.classList.add('separator');
    nav.appendChild(separator);
    
    let menuBtn = document.createElement('button');
    menuBtn.classList.add('menu-btn');
    menuBtn.textContent = 'Menu';
    nav.appendChild(menuBtn);
	menuBtn.addEventListener('click', loadMenuPage);
    
    separator = document.createElement('div');    
    separator.classList.add('separator');
    nav.appendChild(separator)
    
    let contactBtn = document.createElement('button');
    contactBtn.classList.add('contact-btn');
    contactBtn.textContent = 'Contact';
    nav.appendChild(contactBtn);
    contactBtn.addEventListener('click', loadContactPage)

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
    weekDay.id = 'monday';
    weekDay.innerHTML = `<label for="monday">Monday to Thrusday</label>
    <ul id="monday">
        <li>Lunch: 12:00 PM to 3:00 PM</li>
        <li>Dinner: 5:00 PM to 10:00 PM</li>
    </ul>`
    hours.appendChild(weekDay);

    for(let i = 0; i < 3; i++) {
        weekDay = document.createElement('div');
        weekDay.classList.add('week-day');

        switch(i){
            case 0:
            weekDay.id = 'friday'
            weekDay.innerHTML = `<label for="friday">Friday</label>
            <ul id="friday">
                <li>Lunch: 12:00 PM to 3:00 PM</li>
                <li>Dinner: 5:00 PM to 11:00 PM</li>
            </ul>`;
            hours.appendChild(weekDay);
            break;
        
            case 1:
            weekDay.id = 'saturday';
            weekDay.innerHTML = `<label for="saturday">Saturday</label>
            <ul id="saturday">
                <li>All-Day Dining: 12:00 PM to 11:00 PM</li>
            </ul>`;
            hours.appendChild(weekDay);
            break;
            
            case 2:
            weekDay.id = 'sunday';
            weekDay.innerHTML = `<label for="sunday">Sunday</label>
            <ul id="sunday">
                <li>All-Day Dining: 12:00 PM to 9:00 PM</li>
            </ul>`;
            hours.appendChild(weekDay);
            break;
        }
    }
    console.log(content)
};

export default loadHomePage;
