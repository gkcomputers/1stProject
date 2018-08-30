var vesselinfo = (db.get('vesselinfo').value());
console.log(vesselinfo);
var vesselname=vesselinfo.vslname;
$("#menu-toggle").innerHtml=vesselname;