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

const container =  document.querySelector('.container');


const a=document.querySelectorAll('header a');
//console.log(a);
a[0].textContent=siteContent.nav["nav-item-1"];
a[1].textContent=siteContent.nav["nav-item-2"];
a[2].textContent=siteContent.nav["nav-item-3"];
a[3].textContent=siteContent.nav["nav-item-4"];
a[4].textContent=siteContent.nav["nav-item-5"];
a[5].textContent=siteContent.nav["nav-item-6"];

//============================Cta  section ===============

const ctaImage=document.querySelector('#cta-img');
//console.log(cta);
ctaImage.src=siteContent.cta["img-src"];

const ctaText=document.querySelector('.cta-text').childNodes;
// console.log(ctaText[0]);
ctaText[1].textContent=siteContent.cta.h1;
ctaText[3].textContent=siteContent.cta.button;

//=============================Main COntent section =======

//top content -----------
const topContent=document.querySelector('.top-content').children;
// console.log(topContent);
const topContent1=topContent[0].children;
//console.log(topContent1);
topContent1[0].textContent=siteContent["main-content"]["features-h4"];
topContent1[1].textContent=siteContent["main-content"]["features-content"];

const topContent2=topContent[1].children;
// console.log(topContent2);
topContent2[0].textContent=siteContent["main-content"]["about-h4"];
topContent2[1].textContent=siteContent["main-content"]["about-content"];

//middle image -------------
const middleImage=document.querySelector('#middle-img').src=siteContent["main-content"]["middle-img-src"];;

//bottom content ------------
const bottomContent=document.querySelector('.bottom-content').children;
//console.log(bottomContent[0]);
const bottomContent1=bottomContent[0].children;
//console.log(bottomContent1);
bottomContent1[0].textContent=siteContent["main-content"]["services-h4"];
bottomContent1[1].textContent=siteContent["main-content"]["services-content"];
