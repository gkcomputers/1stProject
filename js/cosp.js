 var schedules1;
 var fueltype = [];
 $(document).ready(function() {
     //document.getElementById("inputAttach").value="cosp.json";
        // setSchedules();
        //setFuel3();
        //setFuelGrade3();
        //setVesselc();
        //setPort();
        //setCountry();
        //setsulphur();
       // addOption_list1();
       makeActiveSidebar();
      $('#cop_service').on('input', function() {
         setScheduleList();
     })     
 });


 function makeActiveSidebar(){
    
    document.getElementById("noonFrom").setAttribute("class", "");
    document.getElementById("eospFrom").setAttribute("class", "");
    document.getElementById("arrivalFrom").setAttribute("class", "");
    document.getElementById("departureFrom").setAttribute("class", "");
    document.getElementById("bospFrom").setAttribute("class", "active");
    document.getElementById("bunkerrequestFrom").setAttribute("class", "");
    document.getElementById("bdnFrom").setAttribute("class", "");
    document.getElementById("brobFrom").setAttribute("class", "");
    document.getElementById("vslinfo").setAttribute("class", "");
    document.getElementById("ports").setAttribute("class", "");
    document.getElementById("sysconfig").setAttribute("class", "");
    document.getElementById("mailhistory").setAttribute("class", "");
    document.getElementById("masterFileupload").setAttribute("class", "");

}


function addOption_list() {
    var fueldetail = db.get('fueldetail').value();
    for (var i = 0; i < fueldetail.length; ++i) {
        fueltype[i] = (fueldetail[i].infofuelrequirement);
    }
    //for (var i = 0; i < fueldetail.length; ++i) {
        addOption(document.getElementById("cop_fueltype1"), fueldetail[0].infofuelrequirement, fueldetail[0].infofuelrequirement);
    //}
    
    for (var i = 1; i < fueldetail.length; ++i) {
        addfuels();
    }
    
}

// Add Table Dynamically 

