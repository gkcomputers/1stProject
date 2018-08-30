     var fueltype = [];
        $(document).ready(function() {
            makeActiveSidebar();
            setVessel();
           // setFuel();
           // setFuelGrade();
            setSchedules();
            setPort();
            setCountry();
            addOption_list2();
            $('#nrp_service').on('input', function() {
                setScheduleList();
            })
   
        });

function makeActiveSidebar(){
    
    document.getElementById("noonFrom").setAttribute("class", "active");
    document.getElementById("eospFrom").setAttribute("class", "");
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

function addOption_list() {
    var fueldetail = db.get('fueldetail').value();
    console.log("FUEL LIST-->"+fueldetail);
    for (var i = 0; i < fueldetail.length; ++i) {
        fueltype[i] = (fueldetail[i].infofuelrequirement);
    }
    //for (var i = 0; i < fueldetail.length; ++i) {
        addOption(document.getElementById("nrp_fueltype1"), fueldetail[0].infofuelrequirement, fueldetail[0].infofuelrequirement);
    //}
    
    for (var i = 1; i < fueldetail.length; ++i) {
        addfuels();
    }
    
}


function getFueldataTable(){

 

    var fuelvalues = db.get('fueldetail').value();

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
    var cell7 = row.insertCell(6);

    

        console.log("------fuel value s "+fuelvalues[i].infofuelrequirement)
    var element = document.createElement("input");
    element.setAttribute("type", "text");
    element.setAttribute("value",fuelvalues[i].infofuelrequirement);
    element.setAttribute("style", "text-align:left");
    element.setAttribute("class", "form-control");
    element.setAttribute("id", "nrp_fueltype1" + i+rowCount);
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
    element.setAttribute("id", "nrp_1gradeval" + rowCount);
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
    element.setAttribute("id", "nrp_2gradeval" + rowCount);
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
    element.setAttribute("id", "nrp_3gradeval" + rowCount);
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
    element.setAttribute("id", "nrp_4gradeval" + rowCount);
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
    element.setAttribute("id", "nrp_5gradeval" + rowCount);
    element.setAttribute("name",rowCount);
    element.setAttribute("readonly","true");
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
    element.setAttribute("id", "nrp_6gradeval" + rowCount);
    element.setAttribute("name",rowCount);
    element.setAttribute("maxlength", "15");
    cell7.appendChild(element);

    }

  }

// Add Table Dynamically 

function addfuels() {
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
    var cell7 = row.insertCell(6);

    // var elementVia = document.createElement("select");
    // cell1.appendChild(elementVia);
    // elementVia.setAttribute("class", "form-control");
    // elementVia.setAttribute("id", "nrp_fueltype1" + rowCount);

    //     var optiontxt = document.createElement("option");
    //     optiontxt.value = fueltype[rowCount];
    //     optiontxt.text = fueltype[rowCount];
    //     elementVia.appendChild(optiontxt);

    
    var element = document.createElement("input");
    element.setAttribute("type", "text");
    element.setAttribute("value",fuelvalues[i].infofuelrequirement);
    element.setAttribute("style", "text-align:left");
    element.setAttribute("class", "form-control");
    element.setAttribute("id", "nrp_fueltype0" + i+rowCount);
    element.setAttribute("readonly","true");
    cell1.appendChild(element);


    var element = document.createElement("input");
    element.setAttribute("type", "text");
    element.setAttribute("value", "0.00");
    element.setAttribute("style", "text-align:right");
    element.setAttribute("class", "form-control");
    element.setAttribute("id", "nrp_1gradeval" + rowCount);
    element.setAttribute("maxlength", "15");
    cell2.appendChild(element);

    var element = document.createElement("input");
    element.setAttribute("type", "text");
    element.setAttribute("value", "0.00");
    element.setAttribute("style", "text-align:right");
    element.setAttribute("class", "form-control");
    element.setAttribute("id", "nrp_2gradeval" + rowCount);
    element.setAttribute("maxlength", "15");
    cell3.appendChild(element);

    var element = document.createElement("input");
    element.setAttribute("type", "text");
    element.setAttribute("value", "0.00");
    element.setAttribute("style", "text-align:right");
    element.setAttribute("class", "form-control");
    element.setAttribute("id", "nrp_3gradeval" + rowCount);
    element.setAttribute("maxlength", "15");
    cell4.appendChild(element);

    var element = document.createElement("input");
    element.setAttribute("type", "text");
    element.setAttribute("value", "0.00");
    element.setAttribute("style", "text-align:right");
    element.setAttribute("class", "form-control");
    element.setAttribute("id", "nrp_4gradeval" + rowCount);
    cell5.appendChild(element);

    var element = document.createElement("input");
    element.setAttribute("type", "text");
    element.setAttribute("value", "0.00");
    element.setAttribute("style", "text-align:right");
    element.setAttribute("class", "form-control");
    element.setAttribute("id", "nrp_5gradeval" + rowCount);
    cell6.appendChild(element);

     var element = document.createElement("input");
    element.setAttribute("type", "text");
    element.setAttribute("value", "0.00");
    element.setAttribute("style", "text-align:right");
    element.setAttribute("class", "form-control");
    element.setAttribute("id", "nrp_6gradeval" + rowCount);
    cell7.appendChild(element);


    //    var element = document.createElement("input");
    // element.setAttribute("type", "text");
    // element.setAttribute("value", "0.00");
    // element.setAttribute("style", "text-align:right");
    // element.setAttribute("class", "form-control");
    // element.setAttribute("id", "nrp_7gradeval" + rowCount); 
    // cell8.appendChild(element);


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
         $("#nrp_country").val(res[0].trim());
     }
 }
