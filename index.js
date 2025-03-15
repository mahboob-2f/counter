

const constValue = document.querySelector(".counter");
// console.log(constValue);

function dec(){
    let value = parseInt(constValue.innerHTML);
    value= value-1;
    constValue.innerHTML = value;
}

function inc(){
    let val = parseInt(constValue.innerHTML);
    val= val+1;
    constValue.innerHTML= val;
}