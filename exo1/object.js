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

    increase() {
         this.count++;
    }

    decrease() {
        this.count--;
    }

    isValid() {
        if(this.count < this.minValue){
            return StatusType.Min;
        }
        if(this.count > this.maxValue){
            return StatusType.Max
        }
        return StatusType.InRange;
    }

    displayInformation(counter, message) {

        const status = this.isValid();

        switch(status) {
            case StatusType.InRange: 
                counter.innerText = this.count;
                message.innerText = "";
                break;
            case StatusType.Min: message.innerText = "Vous ne pouvez pas aller en dessous de "+ minValue;
                this.count = minValue;
                break;
            case StatusType.Max: message.innerText = "Vous ne pouvez pas aller au dessus de "+ maxValue;
                this.count = maxValue;
                break;
            case StatusType.Error: message.innerText = "Oups une erreur est survenue !";
                this.count = 0;
                break;
            default: break;
        }
    }
}

const decreaseButton = document.getElementById("decrease-button");
const increaseButton = document.getElementById("increase-button");
const counterDiv = document.getElementById("counter");
const message = document.getElementById("message");

const counter = new Counter(counterDiv.innerText, minValue, maxValue);

decreaseButton.addEventListener('click', decreaseValue);
increaseButton.addEventListener('click', increaseValue);

function decreaseValue() {
    counter.decrease();

    counter.displayInformation(counterDiv, message);
}
function increaseValue() {
    counter.increase();

    counter.displayInformation(counterDiv, message);
    
}

