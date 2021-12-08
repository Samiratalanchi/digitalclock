window.onload = function() {
    setInterval(time,1000)
    function time() {
        var myDate = new Date();
        var second = myDate.getSeconds();
        var hour= myDate.getHours();
        var min = myDate.getMinutes();
        if(second<10) {
            second= "0" + second;
        }
        if(min<10) {
            min= "0" + min;
        }
        if(hour<12) {
            document.getElementById("situate").innerHTML="AM";
            if(hour<10) {
                hour= "0" + hour;
            }
        } else {
            document.getElementById("situate").innerHTML="PM";
            hour = hour -12;
            if(hour<10) {
                hour= "0" + hour;
            }
        }
        document.getElementById("hrmin").innerHTML=hour + ":" + min;
        document.getElementById("seconds").innerHTML=second;

    }
}
