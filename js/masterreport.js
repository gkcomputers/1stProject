 var reportname = '';
 var sendtext = '';
var bodytext = '';
 var textarray = '';
 var arr_alltext = ["arr_vessel*", "arr_vesselcode*", "arr_voyageno*", "arr_service*", "arr_bound*", "arr_callsign", "arr_mastername", "arr_imonum", "arr_unloccode*", "arr_arrivalport*", "arr_lastport", "arr_country*",
     "arr_offsetfromutc1", "arr_offsetfromutc2", "arr_eosp1*", "arr_eosp2*", "arr_allfastfwe1", "arr_allfastfwe2", "arr_pilotonboard1", "arr_pilotonboard2", "arr_startcargoops1", "arr_startcargoops2",
     "arr_firstlineashore1", "arr_firstlineashore2", "arr_etd1", "arr_etd2", "arr_draftfwd", "arr_ballast", "arr_sludge", "arr_draftaft",
     "arr_gm", "arr_tugsonarrival", "arr_displacement", "arr_fueltype1*", "arr_fueltype2", "arr_fueltype3", "arr_fueltype4",
     "arr_fueltype5", "arr_1gradeval1",
     "arr_2gradeval1", "arr_3gradeval1", "arr_4gradeval1", "arr_5gradeval1", "arr_1gradeval2", "arr_2gradeval2", "arr_3gradeval2", "arr_4gradeval2", "arr_5gradeval2", "arr_1gradeval3", "arr_2gradeval3", "arr_3gradeval3", "arr_4gradeval3", "arr_5gradeval3",
     "arr_1gradeval4", "arr_2gradeval4", "arr_3gradeval4", "arr_4gradeval4", "arr_5gradeval4", "arr_1gradeval5", "arr_2gradeval5", "arr_3gradeval5", "arr_4gradeval5", "arr_5gradeval5", "arr_remarks*","arr_lastportcountry","arr_lastportunlocode",
     "arr_bm","arr_sf","arr_tm","arr_fueltype6","arr_fueltype7","arr_6gradeval1","arr_7gradeval1",
     "arr_6gradeval2" ,"arr_7gradeval2","arr_6gradeval3" ,"arr_7gradeval3","arr_6gradeval4" ,"arr_7gradeval4" ,"arr_6gradeval5","arr_7gradeval5",

 ];

 var dpt_alltext = ["dpt_service*", "dpt_vessel*", "dpt_vesselcode*", "dpt_voyageno*", "dpt_bound*", "dpt_callsign", "dpt_mastername", "dpt_imonum", "dpt_unloccode*", "dpt_departureport*","dpt_country", "dpt_offsetfromutc1", "dpt_offsetfromutc2", "dpt_cmpltcargops1", "dpt_cmpltcargops2", "dpt_allcastoff1", "dpt_allcastoff2", "dpt_pilotonboard1",
     "dpt_pilotonboard2", "dpt_departuredate1*", "dpt_departuredate2*", "dpt_draftfwd", "dpt_ballast", "dpt_sludge", "dpt_draftaft", "dpt_gm", "dpt_tugsonarrival",
     "dpt_displaccement", "dpt_cargoonboard", "dpt_activereefers", "dpt_unitsdischarged", "dpt_teusonboard", "dpt_imdg", "dpt_unitsloaded", "dpt_cargoweighttotal", "dpt_oog", "dpt_unitsrestoved", "dpt_draftfwd2", "dpt_ballast2", "dpt_sludge2", "dpt_draftaft2", "dpt_gm2", "dpt_fw2", "dpt_displacement2",
      "dpt_fueltype1*", "dpt_fueltype2", "dpt_fueltype3", "dpt_fueltype4", "dpt_fueltype5", "dpt_1bunkerd5", "dpt_2bunkerd5", "dpt_3bunkerd5", "dpt_4bunkerd5", "dpt_5bunkerd5", "dpt_1debunkerd5", "dpt_2debunkerd5", "dpt_3debunkerd5", "dpt_4debunkerd5", "dpt_5debunkerd5", "dpt_1gradeval1", "dpt_2gradeval1", "dpt_3gradeval1",
     "dpt_4gradeval1", "dpt_5gradeval1", "dpt_1gradeval2", "dpt_2gradeval2", "dpt_3gradeval2", "dpt_4gradeval2", "dpt_5gradeval2", "dpt_1gradeval3", "dpt_2gradeval3", "dpt_3gradeval3", "dpt_4gradeval3", "dpt_5gradeval3", "dpt_1gradeval4", "dpt_2gradeval4",
     "dpt_3gradeval4", "dpt_4gradeval4", "dpt_5gradeval4", "dpt_1gradeval5", "dpt_2gradeval5",
     "dpt_3gradeval5", "dpt_4gradeval5", "dpt_5gradeval5", "dpt_nextport2", "dpt_country2", "dpt_unloccode2", "dpt_offsetfromutc3", "dpt_offsetfromutc4", "dpt_etalt1", "dpt_etalt2", "dpt_etautc1",     "dpt_etautc2","dpt_remarks*","dpt_sf","dpt_tm","dpt_bm","dpt_bm2","dpt_sf2","dpt_tm2","dpt_fueltype6","dpt_fueltype7","dpt_6bunkerd5","dpt_7bunkerd5","dpt_6debunkerd5","dpt_7debunkerd5","dpt_6gradeval1","dpt_7gradeval1","dpt_6gradeval2",
     "dpt_7gradeval2","dpt_6gradeval3","dpt_7gradeval3","dpt_6gradeval4","dpt_7gradeval4","dpt_6gradeval5","dpt_7gradeval5"
 ];

 var nrp_alltext = ["nrp_service*", "nrp_vslcode*","nrp_vessel*","nrp_voynumber*","nrp_bound*","nrp_callsign", "nrp_mastername","nrp_imnonumber",  "nrp_lastport*","nrp_unlocode*","nrp_country","nrp_noonposisiton","nrp_noonposisitontwo","nrp_truecourse",
  "nrp_noondate*", "nrp_noondatetime*","nrp_utcone","nrp_utctwo","nrp_distance", "nrp_distanceone","nrp_dsitancetogo", "nrp_winddir",
  "nrp_windforce", "nrp_timeelapsone", "nrp_timeelapstwo", "nrp_swellsone", "nrp_swelltwo", "nrp_avgspeedone","nrp_avgspeedtwo", "nrp_currentone", "nrp_currenttwo", "nrp_avgrpmone","nrp_avgrpmtwo",
  "nrp_seas", "nrp_avgslipone", "nrp_avgsliptwo","nrp_airone","nrp_airtwo","nrp_lgdistone","nrp_lgdisttwo","nrp_mepower", "nrp_genpower", "nrp_pressure","nrp_nxtport", "nrp_unlocodeone","nrp_etanxtport", "nrp_etanxtportone","nrp_nextcountry", 
  "nrp_fueltype1*","nrp_1gradeval1","nrp_1gradeval2","nrp_1gradeval3","nrp_1gradeval4","nrp_brbone","nrp_1gradeval5",   
  "nrp_fueltype2","nrp_2gradeval1","nrp_2gradeval2","nrp_2gradeval3","nrp_2gradeval4","nrp_brbtwo","nrp_2gradeval5",
  "nrp_fueltype3","nrp_3gradeval1","nrp_3gradeval2","nrp_3gradeval3","nrp_3gradeval4","nrp_brbthree", "nrp_3gradeval5",
  "nrp_fueltype4","nrp_4gradeval1","nrp_4gradeval2","nrp_4gradeval3","nrp_4gradeval4","nrp_brbfour","nrp_4gradeval5", 
  "nrp_fueltype5","nrp_5gradeval1","nrp_5gradeval2","nrp_5gradeval3","nrp_5gradeval4","nrp_brbfive", "nrp_5gradeval5",
  "nrp_fueltype6","nrp_6gradeval1", "nrp_6gradeval2", "nrp_6gradeval3","nrp_6gradeval4","nrp_brbsix","nrp_6gradeval5",
  "nrp_fueltype7","nrp_7gradeval1","nrp_7gradeval2","nrp_7gradeval3","nrp_7gradeval4", "nrp_brbseven", "nrp_7gradeval5",    
  "nrp_remarks*"
 ];


 var brn_alltext = ["brn_vessel*","brn_vesselcode*", "brn_service*", "brn_voyage", "brn_bound*", "brn_bunkerport*","brn_bunkerportname", "brn_bunkerdate*",
     "brn_remarks*", 
     /*"brn_tank1_tankname", "brn_tank1_capacity", "brn_tank1_arrivalrob","brn_tank1_deprob", 
     "brn_tank2_tankname", "brn_tank2_capacity", "brn_tank2_arrivalrob", "brn_tank2_deprob", 
     "brn_tank3_tankname", "brn_tank3_capacity", "brn_tank3_arrivalrob", "brn_tank3_deprob", 
     "brn_tank4_tankname", "brn_tank4_capacity", "brn_tank4_arrivalrob", "brn_tank4_deprob", 
     "brn_tank5_tankname", "brn_tank5_capacity", "brn_tank5_arrivalrob", "brn_tank5_deprob", 
     "brn_tank6_tankname", "brn_tank6_capacity", "brn_tank6_arrivalrob", "brn_tank6_deprob", 
     "brn_tank7_tankname", "brn_tank7_capacity", "brn_tank7_arrivalrob", "brn_tank7_deprob", 
     "brn_tank8_tankname", "brn_tank8_capacity", "brn_tank8_arrivalrob", "brn_tank8_deprob", 
     "brn_tank9_tankname", "brn_tank9_capacity", "brn_tank9_arrivalrob", "brn_tank9_deprob", 
     "brn_tank10_tankname","brn_tank10_capacity", "brn_tank10_arrivalrob", "brn_tank10_deprob",
     "brn_tank11_tankname", "brn_tank11_capacity", "brn_tank11_arrivalrob","brn_tank11_deprob", 
     "brn_tank12_tankname", "brn_tank12_capacity", "brn_tank12_arrivalrob", "brn_tank12_deprob", 
     "brn_tank13_tankname", "brn_tank13_capacity", "brn_tank13_arrivalrob", "brn_tank13_deprob", 
     "brn_tank14_tankname", "brn_tank14_capacity", "brn_tank14_arrivalrob", "brn_tank14_deprob", 
     "brn_tank15_tankname", "brn_tank15_capacity", "brn_tank15_arrivalrob", "brn_tank15_deprob", 
     "brn_tank16_tankname", "brn_tank16_capacity", "brn_tank16_arrivalrob", "brn_tank16_deprob", 
     "brn_tank17_tankname", "brn_tank17_capacity", "brn_tank17_arrivalrob", "brn_tank17_deprob", 
     "brn_tank18_tankname", "brn_tank18_capacity", "brn_tank18_arrivalrob", "brn_tank18_deprob", 
     "brn_tank19_tankname", "brn_tank19_capacity", "brn_tank19_arrivalrob", "brn_tank19_deprob", 
     "brn_tank20_tankname","brn_tank20_capacity", "brn_tank20_arrivalrob", "brn_tank20_deprob",                     
     "speed1_noofdays", "speed1_cons", "speed2", "speed2_noofdays", "speed2_cons", 
     "speed3", "speed3_noofdays", "speed3_cons", "speed4", "speed4_noofdays", "speed4_cons", 
     "speed5", "speed5_noofdays", "speed5_cons",*/
	 "brn_fuelreq*","brn_bunkerstem*","brn_maxintake"
	 
 ];

 var eop_alltext = ["eop_vessel*", "eop_imonum", "eop_callsign", "eop_service*", "eop_voyage*", "eop_bound*", "eop_mastersname", "eop_arrivalport*", "eop_country", "eop_unlcode*", "eop_offsetfrom",
     "eop_eosp*","eop_eosptime*", "eop_eopsposition", "eop_distance", "eop_distance1", "eop_winddir", "eop_windforce", "eop_timeelapsed1", "eop_timeelapsed2", "eop_swelldir1",
     "eop_swellsir2", "eop_averagespeed1", "eop_averagespeed2", "eop_seas1", "eop_averagerpm1", "eop_averagerpm2", "eop_seatemp", "eop_averageslip1", "eop_averageslip2", "eop_airtemp",
     "eop_diatancetogo", "eop_pressure", "eop_mepower", "eop_shaftgenpower", "eop_remarks*", "eop_vesselcode*","eop_fueltype1*","eop_fueltype2","eop_fueltype3","eop_fueltype4",
     "eop_fueltype5",
     "eop_1gradeval1","eop_1gradeval2","eop_1gradeval3","eop_1gradeval4","eop_1gradeval5","eop_2gradeval1","eop_2gradeval2","eop_2gradeval3",
     "eop_2gradeval4","eop_2gradeval5","eop_3gradeval1","eop_3gradeval2","eop_3gradeval3","eop_3gradeval4","eop_3gradeval5",     "eop_1tot1","eop_1tot2","eop_1tot3","eop_1tot4","eop_1tot5","eop_brob1", "eop_brob2", "eop_brob3",
     "eop_brob4", "eop_brob5","eop_eopsposition1","eop_utc1","eop_fueltype6","eop_fueltype7","eop_1gradeval6","eop_1gradeval7","eop_2gradeval6",
    "eop_2gradeval7","eop_3gradeval6","eop_3gradeval7","eop_1tot6","eop_1tot7","eop_brob6","eop_brob7"
 ];

 var cop_alltext = [
     "cop_service*","cop_vslcode*","cop_vslname*","cop_voynum*","cop_bound*", "cop_imonum", "cop_callsign",  "cop_mastername",         "cop_depport*","cop_country", "cop_unlocode*", "cop_offset", "cop_offsetutc",
     "cop_pilotway", "cop_pilotway1", "cop_cosp", "cop_cosp1", 
     "cop_nxtport", "cop_country1", "cop_nnolocode1", "cop_offset1", "cop_offsetutc1",
     "cop_posistion", "cop_posistion1", "cop_disttogo", "cop_setrpm", "cop_excons",  "cop_etanextport", "cop_etanextport1",
     "cop_fueltype1*","cop_1gradeval1","cop_2gradeval1","cop_3gradeval1","cop_tot1","cop_brob1",                    
     "cop_fueltype2","cop_1gradeval2","cop_2gradeval2","cop_3gradeval2","cop_tot2","cop_brob2",
     "cop_fueltype3","cop_1gradeval3","cop_2gradeval3","cop_3gradeval3","cop_tot3","cop_brob3", 
     "cop_fueltype4","cop_1gradeval4","cop_2gradeval4","cop_3gradeval4","cop_tot4","cop_brob4", 
     "cop_fueltype5","cop_1gradeval5","cop_2gradeval5","cop_3gradeval5","cop_tot5","cop_brob5",
     "cop_fueltype6","cop_1gradeval6","cop_2gradeval6","cop_3gradeval6","cop_tot6","cop_brob6",
     "cop_fueltype7","cop_1gradeval7","cop_2gradeval7","cop_3gradeval7","cop_tot7","cop_brob7",
     "cop_remarks*"       
 ];

 
  var bdn_alltext = ["bdn_bdnno*", "bdn_nomnum*", "bdn_port*", "bdn_voyage*", "bdn_dlocation*", "bdn_vessel*", "bdn_bunkertankername", "bdn_imono", "bdn_bargelicno", "bdn_grosston", "bdn_alongsidevsl*",
     "bdn_ownoperator", "bdn_commencedate*", "bdn_etd", "bdn_completepump*", "bdn_nxtport", "bdn_proname*", "bdn_grosslit", "bdn_viscocity", "bdn_grossstandardlitre", "bdn_density",
     "bdn_quantity*", "bdn_watercontent", "bdn_barrels", "bdn_flashpoint", "bdn_volfactor", "bdn_observtanktemp", "bdn_wcf", "bdn_sulphurcont", "bdn_for", "bdn_vesselack1", "bdn_countersealnoack1",
     "bdn_vesselack2", "bdn_countersealnoack2", "bdn_vesselack3", "bdn_countersealnoack3", "bdn_vesselack4", "bdn_countersealnoack4", "bdn_vesselack5", "bdn_countersealnoack5",
     "bdn_vesselack6", "bdn_bdnremarks", "bdn_bdnprotest", "bdn_supname","bdn_alongsidevsltime","bdn_commencedatetime","bdn_completepumptime","bdn_etdtime"
 ];

 var brob_alltext = [
    "brob_vessel*", "brob_vesselcode*", "brob_voyageno*", "brob_service*", "brob_bound*", "brob_callsign", "brob_mastername","brob_imonum",
     "brob_fueltype1*", "brob_fueltype2", "brob_fueltype3", "brob_fueltype4","brob_fueltype5","brob_fueltype6","brob_fueltype7", 
     
     "brob_1gradeval5", "brob_2gradeval5", "brob_3gradeval5", "brob_4gradeval5", "brob_5gradeval5","brob_6gradeval5", "brob_7gradeval5",
     "brob_remarks*","brob_robdate*","brob_robtime"];

    // function makeText(module) {
   //  sendtext='';
   //  for (i = 0; i < textarray.length; i++) {
   //      var textid = textarray[i];
    //     textid = textid.replace("*", "");
    //     var finalval = $('#' + textid).val();
    //     var t = textid + '~ ' + finalval + '\n';
    //     sendtext = sendtext + t;
    // }
 //}
 
 
 function makeText(module) {
     sendtext='';
	 var k = 0;
     for (i = 0; i < textarray.length; i++) {
         var textid = textarray[i];
         textid = textid.replace("*", "");
         var finalval = $('#' + textid).val();
         var t = textid + '~ ' + finalval + '\n';
		 if(textid.startsWith('brn_fuelreq')){           
             var curval = finalval.split('-'); 
			 if(k==0){
				 var t = 'brn_fueltype' + '~ ' + curval[0] + '\n';             
				 sendtext = sendtext + t;  
				 t = 'brn_fuelgrade' + '~ ' + curval[1] + '\n';            
				 sendtext = sendtext + t;  
				 t = 'brn_maxsulphur' + '~ ' + curval[2] + '\n';            
				 sendtext = sendtext + t; 
			 } else {
				 var t = 'brn_fueltype' + k + '~ ' + curval[0] + '\n';             
				 sendtext = sendtext + t;  
				 t = 'brn_fuelgrade' + k + '~ ' + curval[1] + '\n';            
				 sendtext = sendtext + t;  
				 t = 'brn_maxsulphur' + k + '~ ' + curval[2] + '\n';            
				 sendtext = sendtext + t; 
			 }
			 k++;
         }
		 /*else if(textid=='brn_fuelreq1'){           
             var curval = finalval.split('-'); 
             var t = 'brn_fueltype1' + '~ ' + curval[0] + '\n';             
             sendtext = sendtext + t;  
             t = 'brn_fuelgrade1' + '~ ' + curval[1] + '\n';            
             sendtext = sendtext + t;  
             t = 'brn_maxsulphur1' + '~ ' + curval[2] + '\n';            
             sendtext = sendtext + t; 
		
         }else if(textid=='brn_fuelreq2'){           
             var curval = finalval.split('-'); 
             var t = 'brn_fueltype2' + '~ ' + curval[0] + '\n';             
             sendtext = sendtext + t;  
             t = 'brn_fuelgrade2' + '~ ' + curval[1] + '\n';            
             sendtext = sendtext + t;  
             t = 'brn_maxsulphur2' + '~ ' + curval[2] + '\n';            
             sendtext = sendtext + t; 
		
         }else if(textid=='brn_fuelreq3'){           
             var curval = finalval.split('-'); 
             var t = 'brn_fueltype3' + '~ ' + curval[0] + '\n';             
             sendtext = sendtext + t;  
             t = 'brn_fuelgrade3' + '~ ' + curval[1] + '\n';            
             sendtext = sendtext + t;  
             t = 'brn_maxsulphur3' + '~ ' + curval[2] + '\n';            
             sendtext = sendtext + t; 
		
         }else if(textid=='brn_fuelreq4'){           
             var curval = finalval.split('-'); 
             var t = 'brn_fueltype4' + '~ ' + curval[0] + '\n';             
             sendtext = sendtext + t;  
             t = 'brn_fuelgrade4' + '~ ' + curval[1] + '\n';            
             sendtext = sendtext + t;  
             t = 'brn_maxsulphur4' + '~ ' + curval[2] + '\n';            
             sendtext = sendtext + t; 
		
         }else if(textid=='brn_fuelreq5'){           
             var curval = finalval.split('-'); 
             var t = 'brn_fueltype5' + '~ ' + curval[0] + '\n';             
             sendtext = sendtext + t;  
             t = 'brn_fuelgrade5' + '~ ' + curval[1] + '\n';            
             sendtext = sendtext + t;  
             t = 'brn_maxsulphur5' + '~ ' + curval[2] + '\n';            
             sendtext = sendtext + t; 
		
         }else if(textid=='brn_fuelreq6'){           
             var curval = finalval.split('-'); 
             var t = 'brn_fueltype6' + '~ ' + curval[0] + '\n';             
             sendtext = sendtext + t;  
             t = 'brn_fuelgrade6' + '~ ' + curval[1] + '\n';            
             sendtext = sendtext + t;  
             t = 'brn_maxsulphur6' + '~ ' + curval[2] + '\n';            
             sendtext = sendtext + t; 
		
         }else if(textid=='brn_fuelreq7'){           
             var curval = finalval.split('-'); 
             var t = 'brn_fueltype7' + '~ ' + curval[0] + '\n';             
             sendtext = sendtext + t;  
             t = 'brn_fuelgrade7' + '~ ' + curval[1] + '\n';            
             sendtext = sendtext + t;  
             t = 'brn_maxsulphur7' + '~ ' + curval[2] + '\n';            
             sendtext = sendtext + t; 
		
         }*/
		 else{ 
           sendtext = sendtext + t;  
         }         
     }
 }



 function makeBodyText(module) {
       bodytext='';
	   var k = 0;
     for (i = 0; i < textarray.length; i++) {
         var textid = textarray[i];
         textid = textid.replace("*", "");
         var finalval = $('#' + textid).val();
         var finalvalnew=finalval.replace("%"," percent");
         var t = textid + '~ ' + finalvalnew + '\n';
         if(textid.startsWith('brn_fuelreq')){           
             var curval = finalval.split('-'); 
             var t = 'brn_fueltype' + k + '~ ' + curval[0] + '\n';             
             bodytext = sendtext + t;  
			 t = 'brn_fuelgrade' + '~ ' + curval[1] + '\n';            
             bodytext = sendtext + t;  
             t = 'brn_maxsulphur' + '~ ' + curval[2] + '\n';            
             bodytext = sendtext + t; 
			 k++;
         }else{ 
           bodytext = bodytext + t;  
         }         
     }
     
     

 }
  

 function sendAction(module) {
     if (module == 'arr') {
         reportname = 'Arrival Report';
         textarray = arr_alltext;
     } else if (module == 'nrp') {
         reportname = 'Noon Report';
         textarray = nrp_alltext;
     } else if (module == 'dpt') {
         reportname = 'Departure Report';
         textarray = dpt_alltext;
     } else if (module == 'eop') {
         reportname = 'EOSP Report';
         textarray = eop_alltext;
     } else if (module == 'cop') {
         reportname = 'BOSP Report';
         textarray = cop_alltext;
     } else if (module == 'brn') {
         reportname = 'BunkerRequest';
		 var tablecount = document.getElementById("dataTable").rows.length;
		 for (i = 1; i < tablecount; i++) {
			brn_alltext.push("brn_fuelreq"+i);
			brn_alltext.push("brn_bunkerstem"+i);
			brn_alltext.push("brn_maxintake"+i);
		 }
         textarray = brn_alltext;
     } else if (module == 'bdn') {
         reportname = 'Bunker Delivery Note';
         textarray = bdn_alltext;
     } else if (module == 'brob') {
         reportname = 'Bunker ROB';
         textarray = brob_alltext;
     }

     if (validateFields(module)) {
         
         makeText();
         var finalText = sendtext;
         var maximum = 100000;
         var minimum = 100;
         var randomnumber = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
         if (navigator.onLine) {
             var dateval = Date();
             var idval = randomnumber;
             dp(finalText, randomnumber);
             alert("Kindly attach the downloaded file with mail");
             
//             makeBodyText();
//             var finalbodyText = bodytext.toUpperCase();
             
             var emailBody="Vessel " + reportname + " Report sent on " + dateval + " with attachment ID Number: " + idval;
             
//             window.location.href = "mailto:" + mailto + "?subject=" + reportname + "&body=Vessel " + reportname + " Report sent on " + dateval +
//                 " with attachment ID Number: " + idval+"%0D%0A"+finalbodyText ; //+"%0D%0A"+finalbodyText
             
               window.location.href = "mailto:" + mailto + "?subject=" + reportname + "&body="+emailBody+" ";
             
             
//             var emailCC='';
//             location.href = "mailto:"+mailto+'?cc='+emailCC+'?subject='+reportname+'&body='+emailBody;
             
         } else {
             var result1 = confirm("Internet connection not available, Do you want save the data?");
             if (result1) {
                 dp(finalText, randomnumber);
             } else {
                 alert("Data is not saved");
             }
         }
     }
 }

