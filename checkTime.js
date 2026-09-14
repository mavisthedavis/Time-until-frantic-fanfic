
var checkTime = setInterval(check, 1);  

function check() {   
    var time = new Date();   
    $("#time").text(time);  

    
    if (time.getDay() == 0 && (time.getHours() < 13)) {    
        if (time.getHours() == 12) { 
            $("#time").text(((60 - time.getMinutes()) + " min ") + ((60 - time.getSeconds()) + " Seconds"));
        } else { 
            $("#time").text(((10 - time.getHours()) + " Hours") + ((60 - time.getMinutes()) + " min ") + ((60 - time.getSeconds()) + " Seconds"));
        }
        
    } else { 
        $("#time").text(((6 - time.getDay()) + " Days ") + ((24 - time.getHours()) + " Hours ") + ((60 - time.getMinutes()) + " min " ) + ((60 - time.getSeconds()) + " Seconds"));
    }
} 
