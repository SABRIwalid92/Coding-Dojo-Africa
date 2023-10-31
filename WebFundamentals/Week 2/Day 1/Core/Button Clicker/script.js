// console.log(document.querySelector("header [type]"));
function change(e){
    e.innerHTML = "Logout";
}
function remove(e){
    console.log(e)
    console.log(e.innerHTML)
    console.log(e.innerText)
    e.remove();
}

function liked(e){
    alert("🥷ninja was liked");
    e.parentNode.querySelector("span").innerHTML++
}