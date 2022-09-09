import { selectElement } from "../utils/elementSelector";
import { generateElement } from '../utils/elementBuilder'
import { append } from '../utils/append';


let createElements = function () {
    let h1 = generateElement("h1");


    let bevContainer = generateElement("div", "bev-container")
    let bevHeader = generateElement("h2");
    let berryDiv = generateElement("div", "berry");
    let berryTitle = generateElement("h3");
    let berryParagraph = generateElement("p");
    let berryPrice = generateElement("p");
    let berryImage = generateElement("img", "berry-img");


    let sideContainer = generateElement("div", "side-container")
    let sideHeader = generateElement("h2");
    let sideDiv = generateElement("div", "side");
    let sideTitle = generateElement("h3");
    let sideParagraph = generateElement("p");
    let sidePrice = generateElement("p");
    let sideImage = generateElement("img", "side-img");


    let mainContainer = generateElement("div", "main-container")
    let mainHeader = generateElement("h2");
    let mainDiv = generateElement("div", "side");
    let mainTitle = generateElement("h3");
    let mainParagraph = generateElement("p");
    let mainPrice = generateElement("p");
    let mainImage = generateElement("img", "main-img");









    return {
        h1,
        bevContainer,
        bevHeader,
        berryDiv,
        berryTitle,
        berryParagraph,
        berryPrice,
        berryImage,
        sideContainer,
        sideHeader,
        sideDiv,
        sideTitle,
        sideParagraph,
        sidePrice,
        sideImage,
        mainContainer,
        mainHeader,
        mainDiv,
        mainTitle,
        mainParagraph,
        mainPrice,
        mainImage


    }
}

let elementsObj = createElements();
let addInnerText = function ({
    h1,
    bevContainer,
    bevHeader,
    berryDiv,
    berryTitle,
    berryParagraph,
    berryPrice,
    berryImage,
    sideContainer,
    sideHeader,
    sideDiv,
    sideTitle,
    sideParagraph,
    sidePrice,
    sideImage,
    mainContainer,
    mainHeader,
    mainDiv,
    mainTitle,
    mainParagraph,
    mainPrice,
    mainImage

}) {

    h1.innerText = "Menu";
    bevHeader.innerText = "Beverages";
    berryTitle.innerText = "Berry Juice";
    berryParagraph.innerText = "A warm, sweet tea made with the highest quality honey and a bit of lemon to start your day off right!";
    berryPrice.innerText = "£2";
    berryImage.src = "https://vaya.in/recipes/wp-content/uploads/2018/05/Goji-Berry-Juice.jpg"


    sideHeader.innerText = "Sides";
    sideTitle.innerText = "Fresh Fruit";
    sideParagraph.innerText = "A warm, sweet tea made with the highest quality honey and a bit of lemon to start your day off right!";
    sidePrice.innerText = "£4";
    sideImage.src = "https://www.cookingclassy.com/wp-content/uploads/2019/05/fruit-salad-2-500x375.jpg";


    return {
        h1,
        bevContainer,
        bevHeader,
        berryDiv,
        berryTitle,
        berryParagraph,
        berryPrice,
        berryImage,
        sideContainer,
        sideHeader,
        sideDiv,
        sideTitle,
        sideParagraph,
        sidePrice,
        sideImage,



    }
}




let elementObj2 = addInnerText(elementsObj);

let appendContent = function ({
    h1,
    bevContainer,
    bevHeader,
    berryDiv,
    berryTitle,
    berryParagraph,
    berryPrice,
    berryImage,
    sideContainer,
    sideHeader,
    sideDiv,
    sideTitle,
    sideParagraph,
    sidePrice,
    sideImage,

}) {

    let parent = selectElement('.content-info');
    let header = selectElement("header");



    append(header, h1);
    append(parent, bevContainer);
    append(bevContainer, bevHeader);
    append(parent, berryDiv);
    append(berryDiv, berryTitle);
    append(berryDiv, berryParagraph);
    append(berryDiv, berryPrice);
    append(berryDiv, berryImage);



    append(parent, sideContainer);
    append(sideContainer, sideHeader);
    append(parent, sideDiv);
    append(sideDiv, sideTitle);
    append(sideDiv, sideParagraph);
    append(sideDiv, sidePrice);
    append(sideDiv, sideImage);








}


export let initializeMenu = function () {
    appendContent(elementObj2);
}











