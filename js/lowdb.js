const low = require('lowdb')
const path = require('path')
const FileSync = require('lowdb/adapters/FileSync')
//const adapter = new FileSync('lowdb.json')

var paths = document.location.pathname;
console.log('--path '+paths);

var paths1=paths.replace('%20',' ');
while(paths1.includes('%20')){
	paths1=paths1.replace('%20',' ');
}
console.log('appdata path'+process.env.APPDATA);
var customerpath = process.env.APPDATA+'/VEGFRUIT/Customer.json';
const cusadapter1 = new FileSync(customerpath)
const db = low(cusadapter1)
db.defaults({ customer: [{
	"customerid" : "C1000",
	"customername" : "GKCOmputers",
	"cusarea" : "Linemedu",
	"cusmobile" : "9790159051",
	"custin" : "TIN9087606070",
		"cusaddress":"Near KS theatre",
		"cusstate":"Tamil Nadu",
	"cuspincode":"636006",
	"cusemail":"gkcomputers@gmail.com",
	"cusremarks":"Good"
}]}).write();

var productpath = process.env.APPDATA+'/VEGFRUIT/Product.json';
const prodadapter1 = new FileSync(productpath)
const db1 = low(prodadapter1)
db1.defaults({ product: [
	{
	   "productid" : "1221",
		 "productname" : "Lemon",
		 "mrp" : "0",
		 "rate" : "0"
  },
	{
		"productid" : "1222",
		"productname" : "Coconut",
		"mrp" : "0",
		"rate" : "0"
	},
	{
		"productid" : "1223",
		"productname" : "Big Onion",
		"mrp" : "0",
		"rate" : "0"
	},
	{
		"productid" : "1224",
		"productname" : "Small Onion",
		"mrp" : "0",
		"rate" : "0"
	},
	{
		"productid" : "1225",
		"productname" : "Potato",
		"mrp" : "0",
		"rate" : "0"
	},
	{
		"productid" : "",
		"productname" : "Chips Potato",
		"mrp" : "0",
		"rate" : "0"
	},
	{
		"productid" : "1226",
		"productname" : "Green Chilly",
		"mrp" : "0",
		"rate" : "0"
	}
]}).write();
