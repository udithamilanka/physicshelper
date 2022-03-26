function cubecalculation(){
    var a = document.getElementById("cube1").value;
    var b = document.getElementById("cube2").value;
    var c = document.getElementById("cube3").value;
    document.getElementById("cubevolume").innerHTML = "Volume of the cuboid is, " + a*b*c + " volume units";
}

function spherecalculation(){
    var a = document.getElementById("sphere1").value;
    document.getElementById("spherevolume").innerHTML = "Volume of the sphere is, " + 4*Math.PI*a*a*a/3 + " volume units";
}

function cylindercalculation(){
    var a = document.getElementById("cylinder1").value;
    var b = document.getElementById("cylinder2").value;
    document.getElementById("cylindervolume").innerHTML = "Volume of the cylinder is, " + Math.PI*a*a*b + " volume units";
}

function pyramidcalculation(){
    var a = document.getElementById("pyramid1").value;
    var b = document.getElementById("pyramid2").value;
    var c = document.getElementById("pyramid3").value;
    document.getElementById("pyramidvolume").innerHTML = "Volume of the pyramid is, " + a*b*c/3 + " volume units";
}

function conecalculation(){
    var a = document.getElementById("cone1").value;
    var b = document.getElementById("cone2").value;
    document.getElementById("conevolume").innerHTML = "Volume of the cone is, " + Math.PI*a*a*b/3 + " volume units";
}