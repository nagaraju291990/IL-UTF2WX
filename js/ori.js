//hindi-wx2utf
function convert_ori_wx2utf(text) {
    console.log(text);
	//var text = $("#input").val();
	
	var unicodeValue = new Array();
	var unicodeValue_vowels = new Array();
	unicodeValue_vowels["a"] = '\u0B05';	//a
	unicodeValue_vowels["A"]='\u0B06';
	unicodeValue_vowels["i"]='\u0B07';
	unicodeValue_vowels["I"]='\u0B08';
	unicodeValue_vowels["u"]='\u0B09';
	unicodeValue_vowels["U"]='\u0B0A';
	unicodeValue_vowels["q"]='\u0B0B';
	unicodeValue_vowels["lq"]='\u0B0C';
	unicodeValue_vowels["e"]='\u0B0F';
	unicodeValue_vowels["E"]='\u0B10';
	unicodeValue_vowels["o"]='\u0B13';
	unicodeValue_vowels["O"]='\u0B14';
	
	// unicodeValue_vowels["aa"] = '\u0B05';	//a
	unicodeValue_vowels["aA"]='\u0B06';
	unicodeValue_vowels["ai"]='\u0B07';
	unicodeValue_vowels["aI"]='\u0B08';
	unicodeValue_vowels["au"]='\u0B09';
	unicodeValue_vowels["aU"]='\u0B0A';
	unicodeValue_vowels["aq"]='\u0B0B';
	unicodeValue_vowels["alq"]='\u0B0C';
	unicodeValue_vowels["ae"]='\u0B0F';
	unicodeValue_vowels["aE"]='\u0B10';
	unicodeValue_vowels["ao"]='\u0B13';
	unicodeValue_vowels["aO"]='\u0B14';

//	unicodeValue_vowels["z"] = '\u0B01';	//z
	unicodeValue["lY"]='\u0B33';
	unicodeValue["EY"]='\u0B45';
	unicodeValue["eV"]='\u0B46';
	unicodeValue["OY"]='\u0B49';
	unicodeValue["oV"]='\u0B4A';

	/***********Three Character length words**************/
/*Uncommented By Nagaraju to allow display of below 3 letter characters*/
	unicodeValue_vowels["EY"]='\u0B0D';
	unicodeValue_vowels["eV"]='\u0B0E';
	
	unicodeValue_vowels["OY"]='\u0B11';
	unicodeValue_vowels["oV"]='\u0B12';
	unicodeValue_vowels["aEY"]='\u0B0D';
	unicodeValue_vowels["aeV"]='\u0B0E';
	
	unicodeValue_vowels["aOY"]='\u0B11';
	unicodeValue_vowels["aoV"]='\u0B12';

/* added by nagaraju V for keboard press */
//	unicodeValue["k_R"]='\u0B15\u0B4D\u0B37';
//	unicodeValue["w_r"]='\u0B24\u0B4D\u0B30';
//	unicodeValue["j_F"]='\u0B1C\u0B4D\u0B1E';

	/*unicodeValue_vowels["z"]='\u0B05\u0B01';
	unicodeValue_vowels["M"]='\u0B05\u0B02';
	unicodeValue_vowels["H"]='\u0B05\u0B03';
	unicodeValue_vowels["Q"]='\u0B60';*/

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
	unicodeValue["_"] = '\u0B4D';	//_
	unicodeValue["="] = '61';	//=
	unicodeValue["+"] = '43';	//+
	unicodeValue["|"] = '\u0B64';	//|
	unicodeValue["~"] = '~';	//|
	unicodeValue["`"] = '`';	//|
	unicodeValue["\\"] = '\\';	//|


	/***************numbers mapping ***********************/

	unicodeValue["0"] = '\u0B66';	//0
	unicodeValue["1"] = '\u0B67';	//1
	unicodeValue["2"] = '\u0B68';	//2
	unicodeValue["3"] = '\u0B69';	//3
	unicodeValue["4"] = '\u0B6A';	//4
	unicodeValue["5"] = '\u0B6B';	//5
	unicodeValue["6"] = '\u0B6C';	//6
	unicodeValue["7"] = '\u0B6D';	//7
	unicodeValue["8"] = '\u0B6E';	//8
	unicodeValue["9"] = '\u0B6F';	//9

	/*****************a-z mappings***************************/

	unicodeValue["a"] = '\u0B05';	//a
	unicodeValue["b"] = '\u0B2C';	//b
	unicodeValue["c"] = '\u0B1A';	//c
	unicodeValue["d"] = '\u0B21';	//d
	unicodeValue["e"] = '\u0B47';	//e
	unicodeValue["f"] = '\u0B19';	//f
	unicodeValue["g"] = '\u0B17';	//g
	unicodeValue["h"] = '\u0B39';	//h
	unicodeValue["i"] = '\u0B3F';	//i
	unicodeValue["j"] = '\u0B1C';	//j
	unicodeValue["k"] = '\u0B15';	//k
	unicodeValue["l"] = '\u0B32';	//l
	unicodeValue["m"] = '\u0B2E';	//m
	unicodeValue["n"] = '\u0B28';	//n
	unicodeValue["o"] = '\u0B4B';	//o
	unicodeValue["p"] = '\u0B2A';	//p
	unicodeValue["q"] = '\u0B43';	//q
	unicodeValue["r"] = '\u0B30';	//r
	unicodeValue["s"] = '\u0B38';	//s
	unicodeValue["t"] = '\u0B1F';	//t
	unicodeValue["u"] = '\u0B41';	//u
	unicodeValue["v"] = '\u0B35';	//v
	unicodeValue["w"] = '\u0B24';	//w
	unicodeValue["x"] = '\u0B26';	//x
	unicodeValue["y"] = '\u0B2F';	//y
	unicodeValue["z"] = '\u0B01';	//z

	/*******************A-Z mappings*****************************/

	unicodeValue["A"] = '\u0B3E';	//A
	unicodeValue["B"] = '\u0B2D';	//B
	unicodeValue["C"] = '\u0B1B';	//C
	unicodeValue["D"] = '\u0B22';	//D
	unicodeValue["E"] = '\u0B48';	//E
	unicodeValue["F"] = '\u0B1E';	//F
	unicodeValue["G"] = '\u0B18';	//G
	unicodeValue["H"] = '\u0B03';	//H
	unicodeValue["I"] = '\u0B40';	//I
	unicodeValue["J"] = '\u0B1D';	//J
	unicodeValue["K"] = '\u0B16';	//K
	//unicodeValue["L"] = 'L';	//L
	unicodeValue["M"] = '\u0B02';	//M
	unicodeValue["N"] = '\u0B23';	//N
	unicodeValue["O"] = '\u0B4C';	//O
	unicodeValue["P"] = '\u0B2B';	//P
	unicodeValue["Q"] = '\u0B44';	//Q
	unicodeValue["R"] = '\u0B37';	//R
	unicodeValue["S"] = '\u0B36';	//S
	unicodeValue["T"] = '\u0B20';	//T
	unicodeValue["U"] = '\u0B42';	//U
	//unicodeValue["V"] = 'V';	//V
	unicodeValue["W"] = '\u0B25';	//W
	unicodeValue["X"] = '\u0B27';	//X
	unicodeValue["Y"] = '\u0B3D';	//Y
	unicodeValue["Z"] = '\u0B3C';	//Z
	//unicodeValue[89] = '\u0B26';
	//unicodeValue[90] = '\u0B01';
	//unicodeValue[90] = '\u0B3D';

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
	text = text.replace(/([A-Za-z])/g, function(a) {
		//console.log(a);
		//if(typeof unicodeValue_vowels[a] != "undefined") 
		if(a in unicodeValue_vowels) {
			return chr = unicodeValue_vowels[a];
		} else {
			return a;
		}
	});
	//console.log("Iam here2"+text);
	text = text.replace(/([A-Za-z])+/g, function(a) {
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
function convert_ori_utf2wx(text) {
	//var text = $("#input").val();
	
	var unicodeValue = new Array();
	var unicodeValue_vowels = new Array();
	unicodeValue_vowels["\u0B05"] = 'a';	//a
	unicodeValue_vowels["\u0B06"] = 'A';
	unicodeValue_vowels["\u0B07"] = 'i';
	unicodeValue_vowels["\u0B08"] = 'I';
	unicodeValue_vowels["\u0B09"] = 'u';
	unicodeValue_vowels["\u0B0A"] = 'U';
	unicodeValue_vowels["\u0B0B"] = 'q';
	unicodeValue_vowels["\u0B0C"] = 'lq';
	unicodeValue_vowels["\u0B0F"] = 'e';
	unicodeValue_vowels["\u0B10"] = 'E';
	unicodeValue_vowels["\u0B13"] = 'o';
	unicodeValue_vowels["\u0B14"] = 'O';
//	unicodeValue["\u0B01"] = 'z';	//z
	unicodeValue["\u0B33"] = 'lY';
	unicodeValue["\u0B45"] = 'EY';
	unicodeValue["\u0B46"] = 'eV';
	unicodeValue["\u0B49"] = 'OY';
	unicodeValue["\u0B4A"] = 'oV';

	/***********Three Character length words**************/
/*Uncommented By Nagaraju to allow display of below 3 letter characters*/
	unicodeValue_vowels["\u0B0D"] = 'EY';
	unicodeValue_vowels["\u0B0E"] = 'eV';
	
	unicodeValue_vowels["\u0B11"] = 'OY';
	unicodeValue_vowels["\u0B12"] = 'oV';

/* added by nagaraju V for keboard press */
//	unicodeValue["k_R"]='\u0B15\u0B4D\u0B37';
//	unicodeValue["w_r"]='\u0B24\u0B4D\u0B30';
//	unicodeValue["j_F"]='\u0B1C\u0B4D\u0B1E';

	/*unicodeValue_vowels["z"]='\u0B05\u0B01';
	unicodeValue_vowels["M"]='\u0B05\u0B02';
	unicodeValue_vowels["H"]='\u0B05\u0B03';
	unicodeValue_vowels["Q"]='\u0B60';*/

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
	unicodeValue["\u0B4D"] = '';	//_
	unicodeValue["61"] = '=';	//=
	unicodeValue["43"] = '+';	//+
	unicodeValue["\u0B64"] = '|';	//|
	unicodeValue["~"] = '~';	//|
	unicodeValue["`"] = '`';	//|
	unicodeValue["\\"] = '\\';	//|


	/***************numbers mapping ***********************/

	unicodeValue["\u0B66"] = '0';	//0
	unicodeValue["\u0B67"] = '1';	//1
	unicodeValue["\u0B68"] = '2';	//2
	unicodeValue["\u0B69"] = '3';	//3
	unicodeValue["\u0B6A"] = '4';	//4
	unicodeValue["\u0B6B"] = '5';	//5
	unicodeValue["\u0B6C"] = '6';	//6
	unicodeValue["\u0B6D"] = '7';	//7
	unicodeValue["\u0B6E"] = '8';	//8
	unicodeValue["\u0B6F"] = '9';	//9

	/*****************a-z mappings***************************/

	unicodeValue["\u0B05"] = 'a';	//a
	unicodeValue["\u0B2C"] = 'b';	//b
	unicodeValue["\u0B1A"] = 'c';	//c
	unicodeValue["\u0B21"] = 'd';	//d
	unicodeValue["\u0B47"] = 'e';	//e
	unicodeValue["\u0B19"] = 'f';	//f
	unicodeValue["\u0B17"] = 'g';	//g
	unicodeValue["\u0B39"] = 'h';	//h
	unicodeValue["\u0B3F"] = 'i';	//i
	unicodeValue["\u0B1C"] = 'j';	//j
	unicodeValue["\u0B15"] = 'k';	//k
	unicodeValue["\u0B32"] = 'l';	//l
	unicodeValue["\u0B2E"] = 'm';	//m
	unicodeValue["\u0B28"] = 'n';	//n
	unicodeValue["\u0B4B"] = 'o';	//o
	unicodeValue["\u0B2A"] = 'p';	//p
	unicodeValue["\u0B43"] = 'q';	//q
	unicodeValue["\u0B30"] = 'r';	//r
	unicodeValue["\u0B38"] = 's';	//s
	unicodeValue["\u0B1F"] = 't';	//t
	unicodeValue["\u0B41"] = 'u';	//u
	unicodeValue["\u0B35"] = 'v';	//v
	unicodeValue["\u0B24"] = 'w';	//w
	unicodeValue["\u0B26"] = 'x';	//x
	unicodeValue["\u0B2F"] = 'y';	//y
	unicodeValue["\u0B01"] = 'z';	//z

	/*******************A-Z mappings*****************************/

	unicodeValue["\u0B3E"] = 'A';	//A
	unicodeValue["\u0B2D"] = 'B';	//B
	unicodeValue["\u0B1B"] = 'C';	//C
	unicodeValue["\u0B22"] = 'D';	//D
	unicodeValue["\u0B48"] = 'E';	//E
	unicodeValue["\u0B1E"] = 'F';	//F
	unicodeValue["\u0B18"] = 'G';	//G
	unicodeValue["\u0B03"] = 'H';	//H
	unicodeValue["\u0B40"] = 'I';	//I
	unicodeValue["\u0B1D"] = 'J';	//J
	unicodeValue["\u0B16"] = 'K';	//K
	//unicodeValue["L"] = 'L';	//L
	unicodeValue["\u0B02"] = 'M';	//M
	unicodeValue["\u0B23"] = 'N';	//N
	unicodeValue["\u0B4C"] = 'O';	//O
	unicodeValue["\u0B2B"] = 'P';	//P
	unicodeValue["\u0B44"] = 'Q';	//Q
	unicodeValue["\u0B37"] = 'R';	//R
	unicodeValue["\u0B36"] = 'S';	//S
	unicodeValue["\u0B20"] = 'T';	//T
	unicodeValue["\u0B42"] = 'U';	//U
	//unicodeValue["V"] = 'V';	//V
	unicodeValue["\u0B25"] = 'W';	//W
	unicodeValue["\u0B27"] = 'X';	//X
	unicodeValue["\u0B3D"] = 'Y';	//Y
	unicodeValue["\u0B3C"] = 'Z';	//Z
	//unicodeValue[89] = '\u0B26';
	//unicodeValue[90] = '\u0B01';
	//unicodeValue[90] = '\u0B3D';

	//CONSONANT+HALANT
	var r1 = /([\u0B15-\u0B39])\u0B4D/g;
	text = text.replace(r1,function(){
		return unicodeValue[arguments[1]]+unicodeValue["\u0B4D"];
	});

	//CONSONANT+NUKTA+MATRA+MODIFIER 
	var r1 = /([\u0B15-\u0B39])\u0B3C([\u0B3E-\u0B4C])([\u0B01-\u0B03])/g;
	text = text.replace(r1,function(){
		return unicodeValue[arguments[1]]+unicodeValue["\u0B3C"]+unicodeValue[arguments[2]]+unicodeValue[arguments[3]];
	});

	//CONSONANT+NUKTA+MATRA
	var r1 = /([\u0B15-\u0B39])\u0B3C([\u0B3E-\u0B4C])/g;
	text = text.replace(r1,function(){
		return unicodeValue[arguments[1]]+unicodeValue["\u0B3C"]+unicodeValue[arguments[2]];
	});

	//CONSONANT+NUKTA+MODIFIER
	var r1 = /([\u0B15-\u0B39])\u0B3C([\u0B01-\u0B03])/g;
	text = text.replace(r1,function(){
		return unicodeValue[arguments[1]]+unicodeValue["\u0B3C"]+unicodeValue[arguments[2]];
	});
	//CONSONANT+NUKTA
	var r1 = /([\u0B15-\u0B39])\u0B3C/g;
	text = text.replace(r1,function(){
		return unicodeValue[arguments[1]]+unicodeValue["\u0B3C"]+'a';
	});

	//CONSONANT+MATRA+MODIFIER 
	var r1 = /([\u0B15-\u0B39])([\u0B3E-\u0B4C])([\u0B01-\u0B03])/g;
	text = text.replace(r1,function(){
		return unicodeValue[arguments[1]]+unicodeValue[arguments[2]]+unicodeValue[arguments[3]];
	});

	//CONSONANT+MATRA 
	var r1 = /([\u0B15-\u0B39])([\u0B3E-\u0B4C])/g;
	text = text.replace(r1,function(){
		return unicodeValue[arguments[1]]+unicodeValue[arguments[2]];
	});

	//CONSONANT+MODIFIER
	var r1 = /([\u0B15-\u0B39])([\u0B01-\u0B03])/g;
	text = text.replace(r1,function(){
		return unicodeValue[arguments[1]]+'a'+unicodeValue[arguments[2]];
	});

	//CONSONANT
	var r1 = /([\u0B15-\u0B39])/g;
	text = text.replace(r1,function(){
		return unicodeValue[arguments[1]]+'a';
	});

	//VOWEL+MODIFIER,VOWEL
	var r1 = /([\u0B06-\u0B14])([\u0B01-\u0B03])/g;
	text = text.replace(r1,function(){
		return unicodeValue_vowels[arguments[1]]+unicodeValue[arguments[2]];
	});

	//VOWEL+MODIFIER,VOWEL
	var r1 = /([\u0B05])([\u0B01-\u0B03])/g;
	text = text.replace(r1,function(){
		return 'a'+unicodeValue[arguments[2]];
	});
	//console.log("Iam here " +text);

	//VOWEL+MODIFIER,VOWEL
	var r1 = /([\u0B06-\u0B14])/g;
	text = text.replace(r1,function(){
		return unicodeValue_vowels[arguments[1]];
	});
	//console.log("Iam here " +text);

	text = text.replace(/([\u0B00-\u0BFF])/g, function(a) {
		//console.log(a);
		//if(typeof unicodeValue_vowels[a] != "undefined") 
		if(a in unicodeValue_vowels) {
			return chr = unicodeValue_vowels[a];
		} else {
			return a;
		}
	});

	//console.log("Iam here"+text);
	text = text.replace(/([\u0B00-\u0BFF])/g, function(a) {
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
