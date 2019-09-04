;(function() {

    function getApi(url) {

        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open('GET', url);
            xhr.send();
    
            xhr.onload = () => {
                if (xhr.status != 200) {
                    reject(`Ошибка ${xhr.status}: ${xhr.statusText}`);
                } else {
                    resolve(JSON.parse(xhr.response));
                }
            }
    
            xhr.onerror = () => {
                reject(`Запрос не удался`);
            }
        });
    }

    function getCardFilm(id, title, desc) {
        return `<div class="film" style="flex-basis: 30%;" id=${id}>
                    <strong><p style="text-align: center">Episode ${id}</p></strong>
                    <p class="title" style="text-align: center">${title}</p>
                    <p>${desc}</p>
                </div>`;
    }

    function getPersonFilm(name) {
        return `<p>${name}</p>`;
    }

    function loader(elAppend, status = true) {
        const wrapper = document.createElement('div');
        wrapper.innerHTML += `  <div id="cube-loader">
                                <div class="caption">
                                <div class="cube-loader">
                                    <div class="cube loader-1"></div>
                                    <div class="cube loader-2"></div>
                                    <div class="cube loader-4"></div>
                                    <div class="cube loader-3"></div>
                                </div>
                                </div>
                            </div>`;
                            
        if (status === true) {
            elAppend.querySelector('.title').after(wrapper.firstElementChild);
        } else {
            elAppend.querySelector('#cube-loader').remove();
        }
    }
    

    getApi('https://swapi.co/api/films')
        .then(films => {
            const filmsEl = document.getElementById('films');
            const sortFilms = films.results.sort((a, b) => a.episode_id - b.episode_id);

            const initFilm = sortFilms.map(film => getCardFilm(film.episode_id, film.title, film.opening_crawl)).join(" ");
            filmsEl.innerHTML += initFilm;

            return sortFilms;
        })
        .then(films => {
            films.forEach(film => {
                let filmEl = document.getElementById(film.episode_id);
                let getPeoples = film.characters.map(people => getApi(people));
                
                loader(filmEl, true);
                
                Promise.all(getPeoples)
                    .then(peoples => {
                        let elPeoples = peoples.map(person => getPersonFilm(person.name)).join(" ");
                        filmEl.innerHTML += elPeoples;
                    })
                    .finally(e => {
                        loader(filmEl, false);
                    })
            })
        })
        .catch(error => { throw new Error(error) });
    


})();