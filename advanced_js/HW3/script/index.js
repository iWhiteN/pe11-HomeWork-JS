
;document.addEventListener("DOMContentLoaded", function() {

    const table = document.createElement('table');
    document.body.appendChild(table);

    for (let i = 0; i < 30; i++) {
        const tr = document.createElement('tr');
        
        for (let i = 0; i < 30; i++) {
            tr.appendChild(document.createElement('td'));
        }
        
        table.appendChild(tr);
    }

    // аналог parents() JQuery - только поиск по селектору
    function findAncestor (el, selector) {
        while ((el = el.parentElement) && !el.matches(selector));
        return el;
    }

    document.body.addEventListener('mousedown', function(e) {
       if((findAncestor(e.target, 'table')) === null) {
           table.classList.toggle('table--active');

       } else {
            e.target.classList.toggle('td--active');
       }
    })
});
