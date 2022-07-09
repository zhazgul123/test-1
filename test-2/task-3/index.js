// Классы
class Car {
    constructor(FieldMotor, seats, door, engine, year ) {
        this.FieldMotor = FieldMotor
        this.seats = seats
        this.door = door
        this.engine = engine
        this.year = year
    }

    getAllInfoForCar() {

    }
}

class Mercedes extends Car {
    constructor(FieldMotor, seats, door, engine, year) {
        super(FieldMotor, seats, door, engine, year)
        this.#start = start

    }
    #start
    getStart() {
        retrunthis.#start
    }
    getAllInfoForCar() {
        console.log('Mercedes')
    }
    signal() {
        console.log('signal')
    }
    
    stop() {
        console.log('stop')
    }

}
const Mercedes = new Mercedes('amg', 2, 2, 4, 2022 )
Mercedes.getAllInfoForCar

class BMW extends Car {
    constructor(FieldMotor, seats, door, engine, year) {
        super(FieldMotor, seats, door, engine, year)
        this.#start = start

    }
    #start
    getStart() {
        retrunthis.#start
    }
    getAllInfoForCar() {
        console.log('bmw')
    }
    signal() {
        console.log('signal')
    }
    
    stop() {
        console.log('stop')
    }

}
const bmw = new bmw(' bmw m8', 4, 4, 4.4, 2021 )
BMW.getAllInfoForCar

class Audi extends Car {
    constructor(FieldMotor, seats, door, engine, year) {
        super(FieldMotor, seats, door, engine, year)
        this.#start = start

    }
    #start
    getStart() {
        retrunthis.#start
    }
    getAllInfoForCar() {
        console.log('Audi')
    }
    signal() {
        console.log('signal')
    }
    
    stop() {
        console.log('stop')
    }

}
const Audi = new Audi('audi A7', 5, 4, 2, 2021 )
Audi.getAllInfoForCar

