/* 影碟租赁程序 */
const List = require("./List");

class CDProgram {
    constructor() {
        this.movieList = new List();
        this.customers = new List();
        this.rentList = new List();
        this.init();
    }

    init() {
        this.movieList.append("film1");
        this.movieList.append("film2");
        this.movieList.append("film3");
        this.movieList.append("film4");
        this.movieList.append("film5");
    }

    rent(customers, film) {
        if (!this.movieList.contains(film)) {
            console.log("movie not exist");
            return;
        }
        this.rentList.append({
            name: customers,
            film: film
        })
        this.movieList.remove(film);
        if (!this.customers.contains(customers)) {
            this.customers.append(customers);
        }
    }

    checkin(customers, film) {
        if (!this.movieList.contains(film)) {
            this.movieList.append(film);
        }
        this.rentList.remove({
            name: customers,
            film: film
        })
        const index = this.rentList.find({
            name: customers,
            film: film
        })
        if(index == -1) {
            this.customers.remove(customers);
        }
    }
}


const cdprogram = new CDProgram();
cdprogram.rent("john", "film1");
cdprogram.rent("iris", "film2");
cdprogram.rent("weer", "film3");
cdprogram.rent("vivian", "film1");
cdprogram.checkin("john", "film1");
console.log(cdprogram.movieList.toString());
console.log(cdprogram.rentList.toString());
console.log(cdprogram.customers.toString());
