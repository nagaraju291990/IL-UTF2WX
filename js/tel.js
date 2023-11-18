//telugu-wx2utf
function convert_tel_wx2utf(text) {
    console.log(text);
	//var text = $("#input").val();
	
	var unicodeValue = new Array();
	var unicodeValue_vowels = new Array();
	unicodeValue_vowels["a"] = '\u0C05';	//a
	unicodeValue_vowels["A"]='\u0C06';
	unicodeValue_vowels["i"]='\u0C07';
	unicodeValue_vowels["I"]='\u0C08';
	unicodeValue_vowels["u"]='\u0C09';
	unicodeValue_vowels["U"]='\u0C0A';
	unicodeValue_vowels["q"]='\u0C0B';
	unicodeValue_vowels["lq"]='\u0C0C';
	unicodeValue_vowels["e"]='\u0C0F';
	unicodeValue_vowels["E"]='\u0C10';
	unicodeValue_vowels["o"]='\u0C13';
	unicodeValue_vowels["O"]='\u0C14';
	
	// unicodeValue_vowels["aa"] = '\u0C05';	//a
	unicodeValue_vowels["aA"]='\u0C06';
	unicodeValue_vowels["ai"]='\u0C07';
	unicodeValue_vowels["aI"]='\u0C08';
	unicodeValue_vowels["au"]='\u0C09';
	unicodeValue_vowels["aU"]='\u0C0A';
	unicodeValue_vowels["aq"]='\u0C0B';
	unicodeValue_vowels["alq"]='\u0C0C';
	unicodeValue_vowels["ae"]='\u0C0F';
	unicodeValue_vowels["aE"]='\u0C10';
	unicodeValue_vowels["ao"]='\u0C13';
	unicodeValue_vowels["aO"]='\u0C14';

//	unicodeValue_vowels["z"] = '\u0C01';	//z
	unicodeValue["lY"]='\u0C33';
	unicodeValue["EY"]='\u0C45';
	unicodeValue["eV"]='\u0C46';
	unicodeValue["OY"]='\u0C49';
	unicodeValue["oV"]='\u0C4A';

	/***********Three Character length words**************/
/*Uncommented By Nagaraju to allow display of below 3 letter characters*/
	unicodeValue_vowels["EY"]='\u0C0D';
	unicodeValue_vowels["eV"]='\u0C0E';
	
	unicodeValue_vowels["OY"]='\u0C11';
	unicodeValue_vowels["oV"]='\u0C12';
	unicodeValue_vowels["aEY"]='\u0C0D';
	unicodeValue_vowels["aeV"]='\u0C0E';
	
	unicodeValue_vowels["aOY"]='\u0C11';
	unicodeValue_vowels["aoV"]='\u0C12';

/* added by nagaraju V for keboard press */
//	unicodeValue["k_R"]='\u0C15\u0C4D\u0C37';
//	unicodeValue["w_r"]='\u0C24\u0C4D\u0C30';
//	unicodeValue["j_F"]='\u0C1C\u0C4D\u0C1E';

	/*unicodeValue_vowels["z"]='\u0C05\u0C01';
	unicodeValue_vowels["M"]='\u0C05\u0C02';
	unicodeValue_vowels["H"]='\u0C05\u0C03';
	unicodeValue_vowels["Q"]='\u0C60';*/

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
	unicodeValue["["] = '91';	//[
	unicodeValue["]"] = '93';	//]
	unicodeValue["{"] = '123';	//{
	unicodeValue["}"] = '125';	//}
	unicodeValue["("] = '40';	//(
	unicodeValue[")"] = '41';	//)
	unicodeValue["@"] = '64';	//@
	unicodeValue["#"] = '35';	//#
	//unicodeValue["94"] = '94';	//#
	unicodeValue["^"] = '^';	//^
	unicodeValue["*"] = '42';	//*
	unicodeValue["_"] = '\u0C4D';	//_
	unicodeValue["="] = '61';	//=
	unicodeValue["+"] = '43';	//+
	unicodeValue["|"] = '\u0C64';	//|
	unicodeValue["~"] = '~';	//|
	unicodeValue["`"] = '`';	//|
	unicodeValue["\\"] = '\\';	//|


	/***************numbers mapping ***********************/

	unicodeValue["0"] = '\u0C66';	//0
	unicodeValue["1"] = '\u0C67';	//1
	unicodeValue["2"] = '\u0C68';	//2
	unicodeValue["3"] = '\u0C69';	//3
	unicodeValue["4"] = '\u0C6A';	//4
	unicodeValue["5"] = '\u0C6B';	//5
	unicodeValue["6"] = '\u0C6C';	//6
	unicodeValue["7"] = '\u0C6D';	//7
	unicodeValue["8"] = '\u0C6E';	//8
	unicodeValue["9"] = '\u0C6F';	//9

	/*****************a-z mappings***************************/

	unicodeValue["a"] = '\u0C05';	//a
	unicodeValue["b"] = '\u0C2C';	//b
	unicodeValue["c"] = '\u0C1A';	//c
	unicodeValue["d"] = '\u0C21';	//d
	unicodeValue["e"] = '\u0C47';	//e
	unicodeValue["f"] = '\u0C19';	//f
	unicodeValue["g"] = '\u0C17';	//g
	unicodeValue["h"] = '\u0C39';	//h
	unicodeValue["i"] = '\u0C3F';	//i
	unicodeValue["j"] = '\u0C1C';	//j
	unicodeValue["k"] = '\u0C15';	//k
	unicodeValue["l"] = '\u0C32';	//l
	unicodeValue["m"] = '\u0C2E';	//m
	unicodeValue["n"] = '\u0C28';	//n
	unicodeValue["o"] = '\u0C4B';	//o
	unicodeValue["p"] = '\u0C2A';	//p
	unicodeValue["q"] = '\u0C43';	//q
	unicodeValue["r"] = '\u0C30';	//r
	unicodeValue["s"] = '\u0C38';	//s
	unicodeValue["t"] = '\u0C1F';	//t
	unicodeValue["u"] = '\u0C41';	//u
	unicodeValue["v"] = '\u0C35';	//v
	unicodeValue["w"] = '\u0C24';	//w
	unicodeValue["x"] = '\u0C26';	//x
	unicodeValue["y"] = '\u0C2F';	//y
	unicodeValue["z"] = '\u0C01';	//z

	/*******************A-Z mappings*****************************/

	unicodeValue["A"] = '\u0C3E';	//A
	unicodeValue["B"] = '\u0C2D';	//B
	unicodeValue["C"] = '\u0C1B';	//C
	unicodeValue["D"] = '\u0C22';	//D
	unicodeValue["E"] = '\u0C48';	//E
	unicodeValue["F"] = '\u0C1E';	//F
	unicodeValue["G"] = '\u0C18';	//G
	unicodeValue["H"] = '\u0C03';	//H
	unicodeValue["I"] = '\u0C40';	//I
	unicodeValue["J"] = '\u0C1D';	//J
	unicodeValue["K"] = '\u0C16';	//K
	//unicodeValue["L"] = 'L';	//L
	unicodeValue["M"] = '\u0C02';	//M
	unicodeValue["N"] = '\u0C23';	//N
	unicodeValue["O"] = '\u0C4C';	//O
	unicodeValue["P"] = '\u0C2B';	//P
	unicodeValue["Q"] = '\u0C44';	//Q
	unicodeValue["R"] = '\u0C37';	//R
	unicodeValue["S"] = '\u0C36';	//S
	unicodeValue["T"] = '\u0C20';	//T
	unicodeValue["U"] = '\u0C42';	//U
	//unicodeValue["V"] = 'V';	//V
	unicodeValue["W"] = '\u0C25';	//W
	unicodeValue["X"] = '\u0C27';	//X
	unicodeValue["Y"] = '\u0C3D';	//Y
	unicodeValue["Z"] = '\u0C3C';	//Z
	//unicodeValue[89] = '\u0C26';
	//unicodeValue[90] = '\u0C01';
	//unicodeValue[90] = '\u0C3D';

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

	if(numbersConvertFlag == 1) {
	// console.log("Iam here"+text);
		text = text.replace(/([A-z0-9])/g, function(a) {
			//console.log(a);
			//if(typeof unicodeValue_vowels[a] != "undefined") 
			if(a in unicodeValue_vowels) {
				return chr = unicodeValue_vowels[a];
			} else {
				return a;
			}
		});
		//console.log("Iam here2"+text);
		text = text.replace(/([A-z0-9])+/g, function(a) {
			if(a in unicodeValue) {
				return chr = unicodeValue[a];
			} else {
				return a;
			}
		});
	} else {
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
	}
	// console.log("Iam here3"+text);
	return text;
	//$("#output").val(text);

/* added by nagaraju V for keboard press */
}

