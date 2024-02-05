//hindi-wx2utf
function convert_pan_wx2utf(text) {
    console.log(text);
	//var text = $("#input").val();
	
	var unicodeValue = new Array();
	var unicodeValue_vowels = new Array();
	unicodeValue_vowels["a"] = '\u0A05';	//a
	unicodeValue_vowels["A"]='\u0A06';
	unicodeValue_vowels["i"]='\u0A07';
	unicodeValue_vowels["I"]='\u0A08';
	unicodeValue_vowels["u"]='\u0A09';
	unicodeValue_vowels["U"]='\u0A0A';
	unicodeValue_vowels["q"]='\u0A0B';
	unicodeValue_vowels["lq"]='\u0A0C';
	unicodeValue_vowels["e"]='\u0A0F';
	unicodeValue_vowels["E"]='\u0A10';
	unicodeValue_vowels["o"]='\u0A13';
	unicodeValue_vowels["O"]='\u0A14';
	
	// unicodeValue_vowels["aa"] = '\u0A05';	//a
	unicodeValue_vowels["aA"]='\u0A06';
	unicodeValue_vowels["ai"]='\u0A07';
	unicodeValue_vowels["aI"]='\u0A08';
	unicodeValue_vowels["au"]='\u0A09';
	unicodeValue_vowels["aU"]='\u0A0A';
	unicodeValue_vowels["aq"]='\u0A0B';
	unicodeValue_vowels["alq"]='\u0A0C';
	unicodeValue_vowels["ae"]='\u0A0F';
	unicodeValue_vowels["aE"]='\u0A10';
	unicodeValue_vowels["ao"]='\u0A13';
	unicodeValue_vowels["aO"]='\u0A14';

//	unicodeValue_vowels["z"] = '\u0A01';	//z
	unicodeValue["lY"]='\u0A33';
	unicodeValue["EY"]='\u0A45';
	unicodeValue["eV"]='\u0A46';
	unicodeValue["OY"]='\u0A49';
	unicodeValue["oV"]='\u0A4A';

	/***********Three Character length words**************/
/*Uncommented By Nagaraju to allow display of below 3 letter characters*/
	unicodeValue_vowels["EY"]='\u0A0D';
	unicodeValue_vowels["eV"]='\u0A0E';
	
	unicodeValue_vowels["OY"]='\u0A11';
	unicodeValue_vowels["oV"]='\u0A12';
	unicodeValue_vowels["aEY"]='\u0A0D';
	unicodeValue_vowels["aeV"]='\u0A0E';
	
	unicodeValue_vowels["aOY"]='\u0A11';
	unicodeValue_vowels["aoV"]='\u0A12';

/* added by nagaraju V for keboard press */
//	unicodeValue["k_R"]='\u0A15\u0A4D\u0A37';
//	unicodeValue["w_r"]='\u0A24\u0A4D\u0A30';
//	unicodeValue["j_F"]='\u0A1C\u0A4D\u0A1E';

	/*unicodeValue_vowels["z"]='\u0A05\u0A01';
	unicodeValue_vowels["M"]='\u0A05\u0A02';
	unicodeValue_vowels["H"]='\u0A05\u0A03';
	unicodeValue_vowels["Q"]='\u0A60';*/

	/**************symbol mappings***********************/

	unicodeValue[";"] = ';';	//g;
	unicodeValue[":"] = ':';	//:
	unicodeValue["\""] = '34';	//
	unicodeValue["'"] = '39';	//'
	unicodeValue[","] = '44';	//,
	unicodeValue["."] = '46';	//.
	unicodeValue["/"] = '47';	///.
	unicodeValue["?"] = '63';	//?
	unicodeValue["<"] = '<';	//<
	unicodeValue[">"] = '>';	//>
	unicodeValue["["] = '[';	//[
	unicodeValue["]"] = ']';	//]
	unicodeValue["{"] = '123';	//{
	unicodeValue["}"] = '125';	//}
	unicodeValue["("] = '40';	//(
	unicodeValue[")"] = '41';	//)
	unicodeValue["@"] = '64';	//@
	unicodeValue["#"] = '35';	//#
	//unicodeValue["94"] = '94';	//#
	unicodeValue["^"] = '^';	//^
	unicodeValue["*"] = '42';	//*
	unicodeValue["_"] = '\u0A4D';	//_
	unicodeValue["="] = '61';	//=
	unicodeValue["+"] = '43';	//+
	unicodeValue["|"] = '\u0A64';	//|
	unicodeValue["~"] = '~';	//|
	unicodeValue["`"] = '`';	//|
	unicodeValue["\\"] = '\\';	//|


	/***************numbers mapping ***********************/

	unicodeValue["0"] = '\u0A66';	//0
	unicodeValue["1"] = '\u0A67';	//1
	unicodeValue["2"] = '\u0A68';	//2
	unicodeValue["3"] = '\u0A69';	//3
	unicodeValue["4"] = '\u0A6A';	//4
	unicodeValue["5"] = '\u0A6B';	//5
	unicodeValue["6"] = '\u0A6C';	//6
	unicodeValue["7"] = '\u0A6D';	//7
	unicodeValue["8"] = '\u0A6E';	//8
	unicodeValue["9"] = '\u0A6F';	//9

	/*****************a-z mappings***************************/

	unicodeValue["a"] = '\u0A05';	//a
	unicodeValue["b"] = '\u0A2C';	//b
	unicodeValue["c"] = '\u0A1A';	//c
	unicodeValue["d"] = '\u0A21';	//d
	unicodeValue["e"] = '\u0A47';	//e
	unicodeValue["f"] = '\u0A19';	//f
	unicodeValue["g"] = '\u0A17';	//g
	unicodeValue["h"] = '\u0A39';	//h
	unicodeValue["i"] = '\u0A3F';	//i
	unicodeValue["j"] = '\u0A1C';	//j
	unicodeValue["k"] = '\u0A15';	//k
	unicodeValue["l"] = '\u0A32';	//l
	unicodeValue["m"] = '\u0A2E';	//m
	unicodeValue["n"] = '\u0A28';	//n
	unicodeValue["o"] = '\u0A4B';	//o
	unicodeValue["p"] = '\u0A2A';	//p
	unicodeValue["q"] = '\u0A43';	//q
	unicodeValue["r"] = '\u0A30';	//r
	unicodeValue["s"] = '\u0A38';	//s
	unicodeValue["t"] = '\u0A1F';	//t
	unicodeValue["u"] = '\u0A41';	//u
	unicodeValue["v"] = '\u0A35';	//v
	unicodeValue["w"] = '\u0A24';	//w
	unicodeValue["x"] = '\u0A26';	//x
	unicodeValue["y"] = '\u0A2F';	//y
	unicodeValue["z"] = '\u0A01';	//z

	/*******************A-Z mappings*****************************/

	unicodeValue["A"] = '\u0A3E';	//A
	unicodeValue["B"] = '\u0A2D';	//B
	unicodeValue["C"] = '\u0A1B';	//C
	unicodeValue["D"] = '\u0A22';	//D
	unicodeValue["E"] = '\u0A48';	//E
	unicodeValue["F"] = '\u0A1E';	//F
	unicodeValue["G"] = '\u0A18';	//G
	unicodeValue["H"] = '\u0A03';	//H
	unicodeValue["I"] = '\u0A40';	//I
	unicodeValue["J"] = '\u0A1D';	//J
	unicodeValue["K"] = '\u0A16';	//K
	//unicodeValue["L"] = 'L';	//L
	unicodeValue["M"] = '\u0A02';	//M
	unicodeValue["N"] = '\u0A23';	//N
	unicodeValue["O"] = '\u0A4C';	//O
	unicodeValue["P"] = '\u0A2B';	//P
	unicodeValue["Q"] = '\u0A44';	//Q
	unicodeValue["R"] = '\u0A37';	//R
	unicodeValue["S"] = '\u0A36';	//S
	unicodeValue["T"] = '\u0A20';	//T
	unicodeValue["U"] = '\u0A42';	//U
	//unicodeValue["V"] = 'V';	//V
	unicodeValue["W"] = '\u0A25';	//W
	unicodeValue["X"] = '\u0A27';	//X
	unicodeValue["Y"] = '\u0A3D';	//Y
	unicodeValue["Z"] = '\u0A3C';	//Z
	//unicodeValue[89] = '\u0A26';
	//unicodeValue[90] = '\u0A01';
	//unicodeValue[90] = '\u0A3D';

	/**************Two Character length words************/
	//lY cases
	text=text.replace(/(lY)eV([MHz])/g, function() {
		return unicodeValue[arguments[1]] + unicodeValue["eV"] + unicodeValue[2];
	});
	
    text=text.replace(/(lY)eV/g, function() {
		return unicodeValue[arguments[1]] + unicodeValue["eV"];
	});
	
    text=text.replace(/(lY)EY([MHz])/g, function() {
		return unicodeValue[arguments[1]] + unicodeValue["EY"] + unicodeValue[2];
	});

    text=text.replace(/(lY)EY/g, function() {
		return unicodeValue[arguments[1]] + unicodeValue["EY"];
	});

    text=text.replace(/(lY)oV([MHz])/g, function () {
		return unicodeValue[arguments[1]] + unicodeValue["oV"] + unicodeValue[2];
	});
    text=text.replace(/(lY)oV/g, function() {
		return  unicodeValue[arguments[1]] + unicodeValue["oV"];
	});
    text=text.replace(/(lY)OY([MHz])/g, function() {
		return unicodeValue[arguments[1]] + unicodeValue["OY"] + unicodeValue[2]; 
	});

    text=text.replace(/(lY)OY/g, function() {
		return  unicodeValue[arguments[1]] + unicodeValue["OY"];
	});

    text=text.replace(/(lY)([AiIuUeEoO])([MHz])/g, function() {
		return unicodeValue[arguments[1]] + unicodeValue_vowels[arguments[2]] + unicodeValue[3];
	});

    text=text.replace(/(lY)([AiIuUeEoO])/g, function(){
		return unicodeValue[arguments[1]] + unicodeValue_vowels[arguments[2]];
	});

    text=text.replace(/(lY)a([MHz])/g, function() {
		return unicodeValue[arguments[1]] + unicodeValue[arguments[2]];
	});

    text=text.replace(/(lY)a/g, function() {
		return unicodeValue[arguments[1]];
	});

    text=text.replace(/(lY)/g, function(){
		return unicodeValue[arguments[1]] + unicodeValue["_"];
	});
	
	var r1 = /([kKgGfcCjJFtTdDNwWxXnpPbBmyrlvSsRh])([kKgGfcCjJFtTdDNwWxXnpPbBmyrlvSsRh])([kKgGfcCjJFtTdDNwWxXnpPbBmyrlvSsRh])eV([MHz])/g;
	text=text.replace(r1,function (){
		return unicodeValue[arguments[1]]+unicodeValue["_"]+unicodeValue[arguments[2]]+unicodeValue["_"]+unicodeValue[arguments[3]]+unicodeValue["aeV"]+unicodeValue[arguments[4]];
		});

	var r1 = /([kKgGfcCjJFtTdDNwWxXnpPbBmyrlvSsRh])([kKgGfcCjJFtTdDNwWxXnpPbBmyrlvSsRh])([kKgGfcCjJFtTdDNwWxXnpPbBmyrlvSsRh])eV/g;
	text=text.replace(r1,function (){
		return unicodeValue[arguments[1]]+unicodeValue["_"]+unicodeValue[arguments[2]]+unicodeValue["_"]+unicodeValue[arguments[3]]+unicodeValue["aeV"];
		});

	var r1 = /([kKgGfcCjJFtTdDNwWxXnpPbBmyrlvSsRh])([kKgGfcCjJFtTdDNwWxXnpPbBmyrlvSsRh])([kKgGfcCjJFtTdDNwWxXnpPbBmyrlvSsRh])EY([MHz])/g;
	text=text.replace(r1,function (){
		return unicodeValue[arguments[1]]+unicodeValue["_"]+unicodeValue[arguments[2]]+unicodeValue["_"]+unicodeValue[arguments[3]]+unicodeValue["aEY"]+unicodeValue[arguments[4]];
		});

	var r1 = /([kKgGfcCjJFtTdDNwWxXnpPbBmyrlvSsRh])([kKgGfcCjJFtTdDNwWxXnpPbBmyrlvSsRh])([kKgGfcCjJFtTdDNwWxXnpPbBmyrlvSsRh])EY/g;
	text=text.replace(r1,function (){
		return unicodeValue[arguments[1]]+unicodeValue["_"]+unicodeValue[arguments[2]]+unicodeValue["_"]+unicodeValue[arguments[3]]+unicodeValue["aEY"];
		});

	var r1 = /([kKgGfcCjJFtTdDNwWxXnpPbBmyrlvSsRh])([kKgGfcCjJFtTdDNwWxXnpPbBmyrlvSsRh])([kKgGfcCjJFtTdDNwWxXnpPbBmyrlvSsRh])oV([MHz])/g;
	text=text.replace(r1,function (){
		return unicodeValue[arguments[1]]+unicodeValue["_"]+unicodeValue[arguments[2]]+unicodeValue["_"]+unicodeValue[arguments[3]]+unicodeValue["aoV"]+unicodeValue[arguments[4]];
		});

	var r1 = /([kKgGfcCjJFtTdDNwWxXnpPbBmyrlvSsRh])([kKgGfcCjJFtTdDNwWxXnpPbBmyrlvSsRh])([kKgGfcCjJFtTdDNwWxXnpPbBmyrlvSsRh])oV/g;
	text=text.replace(r1,function (){
		return unicodeValue[arguments[1]]+unicodeValue["_"]+unicodeValue[arguments[2]]+unicodeValue["_"]+unicodeValue[arguments[3]]+unicodeValue["aoV"];
		});

	var r1 = /([kKgGfcCjJFtTdDNwWxXnpPbBmyrlvSsRh])([kKgGfcCjJFtTdDNwWxXnpPbBmyrlvSsRh])([kKgGfcCjJFtTdDNwWxXnpPbBmyrlvSsRh])OY([MHz])/g;
	text=text.replace(r1,function (){
		return unicodeValue[arguments[1]]+unicodeValue["_"]+unicodeValue[arguments[2]]+unicodeValue["_"]+unicodeValue[arguments[3]]+unicodeValue["aOY"]+unicodeValue[arguments[4]];
		});

	var r1 = /([kKgGfcCjJFtTdDNwWxXnpPbBmyrlvSsRh])([kKgGfcCjJFtTdDNwWxXnpPbBmyrlvSsRh])([kKgGfcCjJFtTdDNwWxXnpPbBmyrlvSsRh])oY/g;
	text=text.replace(r1,function (){
		return unicodeValue[arguments[1]]+unicodeValue["_"]+unicodeValue[arguments[2]]+unicodeValue["_"]+unicodeValue[arguments[3]]+unicodeValue["aoV"];
		});

	var r1 = /([kKgGfcCjJFtTdDNwWxXnpPbBmyrlvSsRh])([kKgGfcCjJFtTdDNwWxXnpPbBmyrlvSsRh])([kKgGfcCjJFtTdDNwWxXnpPbBmyrlvSsRh])([AiIuUeEoO])([MHz])/g;
	text = text.replace(r1,function(){
		return unicodeValue[arguments[1]]+unicodeValue["_"]+unicodeValue[arguments[2]]+unicodeValue["_"]+unicodeValue[arguments[3]]+unicodeValue[arguments[4]]+unicodeValue[arguments[5]];
	});

	var r1 = /([kKgGfcCjJFtTdDNwWxXnpPbBmyrlvSsRh])([kKgGfcCjJFtTdDNwWxXnpPbBmyrlvSsRh])([kKgGfcCjJFtTdDNwWxXnpPbBmyrlvSsRh])([AiIuUeEoO])/g;
	text = text.replace(r1,function(){
		return unicodeValue[arguments[1]]+unicodeValue["_"]+unicodeValue[arguments[2]]+unicodeValue["_"]+unicodeValue[arguments[3]]+unicodeValue[arguments[4]];
	});

	var r1 = /([kKgGfcCjJFtTdDNwWxXnpPbBmyrlvSsRh])([kKgGfcCjJFtTdDNwWxXnpPbBmyrlvSsRh])([kKgGfcCjJFtTdDNwWxXnpPbBmyrlvSsRh])a([MHz])/g;
	text = text.replace(r1,function(){
		return unicodeValue[arguments[1]]+unicodeValue["_"]+unicodeValue[arguments[2]]+unicodeValue["_"]+unicodeValue[arguments[3]]+unicodeValue[arguments[4]];
	});

	var r1 = /([kKgGfcCjJFtTdDNwWxXnpPbBmyrlvSsRh])([kKgGfcCjJFtTdDNwWxXnpPbBmyrlvSsRh])([kKgGfcCjJFtTdDNwWxXnpPbBmyrlvSsRh])a/g;
	text = text.replace(r1,function(){
		return unicodeValue[arguments[1]]+unicodeValue["_"]+unicodeValue[arguments[2]]+unicodeValue["_"]+unicodeValue[arguments[3]];
	});
	
	var r1 = /([kKgGfcCjJFtTdDNwWxXnpPbBmyrlvSsRh])([kKgGfcCjJFtTdDNwWxXnpPbBmyrlvSsRh])([kKgGfcCjJFtTdDNwWxXnpPbBmyrlvSsRh])/g;
	text = text.replace(r1,function(){
		return unicodeValue[arguments[1]]+unicodeValue["_"]+unicodeValue[arguments[2]]+unicodeValue["_"]+unicodeValue[arguments[3]]+unicodeValue["_"];
	});

	var r1 = /([kKgGfcCjJFtTdDNwWxXnpPbBmyrlvSsRh])([kKgGfcCjJFtTdDNwWxXnpPbBmyrlvSsRh])eV([MHz])/g;
	text = text.replace(r1,function(){
		return unicodeValue[arguments[1]]+unicodeValue["_"]+unicodeValue[arguments[2]]+unicodeValue["eV"]+unicodeValue[arguments[3]];
	});

	var r1 = /([kKgGfcCjJFtTdDNwWxXnpPbBmyrlvSsRh])([kKgGfcCjJFtTdDNwWxXnpPbBmyrlvSsRh])eV/g;
	text = text.replace(r1,function(){
		return unicodeValue[arguments[1]]+unicodeValue["_"]+unicodeValue[arguments[2]]+unicodeValue["eV"];
	});

	var r1 = /([kKgGfcCjJFtTdDNwWxXnpPbBmyrlvSsRh])([kKgGfcCjJFtTdDNwWxXnpPbBmyrlvSsRh])EY([MHz])/g;
	text = text.replace(r1,function(){
		return unicodeValue[arguments[1]]+unicodeValue["_"]+unicodeValue[arguments[2]]+unicodeValue["EY"]+unicodeValue[arguments[3]];
	});

	var r1 = /([kKgGfcCjJFtTdDNwWxXnpPbBmyrlvSsRh])([kKgGfcCjJFtTdDNwWxXnpPbBmyrlvSsRh])EY/g;
	text = text.replace(r1,function(){
		return unicodeValue[arguments[1]]+unicodeValue["_"]+unicodeValue[arguments[2]]+unicodeValue["EY"];
	});

	var r1 = /([kKgGfcCjJFtTdDNwWxXnpPbBmyrlvSsRh])([kKgGfcCjJFtTdDNwWxXnpPbBmyrlvSsRh])oV([MHz])/g;
	text = text.replace(r1,function(){
		return unicodeValue[arguments[1]]+unicodeValue["_"]+unicodeValue[arguments[2]]+unicodeValue["oV"]+unicodeValue[arguments[3]];
	});

	var r1 = /([kKgGfcCjJFtTdDNwWxXnpPbBmyrlvSsRh])([kKgGfcCjJFtTdDNwWxXnpPbBmyrlvSsRh])oV/g;
	text = text.replace(r1,function(){
		return unicodeValue[arguments[1]]+unicodeValue["_"]+unicodeValue[arguments[2]]+unicodeValue["oV"];
	});

	var r1 = /([kKgGfcCjJFtTdDNwWxXnpPbBmyrlvSsRh])([kKgGfcCjJFtTdDNwWxXnpPbBmyrlvSsRh])OY([MHz])/g;
	text = text.replace(r1,function(){
		return unicodeValue[arguments[1]]+unicodeValue["_"]+unicodeValue[arguments[2]]+unicodeValue["OY"]+unicodeValue[arguments[3]];
	});

	var r1 = /([kKgGfcCjJFtTdDNwWxXnpPbBmyrlvSsRh])([kKgGfcCjJFtTdDNwWxXnpPbBmyrlvSsRh])OY/g;
	text = text.replace(r1,function(){
		return unicodeValue[arguments[1]]+unicodeValue["_"]+unicodeValue[arguments[2]]+unicodeValue["OY"];
	});

	var r1 = /([kKgGfcCjJFtTdDNwWxXnpPbBmyrlvSsRh])([kKgGfcCjJFtTdDNwWxXnpPbBmyrlvSsRh])([AiIuUeEoO])([MHz])/g;
	text = text.replace(r1,function(){
		return unicodeValue[arguments[1]]+unicodeValue["_"]+unicodeValue[arguments[2]]+unicodeValue[arguments[3]]+unicodeValue[arguments[4]];
	});

	var r1 = /([kKgGfcCjJFtTdDNwWxXnpPbBmyrlvSsRh])([kKgGfcCjJFtTdDNwWxXnpPbBmyrlvSsRh])([AiIuUeEoO])/g;
	text = text.replace(r1,function(){
		return unicodeValue[arguments[1]]+unicodeValue["_"]+unicodeValue[arguments[2]]+unicodeValue[arguments[3]];
	});

	var r1 = /([kKgGfcCjJFtTdDNwWxXnpPbBmyrlvSsRh])([kKgGfcCjJFtTdDNwWxXnpPbBmyrlvSsRh])a([MHz])/g;
	text = text.replace(r1,function(){
		return unicodeValue[arguments[1]]+unicodeValue["_"]+unicodeValue[arguments[2]]+unicodeValue[arguments[3]];
	});

	var r1 = /([kKgGfcCjJFtTdDNwWxXnpPbBmyrlvSsRh])([kKgGfcCjJFtTdDNwWxXnpPbBmyrlvSsRh])a/g;
	text = text.replace(r1,function(){
		return unicodeValue[arguments[1]]+unicodeValue["_"]+unicodeValue[arguments[2]];
	});

	var r1 = /([kKgGfcCjJFtTdDNwWxXnpPbBmyrlvSsRh])eV([MHz])/g;
	text = text.replace(r1,function(){
		return unicodeValue[arguments[1]]+unicodeValue["eV"]+unicodeValue[arguments[2]];
	});

	var r1 = /([kKgGfcCjJFtTdDNwWxXnpPbBmyrlvSsRh])eV/g;
	text = text.replace(r1,function(){
		return unicodeValue[arguments[1]]+unicodeValue["eV"];
	});

	var r1 = /([kKgGfcCjJFtTdDNwWxXnpPbBmyrlvSsRh])EY([MHz])/g;
	text = text.replace(r1,function(){
		return unicodeValue[arguments[1]]+unicodeValue["EY"]+unicodeValue[arguments[2]];
	});

	var r1 = /([kKgGfcCjJFtTdDNwWxXnpPbBmyrlvSsRh])EY/g;
	text = text.replace(r1,function(){
		return unicodeValue[arguments[1]]+unicodeValue["EY"];
	});

	var r1 = /([kKgGfcCjJFtTdDNwWxXnpPbBmyrlvSsRh])oV([MHz])/g;
	text = text.replace(r1,function(){
		return unicodeValue[arguments[1]]+unicodeValue["oV"]+unicodeValue[arguments[2]];
	});

	var r1 = /([kKgGfcCjJFtTdDNwWxXnpPbBmyrlvSsRh])oV/g;
	text = text.replace(r1,function(){
		return unicodeValue[arguments[1]]+unicodeValue["oV"];
	});

	var r1 = /([kKgGfcCjJFtTdDNwWxXnpPbBmyrlvSsRh])OY([MHz])/g;
	text = text.replace(r1,function(){
		return unicodeValue[arguments[1]]+unicodeValue["OY"]+unicodeValue[arguments[2]];
	});

	var r1 = /([kKgGfcCjJFtTdDNwWxXnpPbBmyrlvSsRh])OY/g;
	text = text.replace(r1,function(){
		return unicodeValue[arguments[1]]+unicodeValue["OY"];
	});

	var r1 = /([kKgGfcCjJFtTdDNwWxXnpPbBmyrlvSsRh])Z([AiIuUeEoO])([MHz])/g;
	text = text.replace(r1,function(){
		return unicodeValue[arguments[1]]+unicodeValue["Z"]+unicodeValue[arguments[2]]+unicodeValue[arguments[3]];
	});

	var r1 = /([kKgGfcCjJFtTdDNwWxXnpPbBmyrlvSsRh])Z([AiIuUeEoO])/g;
	text = text.replace(r1,function(){
		return unicodeValue[arguments[1]]+unicodeValue["Z"]+unicodeValue[arguments[2]];
	});

	var r1 = /([kKgGfcCjJFtTdDNwWxXnpPbBmyrlvSsRh])Za([MHz])/g;
	text = text.replace(r1,function(){
		return unicodeValue[arguments[1]]+unicodeValue["Z"]+unicodeValue[arguments[2]];
	});

	var r1 = /([kKgGfcCjJFtTdDNwWxXnpPbBmyrlvSsRh])Za/g;
	text = text.replace(r1,function(){
		return unicodeValue[arguments[1]]+unicodeValue["Z"];
	});

	var r1 =/([kKgGfcCjJFtTdDNwWxXnpPbBmyrlvSsRh])([AiIuUeEoO])([MHz])/g;
	text = text.replace(r1,function(){
		return unicodeValue[arguments[1]]+unicodeValue[arguments[2]]+unicodeValue[arguments[3]];
	});

	var r1 =/([kKgGfcCjJFtTdDNwWxXnpPbBmyrlvSsRh])([AiIuUeEoO])/g;
	text = text.replace(r1,function(){
		return unicodeValue[arguments[1]]+unicodeValue[arguments[2]];
	});

	var r1 =/([kKgGfcCjJFtTdDNwWxXnpPbBmyrlvSsRh])a([MHz])/g;
	text = text.replace(r1,function(){
		return unicodeValue[arguments[1]]+unicodeValue[arguments[2]];
	});

	var r1 =/([kKgGfcCjJFtTdDNwWxXnpPbBmyrlvSsRh])a/g;
	text = text.replace(r1,function(){
		return unicodeValue[arguments[1]];
	});

	var r1 =/([kKgGfcCjJFtTdDNwWxXnpPbBmyrlvSsRh])q/g;		//new rule
	text = text.replace(r1,function(){
		return unicodeValue[arguments[1]]+unicodeValue["q"];
	});

	var r1 =/([kKgGfcCjJFtTdDNwWxXnpPbBmyrlvSsRh])/g;
	text = text.replace(r1,function(){
		return unicodeValue[arguments[1]]+unicodeValue["_"];
	});

	var r1 =/(aq)([MHz])/g;
	text = text.replace(r1,function(){
		return unicodeValue_vowels[arguments[1]]+unicodeValue[arguments[2]];
	});

	var r1 =/aq/g;
	text = text.replace(r1,function(){
		return unicodeValue_vowels["q"];
	});

	var r1 =/aq/g;
	text = text.replace(r1,function(){
		return unicodeValue_vowels["q"];
	});

	var r1 = /aeV([MHz])/g;
	text = text.replace(r1, function() {
		return unicodeValue_vowels["aeV"] + unicodeValue[arguments[1]];
	});

	var r1 = /aeV/g;
	text = text.replace(r1, function() {
		return unicodeValue_vowels["aeV"];
	});

	var r1 = /eV([MHz])/g;
	text = text.replace(r1, function() {
		return unicodeValue_vowels["eV"] + unicodeValue[arguments[1]];
	});

	var r1 = /eV/g;
	text = text.replace(r1, function() {
		return unicodeValue_vowels["eV"];
	});

	var r1 = /aeY([MHz])/g;
	text = text.replace(r1, function() {
		return unicodeValue_vowels["aeY"] + unicodeValue[arguments[1]];
	});

	var r1 = /aeY/g;
	text = text.replace(r1, function() {
		return unicodeValue_vowels["aeY"];
	});

	var r1 = /eY([MHz])/g;
	text = text.replace(r1, function() {
		return unicodeValue_vowels["eY"] + unicodeValue[arguments[1]];
	});

	var r1 = /eY/g;
	text = text.replace(r1, function() {
		return unicodeValue_vowels["eY"];
	});

	var r1 = /aoV([MHz])/g;
	text = text.replace(r1, function() {
		return unicodeValue_vowels["aoV"] + unicodeValue[arguments[1]];
	});

	var r1 = /aoV/g;
	text = text.replace(r1, function() {
		return unicodeValue_vowels["aoV"];
	});

	var r1 = /oV([MHz])/g;
	text = text.replace(r1, function() {
		return unicodeValue_vowels["oV"] + unicodeValue[arguments[1]];
	});

	var r1 = /oV/g;
	text = text.replace(r1, function() {
		return unicodeValue_vowels["oV"];
	});

	var r1 = /aoY([MHz])/g;
	text = text.replace(r1, function() {
		return unicodeValue_vowels["aoY"] + unicodeValue[arguments[1]];
	});

	var r1 = /aoY/g;
	text = text.replace(r1, function() {
		return unicodeValue_vowels["aoY"];
	});

	var r1 = /oY([MHz])/g;
	text = text.replace(r1, function() {
		return unicodeValue_vowels["oY"] + unicodeValue[arguments[1]];
	});

	var r1 = /oY/g;
	text = text.replace(r1, function() {
		return unicodeValue_vowels["oY"];
	});

	var r1 = /aA/g;
	text = text.replace(r1, function() {
		return unicodeValue_vowels["aA"];
	});
	var r1 = /ai/g;
	text = text.replace(r1, function() {
		return unicodeValue_vowels["ai"];
	});
	var r1 = /aI/g;
	text = text.replace(r1, function() {
		return unicodeValue_vowels["aI"];
	});
	var r1 = /au/g;
	text = text.replace(r1, function() {
		return unicodeValue_vowels["au"];
	});
	var r1 = /aU/g;
	text = text.replace(r1, function() {
		return unicodeValue_vowels["au"];
	});
	var r1 = /ae/g;
	text = text.replace(r1, function() {
		return unicodeValue_vowels["ae"];
	});
	var r1 = /aE/g;
	text = text.replace(r1, function() {
		return unicodeValue_vowels["aE"];
	});
	var r1 = /ao/g;
	text = text.replace(r1, function() {
		return unicodeValue_vowels["ao"];
	});
	var r1 = /aO/g;
	text = text.replace(r1, function() {
		return unicodeValue_vowels["aO"];
	});

	// console.log("Iam here"+text);
	text = text.replace(/([A-z])/g, function(a) {
		//console.log(a);
		//if(typeof unicodeValue_vowels[a] != "undefined") 
		if(a in unicodeValue_vowels) {
			return chr = unicodeValue_vowels[a];
		} else {
			return a;
		}
	});
	//console.log("Iam here2"+text);
	text = text.replace(/([A-z])+/g, function(a) {
		if(a in unicodeValue) {
			return chr = unicodeValue[a];
		} else {
			return a;
		}
	});
	// console.log("Iam here3"+text);
	return text;
	//$("#output").val(text);

/* added by nagaraju V for keboard press */
}

