const changeTheme = document.getElementById('change_theme');
const text = document.querySelectorAll(".heder_logo_name, .navbar a, .change_theme a, .latest-news_slogo, .latest-news_btn, .copiryting-text, .copiryting-logo_title");
const themeText = document.querySelectorAll(".most-popular, .top-rated_title, .hot-news_title, .our-most-popular_slogo");
const bcg = document.querySelectorAll(".most-popular-block, .top-rated, .hot-news")

const changeThemeAll = e => {
    text.forEach(e => e.classList.toggle("new_theme_color"));
    themeText.forEach(e => e.classList.toggle("new_theme_color_theme"));
    bcg.forEach(e => e.classList.toggle("new_theme_bcg"));
}

if (localStorage.getItem("theme")) changeThemeAll();

changeTheme.addEventListener("click", e => {
    changeThemeAll();
    localStorage.getItem("theme") ? localStorage.removeItem("theme") : localStorage.setItem("theme", "new");
})