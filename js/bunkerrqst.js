var fueltype = [];
$(document).ready(function () {


    var vessel = db.get('vesselinfo').value();
    $('#brn_service').val(vessel[0].service);
	$('#brn_vessel').val(vessel[0].vslname);
	$('#brn_vesselcode').val(vessel[0].vslcode);
	document.getElementById("span_vesselname").innerHTML=vessel[0].vslname;
    //setVessel();
    setPort();
    makeActiveSidebar();
    //setFuel();
    // setFuelGrade();
    addOption_list();
	showSavedDetails();
    
    //setSchedules();
    //$('#brn_service').on('input', function () {
    //    setScheduleList();
    //})
});


function makeActiveSidebar(){
    
    document.getElementById("noonFrom").setAttribute("class", "");
    document.getElementById("eospFrom").setAttribute("class", "");
    document.getElementById("arrivalFrom").setAttribute("class", "");
    document.getElementById("departureFrom").setAttribute("class", "");
    document.getElementById("bospFrom").setAttribute("class", "");
    document.getElementById("bunkerrequestFrom").setAttribute("class", "active");
    document.getElementById("bdnFrom").setAttribute("class", "");
    document.getElementById("brobFrom").setAttribute("class", "");
    document.getElementById("vslinfo").setAttribute("class", "");
    document.getElementById("ports").setAttribute("class", "");
    document.getElementById("sysconfig").setAttribute("class", "");
    document.getElementById("mailhistory").setAttribute("class", "");
    document.getElementById("masterFileupload").setAttribute("class", "");

}

function setFuel() {
    var fuel1 = fuel;
    var options = '';
    for (var i = 0; i < fuel1.length; i++) {
        if (i == 0) {
            $("#brn_fueltype").val(fuel1[i]);
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
            $("#brn_fuelgrade").val(fuelgrade1[i]);
        }
        options += '<option value="' + fuelgrade1[i] + '" />';
    }
    document.getElementById('fuelgradelist').innerHTML = options;
}

function setVessel() {
    var mycars = db.get('vesselinfo').value();
    var options = '';
    for (var i = 0; i < mycars.length; i++)
        options += '<option value="' + mycars[i].vslname + '~~' + mycars[i].vslcode + '" />';
    document.getElementById('VesselList').innerHTML = options;
}

function setPort() {
    var ports = db.get('ports').value();
    var options = '';
    for (var i = 0; i < ports.length; i++)
        options += '<option value="' + ports[i].portname + '~~' + ports[i].portcode + '" />';
    document.getElementById('portList').innerHTML = options;
}

function setVesselCode(evt) {
    var res = evt.value.split("~~");
    if (res.length > 1) {
        $("#brn_vessel").val(res[0].trim());
        $("#brn_vesselcode").val(res[1].trim());
    }
}
function setBunkerPort() {
    var txt = $("#brn_bunkerport").val();
    var res = txt.split("~~");
    if (res.length == 2) {
        $("#brn_bunkerportname").val(res[0].trim());
        $("#brn_bunkerport").val(res[1].trim());
    }
}

function setScheduleList() {
    var txt = $("#brn_service").val();
    var res = txt.split("~~");
    if (res.length == 7) {
        $("#brn_service").val(res[0].trim());
        $("#brn_bound").val(res[1].trim());
        $("#brn_voyage").val(res[2].trim());
        $("#brn_vessel").val(res[4].trim());
        $("#brn_vesselcode").val(res[3].trim());
        $("#brn_bunkerport").val(res[5].trim());
    }
}

function setSchedules() {
    var schedules1 = schedules;
    var options = '';
    for (var i = 0; i < schedules1.length; i++)
        options += '<option value="' + schedules1[i] + '" />';
    document.getElementById('scheduleslist').innerHTML = options;
}

