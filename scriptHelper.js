// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}

function validateInput(testInput) {
    if(testInput === ""){
        return "Empty"
    }else if(isNaN(testInput)){
        return "Not a Number"
    }else{
        return "Is a Number"
    }
}

function formSubmission(document,pilot, copilot, fuelLevel, cargoLevel) {

        pilot = document.querySelector("input[name=pilotName]")
        copilot = document.querySelector("input[name=copilotName]")
        fuelLevel = document.querySelector("input[name=fuelLevel]")
        cargoLevel = document.querySelector("input[name=cargoMass]")
        let arry = [pilot, copilot, fuelLevel,cargoLevel]
        
        for(let i=0;i<arry.length;++i){
            if(validateInput(arry[i].value) === 'Empty'){
                alert("All fields required!")
                preventDefault();
            }
        }
        for(let i=0;arry.length;i++){
            if(validateInput(arry[i].value) === 'Not a Number'){
                if(arry[i].name === 'fuelLevel' || arry[i].name === 'cargoMass'){
                    alert("Make sure to enter valid information for each field")
                    preventDefault();
                    }
            }else if(validateInput(arry[i].value) === 'Is a Number'){
                if(arry[i].name === 'pilotName' || arry[i].name === 'copilotName'){
                    alert("Make sure to enter valid information for each field")
                    preventDefault();
                }
            }else{
                document.getElementById("pilotStatus").innerHTML = `Co-pilot ${pilot.value} is ready for launch`;
        }
    }
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;