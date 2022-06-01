function displayCards(){
    let petDiv= $("#pets");
    petDiv.html("");//clear the canvas
    //travel the array
    let tmp="";
    for(let i=0;i<salon.pets.length;i++){
       let pet = salon.pets[i];
       tmp=`
            <div class="pet">
                <h5>Name: ${pet.name}🐾</h5>
                <p>Age:${pet.name}</p>
                <p>Gender:${pet.gender}</p>
                <p>Breed:${pet.breed}</p>
                <p>Service ${pet.service}</p>
                </div>
                `;  
                
    }
  
}

function displayTable(){
   let table= $("#petsTable");
   table.html("");
   let tr="";
   for(let i=0;i<salon.pets.length;i++){
       let pet= salon.pets[i];
       tr=`
       <tr>
            <td>${pet.name}</td>
            <td>${pet.age}</td>
            <td>${pet.gender}</td>
            <td>${pet.breed}</td>
            <td>${pet.service}</td>
            <td>${pet.ownersName}</td>
            <td>${pet.contactPhone}</td>
        </tr>
        `;
        table.append(tr);
   } 
           
      
}