class Animal {

    nom = "";

    #age = 0;
    
    constructor(nom) {
      this.nom = nom;
    }
  
    parle() {
      console.log(`${this.nom} fait du bruit.`);
    }
}

class Chat extends Animal {
    constructor(nom) {
      super(nom); // appelle le constructeur parent avec le paramètre
    }
    parle() {
      console.log(`${this.nom} miaule.`);
    }
}

const monChat = new Chat('Tico');

monChat.parle();
