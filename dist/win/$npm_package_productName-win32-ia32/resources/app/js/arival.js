    var fueltype = [];
 $(document).ready(function() {
     makeActiveSidebar();
     setVessel();
     setPort();
     //setFuel();
     //setFuelGrade();
     setSchedules();
     setCountry();
      addOption_list4();
     $('#arr_service').on('input', function() {
         setScheduleList();
     })
      

 });

  function makeActiveSidebar(){
    
    document.getElementById("noonFrom").setAttribute("class", "");
    document.getElementById("eospFrom").setAttribute("class", "");
    document.getElementById("arrivalFrom").setAttribute("class", "active");
    document.getElementById("departureFrom").setAttribute("class", "");
    document.getElementById("bospFrom").setAttribute("class", "");
    document.getElementById("bunkerrequestFrom").setAttribute("class", "");
    document.getElementById("bdnFrom").setAttribute("class", "");
    document.getElementById("brobFrom").setAttribute("class", "");
    document.getElementById("vslinfo").setAttribute("class", "");
    document.getElementById("ports").setAttribute("class", "");
    document.getElementById("sysconfig").setAttribute("class", "");

}


function addOption_list() {
    var fueldetail = db.get('fueldetail').value();
    for (var i = 0; i < fueldetail.length; ++i) {
        fueltype[i] = (fueldetail[i].infofuelrequirement);
    }
    //for (var i = 0; i < fueldetail.length; ++i) {
        addOption(document.getElementById("arr_fueltype1"), fueldetail[0].infofuelrequirement, fueldetail[0].infofuelrequirement);
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
    elementVia.setAttribute("id", "arr_fueltype1" + rowCount);

        var optiontxt = document.createElement("option");
        optiontxt.value = fueltype[rowCount];
        optiontxt.text = fueltype[rowCount];
        elementVia.appendChild(optiontxt);

    
    var element = document.createElement("input");
    element.setAttribute("type", "text");
    element.setAttribute("value", "0.00");
    element.setAttribute("style", "text-align:right");
    element.setAttribute("class", "form-control");
    element.setAttribute("id", "arr_gradeval1" + rowCount);
    cell2.appendChild(element);

    var element = document.createElement("input");
    element.setAttribute("type", "text");
    element.setAttribute("value", "0.00");
    element.setAttribute("style", "text-align:right");
    element.setAttribute("class", "form-control");
    element.setAttribute("id", "arr_gradeval2" + rowCount);
    cell3.appendChild(element);

    var element = document.createElement("input");
    element.setAttribute("type", "text");
    element.setAttribute("value", "0.00");
    element.setAttribute("style", "text-align:right");
    element.setAttribute("class", "form-control");
    element.setAttribute("id", "arr_gradeval3" + rowCount);
    cell4.appendChild(element);

    var element = document.createElement("input");
    element.setAttribute("type", "text");
    element.setAttribute("value", "0.00");
    element.setAttribute("style", "text-align:right");
    element.setAttribute("class", "form-control");
    element.setAttribute("id", "arr_gradeval4" + rowCount);
    cell5.appendChild(element);

    var element = document.createElement("input");
    element.setAttribute("type", "text");
    element.setAttribute("value", "0.00");
    element.setAttribute("style", "text-align:right");
    element.setAttribute("class", "form-control");
    element.setAttribute("id", "arr_gradeval5" + rowCount);
    cell6.appendChild(element);
  
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
         $("#arr_country").val(res[0].trim());
     }
 }