function addfuels() {
    var table = document.getElementById("dataTable");
    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);
    row.id = rowCount;
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    var elementVia = document.createElement("select");
    cell1.appendChild(elementVia);
    elementVia.setAttribute("class", "form-control");
    elementVia.setAttribute("id", "cop_fueltype1" + rowCount);

        var optiontxt = document.createElement("option");
        optiontxt.value = fueltype[rowCount];
        optiontxt.text = fueltype[rowCount];
        elementVia.appendChild(optiontxt);

    
    var element = document.createElement("input");
    element.setAttribute("type", "text");
    element.setAttribute("value", "0.00");
    element.setAttribute("style", "text-align:left");
    element.setAttribute("class", "form-control");
    element.setAttribute("id", "cop_gradeval1" + rowCount);
    cell2.appendChild(element);

    var element = document.createElement("input");
    element.setAttribute("type", "text");
    element.setAttribute("value", "0.00");
    element.setAttribute("style", "text-align:right");
    element.setAttribute("class", "form-control");
    element.setAttribute("id", "cop_gradeval2" + rowCount);
    cell3.appendChild(element);

    var element = document.createElement("input");
    element.setAttribute("type", "text");
    element.setAttribute("value", "0.00");
    element.setAttribute("style", "text-align:right");
    element.setAttribute("class", "form-control");
    element.setAttribute("id", "cop_gradeval3" + rowCount);
    cell4.appendChild(element);

    var element = document.createElement("input");
    element.setAttribute("type", "text");
    element.setAttribute("value", "0.00");
    element.setAttribute("style", "text-align:right");
    element.setAttribute("class", "form-control");
    element.setAttribute("id", "cop_tot1" + rowCount);
    cell5.appendChild(element);

    var element = document.createElement("input");
    element.setAttribute("type", "text");
    element.setAttribute("value", "0.00");
    element.setAttribute("style", "text-align:right");
    element.setAttribute("class", "form-control");
    element.setAttribute("id", "cop_brob1" + rowCount);
    cell6.appendChild(element);
   
}

 function sendActionJson(){
    console.log('COSP');
    if(bdnCOSPsavevalidation()){
        console.log("low db savesend validation");   
        lowdbCOSPAction();
    }
  }

  function lowdbCOSPAction(){
    console.log('COSP1');
            var fuelarry = [];
            var table = document.getElementById("porttable");
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

            var ncop_pilotway1;
            var ncop_etanextport1;

            if($('#cop_pilotway').val()==''){
                ncop_pilotway1='';
            } else {
                ncop_pilotway1=$('#cop_pilotway1').val();
            }
            if($('#cop_etanextport').val()==''){
                ncop_etanextport1="";
            } else{
                ncop_etanextport1=$('#cop_etanextport1').val();
            }

            var cospdetails = { 

                "cop_service" : scheduledet[0].service,
                "cop_vslcode" : scheduledet[0].vslcode,            
                "cop_depport" : $('#cop_depport').val(),
                "cop_unlocode" : $('#cop_unlocode').val(),
                "cop_offset" : $('#cop_offset').val(),
                "cop_offsetutc" : $('#cop_offsetutc').val(),
                "cop_pilotway" : $('#cop_pilotway').val(),
                "cop_pilotway1" : ncop_pilotway1,
                "cop_cosp" : $('#cop_cosp').val(),
                "cop_cosp1" : $('#cop_cosp1').val(),
                "cop_posistion" : $('#cop_posistion').val(),
                "cop_posistion1" : $('#cop_posistion1').val(),
                "cop_nxtport" : $('#cop_nxtport').val(),
                "cop_country1" : $('#cop_country1').val(),
                "cop_excons" : $('#cop_excons').val(),
                "cop_setrpm" : $('#cop_setrpm').val(),
                "cop_offset1" : $('#cop_offset1').val(),
                "cop_offsetutc1" : $('#cop_offsetutc1').val(),
                "cop_etanextport" : $('#cop_etanextport').val(),
                "cop_etanextport1" : ncop_etanextport1,
                "cop_remarks" : $('#cop_remarks').val(),
                 "cop_voynum" : '',
                 "cop_bound": '',
                "cop_mastername": '',
                "cop_imonum": scheduledet[0].imodetails,
                "cop_country": '',
                "cop_disttogo": '',
                "cop_nnolocode1": '',
                "fueldetails" : fuelarry

               };

               // db1.get('maildata').nth(0).assign(cospdetails).value();
               // db1.write();
                db1.get('maildata').remove().write();
                db1.defaults({ maildata: [{}] }).write();
                db1.get('maildata').push(cospdetails).write();

                    var maximum = 100000;
                var minimum = 100;
                var randomnumber = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
                document.getElementById("inputSubject").value = scheduledet[0].vslcode+" BOSP Report"+randomnumber+".json";
                document.getElementById("inputAttach").value = scheduledet[0].vslcode+" BOSP Report"+randomnumber+".json";

                var maildetail = (db.get('sysconfig').value());
                if(maildetail[0].manuelMail.toString()=="Manual"){

                    var folder="/"+scheduledet[0].vslcode+" BOSP Report"+randomnumber+".json";
                    downloadJson(folder);
                    var bodycontent="BOSP Report attachment : "+scheduledet[0].vslcode+" BOSP Report"+randomnumber+".json";

                    if(maildetail[0].vesselemail.length>0){
                        console.log('inside cc');
                        window.location.href = "mailto:" + maildetail[0].to + "?cc="+ maildetail[0].vesselemail +"&subject=" + scheduledet[0].vslcode+" BOSP Report"+randomnumber+".json" + 
                        "&body="+bodycontent;
                    } else if(maildetail[0].to.length>0){
                        window.location.href = "mailto:" + maildetail[0].to + "?subject=" + scheduledet[0].vslcode+" EOSP Report"+randomnumber+".json" + 
                        "&body="+bodycontent;      
                    } else{
                        window.location.href = "mailto:ENTER MAIL" + "?subject=" + scheduledet[0].vslcode+" EOSP Report"+randomnumber+".json" + 
                        "&body="+bodycontent;   
                    }
                    setTimeout(function() { masterFieldClear('bospform'); }, 5000);
                } else{

                    $('#modalCompose').modal('show');
                    
                    console.log(maildetail);
                    $("#inputFrom").val(maildetail[0].from);
                    $("#inputTo").val(maildetail[0].to);
                    $("#ccTo").val(maildetail[0].vesselemail);
                    $('#inputBody').val($('#cop_remarks').val());
            }
  }

   function bdnCOSPsavevalidation(){
            if($('#cop_depport').val()=="") {
                alert("Kindly Enter the Departure");
                document.getElementById('cop_depport').focus();
                return false;
            }
            else if($('#cop_unlocode').val()=="")  {
                alert("Kindly Enter the UnLoc Code");
                document.getElementById('cop_unlocode').focus();
                return false;
            }
            else if($('#cop_cosp').val()=="")  {
                alert("Kindly Enter the BOSP Date");
                document.getElementById('cop_cosp').focus();
                return false;
            }
             else{
                return true;
            }
  }

function setScheduleList() {
     var txt = $("#cop_service").val();
     var res = txt.split("~~");
     if (res.length == 7) {
         $("#cop_service").val(res[0].trim());
         $("#cop_bound").val(res[1].trim());
         $("#cop_voynum").val(res[2].trim());
         $("#cop_vslcode").val(res[3].trim());
         $("#cop_vslname").val(res[4].trim());
         $("#cop_unlocode").val(res[5].trim());
         $("#cop_imonum").val(res[6].trim());
     }
 }

 function setSchedules() {   
      schedules1 = (db.get('vesselinfo').value());
       console.log(schedules1);
     var options = '';
     for (var i = 0; i < schedules1.length; i++)
         options += '<option value="' + schedules1[i] + '" />';
     document.getElementById('scheduleslist').innerHTML = options;
    
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
         $("#cop_country").val(res[0].trim());
     }
 }

function setCountryName1(evt) {
     var res = evt.value.split("~~");
     if (res.length > 1) {
         $("#cop_country1").val(res[0].trim());
     }
 }


