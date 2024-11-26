// The Observer Pattern is a behavioral design pattern where an object, called the subject, maintains a list of its dependents, called observers, and notifies them of any state changes. It allows objects to subscribe to and receive updates from a central object.

class WeatherStation {
    constructor() {
        this.observers = []; 
        this.temperature = null;
    }

    subscribe(observer) {
        this.observers.push(observer);
    }

    unsubscribe(observer) {
        this.observers = this.observers.filter((obs) => obs !== observer);
    }

    notify() {
        this.observers.forEach((observer) => observer.update(this.temperature));
    }

    setTemperature(temp) {
        console.log(`WeatherStation: New temperature is ${temp}°C`);
        this.temperature = temp;
        this.notify();
    }
}

class TemperatureDisplay {
    update(temperature) {
        console.log(`TemperatureDisplay: Updated temperature is ${temperature}°C`);
    }
}

class TemperatureAlert {
    update(temperature) {
        if (temperature > 30) {
            console.log(`TemperatureAlert: Alert! High temperature of ${temperature}°C`);
        }
    }
}

const weatherStation = new WeatherStation();
const display = new TemperatureDisplay();
const alertSystem = new TemperatureAlert();

weatherStation.subscribe(display);
weatherStation.subscribe(alertSystem);

weatherStation.setTemperature(25); 
weatherStation.setTemperature(35);
