const btnChangeTheme = document.getElementById('change_theme');

const newLinkTheme = e => {
    let link = document.createElement('link');
    link.setAttribute('rel', 'stylesheet');
    link.setAttribute('href', 'css/new-theme.css');
    document.querySelector('head').appendChild(link);
}

const loadTheme = e => {
    if (localStorage.getItem("new-theme")) {
        document.querySelector('link[href="css/new-theme.css"]').remove();
        localStorage.removeItem("new-theme");

    } else {
        newLinkTheme();
        localStorage.setItem("new-theme", "css/new-theme.css")
    }
}

if (localStorage.getItem("new-theme")) newLinkTheme();

btnChangeTheme.addEventListener("click", e => loadTheme())