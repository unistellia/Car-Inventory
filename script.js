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
        return Math.max(this.price - depreciation, 0); // Return calculated price
    }
}

class CarManager {
    constructor() {
        this.cars = [];
    }

    addCar(car) {
        this.cars.push(car);
        this.displayCars();
        
    }

    displayCars() {
        const carList = document.getElementById('carList');
        carList.innerHTML = this.cars.map(car => 
            `<li>${car.name} ${car.model} (${car.year}): $${car.calculatePrice()}</li>`
        ).join('');
    }

    showTotalPrice() {
        const totalPrice = this.cars.reduce((total, car) => total + car.calculatePrice(),0)

        alert(`Total Price After Depreciation: $${showtotalPrice.toFixed(2)}`);

        this.showTotalPrice(); // Call this after displaying cars
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

document.getElementById('totalPrice').addEventListener('submit', () => {
    showTotalPrice();
});