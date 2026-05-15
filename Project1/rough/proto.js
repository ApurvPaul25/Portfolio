const obj = {
    location: "Delhi",
    item: "Watch",
    origin: "Pune",
    getItemDetails(){
        return `${this.item} is currently in ${this.location} it is going to deliver to ${this.origin}.
        AND 
        ${this.item} is currently in ${this.deliveryLocation} with ${this.fname}, and it is going to deliver to ${this.location}.`
    }
}

const obj2 = Object.create(obj)
obj2.location = "Amritsar"
obj2.item = "Shoes"

// console.log(obj)
// console.log(obj.getItemDetails())

// console.log(obj2)
// console.log(obj2.getItemDetails())

const obj3 ={
    fname: "Amit",
    deliveryLocation: "Kashmir",
    __proto__: obj2
}

// console.log(obj3.getItemDetails())

console.log("obj3",obj3)
console.log("obj3-> prev",obj3.__proto__)
console.log("obj3-> prev-> prev", obj3.__proto__.__proto__)
console.log("obj3-> prev-> prev-> prev",obj3.__proto__.__proto__.__proto__)