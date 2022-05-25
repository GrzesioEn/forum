var time = document.getElementById("zegar");

setInterval(setTime,1000);
setTime();

function setTime()
{
    var date = new Date();
    time.innerHTML = "Czas: " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
}

