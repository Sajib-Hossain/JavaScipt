function animal(type,live){
    this.type=type,
    this.live=live
}

class Human extends animal{
    constructor(name){
        super("mamal",true);
        this.name=name
    }
}

var anam = new Human("Sajib");
console.log("aita ki type ar animal: " + anam.type);
console.log(`aita ki jibito: ${anam.live}`);
console.log("The name is: " + anam.name);