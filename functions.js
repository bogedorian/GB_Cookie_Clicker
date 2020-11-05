var cookies=0;
var AddCookies=1;
var Upgrade=2;
var Autoclick=1;
var upprice=30;
function Add(){
cookies=cookies+AddCookies
document.getElementById("total").innerHTML=cookies
}
document.getElementById("upgrbtn").onclick = function() {upgrd()};
function upgrd() {
    if (cookies>=upprice){
    alert("You just purchased an upgrade")
    AddCookies=AddCookies*Upgrade
    cookies=cookies-upprice
    upprice=upprice*5
    document.getElementById("upgpr").innerHTML = upprice
    }
    else{
    alert("Not enough cookies")
    }
}

