
var cookies = getcookies();

var AddCookies = 1;

var Upgrade = 2;

var Autoclick = 1;

var upprice = 30;

var autoprice = 60;

function Add(){
cookies = cookies+AddCookies
document.getElementById("total").innerHTML = cookies
savecookies()
}

document.getElementById("upgrbtn").onclick = function() {upgrd()};
function upgrd() 
{
    if (cookies>=upprice)
    {
        alert("You just purchased an upgrade")
        AddCookies=AddCookies*Upgrade
        cookies=cookies-upprice
        upprice=upprice*5
        document.getElementById("upgpr").innerHTML = upprice
    }
    else
    {
        alert("Not enough cookies")
    }
}

document.getElementById("acpr").onclick = function() {auto()};
function auto(){
    if (cookies>=autoprice)
    {
        cookies=cookies-autoprice
        window.setInterval(
        function clicker()
        {
            cookies=cookies+Autoclick
            document.getElementById("acpr").innerHTML = autoprice
            document.getElementById("total").innerHTML = cookies
        }
                ,1000);
        alert("You just purchased an upgrade")
        autoprice=autoprice*8
        Autoclick=Autoclick*Upgrade
    }
    else
    {
        alert("Not enough cookies")
    }
}

function savecookies(){
    document.cookie='cookie=' + cookies; 'expires = Tue, 19 Jan 2038 03:14:07 GMT'
    console.log(document.cookie);
}

function getcookies(){
    let cookiestring=document.cookie;
    let string= parseInt(cookiestring.split("=")[1]);
    console.log(string);
    console.log(typeof string);
    if (isNaN(string)){
        string = 0;
    }
    return string;
}