function setCountryName1(evt) {
     var res = evt.value.split("~~");
     if (res.length > 1) {
         $("#arr_lastportcountry").val(res[0].trim());
     }
 }


 function setFuel() {
     var fuel1 = fuel;
     var options = '';
     for (var i = 0; i < fuel1.length; i++) {
         if (i == 0) {
             $("#arr_fueltype1").val(fuel1[i]);
             $("#arr_fueltype2").val(fuel1[i]);
             $("#arr_fueltype3").val(fuel1[i]);
             $("#arr_fueltype4").val(fuel1[i + 1]);
             $("#arr_fueltype5").val(fuel1[i + 1]);
              $("#arr_fueltype6").val(fuel1[i + 1]);
              $("#arr_fueltype7").val(fuel1[i + 1]);
           
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
             $("#arr_fuelgrade1").val(fuelgrade1[i]);
             $("#arr_fuelgrade2").val(fuelgrade1[i + 1]);
             $("#arr_fuelgrade3").val(fuelgrade1[i + 5]);
             $("#arr_fuelgrade4").val(fuelgrade1[i + 2]);
             $("#arr_fuelgrade5").val(fuelgrade1[i + 3]);
             $("#arr_fuelgrade6").val(fuelgrade1[i + 4]);
             $("#arr_fuelgrade7").val(fuelgrade1[i + 6]);
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
         $("#arr_vessel").val(res[0].trim());
         $("#arr_vesselcode").val(res[1].trim());
     }
 }

 function setArrPortCode(evt) {
     var res = evt.value.split("~~");
     if (res.length > 1) {
         $("#arr_arrivalport").val(res[0].trim());
          $("#arr_unloccode").val(res[1].trim());
     }
 }

 function setLasPortCode(evt) {
     var res = evt.value.split("~~");
     if (res.length > 1) {
         $("#arr_lastport").val(res[0].trim());
          $("#arr_lastportunlocode").val(res[1].trim());
     }
 }

 function setScheduleList() {
     var txt = $("#arr_service").val();
     var res = txt.split("~~");
     if (res.length == 7) {
         $("#arr_service").val(res[0].trim());
         $("#arr_bound").val(res[1].trim());
         $("#arr_voyageno").val(res[2].trim());
         $("#arr_vesselcode").val(res[3].trim());
         $("#arr_vessel").val(res[4].trim());
         $("#arr_unloccode").val(res[5].trim());
         $("#arr_imonum").val(res[6].trim());
     }
 }

 function calculateTotal1(index) {
     var c = index.name;
     console.log("inside calculateTotal1");
     console.log(c);
     var one = Number($("#arr_1gradeval"+c).val());
     var two = Number($("#arr_2gradeval"+c).val());
     var three = Number($("#arr_3gradeval"+c).val());
     var total = one + two + three;
     $("#arr_4gradeval"+c).val(parseFloat(total).toFixed(2));
 }


 function addOption_list4() {


for (var i=0; i < fuelcomb.length; i++) {
      if (i == 0) {
addOption(document.getElementById("arr_fueltype1"), fuelcomb[i], fuelcomb[i]);
addOption(document.getElementById("arr_fueltype2"), fuelcomb[i + 1], fuelcomb[i + 1]);
addOption(document.getElementById("arr_fueltype3"), fuelcomb[i + 2], fuelcomb[i + 2]);
addOption(document.getElementById("arr_fueltype4"), fuelcomb[i + 3], fuelcomb[i + 3]);
addOption(document.getElementById("arr_fueltype5"), fuelcomb[i + 4], fuelcomb[i + 4]);
addOption(document.getElementById("arr_fueltype6"), fuelcomb[i + 5], fuelcomb[i + 5]);
addOption(document.getElementById("arr_fueltype7"), fuelcomb[i + 6], fuelcomb[i + 6]);

}
}

}




function getFuelarrdataTable(){

    var fuelvalues = db.get('fueldetail').value();

  for(var i=0;i<fuelvalues.length;i++) {

   var table = document.getElementById("ArrDTable");
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
    element.setAttribute("style", "text-align:right");
    element.setAttribute("class", "form-control");
    element.setAttribute("id", "arr_0fueltype" + i+rowCount);
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
    element.setAttribute("id", "arr_1gradeval" + rowCount);
    element.setAttribute("name",rowCount);
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
    element.setAttribute("id", "arr_2gradeval" + rowCount);
    element.setAttribute("name",rowCount);
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
    element.setAttribute("id", "arr_3gradeval" + rowCount);
    element.setAttribute("name",rowCount);
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
    element.setAttribute("readonly", "true");
    element.setAttribute("id", "arr_4gradeval" + rowCount);
    element.setAttribute("name",rowCount);
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
    element.setAttribute("id", "arr_5gradeval" + rowCount);
    element.setAttribute("name",rowCount);
    cell6.appendChild(element);

    }

}