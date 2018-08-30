$(document).ready(function() {
  console.log('insie inn');
    makeActiveSidebar();
   getCustomerTable();
   // setpagination();

   myReadyFilter();
});

function myReadyFilter(){

  $('#customerTable').DataTable( {
      "pagingType": "full_numbers"
  } );
}

function myFilter() {
  var input, filter, table, tr, td, i;
  input = document.getElementById("Fill_cusid");
  filter = input.value.toUpperCase();
  table = document.getElementById("customerTable");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

 function makeActiveSidebar(){
   document.getElementById("customerFrom").setAttribute("class", "active");
   document.getElementById("productFrom").setAttribute("class", "");
   document.getElementById("billingFrom").setAttribute("class", "");
   document.getElementById("dailyreportFrom").setAttribute("class", "");
   document.getElementById("weeklyreportFrom").setAttribute("class", "");
   document.getElementById("monthlyreportFrom").setAttribute("class", "");
}




function getCustomerTable(){

    var customervalues = (db.get('customer').value());
  for(var i=0;i<customervalues.length;i++) {

   var table = document.getElementById("customerTableBody");
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
    var cell8 = row.insertCell(7)




        console.log("------fuel value s "+ customervalues[i].customerid)
        console.log("------fuel value s "+ customervalues[i].custin)

    cell1.innerHTML= customervalues[i].customerid;
    cell1.id="CUS_ID" + i;

    cell2.innerHTML=customervalues[i].customername;
    cell2.id="CUS_NAME" + i;


    cell3.innerHTML=customervalues[i].cusarea;
    cell3.id="CUS_AREA" + i;



    cell4.innerHTML=customervalues[i].cusmobile;
    cell4.id="CUS_MOBILE" + i;

    cell5.innerHTML=customervalues[i].custin;
    cell5.id="CUS_TIN" + i;

    var element = document.createElement("button");
    element.setAttribute("class", "glyphicon glyphicon-info-sign  prod_moreinfo");
    element.setAttribute("style", "text-align:right");
    element.setAttribute("id", i);
    element.setAttribute("type", "button");
    element.setAttribute("onclick", "btnMoreInfoaction(this);");
    cell6.appendChild(element);

    var element = document.createElement("button");
    element.setAttribute("class", "fa fa-edit  prod_edit");
    element.setAttribute("style", "text-align:right");
    element.setAttribute("id", i);
    element.setAttribute("type", "button");
    element.setAttribute("onclick", "btnEditaction(this);");
    cell7.appendChild(element);

    var element = document.createElement("button");
    element.setAttribute("class", "fa fa-trash prod_trash");
    element.setAttribute("style", "text-align:right");
    element.setAttribute("id", i);
    element.setAttribute("type", "button");
    element.setAttribute("onclick", "btnDeleteAction(this);");
    cell8.appendChild(element);


    }

}




function addRowcustomer() {
    var table = document.getElementById("customer_form");
    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);
    row.id = rowCount;
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);

    var element = document.createElement("input");
    element.setAttribute("type", "text");
    element.setAttribute("style", "text-align:left");
    element.setAttribute("class", "form-control");
    element.setAttribute("id", "customerid" + rowCount);
    cell1.appendChild(element);

    var element = document.createElement("input");
    element.setAttribute("type", "text");
    element.setAttribute("style", "text-align:right");
    element.setAttribute("class", "form-control");
    element.setAttribute("id", "customername" + rowCount);
    cell2.appendChild(element);

    var element = document.createElement("input");
    element.setAttribute("type", "text");
    element.setAttribute("style", "text-align:left");
    element.setAttribute("class", "form-control");
    element.setAttribute("id", "cusarea" + rowCount);
    cell3.appendChild(element);

    var element = document.createElement("input");
    element.setAttribute("type", "text");
    element.setAttribute("style", "text-align:right");
    element.setAttribute("class", "form-control");
    element.setAttribute("id", "cusmobile" + rowCount);
    cell4.appendChild(element);

    var element = document.createElement("input");
    element.setAttribute("type", "text");
    element.setAttribute("style", "text-align:right");
    element.setAttribute("class", "form-control");
    element.setAttribute("id", "custin" + rowCount);
    cell5.appendChild(element);

    var element = document.createElement("button");
    element.setAttribute("style", "text-align:right;height: 30px !important;");
    //element.innerHTML="[X]";
    element.setAttribute("class", "btn btn-danger fa fa fa-remove");
    element.setAttribute("id", "cusaction" + rowCount);
    element.setAttribute("onclick","onCusremove(event)");
    cell6.appendChild(element);

}

