window.onload = function() {
    setInterval(time,1000)
    function time() {
        var myDate = new Date();
        var second = myDate.getSeconds();
        var hour= myDate.getHours();
        var min = myDate.getMinutes();
        var day = myDate.getDay();
        var days = myDate.getDate();
        var month = myDate.getMonth();
        var year = myDate.getFullYear();
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
        switch(day) {
            case 0:
                day = "Sunday";
                break;
            case 1:
                day = "Monday";
                break;
            case 2:
                day = "Tuesday";
                break;
            case 3:
                day = "Wednesday";
                break;
            case 4:
                day = "Thursday";
                break;
            case 5:
                day = "Friday";
                break;
            case 6:
                day = "Saturday";
        }
        document.getElementById("day").innerHTML = day;
        if(days <10) {
            days = "0" + days;
        }
        if(month <10) {
            month = "0" + month;
        }
        document.getElementById("date").innerHTML = year + "/" + month + "/" + days;

    }
}
