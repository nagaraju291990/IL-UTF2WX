function utf2wx(lang, text){
	if(lang == "tel") {
		out = convert_tel_utf2wx(text);
	} else if(lang == "tam") {
		out = convert_tam_utf2wx(text);
	} else {
		out = convert_hin_utf2wx(text);
	}
	return out;
}
function wx2utf(lang, text) {
	if(lang == "tel") {
		out = convert_tel_wx2utf(text);
	} else if(lang == "tam") {
		out = convert_tam_wx2utf(text);
	} else {
		out = convert_hin_wx2utf(text);
	}
	return out;
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