function callresetb(module){
	var vessel = db.get('vesselinfo').value();
						
    if (module == 'arr') {
         reportname = 'Arrival';
         textarray = arr_alltext;
     } else if (module == 'nrp') {
         reportname = 'Noon';
         textarray = nrp_alltext;
     } else if (module == 'dpt') {
         reportname = 'Departure';
         textarray = dpt_alltext;
     } else if (module == 'eop') {
         reportname = 'EOSP';
         textarray = eop_alltext;
     } else if (module == 'cop') {
         reportname = 'BOSP';
         textarray = cop_alltext;
     } else if (module == 'brn') {
		reportname = 'Bunker Request';
		textarray = brn_alltext;
		$('#brn_service').val(vessel[0].service);
		$('#brn_vessel').val(vessel[0].vslname);
		$('#brn_vesselcode').val(vessel[0].vslcode);
     } else if (module == 'bdn') {
         reportname = 'BDN Request';
         textarray = bdn_alltext;
     }
     else if (module == 'brob') {
         reportname = 'BUNKER ROB-MONTH END REPORT';
         textarray = brob_alltext;
     }
    
     for (i = 0; i < textarray.length; i++) {
         var textid = textarray[i];
         textid = textid.replace("*", "");
         $('#' + textid).removeClass('mandatorycolor');
     }
	 
	if (module == 'brn') {
		document.getElementById(module).reset();
		$('#brn_service').val(vessel[0].service);
		$('#brn_vessel').val(vessel[0].vslname);
		$('#brn_vesselcode').val(vessel[0].vslcode);
    } 
}

 function validateFields(module) {

//     if (!String.prototype.endsWith) {
//   String.prototype.endsWith = function(searchString, position) {
//       var subjectString = this.toString();
//       if (typeof position !== 'number' || !isFinite(position) || Math.floor(position) !== position || position > subjectString.length) {
//         position = subjectString.length;
//       }
//       position -= searchString.length;
//       var lastIndex = subjectString.indexOf(searchString, position);
//       return lastIndex !== -1 && lastIndex === position;
//   };
// }
     var statpass = true;
     for (i = 0; i < textarray.length; i++) {
         var textid = textarray[i];
         if (textid.endsWith("*")) {
             textid = textid.replace("*", "");
             var vale = $('#' + textid).val();

             if (vale == '' || vale =='0.00') {
                 if (statpass) {
                     $('#' + textid).focus();
                 }
                 statpass = false;
                 $('#' + textid).addClass('mandatorycolor');
             } else {
                 $('#' + textid).removeClass('mandatorycolor');
             }
        }
     }
     if (!statpass) {
         alert("Fill mandatory fields!");
     }
     return statpass;

 }

 function dp(finalText, randomnumber) {
     
     if ('Blob' in window) {
         var fileName = reportname + "-" + randomnumber;
         var textToWrite = finalText;
         var textFileAsBlob = new Blob([textToWrite], {
             type: 'text/plain'
         });

         var downloadLink = document.createElement("a");
         downloadLink.download = fileName;
         downloadLink.innerHTML = "Download File";
         if ('webkitURL' in window) {
             downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
         } else {
             downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
             //downloadLink.onclick = destroyClickedElement;
             downloadLink.style.display = "none";
             document.body.appendChild(downloadLink);
         }
         downloadLink.click();
     } else {
         alert('Your browser does not support the HTML5 Blob.');
     }
 }

 function isNumber(evt) {
     
       var keyCode = e.which ? e.which : e.keyCode
            var ret = ((keyCode >= 48 && keyCode <= 57) || specialKeys.indexOf(keyCode) != -1);
            document.getElementById("error").style.display = ret ? "none" : "inline";
            return ret;
     
     
     evt = (evt) ? evt : window.event;
     var charCode = (evt.which) ? evt.which : evt.keyCode;
     if (charCode == 46) {
         return true;
     } else if (charCode > 31 && (charCode < 48 || charCode > 57)) {
         alert("Numeric value only allowed !");
         return false;
     }
     
    // validateDecimal(evt.id, evt.value);
     

     return true;
 }

 function isTime(evt) {     
     evt = (evt) ? evt : window.event;
     var charCode = (evt.which) ? evt.which : evt.keyCode;
    
     if (charCode == 58) {
         return true;
     } else if (charCode > 31 && (charCode < 48 || charCode > 57)) {
         alert("Time Format (HH:MM) only allowed !");
         return false;
     }
     return true;
 }



