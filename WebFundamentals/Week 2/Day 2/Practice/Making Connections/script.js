console.log("page loaded...");
function hide(e,x){
    e.parentNode.parentNode.remove();
    document.querySelector("#CRCounter").innerHTML--;
    if(document.querySelector("#CRCounter").innerHTML == 0){
        document.querySelector("#CRCounter").parentNode.parentNode.remove();
    }

    if(x===1){
        document.querySelector("#YCCounter").innerHTML++;
    }
}
function change(){
    document.querySelector("#name").innerHTML = "Jane Do Doe"
}