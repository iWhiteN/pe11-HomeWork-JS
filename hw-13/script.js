const changeTheme = document.getElementById('change_theme');
const text = document.querySelectorAll(".heder_logo_name, .navbar a, .change_theme a, .latest-news_slogo, .latest-news_btn, .copiryting-text, .copiryting-logo_title");
const themeText = document.querySelectorAll(".most-popular, .top-rated_title, .hot-news_title, .our-most-popular_slogo");
const bcg = document.querySelectorAll(".most-popular-block, .top-rated, .hot-news")

const changeThemeAll = e => {
    for (let i = 0; i < text.length; i++) {
        text[i].classList.toggle("new_theme_color");  
    }
    for (let i = 0; i < themeText.length; i++) {
        themeText[i].classList.toggle("new_theme_color_theme");  
    }
    for (let i = 0; i < bcg.length; i++) {
        bcg[i].classList.toggle("new_theme_bcg");  
    }
}

if (localStorage.getItem("theme")) changeThemeAll();

changeTheme.addEventListener("click", e => {
    changeThemeAll();
    localStorage.getItem("theme") ? localStorage.removeItem("theme") : localStorage.setItem("theme", "new");
})