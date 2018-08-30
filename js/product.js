

 $(document).ready(function() {
   console.log('insie inn');
     makeActiveSidebar();
    getProductTable();
    // setpagination();

    myReadyFilter();
 });

  function makeActiveSidebar(){
    document.getElementById("customerFrom").setAttribute("class", "");
    document.getElementById("productFrom").setAttribute("class", "active");
    document.getElementById("billingFrom").setAttribute("class", "");
    document.getElementById("dailyreportFrom").setAttribute("class", "");
    document.getElementById("weeklyreportFrom").setAttribute("class", "");
    document.getElementById("monthlyreportFrom").setAttribute("class", "");
}

function getProductTable(){

    var productvalues = (db1.get('product').value());
  for(var i=0;i<productvalues.length;i++) {

   var table = document.getElementById("proDTableBody");
    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);
    row.id = rowCount;

    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);




        console.log("------fuel value s "+productvalues[i].productid)
    // var element = document.createElement("input");
    // element.setAttribute("type", "text");
    // element.setAttribute("value",productvalues[i].productid);
    // element.setAttribute("style", "text-align:left");
    // element.setAttribute("class", "form-control");
    // element.setAttribute("id", "PRO_ID" + i);
    // element.setAttribute("readonly","true");
    // cell1.appendChild(element);
    cell1.innerHTML=productvalues[i].productid;
    cell1.id="PRO_ID" + i;



    // var element = document.createElement("input");
    // element.setAttribute("class", "form-control");
    // element.setAttribute("ondrop","return false;");
    // element.setAttribute("onpaste","return false;");
    // element.setAttribute("value",productvalues[i].productname);
    // element.setAttribute("style", "text-align:right");
    // element.setAttribute("id", "PROD_NAME" + i);
    // element.setAttribute("readonly","true");
    // cell2.appendChild(element);
    cell2.innerHTML=productvalues[i].productname;
    cell2.id="PROD_NAME" + i;

    // var element = document.createElement("input");
    // element.setAttribute("class", "form-control");
    // element.setAttribute("onkeypress","return isNumber(event)");
    // element.setAttribute("onchange","return validateDecimal(this)");
    // element.setAttribute("onblur","return calculateTotal1(this)");
    // element.setAttribute("ondrop","return false;");
    // element.setAttribute("onpaste","return false;");
    // element.setAttribute("value",productvalues[i].mrp);
    // element.setAttribute("style", "text-align:right");
    // element.setAttribute("id", "PROD_MRP" + i);
    // element.setAttribute("readonly","true");
    // cell3.appendChild(element);
    cell3.innerHTML=productvalues[i].mrp;
    cell3.id="PROD_MRP" + i;

    // var element = document.createElement("input");
    // element.setAttribute("class", "form-control");
    // element.setAttribute("onkeypress","return isNumber(event)");
    // element.setAttribute("onchange","return validateDecimal(this)");
    // element.setAttribute("onblur","return calculateTotal1(this)");
    // element.setAttribute("ondrop","return false;");
    // element.setAttribute("onpaste","return false;");
    // element.setAttribute("value",productvalues[i].rate);
    // element.setAttribute("style", "text-align:right");
    // element.setAttribute("id", "PROD_RATE" + i);
    // element.setAttribute("readonly","true");
    // cell4.appendChild(element);

    cell4.innerHTML=productvalues[i].rate;
    cell4.id="PROD_RATE" + i;

    var element = document.createElement("button");
    element.setAttribute("class", "fa fa-edit  prod_edit");
    element.setAttribute("style", "text-align:right");
    element.setAttribute("id", i);
    element.setAttribute("type", "button");
    element.setAttribute("onclick", "btnEditaction(this);");
    cell5.appendChild(element);

    var element = document.createElement("button");
    element.setAttribute("class", "fa fa-trash prod_trash");
    element.setAttribute("style", "text-align:right");
    element.setAttribute("id", i);
    element.setAttribute("type", "button");
    element.setAttribute("onclick", "btnDeleteAction(this);");
    cell6.appendChild(element);


    }

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
    element.setAttribute("id", "productid" + rowCount);
    cell1.appendChild(element);

    var element = document.createElement("input");
    element.setAttribute("type", "text");
    element.setAttribute("style", "text-align:right");
    element.setAttribute("class", "form-control");
    element.setAttribute("id", "productval" + rowCount);
    cell2.appendChild(element);

    var element = document.createElement("input");
    element.setAttribute("type", "text");
    element.setAttribute("style", "text-align:left");
    element.setAttribute("class", "form-control");
    element.setAttribute("id", "prodmrp" + rowCount);
    cell3.appendChild(element);

    var element = document.createElement("input");
    element.setAttribute("type", "text");
    element.setAttribute("style", "text-align:right");
    element.setAttribute("class", "form-control");
    element.setAttribute("id", "prodrate" + rowCount);
    cell4.appendChild(element);

    var element = document.createElement("button");
    element.setAttribute("style", "text-align:right;height: 30px !important;");
    //element.innerHTML="[X]";
    element.setAttribute("class", "btn btn-danger fa fa fa-remove");
    element.setAttribute("id", "prodaction" + rowCount);
    element.setAttribute("onclick","onProdremove(event)");
    cell5.appendChild(element);

}

