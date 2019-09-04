;(function(){

    const btnContact = document.getElementById('contact');
    btnContact.onclick = function(e) {
        document.cookie = 'experiment=novalue; max-age=300';
        document.cookie = document.cookie.split('; ').find(e => /new-user/gi.test(e)) ? 'new-user=false' : 'new-user=true';
    }

})();