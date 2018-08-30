/**
 * Created by Vessel Performance Solutions on 2017-04-20.
 */
function ValAndSendSeaReport(){
    check_ng = true;

    validate_sea_report();
    if ( !check_ng ) {
        return
    }
    format_output_sea_text();
}
function validate_sea_report() {
    missingFields = '';
    rangeChecks = '';
    validateRequiredInputField(document.f.vesselname.value, "Vessel Name");
    validateRequiredInputField(document.f.imonumber.value, "Vessel IMO Number");
    validateRequiredInputField(document.f.reportenddate.value, "Report Date");
    validateRequiredInputField(document.f.rependhour.value, "Report Time Stamp (Hours)");
    validateRequiredInputField(document.f.rependmin.value, "Report Time Stamp (Minutes)");
    validateRequiredInputField(document.f.repdurhours.value, "Report Duration (Hours)");
    validateRequiredInputField(document.f.repdurminutes.value, "Report Duration (Minutes)");
    validateRequiredInputField(document.f.country.value, "Destination Country");
    validateRequiredInputField(document.f.port.value, "Destination Port");
    validateRequiredInputField(document.f.latdeg.value, "Lateral Degrees");
    validateRequiredInputField(document.f.latmin.value, "Lateral Minutes");
    validateRequiredInputField(document.f.latsec.value, "Lateral Seconds");
    validateRequiredInputField(document.f.latdir.value, "Lateral Direction (N/S)");
    validateRequiredInputField(document.f.londeg.value, "Longitudinal Degrees");
    validateRequiredInputField(document.f.lonmin.value, "Longitudinal Minutes");
    validateRequiredInputField(document.f.lonsec.value, "Longitudinal Seconds");
    validateRequiredInputField(document.f.londir.value, "Longitudinal Direction (E/W)");
    //validateRequiredInputField(document.f.draftfore.value, "Draft Fore");
    //validateRequiredInputField(document.f.draftaft.value, "Draft Aft");
    validateRequiredInputField(document.f.loadcond.value, "Loading Condition");
    validateInputNumRange(document.f.disteosp.value, "Distance to EOSP", false, 0, 40000);
    validateInputNumRange(document.f.draftfore.value, "Draft Fore", true, 0, 25);
    validateInputNumRange(document.f.draftaft.value, "Draft Aft", true, 0, 25);
    validateInputNumRange(document.f.ballast.value, "Ballast Water", false, 0, 50000);
    validateInputNumRange(document.f.metaheight.value, "Metacentric Height", false, 0, 20);
    validateInputNumRange(document.f.teucount.value, "TEU Count", false, 0, 20000);
    validateInputNumRange(document.f.reefercons.value, "Reefer Count", false, 0, 5000);
    validateInputNumRange(document.f.truewindspeed.value, "Wind Speed", true, 0, 50);
    validateRequiredInputField(document.f.truewinddir.value, "Wind Direction");
    validateInputNumRange(document.f.sigwaveheight.value, "Wave Height", true, 0, 12);
    validateRequiredInputField(document.f.truewavedir.value, "Wave Direction");
    validateInputNumRange(document.f.swellheight.value, "Swell Height", false, 0, 12);
    validateInputNumRange(document.f.waterdepthmin.value, "Water Depth Min", false, 0, 5000);
    validateInputNumRange(document.f.waterdepthavg.value, "Water Depth Avg", false, 0, 5000);
    validateInputNumRange(document.f.watertemp.value, "Water temp", false, -5, 50);
    validateInputNumRange(document.f.distobs.value, "Distance Obs", true, 0, 500);
    validateInputNumRange(document.f.distlog.value, "Distance Log", false, 0, 500);


    //Fuel Consumption
    validateConsumption();


    /*var obj1 = {
        "imo1": {
            param1: 56,
            param2: 45
        },
        "imo2": {
            param1: 56,
            param2: 45
        }
    };

    var key = "imo1";
    console.log(obj1[key].param1);*/

    if (!check_ng) {
        var errorMessage = '';
        if (missingFields !== '')
            errorMessage += "Following fields must be filled:\n\n" + missingFields + "\n\n";

        if (rangeChecks !== '')
            errorMessage += "Following fields are outside valid range:\n\n" + rangeChecks;


        alert(errorMessage);
    }

}
/*function setPorts() {
    cntrySel = document.getElementById(id);
    portList = ports[cntrySel.value];
    changeSelect(portID, portList, portList);
    //setCities();
}*/

