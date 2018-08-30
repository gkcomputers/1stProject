 $(document).ready(function() {
     makeActiveSidebar();
     setVessel();
     setPort();
     //setFueldpt();
     //setFuelGradedpt();
     setSchedules();
     setCountry();
     addOption_list5();
     $('#dpt_service').on('input', function() {
         setScheduleList();
     })

 });

 function makeActiveSidebar(){
    
    document.getElementById("noonFrom").setAttribute("class", "");
    document.getElementById("eospFrom").setAttribute("class", "");
    document.getElementById("arrivalFrom").setAttribute("class", "");
    document.getElementById("departureFrom").setAttribute("class", "active");
    document.getElementById("bospFrom").setAttribute("class", "");
    document.getElementById("bunkerrequestFrom").setAttribute("class", "");
    document.getElementById("bdnFrom").setAttribute("class", "");
    document.getElementById("brobFrom").setAttribute("class", "");
    document.getElementById("mailhistory").setAttribute("class", "");
    document.getElementById("masterFileupload").setAttribute("class", "");
    // document.getElementById("drop").setAttribute("class", "");
    // document.getElementById("vslinfo").setAttribute("class", "");
    // document.getElementById("ports").setAttribute("class", "");
    // document.getElementById("sysconfig").setAttribute("class", "");

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
         $("#dpt_country").val(res[0].trim());
     }
 }
