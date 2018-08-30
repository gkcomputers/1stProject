var imported = document.createElement('script');
imported.src = './bdn.js';
document.head.appendChild(imported);

function MailAction(formid) {

const path = require('path')

const nodemailer = require("nodemailer");
            $('.hide-Progress-overlay').addClass('is-visible');
            var maildetail = (db.get('sysconfig').value());      
			const dbpath=path.join(__dirname, '../Maildetails.json');
			//const dbpath = "E:/IBS Source/JSON Ship Version/IBS_VESSELREPORT_APPS/ibs/Maildetails.json"
			console.log('origin '+dbpath);
			var res = dbpath.replace("resources", '');
			var res1 = res.replace("app.asar", '');
			console.log(res1);	
			var maximum = 100000;
			var minimum = 100;
			var randomnumber = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
			var transporter = nodemailer.createTransport({
				host: maildetail[0].host,
				port: maildetail[0].port,
				auth: {
					user: maildetail[0].user,
					pass: maildetail[0].pass
				}
			});
			var attname = document.getElementById("inputAttach").value;
			var locatt='';
			if(formid=='bdnform') {
				locatt = document.getElementById("inputlocAttach").value;	
			}
			
			console.log('att chanem '+locatt);
			if(formid=='bdnform' && locatt.trim().length>0 ){
				console.log('bdn form');
				var mailOptions = {
				
				from:  document.getElementById("inputFrom").value,
				to: document.getElementById("inputTo").value,
				subject: document.getElementById("inputSubject").value,
				text: document.getElementById("inputBody").value+' ',
				cc:document.getElementById("ccTo").value,
				attachments: [
						{
							filename: attname,
							path: res1,
							contentType: 'application/json'
						},
						{
							filename: Attfilename,
							path: filepath,  
							contentType: 'application/txt'
						}
					]
				
			};
			} else{
				console.log('bdn without locattach');
				var mailOptions = {
				
				from:  document.getElementById("inputFrom").value,
				to: document.getElementById("inputTo").value,
				subject: document.getElementById("inputSubject").value,
				text: document.getElementById("inputBody").value+' ',
				cc:document.getElementById("ccTo").value,
				
					attachments: [
						{
							filename: attname,
							path: res1,
							contentType: 'application/json'
						}
					]
				
			};
		}

			transporter.sendMail(mailOptions, function (error, info) {
				if (error) {
					$('.hide-Progress-overlay').removeClass('is-visible');
					alert(error);
				} else {
					console.log('Email sent: ' + info.response);
					alert('Email sent');
					$('#modalCompose').modal('hide');
					$('.hide-Progress-overlay').removeClass('is-visible');
					
						 
					if(formid=='brn'){
						document.getElementById(formid).reset();
						var vessel = db.get('vesselinfo').value();
						$('#brn_service').val(vessel[0].service);
						$('#brn_vessel').val(vessel[0].vslname);
						$('#brn_vesselcode').val(vessel[0].vslcode);
					} else if(formid=='bdnform'){
						document.getElementById(formid).reset();
						$('#bdn_bunkerreqno').val('');
						$('#bdn_bunkerport').val('');
						$('#bdn_bunkerportname').val('');
						$('#bdn_bunkerdate').val('');
						$('#bdn_voyage').val('');
						document.getElementById("inputlocAttach").value=""; 
					} else if(formid=='arrivalform'){
						document.getElementById(formid).reset();
						var vessel = db.get('vesselinfo').value();
						$('#arr_imonum').val(vessel[0].imodetails);
						
					} else if(formid=='depform'){
						document.getElementById(formid).reset();
						var vessel = db.get('vesselinfo').value();
						$('#dpt_imonum').val(vessel[0].imodetails);
						
					} else if(formid=='bospform') {
						document.getElementById(formid).reset();
						var vessel = db.get('vesselinfo').value();
						$('#cop_imonum').val(vessel[0].imodetails);

					} else if(formid=='noonform') {
						document.getElementById(formid).reset();
						var vessel = db.get('vesselinfo').value();
						$('#nrp_imnonumber').val(vessel[0].imodetails);
						
					} else if(formid=='eospform') {
						document.getElementById(formid).reset();
						var vessel = db.get('vesselinfo').value();
						$('#eop_imonum').val(vessel[0].imodetails);
						
					} else {
						var bnkport = $('#bdn_bunkerport').val();
						//db1.get('maildata').remove(bnkport).write();
						document.getElementById(formid).reset();
					}
				}
            });
        }