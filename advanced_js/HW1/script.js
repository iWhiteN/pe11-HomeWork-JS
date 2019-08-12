'use strict'

;document.addEventListener("DOMContentLoaded", function() { 
    
    /**
    * Класс, объекты которого описывают параметры гамбургера. 
    * 
    * @constructor
    * @param size        Размер
    * @param stuffing    Начинка
    * @throws {HamburgerException}  При неправильном использовании
    */

    function Hamburger(size, stuffing) {
    
        if (!size) {
            throw new HamburgerException(`No size given`);

        } else if (!sizes[size]){
            throw new HamburgerException(`Invalid size "${size}"`);

        } else if (!stuffing){
            throw new HamburgerException(`No stuffing given`);

        } else if (!stuffings[stuffing]){
            throw new HamburgerException(`Invalid stuffing "${stuffing}"`);

        } else {
            this.size = size;
            this.stuffing = stuffing;

            this._allTopping = [];
        }
     } 

    /*БД -  Размеры, виды начинок и добавок */
    const sizes = {
        size_small: {
            amount: 50,
            calories: 20
        },
        size_large: {
            amount: 100,
            calories: 40
        }
    };

    const stuffings = {
        stuffing_cheese: {
            amount: 10,
            calories: 5
        },
        stuffing_salad: {
            amount: 20,
            calories: 20
        },
        stuffing_potato: {
            amount: 15,
            calories: 10
        }
    };

    const toppings = {
        topping_mayo: {
            amount: 20,
            calories: 5
        },
        topping_spice: {
            amount: 15,
            calories: 0
        }
    };

    /* Размеры, виды начинок и добавок */
    Hamburger.SIZE_SMALL = 'size_small';
    Hamburger.SIZE_LARGE = 'size_large';
    Hamburger.STUFFING_CHEESE = 'stuffing_cheese';
    Hamburger.STUFFING_SALAD = 'stuffing_salad';
    Hamburger.STUFFING_POTATO = 'stuffing_potato';
    Hamburger.TOPPING_MAYO = 'topping_mayo';
    Hamburger.TOPPING_SPICE = 'topping_spice';

    /**
    * Добавить добавку к гамбургеру. Можно добавить несколько
    * добавок, при условии, что они разные.
    * 
    * @param topping     Тип добавки
    * @throws {HamburgerException}  При неправильном использовании
    */
    Hamburger.prototype.addTopping = function (topping) {
        if (!topping) {
            throw new HamburgerException(`No topping given`);

        } else if (!toppings[topping]) {
            throw new HamburgerException(`Invalid topping "${topping}"`);

        } else if (this._allTopping.includes(topping)) {
            throw new HamburgerException(`Duplicate topping "${topping}"`);

        } else {
            this._allTopping.push(topping);
        }
    }

    /**
     * Убрать добавку, при условии, что она ранее была 
     * добавлена.
     * 
     * @param topping   Тип добавки
     * @throws {HamburgerException}  При неправильном использовании
     */
    Hamburger.prototype.removeTopping = function (topping) { 
        if (!topping) {
            throw new HamburgerException(`No topping given`);

        } else if (!toppings[topping]) {
            throw new HamburgerException(`Invalid topping "${topping}"`);

        } else if (!this._allTopping.includes(topping)) {
            throw new HamburgerException(`Not found topping "${topping}"`);

        } else {
            this._allTopping.splice(topping, 1);
        }
    }

    /**
     * Получить список добавок.
     *
     * @return {Array} Массив добавленных добавок, содержит константы
     *                 Hamburger.TOPPING_*
     */
    Hamburger.prototype.getToppings = function () { return this._allTopping; }

    /**
     * Узнать размер гамбургера
     */
    Hamburger.prototype.getSize = function () { return this.size; }

    /**
     * Узнать начинку гамбургера
     */
    Hamburger.prototype.getStuffing = function () { return this.stuffing; }
    
    /**
     * Узнать цену гамбургера
     * @return {Number} Цена в тугриках
     */
    Hamburger.prototype.calculatePrice = function () { 
        return this._allTopping.reduce((acc, curr) => acc + toppings[curr].amount, 0) + sizes[this.size].amount + stuffings[this.stuffing].amount;
     }

    /**
     * Узнать калорийность
     * @return {Number} Калорийность в калориях
     */
    Hamburger.prototype.calculateCalories = function () {
        return this._allTopping.reduce((acc, curr) => acc + toppings[curr].calories, 0) + sizes[this.size].calories + stuffings[this.stuffing].calories 
    }

    /**
     * Представляет информацию об ошибке в ходе работы с гамбургером. 
     * Подробности хранятся в свойстве message.
     * @constructor 
     */
    function HamburgerException (message) {
        this.message = message;
    }



    /***************** ТЕСТИРОВАНИЕ *****************/

    try {

        //  *** Свои тесты
        console.log('------------- Свои тесты -------------');
        let newHum = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);

        // ******** Добавление допинга
        newHum.addTopping(Hamburger.TOPPING_MAYO);
        newHum.addTopping(Hamburger.TOPPING_SPICE);
        // newHum.addTopping(Hamburger.TOPPING_MAYO);
        // newHum.addTopping();

        // ********  Удаление допинга
        newHum.removeTopping(Hamburger.TOPPING_MAYO);
        // newHum.removeTopping(Hamburger.TOPPING_SPICE);
        // newHum.removeTopping(Hamburger.TOPPING_SPICE);
        // newHum.removeTopping();

        // ********  Получить список добавок
        console.log('getToppings -->', newHum.getToppings());

        // ********  Узнать размер гамбургера
        console.log('getSize -->', newHum.getSize());

        // ********  Узнать начинку гамбургера
        console.log('getStuffing -->', newHum.getStuffing());

        // ********  Узнать цену гамбургера
        console.log('calculatePrice -->', newHum.calculatePrice());

        // ********  Узнать калорийность
        console.log('calculateCalories -->', newHum.calculateCalories());


        //  *** Тесты с ТЗ
        console.log('------------- Тесты с ТЗ -------------');
        // маленький гамбургер с начинкой из сыра
        var hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);
        // добавка из майонеза
        hamburger.addTopping(Hamburger.TOPPING_MAYO);
        // спросим сколько там калорий
        console.log("Calories: %f", hamburger.calculateCalories());
        // сколько стоит
        console.log("Price: %f", hamburger.calculatePrice());
        // я тут передумал и решил добавить еще приправу
        hamburger.addTopping(Hamburger.TOPPING_SPICE);
        // А сколько теперь стоит? 
        console.log("Price with sauce: %f", hamburger.calculatePrice());
        // Проверить, большой ли гамбургер? 
        console.log("Is hamburger large: %s", hamburger.getSize() === Hamburger.SIZE_LARGE); // -> false
        // Убрать добавку
        hamburger.removeTopping(Hamburger.TOPPING_SPICE);
        console.log("Have %d toppings", hamburger.getToppings().length); // 1


    } catch(e) {

        console.log(e.message);
    }

});
