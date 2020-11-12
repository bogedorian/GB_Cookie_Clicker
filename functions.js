
export var cookies = 0;

export var AddCookies = 1;

export var Upgrade = 2;

export var Autoclick = 1;

export var upprice = 30;

export var autoprice = 60;


export function Add(){
cookies = cookies+AddCookies
document.getElementById("total").innerHTML = cookies
}

document.getElementById("upgrbtn").onclick = function() {upgrd()};
export function upgrd() 
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
export function auto(){
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

