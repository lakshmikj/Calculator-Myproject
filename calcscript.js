function clickbtn(val){
document.getElementById("screen").value=document.getElementById("screen").value+val;
}
function clearDisplay(){
    document.getElementById("screen").value="";
}
function clickequal(){
    var txt=document.getElementById('screen').value;
    var result=eval(txt);
    document.getElementById('screen').value=result;
}