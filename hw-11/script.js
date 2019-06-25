const btns = document.getElementById("btn-wrapper").children;
let lastBtn;

document.addEventListener("keyup", e =>{
    for (let i = 0; i < btns.length; i++) {
        if (btns[i].innerText.toLowerCase() === e.key.toLowerCase()) {
            
            lastBtn ? lastBtn.style.backgroundColor = "#33333A" : null;
            btns[i].style.backgroundColor = "blue";
            lastBtn = btns[i];
        }
    }
    
})