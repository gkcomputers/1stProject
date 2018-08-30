$(document).ready(function() {    

    console.log("bdn js loaded"+path);
    // setVessel();
    // setPort();
     //setFuelbdn();
    // setProtest();
    // addOption_list7();
     makeActiveSidebar();
     
 });

function makeActiveSidebar(){
    
    document.getElementById("noonFrom").setAttribute("class", "");
    document.getElementById("eospFrom").setAttribute("class", "");
    document.getElementById("arrivalFrom").setAttribute("class", "");
    document.getElementById("departureFrom").setAttribute("class", "");
    document.getElementById("bospFrom").setAttribute("class", "");
    document.getElementById("bunkerrequestFrom").setAttribute("class", "");
    document.getElementById("bdnFrom").setAttribute("class", "active");
    document.getElementById("brobFrom").setAttribute("class", "");
    document.getElementById("vslinfo").setAttribute("class", "");
    document.getElementById("ports").setAttribute("class", "");
    document.getElementById("sysconfig").setAttribute("class", "");
    document.getElementById("mailhistory").setAttribute("class", "");
    document.getElementById("masterFileupload").setAttribute("class", "");

}

var protest= ['Yes','No'];

 function setProtest() {
     var prot = protest;
     var options = '';
     for (var i = 0; i < prot.length; i++) {        
          if (i == 0) {              
             $("#bdn_bdnprotest").val(prot[i]);            
         }
         options += '<option value="' + prot[i] + '" />';
     }
     document.getElementById('protestlist').innerHTML = options;

 }

 function setFuelbdn() {
     var fuel1 = fuel;
     var options = '';
     for (var i = 0; i < fuel1.length; i++) {        
          if (i == 0) {              
             $("#bdn_proname").val(fuel1[i]);            
         }
         options += '<option value="' + fuel1[i] + '" />';
     }
     document.getElementById('fuellist').innerHTML = options;
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



 function setPortName(evt) {
     var res = evt.value.split("~~");
     if (res.length > 1) {
         $("#bdn_dlocation").val(res[0].trim());
         $("#bdn_port").val(res[1].trim());
     }
 }

function setVesselName(evt) {
     var res = evt.value.split("~~");
     if (res.length > 1) {
         $("#bdn_physupname").val(res[0].trim());
        
     }
 }

function setNextPortname(evt) {
     var res = evt.value.split("~~");
     if (res.length > 1) {
         $("#bdn_nxtport").val(res[0].trim());        
     }
 }

 function addOption_list7() {
for (var i=0; i < fuelcomb.length;++i) {
addOption(document.getElementById("bdn_proname"), fuelcomb[i], fuelcomb[i]);
}
}

//add table dynamically
function addRowsample() {
    var table = document.getElementById("dataTable");
    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);
    row.id = rowCount;
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);

    var element = document.createElement("input");
    element.setAttribute("type", "text");
    element.setAttribute("style", "text-align:left");
    element.setAttribute("class", "form-control");
    element.setAttribute("id", "bdn_sampledes" + rowCount);
    cell1.appendChild(element);

    var element = document.createElement("input");
    element.setAttribute("type", "text");
    element.setAttribute("style", "text-align:left");
    element.setAttribute("class", "form-control");
    element.setAttribute("id", "bdn_samplesealno" + rowCount);
    cell2.appendChild(element);

    var element = document.createElement("input");
    element.setAttribute("type", "text");
    element.setAttribute("style", "text-align:left");
    element.setAttribute("class", "form-control");
    element.setAttribute("id", "bdn_samplecountersealno" + rowCount);
    cell3.appendChild(element);

    row.style="text-align: center";
    var element = document.createElement("button");
    element.setAttribute("style", "text-align:right;height: 30px !important;");
    //element.innerHTML="X";
    element.setAttribute("class", "btn btn-danger fa fa fa-remove");
    element.setAttribute("id", "bdn_sampleaction" + rowCount);
    element.setAttribute("onclick","onSampremove(event)");
    cell4.appendChild(element);

}

