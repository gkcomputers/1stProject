 $(document).ready(function() {
        //setFuel1();
        //setFuelGrade2();
       // setSchedules();
        // setPort();
    // setVesselc();
    // setCountry();
    // addOption_list3();
    makeActiveSidebar();
     $('#eop_service').on('input', function() {
       setScheduleList();
      })
   
 });

 function makeActiveSidebar(){
    
    document.getElementById("noonFrom").setAttribute("class", "");
    document.getElementById("eospFrom").setAttribute("class", "active");
    document.getElementById("arrivalFrom").setAttribute("class", "");
    document.getElementById("departureFrom").setAttribute("class", "");
    document.getElementById("bospFrom").setAttribute("class", "");
    document.getElementById("bunkerrequestFrom").setAttribute("class", "");
    document.getElementById("bdnFrom").setAttribute("class", "");
    document.getElementById("brobFrom").setAttribute("class", "");
    document.getElementById("vslinfo").setAttribute("class", "");
    document.getElementById("ports").setAttribute("class", "");
    document.getElementById("sysconfig").setAttribute("class", "");
    document.getElementById("mailhistory").setAttribute("class", "");
    document.getElementById("masterFileupload").setAttribute("class", "");

}


function setVesselc() {
     var mycars = vessel;
     var options = '';
     for (var i = 0; i < mycars.length; i++)
         options += '<option value="' + mycars[i] + '" />';
     document.getElementById('VesselList').innerHTML = options;
 }


function setCountry() {
     var ports = country;
     var options = '';
     for (var i = 0; i < ports.length; i++)
         options += '<option value="' + ports[i] + '" />';
     document.getElementById('countylist').innerHTML = options;
 }
function setCountryName(evt) {
     var res = evt.value.split("~~");
     if (res.length > 1) {
         $("#eop_country").val(res[0].trim());
     }
 }
function setPort() {
     var ports = port;
     var options = '';
     for (var i = 0; i < ports.length; i++)
         options += '<option value="' + ports[i] + '" />';
     document.getElementById('portList').innerHTML = options;
 }


function setArrPortCode(evt) {
     var res = evt.value.split("~~");
     if (res.length > 1) {
          $("#eop_unlcode").val(res[1].trim());
         $("#eop_arrivalport").val(res[0].trim());
     }
 }


function setFuel1() {

     var fuel1 = fuel;
     var options = '';
     for (var i = 0; i < fuel1.length; i++) {
         if (i == 0) {
             $("#eop_fueltype1").val(fuel1[i]);
             $("#eop_fueltype2").val(fuel1[i]);
             $("#eop_fueltype3").val(fuel1[i]);
             $("#eop_fueltype4").val(fuel1[i + 1]);
             $("#eop_fueltype5").val(fuel1[i + 1]);
               $("#eop_fueltype6").val(fuel1[i + 1]);
               $("#eop_fueltype7").val(fuel1[i + 1]);
         }
         options += '<option value="' + fuel1[i] + '" />';
     }
     document.getElementById('fuellist').innerHTML = options;

 }

 function setFuelGrade2() {
     var fuelgrade1 = fuelgrade;
     var options = '';
     for (var i = 0; i < fuelgrade1.length; i++) {
         if (i == 0) {
             $("#eop_fuelgrade1").val(fuelgrade1[i]);
             $("#eop_fuelgrade2").val(fuelgrade1[i + 1]);
             $("#eop_fuelgrade3").val(fuelgrade1[i + 5]);
             $("#eop_fuelgrade4").val(fuelgrade1[i + 2]);
             $("#eop_fuelgrade5").val(fuelgrade1[i + 3]);
             $("#eop_fuelgrade6").val(fuelgrade1[i + 4]);
             $("#eop_fuelgrade7").val(fuelgrade1[i + 6]);
         }
         options += '<option value="' + fuelgrade1[i] + '" />';
     }
     document.getElementById('fuelgradelist').innerHTML = options;
 }


 function setSchedules() {
     var schedules1 = schedules;
     var options = '';
     for (var i = 0; i < schedules1.length; i++)
         options += '<option value="' + schedules1[i] + '" />';
     document.getElementById('scheduleslist').innerHTML = options;
 }

 function setScheduleList() {
     var txt = $("#eop_service").val();
     var res = txt.split("~~");
     if (res.length == 7) {
         $("#eop_service").val(res[0].trim());
         $("#eop_bound").val(res[1].trim());
         $("#eop_voyage").val(res[2].trim());
         $("#eop_vesselcode").val(res[3].trim());
         $("#eop_vessel").val(res[4].trim());
         $("#eop_unlcode").val(res[5].trim());
         $("#eop_imonum").val(res[6].trim());
     }
 }

