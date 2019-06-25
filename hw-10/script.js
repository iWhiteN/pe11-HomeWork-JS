const passForm = document.getElementById("password-form");

passForm.addEventListener("click", e => {
    e.preventDefault();

    // Иконки + отобраєение таекста
    if (e.target.classList.contains("icon-password")) {

        if (e.target.classList.contains("fa-eye-slash")) {
            e.target.classList.remove("fa-eye-slash")
            e.target.classList.add("eye-slash")
            e.target.previousElementSibling.setAttribute("type","password");

        } else {
            e.target.classList.remove("eye-slash")
            e.target.classList.add("fa-eye-slash")
            e.target.previousElementSibling.setAttribute("type","text");
        }
    }
    
    // Сабмит формы
     if (e.target.type === "submit") {
         
          if (e.target.parentElement[0].value === e.target.parentElement[1].value ) {
            alert("You are welcome");
          } else {
              alert("Нужно ввести одинаковые значения");
          }
         
     }
    
})