function onCusremove(event){
    console.log('--inside on'+ event);
    var index=($(event.target).parents('tr').index());
    document.getElementById("dataTableCus").deleteRow(index);
    return false;
}

function saveNewCustomer(){
  if(savenewCusValidation()){
    addintoCustomer();
  }
}


function savenewCusValidation(){
  var table = document.getElementById("customer_form").elements.length;
  //var rowCount = table;

    console.log("Cus code "+ cus_code);
    console.log("Cus tin" + cus_tin);
    if($.trim($('#cus_code').val())==''){
      alert('Customer Id should not be Empty');
      return false;
    } else if($.trim($('#cus_name').val())=='') {
      alert('Customer name should not be Empty');
      return false;
    } else if($.trim($('#cus_area').val())=='') {
      alert('Customer Area should not be Empty');
      return false;
    } else if($.trim($('#cus_mobile').val())=='') {
      alert('Customer Mobile should not be Empty');
      return false;
    } else if($.trim($('#cus_tin').val())=='') {
        alert('Customer TIN No should not be Empty');
        return false;
  }
  return true;

}

//Adding data to Datatable
function addintoCustomer() {
  var customervalues = (db.get('customer').value());
  var count=customervalues.length+1;
  var t = $('#customerTable').DataTable();


    // var val1="<span id=CUS_ID>"+$('#cus_code').val()+"</span>";
    // var val2="<span id=CUS_NAME>"+$('#cus_name').val()+"</span>";
    // var val3="<span id=CUS_AREA>"+$('#cus_area').val()+"</span>";
    // var val4="<span id=CUS_MOBILE>"+$('#cus_mobile').val()+"</span>";
    // var val5="<span id=CUS_TIN>"+$('#cus_tin').val()+"</span>";

    var val1=$('#cus_code').val();
    var val2=$('#cus_name').val();
    var val3=$('#cus_area').val();
    var val4=$('#cus_mobile').val();
    var val5=$('#cus_tin').val();
    /**var val6="<span id=CUS_ADDR"+count+">"+$('#cus_address').val()+"</span>";
    var val7="<span id=CUS_STATE"+count+">"+$('#cus_state').val()+"</span>";
    var val8="<span id=CUS_PIN"+count+">"+$('#cus_pincode').val()+"</span>";
      var val9="<span id=CUS_EMAIL"+count+">"+$('#cus_email').val()+"</span>";
        var val10="<span id=CUS_REM"+count+">"+$('#cus_remarks').val()+"</span>";**/

    var val6="<button id='CUS_INFO' type='button' class='fa fa-edit prod_moreinfo' onclick=btnMoreInfoaction(this);></button>";
    var val7="<button id='CUS_EDIT' type='button' class='fa fa-edit prod_edit' onclick=btnEditaction(this);></button>";
    var val8="<button id='CUS_DEL' type='button' class='fa fa-trash prod_trash' onclick=btnDeleteAction(this);></button>";
    console.log(val1);
     t.row.add( [
           val1,
           val2,
           val3,
           val4,
           val5,
           val6,
           val7,
           val8
       ] ).draw( false );


     var obj = { "customerid": $('#cus_code').val(), "customername": $('#cus_name').val(),"cusarea":$('#cus_area').val(),
   "cusmobile":$('#cus_mobile').val(), "custin":$('#cus_tin').val(),"cusaddress":$('#cus_address').val(),
 "cusstate":$('#cus_state').val(),"cuspincode":$('#cus_pincode').val(),"cusemail":$('#cus_email').val(),
"cusremarks":$('#cus_remarks').val() };
     db.get('customer').push(obj).write();



  $('#customer_form').find("tr:gt(0)").remove();
  $('#cus_code').val('');
  $('#cus_name').val('');
  $('#cus_area').val('');
  $('#cus_mobile').val('');
  $('#cus_tin').val('');
  $('#modalCompose').modal('hide');
}
//Adding data to Datatable Ends



