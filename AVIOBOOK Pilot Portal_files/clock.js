//todo cleanup and activate: set clock from server, then start ticking. No servertime fetch needed
tmonth=new Array("Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec");

function setClock(millis){
    try {
//        console.log("Setting clock " + millis);
        // setMillis does not work as expected
        millis = millis + 1000*60;
        d = new Date(millis);
        nmonth = d.getUTCMonth();
        ndate  = d.getUTCDate();
        nyear = d.getUTCFullYear();
        nhour  = d.getUTCHours();
        nmin   = d.getUTCMinutes();
        nsec   = d.getUTCSeconds();

        if(nyear<1000) nyear=nyear+1900;

        if(nhour <= 9) {
            hhour = "0" +nhour;
        }
        if(ndate <= 9) {
            ndate = "0" +ndate;
        }
        if(nmin <= 9) {
            nmin = "0" +nmin;
        }
        if(nsec <= 9) {
            nsec = "0" +nsec;
        }

        $('#clock').html(tmonth[nmonth] +" "+ ndate+" - "+  nhour+":"+nmin+" UTC");
        setTimeout("setClock(" + millis + ")", 60000 );
        
    } catch(ex) {
        alert (ex);
    }
}

function pollTime(clockId, clockUrl){
    $.get(clockUrl, {}, 
        function(data, textStatus) {
            console.log("ticktime: ["+ data + "] arrived");
            if (textStatus == 'success') {
                if (data.indexOf("html") >= 0) {
                // stop ticking - possible session timeour or error occured

                } else if (data.length > 40) {
                // stop ticking - bit exaggerated for time
                    
                } else {
                    $("#" + clockId).html(data);
                    setTimeout("pollTime('"+clockId+"')", 1000 * (50 + Math.floor(Math.random()*9)));
                }                
            } else {
            //                not important, just stop ticking
            //                alert ("tickTime failed:" + textStatus);
            }
        }, 'txt');
}