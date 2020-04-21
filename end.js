// setup vatible  and Const
var Scoore = document.getElementById('score');
var UpdateScore = localStorage.getItem('Yscore');
const GifW = document.getElementById("GifW")
const GifL = document.getElementById("GifL")
// Function Of Click In Buuton Save
function Save(e)
{
    e.preventDefault();
    console.log("alertbe happy");
}
// Function Of Click In Buuton Save Go to Home Page
function TryAgain()
{
    window.location.assign('/index.html');
}
// Print in Dom Score
Scoore.innerHTML = UpdateScore;
// Gif 
if (UpdateScore==60)
{
        
        GifW.style.display="block"
}
else 
{
        GifL.style.display="block"
}

