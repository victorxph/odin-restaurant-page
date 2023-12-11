import loadHomePage from './home-page'
import loadMenuPage from './menu';

import addrImg from './images/end-la-bonnelli.jpg'

let loadContactPage = function(){
    let content = document.querySelector('#content');

    content.innerHTML = `<h1>La Bonnelli</h1>
        <nav>
            <button class="home-btn">Home</button>
            <div class="separator">
            </div><button class="menu-btn">Menu</button>
            <div class="separator">
            </div><button class="contact-btn">Contact</button>
        </nav>

        <section class="contact">
            <div class="number">📞 777 777 777</div>
            <div class="addr">🏠 Corso Vittorio Emanuele II, Milan, Italy</div>
            <img class="google-addr" src="${addrImg}" alt="Google maps addres">
        </section>`

	let homeBtn = document.querySelector('.home-btn');
    homeBtn.addEventListener('click', loadHomePage);
	let menuBtn = document.querySelector('.menu-btn');
    menuBtn.addEventListener('click', loadMenuPage);

}

export default loadContactPage;