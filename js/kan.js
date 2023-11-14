//tamil-wx2utf
//console.log = function() {};
function convert_kan_wx2utf(text) {
	//var text = $("#input").val();
	
	var unicodeValue = new Array();
	var unicodeValue_vowels = new Array();
	unicodeValue_vowels["a"] = '\u0C85';	//a
	unicodeValue_vowels["A"]='\u0C86';
	unicodeValue_vowels["i"]='\u0C87';
	unicodeValue_vowels["I"]='\u0C88';
	unicodeValue_vowels["u"]='\u0C89';
	unicodeValue_vowels["U"]='\u0C8A';
	unicodeValue_vowels["q"]='\u0C8B';
	unicodeValue_vowels["lq"]='\u0C8C';
	unicodeValue_vowels["e"]='\u0C8F';
	unicodeValue_vowels["E"]='\u0C90';
	unicodeValue_vowels["o"]='\u0C93';
	unicodeValue_vowels["O"]='\u0C94';

	// unicodeValue_vowels["aa"] = '\u0C85';	//a
	unicodeValue_vowels["aA"]='\u0C86';
	unicodeValue_vowels["ai"]='\u0C87';
	unicodeValue_vowels["aI"]='\u0C88';
	unicodeValue_vowels["au"]='\u0C89';
	unicodeValue_vowels["aU"]='\u0C8A';
	unicodeValue_vowels["aq"]='\u0C8B';
	unicodeValue_vowels["alq"]='\u0C8C';
	unicodeValue_vowels["ae"]='\u0C8F';
	unicodeValue_vowels["eE"]='\u0C90';
	unicodeValue_vowels["ao"]='\u0C93';
	unicodeValue_vowels["aO"]='\u0C94';

//	unicodeValue_vowels["z"] = '\u0C81';	//z
	unicodeValue["lY"]='\u0CB3';
	unicodeValue["lYY"]='\u0CB4';
	unicodeValue["nY"]='\u0CA9';
	unicodeValue["rY"]='\u0CB1';
	unicodeValue["EY"]='\u0CC5';
	unicodeValue["eV"]='\u0CC6';
	unicodeValue["aeV"]='\u0CC6';
	unicodeValue["OY"]='\u0CC9';
	unicodeValue["oV"]='\u0CCA';
	unicodeValue["aoV"]='\u0CCA';

	/***********Three Character length words**************/
/*Uncommented By Nagaraju to allow display of below 3 letter characters*/
	unicodeValue_vowels["EY"]='\u0C8D';
	unicodeValue_vowels["eV"]='\u0C8E';
	
	unicodeValue_vowels["OY"]='\u0C91';
	unicodeValue_vowels["oV"]='\u0C92';
	unicodeValue_vowels["aEY"]='\u0C8D';
	unicodeValue_vowels["aeV"]='\u0C8E';
	
	unicodeValue_vowels["aOY"]='\u0C91';
	unicodeValue_vowels["aoV"]='\u0C92';

/* added by nagaraju V for keboard press */
//	unicodeValue["k_R"]='\u0C95\u0CCD\u0CB7';
//	unicodeValue["w_r"]='\u0CA4\u0CCD\u0CB0';
//	unicodeValue["j_F"]='\u0C9C\u0CCD\u0C9E';

	/*unicodeValue_vowels["z"]='\u0C85\u0C81';
	unicodeValue_vowels["M"]='\u0C85\u0C82';
	unicodeValue_vowels["H"]='\u0C85\u0C83';
	unicodeValue_vowels["Q"]='\u0CE0';*/

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
	unicodeValue["_"] = '\u0CCD';	//_
	unicodeValue["="] = '61';	//=
	unicodeValue["+"] = '43';	//+
	unicodeValue["|"] = '\u0CE4';	//|
	unicodeValue["~"] = '~';	//|
	unicodeValue["`"] = '`';	//|
	unicodeValue["\\"] = '\\';	//|


	/***************numbers mapping ***********************/

	unicodeValue["0"] = '\u0CE6';	//0
	unicodeValue["1"] = '\u0CE7';	//1
	unicodeValue["2"] = '\u0CE8';	//2
	unicodeValue["3"] = '\u0CE9';	//3
	unicodeValue["4"] = '\u0CEA';	//4
	unicodeValue["5"] = '\u0CEB';	//5
	unicodeValue["6"] = '\u0CEC';	//6
	unicodeValue["7"] = '\u0CED';	//7
	unicodeValue["8"] = '\u0CEE';	//8
	unicodeValue["9"] = '\u0CEF';	//9

	/*****************a-z mappings***************************/

	unicodeValue["a"] = '\u0C85';	//a
	unicodeValue["b"] = '\u0CAC';	//b
	unicodeValue["c"] = '\u0C9A';	//c
	unicodeValue["d"] = '\u0CA1';	//d
	unicodeValue["e"] = '\u0CC7';	//e
	unicodeValue["f"] = '\u0C99';	//f
	unicodeValue["g"] = '\u0C97';	//g
	unicodeValue["h"] = '\u0CB9';	//h
	unicodeValue["i"] = '\u0CBF';	//i
	unicodeValue["j"] = '\u0C9C';	//j
	unicodeValue["k"] = '\u0C95';	//k
	unicodeValue["l"] = '\u0CB2';	//l
	unicodeValue["m"] = '\u0CAE';	//m
	unicodeValue["n"] = '\u0CA8';	//n
	unicodeValue["o"] = '\u0CCB';	//o
	unicodeValue["p"] = '\u0CAA';	//p
	unicodeValue["q"] = '\u0CC3';	//q
	unicodeValue["r"] = '\u0CB0';	//r
	unicodeValue["s"] = '\u0CB8';	//s
	unicodeValue["t"] = '\u0C9F';	//t
	unicodeValue["u"] = '\u0CC1';	//u
	unicodeValue["v"] = '\u0CB5';	//v
	unicodeValue["w"] = '\u0CA4';	//w
	unicodeValue["x"] = '\u0CA6';	//x
	unicodeValue["y"] = '\u0CAF';	//y
	unicodeValue["z"] = '\u0C81';	//z

	/*******************A-Z mappings*****************************/

	unicodeValue["A"] = '\u0CBE';	//A
	unicodeValue["B"] = '\u0CAD';	//B
	unicodeValue["C"] = '\u0C9B';	//C
	unicodeValue["D"] = '\u0CA2';	//D
	unicodeValue["E"] = '\u0CC8';	//E
	unicodeValue["F"] = '\u0C9E';	//F
	unicodeValue["G"] = '\u0C98';	//G
	unicodeValue["H"] = '\u0C83';	//H
	unicodeValue["I"] = '\u0CC0';	//I
	unicodeValue["J"] = '\u0C9D';	//J
	unicodeValue["K"] = '\u0C96';	//K
	//unicodeValue["L"] = 'L';	//L
	unicodeValue["M"] = '\u0C82';	//M
	unicodeValue["N"] = '\u0CA3';	//N
	unicodeValue["O"] = '\u0CCC';	//O
	unicodeValue["P"] = '\u0CAB';	//P
	unicodeValue["Q"] = '\u0CC4';	//Q
	unicodeValue["R"] = '\u0CB7';	//R
	unicodeValue["S"] = '\u0CB6';	//S
	unicodeValue["T"] = '\u0CA0';	//T
	unicodeValue["U"] = '\u0CC2';	//U
	//unicodeValue["V"] = 'V';	//V
	unicodeValue["W"] = '\u0CA5';	//W
	unicodeValue["X"] = '\u0CA7';	//X
	unicodeValue["Y"] = '\u0CBD';	//Y
	unicodeValue["Z"] = '\u0CBC';	//Z
	//unicodeValue[89] = '\u0CA6';
	//unicodeValue[90] = '\u0C81';
	//unicodeValue[90] = '\u0CBD';

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
	text = text.replace(/([A-z])/g, function(a) {
		//console.log(a);
		//if(typeof unicodeValue_vowels[a] != "undefined") 
		if(a in unicodeValue_vowels) {
			return chr = unicodeValue_vowels[a];
		} else {
			return a;
		}
	});
	
	text = text.replace(/([A-z])+/g, function(a) {
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
function convert_kan_utf2wx(text) {
	//var text = $("#input").val();
	
	var unicodeValue = new Array();
	var unicodeValue_vowels = new Array();
	unicodeValue_vowels["\u0C85"] = 'a';	//a
	unicodeValue_vowels["\u0C86"] = 'A';
	unicodeValue_vowels["\u0C87"] = 'i';
	unicodeValue_vowels["\u0C88"] = 'I';
	unicodeValue_vowels["\u0C89"] = 'u';
	unicodeValue_vowels["\u0C8A"] = 'U';
	unicodeValue_vowels["\u0C8B"] = 'q';
	unicodeValue_vowels["\u0C8C"] = 'lq';
	unicodeValue_vowels["\u0C8F"] = 'e';
	unicodeValue_vowels["\u0C90"] = 'E';
	unicodeValue_vowels["\u0C93"] = 'o';
	unicodeValue_vowels["\u0C94"] = 'O';
//	unicodeValue["\u0C81"] = 'z';	//z
	unicodeValue["\u0CB3"] = 'lY';
	unicodeValue["\u0CC5"] = 'EY';
	unicodeValue["\u0CB4"] = 'lYY';
	unicodeValue["\u0CA9"] = 'nY';
	unicodeValue["\u0CB1"] = 'rY';
	unicodeValue["\u0CC6"] = 'eV';
	unicodeValue["\u0CC9"] = 'OY';
	unicodeValue["\u0CCA"] = 'oV';

	/***********Three Character length words**************/
/*Uncommented By Nagaraju to allow display of below 3 letter characters*/
	unicodeValue_vowels["\u0C8D"] = 'EY';
	unicodeValue_vowels["\u0C8E"] = 'eV';
	
	unicodeValue_vowels["\u0C91"] = 'OY';
	unicodeValue_vowels["\u0C92"] = 'oV';

/* added by nagaraju V for keboard press */
//	unicodeValue["k_R"]='\u0C95\u0CCD\u0CB7';
//	unicodeValue["w_r"]='\u0CA4\u0CCD\u0CB0';
//	unicodeValue["j_F"]='\u0C9C\u0CCD\u0C9E';

	/*unicodeValue_vowels["z"]='\u0C85\u0C81';
	unicodeValue_vowels["M"]='\u0C85\u0C82';
	unicodeValue_vowels["H"]='\u0C85\u0C83';
	unicodeValue_vowels["Q"]='\u0CE0';*/

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
	unicodeValue["\u0CCD"] = '';	//_
	unicodeValue["61"] = '=';	//=
	unicodeValue["43"] = '+';	//+
	unicodeValue["\u0CE4"] = '|';	//|
	unicodeValue["~"] = '~';	//|
	unicodeValue["`"] = '`';	//|
	unicodeValue["\\"] = '\\';	//|


	/***************numbers mapping ***********************/

	unicodeValue["\u0CE6"] = '0';	//0
	unicodeValue["\u0CE7"] = '1';	//1
	unicodeValue["\u0CE8"] = '2';	//2
	unicodeValue["\u0CE9"] = '3';	//3
	unicodeValue["\u0CEA"] = '4';	//4
	unicodeValue["\u0CEB"] = '5';	//5
	unicodeValue["\u0CEC"] = '6';	//6
	unicodeValue["\u0CED"] = '7';	//7
	unicodeValue["\u0CEE"] = '8';	//8
	unicodeValue["\u0CEF"] = '9';	//9

	/*****************a-z mappings***************************/

	unicodeValue["\u0C85"] = 'a';	//a
	unicodeValue["\u0CAC"] = 'b';	//b
	unicodeValue["\u0C9A"] = 'c';	//c
	unicodeValue["\u0CA1"] = 'd';	//d
	unicodeValue["\u0CC7"] = 'e';	//e
	unicodeValue["\u0C99"] = 'f';	//f
	unicodeValue["\u0C97"] = 'g';	//g
	unicodeValue["\u0CB9"] = 'h';	//h
	unicodeValue["\u0CBF"] = 'i';	//i
	unicodeValue["\u0C9C"] = 'j';	//j
	unicodeValue["\u0C95"] = 'k';	//k
	unicodeValue["\u0CB2"] = 'l';	//l
	unicodeValue["\u0CAE"] = 'm';	//m
	unicodeValue["\u0CA8"] = 'n';	//n
	unicodeValue["\u0CCB"] = 'o';	//o
	unicodeValue["\u0CAA"] = 'p';	//p
	unicodeValue["\u0CC3"] = 'q';	//q
	unicodeValue["\u0CB0"] = 'r';	//r
	unicodeValue["\u0CB8"] = 's';	//s
	unicodeValue["\u0C9F"] = 't';	//t
	unicodeValue["\u0CC1"] = 'u';	//u
	unicodeValue["\u0CB5"] = 'v';	//v
	unicodeValue["\u0CA4"] = 'w';	//w
	unicodeValue["\u0CA6"] = 'x';	//x
	unicodeValue["\u0CAF"] = 'y';	//y
	unicodeValue["\u0C81"] = 'z';	//z

	/*******************A-Z mappings*****************************/

	unicodeValue["\u0CBE"] = 'A';	//A
	unicodeValue["\u0CAD"] = 'B';	//B
	unicodeValue["\u0C9B"] = 'C';	//C
	unicodeValue["\u0CA2"] = 'D';	//D
	unicodeValue["\u0CC8"] = 'E';	//E
	unicodeValue["\u0C9E"] = 'F';	//F
	unicodeValue["\u0C98"] = 'G';	//G
	unicodeValue["\u0C83"] = 'H';	//H
	unicodeValue["\u0CC0"] = 'I';	//I
	unicodeValue["\u0C9D"] = 'J';	//J
	unicodeValue["\u0C96"] = 'K';	//K
	//unicodeValue["L"] = 'L';	//L
	unicodeValue["\u0C82"] = 'M';	//M
	unicodeValue["\u0CA3"] = 'N';	//N
	unicodeValue["\u0CCC"] = 'O';	//O
	unicodeValue["\u0CAB"] = 'P';	//P
	unicodeValue["\u0CC4"] = 'Q';	//Q
	unicodeValue["\u0CB7"] = 'R';	//R
	unicodeValue["\u0CB6"] = 'S';	//S
	unicodeValue["\u0CA0"] = 'T';	//T
	unicodeValue["\u0CC2"] = 'U';	//U
	//unicodeValue["V"] = 'V';	//V
	unicodeValue["\u0CA5"] = 'W';	//W
	unicodeValue["\u0CA7"] = 'X';	//X
	unicodeValue["\u0CBD"] = 'Y';	//Y
	unicodeValue["\u0CBC"] = 'Z';	//Z
	//unicodeValue[89] = '\u0CA6';
	//unicodeValue[90] = '\u0C81';
	//unicodeValue[90] = '\u0CBD';

	//CONSONANT+HALANT
	var r1 = /([\u0C95-\u0CB9])\u0CCD/g;
	text = text.replace(r1,function(){
		return unicodeValue[arguments[1]]+unicodeValue["\u0CCD"];
	});

	//CONSONANT+NUKTA+MATRA+MODIFIER 
	var r1 = /([\u0C95-\u0CB9])\u0CBC([\u0CBE-\u0CCC])([\u0C81-\u0C83])/g;
	text = text.replace(r1,function(){
		return unicodeValue[arguments[1]]+unicodeValue["\u0CBC"]+unicodeValue[arguments[2]]+unicodeValue[arguments[3]];
	});

	//CONSONANT+NUKTA+MATRA
	var r1 = /([\u0C95-\u0CB9])\u0CBC([\u0CBE-\u0CCC])/g;
	text = text.replace(r1,function(){
		return unicodeValue[arguments[1]]+unicodeValue["\u0CBC"]+unicodeValue[arguments[2]];
	});

	//CONSONANT+NUKTA+MODIFIER
	var r1 = /([\u0C95-\u0CB9])\u0CBC([\u0C81-\u0C83])/g;
	text = text.replace(r1,function(){
		return unicodeValue[arguments[1]]+unicodeValue["\u0CBC"]+unicodeValue[arguments[2]];
	});
	//CONSONANT+NUKTA
	var r1 = /([\u0C95-\u0CB9])\u0CBC/g;
	text = text.replace(r1,function(){
		return unicodeValue[arguments[1]]+unicodeValue["\u0CBC"]+'a';
	});

	//CONSONANT+MATRA+MODIFIER 
	var r1 = /([\u0C95-\u0CB9])([\u0CBE-\u0CCC])([\u0C81-\u0C83])/g;
	text = text.replace(r1,function(){
		return unicodeValue[arguments[1]]+unicodeValue[arguments[2]]+unicodeValue[arguments[3]];
	});

	//CONSONANT+MATRA 
	var r1 = /([\u0C95-\u0CB9])([\u0CBE-\u0CCC])/g;
	text = text.replace(r1,function(){
		return unicodeValue[arguments[1]]+unicodeValue[arguments[2]];
	});

	//CONSONANT+MODIFIER
	var r1 = /([\u0C95-\u0CB9])([\u0C81-\u0C83])/g;
	text = text.replace(r1,function(){
		return unicodeValue[arguments[1]]+'a'+unicodeValue[arguments[2]];
	});

	//CONSONANT
	var r1 = /([\u0C95-\u0CB9])/g;
	text = text.replace(r1,function(){
		return unicodeValue[arguments[1]]+'a';
	});

	//VOWEL+MODIFIER,VOWEL
	var r1 = /([\u0C86-\u0C94])([\u0C81-\u0C83])/g;
	text = text.replace(r1,function(){
		return unicodeValue_vowels[arguments[1]]+unicodeValue[arguments[2]];
	});

	//VOWEL+MODIFIER,VOWEL
	var r1 = /([\u0C85])([\u0C81-\u0C83])/g;
	text = text.replace(r1,function(){
		return 'a'+unicodeValue[arguments[2]];
	});
	//console.log("Iam here " +text);

	//VOWEL+MODIFIER,VOWEL
	var r1 = /([\u0C86-\u0C94])/g;
	text = text.replace(r1,function(){
		return unicodeValue_vowels[arguments[1]];
	});
	//console.log("Iam here " +text);

	text = text.replace(/([\u0C80-\u0CFF])/g, function(a) {
		//console.log(a);
		//if(typeof unicodeValue_vowels[a] != "undefined") 
		if(a in unicodeValue_vowels) {
			return chr = unicodeValue_vowels[a];
		} else {
			return a;
		}
	});

	//console.log("Iam here"+text);
	text = text.replace(/([\u0C80-\u0CFF])/g, function(a) {
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