function calculateconsp(index) {
    var c = index;
    var one = Number($("#speed" + c + "_noofdays").val());
    var two = Number($("#speed" + c + "_cons").val());
    var total = one * two;
    $("#speed" + c + "_total").val(parseFloat(total).toFixed(2));
    var totalloop = 0;
    var one = Number($("#speed1_total").val());
    var two = Number($("#speed2_total").val());
    var three = Number($("#speed3_total").val());
    var four = Number($("#speed4_total").val());
    var five = Number($("#speed5_total").val());
    totalloop = one + two + three + four + five;
    $("#totalconsp").val(parseFloat(totalloop).toFixed(2));
}

function addOption(selectbox, text, value) {
    var optn = document.createElement("OPTION");
    optn.text = text;
    optn.value = value;
    //selectbox.options.add(optn);
    selectbox.add(optn);
}

function addOption_list() {
    var fueldetail = db.get('fueldetail').value();
    console.log('fueldetails '+fueldetail);

    // for (var i = 0; i < fueldetail.length; ++i) {
    //     fueltype[i] = (fueldetail[i].infofuelrequirement);
    // }
    //for (var i = 0; i < fueldetail.length; ++i) {
      //  addOption(document.getElementById("brn_fuelreq"), fueldetail[0].infofuelrequirement, fueldetail[0].infofuelrequirement);
    //}
	
	for (var i = 0; i < fueldetail.length; i++) {
		//addfuels();

        console.log('inside '+fueldetail.length);
        console.log(fueldetail[i].infofuelrequirement);


        // console.log('--'+fueldept[0].infofuelrequirement);

            var table = document.getElementById("dataTablebrq");
            var rowCount = table.rows.length;
            var row = table.insertRow(rowCount);
            row.id = rowCount;
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            
            var element = document.createElement("input");
            element.setAttribute("type", "text");
            element.setAttribute("style", "text-align:left !important; height: 30px !important");
            element.setAttribute("class", "form-control");
            element.setAttribute("value",fueldetail[i].infofuelrequirement);
            element.setAttribute("id", "brn_fuelreq" + rowCount);
            element.setAttribute("name","brn_fuelreq" + rowCount);
            element.setAttribute("readonly","true");
            cell1.appendChild(element);

            var element = document.createElement("input");
            element.setAttribute("type", "text");
            element.setAttribute("style", "text-align:right !important;  height: 30px !important");
            element.setAttribute("class", "form-control");
            element.setAttribute("value", "0.00");
            element.setAttribute("id", "brn_bunkerstem" + rowCount);
            element.setAttribute("ondrop","return false");
            element.setAttribute("onpaste","return false");
            element.setAttribute("onkeypress","return isNumber(event)");
            element.setAttribute("onchange","return validateDecimal(this)");
            element.setAttribute("maxlength", "15");
            cell2.appendChild(element);

            var element = document.createElement("input");
            element.setAttribute("type", "text");
            element.setAttribute("style", "text-align:right !important;  height: 30px !important");
            element.setAttribute("value", "0.00");
            element.setAttribute("class", "form-control");
            element.setAttribute("id", "brn_maxintake" + rowCount);
            element.setAttribute("ondrop","return false");
            element.setAttribute("onpaste","return false");
            element.setAttribute("onkeypress","return isNumber(event)");
            element.setAttribute("onchange","return validateDecimal(this)");
            element.setAttribute("maxlength", "15");
            cell3.appendChild(element);

    }
}

