var availableTags=[];
var customers=[];

 $(document).ready(function() {
     makeActiveSidebar();
     setProductName();
     setcustomers();
     // $( "#productname" ).autocomplete({
     //   source: availableTags
     // });

     var options = {
        source: availableTags,
        minLength: 1
    };
    var selector = 'input.searchInput';
    $(document).on('keydown.autocomplete', selector, function() {
        $(this).autocomplete(options);
    });





 });

 function setcustomers(){
   var customervalues = db.get('customer').value();

   for(var i=0;i<customervalues.length;i++) {
     customers.push(customervalues[i].customerid);
     customers.push(customervalues[i].customername);
     console.log('inside customer');
   }
 }


 function autocomplete(inp, arr) {
  /*the autocomplete function takes two arguments,
  the text field element and an array of possible autocompleted values:*/
  var currentFocus;
  /*execute a function when someone writes in the text field:*/
  inp.addEventListener("input", function(e) {
      var a, b, i, val = this.value;
      /*close any already open lists of autocompleted values*/
      closeAllLists();
      if (!val) { return false;}
      currentFocus = -1;
      /*create a DIV element that will contain the items (values):*/
      a = document.createElement("DIV");
      a.setAttribute("id", this.id + "autocomplete-list");
      a.setAttribute("class", "autocomplete-items");
      /*append the DIV element as a child of the autocomplete container:*/
      this.parentNode.appendChild(a);
      /*for each item in the array...*/
      for (i = 0; i < arr.length; i++) {
        /*check if the item starts with the same letters as the text field value:*/
        if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
          /*create a DIV element for each matching element:*/
          b = document.createElement("DIV");
          /*make the matching letters bold:*/
          b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
          b.innerHTML += arr[i].substr(val.length);
          /*insert a input field that will hold the current array item's value:*/
          b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
          /*execute a function when someone clicks on the item value (DIV element):*/
          b.addEventListener("click", function(e) {
              /*insert the value for the autocomplete text field:*/
              inp.value = this.getElementsByTagName("input")[0].value;
              /*close the list of autocompleted values,
              (or any other open lists of autocompleted values:*/
              closeAllLists();
          });
          a.appendChild(b);
        }
      }
  });
  /*execute a function presses a key on the keyboard:*/
  inp.addEventListener("keydown", function(e) {
      var x = document.getElementById(this.id + "autocomplete-list");
      if (x) x = x.getElementsByTagName("div");
      if (e.keyCode == 40) {
        /*If the arrow DOWN key is pressed,
        increase the currentFocus variable:*/
        currentFocus++;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 38) { //up
        /*If the arrow UP key is pressed,
        decrease the currentFocus variable:*/
        currentFocus--;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 13) {
        /*If the ENTER key is pressed, prevent the form from being submitted,*/
        e.preventDefault();
        if (currentFocus > -1) {
          /*and simulate a click on the "active" item:*/
          if (x) x[currentFocus].click();
        }
      }
  });
  function addActive(x) {
    /*a function to classify an item as "active":*/
    if (!x) return false;
    /*start by removing the "active" class on all items:*/
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    /*add class "autocomplete-active":*/
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    /*close all autocomplete lists in the document,
    except the one passed as an argument:*/
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  /*execute a function when someone clicks in the document:*/
  document.addEventListener("click", function (e) {
      closeAllLists(e.target);
      });
}




 function makeActiveSidebar(){

   document.getElementById("customerFrom").setAttribute("class", "");
   document.getElementById("productFrom").setAttribute("class", "");
   document.getElementById("billingFrom").setAttribute("class", "active");
   document.getElementById("dailyreportFrom").setAttribute("class", "");
   document.getElementById("weeklyreportFrom").setAttribute("class", "");
   document.getElementById("monthlyreportFrom").setAttribute("class", "");

}

function setProductName(){
  var productvalues = db1.get('product').value();
  var values;
  for(var i=0;i<productvalues.length;i++) {
    availableTags.push(productvalues[i].productname);
    availableTags.push(productvalues[i].productid);
  }
}



