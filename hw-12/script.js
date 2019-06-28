const images = document.getElementById("images-wrapper").children,
      timeBox = document.getElementById("timer"),
      btn = document.createElement('button');

let index = 0,
    countTimer = 1000;

// Первая картинка по умолчанию
images[index].style.display = "block";
images[index].style.opacity = "1";
btn.innerText = 'Прекратить';
btn.classList.add("start");
document.body.append(btn);

// Timer обратного отсчета Slider
const timer = () => {
    timeBox.innerText = countTimer--
    if(countTimer < 0) countTimer = 1000;
}

// Slider
const slider = () => {
    images[index].style.display = "none";
    images[index].style.opacity = "0";
    index++;
    if (index >= images.length) index = 0;
    images[index].style.display = "block";
    fade(images[index])
}

// Animation
const fade = (el) => { 
    let opac = 0.1;
    let timerFade = setInterval(e => { 
        if (opac >= 1) clearInterval(timerFade); 
        el.style.opacity = opac; 
        // Скорость анимации
        opac += opac * 0.3; 
    }, 50); 
} 

let timerSlide = setInterval(slider, +(countTimer+'0'));
let timerSecond = setInterval(timer, 10);

btn.addEventListener("click", e => {
    if (e.target.classList.contains('start')) {
        clearInterval(timerSlide); 
        clearInterval(timerSecond);
        e.target.innerText = 'Возобновить показ';
        e.target.classList.toggle("start");

    } else {
        timerSlide = setInterval(slider, +(countTimer+'0'));
        timerSecond = setInterval(timer, 10);
        e.target.innerText = 'Прекратить';
        e.target.classList.toggle("start");
    }
})
