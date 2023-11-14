//hindi-wx2utf
function convert_mal_wx2utf(text) {
	//var text = $("#input").val();
	
	var unicodeValue = new Array();
	var unicodeValue_vowels = new Array();
	unicodeValue_vowels["a"] = '\u0D05';	//a
	unicodeValue_vowels["A"]='\u0D06';
	unicodeValue_vowels["i"]='\u0D07';
	unicodeValue_vowels["I"]='\u0D08';
	unicodeValue_vowels["u"]='\u0D09';
	unicodeValue_vowels["U"]='\u0D0A';
	unicodeValue_vowels["q"]='\u0D0B';
	unicodeValue_vowels["lq"]='\u0D0C';
	unicodeValue_vowels["e"]='\u0D0F';
	unicodeValue_vowels["E"]='\u0D10';
	unicodeValue_vowels["o"]='\u0D13';
	unicodeValue_vowels["O"]='\u0D14';
//	unicodeValue_vowels["z"] = '\u0D01';	//z
	unicodeValue["lY"]='\u0D33';
	unicodeValue["EY"]='\u0D45';
	unicodeValue["eV"]='\u0D46';
	unicodeValue["OY"]='\u0D49';
	unicodeValue["oV"]='\u0D4A';

	/***********Three Character length words**************/
/*Uncommented By Nagaraju to allow display of below 3 letter characters*/
	unicodeValue_vowels["EY"]='\u0D0D';
	unicodeValue_vowels["eV"]='\u0D0E';
	
	unicodeValue_vowels["OY"]='\u0D11';
	unicodeValue_vowels["oV"]='\u0D12';

/* added by nagaraju V for keboard press */
//	unicodeValue["k_R"]='\u0D15\u0D4D\u0D37';
//	unicodeValue["w_r"]='\u0D24\u0D4D\u0D30';
//	unicodeValue["j_F"]='\u0D1C\u0D4D\u0D1E';

	/*unicodeValue_vowels["z"]='\u0D05\u0D01';
	unicodeValue_vowels["M"]='\u0D05\u0D02';
	unicodeValue_vowels["H"]='\u0D05\u0D03';
	unicodeValue_vowels["Q"]='\u0D60';*/

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
	unicodeValue["_"] = '\u0D4D';	//_
	unicodeValue["="] = '61';	//=
	unicodeValue["+"] = '43';	//+
	unicodeValue["|"] = '\u0D64';	//|
	unicodeValue["~"] = '~';	//|
	unicodeValue["`"] = '`';	//|
	unicodeValue["\\"] = '\\';	//|


	/***************numbers mapping ***********************/

	unicodeValue["0"] = '\u0D66';	//0
	unicodeValue["1"] = '\u0D67';	//1
	unicodeValue["2"] = '\u0D68';	//2
	unicodeValue["3"] = '\u0D69';	//3
	unicodeValue["4"] = '\u0D6A';	//4
	unicodeValue["5"] = '\u0D6B';	//5
	unicodeValue["6"] = '\u0D6C';	//6
	unicodeValue["7"] = '\u0D6D';	//7
	unicodeValue["8"] = '\u0D6E';	//8
	unicodeValue["9"] = '\u0D6F';	//9

	/*****************a-z mappings***************************/

	unicodeValue["a"] = '\u0D05';	//a
	unicodeValue["b"] = '\u0D2C';	//b
	unicodeValue["c"] = '\u0D1A';	//c
	unicodeValue["d"] = '\u0D21';	//d
	unicodeValue["e"] = '\u0D47';	//e
	unicodeValue["f"] = '\u0D19';	//f
	unicodeValue["g"] = '\u0D17';	//g
	unicodeValue["h"] = '\u0D39';	//h
	unicodeValue["i"] = '\u0D3F';	//i
	unicodeValue["j"] = '\u0D1C';	//j
	unicodeValue["k"] = '\u0D15';	//k
	unicodeValue["l"] = '\u0D32';	//l
	unicodeValue["m"] = '\u0D2E';	//m
	unicodeValue["n"] = '\u0D28';	//n
	unicodeValue["o"] = '\u0D4B';	//o
	unicodeValue["p"] = '\u0D2A';	//p
	unicodeValue["q"] = '\u0D43';	//q
	unicodeValue["r"] = '\u0D30';	//r
	unicodeValue["s"] = '\u0D38';	//s
	unicodeValue["t"] = '\u0D1F';	//t
	unicodeValue["u"] = '\u0D41';	//u
	unicodeValue["v"] = '\u0D35';	//v
	unicodeValue["w"] = '\u0D24';	//w
	unicodeValue["x"] = '\u0D26';	//x
	unicodeValue["y"] = '\u0D2F';	//y
	unicodeValue["z"] = '\u0D01';	//z

	/*******************A-Z mappings*****************************/

	unicodeValue["A"] = '\u0D3E';	//A
	unicodeValue["B"] = '\u0D2D';	//B
	unicodeValue["C"] = '\u0D1B';	//C
	unicodeValue["D"] = '\u0D22';	//D
	unicodeValue["E"] = '\u0D48';	//E
	unicodeValue["F"] = '\u0D1E';	//F
	unicodeValue["G"] = '\u0D18';	//G
	unicodeValue["H"] = '\u0D03';	//H
	unicodeValue["I"] = '\u0D40';	//I
	unicodeValue["J"] = '\u0D1D';	//J
	unicodeValue["K"] = '\u0D16';	//K
	//unicodeValue["L"] = 'L';	//L
	unicodeValue["M"] = '\u0D02';	//M
	unicodeValue["N"] = '\u0D23';	//N
	unicodeValue["O"] = '\u0D4C';	//O
	unicodeValue["P"] = '\u0D2B';	//P
	unicodeValue["Q"] = '\u0D44';	//Q
	unicodeValue["R"] = '\u0D37';	//R
	unicodeValue["S"] = '\u0D36';	//S
	unicodeValue["T"] = '\u0D20';	//T
	unicodeValue["U"] = '\u0D42';	//U
	//unicodeValue["V"] = 'V';	//V
	unicodeValue["W"] = '\u0D25';	//W
	unicodeValue["X"] = '\u0D27';	//X
	unicodeValue["Y"] = '\u0D3D';	//Y
	unicodeValue["Z"] = '\u0D3C';	//Z
	//unicodeValue[89] = '\u0D26';
	//unicodeValue[90] = '\u0D01';
	//unicodeValue[90] = '\u0D3D';

	/**************Two Character length words************/

	
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
	//console.log("Iam here"+text);
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
	//console.log("Iam here3"+text);
	return text;
	//$("#output").val(text);

/* added by nagaraju V for keboard press */
}

