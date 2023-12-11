import loadHomePage from './home-page';
import loadContactPage from './contact';

const loadMenuPage = function () {
    let content = document.querySelector('#content');
    
    content.innerHTML = `<h1>La Bonnelli</h1>
    <nav><button class="home-btn">Home</button><div class="separator"></div><button class="menu-btn">Menu</button><div class="separator"></div><button class="contact-btn">Contact</button></nav>
    <section>
        <h2>Pizzas</h2>

        <div class="dish">
            <h3>Margherita</h3>
            <p>Classic pizza with tomato, mozzarella, and basil.</p>
            <p>Price: $10.99</p>
        </div>

        <div class="dish">
            <h3>Pepperoni</h3>
            <p>Pizza with tomato, mozzarella, and pepperoni slices.</p>
            <p>Price: $12.99</p>
        </div>
        
        <div class="dish">
            <h3>Vegetarian</h3>
            <p>Loaded with fresh vegetables, tomato, and mozzarella.</p>
            <p>Price: $11.99</p>
        </div>

        <div class="dish">
            <h3>Hawaiian</h3>
            <p>Ham, pineapple, tomato, and mozzarella.</p>
            <p>Price: $13.99</p>
        </div>

        <div class="dish">
            <h3>Quattro Formaggi</h3>
            <p>A blend of four cheeses: mozzarella, gorgonzola, parmesan, and fontina.</p>
            <p>Price: $14.99</p>
        </div>

        <div class="dish">
            <h3>Calzone</h3>
            <p>Folded pizza with tomato, mozzarella, ham, and mushrooms.</p>
            <p>Price: $15.99</p>
        </div>

        <div class="dish">
            <h3>BBQ Chicken</h3>
            <p>Grilled chicken, BBQ sauce, red onion, and mozzarella.</p>
            <p>Price: $14.99</p>
        </div>

        <div class="dish">
            <h3>Seafood Delight</h3>
            <p>Mixed seafood, tomato, mozzarella, and garlic.</p>
            <p>Price: $16.99</p>
        </div>
    </section>`

	let homeBtn = document.querySelector('.home-btn');
    homeBtn.addEventListener('click', loadHomePage);
	let contactBtn = document.querySelector('.contact-btn');
    contactBtn.addEventListener('click', loadContactPage);
}

export default loadMenuPage;
