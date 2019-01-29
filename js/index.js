const siteContent = {
	nav: {
		'nav-item-1': 'Services',
		'nav-item-2': 'Product',
		'nav-item-3': 'Vision',
		'nav-item-4': 'Features',
		'nav-item-5': 'About',
		'nav-item-6': 'Contact',
		'img-src': 'img/logo.png'
	},
	cta: {
		h1: 'DOM Is Awesome',
		button: 'Get Started',
		'img-src': 'img/header-img.png'
	},
	'main-content': {
		'features-h4': 'Features',
		'features-content':
			'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
		'about-h4': 'About',
		'about-content':
			'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
		'middle-img-src': 'img/mid-page-accent.jpg',
		'services-h4': 'Services',
		'services-content':
			'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
		'product-h4': 'Product',
		'product-content':
			'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
		'vision-h4': 'Vision',
		'vision-content':
			'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
	},
	contact: {
		'contact-h4': 'Contact',
		address: '123 Way 456 Street Somewhere, USA',
		phone: '1 (888) 888-8888',
		email: 'sales@greatidea.io'
	},
	footer: {
		copyright: 'Copyright Great Idea! 2018'
	}
};

// Example: Update the img src for the logo
let logo = document.getElementById('logo-img');
logo.setAttribute('src', siteContent['nav']['img-src']);

const container = document.querySelector('.container');

const a = document.querySelectorAll('header a');
//console.log(a);
a[0].textContent = siteContent.nav['nav-item-1'];
a[1].textContent = siteContent.nav['nav-item-2'];
a[2].textContent = siteContent.nav['nav-item-3'];
a[3].textContent = siteContent.nav['nav-item-4'];
a[4].textContent = siteContent.nav['nav-item-5'];
a[5].textContent = siteContent.nav['nav-item-6'];

//============================Cta  section ===============

const ctaImage = document.querySelector('#cta-img');
//console.log(cta);
ctaImage.src = siteContent.cta['img-src'];

const ctaText = document.querySelector('.cta-text').childNodes;
// console.log(ctaText[0]);
ctaText[1].textContent = siteContent.cta.h1;
ctaText[3].textContent = siteContent.cta.button;

ctaText[3].addEventListener('click', buttonPressed);

function buttonPressed() {
	container.style.display = 'none';

	const newDiv = document.createElement('div');
    newDiv.className = 'cta';
    
    const secondDiv= document.createElement('div');
    secondDiv.className='cta-text';

	const title = document.createElement('h1');
    title.className = 'cta-text';
    title.textContent='Lambda School DOM I'

    const button = document.createElement('button');
    button.className='cta cta-text';
    button.textContent="Return"
    button.style.borderRadius="20px";
    button.style.color="grey";
    button.addEventListener('click', function(){
        newDiv.style.display='none';
        container.style.display='block';
    })

    secondDiv.append(title);
    secondDiv.append(button);

    const myImg=document.createElement('img');
    myImg.src='img/imgg.png'
    myImg.style.marginRight='80px'

    newDiv.append(secondDiv);
    newDiv.append(myImg);

    document.querySelector('body').append(newDiv);

}

//=============================Main COntent section ===============

//------------------top content -----------

const topContent = document.querySelector('.top-content').children;
// console.log(topContent);
const topContent1 = topContent[0].children;
//console.log(topContent1);
topContent1[0].textContent = siteContent['main-content']['features-h4'];
topContent1[1].textContent = siteContent['main-content']['features-content'];

const topContent2 = topContent[1].children;
// console.log(topContent2);
topContent2[0].textContent = siteContent['main-content']['about-h4'];
topContent2[1].textContent = siteContent['main-content']['about-content'];

//-----------------middle image -------------

const middleImage = (document.querySelector('#middle-img').src = siteContent['main-content']['middle-img-src']);

//-----------------bottom content ------------

const bottomContent = document.querySelector('.bottom-content').children;
//console.log(bottomContent[0]);
const bottomContent1 = bottomContent[0].children;
//console.log(bottomContent1);
bottomContent1[0].textContent = siteContent['main-content']['services-h4'];
bottomContent1[1].textContent = siteContent['main-content']['services-content'];

const bottomContent2 = bottomContent[1].children;
// console.log(bottomContent2);
bottomContent2[0].textContent = siteContent['main-content']['product-h4'];
bottomContent2[1].textContent = siteContent['main-content']['product-content'];

const bottomContent3 = bottomContent[2].children;
// console.log(bottomContent3);
bottomContent3[0].textContent = siteContent['main-content']['vision-h4'];
bottomContent3[1].textContent = siteContent['main-content']['vision-content'];

//================================Contact section===================

const contact = document.querySelector('.contact').children;
// console.log(contact);
contact[0].textContent = siteContent.contact['contact-h4'];
contact[1].textContent = siteContent.contact.address;
contact[2].textContent = siteContent.contact.phone;
contact[3].textContent = siteContent.contact.email;

//==============================footer section =====================

const footer = document.querySelector('footer').children;
footer[0].textContent = siteContent.footer.copyright;

//===========================Navigation task ==================


const aNav = document.querySelector('nav');
aNav.style.background='silver';
aNav.style.padding="20px";
aNav.style.border='2px dashed black';
aNav.style.borderRadius="20px"


const navTab = document.querySelector('nav');

const firstElement = document.createElement('a');
firstElement.textContent = 'Last Element';

const secondElement = document.createElement('a');
secondElement.textContent = 'First Element';

navTab.append(firstElement);
navTab.prepend(secondElement);

const allA=document.querySelectorAll('nav a');
allA.forEach(item => item.style.color='green')
