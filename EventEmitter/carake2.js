const { EventEmitter } = require('events');

const myEventEmitter = new EventEmitter();

const makeCoffee = (name) => {
    console.log(`Kopi ${name} telah dibuat!`);
};

const makeBill = (price) => {
    console.log(`Bill sebesar ${price} telah dibuat!`);
}

const onCoffeeOrderedListener = ({ name, price }) => {
    makeCoffee(name);
    makeBill(price);
}

myEventEmitter.on('coffee-order', onCoffeeOrderedListener);

// Memicu event 'coffee-order' terjadi.
myEventEmitter.emit('coffee-order', { name: 'Tubruk', price: 10000});