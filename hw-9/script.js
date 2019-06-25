const tabs = document.getElementById("tabs");

let activeItem = document.getElementsByClassName("active")[0];
let activeContent = document.getElementsByClassName("active-content")[0];

const tabsChilds = tabs.children;
const tabsContent = document.getElementById("tabs-content").children;


tabs.addEventListener("click", e => {
    // Добавление активности табу
    activeItem.classList.remove('active');
    e.target.classList.add('active');
    activeItem = e.target;

    // Отображение текста по табу
    // Позиция текста зависит от позиции кнопки
   for (let i = 0; i < tabsChilds.length; i++) {
       if (tabsChilds[i] === e.target) {
        activeContent.classList.remove('active-content');
        tabsContent[i].classList.add('active-content');
        activeContent = tabsContent[i];
       }
       
   }   
})