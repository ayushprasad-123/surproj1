state="";
obj="";
function setup(){
    c=createCanvas(424,300);
    c.center();
    v=createCapture(VIDEO);
    v.size(424,300);
    v.hide();
}
function start(){
    mod=ml5.objectDetector("cocossd",whenLoad);
    document.getElementById("status").innerHTML="Detection in progress...";
    obj=document.getElementById("objname").value;
}
function draw(){
    image(v,0,0,424,300);
}
function whenLoad(){}