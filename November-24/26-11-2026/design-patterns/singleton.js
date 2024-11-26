// The Singleton Pattern is a design pattern that ensures a class has only one instance and provides a global point of access to that instance.

class Singleton {
    constructor() {
        if (Singleton.instance) {
            return Singleton.instance;
        }

        Singleton.instance = this;
        
        this.data = 'This is a Singleton pattern!';
    }

    getData() {
        return this.data;
    }
}

const instance1 = new Singleton();
const instance2 = new Singleton();

console.log(instance1 === instance2);  

console.log(instance1.getData());