function onbillAdd(event){
   var table1 = document.getElementById("dataTableBill");
   var rowCount1 = table1.rows.length;
   var row = table1.insertRow(rowCount1);
   row.id = rowCount1;

   var cell1 = row.insertCell(0);
   var cell2 = row.insertCell(1);
   var cell3 = row.insertCell(2);
   var cell4 = row.insertCell(3);
   var cell5 = row.insertCell(4);
   var cell6 = row.insertCell(5);
   var cell7 = row.insertCell(6);

   var snno=rowCount1;
   snno++;


   var element = document.createElement("input");
   element.setAttribute("style","text-align: left; height: 30px !important; width: 49px;");
   element.setAttribute("value",snno);
   element.setAttribute("class", "form-control");
   element.setAttribute("id", "prodsn0" + rowCount1);
   element.setAttribute("readonly","true");
   cell1.appendChild(element);


   var element = document.createElement("input");
   element.setAttribute("class", "form-control searchInput");
   element.setAttribute("style", "height: 30px !important; width:400px;");
   element.setAttribute("onfocusout","focusproductName(this);");
   element.setAttribute("id", "productname0"+rowCount1);
   cell2.appendChild(element);


   var element = document.createElement("input");
   element.setAttribute("class", "form-control  rightalign");
   element.setAttribute("style", "text-align:right");
   element.setAttribute("onfocusout","calculatePerAMT(this)");
   element.setAttribute("id", "productqty0" + rowCount1);
   cell3.appendChild(element);

   var element = document.createElement("input");
   element.setAttribute("class", "form-control  rightalign");
   element.setAttribute("style", "text-align: right; height: 30px !important;");
   element.setAttribute("id", "productrate0" + rowCount1);
   element.setAttribute("onfocusout","onFocust(this);");
   cell4.appendChild(element);

   var element = document.createElement("input");
   element.setAttribute("class", "form-control rightalign");
   element.setAttribute("style", "text-align: right; height: 30px !important;");
   element.setAttribute("id", "prodval0" + rowCount1);
   element.setAttribute("readonly","true");
   cell5.appendChild(element);

   var element = document.createElement("button");
   element.setAttribute("class", "btn btn-primary glyphicon glyphicon-plus");
   element.setAttribute("onclick","onbillAdd(event)");
   element.setAttribute("type","button");
   element.setAttribute("style", "height: 30px !important;");
   element.setAttribute("id", "bdn_productaction" + rowCount1);
   cell6.appendChild(element);

   var element = document.createElement("button");
   element.setAttribute("class", "btn btn-danger glyphicon glyphicon-remove");
   element.setAttribute("onclick","onbillRemove(event)");
   element.setAttribute("type","button");
   element.setAttribute("style", "height: 30px !important;");
   element.setAttribute("id", "bdn_productremaction" + rowCount1);
   cell7.appendChild(element);


}

function onFocust(event){
  var tr=$(event).closest('tr').attr('id');
  console.log('tr'+tr);
  if(tr==0){
    if( $('#productname0').val().length>0){
        onbillAdd();
    }
  }
  else {
    if ( $('#productname0'+tr).val().length>0 ) {
        onbillAdd();
    }
  }

  var rate=document.getElementById(event.id).value;
  if(tr==0){
      var qty=document.getElementById('productqty0').value;
      document.getElementById('prodval0').value=qty*rate;
  } else {
      var qty=document.getElementById('productqty0'+tr).value;
      document.getElementById('prodval0'+tr).value=qty*rate;
  }
   calculatTotalSum();
}

function calculatePerAMT(event){
  var tr=$(event).closest('tr').attr('id');

  var qty=document.getElementById(event.id).value;
  if(tr==0){
      var rate=document.getElementById('productrate0').value;
      document.getElementById('prodval0').value=qty*rate;
  } else {
      var rate=document.getElementById('productrate0'+tr).value;
      document.getElementById('prodval0'+tr).value=qty*rate;
  }
 calculatTotalSum();
}

function onbillRemove(event){
  var table1 = document.getElementById("dataTableBill");
  var rowCount1 = table1.rows.length;
  console.log(rowCount1);
    if(rowCount1>=2) {
      console.log('--inside on'+event);
      var index=($(event.target).parents('tr').index());
      document.getElementById("dataTableBill").deleteRow(index);

    } else{
      alert('Cannot Remove all the row');
    }
    // var table = document.getElementById("dataTableBill").rows;
    //
    // var rows = document.getElementById("dataTableBill").rows.length;
    // document.getElementById('prodsn0').value=1;
    // console.log('tableeeee'+rows);
    // for(i = 1; i < rows; i++)
    // {
    //   console.log(table.rows[i].id);
    //   document.getElementById('prodsn0'+i).value=i;
    // }
 calculatTotalSum();

}

function focusproductName(event){
  var id=event.id;
  var tr=$(event).closest('tr').attr('id');
  console.log('id'+id);
  var productvalues = (db1.get('product').value());
  for(var i=0;i<productvalues.length;i++) {
    if(productvalues[i].productname==$('#'+id).val()){
      console.log(tr);
      if(tr==0){
          document.getElementById('productrate0').value=productvalues[i].rate;
      } else{
          document.getElementById('productrate0'+tr).value=productvalues[i].rate;
      }
      break;
    }

    if(productvalues[i].productid==$('#'+id).val()){
      console.log(tr);
      if(tr==0){
          document.getElementById('productrate0').value=productvalues[i].rate;
          document.getElementById('productname0').value=productvalues[i].productname;
      } else{
          document.getElementById('productrate0'+tr).value=productvalues[i].rate;
          document.getElementById('productname0'+tr).value=productvalues[i].productname;
      }
      break;
    }
  }
 calculatTotalSum();
}

