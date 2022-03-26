function popAlert(message) {  
  alert("Thankyou for  your feedback");
}


function datacalculation(){
  var v = document.getElementById("v").value;
  var u = document.getElementById("u").value;
  var a = document.getElementById("a").value;
  var t = document.getElementById("t").value;
  var s = document.getElementById("s").value;
  
  errorconst = 0;
  
  if (v.length==0){
    errorconst += 1;
  }
  if (u.length==0){
    errorconst += 1;
  }
  if (a.length==0){
    errorconst += 1;
  }
  if (t.length==0){
    errorconst += 1;
  }
  if (s.length==0){
    errorconst += 1;
  }


  if (errorconst>=3){
    document.getElementById("demo").innerHTML = "Not enough Data";
  } else if (errorconst==0) {
    document.getElementById("demo").innerHTML = "Nothing to  Calculate";
  } else if (errorconst==1){
      if  (v.length==0){
        v = Math.sqrt(u*u+2*a*s);
        var dist = u*t + 0.5*a*t*t;
        if (dist!=s){
          document.getElementById("demo").innerHTML = "One or more Entered data can be wrong";
        }else {
          document.getElementById("demo").innerHTML ="v = " + v;
        }
        
      }
    if  (u.length==0){
      u = v - a*t;
      dist = u*t + 0.5*a*t*t;
      if (dist!=s){
        document.getElementById("demo").innerHTML = "One or more Entered data can be wrong";
      }else {
        document.getElementById("demo").innerHTML = "u =" + u;
      }
    }

    if  (a.length==0){
      a = (v-u)/t;
      dist = u*t + 0.5*a*t*t;
      if (dist!=s){
        document.getElementById("demo").innerHTML = "One or more Entered data can be wrong";
      }else {
        document.getElementById("demo").innerHTML = "a =" + a;
      }
    }

    if  (t.length==0){
      t = (v-u)/a;
      dist = u*t + 0.5*a*t*t;
      if (dist!=s){
        document.getElementById("demo").innerHTML = "One or more Entered data can be wrong";
      }else {
        document.getElementById("demo").innerHTML = "t =" + t;
      }
    }

    if  (s.length==0){
      s = u*t + 0.5*a*t*t;
      dist = (v*v-u*u)/(2*a);
      if (dist!=s){
        document.getElementById("demo").innerHTML = "One or more Entered data can be wrong";
      }else {
        document.getElementById("demo").innerHTML = "s =" + s;
      }
    }
  }else {
    if(v.length==0 && u.length==0){
      u=(s-0.5*a*t*t)/t;
      v=u+a*t;
      document.getElementById("demo").innerHTML = "v =" + v + " , u =" + u;
    }

    if(v.length==0 && a.length==0){
      a =(2*s-2*u*t)/(t*t);
      v = Math.sqrt(u*u+2*a*s);
      document.getElementById("demo").innerHTML = "v =" + v + " , a =" + a;
    }

    if(v.length==0 && t.length==0){
      t=(Math.sqrt(4*u*u+8*a*s)-2*u)/(2*a)
      v = Math.sqrt(u*u+2*a*s);
      document.getElementById("demo").innerHTML = "v =" + v + " , t =" + t;
    }

    if(v.length==0 && s.length==0){
      s=u*t+0.5*a*t*t
      v = Math.sqrt(u*u+2*a*s);
      document.getElementById("demo").innerHTML = "v =" + v + " , s =" + s;
    }

    if(u.length==0 && a.length==0){
      u=2*s/t - v;
      a = (v-u)/t;
      document.getElementById("demo").innerHTML = "u =" + u + " , a =" + a;
    }

    if(u.length==0 && t.length==0){
      u=Math.sqrt(v*v-2*a*s);
      t=(v-u)/a;
      document.getElementById("demo").innerHTML = "u =" + u + " , t =" + t;
    }

    if(s.length==0 && u.length==0){
      u=(v-a*t);
      s=u*t+0.5*a*t*t;
      document.getElementById("demo").innerHTML = "u =" + u + " , s =" + s;
    }

    if(a.length==0 && t.length==0){
      a=(v*v-u*u)/(2*s);
      t=(v-u)/a;
      document.getElementById("demo").innerHTML = "a =" + a + " , t =" + t;
    }

    if(a.length==0 && s.length==0){
      a=(v-u)/t;
      s=u*t+0.5*a*t*t;
      document.getElementById("demo").innerHTML = "a =" + a + " , s =" + s;
    }

    if(t.length==0 && s.length==0){
      t=(v-u)/a;
      s=u*t+0.5*a*t*t;
      document.getElementById("demo").innerHTML = "t =" + t + " , s =" + s;
    }
  }

}

function squarecalculation(){
  var a = document.getElementById("square").value;
  document.getElementById("squarearea").innerHTML = "Area of the square is, " + a*a + " square  units";
}

function rectanglecalculation(){
  var a = document.getElementById("rectangle1").value;
  var b = document.getElementById("rectangle2").value;
  document.getElementById("rectanglearea").innerHTML = "Area of the rectangle is, " + a*b + " square  units";
}

function trianglecalculation(){
  var a = document.getElementById("triangle1").value;
  var b = document.getElementById("triangle2").value;
  document.getElementById("trianglearea").innerHTML = "Area of the triangle is, " + 0.5*a*b + " square  units";
}

function circlecalculation(){
  var a = document.getElementById("circle").value;
  document.getElementById("circlearea").innerHTML = "Area of the circle is, " + Math.PI*a*a + " square  units";
}

function elipsecalculation(){
  var a = document.getElementById("elipse1").value;
  var b = document.getElementById("elipse2").value;
  document.getElementById("elipsearea").innerHTML = "Area of the elipse is, " + a*b + " square  units";
}

function parallelogramcalculation(){
  var a = document.getElementById("parallelogram1").value;
  var b = document.getElementById("parallelogram2").value;
  document.getElementById("parallelogramarea").innerHTML = "Area of the elipse is, " + a*b + " square  units";
}