//hindi-utf2wx
function convert_mal_utf2wx(text) {
	//var text = $("#input").val();
	
	var unicodeValue = new Array();
	var unicodeValue_vowels = new Array();
	unicodeValue_vowels["\u0D05"] = 'a';	//a
	unicodeValue_vowels["\u0D06"] = 'A';
	unicodeValue_vowels["\u0D07"] = 'i';
	unicodeValue_vowels["\u0D08"] = 'I';
	unicodeValue_vowels["\u0D09"] = 'u';
	unicodeValue_vowels["\u0D0A"] = 'U';
	unicodeValue_vowels["\u0D0B"] = 'q';
	unicodeValue_vowels["\u0D0C"] = 'lq';
	unicodeValue_vowels["\u0D0F"] = 'e';
	unicodeValue_vowels["\u0D10"] = 'E';
	unicodeValue_vowels["\u0D13"] = 'o';
	unicodeValue_vowels["\u0D14"] = 'O';
//	unicodeValue["\u0D01"] = 'z';	//z
	unicodeValue["\u0D33"] = 'lY';
	unicodeValue["\u0D45"] = 'EY';
	unicodeValue["\u0D46"] = 'eV';
	unicodeValue["\u0D49"] = 'OY';
	unicodeValue["\u0D4A"] = 'oV';

	/***********Three Character length words**************/
/*Uncommented By Nagaraju to allow display of below 3 letter characters*/
	unicodeValue_vowels["\u0D0D"] = 'EY';
	unicodeValue_vowels["\u0D0E"] = 'eV';
	
	unicodeValue_vowels["\u0D11"] = 'OY';
	unicodeValue_vowels["\u0D12"] = 'oV';

/* added by nagaraju V for keboard press */
//	unicodeValue["k_R"]='\u0D15\u0D4D\u0D37';
//	unicodeValue["w_r"]='\u0D24\u0D4D\u0D30';
//	unicodeValue["j_F"]='\u0D1C\u0D4D\u0D1E';

	/*unicodeValue_vowels["z"]='\u0D05\u0D01';
	unicodeValue_vowels["M"]='\u0D05\u0D02';
	unicodeValue_vowels["H"]='\u0D05\u0D03';
	unicodeValue_vowels["Q"]='\u0D60';*/

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
	unicodeValue["\u0D4D"] = '';	//_
	unicodeValue["61"] = '=';	//=
	unicodeValue["43"] = '+';	//+
	unicodeValue["\u0D64"] = '|';	//|
	unicodeValue["~"] = '~';	//|
	unicodeValue["`"] = '`';	//|
	unicodeValue["\\"] = '\\';	//|


	/***************numbers mapping ***********************/

	unicodeValue["\u0D66"] = '0';	//0
	unicodeValue["\u0D67"] = '1';	//1
	unicodeValue["\u0D68"] = '2';	//2
	unicodeValue["\u0D69"] = '3';	//3
	unicodeValue["\u0D6A"] = '4';	//4
	unicodeValue["\u0D6B"] = '5';	//5
	unicodeValue["\u0D6C"] = '6';	//6
	unicodeValue["\u0D6D"] = '7';	//7
	unicodeValue["\u0D6E"] = '8';	//8
	unicodeValue["\u0D6F"] = '9';	//9

	/*****************a-z mappings***************************/

	unicodeValue["\u0D05"] = 'a';	//a
	unicodeValue["\u0D2C"] = 'b';	//b
	unicodeValue["\u0D1A"] = 'c';	//c
	unicodeValue["\u0D21"] = 'd';	//d
	unicodeValue["\u0D47"] = 'e';	//e
	unicodeValue["\u0D19"] = 'f';	//f
	unicodeValue["\u0D17"] = 'g';	//g
	unicodeValue["\u0D39"] = 'h';	//h
	unicodeValue["\u0D3F"] = 'i';	//i
	unicodeValue["\u0D1C"] = 'j';	//j
	unicodeValue["\u0D15"] = 'k';	//k
	unicodeValue["\u0D32"] = 'l';	//l
	unicodeValue["\u0D2E"] = 'm';	//m
	unicodeValue["\u0D28"] = 'n';	//n
	unicodeValue["\u0D4B"] = 'o';	//o
	unicodeValue["\u0D2A"] = 'p';	//p
	unicodeValue["\u0D43"] = 'q';	//q
	unicodeValue["\u0D30"] = 'r';	//r
	unicodeValue["\u0D38"] = 's';	//s
	unicodeValue["\u0D1F"] = 't';	//t
	unicodeValue["\u0D41"] = 'u';	//u
	unicodeValue["\u0D35"] = 'v';	//v
	unicodeValue["\u0D24"] = 'w';	//w
	unicodeValue["\u0D26"] = 'x';	//x
	unicodeValue["\u0D2F"] = 'y';	//y
	unicodeValue["\u0D01"] = 'z';	//z

	/*******************A-Z mappings*****************************/

	unicodeValue["\u0D3E"] = 'A';	//A
	unicodeValue["\u0D2D"] = 'B';	//B
	unicodeValue["\u0D1B"] = 'C';	//C
	unicodeValue["\u0D22"] = 'D';	//D
	unicodeValue["\u0D48"] = 'E';	//E
	unicodeValue["\u0D1E"] = 'F';	//F
	unicodeValue["\u0D18"] = 'G';	//G
	unicodeValue["\u0D03"] = 'H';	//H
	unicodeValue["\u0D40"] = 'I';	//I
	unicodeValue["\u0D1D"] = 'J';	//J
	unicodeValue["\u0D16"] = 'K';	//K
	//unicodeValue["L"] = 'L';	//L
	unicodeValue["\u0D02"] = 'M';	//M
	unicodeValue["\u0D23"] = 'N';	//N
	unicodeValue["\u0D4C"] = 'O';	//O
	unicodeValue["\u0D2B"] = 'P';	//P
	unicodeValue["\u0D44"] = 'Q';	//Q
	unicodeValue["\u0D37"] = 'R';	//R
	unicodeValue["\u0D36"] = 'S';	//S
	unicodeValue["\u0D20"] = 'T';	//T
	unicodeValue["\u0D42"] = 'U';	//U
	//unicodeValue["V"] = 'V';	//V
	unicodeValue["\u0D25"] = 'W';	//W
	unicodeValue["\u0D27"] = 'X';	//X
	unicodeValue["\u0D3D"] = 'Y';	//Y
	unicodeValue["\u0D3C"] = 'Z';	//Z
	//unicodeValue[89] = '\u0D26';
	//unicodeValue[90] = '\u0D01';
	//unicodeValue[90] = '\u0D3D';

	//CONSONANT+HALANT
	var r1 = /([\u0D15-\u0D39])\u0D4D/g;
	text = text.replace(r1,function(){
		return unicodeValue[arguments[1]]+unicodeValue["\u0D4D"];
	});

	//CONSONANT+NUKTA+MATRA+MODIFIER 
	var r1 = /([\u0D15-\u0D39])\u0D3C([\u0D3E-\u0D4C])([\u0D01-\u0D03])/g;
	text = text.replace(r1,function(){
		return unicodeValue[arguments[1]]+unicodeValue["\u0D3C"]+unicodeValue[arguments[2]]+unicodeValue[arguments[3]];
	});

	//CONSONANT+NUKTA+MATRA
	var r1 = /([\u0D15-\u0D39])\u0D3C([\u0D3E-\u0D4C])/g;
	text = text.replace(r1,function(){
		return unicodeValue[arguments[1]]+unicodeValue["\u0D3C"]+unicodeValue[arguments[2]];
	});

	//CONSONANT+NUKTA+MODIFIER
	var r1 = /([\u0D15-\u0D39])\u0D3C([\u0D01-\u0D03])/g;
	text = text.replace(r1,function(){
		return unicodeValue[arguments[1]]+unicodeValue["\u0D3C"]+unicodeValue[arguments[2]];
	});
	//CONSONANT+NUKTA
	var r1 = /([\u0D15-\u0D39])\u0D3C/g;
	text = text.replace(r1,function(){
		return unicodeValue[arguments[1]]+unicodeValue["\u0D3C"]+'a';
	});

	//CONSONANT+MATRA+MODIFIER 
	var r1 = /([\u0D15-\u0D39])([\u0D3E-\u0D4C])([\u0D01-\u0D03])/g;
	text = text.replace(r1,function(){
		return unicodeValue[arguments[1]]+unicodeValue[arguments[2]]+unicodeValue[arguments[3]];
	});

	//CONSONANT+MATRA 
	var r1 = /([\u0D15-\u0D39])([\u0D3E-\u0D4C])/g;
	text = text.replace(r1,function(){
		return unicodeValue[arguments[1]]+unicodeValue[arguments[2]];
	});

	//CONSONANT+MODIFIER
	var r1 = /([\u0D15-\u0D39])([\u0D01-\u0D03])/g;
	text = text.replace(r1,function(){
		return unicodeValue[arguments[1]]+'a'+unicodeValue[arguments[2]];
	});

	//CONSONANT
	var r1 = /([\u0D15-\u0D39])/g;
	text = text.replace(r1,function(){
		return unicodeValue[arguments[1]]+'a';
	});

	//VOWEL+MODIFIER,VOWEL
	var r1 = /([\u0D06-\u0D14])([\u0D01-\u0D03])/g;
	text = text.replace(r1,function(){
		return unicodeValue_vowels[arguments[1]]+unicodeValue[arguments[2]];
	});

	//VOWEL+MODIFIER,VOWEL
	var r1 = /([\u0D05])([\u0D01-\u0D03])/g;
	text = text.replace(r1,function(){
		return 'a'+unicodeValue[arguments[2]];
	});
	//console.log("Iam here " +text);

	//VOWEL+MODIFIER,VOWEL
	var r1 = /([\u0D06-\u0D14])/g;
	text = text.replace(r1,function(){
		return unicodeValue_vowels[arguments[1]];
	});
	//console.log("Iam here " +text);

	text = text.replace(/([\u0D00-\u0DFF])/g, function(a) {
		//console.log(a);
		//if(typeof unicodeValue_vowels[a] != "undefined") 
		if(a in unicodeValue_vowels) {
			return chr = unicodeValue_vowels[a];
		} else {
			return a;
		}
	});

	//console.log("Iam here"+text);
	text = text.replace(/([\u0D00-\u0DFF])/g, function(a) {
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
