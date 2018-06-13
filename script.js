document.getElementById("inputoutputBox").innerHTML = "0"
function clickButton(button){
    if (document.getElementById("inputoutputBox").innerHTML !== "0"){
        document.getElementById("inputoutputBox").innerHTML = document.getElementById("inputoutputBox").innerHTML + button;
    }
    else {
        document.getElementById("inputoutputBox").innerHTML = button;
    }
}

function calculate(){
    var result = eval(document.getElementById("inputoutputBox").innerHTML);
    document.getElementById("inputoutputBox").innerHTML = result;
}

function del(){
    if (document.getElementById("inputoutputBox").innerHTML !== "0"){
        document.getElementById("inputoutputBox").innerHTML = document.getElementById("inputoutputBox").innerHTML.substring(0,document.getElementById("inputoutputBox").innerHTML.length - 2)
        if (!document.getElementById("inputoutputBox").innerHTML)
        document.getElementById("inputoutputBox").innerHTML = "0";
    }
}

function clr(){
    document.getElementById("inputoutputBox").innerHTML = "0";
}