//hindi-utf2wx
function convert_tel_utf2wx(text) {
	//var text = $("#input").val();
	
	var unicodeValue = new Array();
	var unicodeValue_vowels = new Array();
	unicodeValue_vowels["\u0C05"] = 'a';	//a
	unicodeValue_vowels["\u0C06"] = 'A';
	unicodeValue_vowels["\u0C07"] = 'i';
	unicodeValue_vowels["\u0C08"] = 'I';
	unicodeValue_vowels["\u0C09"] = 'u';
	unicodeValue_vowels["\u0C0A"] = 'U';
	unicodeValue_vowels["\u0C0B"] = 'q';
	unicodeValue_vowels["\u0C0C"] = 'lq';
	unicodeValue_vowels["\u0C0F"] = 'e';
	unicodeValue_vowels["\u0C10"] = 'E';
	unicodeValue_vowels["\u0C13"] = 'o';
	unicodeValue_vowels["\u0C14"] = 'O';
//	unicodeValue["\u0C01"] = 'z';	//z
	unicodeValue["\u0C33"] = 'lY';
	unicodeValue["\u0C45"] = 'EY';
	unicodeValue["\u0C46"] = 'eV';
	unicodeValue["\u0C49"] = 'OY';
	unicodeValue["\u0C4A"] = 'oV';

	/***********Three Character length words**************/
/*Uncommented By Nagaraju to allow display of below 3 letter characters*/
	unicodeValue_vowels["\u0C0D"] = 'EY';
	unicodeValue_vowels["\u0C0E"] = 'eV';
	
	unicodeValue_vowels["\u0C11"] = 'OY';
	unicodeValue_vowels["\u0C12"] = 'oV';

/* added by nagaraju V for keboard press */
//	unicodeValue["k_R"]='\u0C15\u0C4D\u0C37';
//	unicodeValue["w_r"]='\u0C24\u0C4D\u0C30';
//	unicodeValue["j_F"]='\u0C1C\u0C4D\u0C1E';

	/*unicodeValue_vowels["z"]='\u0C05\u0C01';
	unicodeValue_vowels["M"]='\u0C05\u0C02';
	unicodeValue_vowels["H"]='\u0C05\u0C03';
	unicodeValue_vowels["Q"]='\u0C60';*/

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
	unicodeValue["\u0C4D"] = '';	//_
	unicodeValue["61"] = '=';	//=
	unicodeValue["43"] = '+';	//+
	unicodeValue["\u0C64"] = '|';	//|
	unicodeValue["~"] = '~';	//|
	unicodeValue["`"] = '`';	//|
	unicodeValue["\\"] = '\\';	//|


	/***************numbers mapping ***********************/

	unicodeValue["\u0C66"] = '0';	//0
	unicodeValue["\u0C67"] = '1';	//1
	unicodeValue["\u0C68"] = '2';	//2
	unicodeValue["\u0C69"] = '3';	//3
	unicodeValue["\u0C6A"] = '4';	//4
	unicodeValue["\u0C6B"] = '5';	//5
	unicodeValue["\u0C6C"] = '6';	//6
	unicodeValue["\u0C6D"] = '7';	//7
	unicodeValue["\u0C6E"] = '8';	//8
	unicodeValue["\u0C6F"] = '9';	//9

	/*****************a-z mappings***************************/

	unicodeValue["\u0C05"] = 'a';	//a
	unicodeValue["\u0C2C"] = 'b';	//b
	unicodeValue["\u0C1A"] = 'c';	//c
	unicodeValue["\u0C21"] = 'd';	//d
	unicodeValue["\u0C47"] = 'e';	//e
	unicodeValue["\u0C19"] = 'f';	//f
	unicodeValue["\u0C17"] = 'g';	//g
	unicodeValue["\u0C39"] = 'h';	//h
	unicodeValue["\u0C3F"] = 'i';	//i
	unicodeValue["\u0C1C"] = 'j';	//j
	unicodeValue["\u0C15"] = 'k';	//k
	unicodeValue["\u0C32"] = 'l';	//l
	unicodeValue["\u0C2E"] = 'm';	//m
	unicodeValue["\u0C28"] = 'n';	//n
	unicodeValue["\u0C4B"] = 'o';	//o
	unicodeValue["\u0C2A"] = 'p';	//p
	unicodeValue["\u0C43"] = 'q';	//q
	unicodeValue["\u0C30"] = 'r';	//r
	unicodeValue["\u0C38"] = 's';	//s
	unicodeValue["\u0C1F"] = 't';	//t
	unicodeValue["\u0C41"] = 'u';	//u
	unicodeValue["\u0C35"] = 'v';	//v
	unicodeValue["\u0C24"] = 'w';	//w
	unicodeValue["\u0C26"] = 'x';	//x
	unicodeValue["\u0C2F"] = 'y';	//y
	unicodeValue["\u0C01"] = 'z';	//z

	/*******************A-Z mappings*****************************/

	unicodeValue["\u0C3E"] = 'A';	//A
	unicodeValue["\u0C2D"] = 'B';	//B
	unicodeValue["\u0C1B"] = 'C';	//C
	unicodeValue["\u0C22"] = 'D';	//D
	unicodeValue["\u0C48"] = 'E';	//E
	unicodeValue["\u0C1E"] = 'F';	//F
	unicodeValue["\u0C18"] = 'G';	//G
	unicodeValue["\u0C03"] = 'H';	//H
	unicodeValue["\u0C40"] = 'I';	//I
	unicodeValue["\u0C1D"] = 'J';	//J
	unicodeValue["\u0C16"] = 'K';	//K
	//unicodeValue["L"] = 'L';	//L
	unicodeValue["\u0C02"] = 'M';	//M
	unicodeValue["\u0C23"] = 'N';	//N
	unicodeValue["\u0C4C"] = 'O';	//O
	unicodeValue["\u0C2B"] = 'P';	//P
	unicodeValue["\u0C44"] = 'Q';	//Q
	unicodeValue["\u0C37"] = 'R';	//R
	unicodeValue["\u0C36"] = 'S';	//S
	unicodeValue["\u0C20"] = 'T';	//T
	unicodeValue["\u0C42"] = 'U';	//U
	//unicodeValue["V"] = 'V';	//V
	unicodeValue["\u0C25"] = 'W';	//W
	unicodeValue["\u0C27"] = 'X';	//X
	unicodeValue["\u0C3D"] = 'Y';	//Y
	unicodeValue["\u0C3C"] = 'Z';	//Z
	//unicodeValue[89] = '\u0C26';
	//unicodeValue[90] = '\u0C01';
	//unicodeValue[90] = '\u0C3D';

	//CONSONANT+HALANT
	var r1 = /([\u0C15-\u0C39])\u0C4D/g;
	text = text.replace(r1,function(){
		return unicodeValue[arguments[1]]+unicodeValue["\u0C4D"];
	});

	//CONSONANT+NUKTA+MATRA+MODIFIER 
	var r1 = /([\u0C15-\u0C39])\u0C3C([\u0C3E-\u0C4C])([\u0C01-\u0C03])/g;
	text = text.replace(r1,function(){
		return unicodeValue[arguments[1]]+unicodeValue["\u0C3C"]+unicodeValue[arguments[2]]+unicodeValue[arguments[3]];
	});

	//CONSONANT+NUKTA+MATRA
	var r1 = /([\u0C15-\u0C39])\u0C3C([\u0C3E-\u0C4C])/g;
	text = text.replace(r1,function(){
		return unicodeValue[arguments[1]]+unicodeValue["\u0C3C"]+unicodeValue[arguments[2]];
	});

	//CONSONANT+NUKTA+MODIFIER
	var r1 = /([\u0C15-\u0C39])\u0C3C([\u0C01-\u0C03])/g;
	text = text.replace(r1,function(){
		return unicodeValue[arguments[1]]+unicodeValue["\u0C3C"]+unicodeValue[arguments[2]];
	});
	//CONSONANT+NUKTA
	var r1 = /([\u0C15-\u0C39])\u0C3C/g;
	text = text.replace(r1,function(){
		return unicodeValue[arguments[1]]+unicodeValue["\u0C3C"]+'a';
	});

	//CONSONANT+MATRA+MODIFIER 
	var r1 = /([\u0C15-\u0C39])([\u0C3E-\u0C4C])([\u0C01-\u0C03])/g;
	text = text.replace(r1,function(){
		return unicodeValue[arguments[1]]+unicodeValue[arguments[2]]+unicodeValue[arguments[3]];
	});

	//CONSONANT+MATRA 
	var r1 = /([\u0C15-\u0C39])([\u0C3E-\u0C4C])/g;
	text = text.replace(r1,function(){
		return unicodeValue[arguments[1]]+unicodeValue[arguments[2]];
	});

	//CONSONANT+MODIFIER
	var r1 = /([\u0C15-\u0C39])([\u0C01-\u0C03])/g;
	text = text.replace(r1,function(){
		return unicodeValue[arguments[1]]+'a'+unicodeValue[arguments[2]];
	});

	//CONSONANT
	var r1 = /([\u0C15-\u0C39])/g;
	text = text.replace(r1,function(){
		return unicodeValue[arguments[1]]+'a';
	});

	//VOWEL+MODIFIER,VOWEL
	var r1 = /([\u0C06-\u0C14])([\u0C01-\u0C03])/g;
	text = text.replace(r1,function(){
		return unicodeValue_vowels[arguments[1]]+unicodeValue[arguments[2]];
	});

	//VOWEL+MODIFIER,VOWEL
	var r1 = /([\u0C05])([\u0C01-\u0C03])/g;
	text = text.replace(r1,function(){
		return 'a'+unicodeValue[arguments[2]];
	});
	//console.log("Iam here " +text);

	//VOWEL+MODIFIER,VOWEL
	var r1 = /([\u0C06-\u0C14])/g;
	text = text.replace(r1,function(){
		return unicodeValue_vowels[arguments[1]];
	});
	//console.log("Iam here " +text);

	text = text.replace(/([\u0C00-\u0CFF])/g, function(a) {
		//console.log(a);
		//if(typeof unicodeValue_vowels[a] != "undefined") 
		if(a in unicodeValue_vowels) {
			return chr = unicodeValue_vowels[a];
		} else {
			return a;
		}
	});

	//console.log("Iam here"+text);
	text = text.replace(/([\u0C00-\u0CFF])/g, function(a) {
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

function viewTelChart(){
	var chart_html = '<table class="table table-bordered border-primary" bgcolor=#FFFFFF width = 400 height=600  border=2 cellspacing=0 >\n<tbody>\n';
	chart_html +=  "<tr>\n";
	//chart_html +=  "<td>&nbsp;</td>\n";
	chart_html +=  "<td>&#x0C05;-a</td>\n";
	chart_html +=  "<td>&#x0C06;-A</td>\n";
	chart_html +=  "<td>&#x0C07;-i</td>\n";
	chart_html +=  "<td>&#x0C08;-I</td>\n";
	chart_html +=  "<td>&#x0C09;-u</td>\n";
	chart_html +=  "<td>&#x0C0A;-U</td>\n";
	//chart_html +=  "<td>&#x0C0E;-eV</td>\n";
	chart_html +=  "</tr>\n";
	chart_html +=  "<tr>\n";
	//chart_html +=  "<td>&nbsp;</td>\n";
	chart_html +=  "<td>&#x0C0E;-eV</td>\n";
	chart_html +=  "<td>&#x0C0F;-e</td>\n";
	chart_html +=  "<td>&#x0C10;-E</td>\n";
	chart_html +=  "<td>&#x0C12;-oV</td>\n";
	chart_html +=  "<td>&#x0C13;-o</td>\n";
	chart_html +=  "<td>&#x0C14;-O</td>\n";
	//chart_html +=  "<td>&#x0C02;-M</td>\n";
	//chart_html +=  "<td>&#x0C03;-H</td>\n";
	chart_html +=  "</tr>\n";
	chart_html +=  "<tr>\n";
	//chart_html +=  "<td>&nbsp;</td>\n";
	chart_html +=  "<td>&nbsp;</td>\n";
	chart_html +=  "<td>&#x0C02;-M</td>\n";
	chart_html +=  "<td>&#x0C03;-H</td>\n";
	chart_html +=  "<td>&#x0C01;-z</td>\n";
	chart_html +=  "<td>&#x0C0B;-q</td>\n";
	chart_html +=  "<td>&nbsp;</td>\n";
	chart_html +=  "</tr>\n";
	chart_html +=  "<tr>\n";
	//chart_html +=  "<td>&nbsp;</td>\n";
	chart_html +=  "<td>&#x0C15;-ka</td>\n";
	chart_html +=  "<td>&#x0C16;-Ka</td>\n";
	chart_html +=  "<td>&#x0C17;-ga</td>\n";
	chart_html +=  "<td>&#x0C18;-Ga</td>\n";
	chart_html +=  "<td>&#x0C19;-fa</td>\n";
	chart_html +=  "<td>&nbsp;</td>\n";
	chart_html +=  "</tr>\n";
	chart_html +=  "<tr>\n";
	//chart_html +=  "<td>&nbsp;</td>\n";
	chart_html +=  "<td>&#x0C1A;-ca</td>\n";
	chart_html +=  "<td>&#x0C1B;-Ca</td>\n";
	chart_html +=  "<td>&#x0C1C;-ja</td>\n";
	chart_html +=  "<td>&#x0C1D;-Ja</td>\n";
	chart_html +=  "<td>&#x0C1E;-Fa</td>\n";
	chart_html +=  "<td>&nbsp;</td>\n";
	chart_html +=  "</tr>\n";
	chart_html +=  "<tr>\n";
	//chart_html +=  "<td>&nbsp;</td>\n";
	chart_html +=  "<td>&#x0C1F;-ta</td>\n";
	chart_html +=  "<td>&#x0C20;-Ta</td>\n";
	chart_html +=  "<td>&#x0C21;-da</td>\n";
	chart_html +=  "<td>&#x0C22;-Da</td>\n";
	chart_html +=  "<td>&#x0C23;-Na</td>\n";
	chart_html +=  "<td>&nbsp;</td>\n";
	chart_html +=  "</tr>\n";
	chart_html +=  "<tr>\n";
	//chart_html +=  "<td>&nbsp;</td>\n";
	chart_html +=  "<td>&#x0C24;-wa</td>\n";
	chart_html +=  "<td>&#x0C25;-Wa</td>\n";
	chart_html +=  "<td>&#x0C26;-xa</t;d>\n";
	chart_html +=  "<td>&#x0C27;-Xa</td>\n";
	chart_html +=  "<td>&#x0C28;-na</td>\n";
	chart_html +=  "<td>&nbsp;</td>\n";
	chart_html +=  "</tr>\n";
	chart_html +=  "<tr>\n";
	//chart_html +=  "<td>&nbsp;</td>\n";
	chart_html +=  "<td>&#x0C2A;-pa</td>\n";
	chart_html +=  "<td>&#x0C2B;-Pa </td>\n";
	chart_html +=  "<td>&#x0C2C;-ba</td>\n";
	chart_html +=  "<td>&#x0C2D;-Ba</td>\n";
	chart_html +=  "<td>&#x0C2E;-ma</td>\n";
	chart_html +=  "<td>&nbsp;</td>\n";
	chart_html +=  "</tr>\n";
	chart_html +=  "<tr>\n";
	//chart_html +=  "<td>&nbsp;</td>\n";
	chart_html +=  "<td>&#x0C2F;-ya</td>\n";
	chart_html +=  "<td>&#x0C30;-ra</td>\n";
	chart_html +=  "<td>&#x0C31;-rYa </td>\n";
	chart_html +=  "<td>&#x0C32;-la</td>\n";
	chart_html +=  "<td>&#x0C33;-lYa </td>\n";
	chart_html +=  "<td>&nbsp;</td>\n";
	chart_html +=  "</tr>\n";
	chart_html +=  "<tr>\n";
	//chart_html +=  "<td>&nbsp;</td>\n";
	chart_html +=  "<td>&#x0C35;-va </td>\n";
	chart_html +=  "<td>&#x0C36;-Sa </td>\n";
	chart_html +=  "<td>&#x0C37;-Ra </td>\n";
	chart_html +=  "<td>&#x0C38;-sa </td>\n";
	chart_html +=  "<td>&#x0C39;-ha </td>\n";
	chart_html +=  "<td>&nbsp;</td>\n";
	chart_html +=  "</tr>\n";
	chart_html +=  "<tr>\n";
	//chart_html +=  "<td>&nbsp;</td>\n";
	chart_html +=  "<td>&#x0C66-౦</td>\n";
	chart_html +=  "<td>&#x0C67-1</td>\n";
	chart_html +=  "<td>&#x0C68-2</td>\n";
	chart_html +=  "<td>&#x0C69-3</td>\n";
	chart_html +=  "<td>&#x0C6A-4</td>\n";
	chart_html +=  "<td>&nbsp;</td>\n";
	chart_html +=  "<tr>\n";
	//chart_html +=  "<td>&nbsp;</td>\n";
	chart_html +=  "<td>&#x0C6B-5</td>\n";
	chart_html +=  "<td>&#x0C6C-6</td>\n";
	chart_html +=  "<td>&#x0C6D-7</td>\n";
	chart_html +=  "<td>&#x0C6E-8</td>\n";
	chart_html +=  "<td>&#x0C6F-9</td>\n";
	chart_html +=  "<td>&nbsp;</td>\n";
	chart_html +=  "</tr>\n";
	chart_html +=  "<tr>\n";
	chart_html +=  "<th colspan=7><p align=center>Ex:&#3110;&#3093;&#3149;&#3127;&#3135;&#3107;&#3118;&#3111;&#3149;&#3119;-xakRiNamaXya\n</p></th>";
	chart_html +=  "</tr>\n";
	chart_html +=  "<tr>\n";
	chart_html +=  "<th colspan=7><p align=center>Ex:&#3128;&#3074;&#3128;&#3149;&#3093;&#3139;&#3108;&#3135;-saMskqwi\n</p></th>";
	chart_html +=  "</tr>\n";
	chart_html +=  "<tr>\n";
	chart_html +=  "<th colspan=7><p align=center>Ex:&#3129;&#3144;&#3110;&#3120;&#3134;&#3116;&#3134;&#3110;&#3137;-hExarAbAxu\n</p></th>";
	chart_html +=  "</tr>\n</tbody></table>";
	$("#chart").html(chart_html);
	$("#chart").css("font-family", "telugumandali");
}
