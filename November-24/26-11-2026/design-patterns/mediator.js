// The Mediator Pattern is a behavioral design pattern that facilitates communication between multiple objects (called colleagues) by introducing a mediator object. This pattern centralizes interactions, reducing dependencies between objects and promoting loose coupling.

class ChatRoomMediator {
    constructor() {
        this.users = [];
    }

    register(user) {
        this.users.push(user);
        user.setChatRoom(this);
    }

    sendMessage(message, sender, receiver) {
        const user = this.users.find((user) => user.name === receiver);
        if (user) {
            user.receiveMessage(message, sender);
        } else {
            console.log(`[ChatRoom]: User ${receiver} not found.`);
        }
    }
}

class User {
    constructor(name) {
        this.name = name;
        this.chatRoom = null;
    }

    setChatRoom(chatRoom) {
        this.chatRoom = chatRoom;
    }

    sendMessage(message, receiver) {
        console.log(`[${this.name}] sends message to ${receiver}: ${message}`);
        this.chatRoom.sendMessage(message, this.name, receiver);
    }

    receiveMessage(message, sender) {
        console.log(`[${this.name}] received message from ${sender}: ${message}`);
    }
}

const chatRoom = new ChatRoomMediator();

const alice = new User('Alice');
const bob = new User('Bob');
const charlie = new User('Charlie');

chatRoom.register(alice);
chatRoom.register(bob);
chatRoom.register(charlie);

alice.sendMessage('Hi Bob!', 'Bob');
bob.sendMessage('Hello Alice!', 'Alice');
charlie.sendMessage('Hi everyone!', 'Alice'); 
