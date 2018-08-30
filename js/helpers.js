/**
 * Created by kbn on 08/04/2017.
 */
function seareportinit(){
    document.f.imonumber.focus();
    document.f.imonumber.value = getCookie('imonumber');
    document.f.vesselname.value = getCookie('vesselname');

    initCountryList("country");

    WindowLoad('reportenddatespan','reportenddate',rependdatefunc );
    WindowLoad('reportenddatespan','rependcal',rependdatefunc );
    initDropdownList("repdurhours", 0, 50);
    initTwoDigitDropdownList("repdurminutes", 0, 59);

    WindowLoad('etaeospspan','etaeosp',etaeosptimefunc);
    WindowLoad('etaeospspan','etaeospcal', etaeosptimefunc);

    WindowLoad('etapilotspan','etapilot',etapilottimefunc );
    WindowLoad('etapilotspan','etapilotcal',etapilottimefunc );

    WindowLoad('robtimestampspan','robtime',robtimefunc );
    WindowLoad('robtimestampspan','robcal',robtimefunc );

    initTwoDigitDropdownList("etaeosphour", 0, 23);
    initTwoDigitDropdownList("etaeospmin", 0, 59);
    initTwoDigitDropdownList("etapilothour", 0, 23);
    initTwoDigitDropdownList("etapilotmin", 0, 59);


    initDropdownList("latdeg", 0, 90);
    initDropdownList("latmin", 0, 60);
    initDropdownList("latsec", 0, 60);
    initDropdownList("londeg", 0, 180);
    initDropdownList("lonmin", 0, 60);
    initDropdownList("lonsec", 0, 60);
    initDropdownList("shipheading",0,360);
    initDropdownList("stabcruis",1,10);
    initTwoDigitDropdownList("rependhour", 0, 23);
    initTwoDigitDropdownList("rependmin", 0, 59);
    initDirectionDropdownList("truewinddir");
    initDirectionDropdownList("truewavedir");
    initDirectionDropdownList("trueswelldir");
    initVoyageInstruction("voyinstruction");
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
function initCountryList(id) {

    var portdata = JSON.parse(portlist);
    changeSelect(id, portdata);
}
function setPorts() {
    cntrySel = document.getElementById('country');
    var portdata = JSON.parse(portlist);

    var index = findIndexInData(portdata,cntrySel.value);

    changeSelect('port', portdata[index].ports);
    document.getElementById('port').disabled = false;
}

function findIndexInData(data, value) {
    for(var i = 0, l = data.length ; i < l ; i++) {
        if(data[i].code === value) {
            return i;
        }
    }
    return -1;
}

function changeSelect(fieldID, newOptions) {
    selectField = document.getElementById(fieldID);
    selectField.length = 0;
    selectField.options[0] = new Option("", "");
    for (i=0; i<newOptions.length; i++) {
        selectField.options[selectField.length] = new Option(newOptions[i].name, newOptions[i].code);
    }
}

function initDropdownList( id, min, max ) {
    var select, i, option;

    select = document.getElementById(id);
    for (i = min; i <= max; i += 1) {
        option = document.createElement('option');
        option.value = option.text = i;
        select.add(option);
    }
}
function initTwoDigitDropdownList( id, min, max ) {
    var select, i, option;

    select = document.getElementById(id);
    for (i = min; i <= max; i += 1) {
        option = document.createElement('option');
        if (i>=0 && i<10){
            option.value = option.text = '0' + i;
        }
        else {
            option.value = option.text = i;
        }
        select.add(option);
    }
}
function initVoyageInstruction( id ) {
    var select, option1, option2, option2_1,option2_2,option3, option4, option5, option6, option7, option8;

    select = document.getElementById(id);
    option1 = document.createElement('option');
    option1.value = "SpeedOverGround";
    option1.text = "Speed Over Ground";
    select.add(option1);
    option2 = document.createElement('option');
    option2.value = "SpeedThroughWater";
    option2.text = "Speed Through Water";
    select.add(option2);
    option2_1 = document.createElement('option');
    option2_1.value = "ETAEOSP";
    option2_1.text = "ETA (EOSP)";
    select.add(option2_1);
    option2_2 = document.createElement('option');
    option2_2.value = "ETAPilotStation";
    option2_2.text = "ETA (Pilot station)";
    select.add(option2_2);
    option3 = document.createElement('option');
    option3.value = "FixedRPM";
    option3.text = "Fixed RPM";
    select.add(option3);
    option4 = document.createElement('option');
    option4.value = "FixedPower_kW";
    option4.text = "Fixed Power [kW]";
    select.add(option4);
    option5 = document.createElement('option');
    option5.value = "FixedPower_PctMCR";
    option5.text = "Fixed Power [%MCR]";
    select.add(option5);
    option6 = document.createElement('option');
    option6.value = "FixedConsumption_tper24h";
    option6.text = "Fixed Consumption [t/24h]";
    select.add(option6);
    option7 = document.createElement('option');
    option7.value = "MostEconomical";
    option7.text = "Most Economical";
    select.add(option7);
    option8 = document.createElement('option');
    option8.value = "MinimumPower";
    option8.text = "Minimum Power";
    select.add(option8);
}
function initDirectionDropdownList( id ) {
    var ddlist, i, dir;

    ddlist = document.getElementById(id);
    /*option = document.createElement('option');
    option.value = option.text = 'test';
    option = document.createElement('option');
    option.value = option.text = 222;*/
    //select.add(option);
    /*dir = document.createElement('option');
    dir.value = dir.text = 22;
    ddlist.add(dir);*/

    for (i = 0; i <= 16; i += 1) {
        dir = document.createElement('option');

        switch (i){
            case 0:
                dir.text = "";
                dir.value = '';
                break;
            case 1:
                dir.text = 'N';
                dir.value = 'N';
                break;
            case 2:
                dir.text = 'NNE';
                dir.value = 'NNE';
                break;
            case 3:
                dir.text = "NE";
                dir.value = 'NE';
                break;
            case 4:
                dir.text = "ENE";
                dir.value = 'ENE';
                break;
            case 5:
                dir.text = "E";
                dir.value = 'E';
                break;
            case 6:
                dir.text = "ESE";
                dir.value = 'ESE';
                break;
            case 7:
                dir.text = "SE";
                dir.value = 'SE';
                break;
            case 8:
                dir.text = "SSE";
                dir.value = 'SSE';
                break;
            case 9:
                dir.text = "S";
                dir.value = 'S';
                break;
            case 10:
                dir.text = "SSW";
                dir.value = 'SSW';
                break;
            case 11:
                dir.text = "SW";
                dir.value = 'SW';
                break;
            case 12:
                dir.text = "WSW";
                dir.value = 'WSW';
                break;
            case 13:
                dir.text = "W";
                dir.value = 'W';
                break;
            case 14:
                dir.text = "WNW";
                dir.value = 'WNW';
                break;
            case 15:
                dir.text = "NW";
                dir.value = 'NW';
                break;
            case 16:
                dir.text = "NNW";
                dir.value = 'NNW';
                break;
        }
        ddlist.add(dir);
    }
}
function rependdatefunc( objDate)
{
    usedateselector(objDate, "reportenddate")
}
function robtimefunc( objDate)
{
    usedateselector(objDate, "robtime")
}
function etaeosptimefunc( objDate)
{
    usedateselector(objDate, "etaeosp")
}
function etapilottimefunc( objDate)
{
    usedateselector(objDate, "etapilot")
}
function arr_pilot_func( objDate)
{
    usedateselector(objDate, "arr_pilot")
}
function pilot_onb_func( objDate)
{
    usedateselector(objDate, "pilot_onb")
}
function firstline_func( objDate)
{
    usedateselector(objDate, "firstline")
}
function lastline_func( objDate)
{
    usedateselector(objDate, "lastline")
}
function pilot_off_func( objDate)
{
    usedateselector(objDate, "pilot_off")
}
function arr_ancho_func( objDate)
{
    usedateselector(objDate, "arr_ancho")
}
function dep_ancho_func( objDate)
{
    usedateselector(objDate, "dep_ancho")
}
function chapas_start_func( objDate)
{
    usedateselector(objDate, "chapas_start")
}
function chapas_end_func( objDate)
{
    usedateselector(objDate, "chapas_end")
}
//
function validateRequiredInputField(fieldval, fieldname){
    if (fieldval === '') {
        //alert(fieldname + " must be filled!");
        missingFields += fieldname + '\n';
        check_ng = false;
        return false;
    }
    return true;
}
function validateRequiredInputFieldFuel(fieldval1, fieldval2, fieldval3, fieldval4, fieldname){
    if (fieldval1 === '' && fieldval2 === '' && fieldval3 === '' && fieldval4 === '') {
        //alert(fieldname + " must be filled!");
        missingFields += fieldname + '\n';
        check_ng = false;
        return false;
    }
    return true;
}

function validateInputNumRange(fieldval, fieldname, requiredValue,  minval, maxval){
    if (requiredValue) {
        if (!validateRequiredInputField(fieldval, fieldname)){
            return;
        }
    }

    if (isNaN(fieldval)) {
        //alert(fieldname + " must be filled!");
        rangeChecks += fieldname + ' (' + fieldval + ') is not numeric \n';
        check_ng = false;
        return false;
    }


    if (fieldval !== '' && (fieldval < minval || fieldval > maxval)) {
        //alert(fieldname + " must be filled!");
        rangeChecks += fieldname + ' (' + fieldval + ') is not in range\n';
        check_ng = false;
        return false;
    }
    return true;
}

function usedateselector( objDate, textfieldname)
{
    document.getElementById(textfieldname).value = objDate.getPHPDate('Y-M-d');

    var f=false;
    f = "" === document.getElementById(textfieldname).value;
    return true;
}
function WindowLoad( targetblock, targetlink, func )
{
    var ndExample1 = document.getElementById(targetblock);
    ndExample1.DateChooser = new DateChooser();

    // Check if the browser has fully loaded the DateChooser object, and supports it.
    if (!ndExample1.DateChooser.display)
    {
        return false;
    }

    ndExample1.DateChooser.setCloseTime(200);
    ndExample1.DateChooser.setXOffset(10);
    ndExample1.DateChooser.setYOffset(-10);
    ndExample1.DateChooser.setUpdateFunction(func);
    document.getElementById(targetlink).onclick = ndExample1.DateChooser.display;

    return true;
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
function validateConsumption() {
    validateRequiredInputFieldFuel(document.f.sulconhsfo.value, document.f.sulconlsfo.value, document.f.sulconhsmgo.value, document.f.sulconlsmgo.value, "Sulphur Content [%]");
    validateRequiredInputFieldFuel(document.f.lcvhsfo.value, document.f.lcvlsfo.value, document.f.lcvhsmgo.value, document.f.lcvlsmgo.value, "Lower calorific value [kJ/kg]");
    validateRequiredInputFieldFuel(document.f.mehsfo.value, document.f.melsfo.value, document.f.mehsmgo.value, document.f.melsmgo.value, "Main Engine Consumption [t] (enter 0 if nothing)");
    validateRequiredInputFieldFuel(document.f.aehsfo.value, document.f.aelsfo.value, document.f.aehsmgo.value, document.f.aelsmgo.value, "Aux Engine Consumption [t] (enter 0 if nothing)");
    validateRequiredInputFieldFuel(document.f.bohsfo.value, document.f.bolsfo.value, document.f.bohsfo.value, document.f.bolsmgo.value, "Boiler Consumption [t] (enter 0 if nothing)");

    validateInputNumRange(document.f.sulconhsfo.value, "Sulphur Content (HS HFO)", false, 1, 5);
    validateInputNumRange(document.f.sulconlsfo.value, "Sulphur Content (LS HFO)", false, 0, 1.5);
    validateInputNumRange(document.f.sulconhsmgo.value, "Sulphur Content (HS MGO)", false, 0, 5);
    validateInputNumRange(document.f.sulconlsmgo.value, "Sulphur Content (LS MGO)", false, 0, 0.2);

    validateInputNumRange(document.f.lcvhsfo.value, "LCV (HS HFO) [kJ/kG]", false, 37000, 43000);
    validateInputNumRange(document.f.lcvlsfo.value, "LCV (LS HFO) [kJ/kG]", false, 37000, 43000);
    validateInputNumRange(document.f.lcvhsmgo.value, "LCV (HS MGO) [kJ/kG]", false, 42000, 45000);
    validateInputNumRange(document.f.lcvlsmgo.value, "LCV (LS MGO) [kJ/kG]", false, 42000, 45000);

    validateInputNumRange(document.f.mehsfo.value, "Main Engine HS HFO Cons [t]", false, 0, 1000);
    validateInputNumRange(document.f.melsfo.value, "Main Engine LS HFO Cons [t]", false, 0, 1000);
    validateInputNumRange(document.f.mehsmgo.value, "Main Engine HS MGO Cons [t]", false, 0, 1000);
    validateInputNumRange(document.f.melsmgo.value, "Main Engine LS MGO Cons [t]", false, 0, 1000);

    validateInputNumRange(document.f.aehsfo.value, "Aux Engine HS HFO Cons [t]", false, 0, 1000);
    validateInputNumRange(document.f.aelsfo.value, "Aux Engine LS HFO Cons [t]", false, 0, 1000);
    validateInputNumRange(document.f.aehsmgo.value, "Aux Engine HS MGO Cons [t]", false, 0, 1000);
    validateInputNumRange(document.f.aelsmgo.value, "Aux Engine LS MGO Cons [t]", false, 0, 1000);

    validateInputNumRange(document.f.bohsfo.value, "Boiler HS HFO Cons [t]", false, 0, 1000);
    validateInputNumRange(document.f.bolsfo.value, "Boiler LS HFO Cons [t]", false, 0, 1000);
    validateInputNumRange(document.f.bohsfo.value, "Boiler HS MGO Cons [t]", false, 0, 1000);
    validateInputNumRange(document.f.bolsmgo.value, "Boiler LS MGO Cons [t]", false, 0, 1000);

    validateInputNumRange(document.f.othsfo.value, "Other Consumers HS HFO Cons [t]", false, 0, 1000);
    validateInputNumRange(document.f.otlsfo.value, "Other Consumers LS HFO Cons [t]", false, 0, 1000);
    validateInputNumRange(document.f.othsmgo.value, "Other Consumers HS MGO Cons [t]", false, 0, 1000);
    validateInputNumRange(document.f.otlsmgo.value, "Other Consumers LS MGO Cons [t]", false, 0, 1000);

    validateInputNumRange(document.f.robhsfo.value, "ROB HS HFO Cons [t]", false, 0, 50000);
    validateInputNumRange(document.f.roblsfo.value, "ROB LS HFO Cons [t]", false, 0, 50000);
    validateInputNumRange(document.f.robhsmgo.value, "ROB HS MGO Cons [t]", false, 0, 50000);
    validateInputNumRange(document.f.roblsmgo.value, "ROB LS MGO Cons [t]", false, 0, 50000);

    validateInputNumRange(document.f.merpm.value, document.f.merpm.title, false, 0, 550);
    validateInputNumRange(document.f.mepower.value, document.f.mepower.title, false, 0, 80000);
    validateInputNumRange(document.f.mecyloil.value, document.f.mecyloil.title, false, 0, 10000);

    validateInputNumRange(document.f.ae1prod.value, document.f.ae1prod.title, false, 0, 200000);
    validateInputNumRange(document.f.ae2prod.value, document.f.ae2prod.title, false, 0, 200000);
    validateInputNumRange(document.f.ae3prod.value, document.f.ae3prod.title, false, 0, 200000);
    validateInputNumRange(document.f.ae4prod.value, document.f.ae4prod.title, false, 0, 200000);

    validateInputNumRange(document.f.sgprod.value, document.f.sgprod.title, false, 0, 100000);
    validateInputNumRange(document.f.smcons.value, document.f.smcons.title, false, 0, 100000);
    validateInputNumRange(document.f.caplacons.value, document.f.caplacons.title, false, 0, 100000);
    validateInputNumRange(document.f.balpumpcons.value, document.f.balpumpcons.title, false, 0, 100000);
    validateInputNumRange(document.f.reefercons.value, document.f.reefercons.title, false, 0, 100000);

}
/*function OnChangeDateTextField( textfield, hour, min )
 {
 var f=false;
 if( "" == textfield.value )
 {
 f=true;
 }else
 {
 f=false;
 }
 //hour.disabled=f;
 //min.disabled=f;
 }*/

