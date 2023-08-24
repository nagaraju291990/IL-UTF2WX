//hindi-wx2utf
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
	console.log("Iam here"+text);
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
	console.log("Iam here3"+text);
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