//hindi-utf2wx
function convert_pan_utf2wx(text) {
	//var text = $("#input").val();
	
	var unicodeValue = new Array();
	var unicodeValue_vowels = new Array();
	unicodeValue_vowels["\u0A05"] = 'a';	//a
	unicodeValue_vowels["\u0A06"] = 'A';
	unicodeValue_vowels["\u0A07"] = 'i';
	unicodeValue_vowels["\u0A08"] = 'I';
	unicodeValue_vowels["\u0A09"] = 'u';
	unicodeValue_vowels["\u0A0A"] = 'U';
	unicodeValue_vowels["\u0A0B"] = 'q';
	unicodeValue_vowels["\u0A0C"] = 'lq';
	unicodeValue_vowels["\u0A0F"] = 'e';
	unicodeValue_vowels["\u0A10"] = 'E';
	unicodeValue_vowels["\u0A13"] = 'o';
	unicodeValue_vowels["\u0A14"] = 'O';
//	unicodeValue["\u0A01"] = 'z';	//z
	unicodeValue["\u0A33"] = 'lY';
	unicodeValue["\u0A45"] = 'EY';
	unicodeValue["\u0A46"] = 'eV';
	unicodeValue["\u0A49"] = 'OY';
	unicodeValue["\u0A4A"] = 'oV';

	/***********Three Character length words**************/
/*Uncommented By Nagaraju to allow display of below 3 letter characters*/
	unicodeValue_vowels["\u0A0D"] = 'EY';
	unicodeValue_vowels["\u0A0E"] = 'eV';
	
	unicodeValue_vowels["\u0A11"] = 'OY';
	unicodeValue_vowels["\u0A12"] = 'oV';

/* added by nagaraju V for keboard press */
//	unicodeValue["k_R"]='\u0A15\u0A4D\u0A37';
//	unicodeValue["w_r"]='\u0A24\u0A4D\u0A30';
//	unicodeValue["j_F"]='\u0A1C\u0A4D\u0A1E';

	/*unicodeValue_vowels["z"]='\u0A05\u0A01';
	unicodeValue_vowels["M"]='\u0A05\u0A02';
	unicodeValue_vowels["H"]='\u0A05\u0A03';
	unicodeValue_vowels["Q"]='\u0A60';*/

	/**************symbol mappings***********************/

	unicodeValue[";"] = ';';	//g;
	unicodeValue[":"] = ':';	//:
	unicodeValue["34"] = '\"';	//
	unicodeValue["39"] = '\'';	//'
	unicodeValue["44"] = ',';	//,
	unicodeValue["46"] = '.';	//.
	unicodeValue["47"] = '/';	///.
	unicodeValue["63"] = '?';	//?
	unicodeValue["<"] = '<';	//<
	unicodeValue[">"] = '>';	//>
	unicodeValue["91"] = '[';	//[
	unicodeValue["93"] = ']';	//]
	unicodeValue["123"] = '{';	//{
	unicodeValue["125"] = '}';	//}
	unicodeValue["40"] = '(';	//(
	unicodeValue["41"] = ')';	//)
	unicodeValue["64"] = '@';	//@
	unicodeValue["35"] = '#';	//#
	//unicodeValue["94"] = '94';	//#
	unicodeValue["^"] = '^';	//^
	unicodeValue["42"] = '*';	//*
	unicodeValue["\u0A4D"] = '';	//_
	unicodeValue["61"] = '=';	//=
	unicodeValue["43"] = '+';	//+
	unicodeValue["\u0A64"] = '|';	//|
	unicodeValue["~"] = '~';	//|
	unicodeValue["`"] = '`';	//|
	unicodeValue["\\"] = '\\';	//|


	/***************numbers mapping ***********************/

	unicodeValue["\u0A66"] = '0';	//0
	unicodeValue["\u0A67"] = '1';	//1
	unicodeValue["\u0A68"] = '2';	//2
	unicodeValue["\u0A69"] = '3';	//3
	unicodeValue["\u0A6A"] = '4';	//4
	unicodeValue["\u0A6B"] = '5';	//5
	unicodeValue["\u0A6C"] = '6';	//6
	unicodeValue["\u0A6D"] = '7';	//7
	unicodeValue["\u0A6E"] = '8';	//8
	unicodeValue["\u0A6F"] = '9';	//9

	/*****************a-z mappings***************************/

	unicodeValue["\u0A05"] = 'a';	//a
	unicodeValue["\u0A2C"] = 'b';	//b
	unicodeValue["\u0A1A"] = 'c';	//c
	unicodeValue["\u0A21"] = 'd';	//d
	unicodeValue["\u0A47"] = 'e';	//e
	unicodeValue["\u0A19"] = 'f';	//f
	unicodeValue["\u0A17"] = 'g';	//g
	unicodeValue["\u0A39"] = 'h';	//h
	unicodeValue["\u0A3F"] = 'i';	//i
	unicodeValue["\u0A1C"] = 'j';	//j
	unicodeValue["\u0A15"] = 'k';	//k
	unicodeValue["\u0A32"] = 'l';	//l
	unicodeValue["\u0A2E"] = 'm';	//m
	unicodeValue["\u0A28"] = 'n';	//n
	unicodeValue["\u0A4B"] = 'o';	//o
	unicodeValue["\u0A2A"] = 'p';	//p
	unicodeValue["\u0A43"] = 'q';	//q
	unicodeValue["\u0A30"] = 'r';	//r
	unicodeValue["\u0A38"] = 's';	//s
	unicodeValue["\u0A1F"] = 't';	//t
	unicodeValue["\u0A41"] = 'u';	//u
	unicodeValue["\u0A35"] = 'v';	//v
	unicodeValue["\u0A24"] = 'w';	//w
	unicodeValue["\u0A26"] = 'x';	//x
	unicodeValue["\u0A2F"] = 'y';	//y
	unicodeValue["\u0A01"] = 'z';	//z

	/*******************A-Z mappings*****************************/

	unicodeValue["\u0A3E"] = 'A';	//A
	unicodeValue["\u0A2D"] = 'B';	//B
	unicodeValue["\u0A1B"] = 'C';	//C
	unicodeValue["\u0A22"] = 'D';	//D
	unicodeValue["\u0A48"] = 'E';	//E
	unicodeValue["\u0A1E"] = 'F';	//F
	unicodeValue["\u0A18"] = 'G';	//G
	unicodeValue["\u0A03"] = 'H';	//H
	unicodeValue["\u0A40"] = 'I';	//I
	unicodeValue["\u0A1D"] = 'J';	//J
	unicodeValue["\u0A16"] = 'K';	//K
	//unicodeValue["L"] = 'L';	//L
	unicodeValue["\u0A02"] = 'M';	//M
	unicodeValue["\u0A23"] = 'N';	//N
	unicodeValue["\u0A4C"] = 'O';	//O
	unicodeValue["\u0A2B"] = 'P';	//P
	unicodeValue["\u0A44"] = 'Q';	//Q
	unicodeValue["\u0A37"] = 'R';	//R
	unicodeValue["\u0A36"] = 'S';	//S
	unicodeValue["\u0A20"] = 'T';	//T
	unicodeValue["\u0A42"] = 'U';	//U
	//unicodeValue["V"] = 'V';	//V
	unicodeValue["\u0A25"] = 'W';	//W
	unicodeValue["\u0A27"] = 'X';	//X
	unicodeValue["\u0A3D"] = 'Y';	//Y
	unicodeValue["\u0A3C"] = 'Z';	//Z
	//unicodeValue[89] = '\u0A26';
	//unicodeValue[90] = '\u0A01';
	//unicodeValue[90] = '\u0A3D';

	//CONSONANT+HALANT
	var r1 = /([\u0A15-\u0A39])\u0A4D/g;
	text = text.replace(r1,function(){
		return unicodeValue[arguments[1]]+unicodeValue["\u0A4D"];
	});

	//CONSONANT+NUKTA+MATRA+MODIFIER 
	var r1 = /([\u0A15-\u0A39])\u0A3C([\u0A3E-\u0A4C])([\u0A01-\u0A03])/g;
	text = text.replace(r1,function(){
		return unicodeValue[arguments[1]]+unicodeValue["\u0A3C"]+unicodeValue[arguments[2]]+unicodeValue[arguments[3]];
	});

	//CONSONANT+NUKTA+MATRA
	var r1 = /([\u0A15-\u0A39])\u0A3C([\u0A3E-\u0A4C])/g;
	text = text.replace(r1,function(){
		return unicodeValue[arguments[1]]+unicodeValue["\u0A3C"]+unicodeValue[arguments[2]];
	});

	//CONSONANT+NUKTA+MODIFIER
	var r1 = /([\u0A15-\u0A39])\u0A3C([\u0A01-\u0A03])/g;
	text = text.replace(r1,function(){
		return unicodeValue[arguments[1]]+unicodeValue["\u0A3C"]+unicodeValue[arguments[2]];
	});
	//CONSONANT+NUKTA
	var r1 = /([\u0A15-\u0A39])\u0A3C/g;
	text = text.replace(r1,function(){
		return unicodeValue[arguments[1]]+unicodeValue["\u0A3C"]+'a';
	});

	//CONSONANT+MATRA+MODIFIER 
	var r1 = /([\u0A15-\u0A39])([\u0A3E-\u0A4C])([\u0A01-\u0A03])/g;
	text = text.replace(r1,function(){
		return unicodeValue[arguments[1]]+unicodeValue[arguments[2]]+unicodeValue[arguments[3]];
	});

	//CONSONANT+MATRA 
	var r1 = /([\u0A15-\u0A39])([\u0A3E-\u0A4C])/g;
	text = text.replace(r1,function(){
		return unicodeValue[arguments[1]]+unicodeValue[arguments[2]];
	});

	//CONSONANT+MODIFIER
	var r1 = /([\u0A15-\u0A39])([\u0A01-\u0A03])/g;
	text = text.replace(r1,function(){
		return unicodeValue[arguments[1]]+'a'+unicodeValue[arguments[2]];
	});

	//CONSONANT
	var r1 = /([\u0A15-\u0A39])/g;
	text = text.replace(r1,function(){
		return unicodeValue[arguments[1]]+'a';
	});

	//VOWEL+MODIFIER,VOWEL
	var r1 = /([\u0A06-\u0A14])([\u0A01-\u0A03])/g;
	text = text.replace(r1,function(){
		return unicodeValue_vowels[arguments[1]]+unicodeValue[arguments[2]];
	});

	//VOWEL+MODIFIER,VOWEL
	var r1 = /([\u0A05])([\u0A01-\u0A03])/g;
	text = text.replace(r1,function(){
		return 'a'+unicodeValue[arguments[2]];
	});
	//console.log("Iam here " +text);

	//VOWEL+MODIFIER,VOWEL
	var r1 = /([\u0A06-\u0A14])/g;
	text = text.replace(r1,function(){
		return unicodeValue_vowels[arguments[1]];
	});
	//console.log("Iam here " +text);

	text = text.replace(/([\u0A00-\u0AFF])/g, function(a) {
		//console.log(a);
		//if(typeof unicodeValue_vowels[a] != "undefined") 
		if(a in unicodeValue_vowels) {
			return chr = unicodeValue_vowels[a];
		} else {
			return a;
		}
	});

	//console.log("Iam here"+text);
	text = text.replace(/([\u0A00-\u0AFF])/g, function(a) {
		if(a in unicodeValue) {
			return chr = unicodeValue[a];
		} else {
			return a;
		}
	});
	//console.log("Iam here2"+text);
	//console.log("Iam here3"+text);
	//$("#output").val(text);
	return text;

/* added by nagaraju V for keboard press */
}
