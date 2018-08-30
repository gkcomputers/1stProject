/**
 * Created by Vessel Performance Solutions on 2017-04-20.
 */
function portreportinit(){
    //document.f.imonumber.focus();

    document.f.imonumber.value = getCookie('imonumber');
    document.f.vesselname.value = getCookie('vesselname');

    initCountryList("country");

    WindowLoad('reportenddatespan','reportenddate',rependdatefunc );
    WindowLoad('reportenddatespan','rependcal',rependdatefunc );

    initDropdownList("repdurhours", 0, 50);
    initTwoDigitDropdownList("repdurminutes", 0, 59);

    WindowLoad('arr_pilot_span','arr_pilot',arr_pilot_func );
    WindowLoad('arr_pilot_span','arr_pilot_cal',arr_pilot_func );

    initTwoDigitDropdownList("arr_pilot_h", 0, 23);
    initTwoDigitDropdownList("arr_pilot_m", 0, 59);

    WindowLoad('pilot_onb_span','pilot_onb',pilot_onb_func );
    WindowLoad('pilot_onb_span','pilot_onb_cal',pilot_onb_func);

    initTwoDigitDropdownList("pilot_onb_h", 0, 23);
    initTwoDigitDropdownList("pilot_onb_m", 0, 59);

    WindowLoad('firstline_span','firstline',firstline_func );
    WindowLoad('firstline_span','firstline_cal',firstline_func);

    initTwoDigitDropdownList("firstline_h", 0, 23);
    initTwoDigitDropdownList("firstline_m", 0, 59);

    WindowLoad('lastline_span','lastline',lastline_func );
    WindowLoad('lastline_span','lastline_cal',lastline_func);

    initTwoDigitDropdownList("lastline_h", 0, 23);
    initTwoDigitDropdownList("lastline_m", 0, 59);

    WindowLoad('pilot_off_span','pilot_off',pilot_off_func );
    WindowLoad('pilot_off_span','pilot_off_cal',pilot_off_func);

    initTwoDigitDropdownList("pilot_off_h", 0, 23);
    initTwoDigitDropdownList("pilot_off_m", 0, 59);

    WindowLoad('arr_ancho_span','arr_ancho',arr_ancho_func );
    WindowLoad('arr_ancho_span','arr_ancho_cal',arr_ancho_func);

    initTwoDigitDropdownList("arr_ancho_h", 0, 23);
    initTwoDigitDropdownList("arr_ancho_m", 0, 59);

    WindowLoad('dep_ancho_span','dep_ancho', dep_ancho_func );
    WindowLoad('dep_ancho_span','dep_ancho_cal',dep_ancho_func);

    initTwoDigitDropdownList("dep_ancho_h", 0, 23);
    initTwoDigitDropdownList("dep_ancho_m", 0, 59);

    WindowLoad('chapas_start_span','chapas_start',chapas_start_func );
    WindowLoad('chapas_start_span','chapas_start_cal',chapas_start_func);

    initTwoDigitDropdownList("chapas_start_h", 0, 23);
    initTwoDigitDropdownList("chapas_start_m", 0, 59);

    WindowLoad('chapas_end_span','chapas_end',chapas_end_func );
    WindowLoad('chapas_end_span','chapas_end_cal',chapas_end_func);

    initTwoDigitDropdownList("chapas_end_h", 0, 23);
    initTwoDigitDropdownList("chapas_end_m", 0, 59);

    WindowLoad('robtimestampspan','robtime',robtimefunc );
    WindowLoad('robtimestampspan','robcal',robtimefunc );

    initTwoDigitDropdownList("rependhour", 0, 23);
    initTwoDigitDropdownList("rependmin", 0, 59);

    initTwoDigitDropdownList("robhour", 0, 23);
    initTwoDigitDropdownList("robmin", 0, 59);
    initDropdownList("merh", 0, 50);
    initTwoDigitDropdownList("merm", 0, 59);
    initDropdownList("ae1rh", 0, 50);
    initTwoDigitDropdownList("ae1rm", 0, 59);
    initDropdownList("ae2rh", 0, 50);
    initTwoDigitDropdownList("ae2rm", 0, 59);
    initDropdownList("ae3rh", 0, 50);
    initTwoDigitDropdownList("ae3rm", 0, 59);
    initDropdownList("ae4rh", 0, 50);
    initTwoDigitDropdownList("ae4rm", 0, 59);

    initDropdownList("inerthours", 0, 50);
    initTwoDigitDropdownList("inertmins", 0, 59);
    initDropdownList("tankcleanhours", 0, 50);
    initTwoDigitDropdownList("tankcleanmins", 0, 59);
    initDropdownList("carheathours", 0, 50);
    initTwoDigitDropdownList("carheatmins", 0, 59);
    initDropdownList("purgehours", 0, 50);
    initTwoDigitDropdownList("purgemins", 0, 59);
    initDropdownList("dischargehours", 0, 50);
    initTwoDigitDropdownList("dischargemins", 0, 59);


    initDropdownList("sgrh", 0, 50);
    initTwoDigitDropdownList("sgrm", 0, 59);
    initDropdownList("boirh", 0, 50);
    initTwoDigitDropdownList("boirm", 0, 59);
    initDropdownList("smrh", 0, 50);
    initTwoDigitDropdownList("smrm", 0, 59);
}

