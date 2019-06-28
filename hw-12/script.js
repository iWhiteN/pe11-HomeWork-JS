const images = document.getElementById("images-wrapper").children,
      stopBtn = document.getElementById("stopBtn"),
      startBtn = document.getElementById("startBtn"),
      timeBox = document.getElementById("timer"),
      btn = document.createElement('button');

let index = 0,
    countTimer = 1000,
    btnEvent = "start";

// Первая картинка по умолчанию
images[index].style.display = "block";
images[index].style.opacity = "1";
btn.innerText = 'Прекратить';
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

let timerSlide = setInterval(slider, 10000);
let timerSecond = setInterval(timer, 10);

btn.addEventListener("click", e => {
    if (btnEvent === "start") {
        timerSlide = setInterval(slider, 10000);
        timerSecond = setInterval(timer, 10);
        btn.innerText = 'Прекратить'
        btnEvent = "stop";

    } else {
        clearInterval(timerSlide); 
        clearInterval(timerSecond);
        btn.innerText = 'Возобновить показ'
        btnEvent = "start";
    }
})
