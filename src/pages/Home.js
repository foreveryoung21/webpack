import { selectElement } from "../utils/elementSelector";
import { generateElement } from '../utils/elementBuilder'
import { append } from '../utils/append';


let createElements = function (){
    let reviewDiv = generateElement("div", "review","home");
    let hoursDiv = generateElement("div", "info-hours","home");
    let locationDiv = generateElement("div", "info-location","home");
    let h1 = generateElement("h1","home");
    let header = generateElement("header");
    let hoursHeading =generateElement("h2");
    let locationHeading = generateElement("h2");
    let addressHeading = generateElement("h2");
    let reviewHeading = generateElement("h2");
    let review= generateElement("p");
    let day1= generateElement("p");
    let day2= generateElement("p");
    let day3= generateElement("p");
    let day4= generateElement("p");
    let day5= generateElement("p");
    let day6= generateElement("p");
    let day7= generateElement("p");
    let days = [day1,day2,day3,day4,day5,day6,day7]
    let address = generateElement("p");
    return {
        address,
        addressHeading,
        reviewDiv,
        hoursDiv,
        locationDiv,
        h1,
        header,
        hoursHeading,
        locationHeading,
        review,
        reviewHeading,
        days
    }
}

let elementsObj = createElements();
let addInnerText = function ({
    address,
    addressHeading,
    reviewDiv,
    hoursDiv,
    locationDiv,
    h1,
    header,
    hoursHeading,
    locationHeading,
    reviewHeading,
    review,
    days,

}){

address.innerText = "123 Forest Drive, Forestville, Maine";
h1.innerText = " Aqua  Sea Food ";
locationHeading.innerText = "Location";
hoursHeading.innerText ="Hours" 
reviewHeading.innerText  = "Sam"
review.innerText = "Aqua has the best sea food! The atmosphere and customer service make you feel like you are sitting in the middle of the woods, eating like a bear! This is exactly the kind of place that I like to return to again and again."
days[0].innerText = " Sunday: 8am - 8pm"
days[1].innerText = " Monday: 6am - 6pm"
days[2].innerText = "Tuesday: 6am - 6pm"
days[3].innerText = "Wednesday: 6am - 6pm"
days[4].innerText = "Thursday: 6am - 10pm"
days[5].innerText = "Friday: 6am - 10pm"
days[6].innerText = "Saturday: 8am - 10pm"

    return {
    addressHeading,
    address,
    reviewDiv,
    reviewHeading,
    hoursDiv,
    locationDiv,
    h1,
    hoursHeading,
    locationHeading,
    review,
    days,

    }
}




let elementObj2 = addInnerText(elementsObj);

let appendContent = function ({
    address,
    reviewDiv,
    hoursDiv,
    locationDiv,
    h1,
    hoursHeading,
    locationHeading,
    review,
    reviewHeading,
    days,
}){

let parent = selectElement('.content-info');
let header = selectElement("header");


for(let day of days){
    append(hoursDiv,day);
}

append(header,h1);
append(parent,reviewDiv);
append(parent,hoursDiv);
append(parent,locationDiv);

hoursDiv.insertBefore(hoursHeading,hoursDiv.firstChild)

append(locationDiv,locationHeading)
append(locationDiv,address)
append(reviewDiv,review);
append(reviewDiv,reviewHeading);


}


export let initializeHome = function(){
    appendContent(elementObj2);
}






