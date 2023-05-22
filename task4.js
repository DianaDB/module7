function Electro(name){
    this.price="expensive",
        this.name=name
}
Electro.prototype.getPower=function(power, sw){
    if(sw==="on")
        console.log("мощность включенного прибора "  +  power)
    else
        console.log("прибор выключен")
}
function ColorElectro(name,color){
    this.name=name,
        this.color=color}
ColorElectro.prototype=new Electro()
const philips = new ColorElectro("philips", "black")
philips.getPower(1800,"off")
console.log(philips)