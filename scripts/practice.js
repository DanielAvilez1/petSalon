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
        street:"Palomar",
        zip:"85756",
        city:"Tucson",
        country:"USA"
    }
}

document.write(student.address.city,student.address.country,student.address.street,);
//console.log(student.hobbies)

let product1={
    name:"Laptop",
    description:"macbook 16`",
    price:1000,
}
let product2={
    name:"Monitor",
    description:"dell 27`",
    price:240,
}
let product3={
    name:"desk",
    description:"l shape",
    price:200,
}
products =[product1,product2,product3];

//products.push(product1,product2,product3);

function displayName(){
    for(let i=0;i<products.length;i++){
        
        console.log(products[i].description);
    }
}

displayName();
