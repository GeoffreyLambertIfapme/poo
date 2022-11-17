class Animal {
    name;
    poids = 0;

    constructor(name) {
        this.name = name;
    }

    display(forum, message) {
        forum.innerText = message;
     }

 
     manger() {
         this.poids = this.poids + 0.1;
     }
}

class Chat extends Animal{
    
    constructor(name) {
        super(name);

        this.poids = 4;
    }

    parler(forum) {
        super.display(forum, `${this.name} miaule`);
    }
}

class Chien extends Animal{
    
    constructor(name) {
        super(name);

        this.poids = 8;
    }

    parler(forum) {
        super.display(forum, `${this.name} aboie`);
    }
}

const monChat = new Chat('Tico');
const monChien = new Chien('Sia');


const talk = document.getElementById("talk-box");
const parler = document.getElementById("parler");
parler.addEventListener('click', () => {
    monChat.parler(talk);
})
const balance = document.getElementById("balance")
const manger = document.getElementById("manger");
manger.addEventListener('click', () => {
    monChat.manger();

    balance.innerText = monChat.poids;
});



const talk_chien = document.getElementById("talk-box-chien");
const parler_chien = document.getElementById("parler-chien");
parler_chien.addEventListener('click', () => {
    monChien.parler(talk_chien);
})
const balance_chien = document.getElementById("balance-chien")
const manger_chien = document.getElementById("manger-chien");
manger_chien.addEventListener('click', () => {
    monChien.manger();

    balance_chien.innerText = monChien.poids;
});