function calculatTotalSum() {
  var table = document.getElementById("dataTableBill").rows;
  var rows = document.getElementById("dataTableBill").rows.length;
  var y;
  var sum=0.0;
  var qty=0;
  for(i = 0; i <  rows; i++)
  {
           if(i==0){
             if($('#prodval0').val()>=0){
                sum=(+sum+ +$('#prodval0').val());
             }

           } else{
             if($('#prodval0'+i).val()>=0){
              sum=(+sum+ +$('#prodval0'+i).val());
             }

           }
  }
  console.log('sum'+sum);
  if(sum <=0){
    console.log('zero');
    document.getElementById('prodTotal').innerHTML=0.00;
  } else{
    console.log('not zero');
    document.getElementById('prodTotal').innerHTML=sum;
  }


}

function focusCusName(event){
//   var customervalues = (db.get('customer').value());
//   for(var i=0;i<customervalues.length;i++) {
//     if(customervalues[i].customerid==$('#myInput').val()){
//           document.getElementById('myInput').value=customervalues[i].customername;
//       break;
//     }
// }
}

function onhideCustomerdetail(){
  $('#modalCustomer').modal('hide');
}

function onViewCustomer(){

    var customervalues = (db.get('customer').value());
    for(var i=0;i<customervalues.length;i++) {
      if(customervalues[i].customerid==document.getElementById('myInput').value){
            document.getElementById('c_cusid').innerHTML=customervalues[i].customerid;
            document.getElementById('c_cusname').innerHTML=customervalues[i].customername;
            document.getElementById('c_cusarea').innerHTML=customervalues[i].cusarea;
            document.getElementById('c_cusmobile').innerHTML=customervalues[i].cusmobile;
            document.getElementById('c_custin').innerHTML=customervalues[i].custin;
            document.getElementById('c_cusaddress').innerHTML=customervalues[i].cusaddress;
            document.getElementById('c_cusstate').innerHTML=customervalues[i].cusstate;
            document.getElementById('c_cusPincode').innerHTML=customervalues[i].cuspincode;
            document.getElementById('c_cusemail').innerHTML=customervalues[i].cusemail;
            document.getElementById('c_cusremarks').innerHTML=customervalues[i].cusremarks;

        break;
      }
  }
    $('#modalCustomer').modal('show');
}

function setPrinttablevalues(){
  var table = document.getElementById("dataTableBill");
  var rowCount = table.rows.length;
  var obj=1;
  var qty=0;
  console.log('count '+rowCount)
  for(var i=0;rowCount>i;i++){

    var table1 = document.getElementById("p_tablebody");
     var rowCount1 = table1.rows.length;
     var row = table1.insertRow(rowCount1);
     row.id = rowCount;

     var cell1 = row.insertCell(0);
     var cell2 = row.insertCell(1);
     var cell3 = row.insertCell(2);
     var cell4 = row.insertCell(3);
     var cell5 = row.insertCell(4);
     if(i==0) {
       console.log('1 value'+$('#prodsn0').val()) ;
       cell1.innerHTML=obj;
       cell2.innerHTML=$('#productname0').val();
       cell3.innerHTML=$('#productqty0').val();
       cell4.innerHTML=$('#productrate0').val();
       cell5.innerHTML=$('#prodval0').val();
       qty=+qty+ +$('#productqty0').val();
     } else{
     console.log('1 value'+$('#prodsn0'+i).val()) ;
     cell1.innerHTML=obj;
     cell2.innerHTML=$('#productname0'+i).val();
     cell3.innerHTML=$('#productqty0'+i).val();
     cell4.innerHTML=$('#productrate0'+i).val();
     cell5.innerHTML=$('#prodval0'+i).val();
     qty=+qty+ +$('#productqty0'+i).val();
     }
     document.getElementById("p_totalitems").innerHTML=obj;
     console.log('print qty'+qty);
   obj++;
  }
document.getElementById("p_totalqty").innerHTML=qty;
}


function printFunc(divName)
{
  document.getElementById('p_customername').innerHTML=document.getElementById('myInput').value;
  document.getElementById('p_tin').innerHTML=document.getElementById('c_custin').value;
  document.getElementById('p_cst').innerHTML=document.getElementById('myInput').value;
  document.getElementById('p_ph').innerHTML=document.getElementById('c_cusmobile').value;
  setPrinttablevalues();
  document.getElementById("p_totalvalue").innerHTML=document.getElementById('prodTotal').value;
  var printContents = document.getElementById(divName).innerHTML;
  var originalContents = document.body.innerHTML;

  document.body.innerHTML = printContents;

  window.print();

  document.body.innerHTML = originalContents;
}
