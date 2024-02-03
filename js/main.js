$(document).ready(function(){
	var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
	var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
		return new bootstrap.Tooltip(tooltipTriggerEl)
})

});
window.onload = function() {
	console.log(window.location.hash)
	if(!window.location.hash) {
		window.location = window.location + '#convert';
		window.location.reload();
	}
}
var numbersConvertFlag = 1;

function utf2wx(lang, text){
	if(lang == "tel") {
		out = convert_tel_utf2wx(text);
	} else if(lang == "mal") {
			out = convert_mal_utf2wx(text);
	} else if(lang == "kan") {
			out = convert_kan_utf2wx(text);
	} else if(lang == "ori") {
			out = convert_ori_utf2wx(text);
	} else if(lang == "pan") {
			out = convert_pan_utf2wx(text);
	} else if(lang == "tam") {
		out = convert_tam_utf2wx(text);
	} else {
		out = convert_hin_utf2wx(text);
	}
	return out;
}
function wx2utf(lang, text) {
	if ($('#numbersConvert').is(":checked") ) {
		numbersConvertFlag = 1;
	} else {
		numbersConvertFlag = 0;
	}
	if(lang == "tel") {
		out = convert_tel_wx2utf(text);
	} else if(lang == "tam") {
		out = convert_tam_wx2utf(text);
	} else if(lang == "mal") {
		out = convert_mal_wx2utf(text);
	} else if(lang == "kan") {
		out = convert_kan_wx2utf(text);
	} else if(lang == "ori") {
		out = convert_ori_wx2utf(text);
	} else if(lang == "pan") {
		out = convert_pan_wx2utf(text);
	} else {
		out = convert_hin_wx2utf(text);
	}
	return out;
}
function transliteration(){
	var text = $("#input").val();
	var lang = $("#lang").val();
	var tgtlang = $("#tgtlang").val();

	//get WX of source language
	var out_text1 = utf2wx(lang, text);

	//get utf of target language
	var out_text2 = wx2utf(tgtlang, out_text1);
	$("#output").val(out_text2);
}

function convert_utf2wx() {
	var text = $("#input").val();
	var lang = $("#lang").val();
	var funcname = 'convert_' + lang + '_utf2wx(text)';
	text = utf2wx(lang,text);
	$("#output").val(text);
}
function convert_wx2utf() {
	var text = $("#input").val();
	var lang = $("#lang").val();
	text = wx2utf(lang, text);
	$("#output").val(text);
}
function convert_roman2utf() {
	var text = $("#input").val();
	var lang = $("#lang").val();
	var out = '';
	text = roman2wx(text);
	text = wx2utf(lang, text);
	$("#output").val(text);
}
function convert_utf2roman(text) {
	var text = $("#input").val();
	var lang = $("#lang").val();
	var out = '';
	text = utf2wx(lang, text);
	console.log(text);
	text = wx2roman(text);
	console.log(text);
	$("#output").val(text);
}

function convert_wx2roman(){
	var text = $("#input").val();
	text = wx2roman(text);
	$("#output").val(text);
}
function convert_roman2wx(){
	var text = $("#input").val();
	text = roman2wx(text);
	$("#output").val(text);
}

function interchangeInpOut(){
	var i = $("#input").val();
	var o = $("#output").val();
	$("#input").val(o);
	$("#output").val(i);
}

function reset(){
	if (confirm('Are you sure you want to clear input and output text?')) {
		// Save it!
		//console.log('Thing was saved to the database.');

		$("#input").val("");
		$("#output").val("");
		document.getElementById("formFile").value = null;
		inputFileName = '';
	  } else {
		// Do nothing!
		//console.log('Thing was not saved to the database.');
	  }
	//$("#lang").val("");
}

var inputFileName = '';
function readFileToString(elem){
	var input = document.getElementById(elem);
	var reader = new FileReader();
	inputFileName = input.files[0]['name'].replace(/\.txt/g, "_out.txt");
  	reader.onload = function() {
		var text = reader.result;
		//var node = document.getElementById('input');
		//node.innerText = text;
		$("#input").val(text);
		//console.log(reader.result.substring(0, 200));
	};
	reader.readAsText(input.files[0]);
}

function downloadFile(type){
	var download_text = '';
	if(type== "source") {
		download_text = $("#input").val();
	} else if(type == "target"){
		download_text = $("#output").val();
	} else {
		var src_text = $("#input").val();
		var tgt_text = $("#output").val();
		var arr1 = src_text.split("\n");
		var arr2 = tgt_text.split("\n");
		for (var i=0;i<arr1.length;i++){
			download_text += arr1[i] + "\t" + arr2[i] + "\n";
		}
	}
	download_text = download_text.trim();
	if(typeof download_text == "undefined" || download_text == ""){
		return false;
	}
	if(inputFileName == "") {
		inputFileName = 'transliteration_out.txt';
	}
	var blob = new Blob([download_text], {type: "text/plain;charset=utf-8"});
    saveAs(blob, inputFileName);
}

function applyFonts(){
	var lang = $("#lang").val();
	if(lang == "tel") {
		$("#input,#output").css("font-family", 'telugumandali');
	} else if(lang == "tam"){
		$("#input,#output").css("font-family", 'lohittamil');
	} else if(lang == "hin"){
		$("#input,#output").css("font-family", 'Lohit Devanagari');
	}
}

function showChart(){
	if ($('#showChart').is(":checked") ) {
		var lang = $("#lang").val();
		var func_name = 'view' + lang[0].toUpperCase() + lang[1] +lang[2] + 'Chart()';
		eval(func_name);
		$("#chart").show();
	} else {
		$("#chart").hide();
		return;
	}
}