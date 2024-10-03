class Car {
    constructor(name, model, year, price) {
        this.name = name;
        this.model = model;
        this.year = year;
        this.price = price;
        console.log("Car logged");
    }

    calculatePrice() {
        let depreciation = (new Date().getFullYear() - this.year) * 500;
        return this.price - depreciation < 0 ? 0 : this.price - depreciation; // Return calculated price
    }
}

class CarManager {
    constructor() {
        this.cars = [];
    }

    addCar(car) {
        this.cars.push(car);
        this.displayCars();
        this.showTotalPrice(); // Call this after displaying cars
    }

    displayCars() {
        const carList = document.getElementById('carList');
        carList.innerHTML = this.cars.map(car => 
            `<li>${car.name} ${car.model} (${car.year}): $${car.calculatePrice()}</li>`
        ).join('');
    }

    showTotalPrice() {
        let price;
        let pricenow = 2024
        if(this.price >= 0){
            let depr = 500 * (now-this.year);
            if(this.price > depr >= 0){
                price = this.price - depr;
            }
            else{
                price = 0;
            }
            console.log(price)
        }
    }

}
//create an instance of the car manager to manage car inventory
//initilize the carmanager
const carManager = new CarManager();

// Function to add a car from the input fields in HTML form
const getElementValue = (id) => document.getElementById(id).value;

function addCar() {
    const { name, model, year, price } = {
        name: getElementValue('name'),
        model: getElementValue('model'),
        year: parseInt(getElementValue('year'), 10),
        price: parseFloat(getElementValue('price')),
    };

    carManager.addCar(new Car(name, model, year, price));
    document.getElementById('carForm').reset(); // Clear the form
}

// Event listeners for the form and button
document.getElementById('carForm').addEventListener('submit', (e) => {
    e.preventDefault();
    addCar();
});

document.getElementById('totalPriceBtn').addEventListener('submit', () => {
    carManager.showTotalPrice();
});