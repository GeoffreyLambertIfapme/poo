const StatusType = {
    InRange: 0,
    Min: 1,
    Max: 2,
    Error: 3
}
const minValue = 0;
const maxValue = 10;

class Counter {

    count;

    minValue;
    maxValue;

    constructor(count, minValue, maxValue) {
        this.count = count;

        this.minValue = minValue;
        this.maxValue = maxValue;
    }
 // augmenter sa valeur
    increase() {

    }
// diminue sa valeur
    decrease() {

    }
// retour si le compteur respect les bornes (min et max)
    isValid() {

        return x;
    }
}


const decreaseButton = document.getElementById("decrease-button");
const increaseButton = document.getElementById("increase-button");
const counterDiv = document.getElementById("counter");
const message = document.getElementById("message");

decreaseButton.addEventListener('click', decreaseValue);
increaseButton.addEventListener('click', increaseValue);

function decreaseValue() {
    updateCounter(Operation.decrease);
}
function increaseValue() {
    updateCounter(Operation.increase);
}

const counter = new Counter(counterDiv.innerText, minValue, maxValue);