//  $(document).ready(function() {
//      var userid = localStorage.getItem("userid");
//      if (userid == '' || userid == null) {
//          window.location.href = "login.html"
//      }
//       var ren = renderval;    
//       for (var i = 0; i < ren.length; i++) {
//        var res = ren[i].split(":");        
//        rendercall(trim(res[0]),res[1]);  
          
//       }
     
//     var elems = document.getElementsByClassName('confirmation');
//     var confirmIt = function (e) {
//         if (!confirm('Are you sure you want to leave this page ? ')) e.preventDefault();
//     };
//     for (var i = 0, l = elems.length; i < l; i++) {
//         elems[i].addEventListener('click', confirmIt, false);
//     }
     
    
//  });


function rendercall(elementId,val) { 
   document.getElementById(elementId).style.display = val; 

}
 function logout() {
      localStorage.setItem("userid", "");
 }


function timeout(obj) {   
    setTimeout(function() {       
    }, 100)
}


function validateTime(obj)
{
    
    var timeValue = obj.value;  
   
    if(timeValue == "" || timeValue.indexOf(":")<0)
    {
        alert("Invalid Time format");
        document.getElementById(obj.id).value = "00:00"; 
        document.getElementById(obj.id).focus();   
        return false;
    }
    else
    {
        var sHours = timeValue.split(':')[0];
        var sMinutes = timeValue.split(':')[1];

        if(sHours == "" || isNaN(sHours) || parseInt(sHours)>23)
        {
            alert("Invalid Time format");
            document.getElementById(obj.id).value = "00:00"; 
            document.getElementById(obj.id).focus();      
            return false;
        }
        else if(parseInt(sHours) == 0)
            sHours = "00";
        else if (sHours <10)
            sHours = sHours;

        if(sMinutes == "" || isNaN(sMinutes) || parseInt(sMinutes)>59)
        {
            alert("Invalid Time format");
            document.getElementById(obj.id).value = "00:00";  
            document.getElementById(obj.id).focus();  
            return false;
        }
        else if(parseInt(sMinutes) == 0)
            sMinutes = "00";
        else if (sMinutes <10)
            sMinutes = sMinutes;    

        obj.value = sHours + ":" + sMinutes;        
    }

    return true;    
}

