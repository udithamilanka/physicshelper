function cubecalculation(){
    var a = document.getElementById("cube1").value;
    var b = document.getElementById("cube2").value;
    var c = document.getElementById("cube3").value;
    document.getElementById("cubevolume").innerHTML = "Surface Area of the cuboid is, " + (a*b*2+a*c*2+b*c*2) + " area units";
}

function spherecalculation(){
    var a = document.getElementById("sphere1").value;
    document.getElementById("spherevolume").innerHTML = "Surface Area the sphere is, " + (4*Math.PI*a*a) + " area units";
}

function cylindercalculation(){
    var a = document.getElementById("cylinder1").value;
    var b = document.getElementById("cylinder2").value;
    document.getElementById("cylindervolume").innerHTML = "Surface Area the cylinder is, " + (Math.PI*a*a*2+b*2*Math.PI*a) + " area units";
}

function pyramidcalculation(){
    var a = document.getElementById("pyramid1").value;
    var b = document.getElementById("pyramid2").value;
    var c = document.getElementById("pyramid3").value;
    document.getElementById("pyramidvolume").innerHTML = "Surface Area of the pyramid is, " + (a*b+a*Math.sqrt(b*b/4+c*c)+b*Math.sqrt(a*a/4+c*c)) + " area units";
}

function conecalculation(){
    var a = document.getElementById("cone1").value;
    var b = document.getElementById("cone2").value;
    document.getElementById("conevolume").innerHTML = "Surface Area of the cone is, " + (Math.PI*a*(a+Math.sqrt(a*a+b*b))) + " area units";
}