function setCountryName_Next(evt) {
     var res = evt.value.split("~~");
     if (res.length > 1) {
         $("#nrp_nextcountry").val(res[0].trim());
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
         $("#nrp_lastport").val(res[0].trim());
          $("#nrp_unlocode").val(res[1].trim());
     }
 }

function setArrPortCode1(evt) {
     var res = evt.value.split("~~");
     if (res.length > 1) {
         $("#nrp_nextport").val(res[0].trim());
         
     }
 }
function setArrPortCode2(evt) {
     var res = evt.value.split("~~");
     if (res.length > 1) {
         $("#nrp_nxtport").val(res[0].trim());
          $("#nrp_unlocodeone").val(res[1].trim());
         
     }
 }

        function setFuel() {
            var fuel1 = fuel;
            var options = '';
            for (var i = 0; i < fuel1.length; i++) {
                if (i == 0) {
                    $("#nrp_fueltype1").val(fuel1[i]);
                    $("#nrp_fueltype2").val(fuel1[i]);
                    $("#nrp_fueltype3").val(fuel1[i]);
                    $("#nrp_fueltype4").val(fuel1[i + 1]);
                    $("#nrp_fueltype5").val(fuel1[i + 1]);
                    $("#nrp_fueltype6").val(fuel1[i + 1]);
                    $("#nrp_fueltype7").val(fuel1[i + 1]);
                }
                options += '<option value="' + fuel1[i] + '" />';
            }
            document.getElementById('fuellist').innerHTML = options;
        }

        function setFuelGrade() {
            var fuelgrade1 = fuelgrade;
            var options = '';
            for (var i = 0; i < fuelgrade1.length; i++) {
                if (i == 0) {
                    $("#nrp_fuelgrade1").val(fuelgrade1[i]);
                    $("#nrp_fuelgrade2").val(fuelgrade1[i + 1]);
                    $("#nrp_fuelgrade3").val(fuelgrade1[i + 5]);
                    $("#nrp_fuelgrade4").val(fuelgrade1[i + 2]);
                    $("#nrp_fuelgrade5").val(fuelgrade1[i + 3]);
                    $("#nrp_fuelgrade6").val(fuelgrade1[i + 4]);
                    $("#nrp_fuelgrade7").val(fuelgrade1[i + 6]);
                }
                options += '<option value="' + fuelgrade1[i] + '" />';
            }
            document.getElementById('fuelgradelist').innerHTML = options;
        }

        function setVessel() {
            var mycars = vessel;
            var options = '';
            for (var i = 0; i < mycars.length; i++)
                options += '<option value="' + mycars[i] + '" />';
            document.getElementById('VesselList').innerHTML = options;
        }

        function setVesselCode(evt) {
             var nrp_vessel = evt.value.split("~~");
     if (nrp_vessel.length > 1) {
         $("#nrp_vslcode").val(nrp_vessel[1].trim());
           $("#nrp_vessel").val(nrp_vessel[0].trim());
     }
            
           
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
     var one = Number($("#nrp_1gradeval"+ c ).val());
     var two = Number($("#nrp_2gradeval"+ c ).val());
     var three = Number($("#nrp_3gradeval"+ c ).val());
     var total = one + two + three;
     console.log('-----total'+total);
     $("#nrp_4gradeval"+ c).val(parseFloat(total).toFixed(2));

    
     var timelapse = $("#nrp_timeelapsone").val();
     var estconsp=0;
     if(timelapse>0){
     estconsp=total/timelapse*24;     
     }
     $("#nrp_5gradeval"+ c).val(parseFloat(estconsp).toFixed(2));
     
     
 }

 function calculateEstConsp(obj) {
     var c = fuelgrade.length;
     var timelapse = Number($("#nrp_timeelapsone").val());
      var estconsp=0;
     c=c+1;
     for (var i = 1; i < fuelgrade.length; i++){  
     estconsp=0;
     var total=Number($("#nrp_4gradeval"+ i ).val());   
    if(timelapse > 0 && total > 0){
     estconsp=total/timelapse*24;    
         $("#nrp_5gradeval"+ i).val(parseFloat(estconsp).toFixed(2));
     }
    
     }
    
 }


        function calculateTotalx(index) {
            var c = index;
            if (c = '1') {
                c = 'one';
            } else if (c = '2') {
                c = 'two';
            } else if (c = '3') {
                c = 'three';
            }
            var one = Number($("#nrp_me" + c).val());
            var two = Number($("#nrp_ae" + c).val());
            var three = Number($("#nrp_blr" + c).val());
            var total = one + two + three;
            console.log(one + " " + two + " " + three + " " + total);
            console.log(Number($("#nrp_me" + c).val()));
            $("#nrp_tot" + c).val(total);
        }

        function setScheduleList() {
            var txt = $("#nrp_service").val();
            var res = txt.split("~~");
            if (res.length == 7) {
                $("#nrp_service").val(res[0].trim());
                $("#nrp_bound").val(res[1].trim());
                $("#nrp_voynumber").val(res[2].trim());
                $("#nrp_vslcode").val(res[3].trim());
                $("#nrp_vessel").val(res[4].trim());
                $("#nrp_unlocode").val(res[5].trim());
                $("#nrp_imnonumber").val(res[6].trim());
            }
        }

        function setSchedules() {
            var schedules1 = schedules;
            var options = '';
            for (var i = 0; i < schedules1.length; i++)
                options += '<option value="' + schedules1[i] + '" />';
            document.getElementById('scheduleslist').innerHTML = options;
        }

