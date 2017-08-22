// JavaScript Document

function hapus()
{
	document.getElementById('text1').value = "";
	document.getElementById('text2').value = "";
	document.getElementById('text3').value = "";
	document.getElementById('text4').value = "";
	document.getElementById('text5').value = "";
	document.getElementById('text6').value = "";
	document.getElementById('text7').value = "";
	document.getElementById('text8').value = "";
	document.getElementById('text9').value = "";
	document.getElementById('text10').value = "";
}

function gemsToGold()
{
	var a = document.getElementById('text1').value;
	var  b = parseInt(a);
	var hasil = (b * 200);
	
	document.getElementById('text2').value = hasil;
}
function darkToGems()
{
	var c = document.getElementById('text3').value;
	var  d = parseInt(c);
	var hasil = (d * 0.25);
	
	document.getElementById('text4').value = hasil;
}

function gemsToDolars()
{
	var e = document.getElementById('text9').value;
	var  f = parseInt(e);
	var hasil = (f*0.2);
	document.getElementById('text10').value = hasil;
}
function timeToGems()
{
	var g = document.getElementById('text5').value;

	var  h = parseInt(g);
	var  i = parseInt(g);
	var  j = parseInt(g);	
	var hasil = (h*0.0005);
	var hasil2 = (i*0.005);
	var hasil3 = (j*0.02);	
	document.getElementById('text6').value = hasil;
	document.getElementById('text7').value = hasil2;
	document.getElementById('text8').value = hasil3;	

}