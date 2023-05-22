class Electro {
    constructor(name) {
        this.name = name;
        this.price = "expensive";
    }

    getPower(power, sw) {
        if (sw === "on") {
            console.log("мощность включенного прибора " + power)
        } else {
            console.log("прибор выключен")
        }
    }
}
class ColorElectro extends Electro {
    constructor(name,color){
        super(name);
        this.color=color;
    }
}

const philips = new ColorElectro("philips", "black");
console.log (philips)
console.log (philips.getPower (1800,"on"))