function addRowAck() {
    var table = document.getElementById("acknowledgementDetails");
    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);
    row.id = rowCount;
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);

    var element = document.createElement("input");
    element.setAttribute("type", "text");
    element.setAttribute("style", "text-align:left");
    element.setAttribute("class", "form-control");
    element.setAttribute("id", "bdn_ackdes" + rowCount);
    cell1.appendChild(element);

    var element = document.createElement("input");
    element.setAttribute("type", "text");
    element.setAttribute("style", "text-align:left");
    element.setAttribute("class", "form-control");
    element.setAttribute("id", "bdn_ackName" + rowCount);
    cell2.appendChild(element);

    var element = document.createElement("input");
    element.setAttribute("type", "date");
    element.setAttribute("style", "text-align:right");
    element.setAttribute("class", "form-control");
    element.setAttribute("id", "bdn_ackDate" + rowCount);
    cell3.appendChild(element);

    row.style="text-align: center";
    var element = document.createElement("button");
    element.setAttribute("style", "text-align:right;height: 30px !important;");
    //element.innerHTML="X";
    element.setAttribute("class", "btn btn-danger fa fa fa-remove");
    element.setAttribute("id", "bdn_Ackaction" + rowCount);
    element.setAttribute("onclick","onAckremove(event)");
    cell4.appendChild(element);

}

function addRowproduct() {
    var table = document.getElementById("dataTablePro");
    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);
    row.id = rowCount;
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);

    var element = document.createElement("input");
    element.setAttribute("type", "text");
    element.setAttribute("style", "text-align:left");
    element.setAttribute("class", "form-control");
    element.setAttribute("id", "bdn_productdes" + rowCount);
    cell1.appendChild(element);

    var element = document.createElement("input");
    element.setAttribute("type", "text");
    element.setAttribute("style", "text-align:right");
    element.setAttribute("class", "form-control");
    element.setAttribute("id", "bdn_productunit" + rowCount);
    cell2.appendChild(element);

    var element = document.createElement("input");
    element.setAttribute("type", "text");
    element.setAttribute("style", "text-align:left");
    element.setAttribute("class", "form-control");
    element.setAttribute("id", "bdn_producttest" + rowCount);
    cell3.appendChild(element);

    var element = document.createElement("input");
    element.setAttribute("type", "text");
    element.setAttribute("style", "text-align:right");
    element.setAttribute("class", "form-control");
    element.setAttribute("id", "bdn_productvalue" + rowCount);
    cell4.appendChild(element);

    var element = document.createElement("button");    
    element.setAttribute("style", "text-align:right;height: 30px !important;");
    //element.innerHTML="[X]";
    element.setAttribute("class", "btn btn-danger fa fa fa-remove");
    element.setAttribute("id", "bdn_productaction" + rowCount);
    element.setAttribute("onclick","onProdremove(event)");
    cell5.appendChild(element);

}

function onProdremove(event){
    console.log('--inside on'+event);
    var index=($(event.target).parents('tr').index()); 
    document.getElementById("dataTablePro").deleteRow(index);
    return false;
}

function onSampremove(event){
    var index=($(event.target).parents('tr').index()); 
    document.getElementById("dataTable").deleteRow(index);   
    return false;
}

function onAckremove(event){
    var index=($(event.target).parents('tr').index()); 
    document.getElementById("acknowledgementDetails").deleteRow(index);   
    return false;
}

function setVoyageCode(evt) {
            var res = evt.value;
                $("#bdn_voyage").val(res.trim());
                console.log("enters into voyage");
                var ports = db.get('bunkerrequest').value();
                console.log("ports "+ports);
                var options = '';
                for (var i = 0; i < ports.length; i++)
                    if(ports[i].voyagenumber==res){
                        options += '<option value="'+ports[i].bunkerportcode+'" />';
                    }
                   document.getElementById('portList').innerHTML = options;


    }

