/* 
  See Smashing Magazine Tutorial:
  https://www.smashingmagazine.com/2021/11/dyslexia-friendly-mode-website/
*/
let dyslexiamode=false
const classDyslexia = () => {
  if (dyslexiamode) {
    document.querySelector("body").className="default"
    dyslexiamode = false
  } else {
    document.querySelector("body").className="dyslexia-mode"
    dyslexiamode = true
  }
};

document.querySelector("#dyslexia-toggle").addEventListener('click', classDyslexia);