export var myName="Mine";

export function pageViewName(pgView) {
    $("#app").html(eval(pgView))
    console.log(pgView);
}

export function showContent()
{
    $("#app").html(homePage);
}

/* export function pageViewReset() {
    if(pgView == ""){
        pageContent = "homeContent"
    }
} */

var homePage = `
<div id="front_welcome">
<h1>Select The Right Service For You</h1>

<div>
    <img src="assets/welcome_1.png" alt="">
    <img src="assets/welcome_2.png" alt="">
    <img src="assets/welcome_3.png" alt="">
</div>
</div>

<div id="front_hero">

</div>

<div id="front_contact">
<i class="fa-solid fa-phone"></i>
<i class="fa-solid fa-envelope"></i>
<i class="fa-solid fa-message"></i>
</div>

<footer>
COPYRIGHT &copy 2022
</footer>
`;
var productsPage = `
<div id="products_header">
<h1>Our Products</h1>
</div>

<div id="product_interact">
<div id="products_list">
<h2>Categories</h2>
<ol>
    <li>ITEM</li>
    <li>ITEM</li>
    <li>ITEM</li>
    <li>ITEM</li>
    <li>ITEM</li>
    <li>ITEM</li>
    <li>ITEM</li>
    <li>ITEM</li>
    <li>ITEM</li>
    <li>ITEM</li>
    <li>ITEM</li>
</ol>
</div>

<div id="products_area">
<div id="products_promote">
<h2>VIEW OUR MOST RECENT PRODUCTS</h2>
</div>

<div id="products_grid">
    <div><img src="assets/item1.png" alt=""></div>
    <div><img src="assets/item2.png" alt=""></div>
    <div><img src="assets/item3.png" alt=""></div>
    <div><img src="assets/item4.png" alt=""></div>
    <div><img src="assets/item5.png" alt=""></div>
    <div><img src="assets/item6.png" alt=""></div>
    <div><img src="assets/item7.png" alt=""></div>
    <div><img src="assets/item8.png" alt=""></div>
    <div><img src="assets/item9.png" alt=""></div>
</div>
</div>
</div>

<footer>
COPYRIGHT &copy 2022
</footer>
`;
var servicesPage = `
<div id="services_hero">
<h1>What Can We Do For You Today</h1>
</div>

<div id="services_options">
    <img src="assets/welcome_1.png" alt="">
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id, repellendus voluptas. Dolor exercitationem quo veritatis obcaecati sequi ad laudantium ab autem natus nemo necessitatibus voluptates unde sunt quidem reiciendis, a quisquam amet.</p>
    <div></div>
    <img src="assets/welcome_2.png" alt="">
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id, repellendus voluptas. Dolor exercitationem quo veritatis obcaecati sequi ad laudantium ab autem natus nemo necessitatibus voluptates unde sunt quidem reiciendis, a quisquam amet.</p>
    <div></div>
    <img src="assets/welcome_3.png" alt="">
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id, repellendus voluptas. Dolor exercitationem quo veritatis obcaecati sequi ad laudantium ab autem natus nemo necessitatibus voluptates unde sunt quidem reiciendis, a quisquam amet.</p>
    <div></div>
</div>

<div id="services_compare">
    <h1>Our Partners</h1>
    <div id="services_grid">
        <div><img src="assets/logo1.png" alt=""></div>
        <div><img src="assets/logo2.png" alt=""></div>
        <div><img src="assets/logo3.png" alt=""></div>
        <div><img src="assets/logo4.png" alt=""></div>
        <div><img src="assets/logo5.png" alt=""></div>
        <div><img src="assets/logo6.png" alt=""></div>
    </div>
</div>

<footer>
COPYRIGHT &copy 2022
</footer>
`;
var contactPage = `
<div id="contact_header">
<h1>Contact Us</h1>
</div>

<div id="contact_options">
    <i class="fa-solid fa-phone"></i>
    <p>
    1.800.567.8901<br>
    1.812.123.4567
    </p>
    <i class="fa-solid fa-envelope"></i>
    <p>
    heartrite@hrcorp.org
    </p>
    <div>
    <form>
    <textarea name="message" placeholder="Place Your Question Here..."></textarea>
    </form>
    </div>
</div>

<footer>
COPYRIGHT &copy 2022
</footer>
`;