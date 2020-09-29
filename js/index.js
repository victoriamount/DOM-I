const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


/*
* [ ] Create selectors by using any of the DOM element's methods
* [ ] Note that IDs have been used on all images. Use the IDs to update src path content
*/

const title = document.querySelector("title");

const headerNav = document.querySelectorAll("header a");
const headerPic = document.querySelector("#logo-img");
const headerNav1 = document.querySelector("header a:nth-of-type(1)");
const headerNav2 = document.querySelector("header a:nth-of-type(2)");
const headerNav3 = document.querySelector("header a:nth-of-type(3)");
const headerNav4 = document.querySelector("header a:nth-of-type(4)");
const headerNav5 = document.querySelector("header a:nth-of-type(5)");
const headerNav6 = document.querySelector("header a:nth-of-type(6)");

const ctaH1 = document.querySelector(".cta-text h1");
const ctaButton = document.querySelector(".cta-text button");
const ctaImg = document.querySelector("#cta-img");

const topTitle = document.querySelectorAll(".top-content h4");
console.log(topTitle);
const topText = document.querySelectorAll(".top-content p");

const middleImg = document.querySelector("#middle-img");

const bottomTitle = document.querySelectorAll(".bottom-content h4");
const bottomText = document.querySelectorAll(".bottom-content p");

const contactTitle = document.querySelector(".contact h4");
const contactText = document.querySelectorAll(".contact p");

const footerText = document.querySelector("footer p");

// * [ ] Using your selectors, update the content to match the example file.
// * [ ] Remember to update the src attributes on images

headerNav1.textContent = siteContent.nav["nav-item-1"];
headerNav2.textContent = siteContent.nav["nav-item-2"];
headerNav3.textContent = siteContent.nav["nav-item-3"];
headerNav4.textContent = siteContent.nav["nav-item-4"];
headerNav5.textContent = siteContent.nav["nav-item-5"];
headerNav6.textContent = siteContent.nav["nav-item-6"];


ctaH1.textContent = siteContent.cta.h1;
ctaButton.textContent = siteContent.cta.button;
ctaImg.src = "img/header-img.png";


topTitle[0].textContent = siteContent["main-content"]["features-h4"];
topTitle[1].textContent = siteContent["main-content"]["about-h4"];
topText[0].textContent = siteContent["main-content"]["features-content"];
topText[1].textContent = siteContent["main-content"]["about-content"];


middleImg.src = "img/mid-page-accent.jpg";


bottomTitle[0].textContent = siteContent["main-content"]["services-h4"];
bottomTitle[1].textContent = siteContent["main-content"]["product-h4"];
bottomTitle[2].textContent = siteContent["main-content"]["vision-h4"];
bottomText[0].textContent = siteContent["main-content"]["services-content"];
bottomText[1].textContent = siteContent["main-content"]["product-content"];
bottomText[2].textContent = siteContent["main-content"]["vision-content"];


contactTitle.textContent = siteContent.contact["contact-h4"];
contactText[0].textContent = "123 Way 456 Street";

contactText[1].textContent = "Somewhere, USA";
contactText[2].textContent = siteContent.contact["phone"];
const contactTextExtra = document.createElement("p");
contactTextExtra.textContent = siteContent.contact["email"];
document.querySelector(".contact").appendChild(contactTextExtra);


footerText.textContent = siteContent.footer.copyright;




/* 
* [ ] Change the color of the navigation text to be green.
* [ ] Utilize `.appendChild()` and `.prepend()` to add two new items to the navigation system. You can call them whatever you want.
*/

const navArray = document.querySelectorAll("nav a");
for (let i=0; i<navArray.length; i++) {
  navArray[i].style.color = "green";
}

const newNav1 = document.createElement("a");
const newNav2 = document.createElement("a");
newNav1.textContent = "New Link 1";
newNav2.textContent = "New Link 2";
document.querySelector("nav").prepend(newNav1);
document.querySelector("nav").appendChild(newNav2);
