// The Mixin Pattern is a design pattern that allows objects to share functionality by mixing methods or properties from one object (or class) into another. This promotes code reuse without relying on inheritance, allowing you to combine features from multiple sources.

// A mixin is essentially a reusable piece of code that can be added to multiple objects or classes.

const flyMixin = {
    fly() {
        console.log(`${this.name} is flying!`);
    },
};

const swimMixin = {
    swim() {
        console.log(`${this.name} is swimming!`);
    },
};

class Robot {
    constructor(name) {
        this.name = name;
    }
}

const flyingRobot = new Robot('FlyingBot');
Object.assign(flyingRobot, flyMixin);
flyingRobot.fly(); // Output: FlyingBot is flying!

const swimmingRobot = new Robot('SwimmingBot');
Object.assign(swimmingRobot, swimMixin);
swimmingRobot.swim(); // Output: SwimmingBot is swimming!

const amphibiousRobot = new Robot('AmphibiousBot');
Object.assign(amphibiousRobot, flyMixin, swimMixin);
amphibiousRobot.fly(); // Output: AmphibiousBot is flying!
amphibiousRobot.swim(); // Output: AmphibiousBot is swimming!