function setBunkerPortbdn(evt){

            console.log('inside choose ports'); 
            var port=evt.value;
            portcode=port.split("-")[0];
            var fueltype=port.split("-")[1];
            var fuelgrade=port.split("-")[2];

            console.log('fueltype '+fueltype+'--fuelgrade '+fuelgrade+'---fuetype ');


            console.log('inside choose port 1'+port);
            var voyage=$('#bdn_voyage').val();
            var service=$('#bdn_service').val();
            var vesselcode=$('#bdn_vesselcode').val();

       

            var arrValue=db.get('bunkerrequest').value();
            for (var j = 0; j < arrValue.length; j++)
            {
               

                if(portcode.trim()==arrValue[j].bunkerportcode.trim() && service==arrValue[j].service.trim()
                 && vesselcode==arrValue[j].vesselcode.trim()){
                    console.log('Successfully 3');
                    $('#bdn_voyage').val(arrValue[j].voyagenumber);
                    $('#bdn_bunkerportname').val(arrValue[j].bunkerportname);
                    $('#bdn_bunkerdate').val(arrValue[j].Dateofsupply);
                    $('#bdn_date').val(arrValue[j].Dateofsupply);
					$('#bdn_alongside').val(arrValue[j].Dateofsupply);  
					$('#bdn_hostcon').val(arrValue[j].Dateofsupply);
					$('#bdn_hostdiscon').val(arrValue[j].Dateofsupply); 
					$('#bdn_startpump').val(arrValue[j].Dateofsupply); 
					$('#bdn_finishpump').val(arrValue[j].Dateofsupply); 
					$('#bdn_bargeaway').val(arrValue[j].Dateofsupply); 
                    $('#bdn_bunkerport').val(portcode);
                    $('#bdn_quantity').val()
                    var fueldetails=arrValue[j].fueldetails;
                    console.log('fuel length'+fueldetails.length);

                    for(var k=0;k<fueldetails.length;k++){
                        console.log('fueltype '+fueltype+'--fuelgrade '+fuelgrade+'---fuetype '+fueldetails[k].fuel);
                        if(fueltype+'-'+fuelgrade==fueldetails[k].fuel){
                            fueldetailsadd(fueldetails[k]);    
                            $('#bdn_quantity').val(fueldetails[k].bunstem);
                            $('#bdn_fueltype').val(fueltype);
                            $('#bdn_fuelgrade').val(fuelgrade);
                        }
                    }

                    
                }
            }
            console.log('inside choose port 2'+voyage+'--service '+service+'vesselcode---'+vesselcode); 

}

function setSupplydate(evt){
	var bnkdate=evt.value;
	$('#bdn_alongside').val(bnkdate);  
    $('#bdn_hostcon').val(bnkdate);
    $('#bdn_hostdiscon').val(bnkdate); 
    $('#bdn_startpump').val(bnkdate); 
    $('#bdn_finishpump').val(bnkdate); 
    $('#bdn_bargeaway').val(bnkdate); 
	
}

function setSupplydatetime(evt){
	var bnkdate=evt.value;
	$('#bdn_alongsidetime').val(bnkdate);
    $('#bdn_hostcontime').val(bnkdate);
    $('#bdn_hostdiscontime').val(bnkdate);
    $('#bdn_startpumptime').val(bnkdate);
    $('#bdn_finishpumptime').val(bnkdate);
    $('#bdn_bargeawaytime').val(bnkdate);
	
}

function fueldetailsadd(fueldet){
    var optionsft='';
    var optionsfg='';
    for(var i=0;i<fueldet.length;i++){
        var fuel=fueldet[i].fuel.split("-");
        var fueltype=fuel[0];
        var fuelgrade=fuel[1];
        optionsft += '<option value="'+fueltype+'" />';
        optionsfg += '<option value="'+fuelgrade+'" />';
        document.getElementById('fuelTypeList').innerHTML = optionsft;
        document.getElementById('fuelGradeList').innerHTML = optionsfg;
        if(i==0){
            $('#bdn_fueltype').val(fueltype);
            $('#bdn_fuelgrade').val(fuelgrade);
        }
    }
    
}


function lowdbvalidationbdn() {

    if(bdnsavevalidation()){
        console.log("low db validation");   
        lowdbAction("save");
    }

}

  function SaveSendbdn() {
    if(bdnsavevalidation() && chkSampleDetails()){
        console.log("low db savesend validation");   
        lowdbAction("savesend");
    }

}

