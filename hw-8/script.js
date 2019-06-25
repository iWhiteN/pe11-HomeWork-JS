const priceBox = document.getElementById("price"),
      priceSelect = document.getElementById("price-select"),
      error = document.createElement("span"),
      valueInput = document.createElement("span"),
      btn = document.createElement("button"),
      fragment = document.createDocumentFragment();

// Фокус на вводе
priceBox.addEventListener("focusin", e => {
    priceBox.style.border = "";
    priceBox.style.outlineColor = 'green';
})


// Уберание фокуса с ввода
priceBox.addEventListener("focusout", e => {

    // Отхождение от ТЗ,  логичней проверять на корректность ввода
    // Ошибка при вводе ("Не цифры")
    if (isNaN(e.target.value) || e.target.value == "" || e.target.value < 0) {
        priceBox.style.border = "";
        priceBox.style.border = '1px solid red';
    
       error.innerText = "Please enter correct price";
       priceBox.after(error);

    // Корректный ввод
    } else {
        error.innerHTML = "";

        btn.innerText = 'X';
        valueInput.innerText = `Текущая цена: ${e.target.value}`;

        fragment.appendChild(valueInput);
        fragment.appendChild(btn);

        priceSelect.appendChild(fragment);

        btn.addEventListener("click", e => {
            priceSelect.innerHTML = "";
            priceBox.value = "";
            priceBox.style.border = "";
        })
    }
    
})