function setPort() {
    ports = (db.get('ports').value());
    console.log(JSON.stringify(ports));
     var options = '';
     for (var i = 0; i < ports.length; i++)
         options += '<option value="' + ports[i].portname+'~~'+ports[i].portcode + '" />';
     document.getElementById('portList').innerHTML = options;
 }


function setArrPortCode() {
      var ports=$('#cop_depport').val();
    $('#cop_depport').val(ports.split("~~")[0]);
    $('#cop_unlocode').val(ports.split("~~")[1]);
 }
function setArrPortCode2(evt) {
     var res = evt.value.split("~~");
     if (res.length > 1) {
         $("#cop_nnolocode1").val(res[1].trim());
          $("#cop_nxtport").val(res[0].trim());
     }
 }
 function setVesselc() {
     var mycars = vessel;
     var options = '';
     for (var i = 0; i < mycars.length; i++)
         options += '<option value="' + mycars[i] + '" />';
     document.getElementById('VesselList').innerHTML = options;
 }

function setVesselCode(evt) {  
     var res = evt.value.split("~~");   
     if (res.length > 1) {
         $("#cop_vslname").val(res[0].trim());
         $("#cop_vslcode").val(res[1].trim());
     }
 }
function setFuel3() {
     var fuel1 = fuel;
     var options = '';
     for (var i = 0; i < fuel1.length; i++) {
         if (i == 0) {
             $("#cop_fueltype1").val(fuel1[i]);
             $("#cop_fueltype2").val(fuel1[i]);
             $("#cop_fueltype3").val(fuel1[i]);
             $("#cop_fueltype4").val(fuel1[i + 1]);
             $("#cop_fueltype5").val(fuel1[i + 1]);
              $("#cop_fueltype6").val(fuel1[i + 1]);
              $("#cop_fueltype7").val(fuel1[i + 1]);
         }
         options += '<option value="' + fuel1[i] + '" />';
     }
     document.getElementById('fuellist').innerHTML = options;

 } 

 function setFuelGrade3() {
     var fuelgrade1 = fuelgrade;
     var options = '';
     for (var i = 0; i < fuelgrade1.length; i++) {
         if (i == 0) {
             $("#cop_fuelgrade1").val(fuelgrade1[i]);
             $("#cop_fuelgrade2").val(fuelgrade1[i + 1]);
             $("#cop_fuelgrade3").val(fuelgrade1[i + 5]);
             $("#cop_fuelgrade4").val(fuelgrade1[i + 2]);
             $("#cop_fuelgrade5").val(fuelgrade1[i + 3]);
             $("#cop_fuelgrade6").val(fuelgrade1[i + 4]);
             $("#cop_fuelgrade7").val(fuelgrade1[i + 6]);
         }
         options += '<option value="' + fuelgrade1[i] + '" />';
     }
     document.getElementById('fuelgradelist').innerHTML = options;
 }

 function calculateTotal1(index) {
     var c = index.name;
     var one = Number($("#cop_1gradeval"+ c ).val());
     var two = Number($("#cop_2gradeval"+ c).val());
     var three = Number($("#cop_3gradeval"+ c).val());
     var total = one + two + three;
     $("#cop_tot1"+ c).val(parseFloat(total).toFixed(2));
 }

 function getFueldata(){

 console.log('fuel Data');

    var fuelvalues = db.get('fueldetail').value();
    console.log(fuelvalues);

    for(var i=0;i<fuelvalues.length;i++) {

   var table = document.getElementById("porttable");
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
    element.setAttribute("id", "cop_fueltype1" + i+rowCount);
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
    element.setAttribute("id", "cop_1gradeval" + rowCount);
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
    element.setAttribute("id", "cop_2gradeval" + rowCount);
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
    element.setAttribute("id", "cop_3gradeval" + rowCount);
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
    element.setAttribute("id", "cop_tot1" + rowCount);
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
    element.setAttribute("id", "cop_brob" + rowCount);
    element.setAttribute("name",rowCount);
    element.setAttribute("maxlength", "15");
    cell6.appendChild(element);

    }

  }


 function addOption_list1() {
for (var i=0; i < fuelcomb.length; i++) {
     if (i == 0) {
addOption(document.getElementById("cop_fueltype1"), fuelcomb[i], fuelcomb[i]);
addOption(document.getElementById("cop_fueltype2"), fuelcomb[i + 1], fuelcomb[i + 1]);
addOption(document.getElementById("cop_fueltype3"), fuelcomb[i + 2], fuelcomb[i + 2]);
addOption(document.getElementById("cop_fueltype4"), fuelcomb[i + 3], fuelcomb[i + 3]);
addOption(document.getElementById("cop_fueltype5"), fuelcomb[i + 4], fuelcomb[i + 4]);
addOption(document.getElementById("cop_fueltype6"), fuelcomb[i + 5], fuelcomb[i + 5]);
addOption(document.getElementById("cop_fueltype7"), fuelcomb[i + 6], fuelcomb[i + 6]);

}

}

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



