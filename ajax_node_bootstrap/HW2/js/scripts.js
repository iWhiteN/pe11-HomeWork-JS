;(function() {

    async function getApi(url) {
       const res = await fetch(url);
       const data = await res.json();

       return data;
    }

    const btn = document.getElementById('scanIP');

    btn.onclick = async function (e) {

        const ip = await getApi('https://api.ipify.org/?format=json');
        const addr = await getApi(`http://ip-api.com/json/${ip.ip}?lang=ru&fields=continent,country,regionName,city,district`);

        const wrapper = document.createElement('div');
        wrapper.innerHTML = `<p>континент: ${addr.continent}</p>
                                <p>страна: ${addr.country}</p>
                                <p>регион: ${addr.regionName}</p>
                                <p>город: ${addr.city}</p>
                                <p>район город: ${addr.district}</p>
                            `;

         this.after(wrapper);
    }

})();