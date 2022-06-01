//object literal
let salon={
    name:"The Fashion Pet",
    address:{
        street:"1725 Slough Avenue",
        zip:"85756",
        city:"Tucson",
        number:"265-k"
    },
    hours:{
        open:"9:00 a.m",
        close:"5:00 p.m",
    },
    phone:"555-555-5555",
    pets:[]
}
//console.log(salon.pets[0]);//displaying bob

function displaySalonInfo(){
    let tmp=`
    <p> Welcome to the ${salon.name} located in ${salon.address.city,salon.address.street}</p><p></p>`;

    document.getElementById("info").innerHTML=tmp;
    console.log("displaying");
}
// //displaySalonInfo();

// //function displayName(){
//     for(let i=0;i<salon.pets.length;i++){
//         console.log(salon.pets[i].name);
//     }
// }

// //displayName();
// //alert(`Registered Pets: ${salon.pets.lenth}`);

function Pet(name,age,gender,breed,service,owner,phone){
    this.name=name;
    this.age=age;
    this.gender=gender;
    this.breed=breed;
    this.service=service;
    this.ownersName=owner;
    this.contactPhone=phone;
}
//creating default pets
    let pet1 = new Pet("Bob",4,"Male","Mixed","Haircut","Ken",1111111112);
    let pet2 = new Pet("Sparky",1,"Male","Husky","Full","Daniel",5208080000);
    let pet3 = new Pet("Scooby",50,"Male","Dane","Nails Cut","Shaggy",5551111111);
    let pet4 = new Pet("Scrappy",3,"Male","Mixed","Shower","Shaggy",5551111111);
    
    
    //console.log(pet1,pet2,pet3,pet4);

    function isValid(aPet){
        let valid=true;
        if(aPet.name==""|| aPet.service==""|| aPet.contactphone==""){
            valid=false;
        }
        return valid;
    }

//register pets
function register(){
    console.log("Registering");
    //get the info from the input*** getElementById .value
    let petName=document.getElementById("txtName").value;
    let petAge=document.getElementById("txtAge").value;
    let petGender=document.getElementById("txtGender").value;
    let petBreed=document.getElementById("txtBreed").value;
    let petService=document.getElementById("selService").value;
    let ownersName=document.getElementById("txtOwner").value;
    let contactPhone=document.getElementById("txtPhone").value;
    //creat the object using the constructor
    let newPet = new Pet(petName,petAge,petGender,petBreed,petService,ownersName,contactPhone)
    if(isValid(newPet)==true){
    //push the object in on the array
    salon.pets.push(newPet);
    //display it in the Html
    displayTable();
    //console.log(newPet);
    //console.log(salon.pets);
    //clear the form
    clear();
}
else{
    alert("Add a name for the pet");
    }
}
function clear(){
    //let inputs=document.getElementsByTagName(`input`);
    //let inputs=document.querySelector("input")
   // for(let i=0;i<inputs.length;i++){
   //     inputs[i].value="";
   // }
    //console.log(inputs);
    $("input").val("");
}
function init(){
    //hook events, triggered events
    displaySalonInfo();
    salon.pets.push(pet1,pet2,pet3,pet4);
    displayTable();
}
window.onload=init;