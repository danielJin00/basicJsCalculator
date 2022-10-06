var inputstring;
var output; 


function buttonpress(id){
    var content = document.getElementById(id)
    inputstring += content;
    showresult(inputstring);
}
function showresult(result){
    document.getElementById("outputfield").innerHTML = result; 
}

function inputreset() {
    inputstring = null;
    showresult(inputstring);
}

function calculate() {

}
