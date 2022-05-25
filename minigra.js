var input = document.getElementById("input");
var button = document.getElementById("button");
var answer = document.getElementById("answer");
var list = document.getElementById("list");
var strzaly = 0;

 var los = Math.floor(Math.random() * 10) + 1; // Losowanie Liczby
 // list.innerHTML = los;


button.addEventListener("click", sprawdz);

function sprawdz()
{
    
    var value = Number(input.value);
if (Number.isInteger(value) && value >= 1 && value <= 10){
    strzaly++;
    var li = document.createElement("li");
    list.appendChild(li)
    list.lastChild.innerHTML = strzaly.toString() + ": " + value;
    if(value < los){
        answer.innerHTML = "Liczba jest wieksza";
    }
    else if(value > los)
    {
        answer.innerHTML = "Liczba jest mniejsza";
    }
    else if(value == los){
        answer.innerHTML = "Zgadłeś!";
    }
}else alert("Błędna liczba!");
    

}