function format_output_sea_text() {
    //document.f.outputtext.value="";
    // load and check


    var obj = new Object();
    obj.vesselname = document.f.vesselname.value;
    obj.imonumber = document.f.imonumber.value;
    obj.voynumber = document.f.voynumber.value;
    obj.disteosp = document.f.disteosp.value;
    obj.reportenddate = document.f.reportenddate.value;
    obj.rependhour = document.f.rependhour.value;
    obj.rependmin = document.f.rependmin.value;
    obj.repdurhours = document.f.repdurhours.value;
    obj.repdurminutes = document.f.repdurminutes.value;
    obj.eosprep = document.f.eosprep.checked;
    obj.ballast = document.f.ballast.value;
    obj.country  = document.getElementById('country').options[document.getElementById('country').selectedIndex].text;
    obj.countrycode = document.f.country.value;
    obj.port = document.getElementById('port').options[document.getElementById('port').selectedIndex].text;
    obj.portcode = document.f.port.value;
    obj.draftfore = document.f.draftfore.value;
    obj.draftaft = document.f.draftaft.value;
    obj.loadcond = document.f.loadcond.value;
    obj.metaheight = document.f.metaheight.value;
    obj.voyinstruction = document.f.voyinstruction.value;
    obj.insValue = document.f.insValue.value;
    obj.etaeosp = document.f.etaeosp.value;
    obj.etaeosphour = document.f.etaeosphour.value;
    obj.etaeospmin = document.f.etaeospmin.value;
    obj.etapilot = document.f.etapilot.value;
    obj.etapilothour = document.f.etapilothour.value;
    obj.etapilotmin = document.f.etapilotmin.value;
    obj.teucount = document.f.teucount.value;
    obj.reefercount = document.f.reefercount.value;
    obj.truewindspeed = document.f.truewindspeed.value;
    obj.truewinddir = document.f.truewinddir.value;
    obj.sigwaveheight = document.f.sigwaveheight.value;
    obj.truewavedir = document.f.truewavedir.value;
    obj.swellheight = document.f.swellheight.value;
    obj.trueswelldir = document.f.trueswelldir.value;
    obj.waterdepthmin = document.f.waterdepthmin.value;
    obj.waterdepthavg = document.f.waterdepthavg.value;
    obj.shipheading = document.f.shipheading.value;
    obj.watertemp = document.f.watertemp.value;
    obj.distobs = document.f.distobs.value;
    obj.distlog = document.f.distlog.value;
    obj.stabcruis = document.f.stabcruis.value;
    obj.latdeg = document.f.latdeg.value;
    obj.latmin = document.f.latmin.value;
    obj.latsec = document.f.latsec.value;
    obj.latdir = document.f.latdir.value;
    obj.londeg = document.f.londeg.value;
    obj.lonmin = document.f.lonmin.value;
    obj.lonsec = document.f.lonsec.value;
    obj.londir = document.f.londir.value;

    //Fuel Consumption
    obj.sulconhsfo = document.f.sulconhsfo.value;
    obj.sulconlsfo = document.f.sulconlsfo.value;
    obj.sulconhsmgo = document.f.sulconhsmgo.value;
    obj.sulconlsmgo = document.f.sulconlsmgo.value;
    obj.lcvhsfo = document.f.lcvhsfo.value;
    obj.lcvlsfo = document.f.lcvlsfo.value;
    obj.lcvhsmgo = document.f.lcvhsmgo.value;
    obj.lcvlsmgo = document.f.lcvlsmgo.value;
    obj.mehsfo = document.f.mehsfo.value;
    obj.melsfo = document.f.melsfo.value;
    obj.mehsmgo = document.f.mehsmgo.value;
    obj.melsmgo = document.f.melsmgo.value;
    obj.aehsfo = document.f.aehsfo.value;
    obj.aelsfo = document.f.aelsfo.value;
    obj.aehsmgo = document.f.aehsmgo.value;
    obj.aelsmgo = document.f.aelsmgo.value;
    obj.bohsfo = document.f.bohsfo.value;
    obj.bolsfo = document.f.bolsfo.value;
    obj.bohsmgo = document.f.bohsmgo.value;
    obj.bolsmgo = document.f.bolsmgo.value;
    obj.othsfo = document.f.othsfo.value;
    obj.otlsfo = document.f.otlsfo.value;
    obj.othsmgo = document.f.othsmgo.value;
    obj.otlsmgo = document.f.otlsmgo.value;
    obj.otsludge = document.f.otsludge.value;
    obj.robhsfo = document.f.robhsfo.value;
    obj.roblsfo = document.f.roblsfo.value;
    obj.robhsmgo = document.f.robhsmgo.value;
    obj.roblsmgo = document.f.roblsmgo.value;
    obj.robsludge = document.f.robsludge.value;
    obj.issoundingrob = document.f.issoundingrob.checked;
    obj.robtime = document.f.robtime.value;
    obj.robhour = document.f.robhour.value;
    obj.robmin = document.f.robmin.value;

    //Electrical Producers and Consumers
    obj.merh = document.f.merh.value;
    obj.merm = document.f.merm.value;
    obj.merpm = document.f.merpm.value;
    obj.mepower = document.f.mepower.value;
    obj.mecyloil = document.f.mecyloil.value;
    obj.cyloilbn = document.f.cyloilbn.value;
    obj.ae1rh = document.f.ae1rh.value;
    obj.ae1rm = document.f.ae1rm.value;
    obj.ae1prod = document.f.ae1prod.value;
    obj.ae2rh = document.f.ae2rh.value;
    obj.ae2rm = document.f.ae2rm.value;
    obj.ae2prod = document.f.ae2prod.value;
    obj.ae3rh = document.f.ae3rh.value;
    obj.ae3rm = document.f.ae3rm.value;
    obj.ae3prod = document.f.ae3prod.value;
    obj.ae4rh = document.f.ae4rh.value;
    obj.ae4rm = document.f.ae4rm.value;
    obj.ae4prod = document.f.ae4prod.value;
    obj.sgrh = document.f.sgrh.value;
    obj.sgrm = document.f.sgrm.value;
    obj.sgprod = document.f.sgprod.value;
    obj.boirh = document.f.boirh.value;
    obj.boirm = document.f.boirm.value;
    obj.smrh = document.f.smrh.value;
    obj.smrm = document.f.smrm.value;
    obj.smcons = document.f.smcons.value;
    obj.caplacons = document.f.caplacons.value;
    obj.balpumpcons = document.f.balpumpcons.value;
    obj.reefercons = document.f.reefercons.value;

    obj.inerthours = document.f.inerthours.value;
    obj.inertmins = document.f.inertmins.value;
    obj.tankcleanhours = document.f.tankcleanhours.value;
    obj.tankcleanmins = document.f.tankcleanmins.value;
    obj.carheathours = document.f.carheathours.value;
    obj.carheatmins = document.f.carheatmins.value;
    obj.purgehours = document.f.purgehours.value;
    obj.purgemins = document.f.purgemins.value;
    obj.dischargehours = document.f.dischargehours.value;
    obj.dischargemins = document.f.dischargemins.value;

    //var encodedMessage = encodeURIComponent(JSON.stringify(obj));
    var encodedMessage = JSON.stringify(obj);

    //alert("Length of encoded JSON message: " + encodedMessage.length);

    //var mail = "mailto:data@vpsolutions.dk?subject=VPS_Report&body="+encodeURIComponent(JSON.stringify(obj));
    //var mlink = document.createElement('a');
    //mlink.setAttribute('href', mail);
    //document.body.appendChild(mlink);
    //mlink.click();
    //document.body.removeChild(mlink);

    //document.f.outputtext.value = encodedMessage;
    //document.f.outputtext.value=JSON.stringify(obj);
    //window.open('mailto:data@vpsolutions.dk?subject=subject&body='+JSON.stringify(obj));
    //var clipboard = new Clipboard('.btn');

    setCookie('imonumber', obj.imonumber, 120);
    setCookie('vesselname', obj.vesselname, 120);

    //MAIN METHOD FOR GENERATION OF EMAILS:
   // answer = window.prompt("Press: 'Ctrl+c' to copy Report\nPaste into email using 'Ctrl-v'\n", '_BEGIN_REPORT_' + encodedMessage + //'_END_REPORT_');
   // if (answer !== null && answer !== "") {
   //     window.open('mailto:data@vpsolutions.dk?subject=VPS Sea Report (V.2)');
   // }
    
     var finalText = encodedMessage;
         var maximum = 100000;
         var minimum = 100;
         var randomnumber = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
         if (navigator.onLine) {
             var dateval = Date();
             var idval = randomnumber;
              var reportname="VPS Sea Report (V.2)";
             display(finalText, randomnumber,reportname);
            
             alert("Kindly attach dowloaded file with mail");
           
             window.location.href = "mailto:" + mailto + "?subject=" + reportname + " &body=Vessel " + reportname + " Report sent on " + dateval +
                 " with attachment ID Number: " + idval;
         } else {
             var result1 = confirm("Internet connection not available, Do you want save the data?");
             if (result1) {
                 dp(finalText, randomnumber);
             } else {
                 alert("Data is not saved");
             }
         }   
    
}
     function display(finalText, randomnumber,reportname) {
     if ('Blob' in window) {
         var fileName = "VPS Sea Report-" + randomnumber;
         var textToWrite = finalText;
         var textFileAsBlob = new Blob([textToWrite], {
             type: 'text/plain'
         });

         var downloadLink = document.createElement("a");
         downloadLink.download = fileName;
         downloadLink.innerHTML = "Download File";
         if ('webkitURL' in window) {
             downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
         } else {
             downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
             downloadLink.onclick = destroyClickedElement;
             downloadLink.style.display = "none";
             document.body.appendChild(downloadLink);
         }

         downloadLink.click();
     } else {
         alert('Your browser does not support the HTML5 Blob.');
     }
 }


