 $(document).ready(function() {

    // setVessel();    
     //setFuel();
     //setFuelGrade();
     makeActiveSidebar();
     //setSchedules();
     
     //addOption_list6();
     $('#brob_service').on('input', function() {
         setScheduleList();
     })
           
 });


 function makeActiveSidebar(){
    
    document.getElementById("noonFrom").setAttribute("class", "");
    document.getElementById("eospFrom").setAttribute("class", "");
    document.getElementById("arrivalFrom").setAttribute("class", "");
    document.getElementById("departureFrom").setAttribute("class", "");
    document.getElementById("bospFrom").setAttribute("class", "");
    document.getElementById("bunkerrequestFrom").setAttribute("class", "");
    document.getElementById("bdnFrom").setAttribute("class", "");
    document.getElementById("brobFrom").setAttribute("class", "active");
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
             $("#brob_fueltype1").val(fuel1[i]);
             $("#brob_fueltype2").val(fuel1[i]);
             $("#brob_fueltype3").val(fuel1[i]);
             $("#brob_fueltype4").val(fuel1[i + 1]);
             $("#brob_fueltype5").val(fuel1[i + 1]);
              $("#brob_fueltype6").val(fuel1[i + 1]);
              $("#brob_fueltype7").val(fuel1[i + 1]);
           
         }
         options += '<option value="' + fuel1[i] + '" />';
     }
     document.getElementById('fuellist').innerHTML = options;

 }
 function bdnBROBsavevalidation(){
            if($('#brob_robdate').val()=="") {
                alert("Kindly Enter ROB Date");
                return false;
            }
             else{
                return true;
            }
  }

  function sendActionJson(){
    console.log('BROB');
    if(bdnBROBsavevalidation()){
        console.log("low db savesend validation");   
        lowdbBROBAction();
    }
  }

   function lowdbBROBAction(){
    console.log('BROB1');
            var fuelarry = [];
            var table = document.getElementById("ARRIVAL_Datatable");
            console.log('here 1');
            for (var i = 1, row; row = table.rows[i]; i++) {

                for (var j = 0, col; col = row.cells[j]; j++) {
                    if (j == 0) {
                        var fueltype = ($(col).find("input").val());
                    }
                    //if (j == 1) {
                    //    var meconsp = ($(col).find("input").val());
                    //}
                    //if (j == 2) {
                    //    var aeconsp = ($(col).find("input").val());
                    //}
                    //if (j == 3) {
                    //    var boilerconsp = ($(col).find("input").val());
                    //}
                    // if (j == 4) {
                    //    var totalconsp = ($(col).find("input").val());
                    //}
                    if (j == 1) {
                        var brob = ($(col).find("input").val());
                    }

                }
                fuelarry.push({ "fueltype": fueltype, "brob":brob });
            }

            var scheduledet=db.get('vesselinfo').value();


            var brobdetails = { 

                "brob_service" : scheduledet[0].service,
                "brob_vesselcode" : scheduledet[0].vslcode,
                "brob_vessel" : '',
                "brob_voyageno" :'',
                "brob_bound" : '',
                "brob_callsign" : '',
                "brob_mastername" : '',
                "brob_imonum" : '',
                "brob_robdate" : $('#brob_robdate').val(),
                "brob_robtime" : $('#brob_robtime').val(),
                "brob_remarks" : $('#brob_remarks').val(),
                "fueldetails" : fuelarry

               };
 
               // db1.get('maildata').nth(0).assign(cospdetails).value();
               // db1.write();
                db1.get('maildata').remove().write();
                db1.defaults({ maildata: [{}] }).write();
                db1.get('maildata').push(brobdetails).write();

                var maildetail = (db.get('sysconfig').value());
                console.log('manuelMail '+maildetail[0].manuelMail);

               if(maildetail[0].manuelMail.toString()=="Manual"){
                    console.log('inside manuelMail');
                    var maximum = 100000;
                    var minimum = 100;
                    var randomnumber = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
                    var folder="/"+scheduledet[0].vslcode+" Bunker ROB"+randomnumber+".json";
                    downloadJson(folder);
                    // document.getElementById("inputSubject").value = scheduledet[0].vslcode+" Bunker ROB"+randomnumber+".json";
                    // document.getElementById("inputAttach").value = scheduledet[0].vslcode+" Bunker ROB"+randomnumber+".json";
                    var bodycontent="Bunker ROB-Month End Report attachment : "+scheduledet[0].vslcode+" Bunker ROB"+randomnumber+".json";

                    // if(maildetail[0].vesselemail.length>0){
                    //     console.log('inside cc');                       

                    //     window.location.href = "mailto:" + maildetail[0].to + "?cc="+ maildetail[0].vesselemail +"&subject=" + scheduledet[0].vslcode+" Bunker ROB"+randomnumber+".json" + 
                    //     "&body="+bodycontent;
                    // } else if(maildetail[0].to.length>0){
                    //     window.location.href = "mailto:" + maildetail[0].to + "?subject=" + scheduledet[0].vslcode+" Bunker ROB"+randomnumber+".json" + 
                    //     "&body="+bodycontent;      
                    // } else{
                    //     window.location.href = "mailto:ENTER MAIL" + "?subject=" + scheduledet[0].vslcode+" Bunker ROB"+randomnumber+".json" + 
                    //     "&body="+bodycontent;   
                    // }
                    //$.get('executeInit.jsp');
                    $.post("executeInit.jsp", { name: "John", time: "2pm" },
                       function(data){
                         alert("Data Loaded: " + data);
                    });
                    console.log('new cc');

                    // var storageObj={"name":"abishek"};
                    // var dataStr = "data:text/json;charset=utf-8," + 
                    // encodeURIComponent(JSON.stringify(storageObj));
                    // var dlAnchorElem = document.getElementById('downloadAnchorElem');
                    // dlAnchorElem.setAttribute("href",     dataStr     );
                    // dlAnchorElem.setAttribute("download", "scene.json");
                    // dlAnchorElem.click();

                    // const {app, BrowserWindow, ipcMain} = require('electron');
                    // const {download} = require('electron-dl');

                    // ipcMain.on('download-btn', (e, args) => {
                    //     download(BrowserWindow.getFocusedWindow(), args.url)
                    //         .then(dl => console.log(dl.getSavePath()))
                    //         .catch(console.error);
                    // });


                    setTimeout(function() { masterFieldClear('brobform'); }, 5000);

               } else {
                    $('#modalCompose').modal('show');                
                    console.log(maildetail);

                    var maximum = 100000;
                    var minimum = 100;
                    var randomnumber = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
                    document.getElementById("inputSubject").value = scheduledet[0].vslcode+" Bunker ROB"+randomnumber+".json";
                    document.getElementById("inputAttach").value = scheduledet[0].vslcode+" Bunker ROB"+randomnumber+".json";

                    $("#inputFrom").val(maildetail[0].from);
                    $("#inputTo").val(maildetail[0].to);
                    $("#ccTo").val(maildetail[0].vesselemail);
                    $('#inputBody').val($('#brob_remarks').val());
                }
  }

 function setFuelGrade() {
     var fuelgrade1 = fuelgrade;
     var options = '';
     for (var i = 0; i < fuelgrade1.length; i++) {
         if (i == 0) {
             $("#brob_fuelgrade1").val(fuelgrade1[i]);
             $("#brob_fuelgrade2").val(fuelgrade1[i + 1]);
             $("#brob_fuelgrade3").val(fuelgrade1[i + 5]);
             $("#brob_fuelgrade4").val(fuelgrade1[i + 2]);
             $("#brob_fuelgrade5").val(fuelgrade1[i + 3]);
             $("#brob_fuelgrade6").val(fuelgrade1[i + 4]);
             $("#brob_fuelgrade7").val(fuelgrade1[i + 6]);
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


 function setVesselCode(evt) {
     var res = evt.value.split("~~");
     if (res.length > 1) {
         $("#brob_vessel").val(res[0].trim());
         $("#brob_vesselcode").val(res[1].trim());
     }
 }



 function setScheduleList() {
     var txt = $("#brob_service").val();
     var res = txt.split("~~");
     if (res.length == 7) {
         $("#brob_service").val(res[0].trim());
         $("#brob_bound").val(res[1].trim());
         $("#brob_voyageno").val(res[2].trim());
         $("#brob_vesselcode").val(res[3].trim());
         $("#brob_vessel").val(res[4].trim());
         $("#brob_imonum").val(res[6].trim());
     }
 }

 function addOption_list6() {


for (var i=0; i < fuelcomb.length; i++) {
     if (i == 0) {
addOption(document.getElementById("brob_fueltype1"), fuelcomb[i], fuelcomb[i]);
addOption(document.getElementById("brob_fueltype2"), fuelcomb[i + 1], fuelcomb[i + 1]);
addOption(document.getElementById("brob_fueltype3"), fuelcomb[i + 2], fuelcomb[i + 2]);
addOption(document.getElementById("brob_fueltype4"), fuelcomb[i + 3], fuelcomb[i + 3]);
addOption(document.getElementById("brob_fueltype5"), fuelcomb[i + 4], fuelcomb[i + 4]);
addOption(document.getElementById("brob_fueltype6"), fuelcomb[i + 5], fuelcomb[i + 5]);
addOption(document.getElementById("brob_fueltype7"), fuelcomb[i + 6], fuelcomb[i + 6]);

}

}

}

 function calculateTotal1(index) {
   
     var c = index.name;
     var one = Number($("#brob_1gradeval"+ c ).val());
     var two = Number($("#brob_2gradeval"+ c).val());
     var three = Number($("#brob_3gradeval"+ c).val());
     var total = one + two + three;
     $("#brob_4gradeval"+ c).val(parseFloat(total).toFixed(2));
 }

function getFuelBROBdataTable() {

    console.log("Inside Fuel details method")

     var fuelvalues = db.get('fueldetail').value();

  for(var i=0;i<fuelvalues.length;i++) {

   var table = document.getElementById("ARRIVAL_Datatable");
    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);
    row.id = rowCount;

    var cell1 = row.insertCell(0);
    //var cell2 = row.insertCell(1);
    //var cell3 = row.insertCell(2);
    //var cell4 = row.insertCell(3);
    //var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(1);

    

        console.log("------fuel value s "+fuelvalues[i].infofuelrequirement)
    var element = document.createElement("input");
    element.setAttribute("type", "text");
    element.setAttribute("value",fuelvalues[i].infofuelrequirement);
    element.setAttribute("style", "text-align:left");
    element.setAttribute("class", "form-control");
    element.setAttribute("id", "brob_fueltype1" + i+rowCount);
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
    element.setAttribute("id", "brob_5gradeval" + rowCount);
    element.setAttribute("name",rowCount);
    element.setAttribute("maxlength", "15");
    cell6.appendChild(element);

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

