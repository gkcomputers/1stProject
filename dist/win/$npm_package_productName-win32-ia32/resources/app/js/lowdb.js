const low = require('lowdb')
const path = require('path')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('lowdb.json')
const db = low(adapter)
db.defaults({
  cosp: [], vesselinfo: [{
    "vslcode": "CQEX",
    "vslname": "CHIQUITA EXPRESS",
    "service": "KHH",
    "imodetails": "190734",
    "vesselemail": "prema@solverminds.com"
  }], ports: [
    {
      "portname": "Chennai",
      "portcode": "INMAA"
    },
  ], sysconfig: [{
    "from": "renceabishek.g@solverminds.com",
    "to": "ibssupport@solverminds.com",
    "host": "mail.solverminds.com",
    "smtpport": 25,
    "user": "ibssupport@solverminds.com",
    "pass": "I67@Lth*hjkW@th87",
    "vesselemail": "prema@solverminds.com"
  }], bunkerrequest: [], 
  fueldetail: [
    {
    "infofuelrequirement": "MGO-DMA"
  },
  {
    "infofuelrequirement": "MGO-DMB"
  },
  {
    "infofuelrequirement": "HSFO-RMG380"
  },
  {
    "infofuelrequirement": "MGO-RMK380"
  }
],count: 0
})
  .write();
const adapter1 = new FileSync('Maildetails.json')
const db1 = low(adapter1)
db1.defaults({ maildata: [{}] }).write();	 