function isNumber(evt,obj) {
        
     var charCode = (evt.which) ? evt.which : evt.keyCode;
     if (charCode == 46) {
         return true;
     } else if (charCode > 31 && (charCode < 48 || charCode > 57)) {
         alert("Numeric value only allowed !");
         return false;
     }
     return true;
 }

function validateDecimal (obj){
   
    var curval = obj.value.split('.'); 
     if(curval.length > 2){
        alert("Invalid format");
          document.getElementById(obj.id).value = "0.00";
          document.getElementById(obj.id).focus();    
        return false;
    }else if(curval.length > 1){
        var decimalval = curval[1];        
        if(decimalval.length > 2){
            alert("After decimal only two digits allowed") ;
            document.getElementById(obj.id).value = curval[0]+"."+decimalval.substring(0, 2); 
            return false;
        }
    }else{      
        if(obj.value!=null && obj.value.length>0) {
            obj.value = parseFloat(obj.value).toFixed(2);      
        } else{
            obj.value="0.00";
        }
        
    }
}

function validateDecimal3 (obj){
   
    var curval = obj.value.split('.'); 
     if(curval.length > 2){
        alert("Invalid format");
          document.getElementById(obj.id).value = "0.000";   
          document.getElementById(obj.id).focus(); 
        return false;
    }else if(curval.length > 1){
        var decimalval = curval[1];        
        if(decimalval.length > 3){
            alert("After decimal only three digits allowed") ;
            document.getElementById(obj.id).value = curval[0]+"."+decimalval.substring(0, 3); 
            return false;
        }
    }else{      
        obj.value = parseFloat(obj.value).toFixed(3);    
        
    }
    
}

 function addOption(selectbox,text,value )
{
    var optn = document.createElement("OPTION");
    optn.text = text;
    optn.value = value;   
    selectbox.add(optn);
}