function setVesselCode(evt) {
     var res = evt.value.split("~~");
     if (res.length > 1) {
         $("#eop_vessel").val(res[0].trim());
          $("#eop_vesselcode").val(res[1].trim());
     }
 }



 function setFuel() {

 }

 function setFuelGrade() {

 }

 function setVessel() {
     var mycars = vessel;
     var options = '';
     for (var i = 0; i < mycars.length; i++)
         options += '<option value="' + mycars[i] + '" />';
     document.getElementById('VesselList').innerHTML = options;
 }

 function setPort() {
     var ports = port;
     var options = '';

     for (var i = 0; i < ports.length; i++)
         options += '<option value="' + ports[i] + '" />';
     document.getElementById('portList').innerHTML = options;
 }

 function calculateTotal1(index) {
     var c = index.name;
     console.log('----------c'+c);
     var one = Number($("#eop_1gradeval"+ c ).val());
     var two = Number($("#eop_2gradeval"+ c).val());
     var three = Number($("#eop_3gradeval"+ c).val());
     var total = one + two + three;
    // $("#eop_1tot"+ c).val(total);
     $("#eop_1tot"+ c).val(parseFloat(total).toFixed(2)); 
 }


 function addOption_list3() {


for (var i=0; i < fuelcomb.length; i++) {
    if (i == 0) {
addOption(document.getElementById("eop_fueltype1"), fuelcomb[i], fuelcomb[i]);
addOption(document.getElementById("eop_fueltype2"), fuelcomb[i + 1], fuelcomb[i + 1]);
addOption(document.getElementById("eop_fueltype3"), fuelcomb[i + 2], fuelcomb[i + 2]);
addOption(document.getElementById("eop_fueltype4"), fuelcomb[i + 3], fuelcomb[i + 3]);
addOption(document.getElementById("eop_fueltype5"), fuelcomb[i + 4], fuelcomb[i + 4]);
addOption(document.getElementById("eop_fueltype6"), fuelcomb[i + 5], fuelcomb[i + 5]);
addOption(document.getElementById("eop_fueltype7"), fuelcomb[i + 6], fuelcomb[i + 6]);

}

}

}


  function getFueldataTable(){

 

    var fuelvalues = db.get('fueldetail').value();

    for(var i=0;i<fuelvalues.length;i++) {

   var table = document.getElementById("EOSP_table");
    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);
    row.id = rowCount;

    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);

    

        console.log("------fuel value s "+fuelvalues[i].infofuelrequirement)
    var element = document.createElement("input");
    element.setAttribute("type", "text");
    element.setAttribute("value",fuelvalues[i].infofuelrequirement);
    element.setAttribute("style", "text-align:left");
    element.setAttribute("class", "form-control");
    element.setAttribute("id", "eop_fueltype1" + i+rowCount);
    element.setAttribute("readonly","true");
    cell1.appendChild(element);



    var element = document.createElement("input");
    element.setAttribute("class", "form-control");
    element.setAttribute("onkeypress","return isNumber(event)");
    element.setAttribute("onchange","return validateDecimal(this)");
    element.setAttribute("onblur","return calculateTotal1(this)");
    element.setAttribute("ondrop","return false;");
    element.setAttribute("onpaste","return false;");
    element.setAttribute("value","0.00");
    element.setAttribute("style", "text-align:right");
    element.setAttribute("id", "eop_1gradeval" + rowCount);
    element.setAttribute("name",rowCount);
    element.setAttribute("maxlength", "15");
    cell2.appendChild(element);

    var element = document.createElement("input");
    element.setAttribute("class", "form-control");
    element.setAttribute("onkeypress","return isNumber(event)");
    element.setAttribute("onchange","return validateDecimal(this)");
    element.setAttribute("onblur","return calculateTotal1(this)");
    element.setAttribute("ondrop","return false;");
    element.setAttribute("onpaste","return false;");
    element.setAttribute("value","0.00");
    element.setAttribute("style", "text-align:right");
    element.setAttribute("id", "eop_2gradeval" + rowCount);
    element.setAttribute("name",rowCount);
    element.setAttribute("maxlength", "15");
    cell3.appendChild(element);

    var element = document.createElement("input");
    element.setAttribute("class", "form-control");
    element.setAttribute("onkeypress","return isNumber(event)");
    element.setAttribute("onchange","return validateDecimal(this)");
    element.setAttribute("onblur","return calculateTotal1(this)");
    element.setAttribute("ondrop","return false;");
    element.setAttribute("onpaste","return false;");
    element.setAttribute("value","0.00");
    element.setAttribute("style", "text-align:right");
    element.setAttribute("id", "eop_3gradeval" + rowCount);
    element.setAttribute("name",rowCount);
    element.setAttribute("maxlength", "15");
    cell4.appendChild(element);

    var element = document.createElement("input");
    element.setAttribute("class", "form-control");
    element.setAttribute("onkeypress","return isNumber(event)");
    element.setAttribute("onchange","return validateDecimal(this)");
    element.setAttribute("onblur","return calculateTotal1(this)");
    element.setAttribute("ondrop","return false;");
    element.setAttribute("onpaste","return false;");
    element.setAttribute("value","0.00");
    element.setAttribute("style", "text-align:right");
    element.setAttribute("id", "eop_1tot" + rowCount);
    element.setAttribute("name",rowCount);
    element.setAttribute("readonly","true");
    cell5.appendChild(element);

    var element = document.createElement("input");
    element.setAttribute("class", "form-control");
    element.setAttribute("onkeypress","return isNumber(event)");
    element.setAttribute("onchange","return validateDecimal(this)");
    element.setAttribute("onblur","return calculateTotal1(this)");
    element.setAttribute("ondrop","return false;");
    element.setAttribute("onpaste","return false;");
    element.setAttribute("value","0.00");
    element.setAttribute("style", "text-align:right");
    element.setAttribute("id", "eop_brob" + rowCount);
    element.setAttribute("name",rowCount);
    element.setAttribute("maxlength", "15");
    cell6.appendChild(element);

    }

  }

  function onPortcodeselect(){
    var ports=$('#eop_arrivalport').val();
    $('#eop_arrivalport').val(ports.split("~~")[0]);
    $('#eop_unlcode').val(ports.split("~~")[1]);
  }

  function sendActionJson(){
    console.log('EOSP');
    if(bdnEOSPsavevalidation()){
        console.log("low db savesend validation");   
        lowdbEOSPAction();
    }
  }

  function lowdbEOSPAction(){
    console.log('EOSP1');
            var fuelarry = [];
            var table = document.getElementById("EOSP_table");
            console.log('here 1');
            for (var i = 1, row; row = table.rows[i]; i++) {

                for (var j = 0, col; col = row.cells[j]; j++) {
                    if (j == 0) {
                        var fueltype = ($(col).find("input").val());
                    }
                    if (j == 1) {
                        var meconsp = ($(col).find("input").val());
                    }
                    if (j == 2) {
                        var aeconsp = ($(col).find("input").val());
                    }
                    if (j == 3) {
                        var boilerconsp = ($(col).find("input").val());
                    }
                     if (j == 4) {
                        var totalconsp = ($(col).find("input").val());
                    }
                    if (j == 5) {
                        var brob = ($(col).find("input").val());
                    }

                }
                fuelarry.push({ "fueltype": fueltype, "meconsp": meconsp, "aeconsp": aeconsp, "boilerconsp":boilerconsp,
                "totalconsp":totalconsp,"brob":brob });
            }

            var scheduledet=db.get('vesselinfo').value();


            var eospdetails = { 

                "eop_service" : scheduledet[0].service,
                "eop_vesselcode" : scheduledet[0].vslcode,
                "eop_imonum" : scheduledet[0].imodetails,
                "eop_unlcode" : $('#eop_unlcode').val(),
                "eop_arrivalport" : $('#eop_unlcode').val(),
                "eop_eosp" : $('#eop_eosp').val(),
                "eop_eosptime" : $('#eop_eosptime').val(),
                "eop_eopsposition" : $('#eop_eopsposition').val(),
                "eop_distance" : $('#eop_distance').val(),
                "eop_timeelapsed1" : $('#eop_timeelapsed1').val(),
                "eop_averagespeed1" : $('#eop_averagespeed1').val(),
                "eop_averagerpm1" : $('#eop_averagerpm1').val(),
                "eop_averageslip1" : $('#eop_averageslip1').val(),
                "eop_diatancetogo" : $('#eop_diatancetogo').val(),
                "eop_mepower" : $('#eop_mepower').val(),
                "eop_shaftgenpower" : $('#eop_shaftgenpower').val(),
                "eop_winddir" : $('#eop_winddir').val(),
                "eop_swelldir1" : $('#eop_swelldir1').val(),
                "eop_seas1" : $('#eop_seas1').val(),
                "eop_seatemp" : $('#eop_seatemp').val(),
                "eop_airtemp" : $('#eop_airtemp').val(),
                "eop_pressure" : $('#eop_pressure').val(),
                "eop_remarks" : $('#eop_remarks').val(),

                "eop_distance1" : $('#eop_distance1').val(),
                "eop_timeelapsed2" : $('#eop_timeelapsed2').val(),
                "eop_averagespeed2" : $('#eop_averagespeed2').val(),
                "eop_averagerpm2" : $('#eop_averagerpm2').val(),
                "eop_averageslip2" : $('#eop_averageslip2').val(),

                "eop_windforce" : $('#eop_windforce').val(),
                "eop_swellsir2" : $('#eop_swellsir2').val(),
                "eop_callsign" : '',
                "eop_diatancetogo2" : '',
                "eop_mepower2" : '',
                "eop_eopsposition1" : $('#eop_eopsposition1').val(),
                "fueldetails" : fuelarry

               };

               db1.get('maildata').remove().write();
               db1.defaults({ maildata: [{}] }).write();

               db1.get('maildata').push(eospdetails).write();
               
               var maximum = 100000;
            var minimum = 100;
            var randomnumber = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
            document.getElementById("inputSubject").value = scheduledet[0].vslcode+" EOSP Report"+randomnumber+".json";
            document.getElementById("inputAttach").value = scheduledet[0].vslcode+" EOSP Report"+randomnumber+".json";
                var maildetail = (db.get('sysconfig').value());

                if(maildetail[0].manuelMail.toString()=="Manual"){

                    var folder="/"+scheduledet[0].vslcode+" EOSP Report"+randomnumber+".json";
                    downloadJson(folder);
                    var bodycontent="EOSP Report attachment : "+scheduledet[0].vslcode+" EOSP Report"+randomnumber+".json";

                    if(maildetail[0].vesselemail.length>0){
                        console.log('inside cc');
                        window.location.href = "mailto:" + maildetail[0].to + "?cc="+ maildetail[0].vesselemail +"&subject=" + scheduledet[0].vslcode+" EOSP Report"+randomnumber+".json" + 
                        "&body="+bodycontent;
                    } else if(maildetail[0].to.length>0){
                        window.location.href = "mailto:" + maildetail[0].to + "?subject=" + scheduledet[0].vslcode+" EOSP Report"+randomnumber+".json" + 
                        "&body="+bodycontent;      
                    } else{
                        window.location.href = "mailto:ENTER MAIL" + "?subject=" + scheduledet[0].vslcode+" EOSP Report"+randomnumber+".json" + 
                        "&body="+bodycontent;   
                    }
                    setTimeout(function() { masterFieldClear('eospform'); }, 5000);
                } else{
                    $('#modalCompose').modal('show');
                
                    console.log(maildetail);
                    $("#inputFrom").val(maildetail[0].from);
                    $("#inputTo").val(maildetail[0].to);
                    $("#ccTo").val(maildetail[0].vesselemail);
                    $('#inputBody').val($('#eop_remarks').val());
                }
                

  }

  function bdnEOSPsavevalidation(){
            if($('#eop_arrivalport').val()=="") {
                alert("Kindly Enter the Arrival Port");
                document.getElementById('eop_arrivalport').focus();
                return false;
            }
            else if($('#eop_unlcode').val()=="")  {
                alert("Kindly Enter the UnLoc Code");
                document.getElementById('eop_unlcode').focus();
                return false;
            }
            else if($('#eop_eosp').val()=="") {
                alert("Kindly select the EOSP Date");
                document.getElementById('eop_eosp').focus();
                return false;
            } else{
                return true;
            }
  }

  function resetEOSPAction(){
    document.getElementById('eospform').reset();
    var info = (db.get('vesselinfo').value());
    $('#eop_imonum').val(info[0].imodetails);
  }

  function downloadJson(filename){

        const downloadsFolder = require('downloads-folder');
        var download=downloadsFolder()+filename;    
        console.log(download);

        const path = require('path');
        const dbpath = path.join(process.env.APPDATA + '/SVMIBS/Maildetails.json'); 
         console.log('File '+dbpath);
        
        var copyFile = require('quickly-copy-file');

        copyFile(dbpath, download, function(error) {
          if (error) return console.error(error);
          console.log('File was copied!')
        });


}