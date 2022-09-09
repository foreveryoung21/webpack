export function generateElement (element,...elementClass){
    let createElement= document.createElement(element);
    if(elementClass.length===0){
        return createElement;
    }else{
        createElement.classList.add(...elementClass);
        return createElement;
    }
}