function onProdremove(event){
    console.log('--inside on'+event);
    var index=($(event.target).parents('tr').index());
    document.getElementById("dataTablePro").deleteRow(index);
    return false;
}

function saveNewProduct(){
  if(savenewprodValidation()){
    addintoProduct();
  }
}

function savenewprodValidation(){
  var table = document.getElementById("dataTablePro");
  var rowCount = table.rows.length;
  for(var i=0;rowCount>i;i++){
    if($.trim($('#productid'+i).val())==''){
      alert('Product Id should not be Empty');
      return false;
    } else if($.trim($('#productval'+i).val())=='') {
      alert('Product value should not be Empty');
      return false;
    } else if($.trim($('#prodmrp'+i).val())=='') {
      alert('Product M.R.P should not be Empty');
      return false;
    } else if($.trim($('#prodrate'+i).val())=='') {
      alert('Product Rate should not be Empty');
      return false;
    }
  }
  return true;
}

function addintoProduct() {
  var productvalues = (db1.get('product').value());
  var count=productvalues.length+1;
  var t = $('#proDTable').DataTable();

  var table = document.getElementById("dataTablePro");
  var rowCount = table.rows.length;
  for(var i=0;rowCount>i;i++){
    count++;

    var val1="<span id=PRO_ID"+count+">"+$('#productid'+i).val()+"</span>";
    var val2="<span id=PROD_NAME"+count+">"+$('#productval'+i).val()+"</span>";
    var val3="<span id=PROD_MRP"+count+">"+$('#prodmrp'+i).val()+"</span>";
    var val4="<span id=PROD_RATE"+count+">"+$('#prodrate'+i).val()+"</span>";

    var val5="<button id="+count+" type='button' class='fa fa-edit prod_edit' onclick=btnEditaction(this);></button>";
    var val6="<span id="+count+" type='button' class='fa fa-trash prod_trash' onclick=btnDeleteAction(this);></button>";
    console.log(val1);
     t.row.add( [
           val1,
           val2,
           val3,
           val4,
           val5,
           val6
       ] ).draw( false );


     var obj = { "productid": $('#productid'+i).val(), "productname": $('#productval'+i).val(),"mrp":$('#prodmrp'+i).val(),
   "rate":$('#prodrate'+i).val() };
     db1.get('product').push(obj).write();
  }
//  $("#proDTableBody").empty();
//  getProductTable();

  $('#dataTablePro').find("tr:gt(0)").remove();
  $('#productid0').val('');
  $('#productval0').val('');
  $('#prodmrp0').val('');
  $('#prodrate0').val('');
  $('#modalCompose').modal('hide');
}

