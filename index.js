let movies = [
    {
        name: "falcon and the winter solid",
        des: "",
        image:"slider 2.png"
    },
    {
        name: "loki",
        des: "",
        image:"slider 1.png"
    },
    {
        name: "wadan vision",
        des: "",
        image:"slider 3.png"
    },
    {
        name: "raya and the last dragon",
        des: "",
        image:"slider 4.png"
    },
    {
        name: "luca",
        des: "",
        image:"slider 5.png "
    },
];
const caraousel=document.querySelector('.caraousel');
let sliders=[];

let slideIndex=0; //track the current slide

const createSlide = () => {
    if(slideIndex>=movies.length) {
        slideIndex=0;
    }

    // create DOM elements
    let slide= document.createElement('div');
    var imgElement= document.createElement('img');
    let content= document.createElement('div');
    let h1= document.createElement('h1');

    //attaching all elements
    imgElement.appendChild(document.createTextNode(''));
    h1.appendChild(document.createTextNode(movies[slideIndex].name));
    content.appendChild(h1);
    slide.appendChild(imgElement);
    caraousel.appendChild(slide);
    
    //Setting up images
    imgElement.src=movies[slideIndex].image;
    slideIndex++

    //Setting elements classnames
    slide.className= 'slider';
    content.className= 'slide-content';
    h1.className= 'movie-title';

    sliders.push(slide);

    if(sliders.length) {
    sliders[0].style.marginLeft = `calc(-${100 *  (sliders.length - 2)}% - ${
         100 * (sliders.length - 2) 
        }px)`;
    }
}

for (let i=0; i<3; i++) {
    createSlide();
}

setInterval(()=> {
    createSlide();
}, 3000);

//video cards

const videoCards = [...document.querySelectorAll('.video-card')];

videoCards.forEach(item => {
    item.addEventListener("mouseover", () => {
        let video= item.children[1];
        video.play();
    })
    item.addEventListener("mouseleave", () => {
        let video= item.children[1];
        video.pause();
    });
});

//card sliders

let cardContainers = [...document.querySelectorAll('.card-container')];
let preBtns = [...document.querySelectorAll('.pre-btn')];
let nxtBtns = [...document.querySelectorAll('.nxt-btn')];

cardContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtns[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth - 200;
    });

     preBtns[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth + 200;
    });
});


