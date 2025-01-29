//variables

var nick = "Saf";
var hein = 62;
var wei = 60;

//calculateeieie

//feet and inches for heeightt
var fet = Math.floor(hein / 12);
var inc = Math.floor(hein % 12);

//weight in pounds
var pow = (wei * 2.205).toFixed(3);

alert("Name: " + nick);
alert("Height: " + fet + "'" + inc + "''");
alert("Weight: " + pow + " lbs");