function trim(value) {
    return LTrim(RTrim(value));
}
function LTrim(value) {
    var re = /\s*((\S+\s*)*)/;
    return value.replace(re, "$1");
}

function RTrim(value) {
    var re = /((\s*\S+)*)\s*/;
    return value.replace(re, "$1");
}



function percentageValidation(obj,evt){
    


          var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode == 46) {
        //Check if the text already contains the . character
        if (obj.value.indexOf('.') === -1) {
            return true;
        } else {
            return false;
        }
    } else {
        if (charCode > 31
             && (charCode < 48 || charCode > 57))
            return false;
    }
    
    return true;
}

function percentageValidUp(obj){
     if (obj.value > 100){
    alert("Percentage value should not exceed than 100");
    obj.value='100';
  }
}



//$(document).on('click', ':not(form)[data-confirm]', function(e){
//    if(!confirm($(this).data('confirm'))){
//      e.stopImmediatePropagation();
//      e.preventDefault();
//		}
//});
//
//$(document).on('submit', 'form[data-confirm]', function(e){
//    if(!confirm($(this).data('confirm'))){
//    	e.stopImmediatePropagation();
//      e.preventDefault();
//		}
//});
//
//$(document).on('input', 'select', function(e){
//    var msg = $(this).children('option:selected').data('confirm');
//    if(msg != undefined && !confirm(msg)){
//        $(this)[0].selectedIndex = 0;
//    }
//});

