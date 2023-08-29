const images = [
  {
    image: "img/01.webp",
    title: "Marvel's Spiderman Miles Morale",
    text: "Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.",
  },
  {
    image: "img/02.webp",
    title: "Ratchet & Clank: Rift Apart",
    text: "Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.",
  },
  {
    image: "img/03.webp",
    title: "Fortnite",
    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
  },
  {
    image: "img/04.webp",
    title: "Stray",
    text: "Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city",
  },
  {
    image: "img/05.webp",
    title: "Marvel's Avengers",
    text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
  },
];
let slideActive = 0;

const next = document.getElementById("next");
const back = document.getElementById("prev");
const containerImg = document.getElementById("container-slider");
const containerThumb = document.getElementById("thumb-box");

printImg();
printthumb();

function printImg() {
  images.forEach((image, index) => {
    const slide = document.createElement("div");
    slide.classList.add("d-none");
    slide.innerHTML = ` 
    <img src="${image.image}" alt="" />
    <div class="text">
    <h1>${image.title}</h1>
    <p>${image.text}</p>
    </div>`;

    image.html = slide;
    image.index = index;
    if (image.index == slideActive) slide.classList.add("active");

    containerImg.append(slide);
    console.log(image, slide);
  });
}

next.addEventListener("click", function () {
  nextButton(slideActive++);
});

back.addEventListener("click", function () {
  revButton(slideActive--);
});
