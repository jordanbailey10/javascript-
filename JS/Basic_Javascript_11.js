function Color_Function()  { //creating color function
    var Color_Output;  //creating variable for color output
    var Colors = document.getElementById("Color_Input").value;
    var Color_String = " is a great color!"; // creating string variable
    switch(Colors)  {//creating conditions for switch
        case "Red":
            Color_Output = "Red" + Color_String;
        break;
        case "Yellow":
            Color_Output = "Yellow" + Color_String;
        break;
        case "Green":
            Color_Output = "Green" + Color_String;
        break;
        case "Blue":
            Color_Output = "Blue" + Color_String;
        break;
        case "Pink":
            Color_Output = "Pink" + Color_String;
        break;
        case "Purple":
            Color_Output = "Purple" + Color_String;
        break;
        default:
        Color_Output = "Please enter a color exactly as written on the above list.";
    }
    document.getElementById("Output").innerHTML = Color_Output; //default keyword
}


//getelementbyclass
function Hello_World_Function() {
    var A = document.getElementsByClassName("Click");
    A[0].innerHTML = "The text has changed!";
}

//canvas graphic
var c = document.getElementById("myCanvasgraphic");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(95,50,40,0,2*Math.PI);
ctx.stroke();

var c = document.getElementById("myLinearGradient");
var ctx = c.getContext("2d");
var grd = ctx.createLinearGradient(0, 0, 170, 0);
grd.addColorStop(0, "black");
grd.addColorStop(0.5, "red");
grd.addColorStop(1, "white");
ctx.fillStyle = grd;
ctx.fillRect(20, 20, 150, 100);