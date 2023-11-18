//hindi-wx2utf
function convert_hin_wx2utf(text) {
	//var text = $("#input").val();
	
	var unicodeValue = new Array();
	var unicodeValue_vowels = new Array();
	unicodeValue_vowels["a"] = '\u0905';	//a
	unicodeValue_vowels["A"]='\u0906';
	unicodeValue_vowels["i"]='\u0907';
	unicodeValue_vowels["I"]='\u0908';
	unicodeValue_vowels["u"]='\u0909';
	unicodeValue_vowels["U"]='\u090A';
	unicodeValue_vowels["q"]='\u090B';
	unicodeValue_vowels["lq"]='\u090C';
	unicodeValue_vowels["e"]='\u090F';
	unicodeValue_vowels["E"]='\u0910';
	unicodeValue_vowels["o"]='\u0913';
	unicodeValue_vowels["O"]='\u0914';
//	unicodeValue_vowels["z"] = '\u0901';	//z
	unicodeValue["lY"]='\u0933';
	unicodeValue["EY"]='\u0945';
	unicodeValue["eV"]='\u0946';
	unicodeValue["OY"]='\u0949';
	unicodeValue["oV"]='\u094A';

	/***********Three Character length words**************/
/*Uncommented By Nagaraju to allow display of below 3 letter characters*/
	unicodeValue_vowels["EY"]='\u090D';
	unicodeValue_vowels["eV"]='\u090E';
	
	unicodeValue_vowels["OY"]='\u0911';
	unicodeValue_vowels["oV"]='\u0912';

/* added by nagaraju V for keboard press */
//	unicodeValue["k_R"]='\u0915\u094D\u0937';
//	unicodeValue["w_r"]='\u0924\u094D\u0930';
//	unicodeValue["j_F"]='\u091C\u094D\u091E';

	/*unicodeValue_vowels["z"]='\u0905\u0901';
	unicodeValue_vowels["M"]='\u0905\u0902';
	unicodeValue_vowels["H"]='\u0905\u0903';
	unicodeValue_vowels["Q"]='\u0960';*/

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
	unicodeValue["_"] = '\u094D';	//_
	unicodeValue["="] = '61';	//=
	unicodeValue["+"] = '43';	//+
	unicodeValue["|"] = '\u0964';	//|
	unicodeValue["~"] = '~';	//|
	unicodeValue["`"] = '`';	//|
	unicodeValue["\\"] = '\\';	//|


	/***************numbers mapping ***********************/

	unicodeValue["0"] = '\u0966';	//0
	unicodeValue["1"] = '\u0967';	//1
	unicodeValue["2"] = '\u0968';	//2
	unicodeValue["3"] = '\u0969';	//3
	unicodeValue["4"] = '\u096A';	//4
	unicodeValue["5"] = '\u096B';	//5
	unicodeValue["6"] = '\u096C';	//6
	unicodeValue["7"] = '\u096D';	//7
	unicodeValue["8"] = '\u096E';	//8
	unicodeValue["9"] = '\u096F';	//9

	/*****************a-z mappings***************************/

	unicodeValue["a"] = '\u0905';	//a
	unicodeValue["b"] = '\u092C';	//b
	unicodeValue["c"] = '\u091A';	//c
	unicodeValue["d"] = '\u0921';	//d
	unicodeValue["e"] = '\u0947';	//e
	unicodeValue["f"] = '\u0919';	//f
	unicodeValue["g"] = '\u0917';	//g
	unicodeValue["h"] = '\u0939';	//h
	unicodeValue["i"] = '\u093F';	//i
	unicodeValue["j"] = '\u091C';	//j
	unicodeValue["k"] = '\u0915';	//k
	unicodeValue["l"] = '\u0932';	//l
	unicodeValue["m"] = '\u092E';	//m
	unicodeValue["n"] = '\u0928';	//n
	unicodeValue["o"] = '\u094B';	//o
	unicodeValue["p"] = '\u092A';	//p
	unicodeValue["q"] = '\u0943';	//q
	unicodeValue["r"] = '\u0930';	//r
	unicodeValue["s"] = '\u0938';	//s
	unicodeValue["t"] = '\u091F';	//t
	unicodeValue["u"] = '\u0941';	//u
	unicodeValue["v"] = '\u0935';	//v
	unicodeValue["w"] = '\u0924';	//w
	unicodeValue["x"] = '\u0926';	//x
	unicodeValue["y"] = '\u092F';	//y
	unicodeValue["z"] = '\u0901';	//z

	/*******************A-Z mappings*****************************/

	unicodeValue["A"] = '\u093E';	//A
	unicodeValue["B"] = '\u092D';	//B
	unicodeValue["C"] = '\u091B';	//C
	unicodeValue["D"] = '\u0922';	//D
	unicodeValue["E"] = '\u0948';	//E
	unicodeValue["F"] = '\u091E';	//F
	unicodeValue["G"] = '\u0918';	//G
	unicodeValue["H"] = '\u0903';	//H
	unicodeValue["I"] = '\u0940';	//I
	unicodeValue["J"] = '\u091D';	//J
	unicodeValue["K"] = '\u0916';	//K
	//unicodeValue["L"] = 'L';	//L
	unicodeValue["M"] = '\u0902';	//M
	unicodeValue["N"] = '\u0923';	//N
	unicodeValue["O"] = '\u094C';	//O
	unicodeValue["P"] = '\u092B';	//P
	unicodeValue["Q"] = '\u0944';	//Q
	unicodeValue["R"] = '\u0937';	//R
	unicodeValue["S"] = '\u0936';	//S
	unicodeValue["T"] = '\u0920';	//T
	unicodeValue["U"] = '\u0942';	//U
	//unicodeValue["V"] = 'V';	//V
	unicodeValue["W"] = '\u0925';	//W
	unicodeValue["X"] = '\u0927';	//X
	unicodeValue["Y"] = '\u093D';	//Y
	unicodeValue["Z"] = '\u093C';	//Z
	//unicodeValue[89] = '\u0926';
	//unicodeValue[90] = '\u0901';
	//unicodeValue[90] = '\u093D';

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
function convert_hin_utf2wx(text) {
	//var text = $("#input").val();
	
	var unicodeValue = new Array();
	var unicodeValue_vowels = new Array();
	unicodeValue_vowels["\u0905"] = 'a';	//a
	unicodeValue_vowels["\u0906"] = 'A';
	unicodeValue_vowels["\u0907"] = 'i';
	unicodeValue_vowels["\u0908"] = 'I';
	unicodeValue_vowels["\u0909"] = 'u';
	unicodeValue_vowels["\u090A"] = 'U';
	unicodeValue_vowels["\u090B"] = 'q';
	unicodeValue_vowels["\u090C"] = 'lq';
	unicodeValue_vowels["\u090F"] = 'e';
	unicodeValue_vowels["\u0910"] = 'E';
	unicodeValue_vowels["\u0913"] = 'o';
	unicodeValue_vowels["\u0914"] = 'O';
//	unicodeValue["\u0901"] = 'z';	//z
	unicodeValue["\u0933"] = 'lY';
	unicodeValue["\u0945"] = 'EY';
	unicodeValue["\u0946"] = 'eV';
	unicodeValue["\u0949"] = 'OY';
	unicodeValue["\u094A"] = 'oV';

	/***********Three Character length words**************/
/*Uncommented By Nagaraju to allow display of below 3 letter characters*/
	unicodeValue_vowels["\u090D"] = 'EY';
	unicodeValue_vowels["\u090E"] = 'eV';
	
	unicodeValue_vowels["\u0911"] = 'OY';
	unicodeValue_vowels["\u0912"] = 'oV';

/* added by nagaraju V for keboard press */
//	unicodeValue["k_R"]='\u0915\u094D\u0937';
//	unicodeValue["w_r"]='\u0924\u094D\u0930';
//	unicodeValue["j_F"]='\u091C\u094D\u091E';

	/*unicodeValue_vowels["z"]='\u0905\u0901';
	unicodeValue_vowels["M"]='\u0905\u0902';
	unicodeValue_vowels["H"]='\u0905\u0903';
	unicodeValue_vowels["Q"]='\u0960';*/

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
	unicodeValue["\u094D"] = '';	//_
	unicodeValue["61"] = '=';	//=
	unicodeValue["43"] = '+';	//+
	unicodeValue["\u0964"] = '|';	//|
	unicodeValue["~"] = '~';	//|
	unicodeValue["`"] = '`';	//|
	unicodeValue["\\"] = '\\';	//|


	/***************numbers mapping ***********************/

	unicodeValue["\u0966"] = '0';	//0
	unicodeValue["\u0967"] = '1';	//1
	unicodeValue["\u0968"] = '2';	//2
	unicodeValue["\u0969"] = '3';	//3
	unicodeValue["\u096A"] = '4';	//4
	unicodeValue["\u096B"] = '5';	//5
	unicodeValue["\u096C"] = '6';	//6
	unicodeValue["\u096D"] = '7';	//7
	unicodeValue["\u096E"] = '8';	//8
	unicodeValue["\u096F"] = '9';	//9

	/*****************a-z mappings***************************/

	unicodeValue["\u0905"] = 'a';	//a
	unicodeValue["\u092C"] = 'b';	//b
	unicodeValue["\u091A"] = 'c';	//c
	unicodeValue["\u0921"] = 'd';	//d
	unicodeValue["\u0947"] = 'e';	//e
	unicodeValue["\u0919"] = 'f';	//f
	unicodeValue["\u0917"] = 'g';	//g
	unicodeValue["\u0939"] = 'h';	//h
	unicodeValue["\u093F"] = 'i';	//i
	unicodeValue["\u091C"] = 'j';	//j
	unicodeValue["\u0915"] = 'k';	//k
	unicodeValue["\u0932"] = 'l';	//l
	unicodeValue["\u092E"] = 'm';	//m
	unicodeValue["\u0928"] = 'n';	//n
	unicodeValue["\u094B"] = 'o';	//o
	unicodeValue["\u092A"] = 'p';	//p
	unicodeValue["\u0943"] = 'q';	//q
	unicodeValue["\u0930"] = 'r';	//r
	unicodeValue["\u0938"] = 's';	//s
	unicodeValue["\u091F"] = 't';	//t
	unicodeValue["\u0941"] = 'u';	//u
	unicodeValue["\u0935"] = 'v';	//v
	unicodeValue["\u0924"] = 'w';	//w
	unicodeValue["\u0926"] = 'x';	//x
	unicodeValue["\u092F"] = 'y';	//y
	unicodeValue["\u0901"] = 'z';	//z

	/*******************A-Z mappings*****************************/

	unicodeValue["\u093E"] = 'A';	//A
	unicodeValue["\u092D"] = 'B';	//B
	unicodeValue["\u091B"] = 'C';	//C
	unicodeValue["\u0922"] = 'D';	//D
	unicodeValue["\u0948"] = 'E';	//E
	unicodeValue["\u091E"] = 'F';	//F
	unicodeValue["\u0918"] = 'G';	//G
	unicodeValue["\u0903"] = 'H';	//H
	unicodeValue["\u0940"] = 'I';	//I
	unicodeValue["\u091D"] = 'J';	//J
	unicodeValue["\u0916"] = 'K';	//K
	//unicodeValue["L"] = 'L';	//L
	unicodeValue["\u0902"] = 'M';	//M
	unicodeValue["\u0923"] = 'N';	//N
	unicodeValue["\u094C"] = 'O';	//O
	unicodeValue["\u092B"] = 'P';	//P
	unicodeValue["\u0944"] = 'Q';	//Q
	unicodeValue["\u0937"] = 'R';	//R
	unicodeValue["\u0936"] = 'S';	//S
	unicodeValue["\u0920"] = 'T';	//T
	unicodeValue["\u0942"] = 'U';	//U
	//unicodeValue["V"] = 'V';	//V
	unicodeValue["\u0925"] = 'W';	//W
	unicodeValue["\u0927"] = 'X';	//X
	unicodeValue["\u093D"] = 'Y';	//Y
	unicodeValue["\u093C"] = 'Z';	//Z
	//unicodeValue[89] = '\u0926';
	//unicodeValue[90] = '\u0901';
	//unicodeValue[90] = '\u093D';

	//CONSONANT+HALANT
	var r1 = /([\u0915-\u0939])\u094D/g;
	text = text.replace(r1,function(){
		return unicodeValue[arguments[1]]+unicodeValue["\u094D"];
	});

	//CONSONANT+NUKTA+MATRA+MODIFIER 
	var r1 = /([\u0915-\u0939])\u093C([\u093E-\u094C])([\u0901-\u0903])/g;
	text = text.replace(r1,function(){
		return unicodeValue[arguments[1]]+unicodeValue["\u093C"]+unicodeValue[arguments[2]]+unicodeValue[arguments[3]];
	});

	//CONSONANT+NUKTA+MATRA
	var r1 = /([\u0915-\u0939])\u093C([\u093E-\u094C])/g;
	text = text.replace(r1,function(){
		return unicodeValue[arguments[1]]+unicodeValue["\u093C"]+unicodeValue[arguments[2]];
	});

	//CONSONANT+NUKTA+MODIFIER
	var r1 = /([\u0915-\u0939])\u093C([\u0901-\u0903])/g;
	text = text.replace(r1,function(){
		return unicodeValue[arguments[1]]+unicodeValue["\u093C"]+unicodeValue[arguments[2]];
	});
	//CONSONANT+NUKTA
	var r1 = /([\u0915-\u0939])\u093C/g;
	text = text.replace(r1,function(){
		return unicodeValue[arguments[1]]+unicodeValue["\u093C"]+'a';
	});

	//CONSONANT+MATRA+MODIFIER 
	var r1 = /([\u0915-\u0939])([\u093E-\u094C])([\u0901-\u0903])/g;
	text = text.replace(r1,function(){
		return unicodeValue[arguments[1]]+unicodeValue[arguments[2]]+unicodeValue[arguments[3]];
	});

	//CONSONANT+MATRA 
	var r1 = /([\u0915-\u0939])([\u093E-\u094C])/g;
	text = text.replace(r1,function(){
		return unicodeValue[arguments[1]]+unicodeValue[arguments[2]];
	});

	//CONSONANT+MODIFIER
	var r1 = /([\u0915-\u0939])([\u0901-\u0903])/g;
	text = text.replace(r1,function(){
		return unicodeValue[arguments[1]]+'a'+unicodeValue[arguments[2]];
	});

	//CONSONANT
	var r1 = /([\u0915-\u0939])/g;
	text = text.replace(r1,function(){
		return unicodeValue[arguments[1]]+'a';
	});

	//VOWEL+MODIFIER,VOWEL
	var r1 = /([\u0906-\u0914])([\u0901-\u0903])/g;
	text = text.replace(r1,function(){
		return unicodeValue_vowels[arguments[1]]+unicodeValue[arguments[2]];
	});

	//VOWEL+MODIFIER,VOWEL
	var r1 = /([\u0905])([\u0901-\u0903])/g;
	text = text.replace(r1,function(){
		return 'a'+unicodeValue[arguments[2]];
	});
	//console.log("Iam here " +text);

	//VOWEL+MODIFIER,VOWEL
	var r1 = /([\u0906-\u0914])/g;
	text = text.replace(r1,function(){
		return unicodeValue_vowels[arguments[1]];
	});
	//console.log("Iam here " +text);

	text = text.replace(/([\u0900-\u09FF])/g, function(a) {
		//console.log(a);
		//if(typeof unicodeValue_vowels[a] != "undefined") 
		if(a in unicodeValue_vowels) {
			return chr = unicodeValue_vowels[a];
		} else {
			return a;
		}
	});

	//console.log("Iam here"+text);
	text = text.replace(/([\u0900-\u09FF])/g, function(a) {
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
function viewHinChart(){
	var chart_html = '<table class="table table-bordered border-primary" bgcolor=#FFFFFF width = 400 height=600  border=2 cellspacing=0 >\n<tbody>\n';	
	chart_html +=  "<tr>\n";
	chart_html +=  "<td>&#x0905;-a</td>\n";
	chart_html +=  "<td>&#x0906;-A</td>\n";
	chart_html +=  "<td>&#x0907;-i</td>\n";
	chart_html +=  "<td>&#x0908;-I</td>\n";
	chart_html +=  "<td>&#x0909;-u</td>\n";
	chart_html +=  "<td>&#x090A;-U</td>\n";
	chart_html +=  "<td>&#x0902;-M</td>\n";
	chart_html +=  "</tr>\n";
	chart_html +=  "<tr>\n";
	chart_html +=  "<td>&#x090E;-eV</td>\n";
	chart_html +=  "<td>&#x090F;-e</td>\n";
	chart_html +=  "<td>&#x0910;-E</td>\n";
	chart_html +=  "<td>&#x0912;-oV</td>\n";
	chart_html +=  "<td>&#x0913;-o</td>\n";
	chart_html +=  "<td>&#x0914;-O</td>\n";
	chart_html +=  "<td>&#x0903;-H</td>\n";
	chart_html +=  "</tr>\n";
	chart_html +=  "<tr>\n";
	chart_html +=  "<td>&nbsp;</td>\n";
	chart_html +=  "<td>&#x0915;-ka</td>\n";
	chart_html +=  "<td>&#x0916;-Ka</td>\n";
	chart_html +=  "<td>&#x0917;-ga</td>\n";
	chart_html +=  "<td>&#x0918;-Ga</td>\n";
	chart_html +=  "<td>&#x0919;-fa</td>\n";
	chart_html +=  "<td>&nbsp;</td>\n";
	chart_html +=  "</tr>\n";
	chart_html +=  "<tr>\n";
	chart_html +=  "<td>&nbsp;</td>\n";
	chart_html +=  "<td>&#x091A;-ca</td>\n";
	chart_html +=  "<td>&#x091B;-Ca</td>\n";
	chart_html +=  "<td>&#x091C;-ja</td>\n";
	chart_html +=  "<td>&#x091D;-Ja</td>\n";
	chart_html +=  "<td>&#x091E;-Fa</td>\n";
	chart_html +=  "<td>&nbsp;</td>\n";
	chart_html +=  "</tr>\n";
	chart_html +=  "<tr>\n";
	chart_html +=  "<td>&nbsp;</td>\n";
	chart_html +=  "<td>&#x091F;-ta</td>\n";
	chart_html +=  "<td>&#x0920;-Ta</td>\n";
	chart_html +=  "<td>&#x0921;-da</td>\n";
	chart_html +=  "<td>&#x0922;-Da</td>\n";
	chart_html +=  "<td>&#x0923;-Na</td>\n";
	chart_html +=  "<td>&nbsp;</td>\n";
	chart_html +=  "</tr>\n";
	chart_html +=  "<tr>\n";
	chart_html +=  "<td>&nbsp;</td>\n";
	chart_html +=  "<td>&#x0924;-wa</td>\n";
	chart_html +=  "<td>&#x0925;-Wa</td>\n";
	chart_html +=  "<td>&#x0926;-xa</td>\n";
	chart_html +=  "<td>&#x0927;-Xa</td>\n";
	chart_html +=  "<td>&#x0928;-na</td>\n";
	chart_html +=  "<td>&nbsp;</td>\n";
	chart_html +=  "</tr>\n";
	chart_html +=  "<tr>\n";
	chart_html +=  "<td>&nbsp;</td>\n";
	chart_html +=  "<td>&#x092A;-pa</td>\n";
	chart_html +=  "<td>&#x092B;-Pa</td>\n";
	chart_html +=  "<td>&#x092C;-ba</td>\n";
	chart_html +=  "<td>&#x092D;-Ba</td>\n";
	chart_html +=  "<td>&#x092E;-ma</td>\n";
	chart_html +=  "<td>&nbsp;</td>\n";
	chart_html +=  "</tr>\n";
	chart_html +=  "<tr>\n";
	chart_html +=  "<td>&nbsp;</td>\n";
	chart_html +=  "<td>&#x092F;-ya</td>\n";
	chart_html +=  "<td>&#x0930;-ra</td>\n";
	chart_html +=  "<td>&#x0932;-la</td>\n";
	chart_html +=  "<td>&#x0935;-va</td>\n";
	chart_html +=  "<td>&#x0936;-Sa</td>\n";
	chart_html +=  "<td>&nbsp;</td>\n";
	//chart_html +=  "<td>&#x0931;-rY</td>\n";
	chart_html +=  "</tr>\n";
	chart_html +=  "<tr>\n";
	chart_html +=  "<td>&nbsp;</td>\n";
	chart_html +=  "<td>&#x0937;-Ra</td>\n";
	chart_html +=  "<td>&#x0938;-sa</td>\n";
	chart_html +=  "<td>&#x0939;-ha</td>\n";
	chart_html +=  "<td>&#x090B;-q</td>\n";
	chart_html +=  "<td>&#x0901;-z</td>\n";
	chart_html +=  "<td>&nbsp;</td>\n";
	//chart_html +=  "<td>&#x093D;-aY</td>\n";
	chart_html +=  "</tr>\n";
	chart_html +=  "<tr>\n";
	chart_html +=  "<td>&nbsp;</td>\n";
	chart_html +=  "<td>&#x093C;-Z</td>\n";
	chart_html +=  "<td>&#x0933;-lY</td>\n";
	chart_html +=  "<td>&#x0931;-rY</td>\n";
	chart_html +=  "<td>&#x0934;-lYY</td>\n";
	//chart_html +=  "<td>&#x0928;-n</td>\n";
	chart_html +=  "<td>&#x0945;-eY</td>\n";
	chart_html +=  "<td>&nbsp;</td>\n";
	chart_html +=  "</tr>\n";
	chart_html +=  "<tr>\n";
	chart_html +=  "<td>&nbsp;</td>\n";
	chart_html +=  "<td>&#x0966;-0</td>\n";
	chart_html +=  "<td>&#x0967;-1</td>\n";
	chart_html +=  "<td>&#x0968;-2</td>\n";
	chart_html +=  "<td>&#x0969;-3</td>\n";
	chart_html +=  "<td>&#x096A;-4</td>\n";
	chart_html +=  "<td>&nbsp;</td>\n";
	chart_html +=  "</tr>\n";
	chart_html +=  "<tr>\n";
	chart_html +=  "<td>&nbsp;</td>\n";
	chart_html +=  "<td>&#x096B;-5</td>\n";
	chart_html +=  "<td>&#x096C;-6</td>\n";
	chart_html +=  "<td>&#x096D;-7</td>\n";
	chart_html +=  "<td>&#x096E;-8</td>\n";
	chart_html +=  "<td>&#x096F;-9</td>\n";
	chart_html +=  "<td>&nbsp;</td>\n";
	chart_html +=  "</tr>\n";
	chart_html +=  "<tr>\n";
	chart_html +=  "<td>&nbsp;</td>\n";
	chart_html +=  "<td>&#x090B;-Q</td>\n";
	chart_html +=  "<td>&#x0950;-Z</td>\n";
	chart_html +=  "<td>&#x0972;-aV</td>\n";
	chart_html +=  "<td>&#x09FA;-sYZ</td>\n";
	chart_html +=  "<td>&#x093D;-aY</td>\n";
	//chart_html +=  "<td>&#x0972;-aV</td>\n";
	chart_html +=  "<td>&nbsp;</td>\n";
	chart_html +=  "</tr>\n";
	chart_html +=  "<tr>\n";
	chart_html +=  "<th colspan=7><p align=center>Ex:&#2346;&#2352;&#2381;&#2351;&#2366;&#2357;&#2352;&#2339;-paryAvaraNa\n</p></th>";
	chart_html +=  "</tr>\n";
	chart_html +=  "<tr>\n";
	chart_html +=  "<th colspan=7><p align=center>Ex:&#2360;&#2306;&#2360;&#2381;&#2325;&#2371;&#2340;&#2367;-saMskqwi\n</p></th>";
	chart_html +=  "</tr>\n\n</tbody></table>";
	$("#chart").html(chart_html);
	$("#chart").css("font-family", "Lohit Devanagari");
}