function cusAddAction() {
  //document.getElementById('product').reset();

  $('#modalCompose').modal('show');
}


// Save Edit customer Action
function saveEditCustomer(){
  var customervalues = (db.get('customer').value());
  var index;
  for(var i=0;i<customervalues.length;i++) {
    if(customervalues[i].customerid==$('#customeride0').val()){
      index=i;
      break;
    }
  }
  var obj={"customerid":$('#customeride0').val(),
  "customername":$('#customernamee0').val(),
  "cusarea":$('#cusareae0').val(),
  "cusmobile":$('#cusmobilee0').val(),
  "custin":$('#custine0').val() };
  db.get('customer').nth(index).assign(obj).value();
  db.write();



  var table = document.getElementById("customerTableBody").rows;
  var rows = document.getElementById("customerTableBody").rows.length;
  var y;
  for(i = 0; i <  rows; i++)
  {    for(j = 0; j < 5; j++)
       {
           y = table[i].cells;
           //do something with cells in a row
           if(y[0].innerHTML==$('#customeride0').val()){
             y[1].innerHTML = $('#customernamee0').val();
             y[2].innerHTML = $('#cusareae0').val();
             y[3].innerHTML = $('#cusmobilee0').val();
             y[4].innerHTML = $('#custine0').val();
             break;
           }
           //console.log(y[0].innerHTML);
          // y[j].innerHTML = "";
       }
  }
  $('#modalEditCompose').modal('hide');
}

//Save Edit Customer action ends

//view MOre info DETAILS

function saveMoreInfoCustomer(){
  var customervalues = (db.get('customer').value());
  var index;
  for(var i=0;i<customervalues.length;i++) {
    if(customervalues[i].customerid==$('#cus_icode').val()){
      index=i;
      break;
    }
  }
  var table = document.getElementById("customerTableBody").rows;
  var rows = document.getElementById("customerTableBody").rows.length;
  var y;
  for(i = 0; i <  rows; i++)
  {    for(j = 0; j < 5; j++)
       {
           y = table[i].cells;
           //do something with cells in a row
           if(y[0].innerHTML==$('#cus_icode').val()){
             y[1].innerHTML = $('#cus_iname').val();
             y[2].innerHTML = $('#cus_iarea').val();
             y[3].innerHTML = $('#cus_imobile').val();
             y[4].innerHTML = $('#cus_itin').val();
             break;
           }
           //console.log(y[0].innerHTML);
          // y[j].innerHTML = "";
       }
  }
  var obj={"customerid": $('#cus_icode').val(), "customername": $('#cus_iname').val(),"cusarea":$('#cus_iarea').val(),
"cusmobile":$('#cus_imobile').val(), "custin":$('#cus_itin').val(),"cusaddress":$('#cus_iaddress').val(),
"cusstate":$('#cus_istate').val(),"cuspincode":$('#cus_ipincode').val(),"cusemail":$('#cus_iemail').val(),
"cusremarks":$('#cus_iremarks').val()
 };
  db.get('customer').nth(index).assign(obj).value();
  db.write();




  console.log("val1" +  index);
             var val1=$('#cus_code').val();
             var val2=$('#cus_name').val();
             var val3=$('#cus_area').val();
             var val4=$('#cus_mobile').val();
             var val5=$('#cus_tin').val();
             var val6=$('#cus_address').val();
             var val7=$('#cus_state').val();
             var val8=$('#cus_pincode').val();
             var val9=$('#cus_email').val();
             var val10=$('#cus_remarks').val();
        console.log("val1" +  val1);
           //console.log(y[0].innerHTML);
          // y[j].innerHTML = "";


  $('#modalInfoCompose').modal('hide');
}
//End More info details