function showSavedDetails(flag) {
	
	var myvoyage = db.get('bunkerrequest').value();
    var sizeofArr=0;
    if(myvoyage.length>5){
        sizeofArr=myvoyage.length-5;
    } 
	var foo = document.getElementById("fooBar");
	var x = document.getElementById("fooBar").childElementCount;
	console.log("foo size---"+x);
	
	while (foo.hasChildNodes()) {   
		foo.removeChild(foo.firstChild);
	}
	//for (var i = 0; i <= x; i++) { 
	//	foo.removeChild(foo.childNodes[0]);
	//}
	
	//if(flag == "mail"){
		//var element = document.createElement("legend");
		//Assign different attributes to the element. 
		//element.type = "label";
		//element.innerHTML  = "Recent Bunker Requests : "; // Really? You want the default value to be the type string?
		//element.name = "lblPort1"; // And the name too?
		//element.id = "lblPort1";
		//element.setAttribute("style", "color:red; font-weight:bold;border: none;");
		//var foo1 = document.getElementById("fooBar");
		//foo1.appendChild(element); //Append the element in page (in span).
	//}
	for (var i = sizeofArr; i < myvoyage.length; i++) {
		//Create an input type dynamically.   
		var element = document.createElement("input");
		//Assign different attributes to the element. 
		element.type = "button";
		element.value = myvoyage[i].bunkerportcode; // Really? You want the default value to be the type string?
		element.name = myvoyage[i].bunkerportcode; // And the name too?
		element.id = myvoyage[i].bunkerportcode;
		element.setAttribute("class", "btn btn-primary");
		element.setAttribute("style", "margin-right:2px;");
		element.onclick = function() { // Note this is a function
			selectrequest(this);
		};

		var foo1 = document.getElementById("fooBar");
		foo1.appendChild(element); //Append the element in page (in span).
		
	}
	var x = document.getElementById("fooBar").childElementCount;
	console.log("foo size---"+x);
	
	
}

// Add Table Dynamically 

function addfuels() {
    var table = document.getElementById("dataTablebrq");
    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);
    row.id = rowCount;
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var elementVia = document.createElement("select");
    cell1.appendChild(elementVia);
    elementVia.setAttribute("class", "form-control");
    elementVia.setAttribute("id", "brn_fuelreq" + rowCount);
    //for (var i = 0; i < fueltype.length; i++) {
        var optiontxt = document.createElement("option");
        optiontxt.value = fueltype[rowCount];
        optiontxt.text = fueltype[rowCount];
        elementVia.appendChild(optiontxt);
    //}
	
    var element = document.createElement("input");
    element.setAttribute("type", "text");
    element.setAttribute("value", "0.00");
    element.setAttribute("style", "text-align:right");
    element.setAttribute("class", "form-control");
    element.setAttribute("id", "brn_bunkerstem" + rowCount);
    cell2.appendChild(element);

    var element = document.createElement("input");
    element.setAttribute("type", "text");
    element.setAttribute("value", "0.00");
    element.setAttribute("style", "text-align:right");
    element.setAttribute("class", "form-control");
    element.setAttribute("id", "brn_maxintake" + rowCount);
    cell3.appendChild(element);
}



function selectrequest(evt) {
	
	var portc = evt.value;
	array = db.get('bunkerrequest').value();
	console.log(array);
	for (var i = 0; i < array.length; i++) {
		
		console.log("bPort--"+portc);
		if (array[i].bunkerportcode == portc ) {
			//if(array[i].status=="Open"){
				//var retVal = confirm("Bunker port already exists. Do you want to Continue?");
				//if (retVal == true) {
					var arr=array[i].fueldetails;
							
					$('#brn_voyage').val(array[i].voyagenumber);
					$('#brn_bunkerdate').val(array[i].Dateofsupply);
					$('#brn_bunkerport').val(array[i].bunkerportcode);
					$('#brn_bunkerportname').val(array[i].bunkerportname);
					$('#brn_remarks').val(array[i].remarks);
					
					for(var j=0;j<arr.length;j++){
						console.log("fuel--"+arr[j].fuel);
                        var k=j+1;
                        
                        $("#brn_bunkerstem"+k).val(arr[j].bunstem);
                        $("#brn_maxintake"+k).val(arr[j].maxintake);
						
						console.log($('#dataTablebrq tbody tr:nth-child('+(j+1)+')').find('input:nth-child(1)').val(arr[j].bunstem));               
						// $('#dataTablebrq tbody tr:nth-child('+(j+1)+')').find('input:first').val(arr[j].fuel);
						// $('#dataTablebrq tbody tr:nth-child('+(j+1)+')').find('input:last').val(arr[j].maxintake);
					}   
				//}
				//else {
				//		document.getElementById("brn").reset();
				//			return false;
				//}
			//}
		}
	}
}