function lowdbAction(type) {

            var samdetarray = [];
            var prodetarray = [];
			var ackdetarray = [];
            var table = document.getElementById("dataTable");
            var table1 = document.getElementById("dataTablePro");
			var table2 = document.getElementById("acknowledgementDetails");
            console.log('here 1');
            for (var i = 0, row; row = table.rows[i]; i++) {

                for (var j = 0, col; col = row.cells[j]; j++) {
                    if (j == 0) {
                        var description = ($(col).find("input").val());
                    }
                    if (j == 1) {
                        var sealno = ($(col).find("input").val());
                    }
                    if (j == 2) {
                        var countersealno = ($(col).find("input").val());
                    }
                    if (j == 3) {
                        var action = ($(col).find("input").val());
                    }

                }
                samdetarray.push({ "description": description, "sealno": sealno, "countersealno": countersealno, "action":action });

            }

            for (var i = 0, row; row = table1.rows[i]; i++) {

                for (var j = 0, col; col = row.cells[j]; j++) {
                    if (j == 0) {
                        var description = ($(col).find("input").val());
                    }
                    if (j == 1) {
                        var unit = ($(col).find("input").val());
                    }
                    if (j == 2) {
                        var test = ($(col).find("input").val());
                    }
                    if (j == 3) {
                        var value = ($(col).find("input").val());
                    }
                    if (j == 4) {
                        var action = ($(col).find("input").val());
                    }

                }
                prodetarray.push({ "description": description, "unit": unit, "test": test,"value":value, "action":action });

            }

			for (var i = 0, row; row = table2.rows[i]; i++) {

                for (var j = 0, col; col = row.cells[j]; j++) {
                    if (j == 0) {
                        var description = ($(col).find("input").val());
                    }
                    if (j == 1) {
                        var name = ($(col).find("input").val());
                    }
                    if (j == 2) {
                        var date = ($(col).find("input").val());
                    }
                    if (j == 3) {
                        var action = ($(col).find("input").val());
                    }

                }
                ackdetarray.push({ "description": description, "name": name, "date": date, "action":action });

            }

             console.log(samdetarray);
             console.log('here 2');
             var btp="";
             console.log('---before '+$('input[name=transport]:checked').val());
             if($('input[name=transport]:checked').val()=='barge'){
                btp='B';
             } else if($('input[name=transport]:checked').val()=='truck'){
                btp='T';
             } else if($('input[name=transport]:checked').val()=='pipe'){
                btp='P';
             }
             console.log('btp '+btp);
             var scheduledet=db.get('vesselinfo').value();
            var bunkerdeliverydetails = { 
                "service" : $('#bdn_service').val(),
                "vesselcode" : $('#bdn_vesselcode').val(),
                "vesselname" : $('#bdn_vessel').val(),
                "voyagecode" : $('#bdn_voyage').val(),
                "bunkerportcode" : $('#bdn_bunkerport').val(),
                "bunkerportname" : $('#bdn_bunkerportname').val(),
                "Dateofsupply" : $('#bdn_bunkerdate').val(),
                "fueltype": $('#bdn_fueltype').val(),  
                "fuelgrade": $('#bdn_fuelgrade').val(), 
                "bdndate": $('#bdn_date').val()+' '+$('#bdn_datetime').val(), 
                "bdnno": $('#bdn_no').val(), 
                "deliveryType" : btp,
                "bunkerqty" : $('#bdn_quantity').val(),
                "phsuppliername": $('#bdn_physupname').val(), 
                "btn": $('#bdn_bargetruckname').val(), 
                "Nominationrefno": $('#bdn_nominationrefno').val(), 
                "licenceno": $('#bdn_licno').val(),
                "AlongSide": $('#bdn_alongside').val()+' '+$('#bdn_alongsidetime').val(),
                "HostCon": $('#bdn_hostcon').val()+' '+$('#bdn_hostcontime').val(),
                "HostDisCon": $('#bdn_hostdiscon').val()+' '+$('#bdn_hostdiscontime').val(),
                "StartPump": $('#bdn_startpump').val()+' '+$('#bdn_startpumptime').val(),
                "FinishPump": $('#bdn_finishpump').val()+' '+$('#bdn_finishpumptime').val(),
                "BargeAway":$('#bdn_bargeaway').val()+' '+$('#bdn_bargeawaytime').val(), 
                "sampdetails": samdetarray,
                "proddetails":prodetarray,
				"AckDetails":ackdetarray};

            console.log('after arrray');
            console.log('affter array 3');

            //db.get('bunkerdelivery').push(bunkerdeliverydetails).write();
            // var size = (db.get("bunkerdelivery").size().value());
            // var value = (db.get('bunkerdelivery').nth(size - 1).value());
            // console.log(value);
            // db1.get('maildata').push(bunkerdeliverydetails).write();
            // db1.get('maildata').nth(0).assign(bunkerdeliverydetails).value();
            // db1.write();
            db1.get('maildata').remove().write();
            db1.defaults({ maildata: [{}] }).write();
            db1.get('maildata').push(bunkerdeliverydetails).write();

            if (type == "savesend") {
                var maximum = 100000;
                var  minimum = 100;
                var randomnumber = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
                document.getElementById("inputSubject").value = $('#bdn_vesselcode').val()+" Bunker Delivery - BDN"+randomnumber+".json";
                document.getElementById("inputAttach").value = $('#bdn_vesselcode').val()+" Bunker Delivery"+randomnumber+".json";
                var maildetail = (db.get('sysconfig').value());

                if(maildetail[0].manuelMail.toString()=="Manual"){

                    var folder="/"+scheduledet[0].vslcode+" Bunker Delivery"+randomnumber+".json";
                    downloadJson(folder);
                    var bodycontent="Bunker Delivery Note attachment : "+scheduledet[0].vslcode+" Bunker Delivery"+randomnumber+".json";

                    if(maildetail[0].vesselemail.length>0){
                        console.log('inside cc');
                        window.location.href = "mailto:" + maildetail[0].to + "?cc="+ maildetail[0].vesselemail +"&subject=" + scheduledet[0].vslcode+" Bunker Delivery"+randomnumber+".json" + 
                        "&body="+bodycontent;
                    } else if(maildetail[0].to.length>0){
                        window.location.href = "mailto:" + maildetail[0].to + "?subject=" + scheduledet[0].vslcode+" Bunker Delivery"+randomnumber+".json" + 
                        "&body="+bodycontent;      
                    }  else{
                        window.location.href = "mailto:ENTER MAIL" + "?subject=" + scheduledet[0].vslcode+" Bunker Delivery"+randomnumber+".json" + 
                        "&body="+bodycontent;   
                    }
                    setTimeout(function() { masterFieldClear('bdnform'); }, 5000);
                } else{

                    $('#modalCompose').modal('show');
                    
                    console.log(maildetail);
                    $("#inputFrom").val(maildetail[0].from);
                    $("#inputTo").val(maildetail[0].to);
                    $("#ccTo").val(maildetail[0].vesselemail);
                    $('#inputBody').val('   ');
                }
             }
             else {
                alert("Successfully Saved");
                resetfuntion();
            }
        }



	function bdnsavevalidation(){
            // if($('#bdn_bunkerreqno').val()=="") {
            //     alert("Kindly Enter the Bunker Reqno");
            //     return false;
            // }
            if($('#bdn_service').val().trim()=="") {
                alert("Kindly Enter the Service");
                document.getElementById('bdn_service').focus();
                return false;
            }
            else if($('#bdn_vessel').val().trim()=="")  {
                alert("Kindly Enter the Vessel Name");
                document.getElementById('bdn_vessel').focus();
                return false;
            }
            else if($('#bdn_vesselcode').val().trim()=="") {
                alert("Kindly Enter the Vessel Code");
                document.getElementById('bdn_vesselcode').focus();
                return false;
            }
            else if($('#bdn_bunkerport').val().trim()=="") {
                alert("Kindly Enter the Bunker Port");
                document.getElementById('bdn_bunkerport').focus();
                return false;
            }
            // else if($('#bdn_bunkerportname').val()==""){
            //     alert("Kindly Enter  the Bunker port Name");
            //     return false;
            // }
            else if($('#bdn_bunkerdate').val()==""){
                alert("Kindly Enter the Date of Supply");
                document.getElementById('bdn_bunkerdate').focus();
                return false;
            }
            else if ($('#bdn_fueltype').val() == "") {
                alert("Kindly Enter the Fuel Type");
                document.getElementById('bdn_fueltype').focus();
                return false;
            }
            else if ($('#bdn_fuelgrade').val() == "") {
                alert("Kindly Enter the Fuel Grade");
                document.getElementById('bdn_fuelgrade').focus();
                return false;
            }
            else if ($('#bdn_no').val() == "") {
                alert("Kindly Enter the BDN No");
                document.getElementById('bdn_no').focus();
                return false;
            }
            else if ($('#bdn_date').val() == "") {
                alert("Kindly Enter the BDN Date");
                document.getElementById('bdn_date').focus();
                return false;
            }
            else if ($('#bdn_date').val() == "") {
                alert("Kindly Enter the BDN Date");
                document.getElementById('bdn_date').focus();
                return false;
            }
            else if ($('#bdn_quantity').val() == "") {
                alert("Kindly Enter the Bunker quantity");
                document.getElementById('bdn_quantity').focus();
                return false;
            }
            else if ($('#bdn_quantity').val() <= 0) {
                alert("Bunker quantity should be greater than zero");
                document.getElementById('bdn_quantity').focus();
                return false;
            } 
            // else if ($('#bdn_deliveryType').val() == "") {
            //     alert("Kindly select the delivery type");
            //     return false;
            // }
            // else if ($('#bdn_physupname').val() == "") {
            //     alert("Kindly Enter the Physical Supplier Name");
            //     return false;
            // } 
            // else if ($('#bdn_alongside').val() == "") {
            //     alert("Kindly Enter the Along Side");
            //     return false;
            // } 
            // else if ($('#bdn_hostcon').val() == "") {
            //     alert("Kindly Enter the Host Connected");
            //     return false;
            // } 
            // else if ($('#bdn_hostdiscon').val() == "") {
            //     alert("Kindly Enter the Host Disconnected");
            //     return false;
            // } 
            // else if ($('#bdn_startpump').val() == "") {
            //     alert("Kindly Enter the Start Pumping");
            //     return false;
            // } 
            // else if ($('#bdn_finishpump').val() == "") {
            //     alert("Kindly Enter the Finish Pumping");
            //     return false;
            // } 
            // else if ($('#bdn_bargeaway').val() == "") {
            //     alert("Kindly Enter the Barge Away");
            //     return false;
            // } 
            else{
                return true;
            }
	}
	
	function chkSampleDetails(){
		var table = document.getElementById("dataTable");
		var rowCount = table.rows.length;
		if(rowCount<=0){
			alert("Enter the Sample Details");
            return false;
		} else{
			var description=0;
			var sealno=0;
			var countersealno=0;
			for (var i = 0, row; row = table.rows[i]; i++) {
				for (var j = 0, col; col = row.cells[j]; j++) {
                    if (j == 0) {
                        if($(col).find("input").val().trim()==""){
							description=description+1;
						}
                    }
                    if (j == 1) {
                        if($(col).find("input").val().trim()==""){
							sealno=sealno+1;
						}
                    }
                    if (j == 2) {
                        if($(col).find("input").val().trim()==""){
							countersealno=countersealno+1;
						}
                    }
                }
			}
			if(description>0){
				alert("Enter the Description in Sample Details");
				return false;
			} else if(sealno>0){
				alert("Enter the Seal No in Sample Details");
				return false;
			} else if(countersealno>0){
				alert("Enter the Counter Seal No in Sample Details");
				return false;
			} else {
				return true;
			}
		}
	}

$("#inputlocAttach").change(function($event){
   var files = event.target.files;   
   filepath=(files[0].path);
   Attfilename =files[0].name;

});

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