function setCountryName2(evt) {
     var res = evt.value.split("~~");
     if (res.length > 1) {
         $("#dpt_country2").val(res[0].trim());
     }
 }

 function setFueldpt() {
     var fuel1 = fuel;
     var options = '';
     for (var i = 0; i < fuel1.length; i++) {
         if (i == 0) {
             $("#dpt_fueltype1").val(fuel1[i]);
             $("#dpt_fueltype2").val(fuel1[i]);
             $("#dpt_fueltype3").val(fuel1[i]);
             $("#dpt_fueltype4").val(fuel1[i + 1]);
             $("#dpt_fueltype5").val(fuel1[i + 1]);
             $("#dpt_fueltype6").val(fuel1[i + 1]);
             $("#dpt_fueltype7").val(fuel1[i + 1]);
         }
         options += '<option value="' + fuel1[i] + '" />';
     }
     document.getElementById('fuellist').innerHTML = options;

 }

 function setFuelGradedpt() {
     var fuelgrade1 = fuelgrade;
     var options = '';
     for (var i = 0; i < fuelgrade1.length; i++) {
         if (i == 0) {
             $("#dpt_fuelgrade1").val(fuelgrade1[i]);
             $("#dpt_fuelgrade2").val(fuelgrade1[i + 1]);
             $("#dpt_fuelgrade3").val(fuelgrade1[i + 5]);
             $("#dpt_fuelgrade4").val(fuelgrade1[i + 2]);
             $("#dpt_fuelgrade5").val(fuelgrade1[i + 3]);
              $("#dpt_fuelgrade6").val(fuelgrade1[i + 4]);
              $("#dpt_fuelgrade7").val(fuelgrade1[i + 6]);
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

 function setVesselCode(evt) {
     var res = evt.value.split("~~");
     if (res.length > 1) {
         $("#dpt_vessel").val(res[0].trim());
         $("#dpt_vesselcode").val(res[1].trim());
     }
 }

 function setDepPortCode(evt) {

     var res = evt.value.split("~~");
     if (res.length > 1) {
       
         $("#dpt_unloccode").val(res[1].trim());
          $("#dpt_departureport").val(res[0].trim());
         
         
     }
 }

 function setLasPortCode(evt) {
     var res = evt.value.split("~~");
     if (res.length > 1) {
         $("#dpt_lastport").val(res[1].trim());
     }
 }
function setLasPortCode2(evt) {
     var res = evt.value.split("~~");
     if (res.length > 1) {
          $("#dpt_unloccode2").val(res[1].trim());
         $("#dpt_nextport2").val(res[0].trim());
     }
 }

 function setScheduleList() {
     var txt = $("#dpt_service").val();
     var res = txt.split("~~");
     if (res.length == 7) {
         $("#dpt_service").val(res[0].trim());
         $("#dpt_bound").val(res[1].trim());
         $("#dpt_voyageno").val(res[2].trim());
         $("#dpt_vesselcode").val(res[3].trim());
         $("#dpt_vessel").val(res[4].trim());
         $("#dpt_unloccode").val(res[5].trim());
         $("#dpt_imonum").val(res[6].trim());
     }
 }


 function calculateTotal1(index) {
     var c = index.name;
     var one = Number($("#dpt_3gradeval"+c).val());
     var two = Number($("#dpt_4gradeval"+c).val());
     var three = Number($("#dpt_5gradeval"+c).val());
     var total = one + two + three;
     $("#dpt_6gradeval"+c).val(parseFloat(total).toFixed(2));
 }

 function addOption_list5() {


for (var i=0; i < fuelcomb.length; i++) {
      if (i == 0) {
addOption(document.getElementById("dpt_fueltype1"), fuelcomb[i], fuelcomb[i]);
addOption(document.getElementById("dpt_fueltype2"), fuelcomb[i + 1], fuelcomb[i + 1]);
addOption(document.getElementById("dpt_fueltype3"), fuelcomb[i + 2], fuelcomb[i + 2]);
addOption(document.getElementById("dpt_fueltype4"), fuelcomb[i + 3], fuelcomb[i + 3]);
addOption(document.getElementById("dpt_fueltype5"), fuelcomb[i + 4], fuelcomb[i + 4]);
addOption(document.getElementById("dpt_fueltype6"), fuelcomb[i + 5], fuelcomb[i + 5]);
addOption(document.getElementById("dpt_fueltype7"), fuelcomb[i + 6], fuelcomb[i + 6]);

}

}

}




function getFueldepdataTable(){

    var fuelvalues = db.get('fueldetail').value();

  for(var i=0;i<fuelvalues.length;i++) {

   var table = document.getElementById("DEP_Datatable");
    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);
    row.id = rowCount;

    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    var cell7 = row.insertCell(6);
    var cell8 = row.insertCell(7);

    

        console.log("------fuel value s "+fuelvalues[i].infofuelrequirement)
    var element = document.createElement("input");
    element.setAttribute("type", "text");
    element.setAttribute("value",fuelvalues[i].infofuelrequirement);
    element.setAttribute("style", "text-align:left");
    element.setAttribute("class", "form-control");
    element.setAttribute("id", "dpt_0bunkerd" + i+rowCount);
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
    element.setAttribute("id", "dpt_1bunkerd" + rowCount);
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
    element.setAttribute("id", "dpt_2bunkerd" + rowCount);
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
    element.setAttribute("id", "dpt_3gradeval" + rowCount);
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
    element.setAttribute("id", "dpt_4gradeval" + rowCount);
    element.setAttribute("name",rowCount);
    element.setAttribute("maxlength", "15");
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
    element.setAttribute("id", "dpt_5gradeval" + rowCount);
    element.setAttribute("name",rowCount);
    element.setAttribute("maxlength", "15");
    cell6.appendChild(element);

    var element = document.createElement("input");
    element.setAttribute("class", "form-control");
    element.setAttribute("onkeypress","return isNumber(event)");
    element.setAttribute("onchange","return validateDecimal(this)");
    element.setAttribute("onblur","return calculateTotal1(this)");
    element.setAttribute("ondrop","return false;");
    element.setAttribute("onpaste","return false;");
    element.setAttribute("value","0.00");
    element.setAttribute("style", "text-align:right");
    element.setAttribute("id", "dpt_6gradeval" + rowCount);
    element.setAttribute("name",rowCount);
    element.setAttribute("readonly","true");
    cell7.appendChild(element);

    var element = document.createElement("input");
    element.setAttribute("class", "form-control");
    element.setAttribute("onkeypress","return isNumber(event)");
    element.setAttribute("onchange","return validateDecimal(this)");
    element.setAttribute("onblur","return calculateTotal1(this)");
    element.setAttribute("ondrop","return false;");
    element.setAttribute("onpaste","return false;");
    element.setAttribute("value","0.00");
    element.setAttribute("style", "text-align:right");
    element.setAttribute("id", "dpt_7gradeval" + rowCount);
    element.setAttribute("name",rowCount);
    element.setAttribute("maxlength", "15");
    cell8.appendChild(element);

    }

}

function sendActionJson(){
    console.log('Departure Report');
    if(bdnDEPsavevalidation()){
        console.log("low db savesend validation");   
        lowdbDepAction();
    }
}

function lowdbDepAction(){
            console.log('Dep');
            var fuelarry = [];
            var table = document.getElementById("DEP_Datatable");
            console.log('here 1');
            for (var i = 1, row; row = table.rows[i]; i++) {

                for (var j = 0, col; col = row.cells[j]; j++) {
                    if (j == 0) {
                        var fueltype = ($(col).find("input").val());
                    }
                    if (j == 1) {
                        var bunkered = ($(col).find("input").val());
                    }
                    if (j == 2) {
                        var debunkered = ($(col).find("input").val());
                    }
                    if (j == 3) {
                        var meconsp = ($(col).find("input").val());
                    }
                     if (j == 4) {
                        var aeconsp = ($(col).find("input").val());
                    }
                    if (j == 5) {
                        var boilerconsp = ($(col).find("input").val());
                    }
                    if (j == 6) {
                        var totalconsp = ($(col).find("input").val());
                    }
                    if (j == 7) {
                        var brob = ($(col).find("input").val());
                    }

                }
                fuelarry.push({ "fueltype": fueltype,"bunkered": bunkered,"debunkered": debunkered, "meconsp": meconsp, "aeconsp": aeconsp, "boilerconsp":boilerconsp,
                "totalconsp":totalconsp,"brob":brob });
            }

            var scheduledet=db.get('vesselinfo').value();

            var ndpt_cmpltcargops2;
            var ndpt_pilotonboard2;
            var ndpt_etalt2;
            var ndpt_etautc2;

            if($('#dpt_cmpltcargops1').val()==""){
                ndpt_cmpltcargops2='';
            } else {
                ndpt_cmpltcargops2=$('#dpt_cmpltcargops2').val();
            }
            if($('#dpt_pilotonboard1').val()==''){
                ndpt_pilotonboard2='';
            } else {
                ndpt_pilotonboard2=$('#dpt_pilotonboard2').val();
            }
            if($('#dpt_etalt1').val()==''){
                ndpt_etalt2='';
            } else{
                ndpt_etalt2=$('#dpt_etalt2').val();
            }
            if($('#dpt_etautc1').val()==''){
                ndpt_etautc2="";
            } else {
                ndpt_etautc2=$('#dpt_etautc2').val();
            }

            var depdetails = { 

                "dpt_service" : scheduledet[0].service,
                "dpt_vesselcode" : scheduledet[0].vslcode,
                "dpt_unloccode" : $('#dpt_unloccode').val(),
                "dpt_callsign" :'',
                "dpt_mastername" : '',
                "dpt_imonum" : $('#dpt_imonum').val(),
                "dpt_country" : '',
                "dpt_offsetfromutc1": '',
                "dpt_offsetfromutc2":'',

                "dpt_cmpltcargops1" : $('#dpt_cmpltcargops1').val(),
                "dpt_cmpltcargops2" : ndpt_cmpltcargops2,
                "dpt_pilotonboard1" : $('#dpt_pilotonboard1').val(),
                "dpt_pilotonboard2" : ndpt_pilotonboard2,
                "dpt_allcastoff1" : $('#dpt_allcastoff1').val(),
                "dpt_allcastoff2" : $('#dpt_allcastoff2').val(),
                "dpt_departuredate1" : $('#dpt_departuredate1').val(),
                "dpt_departuredate2" : $('#dpt_departuredate2').val(),
                "dpt_cargoonboard" : $('#dpt_cargoonboard').val(),
                "dpt_activereefers" : $('#dpt_activereefers').val(),
                "dpt_unitsdischarged" : $('#dpt_unitsdischarged').val(),
                "dpt_teusonboard" : $('#dpt_teusonboard').val(),
                "dpt_imdg" : $('#dpt_imdg').val(),
                "dpt_unitsloaded" : $('#dpt_unitsloaded').val(),
                "dpt_cargoweighttotal" : $('#dpt_cargoweighttotal').val(),
                "dpt_oog" : $('#dpt_oog').val(),

                "dpt_unitsrestoved" : $('#dpt_unitsrestoved').val(),
                "dpt_draftfwd" : $('#dpt_draftfwd').val(),
                "dpt_draftaft" : $('#dpt_draftaft').val(),
                "dpt_displaccement" : $('#dpt_displaccement').val(),
                "dpt_ballast" : $('#dpt_ballast').val(),
                "dpt_gm" : $('#dpt_gm').val(),
                "dpt_bm" : $('#dpt_bm').val(),
                "dpt_sf" : $('#dpt_sf').val(),
                "dpt_tm" : $('#dpt_tm').val(),
                "dpt_sludge" : $('#dpt_sludge').val(),
                "dpt_fw2" : $('#dpt_fw2').val(),

                "dpt_nextport2" : $('#dpt_nextport2').val(),
                "dpt_country2" : $('#dpt_country2').val(),
                "dpt_unloccode2" : $('#dpt_unloccode2').val(),
                "dpt_etalt1" : $('#dpt_etalt1').val(),
                "dpt_etalt2" : ndpt_etalt2,
                "dpt_etautc1" : $('#dpt_etautc1').val(),
                "dpt_etautc2" : ndpt_etautc2,
                "dpt_remarks" : $('#dpt_remarks').val(),

                "dpt_draftfwd2" : $('#dpt_draftfwd2').val(),
                "dpt_draftaft2" : $('#dpt_draftaft2').val(),
                "dpt_displacement2" : $('#dpt_displacement2').val(),
                "dpt_ballast2" : $('#dpt_ballast2').val(),
                "dpt_gm2" : $('#dpt_gm2').val(),
                "dpt_bm2" : $('#dpt_bm2').val(),
                "dpt_sf2" : $('#dpt_sf2').val(),
                "dpt_tm2" : $('#dpt_tm2').val(),
                "dpt_sludge2" : $('#dpt_sludge2').val(),
                "dpt_tugsonarrival" : $('#dpt_tugsonarrival').val(),
                 "dpt_offsetfromutc3" : $('#dpt_offsetfromutc3').val(),
                "dpt_offsetfromutc4" : $('#dpt_offsetfromutc4').val(),
                "dpt_departureport" : $('#dpt_departureport').val(),

                "fueldetails" : fuelarry

               };

               // db1.get('maildata').nth(0).assign(depdetails).value();
               // db1.write();


               db1.get('maildata').remove().write();
               db1.defaults({ maildata: [{}] }).write();

               
               db1.get('maildata').push(depdetails).write();


                var maximum = 100000;
                var minimum = 100;
                var randomnumber = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
                document.getElementById("inputSubject").value = scheduledet[0].vslcode+" Departure Report"+randomnumber+".json";
                document.getElementById("inputAttach").value = scheduledet[0].vslcode+" Departure Report"+randomnumber+".json";
                var maildetail = (db.get('sysconfig').value());

                if(maildetail[0].manuelMail.toString()=="Manual"){
                    var folder="/"+scheduledet[0].vslcode+" Departure Report"+randomnumber+".json";
                    downloadJson(folder);
                    var bodycontent="Departure Report attachment : "+scheduledet[0].vslcode+" Departure Report"+randomnumber+".json";

                    if(maildetail[0].vesselemail.length>0){
                        console.log('inside cc');
                        window.location.href = "mailto:" + maildetail[0].to + "?cc="+ maildetail[0].vesselemail +"&subject=" + scheduledet[0].vslcode+" Departure Report"+randomnumber+".json" + 
                        "&body="+bodycontent;
                    } else if(maildetail[0].to.length>0){
                        window.location.href = "mailto:" + maildetail[0].to + "?subject=" + scheduledet[0].vslcode+" Departure Report"+randomnumber+".json" + 
                        "&body="+bodycontent;      
                    } else{
                        window.location.href = "mailto:ENTER MAIL" + "?subject=" + scheduledet[0].vslcode+" Departure Report"+randomnumber+".json" + 
                        "&body="+bodycontent;   
                    }
                    setTimeout(function() { masterFieldClear('depform'); }, 5000);

                } else{
                    $('#modalCompose').modal('show');
                    console.log(maildetail);
                    $("#inputFrom").val(maildetail[0].from);
                    $("#inputTo").val(maildetail[0].to);
                    $("#ccTo").val(maildetail[0].vesselemail);
                    $('#inputBody').val($('#dpt_remarks').val());
                }

                

}

function bdnDEPsavevalidation(){

            if($('#dpt_departureport').val()=="") {
                alert("Kindly Enter the Departure Port");
                document.getElementById('dpt_departureport').focus();
                return false;
            }
            else if($('#dpt_unloccode').val()=="")  {
                alert("Kindly Enter the UnLoc Code");
                document.getElementById('dpt_unloccode').focus();
                return false;
            }
            else if($('#dpt_departuredate1').val()=="") {
                alert("Kindly select the Departure Date");
                document.getElementById('dpt_departuredate1').focus();
                return false;
            } 
            else if($('#dpt_allcastoff1').val()=="") {
                alert("Kindly select the All Case Off");
                document.getElementById('dpt_allcastoff1').focus();
                return false;
            } 
            else{
                return true;
            }
}

function resetDEPaction() {
    console.log('reset Departure');
    document.getElementById('depform').reset();
    var info = (db.get('vesselinfo').value());
    $('#dpt_imonum').val(info[0].imodetails);
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