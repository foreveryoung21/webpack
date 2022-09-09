import '../src/styles/main.css'
import {initializeHome} from '../src/pages/Home'
import { selectElement } from './utils/elementSelector'
import { initializeContact } from './pages/Contact';
import {initializeMenu} from "./pages/Menu"


initializeHome();

let navElement = selectElement("nav ul");
let contentContainer = selectElement(".content-info");
let header = selectElement("header");

navElement.addEventListener("click",function(event){

    if(event.target.matches(".nav-contact li")){
       contentContainer.innerHTML="";
       header.innerHTML ="";
       initializeContact();
    }else if (event.target.matches(".nav-home li")){
        header.innerText ="";
        contentContainer.innerHTML="";
        initializeHome()  
    }else if(event.target.matches(".nav-menu li")){
        header.innerText ="";
        contentContainer.innerHTML="";
        initializeMenu();

    }
})











