var cookies=0;
var AddCookies=1;
var Upgrade=2
var Autoclick=1
function Add(){
cookies=cookies+AddCookies
document.getElementById("total").innerHTML=cookies
}
document.getElementById("upgrbtn").onclick = function() {upgrd()};
function upgrd() {
    alert("You just purchased an upgrade")
    AddCookies=AddCookies*Upgrade
}