function ValAndSendPortReport(){
    check_ng = true;

    validate_port_report();
    if ( !check_ng )
          return;
    format_output_port_text();

    //return true;
}
function validate_port_report() {
    missingFields = '';
    rangeChecks = '';
    validateRequiredInputField(document.f.imonumber.value, "IMO Number");
    validateRequiredInputField(document.f.vesselname.value, "Vessel Name");
    validateRequiredInputField(document.f.reportenddate.value, "Report Date");
    validateRequiredInputField(document.f.rependhour.value, "Report Time Stamp (Hours)");
    validateRequiredInputField(document.f.rependmin.value, "Report Time Stamp (Minutes)");
    validateRequiredInputField(document.f.repdurhours.value, "Report Duration (Hours)");
    validateRequiredInputField(document.f.repdurminutes.value, "Report Duration (Minutes)");
    if (!document.f.idleatsea.checked) {
        validateRequiredInputField(document.f.country.value, "Country");
        validateRequiredInputField(document.f.port.value, "Port Name");
        validateRequiredInputField(document.f.portoperation.value, "Port Operation");
    }

    //Fuel Consumption
    validateConsumption();


    if (!check_ng) {
        var errorMessage = '';
        if (missingFields !== '')
            errorMessage += "Following fields must be filled:\n\n" + missingFields + "\n\n";
        if (rangeChecks !== '')
            errorMessage += "Following fields are outside valid range:\n\n" + rangeChecks;
        alert(errorMessage);
    }
}

function format_output_port_text() {
    //document.f.outputtext.value="";
    // load and check
    var obj = new Object();
    //General
    obj.vesselname = document.f.vesselname.value;
    obj.imonumber = document.f.imonumber.value;
    obj.reportenddate = document.f.reportenddate.value;
    obj.rependhour = document.f.rependhour.value;
    obj.rependmin = document.f.rependmin.value;
    obj.repdurhours = document.f.repdurhours.value;
    obj.repdurminutes = document.f.repdurminutes.value;
    obj.country  = document.getElementById('country').options[document.getElementById('country').selectedIndex].text;
    obj.countrycode = document.f.country.value;
    obj.port = document.getElementById('port').options[document.getElementById('port').selectedIndex].text;
    obj.portcode = document.f.port.value;
    obj.cosprep = document.f.cosprep.checked;

    //Operations:
    obj.cargoexchange = document.f.cargoexchange.checked;
    obj.portoperation = document.f.portoperation.value;
    obj.cargoarriv = document.f.cargoarriv.value;
    obj.cargodep = document.f.cargodep.value;
    obj.balarriv = document.f.balarriv.value;
    obj.baldep = document.f.baldep.value;
    obj.distobs = document.f.distobs.value;
    //obj.distdepartcosp = document.f.distdepartcosp.value;
    obj.arr_pilot = document.f.arr_pilot.value;
    obj.arr_pilot_h = document.f.arr_pilot_h.value;
    obj.arr_pilot_m = document.f.arr_pilot_m.value;
    obj.pilot_onb = document.f.pilot_onb.value;
    obj.pilot_onb_h = document.f.pilot_onb_h.value;
    obj.pilot_onb_m = document.f.pilot_onb_m.value;
    obj.firstline = document.f.firstline.value;
    obj.firstline_h = document.f.firstline_h.value;
    obj.firstline_m = document.f.firstline_m.value;
    obj.lastline = document.f.lastline.value;
    obj.lastline_h = document.f.lastline_h.value;
    obj.lastline_m = document.f.lastline_m.value;
    obj.pilot_off = document.f.pilot_off.value;
    obj.pilot_off_h = document.f.pilot_off_h.value;
    obj.pilot_off_m = document.f.pilot_off_m.value;
    obj.arr_ancho = document.f.arr_ancho.value;
    obj.arr_ancho_h = document.f.arr_ancho_h.value;
    obj.arr_ancho_m = document.f.arr_ancho_m.value;
    obj.dep_ancho = document.f.dep_ancho.value;
    obj.dep_ancho_h = document.f.dep_ancho_h.value;
    obj.dep_ancho_m = document.f.dep_ancho_m.value;
    obj.chapas_start = document.f.chapas_start.value;
    obj.chapas_start_h = document.f.chapas_start_h.value;
    obj.chapas_start_m = document.f.chapas_start_m.value;
    obj.chapas_end = document.f.chapas_end.value;
    obj.chapas_end_h = document.f.chapas_end_h.value;
    obj.chapas_end_m = document.f.chapas_end_m.value;


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
    obj.sludgedischarge = document.f.sludgedischarge.value;

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
    //obj.reefercons = document.f.reefercons.value;
    //obj.reefercons = document.f.reefercons.value;
    //obj.reefercons = document.f.reefercons.value;

    setCookie('imonumber', obj.imonumber, 120);
    setCookie('vesselname', obj.vesselname, 120);
    //var encodedMessage = encodeURIComponent(JSON.stringify(obj));
    var encodedMessage = JSON.stringify(obj);

     // answer = window.prompt("Press: 'Ctrl+c' to copy Report\nPaste into email using 'Ctrl-v'\n", '_BEGIN_REPORT_' + encodedMessage +  // '_END_REPORT_');
     // if (answer !== null && answer !== "") {
     //    window.open('mailto:data@vpsolutions.dk?subject=VPS Port Report (V.2)');
    // }
    
    
         var finalText = encodedMessage;
         var maximum = 100000;
         var minimum = 100;
         var randomnumber = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
         if (navigator.onLine) {
             var dateval = Date();
             var idval = randomnumber;
              var reportname="VPS Port Report (V.2)";
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
         var fileName = "VPS Port Report-" + randomnumber;
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


