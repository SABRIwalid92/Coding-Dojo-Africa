function report(){
    alert("Loading weather report...");
}
function hide(e){
    e.parentNode.remove();
}
function change(e){
    var tabCelcius = [24, 18, 27, 19, 21, 16, 26, 21];
    var tabFahrenheit = [75, 65, 80, 66, 69, 61, 78, 70];
    for(var i = 0; i<8; i++){
        if(e.value == "°F"){
            document.querySelectorAll("span")[i].innerHTML = tabFahrenheit[i];
        }
        else{
            document.querySelectorAll("span")[i].innerHTML = tabCelcius[i];
        }
        }
}