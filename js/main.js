function convert1() {
	var text = $("#input").val();
	var lang = $("#lang").val();
	var funcname = 'convert_' + lang + '_utf2wx(text)';
	var out = '';
	if(lang == "tel") {
		out = convert_tel_utf2wx(text);
	} else if(lang == "tam") {
		out = convert_tam_utf2wx(text);
	} else {
		out = convert_hin_utf2wx(text);
	}
	$("#output").val(out);
}
function convert2() {
	var text = $("#input").val();
	var lang = $("#lang").val();
	var out = '';
	if(lang == "tel") {
		out = convert_tel_wx2utf(text);
	} else if(lang == "tam") {
		out = convert_tam_wx2utf(text);
	} else {
		out = convert_hin_wx2utf(text);
	}
	$("#output").val(out);
}
