function roman2wx(text) {
    text = text.replace(/ā/g, "A");
    text = text.replace(/e/g, "eV");
    text = text.replace(/ē/g, "e");
    text = text.replace(/av/g, "O");
    text = text.replace(/o/g, "oV");
    text = text.replace(/ō/g, "o");
    text = text.replace(/ī/g, "I");
    text = text.replace(/ū/g, "U");
    text = text.replace(/ay/g, "E");
    text = text.replace(/ṅ/g, "f");
    text = text.replace(/ñ/g, "F");
    text = text.replace(/th/g, "W");
    text = text.replace(/t/g, "w");
    text = text.replace(/dh/g, "X");
    text = text.replace(/d/g, "x");
    text = text.replace(/ṭh/g, "T");
    text = text.replace(/ṭ/g, "t");
    text = text.replace(/ḍh/g, "D");
    text = text.replace(/ḍ/g, "d");
    text = text.replace(/ch/g, "C");
    text = text.replace(/c/g, "c");
    text = text.replace(/jh/g, "J");
    text = text.replace(/j/g, "j");
    text = text.replace(/ṙ/g, "q");
    text = text.replace(/ṝ/g, "Q");
    text = text.replace(/Ɂ/g, "H");
    text = text.replace(/ɫ/g, "lV");
    text = text.replace(/kh/g, "K");
    text = text.replace(/k/g, "k");
    text = text.replace(/gh/g, "G");
    text = text.replace(/g/g, "g");
    text = text.replace(/ph/g, "P");
    text = text.replace(/p/g, "p");
    text = text.replace(/bh/g, "B");
    text = text.replace(/b/g, "b");
    text = text.replace(/m/g, "m");
    text = text.replace(/n/g, "n");
    text = text.replace(/ṟ/g, "rY");
    text = text.replace(/ṉ/g, "nY");
    text = text.replace(/ṇ/g, "N");
    //text = text.replace(/ẓ/g, "lYY");
    text = text.replace(/ḻ/g, "lYY");
    text = text.replace(/ḷ/g, "lY");
    text = text.replace(/s/g, "s");
    text = text.replace(/ṣ/g, "R");
    text = text.replace(/ś/g, "S");
    text = text.replace(/w/g, "v");
    text = text.replace(/y/g, "y");
    return text;
}

function wx2roman(text) {
 
    text = text.replace(/A/g, "ā");
    //text = text.replace(/A/g, "\\={a}");
    text = text.replace(/e([^V])/g, "ē" + "$1");
    //text = text.replace(/e([^V])/g, "\\={e}$1");
    text = text.replace(/eV/g, "e");
    text = text.replace(/O/g, "av");
    text = text.replace(/o([^V])/g, "ō" + "$1");
    //text = text.replace(/o([^V])/g, "\\={o}$1");
    text = text.replace(/oV/g, "o");
    text = text.replace(/I/g, "ī");
    //text = text.replace(/I/g, "\\={\\i}$1");
    text = text.replace(/U/g, "ū");
    //text = text.replace(/U/g, "\\={u}$1");
    text = text.replace(/E/g, "ay");
//		text = text.replace(/H/g, "H");
    text = text.replace(/f/g, "ṅ");
    text = text.replace(/F/g, "ñ");
    //text = text.replace(/f/g, "\\\.{n}");
    text = text.replace(/t/g, "ṭ");
    text = text.replace(/T/g, "ṭh");
    text = text.replace(/d/g, "ḍ");
    text = text.replace(/D/g, "ḍh");
    //text = text.replace(/t/g, "\\d{t}");
    //text = text.replace(/T/g, "\\d{t}h");
    //text = text.replace(/d([^\{])/g, "\\d{d}$1");
    //text = text.replace(/D([^\{])/g, "\\d{d}h$1");

    text = text.replace(/c/g, "c");
    text = text.replace(/C/g, "ch");
    text = text.replace(/j/g, "j");
    text = text.replace(/J/g, "jh");
    text = text.replace(/q/g, "ṙ");
    text = text.replace(/Q/g, "ṝ");
    text = text.replace(/H/g, "Ɂ");
    text = text.replace(/lV/g, "ɫ");


    text = text.replace(/k/g, "k");
    text = text.replace(/K/g, "kh");
    text = text.replace(/g/g, "g");
    text = text.replace(/G/g, "gh");

    text = text.replace(/p/g, "p");
    text = text.replace(/P/g, "ph");
    text = text.replace(/b/g, "b");
    text = text.replace(/B/g, "bh");
    text = text.replace(/m/g, "m");

    text = text.replace(/w/g, "t");
    text = text.replace(/W/g, "th");
    text = text.replace(/x/g, "d");
    text = text.replace(/X/g, "dh");
    text = text.replace(/n/g, "n");

    text = text.replace(/rY/g, "ṟ");
    //text = text.replace(/rY/g, "\\b{r}");
    text = text.replace(/nY/g, "ṉ");
    //text = text.replace(/nY/g, "\\b{n}");
    text = text.replace(/N/g, "ṇ");
    //text = text.replace(/N/g, "\\d{n}");
    text = text.replace(/lYY/g, "ḻ");
    //text = text.replace(/lYY/g, "l");
    text = text.replace(/lY/g, "ḷ");
    text = text.replace(/s/g, "s");
    text = text.replace(/R/g, "ṣ");
    text = text.replace(/S/g, "ś");
    text = text.replace(/v/g, "v");
    text = text.replace(/y/g, "y");

    return text;
}