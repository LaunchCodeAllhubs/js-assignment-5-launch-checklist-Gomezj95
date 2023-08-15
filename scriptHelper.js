// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
    let mission = document.getElementById('missionTarget')

    mission.innerHTML = `<h2>Mission Destination</h2>
                <ol>
                    <li>Name:${name} </li>
                    <li>Diameter: ${diameter}</li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth:${distance} </li>
                    <li>Number of Moons: ${moons}</li>
                </ol>
                <img src="${imageUrl}">`

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

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    pilot = document.querySelector("input[name=pilotName]")
    copilot = document.querySelector("input[name=copilotName]")
    fuelLevel = document.querySelector("input[name=fuelLevel]")
    cargoLevel = document.querySelector("input[name=cargoMass]")
    list = document.getElementById('faultyItems')

    let arry = [pilot, copilot, fuelLevel, cargoLevel]

    for (let i = 0; i < arry.length; ++i) {
        if (validateInput(arry[i].value) === 'Empty') {
            alert("All fields required!")
            return;
        }
    }
    for (let i = 0; arry.length; ++i) {
        if (validateInput(arry[i].value) === 'Not a Number') {
            if (arry[i].name === 'fuelLevel' || arry[i].name === 'cargoMass') {
                alert("Make sure to enter valid information for each field")
                return;
            }
        } else if (validateInput(arry[i].value) === 'Is a Number') {
            if (arry[i].name === 'pilotName' || arry[i].name === 'copilotName') {
                alert("Make sure to enter valid information for each field")
                return;
            }
        } break;
    }  

this.document.getElementById('pilotStatus').innerHTML = `Pilot ${pilot.value} is ready to launch.`
this.document.getElementById('copilotStatus').innerHTML = `Pilot ${copilot.value} is ready to launch.`

if(fuelLevel.value < 10000 && cargoLevel.value <= 10000){
    list.style.visibility = 'visible';
    this.document.getElementById('fuelStatus').innerHTML = ` ${fuelLevel.value} liters is not enough for this trip!`
    this.document.getElementById('launchStatus').innerHTML = `Shuttle not ready for launch`
    this.document.getElementById('launchStatus').style.color = 'red'
}else if(cargoLevel.value > 10000 && fuelLevel.value < 10000){
    list.style.visibility = 'visible';
    this.document.getElementById('cargoStatus').innerHTML = `${cargoLevel.value} kilograms is over the 10,000 kg weight limit!`
    this.document.getElementById('launchStatus').innerHTML = `Shuttle not ready for launch`
    this.document.getElementById('launchStatus').style.color = '#C7254E'
}else if(fuelLevel.value >= 10000 && cargoLevel.value > 10000){
    list.style.visibility = 'visible';
    this.document.getElementById('cargoStatus').innerHTML = `${cargoLevel.value} kilograms is over the 10,000 kg weight limit!`
    this.document.getElementById('launchStatus').innerHTML = `Shuttle not ready for launch`
    this.document.getElementById('launchStatus').style.color = '#C7254E'
}else{
    this.document.getElementById('launchStatus').style.color = '#419F6A'
    list.style.visibility = 'visible';
    this.document.getElementById('launchStatus').innerHTML = `Shuttle is ready for launch.`
    this.document.getElementById('pilotStatus').innerHTML = `Pilot ${pilot.value} is ready to launch.`
    this.document.getElementById('copilotStatus').innerHTML = `Pilot ${copilot.value} is ready to launch.`
    this.document.getElementById('cargoStatus').innerHTML = 'Cargo mass low enough for launch.'
    this.document.getElementById('fuelStatus').innerHTML = `Fuel level high enough for launch.`

}

};

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
    return response.json()});

    return planetsReturned;
}

function pickPlanet(planets) {
    return planets[Math.floor(Math.random()*planets.length)];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;