function myFunc(e) {
    var val = this.value;
    var re = /^([0-9]+[\.]?[0-9]?[0-9]?|[0-9]+)$/g;
    var re1 = /^([0-9]+[\.]?[0-9]?[0-9]?|[0-9]+)/g;
    if (re.test(val)) {
        //do something here

    } else {
        val = re1.exec(val);
        if (val) {
            this.value = val[0];
        } else {
            this.value = "";
        }
    }
}



 function addOption_list2() {


for (var i=0; i < fuelcomb.length; i++) {
     if (i == 0) {

addOption(document.getElementById("nrp_fueltype1"), fuelcomb[i], fuelcomb[i]);
addOption(document.getElementById("nrp_fueltype2"), fuelcomb[i + 1], fuelcomb[i + 1]);
addOption(document.getElementById("nrp_fueltype3"), fuelcomb[i + 2], fuelcomb[i + 2]);
addOption(document.getElementById("nrp_fueltype4"), fuelcomb[i + 3], fuelcomb[i + 3]);
addOption(document.getElementById("nrp_fueltype5"), fuelcomb[i + 4], fuelcomb[i + 4]);
addOption(document.getElementById("nrp_fueltype6"), fuelcomb[i + 5], fuelcomb[i + 5]);
addOption(document.getElementById("nrp_fueltype7"), fuelcomb[i + 6], fuelcomb[i + 6]);

}
    
}
    

}