//window.onbeforeunload = confirmExit;
 // function confirmExit()
 // {
   // return "Are you sure you want to leave this page ?";
 // }

function masterFieldClear(formid){
    if (formid == 'brn') {
                document.getElementById(formid).reset();
                var vessel = db.get('vesselinfo').value();
                $('#brn_service').val(vessel[0].service);
                $('#brn_vessel').val(vessel[0].vslname);
                $('#brn_vesselcode').val(vessel[0].vslcode);
            } else if (formid == 'bdnform') {
                document.getElementById(formid).reset();
                $('#bdn_bunkerreqno').val('');
                $('#bdn_bunkerport').val('');
                $('#bdn_bunkerportname').val('');
                $('#bdn_bunkerdate').val('');
                $('#bdn_voyage').val('');
                document.getElementById("inputlocAttach").value = "";
            } else if (formid == 'arrivalform') {
                document.getElementById(formid).reset();
                var vessel = db.get('vesselinfo').value();
                $('#arr_imonum').val(vessel[0].imodetails);
            } else if (formid == 'depform') {
                document.getElementById(formid).reset();
                var vessel = db.get('vesselinfo').value();
                $('#dpt_imonum').val(vessel[0].imodetails);

            } else if (formid == 'bospform') {
                document.getElementById(formid).reset();
                var vessel = db.get('vesselinfo').value();
                $('#cop_imonum').val(vessel[0].imodetails);

            } else if (formid == 'noonform') {
                document.getElementById(formid).reset();
                var vessel = db.get('vesselinfo').value();
                $('#nrp_imnonumber').val(vessel[0].imodetails);

            } else if (formid == 'eospform') {
                document.getElementById(formid).reset();
                var vessel = db.get('vesselinfo').value();
                $('#eop_imonum').val(vessel[0].imodetails);

            } else {
                var bnkport = $('#bdn_bunkerport').val();
                //db1.get('maildata').remove(bnkport).write();
                document.getElementById(formid).reset();
            }
}


     // Check Latitude

 function checklatlong(e,value,obj){
    //Check Charater
        var unicode=e.charCode? e.charCode : e.keyCode;
        if (value.indexOf(".") != -1)return false;
        if (unicode!=8)if((unicode<48||unicode>57)&&unicode==46)return false;
    }

    function checkLengthlat(obj){
    var fieldVal = document.getElementById(obj.id).value;
    //Suppose u want 3 number of character
    if(fieldVal < 91){
        return true;
    }
    else
    {
        var str = document.getElementById(obj.id).value;
        str = str.substring(0, str.length - 1);
    document.getElementById(obj.id).value = str;
    }
    }




    function checkLengthlong(obj){
    var fieldVal = document.getElementById(obj.id).value;
    //Suppose u want 3 number of character
    if(fieldVal < 181){
        return true;
    }
    else
    {
        var str = document.getElementById(obj.id).value;
        str = str.substring(0, str.length - 1);
    document.getElementById(obj.id).value = str;
    }
    }

    
// Lati Validation

 function check(e,value,obj){
    //Check Charater
        var unicode=e.charCode? e.charCode : e.keyCode;
        if (value.indexOf(".") != -1)if( unicode == 46 )return false;
        if (unicode!=8)if((unicode<48||unicode>57)&&unicode!=46)return false;
    }

    function checkLength(obj){
    var fieldVal = document.getElementById(obj.id).value;
    //Suppose u want 3 number of character
    if(fieldVal < 59.60){
        return true;
    }
    else
    {
        var str = document.getElementById(obj.id).value;
        str = str.substring(0, str.length - 1);
    document.getElementById(obj.id).value = str;
    }
    }