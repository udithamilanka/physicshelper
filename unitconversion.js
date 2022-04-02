function lengthconvert(){
    var select = document.getElementById('length1');
    var value1 = select.options[select.selectedIndex].value;
    var select = document.getElementById('length2');
    var value2 = select.options[select.selectedIndex].value;
    var c = document.getElementById("lengthvalue").value;

    if (value1=='km'){
        convert1 = c*10**3;
    }else if (value1=='m'){
        convert1 = c;
    }else if (value1=='cm'){
        convert1 = c*0.01;
    }else if (value1=='mm'){
        convert1 = c*0.001;
    }else if (value1=='um'){
        convert1 = c*0.000001;
    }else if (value1=='nm'){
        convert1 = c*0.000000001;
    }else if (value1=='mi'){
        convert1 = c*1609.34;
    }else if (value1=='ya'){
        convert1 = c*0.9144;
    }else if (value1=='ft'){
        convert1 = c*0.3048;
    }else if (value1=='in'){
        convert1 = c*0.0254;
    }else if (value1=='nmi'){
        convert1 = c*1852;
    }
    

    if (value2=='km'){
        convert2 = convert1/10**3;
        document.getElementById("lengthconversion").innerHTML = convert2 + " Kilometers";
    }else if (value2=='m'){
        convert2 = convert1;
        document.getElementById("lengthconversion").innerHTML = convert2 + " Meters";
    }else if (value2=='cm'){
        convert2= convert1/0.01;
        document.getElementById("lengthconversion").innerHTML = convert2 + " Centimeters";
    }else if (value2=='mm'){
        convert2 = convert1/0.001;
        document.getElementById("lengthconversion").innerHTML = convert2 + " Millimeters";
    }else if (value2=='um'){
        convert2 = convert1/0.000001;
        document.getElementById("lengthconversion").innerHTML = convert2 + " Micrometers";
    }else if (value2=='nm'){
        convert2 = convert1/0.000000001;
        document.getElementById("lengthconversion").innerHTML = convert2 + " Nanometers";
    }else if (value2=='mi'){
        convert2 = convert1/1609.34;
        document.getElementById("lengthconversion").innerHTML = convert2 + " Miles";
    }else if (value2=='ya'){
        convert2 = convert1/0.9144;
        document.getElementById("lengthconversion").innerHTML = convert2 + " Yards";
    }else if (value2=='ft'){
        convert2 = convert1/0.3048;
        document.getElementById("lengthconversion").innerHTML = convert2 + " Feet";
    }else if (value2=='in'){
        convert2 = convert1/0.0254;
        document.getElementById("lengthconversion").innerHTML = convert2 + " Inches";
    }else if (value2=='nmi'){
        convert2 = convert1/1852;
        document.getElementById("lengthconversion").innerHTML = convert2 + " Nautical miles";
    }

}


function areaconvert(){
    var select = document.getElementById('area1');
    var value1 = select.options[select.selectedIndex].value;
    var select = document.getElementById('area2');
    var value2 = select.options[select.selectedIndex].value;
    var c = document.getElementById("areavalue").value;

    if (value1=='sqkm'){
        convert1 = c*10**6;
    }else if (value1=='sqm'){
        convert1 = c;
    }else if (value1=='sqmi'){
        convert1 = c*2589988.110336;
    }else if (value1=='sqyard'){
        convert1 = c*0.83612736;
    }else if (value1=='sqfoot'){
        convert1 = c*0.092903;
    }else if (value1=='sqinch'){
        convert1 = c*0.00064516;
    }else if (value1=='hectare'){
        convert1 = c*10000;
    }else if (value1=='acre'){
        convert1 = c*4046.86;
    }

    if (value2=='sqkm'){
        convert2 = convert1/1000000 ;
        document.getElementById("areaconversion").innerHTML = convert2 + " Square kilometers";
    }else if (value2=='sqm'){
        convert2 = convert1;
        document.getElementById("areaconversion").innerHTML = convert2 + " Square meters";
    }else if (value2=='sqmi'){
        convert2 = convert1/2589988.110336;
        document.getElementById("areaconversion").innerHTML = convert2 + " Square miles";
    }else if (value2=='sqyard'){
        convert2 = convert1/0.83612736;
        document.getElementById("areaconversion").innerHTML = convert2 + " Square yards";
    }else if (value2=='sqfoot'){
        convert2 = convert1/0.092903;
        document.getElementById("areaconversion").innerHTML = convert2 + " Square feet";
    }else if (value2=='sqinch'){
        convert2 = convert1/0.00064516;
        document.getElementById("areaconversion").innerHTML = convert2 + " Square inches";
    }else if (value2=='hectare'){
        convert2 = convert1/10000;
        document.getElementById("areaconversion").innerHTML = convert2 + " Hectares";
    }else if (value2=='acre'){
        convert2 = convert1/4046.86;
        document.getElementById("areaconversion").innerHTML = convert2 + " Acres";
    }

}

