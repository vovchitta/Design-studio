const slide = document.getElementById('slide'),
city = document.getElementById('city'),
area = document.getElementById('area'),
time = document.getElementById('time'),
cost = document.getElementById('cost'),
firstLink = document.getElementById('first-link'),
secondLink = document.getElementById('second-link'),
thirdLink = document.getElementById('third-link'),
leftArrow = document.getElementById('left-arrow'),
rightArrow = document.getElementById('right-arrow'),
firstCircle = document.getElementById('first-circle'),
secondCircle = document.getElementById('second-circle'),
thirdCircle = document.getElementById('third-circle');


function firstAction () {
    slide.style = 'background: url(./images/section-completed__interior_image.jpg); background-size: cover;';
    firstLink.style = 'color: #E3B873; text-decoration: underline;';
    secondLink.style = 'color: inherit; text-decoration: none;';
    thirdLink.style = 'color: inherit; text-decoration: none;';
    firstCircle.style = 'background: white;';
    secondCircle.style = 'background: grey;';
    thirdCircle.style = 'background: grey;';
    city.innerHTML = 'Rostov-on-Don<br>LCD admiral';
    area.innerHTML = '81 m2';
    time.innerHTML = '3.5 months';
    cost.innerHTML = 'Upon request';
}

const firstClick = firstCircle.addEventListener('click', firstAction);

function secondAction () {
    slide.style = 'background: url(./images/section-completed__interior_image2.jpg); background-size: cover;';
    firstLink.style = 'color: inherit; text-decoration: none;';
    secondLink.style = 'color: #E3B873; text-decoration: underline;';
    thirdLink.style = 'color: inherit; text-decoration: none;';
    firstCircle.style = 'background: grey;';
    secondCircle.style = 'background: white;';
    thirdCircle.style = 'background: grey;';
    city.innerHTML = 'Sochi<br>Thieves';
    area.innerHTML = '105 m2';
    time.innerHTML = '4 months';
    cost.innerHTML = 'Upon request';
}

const secondClick = secondCircle.addEventListener('click', secondAction);

function thirdAction () {
    slide.style = 'background: url(./images/section-completed__interior_image3.jpg); background-size: cover;';
    firstLink.style = 'color: inherit; text-decoration: none;';
    secondLink.style = 'color: inherit; text-decoration: none;';
    thirdLink.style = 'color: #E3B873; text-decoration: underline;';
    firstCircle.style = 'background: grey;';
    secondCircle.style = 'background: grey;';
    thirdCircle.style = 'background: white;';
    city.innerHTML = 'Rostov-on-Don<br>Patriotic';
    area.innerHTML = '93 m2';
    time.innerHTML = '3 months';
    cost.innerHTML = 'Upon request';
}

const thirdtClick = thirdCircle.addEventListener('click', thirdAction);


function firstLinkAction () {
    firstAction();
}

firstLink.addEventListener('click', firstLinkAction);

function secondLinkAction () {
    secondAction();
}

secondLink.addEventListener('click', secondLinkAction);

function thirdLinkAction () {
    thirdAction();
}

thirdLink.addEventListener('click', thirdLinkAction);


function nextSlide(index) {
    if (index === 0) {
        firstAction();
    } else if (index === 1) {
        secondAction();
    } else {
        thirdAction();
    }
}

function activeIndex() {
    if (firstCircle.style.background === 'white') {
        return 0;
    } else if (secondCircle.style.background === 'white') {
        return 1;
    } else {
        return 2;
    }
}

function prevAction() {
    let currentIndex = activeIndex();
    currentIndex = (currentIndex - 1 + 3) % 3;
    nextSlide(currentIndex);
}

function nextAction() {
    let currentIndex = activeIndex();
    currentIndex = (currentIndex + 1) % 3;
    nextSlide(currentIndex);
}

leftArrow.addEventListener('click', function() {
    prevAction();
});

rightArrow.addEventListener('click', function() {
    nextAction();
});

