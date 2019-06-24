const addList = (arr) => {
   document.body.innerHTML += `
                        <ul>
                        ${arr.map(e => `
                            ${typeof(e) === 'object' && e !== null ? 
                                // Optional
                                `<ul>${e.map(e => `<li>${e}</li>`).join("")}</ul>`
                                 :`<li>${e}</li>`}`).join("")}
                        </ul>
                        `
}

// Optional
const timer = () => {
    // Так как setInterval начинается отсчет через секунд, то 1 секунду теряем, по єтому начинаем считать с 9
    let timerSecond = 9; 
    // Замыкание, что бы не изменить с ВНЕ таймер
    return () => timerNode.innerHTML = timerSecond--;
}


// TEST
addList(['hello', 'world', 'Kiev', "Kharkiv", 'Odessa', 'Lviv', ['1', '2', '3', 'sea', 'user', 23]]);
// addList(['1', '2', '3', 'sea', 'user', 23]);

// Timer
const timerNode = document.createElement("p");
document.body.appendChild(timerNode);
timerNode.innerHTML = 10;

const timeInterval = setInterval(timer(), 1000);

setTimeout(() => {
    clearInterval(timeInterval);
    document.body.innerHTML = "";
}, 10000)