function volumeconvert(){
    var select = document.getElementById('volume1');
    var value1 = select.options[select.selectedIndex].value;
    var select = document.getElementById('volume2');
    var value2 = select.options[select.selectedIndex].value;
    var c = document.getElementById("volumevalue").value;

    if (value1=='lg'){
        convert1 = c*3.78541;
    }else if (value1=='lq'){
        convert1 = c*0.946353;
    }else if (value1=='lp'){
        convert1 = c*0.473176;
    }else if (value1=='lc'){
        convert1 = c*0.24;
    }else if (value1=='ufo'){
        convert1 = c*0.0295735;
    }else if (value1=='utb'){
        convert1 = c*0.0147868;
    }else if (value1=='ute'){
        convert1 = c*0.00492892;
    }else if (value1=='cm'){
        convert1 = c*1000;
    }else if (value1=='l'){
        convert1 = c;
    }else if (value1=='ml'){
        convert1 = c*0.001;
    }else if (value1=='g'){
        convert1 = c*4.54609;
    }else if (value1=='q'){
        convert1 = c*1.13652;
    }else if (value1=='p'){
        convert1 = c*0.568261;
    }else if (value1=='c'){
        convert1 = c*0.284131;
    }else if (value1=='fo'){
        convert1 = c*0.0284131;
    }else if (value1=='tb'){
        convert1 = c*0.0177582;
    }else if (value1=='te'){
        convert1 = c*0.00591939;
    }else if (value1=='cf'){
        convert1 = c*28.3168;
    }else if (value1=='ci'){
        convert1 = c*0.0163871;
    }

    if (value2=='lg'){
        convert2 = convert1/3.78541;
        document.getElementById("volumeconversion").innerHTML = convert2 + " Us liquid galons";
    }else if (value2=='lq'){
        convert2 = convert1/0.946353;
        document.getElementById("volumeconversion").innerHTML = convert2 + " Us liquid quarts";
    }else if (value2=='lp'){
        convert2 = convert1/0.473176;
        document.getElementById("volumeconversion").innerHTML = convert2 + " Us liquid pints";
    }else if (value2=='lc'){
        convert2 = convert1/0.24;
        document.getElementById("volumeconversion").innerHTML = convert2 + " Us legal cups";
    }else if (value2=='ufo'){
        convert2 = convert1/0.0295735;
        document.getElementById("volumeconversion").innerHTML = convert2 + " Fluid ounces";
    }else if (value2=='utb'){
        convert2 = convert1/0.0147868;
        document.getElementById("volumeconversion").innerHTML = convert2 + " Us tablespoons";
    }else if (value2=='ute'){
        convert2 = convert1/0.00492892;
        document.getElementById("volumeconversion").innerHTML = convert2 + " Us teaspoons";
    }else if (value2=='cm'){
        convert2 = convert1/1000;
        document.getElementById("volumeconversion").innerHTML = convert2 + " Cubic meters";
    }else if (value2=='l'){
        convert2 = convert1;
        document.getElementById("volumeconversion").innerHTML = convert2 + " Litres";
    }else if (value2=='ml'){
        convert2 = convert1/0.001;
        document.getElementById("volumeconversion").innerHTML = convert2 + " Millilitres";
    }else if (value2=='g'){
        convert2 = convert1/4.54609;
        document.getElementById("volumeconversion").innerHTML = convert2 + " Imperial gallons";
    }else if (value2=='q'){
        convert2 = convert1/1.13652;
        document.getElementById("volumeconversion").innerHTML = convert2 + " Imperial quarts";
    }else if (value2=='p'){
        convert2 = convert1/0.568261;
        document.getElementById("volumeconversion").innerHTML = convert2 + " Imperial pints";
    }else if (value2=='c'){
        convert2 = convert1/0.284131;
        document.getElementById("volumeconversion").innerHTML = convert2 + " Imperial cups";
    }else if (value2=='fo'){
        convert2 = convert1/0.0284131;
        document.getElementById("volumeconversion").innerHTML = convert2 + " Fluid ounces";
    }else if (value2=='tb'){
        convert2 = convert1/0.0177582;
        document.getElementById("volumeconversion").innerHTML = convert2 + " Imperial tablespoons";
    }else if (value2=='te'){
        convert2 = convert1/0.00591939;
        document.getElementById("volumeconversion").innerHTML = convert2 + " Imperial teaspoons";
    }else if (value2=='cf'){
        convert2 = convert1/28.3168;
        document.getElementById("volumeconversion").innerHTML = convert2 + " Cubic feet";
    }else if (value2=='ci'){
        convert2 = convert1/0.0163871;
        document.getElementById("volumeconversion").innerHTML = convert2 + " Cubic inches";
    }
}

