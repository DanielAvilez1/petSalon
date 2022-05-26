//object literal
let salon={
    name:"The Fashion Pet",
    address:{
        street:"palomar",
        zip:"85756",
        city:"Tucson",
        number:"265-k"
    },
    hours:{
        open:"9:00 a.m",
        close:"5:00 p.m",
    },
    phone:"555-555-5555",
    pets:[
        {
            name:"bob",
            age:50,
            gender:"male",
            breed:"dane",
            service:"grooming",
            owner:"bob",
            phone:"999-999-9999"
        },
        {
            name:"john",
            age:1,
            gender:"Male",
            breed:"husky",
            service:"grooming",
            owner:"Daniel",
            phone:"123-123-1234"
        },
        {

            name:"jim",
            age:9,
            gender:"Male",
            breed:"mixed",
            service:"grooming",
            owner:"gabe",
            phone:"123-143-1234"
        }


    ]
}
console.log(salon.pets[0]);//displaying bob

function displaySalonInfo(){
    let tmp=`
    <p> Welcome to the ${salon.name} located in ${salon.address.city,salon.address.street}</p><p></p>`;

    document.getElementById("info").innerHTML=tmp;
}
displaySalonInfo();

function displayName(){
    for(let i=0;i<salon.pets.length;i++){
        console.log(salon.pets[i].name);
    }
}

displayName();