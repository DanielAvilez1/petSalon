let student = {
    //attr or properties
    name:"Daniel",
    age:99,
    isActive:true,
    //funtion or methods
    sayHi:function(){
        return "hello";
    },
    hobbies:["Football","Listen music","Play Zelda"],
    address:{
        street:"1725 Slough Avenue",
        zip:"85756",
        city:"Tucson",
        country:"USA"
    }
}

document.write(student.address.city,student.address.country,student.address.street,);
//console.log(student.hobbies)

// let product1 ={
//     name:"Laptop",
//     description:"macbook 16`",
//     price:1000,
// }
// let product2 ={
//     name:"Monitor",
//     description:"dell 27`",
//     price:240,
// }
// let product3 ={
//     name:"desk",
//     description:"l shape",
//     price:200,
// }
//let products = [];

function Product(n,d,p){
    this.name=n;
    this.description=d;
    this.price=p;

}
let product1 = new Product("Speaker","Sony Wireless",20.50);
let product2 = new Product("Laptop","HP",100.00);
let product3 = new Product("Monitor","AOC",350.00);
let product4 = new Product("Phone","Apple",1199);
//products =[product1,product2,product3];

console.log(product1,product2,product3,product4);

//products.push(product1,product2,product3);

function displayName(){
    for(let i=0;i<products.length;i++){
        console.log(products[i].description);
    }
}

//displayName();
