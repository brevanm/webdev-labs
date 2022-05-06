var h1size = 32;
var contentsize = 1.4;
const makeBigger = () => {
   h1size += 2;
   contentsize += .2;
   document.querySelector("h1").style.fontSize=(h1size)+"pt"
   document.querySelector(".content").style.fontSize=(contentsize)+"em"
};

const makeSmaller = () => {
   h1size -= 2;
   contentsize -= .2;
   document.querySelector("h1").style.fontSize=(h1size)+"pt"
   document.querySelector(".content").style.fontSize=(contentsize)+"em"
};


document.querySelector("#a1").addEventListener('click', makeBigger);
document.querySelector("#a2").addEventListener('click', makeSmaller);