/* DataTable Filter Functionality Added here */

function myFilter() {
  var input, filter, table, tr, td, i;
  input = document.getElementById("Fill_prodid");
  filter = input.value.toUpperCase();
  table = document.getElementById("proDTable");
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

/// Another Filter and pagination Functionality

function myReadyFilter(){

  $('#proDTable').DataTable( {
      "pagingType": "full_numbers"
  } );
}

function prodAddAction() {
  //document.getElementById('product').reset();

  $('#modalCompose').modal('show');
}
function saveEditProduct(){
  var productvalues = (db1.get('product').value());
  var index;
  for(var i=0;i<productvalues.length;i++) {
    if(productvalues[i].productid==$('#productide0').val()){
      index=i;
      break;
    }
  }
  var obj={"productid":$('#productide0').val(),"productname":$('#productvale0').val(),"mrp":$('#prodmrpe0').val(),"rate":$('#prodratee0').val() };
  db1.get('product').nth(index).assign(obj).value();
  db1.write();

  var table = document.getElementById("proDTableBody").rows;
  var rows = document.getElementById("proDTableBody").rows.length;
  var y;
  for(i = 0; i <  rows; i++)
  {    for(j = 0; j < 4; j++)
       {
           y = table[i].cells;
           //do something with cells in a row
           if(y[0].innerHTML==$('#productide0').val()){
             y[1].innerHTML = $('#productvale0').val();
             y[2].innerHTML = $('#prodmrpe0').val();
             y[3].innerHTML = $('#prodratee0').val();
             break;
           }
           //console.log(y[0].innerHTML);
          // y[j].innerHTML = "";
       }
  }
  $('#modalEditCompose').modal('hide');
}
function btnEditaction(event){

  // console.log(document.getElementById('PRO_ID3').value);
  //   $('productid0').val($('#PRO_ID'+event.id).val());
  //   $('productval0').val($('#PROD_NAME'+event.id).val());
  //   $('prodmrp0').val($('#PROD_MRP'+event.id).val());
  //   $('prodrate0').val($('#PROD_RATE'+event.id).val());
  var t = document.getElementById('proDTableBody');
  var rows = t.rows;
  for (var i=0; i<rows.length; i++) {
          rows[i].onclick = function () {
              if (this.parentNode.nodeName == 'THEAD') {
                  return;
              }
              var cells = this.cells; //cells collection
              console.log(cells[0].innerHTML);

                 $('#productide0').val(cells[0].innerHTML);
                $('#productvale0').val(cells[1].innerHTML);
                $('#prodmrpe0').val(cells[2].innerHTML);
                $('#prodratee0').val(cells[3].innerHTML);
            };
          }
   $('#modalEditCompose').modal('show');
  console.log('inside edit'+$('#PRO_ID'+event.id).val());

//$('#productval'+i).val()

}
function btnDeleteAction(event){
  var t = document.getElementById('proDTableBody');
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

function DelteProduct(){
  var table = document.getElementById("proDTableBody").rows;
  var rows = document.getElementById("proDTableBody").rows.length;
  var y;
  var index;
  var obj;
  for(i = 0; i <  rows; i++)
  {    for(j = 0; j < 4; j++)
       {
           y = table[i].cells;
           //do something with cells in a row
           if(y[0].innerHTML==document.getElementById("span_delete").innerHTML){
             obj={
             "productid":y[0].innerHTML,
             "productname":y[1].innerHTML,
             "mrp":y[2].innerHTML,
             "rate":y[3].innerHTML };
             index=i;

             break;
           }
       }
  }
document.getElementById("proDTableBody").deleteRow(index);
console.log(obj);
db1.get('product').remove(obj).write();

$('#modalDeleteCompose').modal('hide');
}