function massconvert(){
    var select = document.getElementById('mass1');
    var value1 = select.options[select.selectedIndex].value;
    var select = document.getElementById('mass2');
    var value2 = select.options[select.selectedIndex].value;
    var c = document.getElementById("massvalue").value;

    if (value1=='kg'){
        convert1 = c*10**3;
    }else if (value1=='t'){
        convert1 = c*10**6;
    }else if (value1=='g'){
        convert1 = c;
    }else if (value1=='mg'){
        convert1 = c*0.001;
    }else if (value1=='ug'){
        convert1 = c*0.000001;
    }else if (value1=='it'){
        convert1 = c*1016046.9;
    }else if (value1=='ut'){
        convert1 = c*907185;
    }else if (value1=='s'){
        convert1 = c*6350.29;
    }else if (value1=='p'){
        convert1 = c*453.592;
    }else if (value1=='o'){
        convert1 = c*28.3495;
    }
    

    if (value2=='kg'){
        convert2 = convert1/10**3;
        document.getElementById("massconversion").innerHTML = convert2 + " Kilograms";
    }else if (value2=='t'){
        convert2 = convert1/10**6;
        document.getElementById("massconversion").innerHTML = convert2 + " Tonnes";
    }else if (value2=='g'){
        convert2= convert1;
        document.getElementById("massconversion").innerHTML = convert2 + " Grams";
    }else if (value2=='mg'){
        convert2 = convert1/0.001;
        document.getElementById("massconversion").innerHTML = convert2 + " Milligrams";
    }else if (value2=='ug'){
        convert2 = convert1/0.000001;
        document.getElementById("massconversion").innerHTML = convert2 + " Micrograms";
    }else if (value2=='it'){
        convert2 = convert1/1016046.9;
        document.getElementById("massconversion").innerHTML = convert2 + " Imperial tons";
    }else if (value2=='ut'){
        convert2 = convert1/907185;
        document.getElementById("massconversion").innerHTML = convert2 + " US tons";
    }else if (value2=='s'){
        convert2 = convert1/6350.29;
        document.getElementById("massconversion").innerHTML = convert2 + " Stones";
    }else if (value2=='p'){
        convert2 = convert1/453.592;
        document.getElementById("massconversion").innerHTML = convert2 + " Pounds";
    }else if (value2=='o'){
        convert2 = convert1/28.3495;
        document.getElementById("massconversion").innerHTML = convert2 + " Ounces";
    }

}


function speedconvert(){
    var select = document.getElementById('speed1');
    var value1 = select.options[select.selectedIndex].value;
    var select = document.getElementById('speed2');
    var value2 = select.options[select.selectedIndex].value;
    var c = document.getElementById("speedvalue").value;

    if (value1=='mi'){
        convert1 = c*0.44704;
    }else if (value1=='f'){
        convert1 = c*0.3048;
    }else if (value1=='m'){
        convert1 = c;
    }else if (value1=='km'){
        convert1 = c/3.6;
    }else if (value1=='k'){
        convert1 = c*0.514444;
    }
    

    if (value2=='mi'){
        convert2 = convert1/0.44704;
        document.getElementById("speedconversion").innerHTML = convert2 + " Miles per hour";
    }else if (value2=='f'){
        convert2 = convert1/0.3048;
        document.getElementById("speedconversion").innerHTML = convert2 + " Feets  per second";
    }else if (value2=='m'){
        convert2 = convert1;
        document.getElementById("speedconversion").innerHTML = convert2 + " Miters per second";
    }else if (value2=='km'){
        convert2 = convert1*3.6;
        document.getElementById("speedconversion").innerHTML = convert2 + " Kilometers per hour";
    }else if (value2=='k'){
        convert2 = convert1/0.514444;
        document.getElementById("speedconversion").innerHTML = convert2 + " Knots";
    }

}


function tempconvert(){
    var select = document.getElementById('temp1');
    var value1 = select.options[select.selectedIndex].value;
    var select = document.getElementById('temp2');
    var value2 = select.options[select.selectedIndex].value;
    var c = document.getElementById("tempvalue").value;

    if (value1=='c'){
        convert1 = c;
    }else if (value1=='f'){
        convert1 = ((c-32)*5/9);
    }else if (value1=='k'){
        convert1 = (c-273.15);
    }
    

    if (value2=='c'){
        convert2 = convert1;
        document.getElementById("tempconversion").innerHTML = convert2 + " Celcius";
    }else if (value2=='f'){
        convert2 = ((convert1*9/5)+32);
        document.getElementById("tempconversion").innerHTML = convert2 + " Fahrenheit";
    }else if (value2=='k'){
        convert2 = (convert1+273.15);
        document.getElementById("tempconversion").innerHTML = convert2 + " Kelvin";
    }

}