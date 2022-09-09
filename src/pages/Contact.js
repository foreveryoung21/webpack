import { selectElement } from "../utils/elementSelector";
import { generateElement } from '../utils/elementBuilder'
import { append } from '../utils/append';


let createElements = function (){
    let h1 = generateElement("h1");
    let contactDiv1 = generateElement("div","contact");
    let contactDiv2 = generateElement("div","contact");
    let contactDiv3 = generateElement("div","contact")
    let contactHeading1 = generateElement("h2");
    let contactHeading2 = generateElement("h2");
    let contactHeading3 = generateElement("h2");
    let position1 = generateElement("p");
    let position2 = generateElement("p");
    let position3 = generateElement("p");
    let phoneNumber1= generateElement("p");
    let phoneNumber2 = generateElement("p");
    let phoneNumber3 = generateElement("p");
    let email1 = generateElement("p");
    let email2 = generateElement("p");
    let email3 = generateElement("p");
    
    return {
        h1,
        contactDiv1,
        contactDiv2,
        contactDiv3,
        contactHeading1,
        contactHeading2,
        contactHeading3,
        position1,
        position2,
        position3,
        phoneNumber1,
        phoneNumber2,
        phoneNumber3,
        email1,
        email2,
        email3  
      
       
    }
}

let elementsObj = createElements();
let addInnerText = function ({
    h1,
        contactDiv1,
        contactDiv2,
        contactDiv3,
        contactHeading1,
        contactHeading2,
        contactHeading3,
        position1,
        position2,
        position3,
        phoneNumber1,
        phoneNumber2,
        phoneNumber3,
        email1,
        email2,
        email3  


    

}){

    h1.innerText ="Contact";
    contactHeading1.innerText = "Mama Bear";
    contactHeading2.innerText = "Papa Bear";
    contactHeading3.innerText = "Baby Bear";
    position1.innerText = "Chef";
    position2.innerText = "Manager";
    position3.innerText = "Waiter";
    phoneNumber1.innerText = "555-555-5554";
    phoneNumber2.innerTest = "555-555-5555";
    phoneNumber3.innerTest = "555-555-5556";
    email1.innerText = "totallyRealEmail@notFake.com";
    email2.innerText = "perfectlyRealEmail@notFake.com";
    email3.innerText = "totallyRealEmail@notFake.com";



    return {
        h1,
        contactDiv1,
        contactDiv2,
        contactDiv3,
        contactHeading1,
        contactHeading2,
        contactHeading3,
        position1,
        position2,
        position3,
        phoneNumber1,
        phoneNumber2,
        phoneNumber3,
        email1,
        email2,
        email3  
        

   
    }
}




let elementObj2 = addInnerText(elementsObj);

let appendContent = function ({
    h1,
    contactDiv1,
        contactDiv2,
        contactDiv3,
        contactHeading1,
        contactHeading2,
        contactHeading3,
        position1,
        position2,
        position3,
        phoneNumber1,
        phoneNumber2,
        phoneNumber3,
        email1,
        email2,
        email3  
}){

    let parent = selectElement('.content-info');
    let header = selectElement("header");
    
    append(header,h1);
    append(parent,contactDiv1);
    append(contactDiv1,contactHeading1);
    append(contactDiv1,position1)
    append(contactDiv1,position1);
    append(contactDiv1,phoneNumber1);
    append(contactDiv1,email1);
    append(parent,contactDiv2);
    append(contactDiv2,contactHeading2);
    append(contactDiv2,position2)
    append(contactDiv2,position2);
    append(contactDiv2,phoneNumber2);
    append(contactDiv2,email2);
    append(parent,contactDiv3);
    append(contactDiv3,contactHeading3);
    append(contactDiv3,position3)
    append(contactDiv3,position3);
    append(contactDiv3,phoneNumber3);
    append(contactDiv3,email3);


}


export let initializeContact = function(){
    appendContent(elementObj2);
}







