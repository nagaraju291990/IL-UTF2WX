//tamil-wx2utf
//console.log = function() {};
function convert_guj_wx2utf(text) {
	//var text = $("#input").val();
	
	var unicodeValue = new Array();
	var unicodeValue_vowels = new Array();
	unicodeValue_vowels["a"] = '\u0A85';	//a
	unicodeValue_vowels["A"]='\u0A86';
	unicodeValue_vowels["i"]='\u0A87';
	unicodeValue_vowels["I"]='\u0A88';
	unicodeValue_vowels["u"]='\u0A89';
	unicodeValue_vowels["U"]='\u0A8A';
	unicodeValue_vowels["q"]='\u0A8B';
	unicodeValue_vowels["lq"]='\u0A8C';
	unicodeValue_vowels["e"]='\u0A8F';
	unicodeValue_vowels["E"]='\u0A90';
	unicodeValue_vowels["o"]='\u0A93';
	unicodeValue_vowels["O"]='\u0A94';

	// unicodeValue_vowels["aa"] = '\u0A85';	//a
	unicodeValue_vowels["aA"]='\u0A86';
	unicodeValue_vowels["ai"]='\u0A87';
	unicodeValue_vowels["aI"]='\u0A88';
	unicodeValue_vowels["au"]='\u0A89';
	unicodeValue_vowels["aU"]='\u0A8A';
	unicodeValue_vowels["aq"]='\u0A8B';
	unicodeValue_vowels["alq"]='\u0A8C';
	unicodeValue_vowels["ae"]='\u0A8F';
	unicodeValue_vowels["eE"]='\u0A90';
	unicodeValue_vowels["ao"]='\u0A93';
	unicodeValue_vowels["aO"]='\u0A94';

//	unicodeValue_vowels["z"] = '\u0A81';	//z
	unicodeValue["lY"]='\u0AB3';
	unicodeValue["lYY"]='\u0AB4';
	unicodeValue["nY"]='\u0AA9';
	unicodeValue["rY"]='\u0AB1';
	unicodeValue["EY"]='\u0AC5';
	unicodeValue["eV"]='\u0AC6';
	unicodeValue["aeV"]='\u0AC6';
	unicodeValue["OY"]='\u0AC9';
	unicodeValue["oV"]='\u0ACA';
	unicodeValue["aoV"]='\u0ACA';

	/***********Three Character length words**************/
/*Uncommented By Nagaraju to allow display of below 3 letter characters*/
	unicodeValue_vowels["EY"]='\u0A8D';
	unicodeValue_vowels["eV"]='\u0A8E';
	
	unicodeValue_vowels["OY"]='\u0A91';
	unicodeValue_vowels["oV"]='\u0A92';
	unicodeValue_vowels["aEY"]='\u0A8D';
	unicodeValue_vowels["aeV"]='\u0A8E';
	
	unicodeValue_vowels["aOY"]='\u0A91';
	unicodeValue_vowels["aoV"]='\u0A92';

/* added by nagaraju V for keboard press */
//	unicodeValue["k_R"]='\u0A95\u0ACD\u0AB7';
//	unicodeValue["w_r"]='\u0AA4\u0ACD\u0AB0';
//	unicodeValue["j_F"]='\u0A9C\u0ACD\u0A9E';

	/*unicodeValue_vowels["z"]='\u0A85\u0A81';
	unicodeValue_vowels["M"]='\u0A85\u0A82';
	unicodeValue_vowels["H"]='\u0A85\u0A83';
	unicodeValue_vowels["Q"]='\u0AE0';*/

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
	unicodeValue["_"] = '\u0ACD';	//_
	unicodeValue["="] = '61';	//=
	unicodeValue["+"] = '43';	//+
	unicodeValue["|"] = '\u0AE4';	//|
	unicodeValue["~"] = '~';	//|
	unicodeValue["`"] = '`';	//|
	unicodeValue["\\"] = '\\';	//|


	/***************numbers mapping ***********************/

	unicodeValue["0"] = '\u0AE6';	//0
	unicodeValue["1"] = '\u0AE7';	//1
	unicodeValue["2"] = '\u0AE8';	//2
	unicodeValue["3"] = '\u0AE9';	//3
	unicodeValue["4"] = '\u0AEA';	//4
	unicodeValue["5"] = '\u0AEB';	//5
	unicodeValue["6"] = '\u0AEC';	//6
	unicodeValue["7"] = '\u0AED';	//7
	unicodeValue["8"] = '\u0AEE';	//8
	unicodeValue["9"] = '\u0AEF';	//9

	/*****************a-z mappings***************************/

	unicodeValue["a"] = '\u0A85';	//a
	unicodeValue["b"] = '\u0AAC';	//b
	unicodeValue["c"] = '\u0A9A';	//c
	unicodeValue["d"] = '\u0AA1';	//d
	unicodeValue["e"] = '\u0AC7';	//e
	unicodeValue["f"] = '\u0A99';	//f
	unicodeValue["g"] = '\u0A97';	//g
	unicodeValue["h"] = '\u0AB9';	//h
	unicodeValue["i"] = '\u0ABF';	//i
	unicodeValue["j"] = '\u0A9C';	//j
	unicodeValue["k"] = '\u0A95';	//k
	unicodeValue["l"] = '\u0AB2';	//l
	unicodeValue["m"] = '\u0AAE';	//m
	unicodeValue["n"] = '\u0AA8';	//n
	unicodeValue["o"] = '\u0ACB';	//o
	unicodeValue["p"] = '\u0AAA';	//p
	unicodeValue["q"] = '\u0AC3';	//q
	unicodeValue["r"] = '\u0AB0';	//r
	unicodeValue["s"] = '\u0AB8';	//s
	unicodeValue["t"] = '\u0A9F';	//t
	unicodeValue["u"] = '\u0AC1';	//u
	unicodeValue["v"] = '\u0AB5';	//v
	unicodeValue["w"] = '\u0AA4';	//w
	unicodeValue["x"] = '\u0AA6';	//x
	unicodeValue["y"] = '\u0AAF';	//y
	unicodeValue["z"] = '\u0A81';	//z

	/*******************A-Z mappings*****************************/

	unicodeValue["A"] = '\u0ABE';	//A
	unicodeValue["B"] = '\u0AAD';	//B
	unicodeValue["C"] = '\u0A9B';	//C
	unicodeValue["D"] = '\u0AA2';	//D
	unicodeValue["E"] = '\u0AC8';	//E
	unicodeValue["F"] = '\u0A9E';	//F
	unicodeValue["G"] = '\u0A98';	//G
	unicodeValue["H"] = '\u0A83';	//H
	unicodeValue["I"] = '\u0AC0';	//I
	unicodeValue["J"] = '\u0A9D';	//J
	unicodeValue["K"] = '\u0A96';	//K
	//unicodeValue["L"] = 'L';	//L
	unicodeValue["M"] = '\u0A82';	//M
	unicodeValue["N"] = '\u0AA3';	//N
	unicodeValue["O"] = '\u0ACC';	//O
	unicodeValue["P"] = '\u0AAB';	//P
	unicodeValue["Q"] = '\u0AC4';	//Q
	unicodeValue["R"] = '\u0AB7';	//R
	unicodeValue["S"] = '\u0AB6';	//S
	unicodeValue["T"] = '\u0AA0';	//T
	unicodeValue["U"] = '\u0AC2';	//U
	//unicodeValue["V"] = 'V';	//V
	unicodeValue["W"] = '\u0AA5';	//W
	unicodeValue["X"] = '\u0AA7';	//X
	unicodeValue["Y"] = '\u0ABD';	//Y
	unicodeValue["Z"] = '\u0ABC';	//Z
	//unicodeValue[89] = '\u0AA6';
	//unicodeValue[90] = '\u0A81';
	//unicodeValue[90] = '\u0ABD';

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

	text=text.replace(/(lYY)eV([MHz])/g, function() {
		return unicodeValue[arguments[1]] + unicodeValue["eV"] + unicodeValue[arguments[2]];
	});
	
    text=text.replace(/(lYY)eV/g, function() {
		return unicodeValue[arguments[1]] + unicodeValue["eV"];
	});
	
    text=text.replace(/(lYY)EY([MHz])/g, function() {
		return unicodeValue[arguments[1]] + unicodeValue["EY"] + unicodeValue[arguments[2]];
	});

    text=text.replace(/(lYY)EY/g, function() {
		return unicodeValue[arguments[1]] + unicodeValue["EY"];
	});

    text=text.replace(/(lYY)oV([MHz])/g, function () {
		return unicodeValue[arguments[1]] + unicodeValue["oV"] + unicodeValue[arguments[2]];
	});
    text=text.replace(/(lYY)oV/g, function() {
		return  unicodeValue[arguments[1]] + unicodeValue["oV"];
	});
    text=text.replace(/(lYY)OY([MHz])/g, function() {
		return unicodeValue[arguments[1]] + unicodeValue["OY"] + unicodeValue[arguments[2]]; 
	});

    text=text.replace(/(lYY)OY/g, function() {
		return  unicodeValue[arguments[1]] + unicodeValue["OY"];
	});
	
    text=text.replace(/(lYY)([AiIuUeEoO])([MHz])/g, function() {
		return unicodeValue[arguments[1]] + unicodeValue[arguments[2]] + unicodeValue[arguments[3]];
	});

    text=text.replace(/(lYY)([AiIuUeEoO])/g, function(){
		return unicodeValue[arguments[1]] + unicodeValue[arguments[2]];
	});
	
    text=text.replace(/(lYY)a([MHz])/g, function() {
		return unicodeValue[arguments[1]] + unicodeValue[arguments[2]];
	});

    text=text.replace(/(lYY)a/g, function() {
		return unicodeValue[arguments[1]];
	});

    text=text.replace(/(lYY)/g, function(){
		return unicodeValue[arguments[1]] + unicodeValue["_"];
	});

	text=text.replace(/(lYY)eV([MHz])/g, function() {
		return unicodeValue[arguments[1]] + unicodeValue["eV"] + unicodeValue[arguments[2]];
	});
	
    text=text.replace(/(lYY)eV/g, function() {
		return unicodeValue[arguments[1]] + unicodeValue["eV"];
	});
	
    text=text.replace(/(lYY)EY([MHz])/g, function() {
		return unicodeValue[arguments[1]] + unicodeValue["EY"] + unicodeValue[arguments[2]];
	});

    text=text.replace(/(lYY)EY/g, function() {
		return unicodeValue[arguments[1]] + unicodeValue["EY"];
	});

    text=text.replace(/(lYY)oV([MHz])/g, function () {
		return unicodeValue[arguments[1]] + unicodeValue["oV"] + unicodeValue[arguments[2]];
	});
    text=text.replace(/(lYY)oV/g, function() {
		return  unicodeValue[arguments[1]] + unicodeValue["oV"];
	});
    text=text.replace(/(lYY)OY([MHz])/g, function() {
		return unicodeValue[arguments[1]] + unicodeValue["OY"] + unicodeValue[arguments[2]]; 
	});

    text=text.replace(/(lYY)OY/g, function() {
		return  unicodeValue[arguments[1]] + unicodeValue["OY"];
	});

    text=text.replace(/(lYY)([AiIuUeEoO])([MHz])/g, function() {
		return unicodeValue[arguments[1]] + unicodeValue[arguments[2]] + unicodeValue[arguments[3]];
	});

    text=text.replace(/(lYY)([AiIuUeEoO])/g, function(){
		return unicodeValue[arguments[1]] + unicodeValue[arguments[2]];
	});

    text=text.replace(/(lYY)a([MHz])/g, function() {
		return unicodeValue[arguments[1]] + unicodeValue[arguments[2]];
	});

    text=text.replace(/(lYY)a/g, function() {
		return unicodeValue[arguments[1]];
	});

    text=text.replace(/(lYY)/g, function(){
		return unicodeValue[arguments[1]] + unicodeValue["_"];
	});

	//lY cases
	text=text.replace(/(lY)eV([MHz])/g, function() {
		return unicodeValue[arguments[1]] + unicodeValue["eV"] + unicodeValue[arguments[2]];
	});
	
    text=text.replace(/(lY)eV/g, function() {
		return unicodeValue[arguments[1]] + unicodeValue["eV"];
	});
	
    text=text.replace(/(lY)EY([MHz])/g, function() {
		return unicodeValue[arguments[1]] + unicodeValue["EY"] + unicodeValue[arguments[2]];
	});

    text=text.replace(/(lY)EY/g, function() {
		return unicodeValue[arguments[1]] + unicodeValue["EY"];
	});

    text=text.replace(/(lY)oV([MHz])/g, function () {
		return unicodeValue[arguments[1]] + unicodeValue["oV"] + unicodeValue[arguments[2]];
	});
    text=text.replace(/(lY)oV/g, function() {
		return  unicodeValue[arguments[1]] + unicodeValue["oV"];
	});
    text=text.replace(/(lY)OY([MHz])/g, function() {
		return unicodeValue[arguments[1]] + unicodeValue["OY"] + unicodeValue[arguments[2]]; 
	});

    text=text.replace(/(lY)OY/g, function() {
		return  unicodeValue[arguments[1]] + unicodeValue["OY"];
	});

    text=text.replace(/(lY)([AiIuUeEoO])([MHz])/g, function() {
		return unicodeValue[arguments[1]] + unicodeValue[arguments[2]] + unicodeValue[arguments[3]];
	});

    text=text.replace(/(lY)([AiIuUeEoO])/g, function(){
		return unicodeValue[arguments[1]] + unicodeValue[arguments[2]];
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
	//nY cases
	text=text.replace(/(nY)eV([MHz])/g, function() {
		return unicodeValue[arguments[1]] + unicodeValue["eV"] + unicodeValue[arguments[2]];
	});
	
    text=text.replace(/(nY)eV/g, function() {
		return unicodeValue[arguments[1]] + unicodeValue["eV"];
	});
	
    text=text.replace(/(nY)EY([MHz])/g, function() {
		return unicodeValue[arguments[1]] + unicodeValue["EY"] + unicodeValue[arguments[2]];
	});

    text=text.replace(/(nY)EY/g, function() {
		return unicodeValue[arguments[1]] + unicodeValue["EY"];
	});

    text=text.replace(/(nY)oV([MHz])/g, function () {
		return unicodeValue[arguments[1]] + unicodeValue["oV"] + unicodeValue[arguments[2]];
	});
    text=text.replace(/(nY)oV/g, function() {
		return  unicodeValue[arguments[1]] + unicodeValue["oV"];
	});
    text=text.replace(/(nY)OY([MHz])/g, function() {
		return unicodeValue[arguments[1]] + unicodeValue["OY"] + unicodeValue[arguments[2]]; 
	});

    text=text.replace(/(nY)OY/g, function() {
		return  unicodeValue[arguments[1]] + unicodeValue["OY"];
	});

    text=text.replace(/(nY)([AiIuUeEoO])([MHz])/g, function() {
		return unicodeValue[arguments[1]] + unicodeValue[arguments[2]] + unicodeValue[arguments[3]];
	});

    text=text.replace(/(nY)([AiIuUeEoO])/g, function(){
		return unicodeValue[arguments[1]] + unicodeValue[arguments[2]];
	});

    text=text.replace(/(nY)a([MHz])/g, function() {
		return unicodeValue[arguments[1]] + unicodeValue[arguments[2]];
	});

    text=text.replace(/(nY)a/g, function() {
		return unicodeValue[arguments[1]];
	});

    text=text.replace(/(nY)/g, function(){
		return unicodeValue[arguments[1]] + unicodeValue["_"];
	});
	//rY cases
	text=text.replace(/(rY)eV([MHz])/g, function() {
		return unicodeValue[arguments[1]] + unicodeValue["eV"] + unicodeValue[arguments[2]];
	});
	
    text=text.replace(/(rY)eV/g, function() {
		return unicodeValue[arguments[1]] + unicodeValue["eV"];
	});
	
    text=text.replace(/(rY)EY([MHz])/g, function() {
		return unicodeValue[arguments[1]] + unicodeValue["EY"] + unicodeValue[2];
	});

    text=text.replace(/(rY)EY/g, function() {
		return unicodeValue[arguments[1]] + unicodeValue["EY"];
	});

    text=text.replace(/(rY)oV([MHz])/g, function () {
		return unicodeValue[arguments[1]] + unicodeValue["oV"] + unicodeValue[2];
	});
    text=text.replace(/(rY)oV/g, function() {
		return  unicodeValue[arguments[1]] + unicodeValue["oV"];
	});
    text=text.replace(/(rY)OY([MHz])/g, function() {
		return unicodeValue[arguments[1]] + unicodeValue["OY"] + unicodeValue[arguments[2]]; 
	});

    text=text.replace(/(rY)OY/g, function() {
		return  unicodeValue[arguments[1]] + unicodeValue["OY"];
	});

    text=text.replace(/(rY)([AiIuUeEoO])([MHz])/g, function() {
		return unicodeValue[arguments[1]] + unicodeValue[arguments[2]] + unicodeValue[arguments[3]];
	});

    text=text.replace(/(rY)([AiIuUeEoO])/g, function(){
		return unicodeValue[arguments[1]] + unicodeValue[arguments[2]];
	});

    text=text.replace(/(rY)a([MHz])/g, function() {
		return unicodeValue[arguments[1]] + unicodeValue[arguments[2]];
	});

    text=text.replace(/(rY)a/g, function() {
		return unicodeValue[arguments[1]];
	});

    text=text.replace(/(rY)/g, function(){
		return unicodeValue[arguments[1]] + unicodeValue["_"];
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
		return unicodeValue_vowels["aq"];
	});

	var r1 =/q/g;
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

	console.log("Iam here"+text);
	text = text.replace(/([a-zA-Z])/g, function(a) {
		//console.log(a);
		//if(typeof unicodeValue_vowels[a] != "undefined") 
		if(a in unicodeValue_vowels) {
			return chr = unicodeValue_vowels[a];
		} else {
			return a;
		}
	});
	
	text = text.replace(/([a-zA-Z])+/g, function(a) {
		if(a in unicodeValue) {
			return chr = unicodeValue[a];
		} else {
			return a;
		}
	});
	
	return text;
	//$("#output").val(text);

/* added by nagaraju V for keboard press */
}

//tamil-utf2wx
function convert_guj_utf2wx(text) {
	//var text = $("#input").val();
	
	var unicodeValue = new Array();
	var unicodeValue_vowels = new Array();
	unicodeValue_vowels["\u0A85"] = 'a';	//a
	unicodeValue_vowels["\u0A86"] = 'A';
	unicodeValue_vowels["\u0A87"] = 'i';
	unicodeValue_vowels["\u0A88"] = 'I';
	unicodeValue_vowels["\u0A89"] = 'u';
	unicodeValue_vowels["\u0A8A"] = 'U';
	unicodeValue_vowels["\u0A8B"] = 'q';
	unicodeValue_vowels["\u0A8C"] = 'lq';
	unicodeValue_vowels["\u0A8F"] = 'e';
	unicodeValue_vowels["\u0A90"] = 'E';
	unicodeValue_vowels["\u0A93"] = 'o';
	unicodeValue_vowels["\u0A94"] = 'O';
//	unicodeValue["\u0A81"] = 'z';	//z
	unicodeValue["\u0AB3"] = 'lY';
	unicodeValue["\u0AC5"] = 'EY';
	unicodeValue["\u0AB4"] = 'lYY';
	unicodeValue["\u0AA9"] = 'nY';
	unicodeValue["\u0AB1"] = 'rY';
	unicodeValue["\u0AC6"] = 'eV';
	unicodeValue["\u0AC9"] = 'OY';
	unicodeValue["\u0ACA"] = 'oV';

	/***********Three Character length words**************/
/*Uncommented By Nagaraju to allow display of below 3 letter characters*/
	unicodeValue_vowels["\u0A8D"] = 'EY';
	unicodeValue_vowels["\u0A8E"] = 'eV';
	
	unicodeValue_vowels["\u0A91"] = 'OY';
	unicodeValue_vowels["\u0A92"] = 'oV';

/* added by nagaraju V for keboard press */
//	unicodeValue["k_R"]='\u0A95\u0ACD\u0AB7';
//	unicodeValue["w_r"]='\u0AA4\u0ACD\u0AB0';
//	unicodeValue["j_F"]='\u0A9C\u0ACD\u0A9E';

	/*unicodeValue_vowels["z"]='\u0A85\u0A81';
	unicodeValue_vowels["M"]='\u0A85\u0A82';
	unicodeValue_vowels["H"]='\u0A85\u0A83';
	unicodeValue_vowels["Q"]='\u0AE0';*/

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
	unicodeValue["\u0ACD"] = '';	//_
	unicodeValue["61"] = '=';	//=
	unicodeValue["43"] = '+';	//+
	unicodeValue["\u0AE4"] = '|';	//|
	unicodeValue["~"] = '~';	//|
	unicodeValue["`"] = '`';	//|
	unicodeValue["\\"] = '\\';	//|


	/***************numbers mapping ***********************/

	unicodeValue["\u0AE6"] = '0';	//0
	unicodeValue["\u0AE7"] = '1';	//1
	unicodeValue["\u0AE8"] = '2';	//2
	unicodeValue["\u0AE9"] = '3';	//3
	unicodeValue["\u0AEA"] = '4';	//4
	unicodeValue["\u0AEB"] = '5';	//5
	unicodeValue["\u0AEC"] = '6';	//6
	unicodeValue["\u0AED"] = '7';	//7
	unicodeValue["\u0AEE"] = '8';	//8
	unicodeValue["\u0AEF"] = '9';	//9

	/*****************a-z mappings***************************/

	unicodeValue["\u0A85"] = 'a';	//a
	unicodeValue["\u0AAC"] = 'b';	//b
	unicodeValue["\u0A9A"] = 'c';	//c
	unicodeValue["\u0AA1"] = 'd';	//d
	unicodeValue["\u0AC7"] = 'e';	//e
	unicodeValue["\u0A99"] = 'f';	//f
	unicodeValue["\u0A97"] = 'g';	//g
	unicodeValue["\u0AB9"] = 'h';	//h
	unicodeValue["\u0ABF"] = 'i';	//i
	unicodeValue["\u0A9C"] = 'j';	//j
	unicodeValue["\u0A95"] = 'k';	//k
	unicodeValue["\u0AB2"] = 'l';	//l
	unicodeValue["\u0AAE"] = 'm';	//m
	unicodeValue["\u0AA8"] = 'n';	//n
	unicodeValue["\u0ACB"] = 'o';	//o
	unicodeValue["\u0AAA"] = 'p';	//p
	unicodeValue["\u0AC3"] = 'q';	//q
	unicodeValue["\u0AB0"] = 'r';	//r
	unicodeValue["\u0AB8"] = 's';	//s
	unicodeValue["\u0A9F"] = 't';	//t
	unicodeValue["\u0AC1"] = 'u';	//u
	unicodeValue["\u0AB5"] = 'v';	//v
	unicodeValue["\u0AA4"] = 'w';	//w
	unicodeValue["\u0AA6"] = 'x';	//x
	unicodeValue["\u0AAF"] = 'y';	//y
	unicodeValue["\u0A81"] = 'z';	//z

	/*******************A-Z mappings*****************************/

	unicodeValue["\u0ABE"] = 'A';	//A
	unicodeValue["\u0AAD"] = 'B';	//B
	unicodeValue["\u0A9B"] = 'C';	//C
	unicodeValue["\u0AA2"] = 'D';	//D
	unicodeValue["\u0AC8"] = 'E';	//E
	unicodeValue["\u0A9E"] = 'F';	//F
	unicodeValue["\u0A98"] = 'G';	//G
	unicodeValue["\u0A83"] = 'H';	//H
	unicodeValue["\u0AC0"] = 'I';	//I
	unicodeValue["\u0A9D"] = 'J';	//J
	unicodeValue["\u0A96"] = 'K';	//K
	//unicodeValue["L"] = 'L';	//L
	unicodeValue["\u0A82"] = 'M';	//M
	unicodeValue["\u0AA3"] = 'N';	//N
	unicodeValue["\u0ACC"] = 'O';	//O
	unicodeValue["\u0AAB"] = 'P';	//P
	unicodeValue["\u0AC4"] = 'Q';	//Q
	unicodeValue["\u0AB7"] = 'R';	//R
	unicodeValue["\u0AB6"] = 'S';	//S
	unicodeValue["\u0AA0"] = 'T';	//T
	unicodeValue["\u0AC2"] = 'U';	//U
	//unicodeValue["V"] = 'V';	//V
	unicodeValue["\u0AA5"] = 'W';	//W
	unicodeValue["\u0AA7"] = 'X';	//X
	unicodeValue["\u0ABD"] = 'Y';	//Y
	unicodeValue["\u0ABC"] = 'Z';	//Z
	//unicodeValue[89] = '\u0AA6';
	//unicodeValue[90] = '\u0A81';
	//unicodeValue[90] = '\u0ABD';

	//CONSONANT+HALANT
	var r1 = /([\u0A95-\u0AB9])\u0ACD/g;
	text = text.replace(r1,function(){
		return unicodeValue[arguments[1]]+unicodeValue["\u0ACD"];
	});

	//CONSONANT+NUKTA+MATRA+MODIFIER 
	var r1 = /([\u0A95-\u0AB9])\u0ABC([\u0ABE-\u0ACC])([\u0A81-\u0A83])/g;
	text = text.replace(r1,function(){
		return unicodeValue[arguments[1]]+unicodeValue["\u0ABC"]+unicodeValue[arguments[2]]+unicodeValue[arguments[3]];
	});

	//CONSONANT+NUKTA+MATRA
	var r1 = /([\u0A95-\u0AB9])\u0ABC([\u0ABE-\u0ACC])/g;
	text = text.replace(r1,function(){
		return unicodeValue[arguments[1]]+unicodeValue["\u0ABC"]+unicodeValue[arguments[2]];
	});

	//CONSONANT+NUKTA+MODIFIER
	var r1 = /([\u0A95-\u0AB9])\u0ABC([\u0A81-\u0A83])/g;
	text = text.replace(r1,function(){
		return unicodeValue[arguments[1]]+unicodeValue["\u0ABC"]+unicodeValue[arguments[2]];
	});
	//CONSONANT+NUKTA
	var r1 = /([\u0A95-\u0AB9])\u0ABC/g;
	text = text.replace(r1,function(){
		return unicodeValue[arguments[1]]+unicodeValue["\u0ABC"]+'a';
	});

	//CONSONANT+MATRA+MODIFIER 
	var r1 = /([\u0A95-\u0AB9])([\u0ABE-\u0ACC])([\u0A81-\u0A83])/g;
	text = text.replace(r1,function(){
		return unicodeValue[arguments[1]]+unicodeValue[arguments[2]]+unicodeValue[arguments[3]];
	});

	//CONSONANT+MATRA 
	var r1 = /([\u0A95-\u0AB9])([\u0ABE-\u0ACC])/g;
	text = text.replace(r1,function(){
		return unicodeValue[arguments[1]]+unicodeValue[arguments[2]];
	});

	//CONSONANT+MODIFIER
	var r1 = /([\u0A95-\u0AB9])([\u0A81-\u0A83])/g;
	text = text.replace(r1,function(){
		return unicodeValue[arguments[1]]+'a'+unicodeValue[arguments[2]];
	});

	//CONSONANT
	var r1 = /([\u0A95-\u0AB9])/g;
	text = text.replace(r1,function(){
		return unicodeValue[arguments[1]]+'a';
	});

	//VOWEL+MODIFIER,VOWEL
	var r1 = /([\u0A86-\u0A94])([\u0A81-\u0A83])/g;
	text = text.replace(r1,function(){
		return unicodeValue_vowels[arguments[1]]+unicodeValue[arguments[2]];
	});

	//VOWEL+MODIFIER,VOWEL
	var r1 = /([\u0A85])([\u0A81-\u0A83])/g;
	text = text.replace(r1,function(){
		return 'a'+unicodeValue[arguments[2]];
	});
	//console.log("Iam here " +text);

	//VOWEL+MODIFIER,VOWEL
	var r1 = /([\u0A86-\u0A94])/g;
	text = text.replace(r1,function(){
		return unicodeValue_vowels[arguments[1]];
	});
	//console.log("Iam here " +text);

	text = text.replace(/([\u0A80-\u0AFF])/g, function(a) {
		//console.log(a);
		//if(typeof unicodeValue_vowels[a] != "undefined") 
		if(a in unicodeValue_vowels) {
			return chr = unicodeValue_vowels[a];
		} else {
			return a;
		}
	});

	//console.log("Iam here"+text);
	text = text.replace(/([\u0A80-\u0AFF])/g, function(a) {
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