//More info event Starts
function btnMoreInfoaction(event){

  var t = document.getElementById('customerTableBody');
  var rows = t.rows;
  for (var i=0; i<rows.length; i++) {
          rows[i].onclick = function () {
              if (this.parentNode.nodeName == 'FORM') {
                  return;
              }
              var cells = this.cells; //cells collection
              console.log("btn" + cells[0].innerHTML);
              console.log(cells[1].innerHTML);


                $('#cus_icode').val(cells[0].innerHTML);
                $('#cus_iname').val(cells[1].innerHTML);
                $('#cus_iarea').val(cells[2].innerHTML);
                $('#cus_imobile').val(cells[3].innerHTML);
                $('#cus_itin').val(cells[4].innerHTML);


                var customervalues = (db.get('customer').value());

                for(var i=0;i<customervalues.length;i++) {
                  console.log('cus values'+$('#cus_icode').val());
                  if(customervalues[i].customerid==$('#cus_icode').val())
                  {
                    console.log('inside');
                      $('#cus_iaddress').val(customervalues[i].cusaddress);
                      $('#cus_istate').val(customervalues[i].cusstate);
                      $('#cus_ipincode').val(customervalues[i].cuspincode);
                      $('#cus_iemail').val(customervalues[i].cusemail);
                      $('#cus_iremarks').val(customervalues[i].cusremarks);

                  }
                }
            };
          }




   $('#modalInfoCompose').modal('show');


  }

//More info event Ends
//Edit Event Starts
function btnEditaction(event){

  var t = document.getElementById('customerTableBody');
  var rows = t.rows;
  for (var i=0; i<rows.length; i++) {
          rows[i].onclick = function () {
              if (this.parentNode.nodeName == 'THEAD') {
                  return;
              }
              var cells = this.cells; //cells collection
              console.log(cells[0].innerHTML);
              console.log(cells[1].innerHTML);


                $('#customeride0').val(cells[0].innerHTML);
                $('#customernamee0').val(cells[1].innerHTML);
                $('#cusareae0').val(cells[2].innerHTML);
                $('#cusmobilee0').val(cells[3].innerHTML);
                $('#custine0').val(cells[4].innerHTML);
            };
          }
   $('#modalEditCompose').modal('show');
  console.log('inside edit'+$('#CUS_ID'+event.id).val());

}
//Edit event ends

//Delete event starts
function btnDeleteAction(event){
  var t = document.getElementById('customerTableBody');
  var rows = t.rows;
  for (var i=0; i<rows.length; i++) {
          rows[i].onclick = function () {
              if (this.parentNode.nodeName == 'THEAD') {
                  return;
              }
              var cells = this.cells; //cells collection
              console.log(cells[0].innerHTML);
              document.getElementById("span_delete").innerHTML=cells[0].innerHTML;

            };
          }
   $('#modalDeleteCompose').modal('show');
}
//delete event ENDS

//Delete Customer action
function DeleteCustomer(){
  var table = document.getElementById("customerTableBody").rows;
  var rows = document.getElementById("customerTableBody").rows.length;
  var y;
  var index;
  var obj;
  for(i = 0; i <  rows; i++)
  {    for(j = 0; j < 5; j++)
       {
           y = table[i].cells;
           //do something with cells in a row
           if(y[0].innerHTML==document.getElementById("span_delete").innerHTML){
             obj={
             "customerid" :y[0].innerHTML,
             "customername" :y[1].innerHTML,
             "cusarea" :y[2].innerHTML,
             "cusmobile" :y[3].innerHTML,
             "custin" :y[4].innerHTML };
             index=i;

             break;
           }
       }
  }
document.getElementById("customerTableBody").deleteRow(index);
<!-- //console log -->
/**console.log("removing " + index);
console.log("removing y[0]" + y[0].innerHTML);
console.log("removing y[1]" + y[1].innerHTML);
console.log("removing y[2]" + y[2].innerHTML);
console.log("removing y[3]" + y[3].innerHTML);
console.log("removing y[4]" + y[4].innerHTML);**/

db.get('customer').remove(obj).write();

$('#modalDeleteCompose').modal('hide');
}
//delete Customer action ends
